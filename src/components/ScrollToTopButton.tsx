import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-10 z-50" aria-label="Scroll to top">
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        type="button"
        className={`nes-btn custom-shadow ${!showButton ? 'is-disabled' : 'is-error'}`}
        aria-label="Scroll to top"
        disabled={!showButton}
      >
        <span className="inline-block rotate-90">{'<'}</span>
      </button>
    </div>
  );
};

export default ScrollToTopButton;
