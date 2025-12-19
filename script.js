// زر العودة للأعلى
document.addEventListener('DOMContentLoaded', function() {
    var span = document.querySelector(".up");
    if(span){
        window.onscroll = function() {
            span.style.display = (window.scrollY >= 575) ? "block" : "none";
        };

        span.onclick = function() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        };
    }
});
// مثال لتأثير عند الوصول إلى قسم
let section = document.querySelector(".MySkills");
let tag = document.querySelectorAll(".MySkills h1");

window.addEventListener('scroll', function () {
    if (section && tag.length && window.scrollY >= section.offsetTop) {
        tag.forEach((el) => {
            el.style.width = el.dataset.width;
        });
    }
});

//---------------------------------------------------------

// دالة لتحميل CSS ديناميكيًا
function loadCSS(fileName) {
    // إزالة أي ملف CSS سابق تم تحميله ديناميكيًا
    const existingLink = document.getElementById("dynamic-css");
    if (existingLink) existingLink.remove();

    // إنشاء عنصر link جديد
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = fileName;
    link.id = "dynamic-css"; // لتسهيل إزالته لاحقًا
    document.head.appendChild(link);
}

// دالة لتطبيق الترجمة وتغيير CSS والاتجاه
async function openTranslation() {
    const selectedLang = document.getElementById("langSelect").value;
    localStorage.setItem("language", selectedLang); // حفظ اللغة المختارة

    // تحميل ملف الترجمة المناسب
    const res = await fetch(`${selectedLang}.json`);
    const translations = await res.json();

    // تحديث النصوص حسب data-i18n
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[key]) el.innerText = translations[key];
    });

    // ضبط اتجاه الصفحة واختيار CSS المناسب
    if (selectedLang === "ar") {
        document.documentElement.lang = "ar";
        //document.documentElement.setAttribute("dir", "rtl");

        // تحميل CSS العربية
        loadCSS("styleAR.css");
    } else {
        document.documentElement.lang = selectedLang;
        document.documentElement.setAttribute("dir", "ltr");

        // تحميل CSS الافتراضي للغات الأخرى
        loadCSS("style.css");
    }
}

// تحميل اللغة المحفوظة عند فتح الصفحة
document.addEventListener("DOMContentLoaded", async function() {
    const savedLang = localStorage.getItem("language") || "en";
    document.getElementById("langSelect").value = savedLang; // ضبط قيمة الـ select

    const res = await fetch(`${savedLang}.json`);
    const translations = await res.json();

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[key]) el.innerText = translations[key];
    });

    // ضبط CSS والاتجاه حسب اللغة
    if (savedLang === "ar") {
        document.documentElement.lang = "ar";
        //document.documentElement.setAttribute("dir", "rtl");
        loadCSS("styleAR.css");
    } else {
        document.documentElement.lang = savedLang;
        document.documentElement.setAttribute("dir", "ltr");
        loadCSS("styleEN.css");
    }
});

// ربط تغيير اللغة بزر أو select
document.getElementById("langSelect").addEventListener("change", openTranslation);


window.addEventListener('scroll', function () {
    if (section && tag.length && window.scrollY >= section.offsetTop) {
        tag.forEach((el) => {
            el.style.width = el.dataset.width;
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    if (typeof AOS !== "undefined") {
        AOS.init({ duration: 1000, once: true });
    }
});

