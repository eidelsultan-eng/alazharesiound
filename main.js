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
    'mixers': 'cat-mixers',
    'accessories': 'cat-accessories',
    'installations': 'installations'
};

document.addEventListener('DOMContentLoaded', () => {
    // 0. Render Products
    const productsContainer = document.querySelector('#dynamic-products');

    if (productsContainer) {
        renderProductsByCategory(products);
    }

    // Add gallery items to products array
    const galleryItems = [
        "WhatsApp Image 2026-01-09 at 2.05.09 AM (1).jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.09 AM (2).jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.09 AM (3).jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.09 AM.jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.10 AM (1).jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.10 AM (2).jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.10 AM (3).jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.10 AM.jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.11 AM (1).jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.11 AM (2).jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.11 AM (3).jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.11 AM (4).jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.11 AM.jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.12 AM.jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.13 AM (1).jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.13 AM (2).jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.13 AM (3).jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.13 AM.jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.15 AM.jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.16 AM (1).jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.16 AM (2).jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.16 AM (3).jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.16 AM.jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.19 AM.jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.20 AM (1).jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.20 AM (2).jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.20 AM (3).jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.20 AM (4).jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.20 AM.jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.21 AM (1).jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.21 AM (2).jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.21 AM (3).jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.21 AM (4).jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.21 AM.jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.22 AM (1).jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.22 AM (2).jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.22 AM.jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.23 AM (1).jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.23 AM (2).jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.23 AM (3).jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.23 AM.jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.24 AM.jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.25 AM.jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.26 AM (1).jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.26 AM (2).jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.26 AM (3).jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.26 AM.jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.27 AM (1).jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.27 AM (2).jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.27 AM (3).jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.27 AM.jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.28 AM (1).jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.28 AM (2).jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.28 AM (3).jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.28 AM.jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.29 AM.jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.30 AM (1).jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.30 AM.jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.31 AM.jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.32 AM (1).jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.32 AM.jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.33 AM (1).jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.33 AM (2).jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.33 AM.jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.34 AM (1).jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.34 AM (2).jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.34 AM (3).jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.34 AM (4).jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.34 AM.jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.35 AM (1).jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.35 AM (2).jpeg",
        "WhatsApp Image 2026-01-09 at 2.05.35 AM.jpeg"
    ];

    galleryItems.forEach((img, idx) => {
        products.push({
            id: 100 + idx,
            name: "تجهيز صوتي احترافي",
            category: "installations",
            image: img,
            tags: []
        });
    });

    if (productsContainer) {
        renderProductsByCategory(products);
    }

    function renderProductsByCategory(items) {
        const categories = {
            'mixers': 'الميكسرات والباور',
            'mics': 'الميكروفونات وأنظمة الصوت',
            'speakers': 'السماعات والساوند سيستم',
            'accessories': 'إكسسوارات وأنظمة متنوعة',
            'installations': 'تجهيزاتنا على أرض الواقع'
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
                                        <img src="${product.image}" alt="">
                                        <div class="product-overlay">
                                            <div style="text-align: center; padding: 20px;">
                                                <button class="add-to-cart" data-id="${product.id}" style="background: var(--primary); color: white; border: none; padding: 12px 25px; border-radius: 50px; cursor: pointer; font-weight: 700; box-shadow: 0 5px 15px rgba(0,0,0,0.3);">طلب المنتج</button>
                                            </div>
                                        </div>
                                     </div>
                                     <div class="product-info" style="padding: 15px; text-align: center;">
                                        <h4 style="color: var(--light); margin-bottom: 5px;">${product.name}</h4>
                                        ${product.specs ? `<p style="color: var(--gray); font-size: 13px; line-height: 1.4;">${product.specs}</p>` : ''}
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

    // 7. Mobile Menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-active');
            // Toggle icon
            const icon = menuToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.replace('fa-bars', 'fa-times');
            } else {
                icon.classList.replace('fa-times', 'fa-bars');
            }
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('mobile-active');
                const icon = menuToggle.querySelector('i');
                if (icon) icon.classList.replace('fa-times', 'fa-bars');
            });
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

    // --- Admin Logic with Firebase (Live for everyone) ---

    // 1. Firebase Configuration (Put your keys here)
    const firebaseConfig = {
        apiKey: "AIzaSyCFjTjcoC4XNDBfa7zfS38qISVOg3Zy7Ls",
        authDomain: "kkkkkkk-3185c.firebaseapp.com",
        projectId: "kkkkkkk-3185c",
        storageBucket: "kkkkkkk-3185c.firebasestorage.app",
        messagingSenderId: "483380085587",
        appId: "1:483380085587:web:f8542973f8b083d73d17a6",
        measurementId: "G-SERTKBRZSY"
    };

    // Initialize Firebase if config is provided
    let db = null;
    if (firebaseConfig.apiKey !== "YOUR_API_KEY") {
        try {
            firebase.initializeApp(firebaseConfig);
            db = firebase.firestore();
            console.log("✅ Firebase Initialized successfully");
        } catch (error) {
            console.error("❌ Firebase Initialization Error:", error);
        }
    } else {
        console.warn("⚠️ Firebase API Key not set. Using local storage.");
    }

    const adminTrigger = document.getElementById('admin-trigger');
    const adminModal = document.getElementById('admin-login-modal');
    const closeModal = adminModal.querySelector('.close-modal');
    const adminPasswordInput = document.getElementById('admin-password');
    const loginBtn = document.getElementById('login-btn');
    const adminSection = document.getElementById('admin');
    const adminPanelBox = document.getElementById('admin-panel');
    const addProductForm = document.getElementById('add-product-form');
    const adminProductsList = document.getElementById('admin-products-list');
    const CORRECT_PASSWORD = '010asd';

    if (adminTrigger) {
        adminTrigger.addEventListener('click', () => {
            adminModal.classList.add('active');
        });
    }

    if (closeModal) {
        closeModal.addEventListener('click', () => {
            adminModal.classList.remove('active');
        });
    }

    let customProducts = [];

    // Function to load products from Firebase (Live sync)
    function syncProducts() {
        if (!db) {
            // Fallback to local storage if Firebase not configured
            customProducts = JSON.parse(localStorage.getItem('customProducts')) || [];
            updateDisplay();
            return;
        }

        db.collection("products").orderBy("id", "desc")
            .onSnapshot((querySnapshot) => {
                customProducts = [];
                querySnapshot.forEach((doc) => {
                    customProducts.push(doc.data());
                });
                updateDisplay();
            });
    }

    function updateDisplay() {
        // Clear current custom from array to avoid duplicates
        const baseProductsCount = 24 + 72; // Initial products + gallery
        const baseProducts = products.slice(0, baseProductsCount);

        // Resulting list
        const finalProducts = [...baseProducts, ...customProducts];

        // Re-render
        renderProductsByCategory(finalProducts);
        renderAdminProducts();
    }

    syncProducts();

    loginBtn.addEventListener('click', () => {
        if (adminPasswordInput.value === CORRECT_PASSWORD) {
            adminModal.classList.remove('active');
            adminSection.style.display = 'block';
            adminPanelBox.style.display = 'block';
            adminSection.scrollIntoView({ behavior: 'smooth' });
            renderAdminProducts();
        } else {
            alert('كلمة السر خاطئة');
        }
    });

    if (addProductForm) {
        addProductForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            console.log("Submit started...");

            try {
                const name = document.getElementById('p-name').value;
                const price = document.getElementById('p-price').value;
                const category = document.getElementById('p-category').value;
                const specs = document.getElementById('p-specs').value;
                const fileInput = document.getElementById('p-image-file');

                if (!fileInput.files || !fileInput.files[0]) {
                    alert('يرجى اختيار صورة للمنتج');
                    return;
                }

                // Increase limit to 700KB because Firestore has a 1MB document limit and Base64 encoding adds overhead
                if (fileInput.files[0].size > 700 * 1024) {
                    alert('حجم الصورة كبير، يرجى اختيار صورة أصغر من 700 كيلوبايت لضمان المزامنة مع الجميع');
                    return;
                }

                const reader = new FileReader();
                reader.onload = async function (event) {
                    const imageData = event.target.result;

                    const newProduct = {
                        id: Date.now(),
                        name: name,
                        price: price,
                        category: category,
                        specs: specs,
                        image: imageData,
                        isCustom: true
                    };

                    console.log("Attempting to save product:", newProduct.name);

                    if (db) {
                        try {
                            await db.collection("products").add(newProduct);
                            console.log("Firebase sync successful");
                        } catch (error) {
                            console.error("Firebase Error:", error);
                            alert("خطأ في Firebase: " + error.message + ". سيتم الحفظ محلياً.");
                            saveLocally(newProduct);
                        }
                    } else {
                        console.log("Saving locally (no DB context)");
                        saveLocally(newProduct);
                    }

                    addProductForm.reset();
                    const fileLabel = document.querySelector('.file-label span');
                    if (fileLabel) fileLabel.textContent = 'اضافة صوره';
                    alert('تم إضافة المنتج بنجاح!');
                };

                reader.onerror = function () {
                    alert("خطأ في قراءة ملف الصورة");
                };

                reader.readAsDataURL(fileInput.files[0]);
            } catch (err) {
                console.error("General form error:", err);
                alert("حدث خطأ غير متوقع: " + err.message);
            }
        });

        const fileInput = document.getElementById('p-image-file');
        if (fileInput) {
            fileInput.addEventListener('change', (e) => {
                if (e.target.files && e.target.files[0]) {
                    document.querySelector('.file-label span').textContent = e.target.files[0].name;
                }
            });
        }
    }

    function saveLocally(product) {
        customProducts.push(product);
        localStorage.setItem('customProducts', JSON.stringify(customProducts));
        updateDisplay();
    }

    function renderAdminProducts() {
        if (!adminProductsList) return;
        adminProductsList.innerHTML = customProducts.map(p => `
            <div class="admin-product-item">
                <img src="${p.image}" alt="">
                <h4>${p.name}</h4>
                <button class="delete-btn" onclick="deleteProduct(${p.id})">حذف</button>
            </div>
        `).join('');
    }

    window.deleteProduct = async function (id) {
        if (confirm('هل أنت متأكد من حذف هذا المنتج؟')) {
            if (db) {
                const snapshot = await db.collection("products").where("id", "==", id).get();
                snapshot.forEach(doc => doc.ref.delete());
            } else {
                customProducts = customProducts.filter(p => p.id !== id);
                localStorage.setItem('customProducts', JSON.stringify(customProducts));
                updateDisplay();
            }
        }
    };
});
