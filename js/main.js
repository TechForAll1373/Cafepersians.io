// Feature details data
const featureDetails = {
    'link-extraction': {
        title: 'Link Extraction',
        content: `
            <p>Our advanced link extraction tool provides comprehensive URL analysis and extraction capabilities:</p>
            <ul>
                <li>Deep crawling of websites to extract all links</li>
                <li>Categorization of links by type (internal, external, etc.)</li>
                <li>Validation of links for accessibility and status</li>
                <li>SEO analysis of each extracted link</li>
                <li>Export functionality for extracted data</li>
            </ul>
            <p>This tool is essential for website audits, competitive analysis, and SEO optimization.</p>
        `
    },
    'seo-optimization': {
        title: 'SEO Optimization',
        content: `
            <p>Complete SEO optimization toolkit to improve your website's search engine rankings:</p>
            <ul>
                <li>Meta tag analysis and optimization</li>
                <li>Keyword research and density analysis</li>
                <li>Content optimization recommendations</li>
                <li>Performance optimization for faster loading</li>
                <li>Mobile-friendliness assessment</li>
                <li>Backlink analysis and monitoring</li>
            </ul>
            <p>Our SEO tools help you achieve better visibility and higher rankings in search results.</p>
        `
    },
    'security': {
        title: 'Security First',
        content: `
            <p>Enterprise-grade security features to protect your data and ensure privacy:</p>
            <ul>
                <li>End-to-end encryption for all data transfers</li>
                <li>No CORS proxy restrictions for direct connections</li>
                <li>Permanent network connectivity with failover support</li>
                <li>Regular security audits and updates</li>
                <li>GDPR compliant data handling</li>
                <li>Advanced threat detection and prevention</li>
            </ul>
            <p>Your security is our top priority, with industry-standard protections in place.</p>
        `
    },
    'mobile-optimized': {
        title: 'Mobile Optimized',
        content: `
            <p>Fully responsive design that works seamlessly across all devices:</p>
            <ul>
                <li>Adaptive layouts for all screen sizes</li>
                <li>Touch-friendly interface elements</li>
                <li>Optimized loading times for mobile networks</li>
                <li>Progressive Web App (PWA) capabilities</li>
                <li>Offline functionality for critical features</li>
                <li>Cross-browser compatibility</li>
            </ul>
            <p>Access our platform from any device with a consistent, optimized experience.</p>
        `
    },
    'high-performance': {
        title: 'High Performance',
        content: `
            <p>Optimized for speed with modern frameworks and libraries:</p>
            <ul>
                <li>Lightweight codebase for fast loading</li>
                <li>Efficient algorithms for quick processing</li>
                <li>Caching strategies for improved performance</li>
                <li>Lazy loading for non-critical resources</li>
                <li>Minified and compressed assets</li>
                <li>Content Delivery Network (CDN) integration</li>
            </ul>
            <p>Experience blazing-fast performance with our optimized platform.</p>
        `
    },
    'global-access': {
        title: 'Global Access',
        content: `
            <p>No geographical restrictions with permanent internet connection:</p>
            <ul>
                <li>Worldwide accessibility without regional blocks</li>
                <li>Multiple server locations for low latency</li>
                <li>Permanent network connectivity with redundancy</li>
                <li>Multi-language support</li>
                <li>Localized content and currency options</li>
                <li>24/7 global customer support</li>
            </ul>
            <p>Access our platform from anywhere in the world without restrictions.</p>
        `
    }
};

