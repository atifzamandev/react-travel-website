import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    //  setTimeout(()=>window.scrollTo(0, 0));

    // setTimeout(function() {window.scrollTo(0, 0);},1)

    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default useScrollToTop;
