document.addEventListener('DOMContentLoaded', () => {
    const contactBtn = document.querySelector('.btn-contact');
    
    if (contactBtn) {
        contactBtn.addEventListener('click', (e) => {
            const phone = "08161914924";
        });
    }
});

    const socialIcons = document.querySelectorAll('.icon-box');

socialIcons.forEach((icon) => {
    icon.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetUrl = icon.getAttribute('href');
        
        if (targetUrl) {
            window.open(targetUrl, '_blank');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const contactBtn = document.querySelector('.btn-contact');
    
    if (contactBtn) {
        contactBtn.addEventListener('click', (e) => {
            const phone = "08161914924";
        });
    }

    const socialIcons = document.querySelectorAll('.icon-box');

socialIcons.forEach((icon) => {
    icon.addEventListener('click', (e) => {
        e.preventDefault();

        const targetUrl = icon.getAttribute('href');
        
        if (targetUrl) {
            window.open(targetUrl, '_blank');
        }
    });
});

    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("img01");
    const closeBtn = document.querySelector(".close-modal");

    document.querySelectorAll('.zoomable-img, .gallery-img').forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = "none";
        });
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    }
});

    const galleryData = [
    { image: "image/gmaps.webp",
      title:"Logo"
    },
    { image: "image/Panggung.webp",
      title:"Logo"
    },
    { image: "image/tim adr tenda.webp",
      title:"Logo"
    }
];

let eventIndex = 0;

const galleryImg = document.querySelector('.gallery-img');
const eventPrevBtn = document.getElementById('eventPrevBtn');
const eventNextBtn = document.getElementById('eventNextBtn');
const eventCardWrapper = document.querySelector('.gallery-card'); 

if (eventCardWrapper) {
    eventCardWrapper.style.transition = 'opacity 0.2s ease-in-out';
}

function updateEventSlider(index) {
    if (!galleryImg || !eventCardWrapper) return;
    
    eventCardWrapper.style.opacity = 0;
    
    setTimeout(() => {
        galleryImg.src = galleryData[index].image;
        eventCardWrapper.style.opacity = 1;
    }, 150);
}

if (eventNextBtn && eventPrevBtn) {
    eventNextBtn.addEventListener('click', () => {
        eventIndex = (eventIndex + 1) % galleryData.length;
        updateEventSlider(eventIndex);
    });

    eventPrevBtn.addEventListener('click', () => {
        eventIndex = (eventIndex - 1 + galleryData.length) % galleryData.length;
        updateEventSlider(eventIndex);
    });
}
