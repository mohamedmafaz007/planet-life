import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LoadingScreen from "./LoadingScreen";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const delay = isInitialLoad ? 2000 : 1500;
    
    setIsLoading(true);
    
    // Ensure scroll to top on route change while loading
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsInitialLoad(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div className={isLoading ? "h-screen overflow-hidden" : ""}>
        {children}
      </div>
    </>
  );
};

export default PageTransition;
