document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".story-card");

  // Fallback jika browser tidak mendukung animasi scroll
  if (!("IntersectionObserver" in window)) {
    cards.forEach(function (card) {
      card.classList.add("visible");
    });

    return;
  }

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  cards.forEach(function (card) {
    observer.observe(card);
  });
});
