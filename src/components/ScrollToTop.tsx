import { useEffect } from "react";

function ScrollToTop() {
  useEffect(() => {
    // Scroll to top on initial load
    window.scrollTo(0, 0);

    // Watch for URL changes
    const handleUrlChange = () => {
      window.scrollTo(0, 0);
    };

    // Listen for both popstate (browser back/forward) and pushState (programmatic navigation)
    window.addEventListener("popstate", handleUrlChange);
    const originalPushState = window.history.pushState;
    window.history.pushState = function () {
      originalPushState.apply(this, arguments as any);
      handleUrlChange();
    };

    return () => {
      window.removeEventListener("popstate", handleUrlChange);
      window.history.pushState = originalPushState;
    };
  }, []);

  return null;
}

export default ScrollToTop;
