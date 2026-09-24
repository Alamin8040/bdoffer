document.addEventListener("DOMContentLoaded", function () {

  // =========================
  // Smooth scroll
  // =========================
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");

      if (targetId && targetId !== "#") {
        const target = document.querySelector(targetId);

        if (target) {
          e.preventDefault();

          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      }
    });
  });


  // =========================
  // Offer button click
  // =========================
  document.querySelectorAll(".buy-btn").forEach(function (button) {

    button.addEventListener("click", function () {

      const card = this.closest(".offer-card");

      if (!card) return;

      const offerName = card.querySelector("h3")
        ? card.querySelector("h3").innerText
        : "Offer";

      const price = card.querySelector(".price strong")
        ? card.querySelector(".price strong").innerText
        : "";

      const message =
        "আসসালামু আলাইকুম। আমি এই অফারটি নিতে চাই:%0A%0A" +
        "📦 অফার: " + offerName + "%0A" +
        "💰 মূল্য: " + price + "%0A%0A" +
        "দয়া করে অর্ডারটি প্রসেস করে দিন।";

      // এখানে পরে তোমার আসল WhatsApp নম্বর বসাবো
      const whatsappNumber = "8801000000000";

      const whatsappURL =
        "https://wa.me/" + whatsappNumber + "?text=" + message;

      window.open(whatsappURL, "_blank");
    });

  });


  // =========================
  // Operator card click
  // =========================
  document.querySelectorAll(".operator-card").forEach(function (card) {

    card.addEventListener("click", function () {

      const targetSection = document.querySelector("#internet");

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }

    });

  });


  // =========================
  // Current year
  // =========================
  const yearElement = document.querySelector("#year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

});
