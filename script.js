const artwork = document.querySelector(".character-image img");
const modal = document.getElementById("artModal");
const closeBtn = document.querySelector(".close-modal");

artwork.addEventListener("click", () => {
    modal.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {

    if(e.target === modal){
        modal.classList.remove("active");
    }

});

document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".social-card")
    .forEach(card => {

        card.addEventListener("click", () => {

            const url =
            card.querySelector(".social-link").dataset.url;

            window.open(url, "_blank");

        });

    });

});

const constellationImages =
document.querySelectorAll(".constellation-img");

const modal =
document.getElementById("constellationModal");

const modalImg =
document.getElementById("modalImg");

const closeModal =
document.querySelector(".modal-close");

constellationImages.forEach(img => {

    img.addEventListener("click", () => {

        modal.classList.add("active");

        modalImg.src = img.src;

    });

});

closeModal.addEventListener("click", () => {

    modal.classList.remove("active");

});

modal.addEventListener("click", (e) => {

    if(e.target === modal){
        modal.classList.remove("active");
    }

});

document.addEventListener("DOMContentLoaded", () => {

    const constellationImages =
        document.querySelectorAll(".constellation-img");

    const modal =
        document.getElementById("constellationModal");

    const modalImg =
        document.getElementById("modalImg");

    const closeModal =
        document.querySelector(".modal-close");

    constellationImages.forEach(img => {

        img.addEventListener("click", () => {

            modal.classList.add("active");
            modalImg.src = img.src;

        });

    });

    closeModal.addEventListener("click", () => {

        modal.classList.remove("active");

    });

});

document.addEventListener("DOMContentLoaded", () => {

    // ===== Artwork popup (character image) =====
    const artwork = document.querySelector(".character-image img");
    const artModal = document.getElementById("artModal");
    const closeArtModal = document.querySelector(".close-modal");

    if (artwork && artModal) {
        artwork.addEventListener("click", () => {
            artModal.classList.add("active");
        });
    }

    if (closeArtModal && artModal) {
        closeArtModal.addEventListener("click", () => {
            artModal.classList.remove("active");
        });
    }

    if (artModal) {
        artModal.addEventListener("click", (e) => {
            if (e.target === artModal) {
                artModal.classList.remove("active");
            }
        });
    }

    // ===== Social card click =====
    document.querySelectorAll(".social-card").forEach(card => {
        card.addEventListener("click", () => {
            const url = card.querySelector(".social-link").dataset.url;
            window.open(url, "_blank");
        });
    });

    // ===== Gallery popup (My Gallery images) =====
    const galleryImages = document.querySelectorAll(".constellation-img");
    const galleryModal = document.getElementById("constellationModal");
    const galleryModalImg = document.getElementById("modalImg");
    const closeGalleryModal = document.querySelector(".modal-close");

    galleryImages.forEach(img => {
        img.addEventListener("click", () => {
            galleryModal.classList.add("active");
            galleryModalImg.src = img.src;
        });
    });

    closeGalleryModal.addEventListener("click", () => {
        galleryModal.classList.remove("active");
    });

    galleryModal.addEventListener("click", (e) => {
        if (e.target === galleryModal) {
            galleryModal.classList.remove("active");
        }
    });

});