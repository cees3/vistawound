$(document).ready(function () {
  if (window.location.hash) {
    const hash = window.location.hash;

    setTimeout(function () {
      const target = $(hash);
      if (target.length) {
        const offset = target.offset().top - 120; // Adjust this value as needed (e.g., 100–150)

        $("html, body").animate(
          {
            scrollTop: offset,
          },
          800
        );
      }
    }, 300);
  }
});
