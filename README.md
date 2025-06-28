# Bitlogic.io - Corporate Website

🚀 **Modern corporate website for Bitlogic** - A company specialized in agile software development and digital transformation for educational institutions.

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [Build & Deployment](#build--deployment)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## 🎯 About

Bitlogic.io is a professional corporate website showcasing our expertise in software design, engineering, and agile development. We specialize in digital transformation solutions for educational institutions, helping them modernize their technological infrastructure and processes.

**Key Services:**
- Agile software development
- Digital transformation consulting
- Educational technology solutions
- Custom software engineering

## ✨ Features

- 📱 **Responsive Design** - Optimized for all devices
- 🚀 **Performance Optimized** - Built with Gatsby.js for blazing fast loading
- 📝 **Content Management** - Powered by Strapi headless CMS
- 📰 **Blog System** - Dynamic blog with categorization
- 🎨 **Modern UI/UX** - Built with Bootstrap 5 and custom Sass
- 🔍 **SEO Optimized** - Meta tags, sitemaps, and structured data
- 📊 **Analytics Ready** - Google Tag Manager integration
- 🌐 **Multilingual Support** - Spanish language optimization
- ♿ **Accessibility** - WCAG compliant components
- 🔧 **Developer Experience** - Hot reloading, linting, and formatting

## 🛠 Tech Stack

### Frontend
- **Framework**: [Gatsby.js 4.6+](https://www.gatsbyjs.com/) - React-based static site generator
- **UI Framework**: [Bootstrap 5.1+](https://getbootstrap.com/) - Responsive CSS framework
- **Styling**: [Sass](https://sass-lang.com/) - CSS preprocessor
- **Icons**: [FontAwesome](https://fontawesome.com/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Animations**: [React Lottie](https://github.com/chenqingspring/react-lottie)

### Backend & CMS
- **CMS**: [Strapi](https://strapi.io/) - Headless content management system
- **Image Processing**: Gatsby Sharp & Image plugins
- **Forms**: Custom React components with validation

### Development Tools
- **Package Manager**: [Yarn](https://yarnpkg.com/)
- **Code Formatting**: [Prettier](https://prettier.io/)
- **Build Tool**: [Webpack](https://webpack.js.org/)
- **Bundle Analysis**: Webpack Bundle Analyzer

### SEO & Analytics
- **SEO**: Gatsby SEO plugins with React Helmet
- **Analytics**: Google Tag Manager
- **Sitemap**: Automated sitemap generation
- **Robots.txt**: SEO optimization

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16.0 or higher) - [Download](https://nodejs.org/)
- **Yarn** (v1.22 or higher) - [Installation Guide](https://yarnpkg.com/getting-started/install)
- **Git** - [Download](https://git-scm.com/)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/bitlogic/bitlogic.io.git
   cd bitlogic.io
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.development
   # Edit .env.development with your configuration
   ```

4. **Start the development server**
   ```bash
   yarn develop
   ```

5. **Open your browser**
   Navigate to `http://localhost:8000` to see the site in development mode.

## 💻 Development

### Available Scripts

```bash
# Start development server with hot reloading
yarn develop

# Build the production site
yarn build

# Serve the production build locally
yarn serve

# Clean Gatsby cache and build artifacts
yarn clean

# Format code with Prettier
yarn format

# Run tests (when implemented)
yarn test
```

### Development Workflow

1. **Start development**: `yarn develop`
2. **Make your changes** in the `src/` directory
3. **Test locally** at `http://localhost:8000`
4. **GraphQL playground** available at `http://localhost:8000/___graphql`
5. **Format code** with `yarn format` before committing

### Hot Reloading

The development server includes hot reloading for:
- React components
- Sass/CSS styles
- GraphQL queries
- Gatsby configuration

## 🏗 Build & Deployment

### Production Build

```bash
# Create optimized production build
yarn build

# Serve production build locally for testing
yarn serve
```

### Environment Configuration

Create environment-specific files:
- `.env.development` - Development settings
- `.env.production` - Production settings

### Key Environment Variables

```bash
# Site configuration
SITE_URL=https://bitlogic.io
STRAPI_URL=https://your-strapi-instance.com

# Analytics (production only)
GTM_ID=GTM-XXXXXXX
ENV_PROD=produccion
```

## 📁 Project Structure

```
bitlogic.io/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Banner/         # Hero banners
│   │   ├── BlogPage/       # Blog-related components
│   │   ├── Footer/         # Site footer
│   │   ├── NavBar/         # Navigation
│   │   ├── HomePage/       # Home page components
│   │   └── ...
│   ├── pages/              # Gatsby pages (auto-routed)
│   │   ├── index.js        # Home page
│   │   ├── blog.js         # Blog listing
│   │   └── 404.js          # Not found page
│   ├── templates/          # Dynamic page templates
│   ├── styles/             # Global styles and Sass files
│   ├── images/             # Static images and assets
│   ├── constants/          # App constants and configuration
│   ├── context/            # React context providers
│   ├── hooks/              # Custom React hooks
│   └── schema/             # GraphQL schema definitions
├── static/                 # Static assets (served as-is)
├── gatsby-config.js        # Gatsby configuration
├── gatsby-node.js          # Gatsby Node APIs
├── gatsby-browser.js       # Gatsby Browser APIs
├── gatsby-ssr.js          # Server-side rendering config
└── package.json           # Dependencies and scripts
```

### Component Architecture

- **Atomic Design**: Components follow atomic design principles
- **Reusability**: Shared components in `/components`
- **Styling**: Each component has its own Sass file
- **Props**: Well-defined PropTypes for type checking

## 🌍 Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `SITE_URL` | Production site URL | Yes | - |
| `STRAPI_URL` | Strapi CMS API endpoint | Yes | - |
| `GTM_ID` | Google Tag Manager ID | No | - |
| `ENV_PROD` | Production environment flag | No | - |

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### Getting Started

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** following our coding standards
4. **Test thoroughly** in development mode
5. **Format your code**: `yarn format`
6. **Commit your changes**: `git commit -m 'Add amazing feature'`
7. **Push to your branch**: `git push origin feature/amazing-feature`
8. **Open a Pull Request**

### Coding Standards

- **JavaScript**: Follow ES6+ standards
- **React**: Use functional components with hooks
- **Styling**: Use Sass with BEM methodology
- **Formatting**: Use Prettier (run `yarn format`)
- **Commits**: Use conventional commit messages

### Code Review Process

1. All changes require a pull request
2. At least one code review approval
3. All CI checks must pass
4. No merge conflicts

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact & Support

- **Website**: [bitlogic.io](https://bitlogic.io)
- **Email**: info@bitlogic.io
- **LinkedIn**: [Bitlogic Company Page](https://www.linkedin.com/company/bitlogic.io)

---

**Built with ❤️ by the Bitlogic team** | Specialized in educational technology and digital transformation