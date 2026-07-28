/**
 * Ammriq Portfolio - Main Interactive Script
 * Includes Ambient Glow Mouse Tracking, Mobile Menu, ScrollSpy,
 * Portfolio Category Filter, Project Detail Modal, WhatsApp Inquiry Form Dispatcher.
 */

document.addEventListener("DOMContentLoaded", () => {
    initAmbientGlow();
    initMobileMenu();
    initScrollSpy();
    initPortfolioFilter();
    initContactForm();
    initBackToTop();
});

/* 1. Ambient Background Mouse Tracking */
function initAmbientGlow() {
    const bgGlow = document.getElementById("ambient-glow");
    if (!bgGlow) return;

    window.addEventListener("mousemove", (e) => {
        const x = e.clientX;
        const y = e.clientY;
        bgGlow.style.left = `${x}px`;
        bgGlow.style.top = `${y}px`;
    });
}

/* 2. Mobile Navigation Toggle */
function initMobileMenu() {
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuIcon = document.getElementById("menu-icon");

    if (!menuBtn || !mobileMenu) return;

    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
        if (mobileMenu.classList.contains("hidden")) {
            menuIcon.className = "fa-solid fa-bars text-2xl";
        } else {
            menuIcon.className = "fa-solid fa-xmark text-2xl";
        }
    });

    // Close menu when clicking links
    document.querySelectorAll(".mobile-nav-link").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.add("hidden");
            menuIcon.className = "fa-solid fa-bars text-2xl";
        });
    });
}

/* 3. Navbar Scrollspy & Scroll Shadow */
function initScrollSpy() {
    const navbar = document.getElementById("navbar");
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("shadow-xl", "bg-[#050505]/95");
        } else {
            navbar.classList.remove("shadow-xl", "bg-[#050505]/95");
        }

        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });
}

