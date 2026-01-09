const products = [
    {
        id: 1,
        name: "ميكسر المساجد الذكي",
        category: "mixers",
        price: 7500,
        image: "mixer-smart-1.jpg",
        tags: ["الأكثر مبيعاً"]
    },
    {
        id: 2,
        name: "مايك لاسلكي 2 هاند شحن",
        category: "mics",
        price: 4200,
        image: "mic-wireless-2hand.jpg",
        tags: ["وصل حديثاً"]
    },
    {
        id: 3,
        name: "ميكسر ديناكورد زيرو باور",
        category: "mixers",
        price: 15800,
        image: "mixer-dynacord-zero.jpg",
        tags: []
    },
    {
        id: 4,
        name: "سماعة Fdb-ES104B 40 وات",
        category: "speakers",
        price: 1950,
        image: "speaker-fdb-40w.jpg",
        tags: []
    },
    {
        id: 5,
        name: "مايك هيد سيت للمحاضرين",
        category: "mics",
        price: 950,
        image: "mic-headset.jpg",
        tags: []
    },
    {
        id: 6,
        name: "ميكسر باور دابل افيكت",
        category: "mixers",
        price: 12500,
        image: "mixer-power-double.jpg",
        tags: []
    },
    {
        id: 7,
        name: "سماعة TOA 30 وات",
        category: "speakers",
        price: 2400,
        image: "speaker-toa-30w.jpg",
        tags: []
    },
    {
        id: 8,
        name: "سماعة عمودية داخلية 40 وات",
        category: "speakers",
        price: 3100,
        image: "speaker-column-40w.jpg",
        tags: []
    },
    {
        id: 9,
        name: "سماعة صدا متميزة",
        category: "speakers",
        price: 2800,
        image: "speaker-echo.jpg",
        tags: []
    },
    {
        id: 10,
        name: "ميكسر ذكي للمساجد والقاعات",
        category: "mixers",
        price: 8200,
        image: "mixer-smart-2.jpg",
        tags: []
    },
    {
        id: 11,
        name: "مايك كوندنسر بهرنجر C-1",
        category: "mics",
        price: 3500,
        image: "mic-behringer-c1.jpg",
        tags: []
    },
    {
        id: 12,
        name: "سماعة حائطية انسيابية 45 وات",
        category: "speakers",
        price: 2100,
        image: "speaker-wall-45w.jpg",
        tags: []
    },
    {
        id: 13,
        name: "مايك بهرنجر احترافي",
        category: "mics",
        price: 2900,
        image: "mic-behringer-2.jpg",
        tags: []
    },
    {
        id: 14,
        name: "ميكسر ديناكورد هاي كوبي",
        category: "mixers",
        price: 9800,
        image: "mixer-dynacord-copy.jpg",
        tags: []
    },
    {
        id: 15,
        name: "سماعة ديسبا احترافية",
        category: "speakers",
        price: 1750,
        image: "speaker-despa.jpg",
        tags: []
    },
    {
        id: 16,
        name: "سماعة 40 وات سوداء",
        category: "speakers",
        price: 1850,
        image: "speaker-40w-black.jpg",
        tags: []
    },
    {
        id: 17,
        name: "هورن ألومنيوم خارجي",
        category: "speakers",
        price: 1200,
        image: "horn-aluminum.jpg",
        tags: []
    },
    {
        id: 18,
        name: "ميكسر بهرنجر بريميوم",
        category: "mixers",
        price: 14500,
        image: "mixer-behringer-premium.jpg",
        tags: []
    },
    {
        id: 19,
        name: "ميكسر صوت باور 99 مؤثر",
        category: "mixers",
        price: 6500,
        image: "mixer-power-99.jpg",
        tags: []
    },
    {
        id: 20,
        name: "ميكسر صوت وارد السعودية",
        category: "mixers",
        price: 5900,
        image: "mixer-saudi.jpg",
        tags: []
    },
    {
        id: 21,
        name: "مايك كارول UDM-246",
        category: "mics",
        price: 850,
        image: "mic-carol-udm246.jpg",
        tags: []
    },
    {
        id: 22,
        name: "سماعة 30 وات فولت واوم",
        category: "speakers",
        price: 1400,
        image: "speaker-30w-volt.jpg",
        tags: []
    },
    {
        id: 23,
        name: "ميكسر دابل افيكت باور",
        category: "mixers",
        price: 11000,
        image: "mixer-double-effect.jpg",
        tags: []
    },
    {
        id: 24,
        name: "امبلفير صغير 45 وات",
        category: "mixers",
        price: 2200,
        image: "amp-small-45w.jpg",
        tags: []
    }
];

