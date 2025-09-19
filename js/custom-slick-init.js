// Ensure jQuery is loaded
if (typeof jQuery === "undefined") {
    console.error("jQuery isn't loaded. Load it before this script.");
  }
  
  $(document).ready(function () {
    // Initialize Slick Carousel on likely targets
    function initSlickCarousel() {
      $("div[data-slick]:not(.slick-initialized)").slick();
    }
  
    // Check if dynamic content has loaded
    function isDynamicContentLoaded() {
      return $('[data-dynamic=true]').length > 0;
    }
  
    // Initialize Slick if dynamic content has loaded
    if (isDynamicContentLoaded()) {
      initSlickCarousel();
    } else {
      // Wait for dynamic content to load
      var dynamicContentInterval = setInterval(function () {
        if (isDynamicContentLoaded()) {
          clearInterval(dynamicContentInterval);
          initSlickCarousel();
        }
      }, 100); // Check every 100ms
    }
  });
  