/* 4. Portfolio Category Filter */
function initPortfolioFilter() {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => {
                b.classList.remove("active", "bg-brand-blue", "text-white");
                b.classList.add("bg-[#121218]", "text-gray-400");
            });

            btn.classList.add("active", "bg-brand-blue", "text-white");
            btn.classList.remove("bg-[#121218]", "text-gray-400");

            const filterValue = btn.getAttribute("data-filter");

            portfolioItems.forEach(item => {
                if (filterValue === "all" || item.classList.contains(filterValue)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
}

/* 5. Project Modal Details */
const projectsData = {
    1: {
        title: "Apex Gaming Esports Jersey",
        category: "Jersey Apparel",
        client: "Apex Guild Esports",
        year: "2026",
        description: "Desain jersey olahraga kustom untuk tim esports profesional. Dibuat dengan memperhatikan sudut ergonomic sublimasi, kontras warna neon blue di atas gelap, serta posisi nomor dan nama pemain tanpa terputus jahitan.",
        colors: ["#3B82F6", "#06B6D4", "#1E1B4B", "#000000"],
        specs: [
            "File Master: Adobe Illustrator (.AI), CorelDRAW (.CDR)",
            "Pola Cetak: Full Sublimasi Ready (Depan, Belakang, Lengan)",
            "Font Name & Number: Vector Font Kustom",
            "Resolution: Vector Scale (Infinite DPI)"
        ]
    },
    2: {
        title: "Aetheria Tech Rebrand Logo",
        category: "Logo & Branding",
        client: "Aetheria Innovation Labs",
        year: "2025",
        description: "Rebranding logo perusahaan software house. Konsep menggabungkan bentuk huruf A dengan lintasan orbit melingkar yang melambangkan konektivitas global dan pertumbuhan cepat.",
        colors: ["#3B82F6", "#60A5FA", "#1E293B", "#0F172A"],
        specs: [
            "File Master: AI, SVG, EPS, PDF, High-Res PNG",
            "Variasi Logo: Utama, Horizontal, Icon Mark, Monokrom",
            "Buku Panduan: Brand Guidelines Color Rules & Clear Space"
        ]
    },
    3: {
        title: "Kemeja PDH Himpunan Mahasiswa",
        category: "PDH / PDL Design",
        client: "HIMA Teknik Komputer",
        year: "2025",
        description: "Rancangan Pakaian Dinas Harian (PDH) organisasi mahasiswa dengan bahan American/Nagata Drill. Memiliki dua saku depan dengan penutup, skoder pundak, serta patch bordir komputer.",
        colors: ["#1E293B", "#3B82F6", "#475569", "#0F172A"],
        specs: [
            "Mockup: 2D Flat Technical Layout + 3D Realistic View",
            "Panduan Bordir: Ukuran cm & Jumlah Layer Warna Thread",
            "Kombinasi Warna: Body Navy, Variasi Lengan Dark Grey"
        ]
    },
    4: {
        title: "Backdrop & Banner Festival Kreatif",
        category: "Banner & Spanduk",
        client: "CreativeFest Organizer",
        year: "2026",
        description: "Spanduk panggung utama ukuran 5x2.5 meter untuk event pameran seni dan musik. Tipografi besar berkarakter tebal untuk dibaca jelas dari jarak jauh.",
        colors: ["#1E1B4B", "#3B82F6", "#06B6D4", "#E0E7FF"],
        specs: [
            "Dimensi File: 500cm x 250cm (300 DPI Skala 1:10)",
            "Color Profile: CMYK Print Ready Profile",
            "Marginal Safety Zone: Bleed 5cm tiap sisi untuk mata ayam/colokan"
        ]
    },
    5: {
        title: "Stiker Komunitas Otomotif",
        category: "Sticker & Merchandise",
        client: "Speed Riders Club",
        year: "2025",
        description: "Desain stiker bundar dengan efek emboss dan warna kontras untuk dipasang pada helm, visor, atau bodi kendaraan. Dilengkapi garis potong Die-Cut.",
        colors: ["#3B82F6", "#000000", "#FFFFFF", "#06B6D4"],
        specs: [
            "File Cutline: Vector Stroke Line (Hairline Magenta Cut-Contour)",
            "Bahan Cetak: Vinyl Glossy Laminasi Doff Tahan Air & UV",
            "Ukuran Standard: 8cm x 8cm"
        ]
    },
    6: {
        title: "Template Feed Instagram UMKM",
        category: "Social Media",
        client: "Kopi Kulture Indonesia",
        year: "2026",
        description: "Desain carousel Instagram 5 slide yang saling menyambung. Meningkatkan swiping rate audiens dengan konten visual estetis.",
        colors: ["#0B132B", "#3B82F6", "#1C2541", "#FFFFFF"],
        specs: [
            "Ratio: 1080x1350px (Instagram Portrait Mode 4:5)",
            "Format: Photoshop PSD / Canva Editable Link",
            "Termasuk 10+ asset icon vector"
        ]
    }
};

function openProjectModal(projectId) {
    const data = projectsData[projectId];
    if (!data) return;

    const modal = document.getElementById("project-modal");
    const modalContent = document.getElementById("modal-content");

    const colorPills = data.colors.map(c => 
        `<span class="w-6 h-6 rounded-full border border-gray-700 shadow-md inline-block" style="background-color:${c}" title="${c}"></span>`
    ).join(" ");

    const specItems = data.specs.map(s => 
        `<li class="flex items-start gap-2 text-xs text-gray-300"><i class="fa-solid fa-circle-check text-brand-blue mt-0.5"></i> <span>${s}</span></li>`
    ).join("");

    modalContent.innerHTML = `
        <div class="space-y-6">
            <div class="flex items-center gap-3">
                <span class="px-3 py-1 rounded-full bg-brand-blue/20 text-brand-blue text-xs font-semibold border border-brand-blue/30">
                    ${data.category}
                </span>
                <span class="text-xs text-gray-500">• Tahun ${data.year}</span>
            </div>

            <div>
                <h2 class="text-2xl font-bold text-white mb-1">${data.title}</h2>
                <p class="text-xs text-gray-400">Klien: <strong class="text-gray-200">${data.client}</strong></p>
            </div>

            <p class="text-sm text-gray-300 leading-relaxed">${data.description}</p>

            <!-- Color Palette & Specs -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 p-5 rounded-2xl bg-[#0c0c14] border border-gray-800">
                <div class="space-y-2">
                    <h4 class="text-xs font-bold text-white uppercase tracking-wider">Palet Warna Utama</h4>
                    <div class="flex items-center gap-2 pt-1">
                        ${colorPills}
                    </div>
                </div>

                <div class="space-y-2">
                    <h4 class="text-xs font-bold text-white uppercase tracking-wider">Spesifikasi Output File</h4>
                    <ul class="space-y-1.5">
                        ${specItems}
                    </ul>
                </div>
            </div>

            <!-- Call to Action -->
            <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-800">
                <span class="text-xs text-gray-400">Tertarik dengan style & kualitas desain ini?</span>
                <a href="https://wa.me/6285185793342?text=Halo%20Ammriq,%20saya%20tertarik%20dengan%20style%20desain%20${encodeURIComponent(data.title)}" target="_blank" class="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-blue hover:bg-blue-600 text-white font-bold text-xs transition-all shadow-lg flex items-center justify-center gap-2">
                    <i class="fa-brands fa-whatsapp text-sm"></i> Order Konsep Ini via WA
                </a>
            </div>
        </div>
    `;

    modal.classList.remove("hidden");
    setTimeout(() => {
        modal.classList.remove("opacity-0");
    }, 10);
    document.body.classList.add("modal-open");
}

function closeProjectModal() {
    const modal = document.getElementById("project-modal");
    modal.classList.add("opacity-0");
    setTimeout(() => {
        modal.classList.add("hidden");
        document.body.classList.remove("modal-open");
    }, 300);
}

/* 6. WhatsApp Contact Form Submission */
function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("form-name").value.trim();
        const phone = document.getElementById("form-phone").value.trim();
        const service = document.getElementById("form-service").value;
        const timeline = document.getElementById("form-timeline").value;
        const message = document.getElementById("form-message").value.trim();

        const text = `Halo Ammriq Portfolio,

Saya ingin mengajukan project desain dengan detail berikut:
• Nama: ${name}
• No HP / WA: ${phone}
• Jenis Layanan: ${service}
• Target Timeline: ${timeline}
• Detail Brief:
"${message}"

Mohon info estimasi biaya dan kelanjutan ketersediaan project. Terima kasih!`;

        const waUrl = `https://wa.me/6285185793342?text=${encodeURIComponent(text)}`;
        window.open(waUrl, "_blank");
        showToast("Membuka obrolan WhatsApp...");
    });
}

/* 7. Back To Top Floating Action */
function initBackToTop() {
    const btn = document.getElementById("back-to-top");
    if (!btn) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            btn.classList.remove("opacity-0", "pointer-events-none");
            btn.classList.add("opacity-100");
        } else {
            btn.classList.add("opacity-0", "pointer-events-none");
            btn.classList.remove("opacity-100");
        }
    });

    btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

/* Helper: Toast Notification */
function showToast(msg) {
    const toast = document.getElementById("toast");
    const toastMsg = document.getElementById("toast-message");
    if (!toast || !toastMsg) return;

    toastMsg.innerText = msg;
    toast.classList.remove("opacity-0", "pointer-events-none");
    toast.classList.add("opacity-100");

    setTimeout(() => {
        toast.classList.add("opacity-0", "pointer-events-none");
        toast.classList.remove("opacity-100");
    }, 3000);
}