// Service details data
const serviceDetails = {
    'real-estate': {
        title: 'Real Estate Services',
        content: `
            <p>Our comprehensive real estate services include:</p>
            <ul>
                <li>Property valuation and market analysis</li>
                <li>Buying and selling assistance for villas, apartments, and land</li>
                <li>Rental property management and tenant screening</li>
                <li>Property exchange and trade facilitation</li>
                <li>Legal documentation and contract preparation</li>
                <li>Investment property consultation</li>
            </ul>
            <div class="modal-contact">
                <h3>Contact Information</h3>
                <p><i class="fas fa-phone"></i> +98 21 1234 5678</p>
                <p><i class="fas fa-envelope"></i> real estate@cafepersians.io</p>
                <p><i class="fab fa-whatsapp"></i> +98 912 345 6789</p>
            </div>
        `
    },
    'automotive': {
        title: 'Automotive Services',
        content: `
            <p>Professional automotive services include:</p>
            <ul>
                <li>Vehicle valuation and market pricing</li>
                <li>Car buying and selling assistance</li>
                <li>Vehicle exchange and trade-in options</li>
                <li>Financing and insurance coordination</li>
                <li>Vehicle inspection and certification</li>
                <li>Documentation and registration support</li>
            </ul>
            <div class="modal-contact">
                <h3>Contact Information</h3>
                <p><i class="fas fa-phone"></i> +98 21 2345 6789</p>
                <p><i class="fas fa-envelope"></i> automotive@cafepersians.io</p>
                <p><i class="fab fa-whatsapp"></i> +98 912 345 6789</p>
            </div>
        `
    },
    'investment': {
        title: 'Investment Services',
        content: `
            <p>Golden investment opportunities include:</p>
            <ul>
                <li>Stock market portfolio management</li>
                <li>Gold and precious metal investments</li>
                <li>Cryptocurrency trading and investment</li>
                <li>Real estate investment trusts (REITs)</li>
                <li>Risk assessment and diversification strategies</li>
                <li>Market analysis and investment advice</li>
            </ul>
            <div class="modal-contact">
                <h3>Contact Information</h3>
                <p><i class="fas fa-phone"></i> +98 21 3456 7890</p>
                <p><i class="fas fa-envelope"></i> investment@cafepersians.io</p>
                <p><i class="fab fa-whatsapp"></i> +98 912 345 6789</p>
            </div>
        `
    },
    'insurance': {
        title: 'Insurance Services',
        content: `
            <p>Comprehensive insurance services include:</p>
            <ul>
                <li>Life insurance policies and planning</li>
                <li>Health and medical insurance options</li>
                <li>Property and casualty insurance</li>
                <li>Vehicle insurance (comprehensive and collision)</li>
                <li>Business and commercial insurance</li>
                <li>Insurance claims assistance and support</li>
            </ul>
            <p>Note: We do not provide third-party vehicle insurance.</p>
            <div class="modal-contact">
                <h3>Contact Information</h3>
                <p><i class="fas fa-phone"></i> +98 21 4567 8901</p>
                <p><i class="fas fa-envelope"></i> insurance@cafepersians.io</p>
                <p><i class="fab fa-whatsapp"></i> +98 912 345 6789</p>
            </div>
        `
    },
    'advertising': {
        title: 'Advertising Services',
        content: `
            <p>Effective and high-return advertising services include:</p>
            <ul>
                <li>Strategic campaign planning and execution</li>
                <li>Multi-platform advertising (Divar, Sheypoor, etc.)</li>
                <li>Social media marketing and management</li>
                <li>Search engine optimization (SEO) and marketing (SEM)</li>
                <li>Content creation and copywriting</li>
                <li>Performance tracking and analytics</li>
            </ul>
            <div class="modal-contact">
                <h3>Contact Information</h3>
                <p><i class="fas fa-phone"></i> +98 21 5678 9012</p>
                <p><i class="fas fa-envelope"></i> advertising@cafepersians.io</p>
                <p><i class="fab fa-whatsapp"></i> +98 912 345 6789</p>
            </div>
        `
    }
};

// Mobile menu toggle
document.getElementById('mobile-menu-btn').addEventListener('click', function() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('nav-menu').classList.remove('active');
    });
});

// Copy to clipboard function
function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    const text = element.textContent;
    
    navigator.clipboard.writeText(text).then(() => {
        showToast('Address copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
        showToast('Failed to copy address');
    });
}

// Copy from QR modal
function copyToClipboardFromQR() {
    const address = document.getElementById('qr-address').textContent;
    
    navigator.clipboard.writeText(address).then(() => {
        showToast('Address copied to clipboard!');
        closeModal('qr-modal');
    }).catch(err => {
        console.error('Failed to copy: ', err);
        showToast('Failed to copy address');
    });
}

