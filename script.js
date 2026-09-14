const videoShell = document.querySelector(".video-shell");
const youtubeId = videoShell.dataset.youtubeId;

if (youtubeId && youtubeId !== "PON_AQUI_EL_ID") {
  const iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(youtubeId)}?rel=0`;
  iframe.title = "Video para la boda de Carlos";
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.referrerPolicy = "strict-origin-when-cross-origin";
  iframe.allowFullscreen = true;
  videoShell.replaceChildren(iframe);
}

const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox.querySelector("img");
const closeButton = lightbox.querySelector(".lightbox__close");

document.querySelectorAll(".photo").forEach((photo) => {
  photo.addEventListener("click", () => {
    lightboxImage.src = photo.dataset.image;
    lightboxImage.alt = photo.dataset.alt;
    lightbox.showModal();
  });
});

closeButton.addEventListener("click", () => lightbox.close());

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});
