const cards = [...document.querySelectorAll(".gallery-card")];
const dialog = document.querySelector(".lightbox");
const image = dialog.querySelector("img");
const caption = dialog.querySelector("figcaption");
let activeIndex = 0;

function showScreenshot(index) {
  activeIndex = (index + cards.length) % cards.length;
  const card = cards[activeIndex];
  const source = card.querySelector("img");
  image.src = source.src;
  image.alt = source.alt;
  caption.textContent = card.querySelector("strong").textContent;
}

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    showScreenshot(index);
    dialog.showModal();
  });
});

dialog.querySelector(".close").addEventListener("click", () => dialog.close());
dialog.querySelector(".previous").addEventListener("click", () => showScreenshot(activeIndex - 1));
dialog.querySelector(".next").addEventListener("click", () => showScreenshot(activeIndex + 1));
dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
document.addEventListener("keydown", event => {
  if (!dialog.open) return;
  if (event.key === "ArrowLeft") showScreenshot(activeIndex - 1);
  if (event.key === "ArrowRight") showScreenshot(activeIndex + 1);
});
