const gallery = [
  { name: "Buenos Aires", place: "Argentina", src: "img/photobook-026.png" },
  { name: "Italia", place: "Europa", src: "img/photobook-024.png" },
  { name: "Rapa Nui", place: "Chile", src: "img/photobook-028.png" },
  {
    name: "Tailandia",
    place: "Sudeste Asiático",
    src: "img/photobook-030.png",
  },
  { name: "Grecia", place: "Atenas & Mykonos", src: "img/photobook-032.png" },
  { name: "Europa", place: "Edición de viaje", src: "img/photobook-034.png" },
  {
    name: "Caribe",
    place: "Aruba, Curaçao, Colombia & Panamá",
    src: "img/photobook-036.png",
  },
  { name: "Perú", place: "Machu Picchu & Cusco", src: "img/photobook-037.png" },
  { name: "New York", place: "City", src: "img/photobook-039.png" },
  {
    name: "Italia",
    place: "Roma, Assisi, Naples, Capri & Bari",
    src: "img/photobook-041.png",
  },
  { name: "Cartagena", place: "De Indias", src: "img/photobook-043.png" },
  {
    name: "Caribe & Rapa Nui",
    place: "Edición de viaje",
    src: "img/photobook-045.png",
  },
];

const whatsappButton = document.getElementById("whatsapp-button");

if (whatsappButton) {
  whatsappButton.addEventListener("click", (event) => {
    event.preventDefault();

    const mensaje =
      "Hola Trini! quiero un Photobook " + String.fromCodePoint(0x2728);

    const whatsappUrl =
      "https://wa.me/56957630091?text=" + encodeURIComponent(mensaje);

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  });
}

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");

menuToggle?.addEventListener("click", () => {
  const open = mobileMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
});

document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Abrir menú");
  });
});

const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxCaption = document.querySelector("#lightbox-caption");
const lightboxCount = document.querySelector("#lightbox-count");
let currentIndex = 0;
let touchStartX = null;

function openLightbox(index) {
  currentIndex = index;
  const item = gallery[currentIndex];
  lightboxImage.src = item.src;
  lightboxImage.alt = `Portada ampliada del photobook ${item.name}`;
  lightboxCaption.textContent = `${item.name} · ${item.place}`;
  lightboxCount.textContent = `${currentIndex + 1} / ${gallery.length}`;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function changeLightbox(direction) {
  currentIndex = (currentIndex + direction + gallery.length) % gallery.length;
  openLightbox(currentIndex);
}

document.querySelectorAll("[data-lightbox]").forEach((button) => {
  button.addEventListener("click", () =>
    openLightbox(Number(button.dataset.lightbox)),
  );
});

document
  .querySelector(".lightbox-close")
  ?.addEventListener("click", closeLightbox);
document
  .querySelector(".lightbox-prev")
  ?.addEventListener("click", () => changeLightbox(-1));
document
  .querySelector(".lightbox-next")
  ?.addEventListener("click", () => changeLightbox(1));

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

lightbox?.addEventListener(
  "touchstart",
  (event) => {
    touchStartX = event.touches[0]?.clientX ?? null;
  },
  { passive: true },
);

lightbox?.addEventListener(
  "touchend",
  (event) => {
    if (touchStartX === null) return;
    const endX = event.changedTouches[0]?.clientX;
    if (endX !== undefined && Math.abs(touchStartX - endX) > 45) {
      changeLightbox(touchStartX > endX ? 1 : -1);
    }
    touchStartX = null;
  },
  { passive: true },
);

document.addEventListener("keydown", (event) => {
  if (!lightbox.classList.contains("open")) return;
  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowLeft") changeLightbox(-1);
  if (event.key === "ArrowRight") changeLightbox(1);
});

/* ---------------------------------------------------------
   INSTRUCTIVO WE TRANSFER
   --------------------------------------------------------- */

const wetransferHelp = document.querySelector(".wetransfer-help");
const wetransferToggle = document.querySelector(".wetransfer-help-toggle");

wetransferToggle?.addEventListener("click", () => {
  const isOpen = wetransferHelp.classList.toggle("open");

  wetransferToggle.setAttribute("aria-expanded", String(isOpen));
});

/* ---------------------------------------------------------
   ANIMACIÓN FAQ
   --------------------------------------------------------- */

document.querySelectorAll(".faq-list details").forEach((faq) => {
  const summary = faq.querySelector("summary");

  summary?.addEventListener("click", (event) => {
    event.preventDefault();

    const isOpen = faq.classList.contains("is-open");

    if (!isOpen) {
      // Abrir
      faq.classList.remove("is-closing");
      faq.classList.add("is-open");
      faq.open = true;
    } else {
      // Cerrar
      faq.classList.remove("is-open");
      faq.classList.add("is-closing");

      setTimeout(() => {
        faq.open = false;
        faq.classList.remove("is-closing");
      }, 450);
    }
  });
});
