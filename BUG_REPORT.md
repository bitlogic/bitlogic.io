# Bug Report - Gatsby Project

## High Priority Issues

### 1. **Server-Side Rendering (SSR) Issues**
Several components access `window` directly during initialization, which can cause hydration mismatches and errors during Gatsby's static generation.

**Files affected:**
- `src/components/NavBar/AnimatedNavBar/DropdownContainer/DropdownItems.js:90`
  ```javascript
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 1200);
  ```
  **Impact:** Will throw error during build time as `window` is undefined on server
  **Fix:** Add conditional check or use `useEffect` to set initial state

### 2. **Potential XSS Vulnerabilities** 
Multiple components use `dangerouslySetInnerHTML` without proper sanitization, potentially exposing the application to XSS attacks.

**Files affected:**
- `src/templates/BlogItemDetail.js:60`
- `src/components/Text/Text.js:20`
- `src/components/Banner/Banner.js:38`
- `src/components/DualSection/DualSection.js:43`
- `src/components/expandGrid/ExpandGrid.js:167`
- `src/components/quote/Quote.js:66,81`
- `src/components/ListItems/ListItems.js:28`
- `src/components/BlogPage/BlogArticle/BlogArticle.js:21`
- `src/components/DualSection/OneSection.js:35`
- `src/components/Form/PipedriveForm.js:30`

**Impact:** If user-generated content is not properly sanitized, it could lead to XSS attacks

### 3. **Incorrect MarkdownView Usage**
In `src/components/Text/Text.js:19-22`, `MarkdownView` is used incorrectly with `dangerouslySetInnerHTML`:
```javascript
<MarkdownView
  markdown={text}
  dangerouslySetInnerHTML={{ __html: text }}
/>
```
**Issue:** `dangerouslySetInnerHTML` should not be used with `MarkdownView` component as it handles HTML rendering internally.

### 4. **React Key Missing in Fragment**
In `src/components/expandGrid/ExpandGrid.js:244-261`, React Fragments in map function lack proper keys:
```javascript
{itemsArray.items.map(item => {
  return (
    <> {/* Missing key prop */}
      {item.id === itemsArray.focused ? (
        <ExpandedListItem key={item.id} ... />
      ) : (
        <ListItem key={item.id} ... />
      )}
    </>
  )
})}
```
**Fix:** Remove unnecessary Fragment or add key to Fragment

## Medium Priority Issues

### 5. **Memory Leak Risk - Uncleaned setTimeout**
In `src/components/expandGrid/ExpandGrid.js:139`, there's a `setTimeout` that might not be cleaned up:
```javascript
setTimeout(() => {
  el.classList.add("animated-in")
}, 400)
```
**Risk:** If component unmounts before timeout executes, could cause memory leaks

### 6. **Direct DOM Access Without SSR Check**
In `src/context/themeContext.js:18`, direct DOM access without SSR safety:
```javascript
document.getElementById("style-context").className = theme
```
**Issue:** Could throw error during SSR

### 7. **Potential Performance Issues**
Multiple unnecessary re-renders due to:
- Missing dependency arrays in some `useEffect` hooks
- Object creation in render methods without `useMemo`

## Low Priority Issues

### 8. **Debug Code Left in Production**
Console warning left in production code:
- `src/components/FaIcon/FaIcon.js:21`
  ```javascript
  console.warn(`Icono no encontrado: type=${type}, code=${code}`)
  ```

### 9. **Code Quality Issues**

#### Unused Variables and Dead Code:
- `src/components/videoBackground/VideoBackground.js:59-61` - Commented out code
- `src/components/expandGrid/ExpandGrid.js:266` - Unused `scrollToRef` prop

#### Inconsistent Error Handling:
- Many functions return `null` on error without proper error boundaries

## Recommendations

### Immediate Actions:
1. **Fix SSR Issues:** Wrap all `window`/`document` access in conditional checks
2. **Sanitize HTML:** Implement proper HTML sanitization for all `dangerouslySetInnerHTML` usage
3. **Fix MarkdownView:** Remove incorrect usage of `dangerouslySetInnerHTML` with `MarkdownView`

### Medium-term Improvements:
1. **Add Error Boundaries:** Implement React error boundaries for better error handling
2. **Memory Leak Prevention:** Ensure all timeouts and event listeners are properly cleaned up
3. **Performance Optimization:** Add proper dependency arrays and memoization where needed

### Code Quality:
1. **Remove Debug Code:** Remove all console statements from production code
2. **Add Linting Rules:** Implement ESLint rules to catch these issues automatically
3. **TypeScript Migration:** Consider migrating to TypeScript for better type safety

## Testing Recommendations
1. Test SSR rendering with `gatsby build`
2. Security audit for XSS vulnerabilities
3. Performance testing with large datasets
4. Mobile responsiveness testing

## Tools to Prevent Future Issues
- ESLint with React hooks plugin
- Prettier for code formatting
- react-helmet for safe document manipulation
- DOMPurify for HTML sanitization