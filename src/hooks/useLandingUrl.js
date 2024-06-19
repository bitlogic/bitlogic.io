import { useMemo } from "react";
import useNavbar from "./useNavbar";

const useLandingUrl = () => {
  const landings = useNavbar().allStrapiLandingPage.nodes;

  const getUrl = useMemo(() => {
    const memoizedGetUrl = (slug) => {
      const landing = landings.find((node) => node.slug === slug);

      if (!landing) return '';

      if (landing.parent_page) {
        const parentPage = landings.find((node) => node.slug === landing.parent_page.slug);
        const parentUrl = memoizedGetUrl(parentPage.slug); // Usamos la versión memoizada de getUrl
        return `${parentUrl}/${landing.slug}`;
      }

      return `/${landing.slug}`;
    };

    return memoizedGetUrl;
  }, [landings]);

  return getUrl;
};

export default useLandingUrl;