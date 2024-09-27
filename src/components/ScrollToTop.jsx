import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button 
          onClick={scrollToTop} 
          className="scroll-to-top" 
          style={{ 
            position: 'fixed', 
            bottom: '30px', 
            right: '30px', 
            padding: '10px 20px', 
            backgroundColor: '#ff4b2b', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '50px', 
            cursor: 'pointer', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', 
            fontSize: '16px', 
            zIndex: 1000 
          }}
        >
          ↑ Volver arriba
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
