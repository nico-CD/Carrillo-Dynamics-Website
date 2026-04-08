import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const prevPath = import.meta.env.SSR ? { current: "" } : (window as any).__prevPath || { current: "" };

  useEffect(() => {
    const cleanPrev = prevPath.current.replace(/^\/(en|es)/, "");
    const cleanCurr = pathname.replace(/^\/(en|es)/, "");

    if (cleanPrev !== cleanCurr) {
      window.scrollTo(0, 0);
    }
    prevPath.current = pathname;
    if (!(window as any).__prevPath) (window as any).__prevPath = prevPath;
  }, [pathname]);

  return null;
};

export default ScrollToTop;
