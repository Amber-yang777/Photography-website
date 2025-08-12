// Main JavaScript for Photography Portfolio

class PhotographyPortfolio {
    constructor() {
        this.currentFilter = 'all';
        this.currentLightboxIndex = 0;
        this.filteredItems = [...galleryData];
        this.itemsPerPage = 12;
        this.currentPage = 1;
        this.isLoading = false;
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.handleLoading();
        this.renderGallery();
        this.updateStats();
        this.setupScrollAnimations();
        this.setupNavbar();
    }
    
    setupEventListeners() {
        // Navigation
        const navLinks = document.querySelectorAll('.nav-link');
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                this.scrollToSection(targetId);
                this.updateActiveNavLink(link);
                
                // Close mobile menu if open
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
        
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Filter buttons
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.getAttribute('data-filter');
                this.filterGallery(filter);
                this.updateActiveFilterButton(btn);
            });
        });
        
        // Load more button
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                this.loadMoreItems();
            });
        }
        
        // Contact form
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleContactForm();
            });
        }
        
        // Lightbox
        this.setupLightbox();
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                this.prevLightboxImage();
            } else if (e.key === 'ArrowRight') {
                this.nextLightboxImage();
            }
        });
        
        // Scroll indicators
        const scrollIndicators = document.querySelectorAll('.scroll-indicator, .hero-buttons a[href="#gallery"]');
        scrollIndicators.forEach(indicator => {
            indicator.addEventListener('click', (e) => {
                e.preventDefault();
                this.scrollToSection('#gallery');
            });
        });
        
        // Smooth scrolling for internal links
        const internalLinks = document.querySelectorAll('a[href^="#"]');
        internalLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                if (targetId && targetId !== '#') {
                    this.scrollToSection(targetId);
                }
            });
        });
    }
    
    handleLoading() {
        const loadingScreen = document.getElementById('loadingScreen');
        
        // Simulate loading time
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            
            // Remove loading screen from DOM after transition
            setTimeout(() => {
                if (loadingScreen.parentNode) {
                    loadingScreen.parentNode.removeChild(loadingScreen);
                }
            }, 500);
        }, 2000);
    }
    
    scrollToSection(targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
    
    updateActiveNavLink(activeLink) {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => link.classList.remove('active'));
        activeLink.classList.add('active');
    }
    
    setupNavbar() {
        const navbar = document.getElementById('navbar');
        const navLinks = document.querySelectorAll('.nav-link');
        
        window.addEventListener('scroll', () => {
            // Add scrolled class to navbar
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            // Update active nav link based on scroll position
            const sections = document.querySelectorAll('section[id]');
            let currentSection = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionBottom = sectionTop + section.offsetHeight;
                
                if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                    currentSection = section.id;
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('active');
                }
            });
        });
    }
    
    renderGallery() {
        const galleryGrid = document.getElementById('galleryGrid');
        if (!galleryGrid) return;
        
        // Clear existing items
        galleryGrid.innerHTML = '';
        
        // Get items to display
        const itemsToShow = this.filteredItems.slice(0, this.currentPage * this.itemsPerPage);
        
        itemsToShow.forEach((item, index) => {
            const galleryItem = this.createGalleryItem(item, index);
            galleryGrid.appendChild(galleryItem);
            
            // Add animation delay
            setTimeout(() => {
                galleryItem.style.animationDelay = `${index * 0.1}s`;
            }, 100);
        });
        
        // Update load more button
        this.updateLoadMoreButton();
    }
    
    createGalleryItem(item, index) {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item fade-in';
        galleryItem.setAttribute('data-category', item.category);
        
        galleryItem.innerHTML = `
            <img src="${item.image}" alt="${item.alt}" class="gallery-image" loading="lazy">
            <div class="gallery-overlay">
                <h3 class="gallery-title">${item.title}</h3>
                <span class="gallery-category">${categories[item.category]?.name || item.category}</span>
                <p class="gallery-description">${item.description}</p>
            </div>
        `;
        
        // Add click event to open lightbox
        galleryItem.addEventListener('click', () => {
            this.openLightbox(index);
        });
        
        return galleryItem;
    }
    
    filterGallery(filter) {
        this.currentFilter = filter;
        this.currentPage = 1;
        
        if (filter === 'all') {
            this.filteredItems = [...galleryData];
        } else {
            this.filteredItems = galleryData.filter(item => item.category === filter);
        }
        
        this.renderGallery();
    }
    
    updateActiveFilterButton(activeBtn) {
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => btn.classList.remove('active'));
        activeBtn.classList.add('active');
    }
    
    loadMoreItems() {
        if (this.isLoading) return;
        
        this.isLoading = true;
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        
        // Show loading state
        loadMoreBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 加载中...';
        loadMoreBtn.disabled = true;
        
        // Simulate loading delay
        setTimeout(() => {
            this.currentPage++;
            this.renderGallery();
            this.isLoading = false;
            
            // Reset button
            loadMoreBtn.innerHTML = '<i class="fas fa-plus"></i> 加载更多';
            loadMoreBtn.disabled = false;
        }, 800);
    }
    
    updateLoadMoreButton() {
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        const totalItems = this.filteredItems.length;
        const displayedItems = this.currentPage * this.itemsPerPage;
        
        if (displayedItems >= totalItems) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-flex';
        }
    }
    
    updateStats() {
        // Update the stats in about section
        const statNumbers = document.querySelectorAll('.stat-number');
        if (statNumbers.length >= 3) {
            statNumbers[0].textContent = `${portfolioStats.totalPhotos}+`;
            statNumbers[1].textContent = portfolioStats.categories;
            statNumbers[2].textContent = portfolioStats.quality;
        }
    }
    
    setupLightbox() {
        const lightbox = document.getElementById('lightbox');
        const lightboxClose = document.getElementById('lightboxClose');
        const lightboxPrev = document.getElementById('lightboxPrev');
        const lightboxNext = document.getElementById('lightboxNext');
        
        lightboxClose.addEventListener('click', () => {
            this.closeLightbox();
        });
        
        lightboxPrev.addEventListener('click', () => {
            this.prevLightboxImage();
        });
        
        lightboxNext.addEventListener('click', () => {
            this.nextLightboxImage();
        });
        
        // Close lightbox when clicking outside image
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                this.closeLightbox();
            }
        });
    }
    
    openLightbox(index) {
        const lightbox = document.getElementById('lightbox');
        this.currentLightboxIndex = index;
        this.updateLightboxContent();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    closeLightbox() {
        const lightbox = document.getElementById('lightbox');
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    updateLightboxContent() {
        const currentItem = this.filteredItems[this.currentLightboxIndex];
        if (!currentItem) return;
        
        const lightboxImage = document.getElementById('lightboxImage');
        const lightboxTitle = document.getElementById('lightboxTitle');
        const lightboxDescription = document.getElementById('lightboxDescription');
        const lightboxCategory = document.getElementById('lightboxCategory');
        
        lightboxImage.src = currentItem.image;
        lightboxImage.alt = currentItem.alt;
        lightboxTitle.textContent = currentItem.title;
        lightboxDescription.textContent = currentItem.description;
        lightboxCategory.textContent = categories[currentItem.category]?.name || currentItem.category;
    }
    
    prevLightboxImage() {
        if (this.currentLightboxIndex > 0) {
            this.currentLightboxIndex--;
            this.updateLightboxContent();
        }
    }
    
    nextLightboxImage() {
        if (this.currentLightboxIndex < this.filteredItems.length - 1) {
            this.currentLightboxIndex++;
            this.updateLightboxContent();
        }
    }
    
    handleContactForm() {
        const form = document.getElementById('contactForm');
        const formData = new FormData(form);
        const submitBtn = form.querySelector('button[type="submit"]');
        
        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 发送中...';
        submitBtn.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            // Show success message
            this.showNotification('消息发送成功！我们会尽快回复您。', 'success');
            
            // Reset form
            form.reset();
            
            // Reset button
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> 发送消息';
            submitBtn.disabled = false;
        }, 2000);
    }
    
    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i>
                <span>${message}</span>
            </div>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : '#3b82f6'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after delay
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 4000);
    }
    
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
        
        // Observe gallery items and other animated elements
        const animatedElements = document.querySelectorAll('.fade-in, .gallery-item');
        animatedElements.forEach(el => {
            observer.observe(el);
        });
    }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Image loading optimization
function optimizeImages() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.addEventListener('load', () => {
                        img.classList.add('loaded');
                    });
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Initialize portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PhotographyPortfolio();
    optimizeImages();
});

// Handle window resize
window.addEventListener('resize', debounce(() => {
    // Recalculate layout if needed
    const navMenu = document.getElementById('navMenu');
    const hamburger = document.getElementById('hamburger');
    
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
}, 300));

// Performance optimization
window.addEventListener('load', () => {
    // Remove loading styles after everything is loaded
    document.body.classList.add('loaded');
});

// Add CSS for loading and notification styles
const additionalStyles = `
    <style>
        .loaded .gallery-item {
            transform: translateY(0);
            opacity: 1;
        }
        
        .gallery-image.loaded {
            opacity: 1;
            transform: scale(1);
        }
        
        .notification {
            font-family: 'Inter', sans-serif;
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .notification-content i {
            font-size: 1.2rem;
        }
        
        @media (max-width: 480px) {
            .notification {
                right: 10px;
                left: 10px;
                top: 10px;
            }
        }
    </style>
`;

document.head.insertAdjacentHTML('beforeend', additionalStyles);