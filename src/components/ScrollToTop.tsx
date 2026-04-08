import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const prevPath = import.meta.env.SSR ? { current: "" } : (window as any).__prevPath || { current: "" };

  useEffect(() => {
    const cleanPrev = prevPath.current.replace(/^\/(en|es)/, "");
    const cleanCurr = pathname.replace(/^\/(en|es)/, "");

    // Only scroll to top if the path changed and there's no hash
    if (cleanPrev !== cleanCurr && !hash) {
      window.scrollTo(0, 0);
    }
    
    // If there's a hash, scroll to the element
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Small delay to ensure content is rendered
      }
    }

    prevPath.current = pathname;
    if (!(window as any).__prevPath) (window as any).__prevPath = prevPath;
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
