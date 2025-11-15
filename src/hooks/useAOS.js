import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Ensure CSS is imported (already in main.jsx, but safe to have here if needed)

/**
 * Custom hook to initialize or refresh AOS (Animate on Scroll) in components.
 * Useful for dynamic content or when you need to re-init AOS after updates.
 * @param {Object} options - AOS configuration options
 * @param {boolean} refresh - Whether to refresh AOS (default: false)
 */
const useAOS = (options = {}, refresh = false) => {
  useEffect(() => {
    // Default options if none provided
    const aosOptions = {
      duration: 1000,
      once: true,
      offset: 100,
      ...options
    };

    // Initialize AOS if not already done
    if (!AOS.isInitialized()) {
      AOS.init(aosOptions);
    }

    // Refresh if requested (e.g., after adding new elements dynamically)
    if (refresh) {
      AOS.refresh();
    }

    // Cleanup: Refresh on unmount if needed
    return () => {
      if (refresh) {
        AOS.refreshHard(); // Hard refresh for complex cases
      }
    };
  }, [options, refresh]); // Re-run if options or refresh change
};

export default useAOS;