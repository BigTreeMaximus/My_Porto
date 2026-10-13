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
    { image:"image/Kipas Blower dan Kursi Futura.webp",
      title:"Kursi Futura dan Kipas Blower"
    },
    { image:"image/Meja Gubugan (1).webp",
      title:"Meja Gubugan"
    },
    { image:"image/AC Berdiri.webp",
      title:"Standing AC"
    },
    { image:"image/Kursi kayu ukir (Vip) (1).webp",
      title:"Kursi Kayu Ukir"
    },
    { image:"image/Persewaan Karpet +Ac (1).webp",
      title:"Karpet"
    },
    { image:"image/Standing Flowers.webp",
      title:"Standing Flower"
    },
    { image:"image/Contoh model pelaminan (1).webp",
      title:"Model Pelaminan"
    },
    { image:"image/Dekorasi pintu masuk (1).webp",
      title:"Dekorasi Pintu Masuk"
    },
    { image:"image/Kursi lipat chitose (1).webp",
      title:"Kursi Lipat Chitose"
    },
    { image:"image/Kursi cover.webp",
      title:"Kursi Plastik Non Cover dan Kursi Plastik Cover"
    },
    { image:"image/Kotak Amplop.webp",
      title:"Model Kotak Amplop"
    },
    { image:"image/Kembang dekorasi.webp",
      title:"Kembang Dekorasi"
    }
    
];

let eventIndex = 0;

const galleryImg = document.querySelector('.gallery-img');
const galleryTitle = document.querySelector('.gallery-info h3');
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
        galleryTitle.textContent = galleryData[index].title;
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