// Show QR Code
function showQRCode(elementId, cryptoType) {
    const element = document.getElementById(elementId);
    const address = element.textContent;
    
    document.getElementById('qr-modal-title').textContent = `${cryptoType} Address`;
    document.getElementById('qr-address').textContent = address;
    
    // Generate QR code
    const qrCodeContainer = document.getElementById('qr-code');
    qrCodeContainer.innerHTML = '';
    
    // Simple QR code representation (in a real implementation, use a QR code library)
    const qrCanvas = document.createElement('canvas');
    qrCanvas.width = 180;
    qrCanvas.height = 180;
    const ctx = qrCanvas.getContext('2d');
    
    // Draw QR code pattern (simplified)
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, 180, 180);
    ctx.fillStyle = '#fff';
    
    // Draw QR code squares (simplified pattern)
    for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 15; j++) {
            if ((i + j) % 2 === 0 || (i < 3 && j < 3) || (i > 11 && j < 3) || (i < 3 && j > 11)) {
                ctx.fillRect(i * 12, j * 12, 10, 10);
            }
        }
    }
    
    qrCodeContainer.appendChild(qrCanvas);
    
    document.getElementById('qr-modal').style.display = 'block';
}

// Show feature details
function showFeatureDetails(featureId) {
    const feature = featureDetails[featureId];
    if (feature) {
        document.getElementById('feature-modal-title').textContent = feature.title;
        document.getElementById('feature-modal-content').innerHTML = feature.content;
        document.getElementById('feature-modal').style.display = 'block';
    }
}

// Show service details
function showServiceDetails(serviceId) {
    const service = serviceDetails[serviceId];
    if (service) {
        document.getElementById('service-modal-title').textContent = service.title;
        document.getElementById('service-modal-content').innerHTML = service.content;
        document.getElementById('service-modal').style.display = 'block';
    }
}

// Close modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal') || event.target.classList.contains('qr-modal')) {
        event.target.style.display = 'none';
    }
}

// Toast notification function
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Smooth scrolling function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll effect to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const backToTop = document.getElementById('back-to-top');
    
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
        backToTop.classList.add('show');
    } else {
        header.style.background = 'linear-gradient(135deg, var(--primary-black) 0%, var(--secondary-black) 100%)';
        backToTop.classList.remove('show');
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
        }
    });
}, observerOptions);

// Observe feature cards, service cards, and crypto cards
document.querySelectorAll('.feature-card, .service-card, .crypto-card').forEach(card => {
    observer.observe(card);
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    console.log('Cafepersians.io initialized successfully');
    
    // Add some initial animations
    setTimeout(() => {
        document.querySelector('.hero h1').classList.add('animate__animated', 'animate__fadeInUp');
    }, 100);
    
    setTimeout(() => {
        document.querySelector('.hero p').classList.add('animate__animated', 'animate__fadeInUp');
    }, 300);
    
    setTimeout(() => {
        document.querySelector('.cta-buttons').classList.add('animate__animated', 'animate__fadeInUp');
    }, 500);
    
    // Initialize network status
    updateNetworkStatus();
});

// Network status monitoring
function updateNetworkStatus() {
    const isOnline = navigator.onLine;
    const indicator = document.getElementById('network-indicator');
    const statusText = document.getElementById('network-status-text');
    
    if (isOnline) {
        indicator.classList.remove('offline');
        statusText.textContent = 'Online';
    } else {
        indicator.classList.add('offline');
        statusText.textContent = 'Offline';
        showToast('Network connection lost');
    }
}

window.addEventListener('online', updateNetworkStatus);
window.addEventListener('offline', updateNetworkStatus);

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log(`Page loaded in ${perfData.loadEventEnd - perfData.loadEventStart}ms`);
        }, 0);
    });
}

// Service Worker registration for PWA capabilities
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }).catch(error => {
            console.log('ServiceWorker registration failed: ', error);
        });
    });
}
