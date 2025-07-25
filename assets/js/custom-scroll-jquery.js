$(document).ready(function () {
  // If the URL has a hash (e.g., #diabetic-foot-ulcers)
  if (window.location.hash) {
    const hash = window.location.hash;

    // Wait a bit in case the section needs to render
    setTimeout(function () {
      const target = $(hash);
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          800
        );
      }
    }, 300); // Delay helps for slower render/load
  }
});