// Add IDs for smooth scrolling from categories
const categoryMap = {
    'mics': 'cat-mics',
    'speakers': 'cat-speakers',
    'mixers': 'cat-mixers'
};

document.addEventListener('DOMContentLoaded', () => {
    // 0. Render Products
    const productsContainer = document.querySelector('#dynamic-products');

    if (productsContainer) {
        renderProductsByCategory(products);
    }

    function renderProductsByCategory(items) {
        const categories = {
            'mixers': 'الميكسرات والباور',
            'mics': 'الميكروفونات وأنظمة الصوت',
            'speakers': 'السماعات والساوند سيستم'
        };

        let html = '';

        for (const [key, label] of Object.entries(categories)) {
            const categoryItems = items.filter(item => item.category === key);

            if (categoryItems.length > 0) {
                html += `
                    <div id="${categoryMap[key] || ''}" class="category-block mt-5" data-aos="fade-up">
                        <div class="category-title">
                            <h3>${label}</h3>
                            <div class="line"></div>
                        </div>
                        <div class="products-grid">
                            ${categoryItems.map(product => `
                                <div class="product-card">
                                    <div class="product-img">
                                        ${product.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                                        <img src="${product.image}" alt="${product.name}">
                                        <div class="product-overlay">
                                            <button class="add-to-cart" data-id="${product.id}">طلب المنتج</button>
                                        </div>
                                    </div>
                                    <div class="product-info">
                                        <h3>${product.name}</h3>
                                        <div class="stats">
                                            <span class="rating"><i class="fas fa-star"></i> 4.9</span>
                                            <span class="sold">متوفر الآن</span>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            }
        }

        productsContainer.innerHTML = html;
        attachCartListeners();
    }

    function attachCartListeners() {
        const addBtns = document.querySelectorAll('.add-to-cart');
        addBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const productId = btn.getAttribute('data-id');
                const product = products.find(p => p.id == productId);

                // Get current URL to build absolute image path if needed, or just use the local image URL
                // For this demo, we'll use the product image name and details

                const message = `*طلب منتج جديد من الموقع* \n\n` +
                    `*اسم المنتج:* ${product.name}\n` +
                    `*التصنيف:* ${product.category}\n` +
                    `*رابط الصورة:* ${window.location.origin}/${product.image}\n\n` +
                    `أريد الاستفسار عن تفاصيل هذا المنتج وكيفية الحجز.`;

                const whatsappUrl = `https://wa.me/201558877433?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
            });
        });
    }

    // 1. Preloader
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 600);
        }, 1000);
    });

    // 2. Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Update active link on scroll
        updateActiveLink();
    });

    function updateActiveLink() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');

        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    }

    // 3. Cart Sidebar Logic
    const cartTrigger = document.querySelector('.cart-trigger');
    const cartSidebar = document.querySelector('.cart-sidebar');
    const cartOverlay = document.querySelector('.cart-overlay');
    const closeCart = document.querySelector('.close-cart');
    const cartCount = document.querySelector('.cart-trigger .count');
    let itemsInCart = 0;

    const openCart = () => {
        cartSidebar.classList.add('active');
        cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const hideCart = () => {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    cartTrigger.addEventListener('click', openCart);
    closeCart.addEventListener('click', hideCart);
    cartOverlay.addEventListener('click', hideCart);

    // 4. Add to Cart Feedback
    const addBtn = document.querySelectorAll('.add-to-cart');
    addBtn.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            itemsInCart++;
            cartCount.textContent = itemsInCart;

            // Visual feedback
            const originalText = btn.textContent;
            btn.textContent = 'تمت الإضافة!';
            btn.style.background = '#00d2ff';
            btn.style.color = 'white';

            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = 'white';
                btn.style.color = 'black';
            }, 2000);
        });
    });

    // 5. Mobile Menu Mockup
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            alert('القائمة الجانبية للجوال ستضاف في التحديث القادم');
        });
    }

    // 6. Smooth Scroll for links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 7. Form Submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = contactForm.querySelector('input[placeholder="الاسم الكامل"]').value;
            const phone = contactForm.querySelector('input[placeholder="رقم الهاتف"]').value;
            const msg = contactForm.querySelector('textarea').value;

            const message = `*رسالة جديدة من الموقع* \n\n` +
                `*الاسم:* ${name}\n` +
                `*رقم الهاتف:* ${phone}\n` +
                `*الرسالة:* ${msg}`;

            const whatsappUrl = `https://wa.me/201558877433?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
            contactForm.reset();
        });
    }
});
