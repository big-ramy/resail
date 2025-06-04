// --- بداية الملف: translations, global variables, DOMContentLoaded etc. ---
const translations = {
    en: {
        'brand-name': 'Resail',
        'home-link': 'Home',
        'features-link': 'Features',
        'products-link': 'Products',
        'product-cv': 'CV Builder',
        'Professional CV Builder': 'Professional CV Builder',
        'Enter Your Information': 'Enter Your Information',
        'Full Name': 'Full Name',
        'Enter your name': 'Enter your name',
        'Job Title': 'Job Title',
        'Enter your job title': 'Enter your job title',
        'Email Address': 'Email Address',
        'Enter your email address': 'Enter your email address',
        'Phone Number': 'Phone Number',
        'Enter your phone number': 'Enter your phone number',
        'Website / Portfolio': 'Website / Portfolio',
        'Enter your website or portfolio URL': 'Enter your website or portfolio URL',
        'Profile Picture': 'Profile Picture',
        'Choose a picture to enhance the look of your CV in some templates.': 'Choose a picture to enhance the look of your CV in some templates.',
        'Data Completion Progress': 'Data Completion Progress',
        'Career Objective': 'Career Objective',
        'Enter your career objective': 'Enter your career objective',
        'Work Experience': 'Work Experience',
        'Add Experience': 'Add Experience',
        'Remove Last': 'Remove Last',
        'Description': 'Description',
        'Education': 'Education',
        'Add Education': 'Add Education',
        'Degree': 'Degree',
        'University/Institution': 'University/Institution',
        'Skills': 'Skills',
        'Add Skill': 'Add Skill',
        'Enter a skill': 'Enter a skill',
        'Languages': 'Languages',
        'Add Language': 'Add Language',
        'Enter a language': 'Enter a language',
        'References': 'References',
        'Add Reference': 'Add Reference',
        'Name': 'Name',
        'Position': 'Position',
        'Phone': 'Phone',
        'Email': 'Email',
        'Choose a CV Template and Preview': 'Choose a CV Template and Preview',
        'Normal Templates (Full Width)': 'Normal Templates (Full Width)',
        'Standard Templates (Sidebar)': 'Standard Templates (Sidebar)',
        'Professional Templates (Header + Sidebar)': 'Professional Templates (Header + Sidebar)',
        'AST Supported Templates': 'AST Supported Templates',
        'Request Download / Print': 'Request Download / Print',
        'No Title': 'No Title',
        'No Degree': 'No Degree',
        'No Name': 'No Name',
        'You must have at least one field in this section.': 'You must have at least one field in this section.',
        'Error generating PDF for CV.': 'Error generating PDF for CV.',
        'Failed to load some images. The CV may not be generated correctly.': 'Failed to load some images. The CV may not be generated correctly.',
        'English': 'English',
        'العربية': 'العربية',
        "choose-payment": "Choose Payment Method",
        "scan-qr": "Scan the Code",
        "payment-success": "Payment successful! Your CV will be sent to your email.",
        "payment": "Payment",
        "payment-note": "After completing the payment in the bank application, please fill in the following data",
        "your-name": "Your name",
        "your-email": "Your email",
        "your-phone": "Phone number",
        "messages": "Price Paid",
        "attachment": "Attach the payment receipt (image / PDF)",
        "submit": "Submit",
        "Please fill in all fields.": "Please fill in all fields.",
        "Please enter a valid email.": "Please enter a valid email.",
        "File size exceeds the limit (3MB).": "File size exceeds the limit (3MB).",
        "Please attach only image or PDF files.": "Please attach only image or PDF files.",
        "Error processing file.": "Error processing file.",
        "payment-error-general": "An error occurred during PayPal payment. Please try again.",
        "Apply Discount": "Apply Discount",
        "Enter discount code (if any)": "Enter discount code (if any)",
        "End of CV": "End of CV",
        "Watermark Preview Text": "ONLY PREVIEW", // For direct download watermark
        "Watermark Paid Text": "", // No watermark for paid version
        "contact-link": "Contact Us",
        "Your CV Preview": "Your CV Preview",
        "Download PDF (Direct)": "Download PDF (Direct)",
        "Back to Templates": "Back to Templates",
        "Back to Data Entry": "Back to Data Entry",
        "Next: Choose Template": "Next: Choose Template",
        "Next: Preview CV": "Next: Preview CV",
        "Back to Home": "Back to Home",
        "Back to Preview": "Back to Preview",
        "Back to Payment Options": "Back to Payment Options",
        "Generating CV, please wait...": "Generating CV, please wait...",
        "Payment processing, please wait...": "Payment processing, please wait...",
        "CV generated successfully and sent!": "CV generated successfully and sent to your email!",
        "Error sending CV email. Please contact support.": "Error sending CV email. Please contact support."
    },
    ar: {
        'brand-name': 'رسائل',
        'home-link': 'الرئيسية',
        'features-link': 'المميزات',
        'products-link': 'المنتجات',
        'product-cv': 'إنشاء سيرة ذاتية',
        'Professional CV Builder': 'إنشاء السيرة الذاتية الاحترافية',
        'Enter Your Information': 'أدخل بياناتك',
        'Full Name': 'الاسم',
        'Enter your name': 'أدخل اسمك',
        'Job Title': 'المسمى الوظيفي',
        'Enter your job title': 'أدخل المسمى الوظيفي',
        'Email Address': 'البريد الإلكتروني',
        'Enter your email address': 'أدخل بريدك الإلكتروني',
        'Phone Number': 'رقم الهاتف',
        'Enter your phone number': 'أدخل رقم هاتفك',
        'Website / Portfolio': 'الموقع الشخصي',
        'Enter your website or portfolio URL': 'أدخل موقعك الشخصي',
        'Profile Picture': 'الصورة الشخصية',
        'Choose a picture to enhance the look of your CV in some templates.': 'اختر صورة لتحسين مظهر السيرة الذاتية في بعض النماذج.',
        'Data Completion Progress': 'نسبة إكمال البيانات',
        'Career Objective': 'الهدف الوظيفي',
        'Enter your career objective': 'أدخل هدفك الوظيفي',
        'Work Experience': 'الخبرة العملية',
        'Add Experience': 'إضافة خبرة',
        'Remove Last': 'حذف آخر',
        'Description': 'الوصف',
        'Education': 'المؤهلات العلمية',
        'Add Education': 'إضافة مؤهل',
        'Degree': 'الشهادة',
        'University/Institution': 'الجامعة/المعهد',
        'Skills': 'المهارات',
        'Add Skill': 'إضافة مهارة',
        'Enter a skill': 'أدخل مهارة',
        'Languages': 'اللغات',
        'Add Language': 'إضافة لغة',
        'Enter a language': 'أدخل لغة',
        'References': 'المراجع',
        'Add Reference': 'إضافة مرجع',
        'Name': 'الاسم',
        'Position': 'الموقع',
        'Phone': 'الهاتف',
        'Email': 'البريد',
        'Choose a CV Template and Preview': 'اختر نموذجًا للسيرة الذاتية والمعاينة',
        'Normal Templates (Full Width)': 'نماذج عادية (عرض الصفحة)',
        'Standard Templates (Sidebar)': 'نماذج عادية (قسم جانبي ورئيسي)',
        'Professional Templates (Header + Sidebar)': 'نماذج احترافية (رأس وجانبي ورئيسي)',
        'AST Supported Templates': 'نماذج داعمة لأنظمة AST',
        'Request Download / Print': 'طلب تنزيل / طباعة',
        'No Title': 'بدون مسمى',
        'No Degree': 'بدون شهادة',
        'No Name': 'بدون اسم',
        'You must have at least one field in this section.': 'يجب أن يحتوي على حقل واحد على الأقل في هذا القسم.',
        'Error generating PDF for CV.': 'حدث خطأ أثناء إنشاء PDF للسيرة الذاتية.',
        'Failed to load some images. The CV may not be generated correctly.': 'تعذر تحميل بعض الصور. قد لا يتم إنشاء السيرة الذاتية بشكل صحيح.',
        'English': 'English',
        'العربية': 'العربية',
        "choose-payment": "اختر وسيلة الدفع",
        "scan-qr": "مسح الكود",
        "payment-success": "تم الدفع بنجاح! سيتم إرسال السيرة الذاتية إلى بريدك الإلكتروني.",
        "payment": "الدفع",
        "payment-note": "بعد إتمام الدفع في تطبيق البنك، الرجاء تعبئة البيانات التالية:",
        "your-name": "اسمك",
        "your-email": "بريدك الإلكتروني",
        "your-phone": "رقم الهاتف",
        "messages": "السعر المدفوع",
        "attachment": "أرفق إيصال الدفع (صورة / PDF):",
        "submit": "إرسال",
        "Please fill in all fields.": "يرجى ملء جميع الحقول.",
        "Please enter a valid email.": "يرجى إدخال بريد إلكتروني صالح.",
        "File size exceeds the limit (3MB).": "حجم الملف يتجاوز الحد المسموح به (3MB).",
        "Please attach only image or PDF files.": "يرجى إرفاق صورة أو ملف PDF فقط.",
        "Error processing file.": "حدث خطأ أثناء معالجة الملف.",
        "payment-error-general": "حدث خطأ أثناء الدفع عبر باي بال. الرجاء المحاولة مرة أخرى.",
        "Apply Discount": "تطبيق الخصم",
        "Enter discount code (if any)": "أدخل كود الخصم (إن وجد)",
        "End of CV": "نهاية السيرة",
        "Watermark Preview Text": "للعرض فقط",
        "Watermark Paid Text": "", // لا توجد علامة مائية للنسخة المدفوعة
        "contact-link": "اتصل بنا",
        "Your CV Preview": "معاينة سيرتك الذاتية",
        "Download PDF (Direct)": "تنزيل PDF (مباشر)",
        "Back to Templates": "العودة للنماذج",
        "Back to Data Entry": "العودة لإدخال البيانات",
        "Next: Choose Template": "التالي: اختر قالب",
        "Next: Preview CV": "التالي: معاينة السيرة",
        "Back to Home": "العودة للرئيسية",
        "Back to Preview": "العودة للمعانية",
        "Back to Payment Options": "العودة لخيارات الدفع",
        "Generating CV, please wait...": "جاري إنشاء السيرة الذاتية، يرجى الانتظار...",
        "Payment processing, please wait...": "جاري معالجة الدفع، يرجى الانتظار...",
        "CV generated successfully and sent!": "تم إنشاء السيرة الذاتية بنجاح وإرسالها لبريدك الإلكتروني!",
        "Error sending CV email. Please contact support.": "خطأ في إرسال السيرة الذاتية بالبريد. الرجاء الاتصال بالدعم."
    }
};

// Global variables
let currentLang = 'ar';
let selectedTemplate = 1;
let selectedTemplateCategory = 'normal';
let profilePicDataUrl = null;
let selectedPriceToPay = 0;
let discountApplied = 0;
const discountCodes = { "SAVE10": 10, "FIRSTBUY": 15, "FREECV": 100 };

// DOM elements
let paymentNameInput, paymentEmailInput, paymentPhoneInput, paymentMessagesInput, paymentFileInput, qrPaymentResultDiv, submitPaymentProofButton, cvContainer, siteHeaderGlobal, loadingOverlayGlobal, loadingTextGlobal;
let isCapturingPdf = false;

const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3MB
const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'application/pdf'];

document.addEventListener('DOMContentLoaded', () => {
    siteHeaderGlobal = document.querySelector('.site-header');
    loadingOverlayGlobal = document.getElementById('loading-overlay');
    loadingTextGlobal = document.querySelector('#loading-overlay p[data-translate-id="loading-cv-text"]');
    cvContainer = document.getElementById('cv-container');

    paymentNameInput = document.getElementById("payment-name");
    paymentEmailInput = document.getElementById("payment-email");
    paymentPhoneInput = document.getElementById("payment-phone");
    paymentMessagesInput = document.getElementById("payment-messages");
    paymentFileInput = document.getElementById("payment-file");
    qrPaymentResultDiv = document.getElementById("qr-payment-result");
    submitPaymentProofButton = document.getElementById("submit-payment-proof");

    if (submitPaymentProofButton) {
        submitPaymentProofButton.addEventListener('click', submitPaymentProof);
    }

    loadPayPalSDK(currentLang);
    updateLanguage();
    showPage('landing-page');
    lazyLoadImages();
});

function toggleSiteHeader(show) {
    if (siteHeaderGlobal) {
        siteHeaderGlobal.style.display = show ? 'flex' : 'none';
    }
}

function toggleLoadingOverlay(show, messageKey = 'Generating CV, please wait...') {
    if (loadingOverlayGlobal && loadingTextGlobal) {
        if (show) {
            loadingTextGlobal.setAttribute('data-current-key', messageKey);
            loadingTextGlobal.textContent = translations[currentLang][messageKey] || messageKey;
            loadingOverlayGlobal.style.display = 'flex';
            console.log(`[toggleLoadingOverlay] SHOWN with message key: ${messageKey}`);
        } else {
            loadingOverlayGlobal.style.display = 'none';
            loadingTextGlobal.removeAttribute('data-current-key');
            console.log("[toggleLoadingOverlay] HIDDEN.");
        }
    } else {
        console.error("[toggleLoadingOverlay] loadingOverlayGlobal or loadingTextGlobal is null.");
    }
}

function showPage(pageId) {
    const pages = document.querySelectorAll('.page-section');
    pages.forEach(page => page.classList.remove('active-page'));

    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active-page');
        window.scrollTo(0, 0);
        toggleSiteHeader(pageId === 'landing-page');
        updatePageContentLanguage();

        if (pageId === 'cv-data-entry-page') {
            const nameField = document.getElementById('name-input');
            if (nameField && !nameField.value.trim()) {
                populateWithTestData();
            }
            generateCV(cvContainer); // Pass the main cvContainer for on-screen preview
            updateProgress();
        } else if (pageId === 'cv-template-selection-page' || pageId === 'cv-preview-page') {
            generateCV(cvContainer);
        }
    } else {
        console.error(`[showPage] Target page with ID "${pageId}" not found.`);
    }
}

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    console.log(`[toggleLanguage] Language toggled to: ${currentLang}`);
    updateLanguage();
    if (cvContainer && (document.getElementById('cv-preview-page').classList.contains('active-page') ||
                        document.getElementById('cv-template-selection-page').classList.contains('active-page') ||
                        document.getElementById('cv-data-entry-page').classList.contains('active-page'))) {
        generateCV(cvContainer);
    }
}

function updateLanguage() {
    const isArabic = currentLang === 'ar';
    document.documentElement.lang = currentLang;
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';

    if (cvContainer) {
        cvContainer.dir = isArabic ? 'rtl' : 'ltr';
    }

    document.body.classList.toggle('rtl', isArabic);
    document.body.classList.toggle('ltr', !isArabic);

    updateNavbarLinks();
    updatePageContentLanguage();
    loadPayPalSDK(currentLang);
}

function updateNavbarLinks() {
    const links = document.querySelectorAll('nav [data-translate]');
    links.forEach(link => {
        const key = link.getAttribute('data-translate');
        if (translations[currentLang] && translations[currentLang][key] !== undefined) {
            link.textContent = translations[currentLang][key];
        }
    });
    const langToggleSpan = document.getElementById('currentLangText');
    if (langToggleSpan) {
        langToggleSpan.textContent = currentLang === 'ar' ? translations.en.English : translations.ar.العربية;
    }
}

function updatePageContentLanguage() {
    const isArabic = currentLang === 'ar';
    const activePage = document.querySelector('.page-section.active-page');

    if (loadingOverlayGlobal && loadingOverlayGlobal.style.display === 'flex' && loadingTextGlobal) {
        const currentMessageKey = loadingTextGlobal.getAttribute('data-current-key') || 'Generating CV, please wait...';
        loadingTextGlobal.textContent = translations[currentLang][currentMessageKey] || currentMessageKey;
    }

    if (!activePage) return;

    const translatableElements = activePage.querySelectorAll('[data-en], [data-ar], [data-translate-id]');
    translatableElements.forEach(element => {
        let newTextContent = null;
        const translateKey = element.getAttribute('data-translate-id');
        if (translateKey && translations[currentLang] && translations[currentLang][translateKey] !== undefined) {
            newTextContent = translations[currentLang][translateKey];
        } else {
            const textKeyAttr = isArabic ? element.getAttribute('data-ar') : element.getAttribute('data-en');
            if (textKeyAttr) newTextContent = textKeyAttr;
        }
        if (newTextContent !== null && element.textContent !== newTextContent && !element.closest('#loading-overlay')) {
            element.textContent = newTextContent;
        }
    });

    const placeholderElements = activePage.querySelectorAll('[data-en-placeholder], [data-ar-placeholder]');
    placeholderElements.forEach(element => {
        const placeholderKey = isArabic ? element.getAttribute('data-ar-placeholder') : element.getAttribute('data-en-placeholder');
        if (placeholderKey && element.placeholder !== placeholderKey) {
            element.placeholder = placeholderKey;
        }
    });

    const altElements = activePage.querySelectorAll('[data-en-alt], [data-ar-alt]');
    altElements.forEach(element => {
        if (element.tagName === 'IMG') {
            const altKey = isArabic ? element.getAttribute('data-ar-alt') : element.getAttribute('data-en-alt');
            if (altKey && element.alt !== altKey) element.alt = altKey;
        }
    });

    if (document.getElementById('payment-options-page')?.classList.contains('active-page')) {
        updatePriceDisplay(getDiscountedPrice());
    }
}

function lazyLoadImages() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    if (lazyImage.dataset.srcset) {
                        lazyImage.srcset = lazyImage.dataset.srcset;
                    }
                    lazyImage.removeAttribute('data-src');
                    lazyImage.removeAttribute('data-srcset');
                    observer.unobserve(lazyImage);
                }
            });
        }, { rootMargin: '0px 0px 200px 0px', threshold: 0.01 });
        lazyImages.forEach(image => { observer.observe(image); });
    } else {
        lazyImages.forEach(image => {
            image.src = image.dataset.src;
            if (image.dataset.srcset) { image.srcset = image.dataset.srcset; }
            image.removeAttribute('data-src');
            image.removeAttribute('data-srcset');
        });
    }
}

function validateAndShowTemplatePage() {
    const name = document.getElementById('name-input');
    const title = document.getElementById('title-input');
    const email = document.getElementById('email-input');

    if (!name || !title || !email || !name.value.trim() || !title.value.trim() || !email.value.trim()) {
        alert(translations[currentLang]['Please fill in all fields.'] || 'Please fill in the basic fields (Name, Job Title, Email) before proceeding.');
        return;
    }
    showPage('cv-template-selection-page');
}

// --- Payment Related Functions ---
function openPaymentForCV() {
    let price = 0;
    if (selectedTemplateCategory === 'normal') price = 10;
    else if (selectedTemplateCategory === 'standard') price = 15;
    else if (selectedTemplateCategory === 'professional') price = 25;
    else if (selectedTemplateCategory === 'ast') price = 25;

    selectedPriceToPay = price;
    discountApplied = 0;
    updatePriceDisplay(getDiscountedPrice());
    showPage('payment-options-page');
}

function updatePriceDisplay(discountedPrice) {
    const finalPriceText = document.getElementById("final-price-text");
    if (finalPriceText) {
        const currency = currentLang === 'ar' ? ' ريال' : ' SAR';
        finalPriceText.textContent = (translations[currentLang]['messages'] || "Price Paid") + ": " + discountedPrice + currency;
    }
}

function getDiscountedPrice() {
    if (discountApplied > 0 && discountApplied <= 100) {
        return Math.max(0, Math.round(selectedPriceToPay * (1 - discountApplied / 100)));
    }
    return selectedPriceToPay;
}

function applyDiscountCode() {
    const codeInput = document.getElementById("discount-code");
    if (!codeInput) return;
    const code = codeInput.value.trim().toUpperCase();

    if (code && discountCodes[code] !== undefined) {
        discountApplied = discountCodes[code];
        const discounted = getDiscountedPrice();
        updatePriceDisplay(discounted);
        alert(currentLang === 'ar' ?
            `تم تطبيق خصم بنسبة ${discountApplied}%` :
            `A discount of ${discountApplied}% has been applied.`);
        if (discountApplied === 100) {
             alert(currentLang === 'ar' ? 'هذه السيرة الذاتية مجانية! سيتم إرسالها قريباً إلى بريدك الإلكتروني.' : 'This CV is free! It will be sent to your email shortly.');
        }
    } else if (code) {
        discountApplied = 0;
        updatePriceDisplay(selectedPriceToPay);
        alert(currentLang === 'ar' ? 'كود الخصم غير صالح.' : 'Invalid discount code.');
    } else {
        discountApplied = 0;
        updatePriceDisplay(selectedPriceToPay);
    }
}

function openQrPaymentPage(method, finalPrice, templateCategory) {
    const qrPaymentImage = document.getElementById("qr-payment-image");
    const paypalContainer = document.getElementById("paypal-button-container");
    const manualPaymentForm = document.getElementById("manual-payment-form");
    const submitBtn = document.getElementById("submit-payment-proof");

    qrPaymentImage.style.display = "none";
    paypalContainer.style.display = "none";
    manualPaymentForm.style.display = "none";
    if(submitBtn) submitBtn.style.display = "none";
    if(qrPaymentResultDiv) qrPaymentResultDiv.textContent = '';

    if(paymentMessagesInput) paymentMessagesInput.value = finalPrice;

    const qrManualPaymentPage = document.getElementById('qr-manual-payment-page');
    if (qrManualPaymentPage) {
        qrManualPaymentPage.setAttribute("data-payment-method", method);
        qrManualPaymentPage.setAttribute("data-discount-code", discountApplied > 0 ? discountApplied.toString() : "0");
        qrManualPaymentPage.setAttribute("data-cv-template-category", templateCategory);
        qrManualPaymentPage.setAttribute("data-price-paid", finalPrice.toString());
    }

    if (method.toLowerCase() === "stc pay") {
        qrPaymentImage.src = "QRstcpay.png";
        qrPaymentImage.alt = "STC Pay QR Code";
        qrPaymentImage.style.display = "block";
        manualPaymentForm.style.display = "block";
        if(submitBtn) submitBtn.style.display = "block";
    } else if (method.toLowerCase() === "rajhi") {
        qrPaymentImage.src = "QRalrajhi.png";
        qrPaymentImage.alt = "Al Rajhi QR Code";
        qrPaymentImage.style.display = "block";
        manualPaymentForm.style.display = "block";
        if(submitBtn) submitBtn.style.display = "block";
    } else if (method.toLowerCase() === "paypal") {
        paypalContainer.style.display = "block";
        renderPayPalButton(finalPrice, templateCategory);
    }
    showPage('qr-manual-payment-page');
}

function isMobileDevice() { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); }

function loadPayPalSDK(lang) {
    const existingScript = document.getElementById("paypal-sdk");
    if (existingScript) {
        existingScript.remove();
    }
    const script = document.createElement("script");
    script.id = "paypal-sdk";
    const locale = (lang === "ar") ? "ar_SA" : "en_US";
    script.src = `https://www.paypal.com/sdk/js?client-id=Abhv3wUuFjO_XRoXoxJ0g3AyrUE3yExMtqp3TLUrK0N82SrBpxRk-kde3jyS-XmAeLEnbJiRds4w7aEr&currency=USD&locale=${locale}&disable-funding=card`;
    script.onload = () => {
        const paypalContainer = document.getElementById("paypal-button-container");
        const qrPage = document.getElementById('qr-manual-payment-page');
        if (qrPage && qrPage.classList.contains('active-page') && qrPage.getAttribute("data-payment-method") === "PayPal") {
             const price = parseFloat(qrPage.getAttribute("data-price-paid")) || getDiscountedPrice();
             const category = qrPage.getAttribute("data-cv-template-category") || selectedTemplateCategory;
             renderPayPalButton(price, category);
        }
    };
    document.head.appendChild(script);
}

function renderPayPalButton(finalPrice, templateCategory) {
    const paypalContainer = document.getElementById("paypal-button-container");
    if (!paypalContainer) return;
    paypalContainer.innerHTML = '';

    if (typeof paypal === 'undefined') {
        console.warn("PayPal SDK not loaded. Retrying in 500ms.");
        setTimeout(() => renderPayPalButton(finalPrice, templateCategory), 500);
        return;
    }
    let amountUSD = parseFloat((finalPrice / 3.75).toFixed(2));
    if (amountUSD < 0.01 && finalPrice > 0) amountUSD = 0.01;
    else if (finalPrice === 0) amountUSD = 0;

    const descriptionText = translations[currentLang][`${templateCategory}-templates-title`] || translations[currentLang]['Professional CV Builder'] || "CV Design Service";

    if (amountUSD === 0) { // Handle free CV
        (async () => {
            toggleLoadingOverlay(true, 'Payment processing, please wait...');
            try {
                const payerEmail = document.getElementById('email-input')?.value.trim() || 'freecv@example.com';
                const payerName = document.getElementById('name-input')?.value.trim() || 'Free CV User';
                
                const cvPdfFileBase64 = await captureCVasPDF(cvContainer, false);
                if (!cvPdfFileBase64) throw new Error("Failed to generate PDF for free CV.");
                const cvPdfFileNameForClient = `CV_${payerName.replace(/\s/g, '_') || 'FreeCV'}.pdf`;

                const scriptUrl = `https://script.google.com/macros/s/AKfycbxxkX4jsV4zSz4vR7FcCOhYJmXXuOAt5WrJYgZmhTlmO7dzqXARLM6q_5QNo2KVs8bWww/exec`;
                const params = new URLSearchParams({
                    name: payerName, email: payerEmail, phoneNumber: '',
                    cvTemplateCategory: templateCategory, pricePaid: '0',
                    paymentMethod: 'Free (Discount)', language: currentLang,
                    cvPdfFileBase64: cvPdfFileBase64, cvPdfFileName: cvPdfFileNameForClient,
                    transactionId: 'FREE_CV_' + Date.now(),
                    discountCode: Object.keys(discountCodes).find(key => discountCodes[key] === 100) || 'FREECV'
                });
                const response = await fetch(scriptUrl, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: params.toString(), mode: 'cors' });
                const resultData = await response.json();
                if (resultData.status === 'success') {
                    alert(resultData.message || translations[currentLang]["CV generated successfully and sent!"]);
                } else {
                    throw new Error(resultData.error || resultData.message || 'Server error for free CV.');
                }
                showPage('landing-page');
            } catch (error) {
                console.error('Error processing free CV:', error);
                alert(translations[currentLang]["Error generating PDF for CV."] + ` (${error.message})`);
            } finally {
                toggleLoadingOverlay(false);
            }
        })();
        return;
    }

    paypal.Buttons({
        createOrder: (data, actions) => {
            return actions.order.create({
                purchase_units: [{
                    amount: { value: amountUSD.toString(), currency_code: 'USD' },
                    description: `${descriptionText} (${finalPrice} SAR)`
                }]
            });
        },
        onApprove: async (data, actions) => {
            toggleLoadingOverlay(true, 'Payment processing, please wait...');
            try {
                const details = await actions.order.capture();
                alert(translations[currentLang]["payment-success"]);
                const payerEmail = details.payer.email_address;
                const payerName = details.payer.name.given_name + ' ' + details.payer.name.surname;
                
                const cvPdfFileBase64 = await captureCVasPDF(cvContainer, false);
                if (!cvPdfFileBase64) throw new Error("Failed to generate PDF for PayPal payment.");
                const cvPdfFileNameForClient = `CV_${payerName.replace(/\s/g, '_') || 'PaidCV'}.pdf`;

                const scriptUrl = `https://script.google.com/macros/s/AKfycbxxkX4jsV4zSz4vR7FcCOhYJmXXuOAt5WrJYgZmhTlmO7dzqXARLM6q_5QNo2KVs8bWww/exec`;
                const actualDiscountPercentage = parseFloat(document.getElementById('qr-manual-payment-page')?.getAttribute("data-discount-code")) || discountApplied || 0;
                const actualDiscountCodeStr = actualDiscountPercentage > 0 ? Object.keys(discountCodes).find(key => discountCodes[key] === actualDiscountPercentage) || 'CUSTOM' : '';

                const params = new URLSearchParams({
                    name: payerName, email: payerEmail, phoneNumber: '',
                    cvTemplateCategory: templateCategory, pricePaid: finalPrice,
                    paymentMethod: 'PayPal', language: currentLang,
                    cvPdfFileBase64: cvPdfFileBase64, cvPdfFileName: cvPdfFileNameForClient,
                    transactionId: details.id,
                    discountCode: actualDiscountCodeStr
                });
                const response = await fetch(scriptUrl, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: params.toString(), mode: 'cors' });
                const resultData = await response.json();
                if (resultData.status === 'success') {
                    console.log('PayPal payment processed and CV data sent.');
                    alert(resultData.message || translations[currentLang]["CV generated successfully and sent!"]);
                } else {
                    throw new Error(resultData.error || resultData.message || 'Server error after PayPal.');
                }
                showPage('landing-page');
            } catch (error) {
                console.error('Error in PayPal onApprove:', error);
                alert(translations[currentLang]["payment-error-general"] + ` (${error.message})`);
            } finally {
                toggleLoadingOverlay(false);
            }
        },
        onError: (err) => {
            console.error('PayPal Checkout error:', err);
            alert(translations[currentLang]["payment-error-general"]);
            toggleLoadingOverlay(false);
        }
    }).render('#paypal-button-container').catch(err => {
        console.error("Failed to render PayPal Buttons:", err);
        if (paypalContainer.style.display === 'block') {
            alert("Error initializing PayPal. Please try another payment method or refresh.");
        }
    });
}


async function submitPaymentProof(event) {
    event.preventDefault();
    if (isCapturingPdf) {
        console.warn("[submitPaymentProof] PDF capture is already in progress. Aborting.");
        alert(currentLang === 'ar' ? 'عملية إنشاء السيرة الذاتية جارية بالفعل، يرجى الانتظار.' : 'CV generation is already in progress, please wait.');
        return;
    }
    toggleLoadingOverlay(true, 'Payment processing, please wait...');

    const name = paymentNameInput.value.trim();
    const email = paymentEmailInput.value.trim();
    const phoneNumber = paymentPhoneInput.value.trim();
    const pricePaid = paymentMessagesInput.value.trim();
    const file = paymentFileInput.files[0];

    const qrManualPaymentPage = document.getElementById('qr-manual-payment-page');
    const paymentMethod = qrManualPaymentPage.getAttribute("data-payment-method");
    const currentDiscountPercentage = parseFloat(qrManualPaymentPage.getAttribute("data-discount-code")) || 0;
    const cvTemplateCategory = qrManualPaymentPage.getAttribute("data-cv-template-category");

    if (!name || !email || !phoneNumber || !pricePaid) {
        qrPaymentResultDiv.style.color = "red";
        qrPaymentResultDiv.textContent = translations[currentLang]['Please fill in all fields.'];
        toggleLoadingOverlay(false); return;
    }
    if (!validateEmail(email)) {
        qrPaymentResultDiv.style.color = "red";
        qrPaymentResultDiv.textContent = translations[currentLang]['Please enter a valid email.'];
        toggleLoadingOverlay(false); return;
    }
    if (file) {
        if (file.size > MAX_FILE_SIZE) {
            qrPaymentResultDiv.style.color = "red";
            qrPaymentResultDiv.textContent = translations[currentLang]['File size exceeds the limit (3MB).'];
            toggleLoadingOverlay(false); return;
        }
        if (!ALLOWED_FILE_TYPES.includes(file.type)) {
            qrPaymentResultDiv.style.color = "red";
            qrPaymentResultDiv.textContent = translations[currentLang]['Please attach only image or PDF files.'];
            toggleLoadingOverlay(false); return;
        }
    }

    try {
        const cvPdfFileBase64 = await captureCVasPDF(cvContainer, false);
        if (!cvPdfFileBase64) throw new Error("Failed to generate PDF for manual payment.");
        const cvPdfFileNameForClient = `CV_${name.replace(/\s/g, '_') || 'ManualPaymentCV'}.pdf`;

        const scriptUrl = "https://script.google.com/macros/s/AKfycbxxkX4jsV4zSz4vR7FcCOhYJmXXuOAt5WrJYgZmhTlmO7dzqXARLM6q_5QNo2KVs8bWww/exec";
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("phoneNumber", phoneNumber);
        formData.append("pricePaid", pricePaid);
        formData.append("language", currentLang);
        formData.append("paymentMethod", paymentMethod);
        const actualDiscountCodeStr = currentDiscountPercentage > 0 ? Object.keys(discountCodes).find(key => discountCodes[key] === currentDiscountPercentage) || 'CUSTOM_DISCOUNT' : '';
        formData.append("discountCode", actualDiscountCodeStr);
        formData.append("cvTemplateCategory", cvTemplateCategory);
        formData.append('cvPdfFileBase64', cvPdfFileBase64);
        formData.append('cvPdfFileName', cvPdfFileNameForClient);

        if (file) {
            const fileBase64 = await fileToBase64(file);
            formData.append("paymentFileBase64", fileBase64);
            formData.append("paymentFileType", file.type);
            formData.append("paymentFileName", file.name);
        }

        const response = await fetch(scriptUrl, { method: 'POST', body: formData, mode: 'cors' });
        const data = await response.json();
        if (data.status === 'success') {
            qrPaymentResultDiv.style.color = "green";
            qrPaymentResultDiv.textContent = data.message || (currentLang === 'ar' ? "تم استلام إيصال الدفع بنجاح. سيتم إرسال السيرة الذاتية لبريدك بعد المراجعة." : "Receipt received. CV will be sent after review.");
            setTimeout(() => { showPage('landing-page'); }, 5000);
        } else {
            throw new Error(data.error || data.message || 'Server-side processing error.');
        }
    } catch (err) {
        console.error("Error in submitPaymentProof:", err);
        qrPaymentResultDiv.style.color = "red";
        qrPaymentResultDiv.textContent = (translations[currentLang]["Error processing file."] || "Error: ") + err.message;
    } finally {
        toggleLoadingOverlay(false);
    }
}

function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result.split(',')[1]);
        reader.onerror = error => reject(error);
    });
}
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

/**
 * Captures the CV container as a PDF using a robust cloning and preparation strategy.
 * Includes extensive console logging for debugging.
 * @param {HTMLElement} originalCvElement The DOM element containing the CV to be captured.
 * @param {boolean} downloadPdf If true, the PDF will be downloaded; otherwise, Base64 is returned.
 * @returns {Promise<string|null>} Base64 string of the PDF or null if downloaded/error.
 */
async function captureCVasPDF(cvContainer, downloadPdf = false) {
    console.log(`[captureCVasPDF V13 HTML Watermark & Fixes] بدأت العملية. تنزيل PDF: ${downloadPdf}`);

    if (!cvContainer) {
        console.error("[captureCVasPDF V13 HTML Watermark & Fixes] لم يتم العثور على عنصر حاوية السيرة الذاتية!");
        return Promise.reject("CV container not found");
    }
    console.log("[captureCVasPDF V13 HTML Watermark & Fixes] تم العثور على عنصر حاوية السيرة الذاتية:", cvContainer.id);

    // التأكد من إدارة علامة isCapturingPdf لمنع التشغيل المتزامن
    if (typeof isCapturingPdf !== 'undefined' && isCapturingPdf) {
        console.warn("[captureCVasPDF V13 HTML Watermark & Fixes] عملية الالتقاط قيد التقدم بالفعل. سيتم التخطي.");
        return Promise.reject("Capture in progress");
    }
    if (typeof isCapturingPdf !== 'undefined') {
        isCapturingPdf = true;
    }
    // عرض شاشة التحميل
    if (typeof toggleLoadingOverlay === 'function') {
        toggleLoadingOverlay(true, 'Generating CV, please wait...');
    }

    // --- 1. حفظ الأنماط والحالة الأصلية لعنصر السيرة الذاتية وآبائه ---
    const originalStyles = {
        cvContainer: {},
        cvPreviewArea: {},
        cvPreviewPage: {}
    };

    const cvPropsToStore = [
        'display', 'width', 'height', 'minHeight', 'maxHeight', 'overflow', 'overflowX', 'overflowY',
        'backgroundColor', 'position', 'top', 'left', 'right', 'bottom', 'zIndex', 'transform',
        'padding', 'margin', 'zoom', 'maxWidth', 'visibility', 'boxShadow', 'border',
        'direction', 'fontFamily', 'fontSize', 'lineHeight', 'color', 'textAlign',
        'flexDirection', 'justifyContent', 'alignItems', 'gap', 'gridTemplateColumns',
        'gridTemplateRows', 'gridTemplateAreas', 'boxSizing'
    ];

    cvPropsToStore.forEach(prop => {
        originalStyles.cvContainer[prop] = getComputedStyle(cvContainer)[prop];
    });
    originalStyles.cvContainer.className = cvContainer.className;
    originalStyles.cvContainer.scrollTop = cvContainer.scrollTop;
    console.log("[captureCVasPDF V13 HTML Watermark & Fixes] تم حفظ الأنماط الأصلية لحاوية السيرة الذاتية.");

    const cvPreviewArea = document.getElementById('cv-preview-area');
    const cvPreviewPage = document.getElementById('cv-preview-page');
    const parentPropsToStore = ['display', 'justifyContent', 'alignItems', 'overflow', 'maxHeight', 'padding', 'margin', 'minHeight', 'position', 'boxSizing'];

    if (cvPreviewArea) {
        parentPropsToStore.forEach(prop => originalStyles.cvPreviewArea[prop] = getComputedStyle(cvPreviewArea)[prop]);
    }
    if (cvPreviewPage) {
        parentPropsToStore.forEach(prop => originalStyles.cvPreviewPage[prop] = getComputedStyle(cvPreviewPage)[prop]);
    }
    console.log("[captureCVasPDF V13 HTML Watermark & Fixes] تم حفظ الأنماط الأصلية للعناصر الأصلية (الآباء).");

    const removeButtonsOriginal = Array.from(cvContainer.querySelectorAll('.remove-field'));
    removeButtonsOriginal.forEach(btn => btn.style.display = 'none');
    console.log("[captureCVasPDF V13 HTML Watermark & Fixes] تم إخفاء أزرار الإزالة.");

    let captureError = null;
    let watermarkDiv = null; // تعريف watermarkDiv في هذا النطاق

    try {
        // --- 2. تطبيق الأنماط المؤقتة لالتقاط PDF ---
        console.log("[captureCVasPDF V13 HTML Watermark & Fixes] تطبيق الأنماط المؤقتة على حاوية السيرة الذاتية لالتقاط PDF.");

        if (cvPreviewArea) {
            Object.assign(cvPreviewArea.style, {
                display: 'block',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                overflow: 'visible',
                maxHeight: 'none',
                padding: '0',
                margin: '0',
                position: 'relative'
            });
        }
        if (cvPreviewPage) {
            Object.assign(cvPreviewPage.style, {
                display: 'block',
                padding: '0',
                margin: '0',
                overflow: 'visible',
                minHeight: 'auto',
                position: 'relative'
            });
        }

        Object.assign(cvContainer.style, {
            width: '210mm',
            minHeight: '297mm',
            height: 'auto',
            maxHeight: 'none',
            overflow: 'visible',
            overflowY: 'visible',
            backgroundColor: '#ffffff',
            position: 'absolute',
            top: '0',
            left: '-9999px',
            zIndex: '-1',
            transform: 'none',
            padding: '10mm', // هوامش داخلية للصفحة
            margin: '0',
            zoom: '1',
            maxWidth: 'none',
            visibility: 'visible',
            boxSizing: 'border-box'
        });

        cvContainer.className = `${selectedTemplateCategory}-layout template${selectedTemplate}`;
        cvContainer.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
        console.log(`[captureCVasPDF V13 HTML Watermark & Fixes] تم ضبط اتجاه حاوية السيرة الذاتية إلى: ${cvContainer.dir}`);

        // --- 3. إعادة إنشاء محتوى السيرة الذاتية للالتقاط ---
        console.log("[captureCVasPDF V13 HTML Watermark & Fixes] استدعاء generateCV لتعبئة حاوية السيرة الذاتية الحالية...");
        generateCV(cvContainer);

        // إضافة العلامة المائية إذا كان downloadPdf صحيحًا (مثل V9)
        if (downloadPdf) {
            const watermarkText = translations[currentLang]['Watermark Preview Text'] || (currentLang === 'ar' ? "للعرض فقط" : "ONLY PREVIEW");
            watermarkDiv = document.createElement('div');
            watermarkDiv.textContent = watermarkText;
            Object.assign(watermarkDiv.style, {
                position: 'absolute',
                top: '50%',
                left: '50%',
                // ** تكبير العلامة المائية هنا **
                transform: 'translate(-50%, -50%) rotate(-40deg) scale(1.8)', // زادت scale من 1.2 إلى 1.8
                fontSize: 'clamp(3em, 10vw, 6em)', // زادت قيم clamp لجعل الخط أكبر
                color: 'rgba(0, 0, 0, 0.08)',
                fontWeight: 'bold',
                textAlign: 'center',
                pointerEvents: 'none',
                zIndex: '10000',
                width: '160%',
                lineHeight: '1.2',
                wordBreak: 'break-word',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: '1'
            });
            cvContainer.appendChild(watermarkDiv);
            console.log("[captureCVasPDF V13 HTML Watermark & Fixes] تم إضافة DIV العلامة المائية إلى حاوية السيرة الذاتية للتنزيل المباشر.");
        }

        // --- 4. الانتظار لضمان اكتمال العرض وتحميل جميع الأصول ---
        cvContainer.offsetHeight;
        console.log(`[captureCVasPDF V13 HTML Watermark & Fixes] ارتفاع تمرير حاوية السيرة الذاتية بعد تعبئة المحتوى: ${cvContainer.scrollHeight}px`);

        const imagesInCv = Array.from(cvContainer.querySelectorAll('img'));
        console.log(`[captureCVasPDF V13 HTML Watermark & Fixes] تم العثور على ${imagesInCv.length} صورة في حاوية السيرة الذاتية.`);
        if (imagesInCv.length > 0) {
            await Promise.all(imagesInCv.map(img => {
                if (img.complete && img.naturalHeight !== 0 && img.naturalWidth !== 0) return Promise.resolve();
                return new Promise((resolve) => {
                    img.onload = () => { resolve(); };
                    img.onerror = () => {
                        console.warn(`[captureCVasPDF V13 HTML Watermark & Fixes] فشل تحميل الصورة في حاوية السيرة الذاتية: ${img.src}`);
                        resolve();
                    };
                    if (img.src && !img.complete) {
                        const tempSrc = img.src;
                        img.src = '';
                        img.src = tempSrc;
                    }
                });
            }));
            console.log("[captureCVasPDF V13 HTML Watermark & Fixes] تم فحص/تحميل جميع الصور في حاوية السيرة الذاتية.");
        }

        // انتظار الخطوط المخصصة (إذا تم استخدام FontFaceObserver)
        if (typeof FontFaceObserver !== 'undefined' && getComputedStyle(cvContainer).fontFamily) {
            const desiredFontFamilies = getComputedStyle(cvContainer).fontFamily.split(',').map(f => f.trim().replace(/['"]/g, ''));
            console.log(`[captureCVasPDF V13 HTML Watermark & Fixes] انتظار تحميل الخطوط: ${desiredFontFamilies.join(', ')}`);
            await Promise.all(desiredFontFamilies.map(fontName => {
                if (fontName && !['sans-serif', 'serif', 'monospace', 'cursive', 'fantasy', 'system-ui', '-apple-system', 'Segoe UI'].includes(fontName)) {
                    const font = new FontFaceObserver(fontName);
                    return font.load(null, 5000)
                        .catch(e => console.warn(`[captureCVasPDF V13 HTML Watermark & Fixes] فشل تحميل الخط ${fontName}:`, e));
                }
                return Promise.resolve();
            }));
            console.log("[captureCVasPDF V13 HTML Watermark & Fixes] تم فحص/تحميل جميع الخطوط المطلوبة.");
        }

        await new Promise(resolve => setTimeout(resolve, isMobileDevice() ? 3000 : 1500));
        console.log("[captureCVasPDF V13 HTML Watermark & Fixes] تم الانتظار للرسم النهائي بعد تطبيق الأنماط وتحميل الأصول.");

        // --- 5. تهيئة html2pdf.js وإعدادات html2canvas ---
        const isMobile = isMobileDevice();
        const scaleFactor = isMobile ? 1.5 : 2;
        const imageQuality = isMobile ? 0.8 : 0.95;
        console.log(`[captureCVasPDF V13 HTML Watermark & Fixes] استخدام المقياس: ${scaleFactor}، الجودة: ${imageQuality}. جوال: ${isMobile}`);

        const pdfOptions = {
            margin: 0,
            filename: `CV_${(document.getElementById('name-input')?.value.trim().replace(/\s/g, '_') || 'ResailCV')}.pdf`,
            image: { type: 'jpeg', quality: imageQuality },
            html2canvas: {
                scale: scaleFactor,
                useCORS: true,
                allowTaint: true,
                backgroundColor: '#ffffff',
                logging: false,
                letterRendering: true,
                x: cvContainer.offsetLeft,
                y: cvContainer.offsetTop,
                width: cvContainer.offsetWidth,
                height: cvContainer.scrollHeight, // التقاط كامل ارتفاع التمرير للحاوية
                windowWidth: cvContainer.scrollWidth,
                windowHeight: cvContainer.scrollHeight,
                scrollX: 0,
                scrollY: 0,
                onclone: (clonedDoc) => {
                    console.log("[captureCVasPDF V13 HTML Watermark & Fixes] تم تشغيل onclone الداخلي لـ html2canvas.");
                    const body = clonedDoc.body;
                    body.style.fontFamily = getComputedStyle(cvContainer).fontFamily || 'Tajawal, Arial, sans-serif';
                    body.style.direction = cvContainer.dir;
                    const clonedCvElement = clonedDoc.getElementById(cvContainer.id);
                    if (clonedCvElement) {
                        clonedCvElement.className = cvContainer.className;
                        clonedCvElement.dir = cvContainer.dir;
                    }
                    Array.from(clonedDoc.querySelectorAll('.remove-field')).forEach(btn => btn.style.display = 'none');
                }
            },
            jsPDF: {
                orientation: 'portrait', unit: 'mm', format: 'a4',
                compress: true, putOnlyUsedFonts: true, floatPrecision: 'smart'
            },
            pagebreak: {
                mode: ['css', 'avoid-all'],
                after: '.cv-end-marker'
            }
        };
        console.log("[captureCVasPDF V13 HTML Watermark & Fixes] تم إعداد خيارات html2pdf.");

        // --- 6. إنشاء ملف PDF ---
        console.log("[captureCVasPDF V13 HTML Watermark & Fixes] بدء إنشاء html2pdf من عنصر حاوية السيرة الذاتية...");
        const worker = html2pdf().from(cvContainer).set(pdfOptions);

        if (downloadPdf) {
            console.log("[captureCVasPDF V13 HTML Watermark & Fixes] محاولة حفظ PDF مباشرة...");
            await worker.save();
            console.log("[captureCVasPDF V13 HTML Watermark & Fixes] بدأت عملية حفظ PDF.");
            return null;
        } else {
            console.log("[captureCVasPDF V13 HTML Watermark & Fixes] محاولة الحصول على PDF كـ blob...");
            const pdfBlob = await worker.output('blob');
            console.log(`[captureCVasPDF V13 HTML Watermark & Fixes] تم استلام PDF blob. الحجم: ${pdfBlob.size} بايت، النوع: ${pdfBlob.type}`);
            if (pdfBlob.size < 2048 && pdfBlob.size > 0) {
                console.warn("[captureCVasPDF V13 HTML Watermark & Fixes] حجم PDF blob صغير جدًا، قد يكون فارغًا أو محتواه ضئيلًا.");
            } else if (pdfBlob.size === 0) {
                console.error("[captureCVasPDF V13 HTML Watermark & Fixes] حجم PDF blob صفر. فشل الالتقاط في إنتاج محتوى.");
                throw new Error("Generated PDF is empty (size 0).");
            }
            console.log("[captureCVasPDF V13 HTML Watermark & Fixes] تحويل blob إلى Base64...");
            return await fileToBase64(pdfBlob);
        }

    } catch (error) {
        captureError = error;
        console.error("[captureCVasPDF V13 HTML Watermark & Fixes] خطأ حرج أثناء إنشاء PDF:", error, error.stack);
        alert(translations[currentLang]['Error generating PDF for CV.'] + ` (${error.message || 'Unknown error'})`);
        throw error;
    } finally {
        console.log("[captureCVasPDF V13 HTML Watermark & Fixes] الدخول إلى كتلة finally لاستعادة الأنماط...");

        // إزالة العلامة المائية إذا تم إضافتها
        if (watermarkDiv && watermarkDiv.parentElement) {
            watermarkDiv.parentElement.removeChild(watermarkDiv);
            cvContainer.style.position = originalStyles.cvContainer.position;
            console.log("[captureCVasPDF V13 HTML Watermark & Fixes] تم إزالة العلامة المائية.");
        }

        console.log("[captureCVasPDF V13 HTML Watermark & Fixes] استعادة الأنماط الأصلية لحاوية السيرة الذاتية...");
        for (const prop in originalStyles.cvContainer) {
            if (originalStyles.cvContainer.hasOwnProperty(prop)) {
                if (prop === 'className') {
                    cvContainer.className = originalStyles.cvContainer[prop];
                } else if (prop === 'scrollTop') {
                    cvContainer.scrollTop = originalStyles.cvContainer[prop];
                } else {
                    cvContainer.style[prop] = originalStyles.cvContainer[prop];
                }
            }
        }

        if (cvPreviewArea) {
            for (const prop in originalStyles.cvPreviewArea) {
                if (originalStyles.cvPreviewArea.hasOwnProperty(prop)) {
                    cvPreviewArea.style[prop] = originalStyles.cvPreviewArea[prop];
                }
            }
        }
        if (cvPreviewPage) {
            for (const prop in originalStyles.cvPreviewPage) {
                if (originalStyles.cvPreviewPage.hasOwnProperty(prop)) {
                    cvPreviewPage.style[prop] = originalStyles.cvPreviewPage[prop];
                }
            }
        }

        removeButtonsOriginal.forEach(btn => btn.style.display = '');
        console.log("[captureCVasPDF V13 HTML Watermark & Fixes] تم استعادة الأنماط الأصلية وأزرار الإزالة.");

        if (document.getElementById('cv-preview-page')?.classList.contains('active-page') ||
            document.getElementById('cv-template-selection-page')?.classList.contains('active-page') ||
            document.getElementById('cv-data-entry-page')?.classList.contains('active-page')) {
            console.log("[captureCVasPDF V13 HTML Watermark & Fixes] إعادة إنشاء السيرة الذاتية للمعاينة على الشاشة (الحاوية الأصلية).");
            generateCV(cvContainer);
        }

        if (typeof isCapturingPdf !== 'undefined') {
            isCapturingPdf = false;
        }
        if (typeof toggleLoadingOverlay === 'function') {
            toggleLoadingOverlay(false);
        }
        // إصلاح السطر 1077 (أو ما يعادله بعد التعديلات).
        // الخطأ غالباً في استخدام القوس ` ` في console.log
        // تأكد من أن كل الـ template literals (باستخدام `) مغلقة بشكل صحيح
        // وإذا كان السطر طويلاً، يمكن تقسيمه أو تبسيطه.
        // هنا مثال على السطر النهائي بعد التعديلات والتأكد من البنية:
        console.log(`[captureCVasPDF V13 HTML Watermark & Fixes] انتهت العملية. isCapturingPdf: ${typeof isCapturingPdf !== 'undefined' ? isCapturingPdf : 'N/A'}. الخطأ الذي حدث: ${captureError ? captureError.message : 'لا يوجد'}`);
    }
}




async function generateAndDownloadPDF_html2pdf() {
    console.log("[generateAndDownloadPDF_html2pdf V7] Initiated.");
    if (isCapturingPdf) {
        console.warn("[generateAndDownloadPDF_html2pdf V7] PDF capture already in progress. Aborting.");
        alert(translations[currentLang]['Generating CV, please wait...']);
        return;
    }
    toggleLoadingOverlay(true, 'Generating CV, please wait...');
    try {
        await captureCVasPDF(cvContainer, true); // downloadPdf = true
        alert(currentLang === 'ar' ? 'تم تنزيل السيرة الذاتية بنجاح!' : 'CV downloaded successfully!');
        console.log("[generateAndDownloadPDF_html2pdf V7] PDF download successful message shown.");
    } catch (error) {
        console.error("[generateAndDownloadPDF_html2pdf V7] Error:", error);
        alert(translations[currentLang]['Error generating PDF for CV.'] + ` (${error.message || 'Unknown error'})`);
    } finally {
        toggleLoadingOverlay(false);
        console.log("[generateAndDownloadPDF_html2pdf V7] Process finished.");
    }
}


// --- CV Content Generation (generateCV, selectTemplate, handleProfilePicChange, add/remove fields, populateWithTestData) ---
// ... (الدوال الأخرى تبقى كما هي من الرد السابق، مع التأكيد على استخدام translations للنصوص النائبة)

function selectTemplate(templateNumber, category) {
    // console.log(`[selectTemplate] Template: ${templateNumber}, Category: ${category}`);
    const previews = document.querySelectorAll('.template-preview-container .template-preview');
    previews.forEach(preview => preview.classList.remove('selected-template'));

    const selectedPreview = document.querySelector(`.template-preview[data-template-category="${category}"][onclick*="selectTemplate(${templateNumber}, '${category}')"]`);
    if (selectedPreview) {
        selectedPreview.classList.add('selected-template');
    }
    selectedTemplate = templateNumber;
    selectedTemplateCategory = category;
    generateCV(cvContainer);
}

function handleProfilePicChange(event) {
    const file = event.target.files[0];
    if (file) {
        // console.log(`[handleProfilePicChange] File selected: ${file.name}`);
        const reader = new FileReader();
        reader.onload = function(e) {
            profilePicDataUrl = e.target.result;
            // console.log("[handleProfilePicChange] Profile picture loaded into data URL.");
            generateCV(cvContainer); updateProgress();
        };
        reader.readAsDataURL(file);
    } else {
        // console.log("[handleProfilePicChange] No file selected, clearing profile picture.");
        profilePicDataUrl = null;
        generateCV(cvContainer); updateProgress();
    }
}

function addExperienceField() {
    const container = document.getElementById('experience-input');
    if (!container) return;
    const newEntry = document.createElement('div');
    newEntry.className = 'experience-entry';
    newEntry.innerHTML = `
        <button type="button" class="remove-field" onclick="removeField(this)"><i class="fas fa-times-circle"></i></button>
        <input type="text" placeholder="${translations[currentLang]['Job Title']}" class="experience-title" oninput="generateCV(cvContainer); updateProgress()">
        <input type="text" placeholder="${translations[currentLang]['Company'] || (currentLang === 'ar' ? 'الشركة' : 'Company')}" class="experience-company" oninput="generateCV(cvContainer); updateProgress()">
        <input type="text" placeholder="${translations[currentLang]['Duration'] || (currentLang === 'ar' ? 'المدة' : 'Duration')}" class="experience-duration" oninput="generateCV(cvContainer); updateProgress()">
        <textarea placeholder="${translations[currentLang]['Description']}" class="experience-description" oninput="generateCV(cvContainer); updateProgress()"></textarea>
    `;
    container.appendChild(newEntry);
    // console.log("[addExperienceField] Experience field added.");
}
function removeLastExperienceField() {
    const experienceInput = document.getElementById('experience-input');
    if (!experienceInput) return;
    const entries = experienceInput.querySelectorAll('.experience-entry');
    if (entries.length > 1) {
        experienceInput.removeChild(entries[entries.length - 1]);
        // console.log("[removeLastExperienceField] Last experience field removed.");
        generateCV(cvContainer); updateProgress();
    } else {
        alert(translations[currentLang]['You must have at least one field in this section.']);
    }
}
function addEducationField() {
    const educationInput = document.getElementById('education-input');
    if (!educationInput) return;
    const newEntry = document.createElement('div');
    newEntry.className = 'education-entry';
    newEntry.innerHTML = `
         <button type="button" class="remove-field" onclick="removeField(this)"><i class="fas fa-times-circle"></i></button>
        <input type="text" placeholder="${translations[currentLang]['Degree']}" class="education-degree" oninput="generateCV(cvContainer); updateProgress()">
        <input type="text" placeholder="${translations[currentLang]['University/Institution']}" class="education-institution" oninput="generateCV(cvContainer); updateProgress()">
        <input type="text" placeholder="${translations[currentLang]['Duration'] || (currentLang === 'ar' ? 'المدة' : 'Duration')}" class="education-duration" oninput="generateCV(cvContainer); updateProgress()">
    `;
    educationInput.appendChild(newEntry);
    // console.log("[addEducationField] Education field added.");
}
function removeLastEducationField() { 
    const educationInput = document.getElementById('education-input');
    if (!educationInput) return;
    const entries = educationInput.querySelectorAll('.education-entry');
    if (entries.length > 1) {
        educationInput.removeChild(entries[entries.length - 1]);
        // console.log("[removeLastEducationField] Last education field removed.");
        generateCV(cvContainer); updateProgress();
    } else {
        alert(translations[currentLang]['You must have at least one field in this section.']);
    }
}
function addSkillField() {
    const skillsInput = document.getElementById('skills-input');
    if (!skillsInput) return;
    const newEntry = document.createElement('div');
    newEntry.className = 'skill-entry';
    newEntry.innerHTML = `
        <button type="button" class="remove-field" onclick="removeField(this)"><i class="fas fa-times-circle"></i></button>
        <input type="text" placeholder="${translations[currentLang]['Enter a skill']}" class="skill-item-input" oninput="generateCV(cvContainer); updateProgress()">
    `;
    skillsInput.appendChild(newEntry);
    // console.log("[addSkillField] Skill field added.");
}
function removeLastSkillField() {
    const skillsInput = document.getElementById('skills-input');
    if (!skillsInput) return;
    const entries = skillsInput.querySelectorAll('.skill-entry');
    if (entries.length > 1) {
        skillsInput.removeChild(entries[entries.length - 1]);
        // console.log("[removeLastSkillField] Last skill field removed.");
        generateCV(cvContainer); updateProgress();
    } else {
        alert(translations[currentLang]['You must have at least one field in this section.']);
    }
}
function addLanguageField() {
    const languagesInput = document.getElementById('languages-input');
    if (!languagesInput) return;
    const newEntry = document.createElement('div');
    newEntry.className = 'language-entry';
    newEntry.innerHTML = `
        <button type="button" class="remove-field" onclick="removeField(this)"><i class="fas fa-times-circle"></i></button>
        <input type="text" placeholder="${translations[currentLang]['Enter a language']}" class="language-item-input" oninput="generateCV(cvContainer); updateProgress()">
    `;
    languagesInput.appendChild(newEntry);
    // console.log("[addLanguageField] Language field added.");
}
function removeLastLanguageField() {
    const languagesInput = document.getElementById('languages-input');
    if (!languagesInput) return;
    const entries = languagesInput.querySelectorAll('.language-entry');
    if (entries.length > 1) {
        languagesInput.removeChild(entries[entries.length - 1]);
        // console.log("[removeLastLanguageField] Last language field removed.");
        generateCV(cvContainer); updateProgress();
    } else {
        alert(translations[currentLang]['You must have at least one field in this section.']);
    }
}
function addReferenceField() {
    const referencesInput = document.getElementById('references-input');
    if (!referencesInput) return;
    const newEntry = document.createElement('div');
    newEntry.className = 'reference-entry';
    newEntry.innerHTML = `
        <button type="button" class="remove-field" onclick="removeField(this)"><i class="fas fa-times-circle"></i></button>
        <input type="text" placeholder="${translations[currentLang]['Name']}" class="reference-name" oninput="generateCV(cvContainer); updateProgress()">
        <input type="text" placeholder="${translations[currentLang]['Position']}" class="reference-position" oninput="generateCV(cvContainer); updateProgress()">
        <input type="text" placeholder="${translations[currentLang]['Phone']}" class="reference-phone" oninput="generateCV(cvContainer); updateProgress()">
        <input type="email" placeholder="${translations[currentLang]['Email']}" class="reference-email" oninput="generateCV(cvContainer); updateProgress()">
    `;
    referencesInput.appendChild(newEntry);
    // console.log("[addReferenceField] Reference field added.");
}
function removeLastReferenceField() {
    const referencesInput = document.getElementById('references-input');
    if (!referencesInput) return;
    const entries = referencesInput.querySelectorAll('.reference-entry');
    if (entries.length > 1) {
        referencesInput.removeChild(entries[entries.length - 1]);
        // console.log("[removeLastReferenceField] Last reference field removed.");
        generateCV(cvContainer); updateProgress();
    } else {
        alert(translations[currentLang]['You must have at least one field in this section.']);
    }
}
function removeField(button) {
    const entry = button.parentElement;
    const parentContainer = entry.parentElement;
    const entries = parentContainer.querySelectorAll(`.${entry.className}`);
    if (entries.length <= 1) {
        alert(translations[currentLang]['You must have at least one field in this section.']);
        return;
    }
    parentContainer.removeChild(entry);
    // console.log(`[removeField] Field removed from ${parentContainer.id}`);
    generateCV(cvContainer); updateProgress();
}

/**
 * Generates or updates the HTML content of the CV within the specified target element.
 * @param {HTMLElement} targetElement The DOM element to populate with CV content.
 */
function generateCV(targetElement) {
    // console.log(`[generateCV] Called for element: ${targetElement.id}. isCapturingPdf: ${isCapturingPdf}`);
    if (!targetElement) {
        console.error("[generateCV] Target element for CV generation is null or undefined!");
        return;
    }

    const isArabic = currentLang === 'ar';
    const direction = isArabic ? 'rtl' : 'ltr';

    // الكلاسات تطبق دائماً على العنصر المستهدف
    targetElement.className = `${selectedTemplateCategory}-layout template${selectedTemplate}`;
    targetElement.dir = direction;
    targetElement.innerHTML = ''; // مسح المحتوى القديم قبل إعادة البناء

    // جلب البيانات
    const name = document.getElementById('name-input')?.value.trim() || '';
    const title = document.getElementById('title-input')?.value.trim() || '';
    const emailVal = document.getElementById('email-input')?.value.trim() || '';
    const phone = document.getElementById('phone-input')?.value.trim() || '';
    const website = document.getElementById('website-input')?.value.trim() || '';
    const objective = document.getElementById('objective-input')?.value.trim() || '';

    let profilePicHTML = '';
    if (profilePicDataUrl) {
        profilePicHTML = `<img src="${profilePicDataUrl}" class="cv-profile-pic" alt="${translations[currentLang]['Profile Picture']}">`;
    }

    let contactInfoHTML = '<div class="cv-contact-info">';
    let hasContactInfo = false;
    if (emailVal) { contactInfoHTML += `<div class="cv-contact-item"><i class="fas fa-envelope"></i><p>${emailVal}</p></div>`; hasContactInfo = true; }
    if (phone) { contactInfoHTML += `<div class="cv-contact-item"><i class="fas fa-phone"></i><p>${phone}</p></div>`; hasContactInfo = true; }
    if (website) { contactInfoHTML += `<div class="cv-contact-item"><i class="fas fa-globe"></i><p>${website}</p></div>`; hasContactInfo = true; }
    contactInfoHTML += '</div>';
    if (!hasContactInfo) contactInfoHTML = '';

    const objectiveHTML = objective ? `<div class="cv-section" id="objective"><h3 class="cv-section-title">${translations[currentLang]['Career Objective']}</h3><p>${objective.replace(/\n/g, '<br>')}</p></div>` : '';

    let experienceHTML = '';
    const experienceEntries = document.querySelectorAll('#experience-input .experience-entry');
    const hasFilledExperience = Array.from(experienceEntries).some(e => Array.from(e.querySelectorAll('input, textarea')).some(input => input.value.trim()));
    if (hasFilledExperience) {
        experienceHTML = `<div class="cv-section" id="experience"><h3 class="cv-section-title">${translations[currentLang]['Work Experience']}</h3>`;
        experienceEntries.forEach(entry => {
            const expTitle = entry.querySelector('.experience-title')?.value.trim() || '';
            const company = entry.querySelector('.experience-company')?.value.trim() || '';
            const duration = entry.querySelector('.experience-duration')?.value.trim() || '';
            const desc = entry.querySelector('.experience-description')?.value.trim().replace(/\n/g, '<br>') || '';
            if (expTitle || company || duration || desc) {
                 experienceHTML += `<div class="cv-experience-item">
                                    <h4 class="cv-job-title">${expTitle || translations[currentLang]['No Title']}</h4>
                                    ${company || duration ? `<h5 class="cv-company">${company}${company && duration ? ' - ' : ''}${duration}</h5>` : ''}
                                    ${desc ? `<p>${desc}</p>` : ''}
                                 </div>`;
            }
        });
        experienceHTML += '</div>';
    }

    let educationHTML = '';
    const educationEntries = document.querySelectorAll('#education-input .education-entry');
    const hasFilledEducation = Array.from(educationEntries).some(e => Array.from(e.querySelectorAll('input')).some(input => input.value.trim()));
    if (hasFilledEducation) {
        educationHTML = `<div class="cv-section" id="education"><h3 class="cv-section-title">${translations[currentLang]['Education']}</h3>`;
        educationEntries.forEach(entry => {
            const degree = entry.querySelector('.education-degree')?.value.trim() || '';
            const institution = entry.querySelector('.education-institution')?.value.trim() || '';
            const duration = entry.querySelector('.education-duration')?.value.trim() || '';
             if (degree || institution || duration) {
                educationHTML += `<div class="cv-education-item">
                                    <h4 class="cv-degree">${degree || translations[currentLang]['No Degree']}</h4>
                                     ${institution || duration ? `<h5 class="cv-institution">${institution}${institution && duration ? ' - ' : ''}${duration}</h5>` : ''}
                                 </div>`;
            }
        });
        educationHTML += '</div>';
    }

    let skillsHTML = '';
    const skillInputs = document.querySelectorAll('#skills-input .skill-item-input');
    const filledSkills = Array.from(skillInputs).map(input => input.value.trim()).filter(skill => skill);
    if (filledSkills.length > 0) {
        const useSingleColumnSkills = (selectedTemplateCategory !== 'normal' && filledSkills.length <= 5 && selectedTemplateCategory !== 'professional') || (selectedTemplateCategory === 'professional' && filledSkills.length <=3) || (selectedTemplateCategory === 'normal');
        skillsHTML = `<div class="cv-section" id="skills"><h3 class="cv-section-title">${translations[currentLang]['Skills']}</h3><ul class="cv-skill-list ${useSingleColumnSkills ? 'single-column' : ''}">`;
        filledSkills.forEach(skill => { skillsHTML += `<li class="cv-skill-item">${skill}</li>`; });
        skillsHTML += '</ul></div>';
    }

    let languagesHTML = '';
    const languageInputs = document.querySelectorAll('#languages-input .language-item-input');
    const filledLanguages = Array.from(languageInputs).map(input => input.value.trim()).filter(lang => lang);
    if (filledLanguages.length > 0) {
        languagesHTML = `<div class="cv-section" id="languages"><h3 class="cv-section-title">${translations[currentLang]['Languages']}</h3><ul class="cv-language-list">`;
        filledLanguages.forEach(lang => { languagesHTML += `<li>${lang}</li>`; });
        languagesHTML += '</ul></div>';
    }
    
    let referencesHTML = '';
    const referenceEntries = document.querySelectorAll('#references-input .reference-entry');
    const hasFilledReferences = Array.from(referenceEntries).some(e => Array.from(e.querySelectorAll('input')).some(input => input.value.trim()));
    if (hasFilledReferences) {
        referencesHTML = `<div class="cv-section" id="references"><h3 class="cv-section-title">${translations[currentLang]['References']}</h3>`;
        referenceEntries.forEach(entry => {
            const refName = entry.querySelector('.reference-name')?.value.trim() || '';
            const position = entry.querySelector('.reference-position')?.value.trim() || '';
            const phoneNum = entry.querySelector('.reference-phone')?.value.trim() || '';
            const refEmailVal = entry.querySelector('.reference-email')?.value.trim() || ''; // Renamed
            if (refName || position || phoneNum || refEmailVal) {
                referencesHTML += `<div class="cv-reference-item">
                                    <h4>${refName || translations[currentLang]['No Name']}</h4>
                                    ${position ? `<p>${position}</p>` : ''}
                                    ${phoneNum ? `<p>${phoneNum}</p>` : ''}
                                    ${refEmailVal ? `<p>${refEmailVal}</p>` : ''}
                                 </div>`;
            }
        });
        referencesHTML += '</div>';
    }

    const cvContentDiv = document.createElement('div');
    cvContentDiv.className = 'cv-content';
    cvContentDiv.dir = direction;

    if (selectedTemplateCategory === 'normal') {
        let headerClass = 'cv-header';
        if (selectedTemplate === 3 && selectedTemplateCategory === 'normal') headerClass += ' centered';

        cvContentDiv.innerHTML = `
            <div class="${headerClass}" dir="${direction}">
                ${profilePicHTML}
                <div class="cv-header-text" style="flex-grow: 1;">
                    <h1 class="cv-name">${name}</h1>
                    <h2 class="cv-title">${title}</h2>
                    ${contactInfoHTML}
                </div>
            </div>
            ${objectiveHTML}
            ${experienceHTML}
            ${educationHTML}
            ${skillsHTML}
            ${languagesHTML}
            ${referencesHTML}
            ${createEndMarkerHTML()} 
        `;
    } else {
        const layoutDiv = document.createElement('div');
        layoutDiv.className = (selectedTemplateCategory === 'professional') ? 'cv-professional-layout' : 
                              (selectedTemplateCategory === 'standard' ? 'cv-two-column-layout' : 'ast-layout');
        layoutDiv.dir = direction;

        const sidebarDiv = document.createElement('div');
        sidebarDiv.className = 'cv-sidebar';
        sidebarDiv.dir = direction;
        
        const mainContentDiv = document.createElement('div');
        mainContentDiv.className = 'cv-main-content';
        mainContentDiv.dir = direction;

        if (selectedTemplateCategory === 'professional') {
            const professionalHeader = document.createElement('div');
            professionalHeader.className = 'cv-header professional-layout';
            professionalHeader.dir = direction;
            let proHeaderPicHTML = '';
            // Example: specific templates might place the picture in the header
            if (profilePicDataUrl && (selectedTemplate === 1 || selectedTemplate === 2 )) { // Customize template numbers
                proHeaderPicHTML = profilePicHTML;
            }
            professionalHeader.innerHTML = `
                ${proHeaderPicHTML} 
                <h1 class="cv-name">${name}</h1>
                <h2 class="cv-title">${title}</h2>
                ${contactInfoHTML}
            `;
            cvContentDiv.appendChild(professionalHeader);

            sidebarDiv.innerHTML = `
                ${(profilePicDataUrl && !proHeaderPicHTML) ? profilePicHTML : ''}
                ${skillsHTML}
                ${languagesHTML}
                ${referencesHTML}
                ${createEndMarkerHTML()}
            `;
            mainContentDiv.innerHTML = `
                ${objectiveHTML}
                ${experienceHTML}
                ${educationHTML}
                ${createEndMarkerHTML()}
            `;

        } else { // Standard and AST
            sidebarDiv.innerHTML = `
                ${profilePicHTML}
                ${contactInfoHTML}
                ${skillsHTML}
                ${languagesHTML}
                ${referencesHTML}
                ${createEndMarkerHTML()}
            `;
            mainContentDiv.innerHTML = `
                <div class="cv-header two-col-main" dir="${direction}">
                    <h1 class="cv-name">${name}</h1>
                    <h2 class="cv-title">${title}</h2>
                </div>
                ${objectiveHTML}
                ${experienceHTML}
                ${educationHTML}
                ${createEndMarkerHTML()}
            `;
        }
        
        if (direction === 'ltr' && (selectedTemplateCategory === 'standard' || selectedTemplateCategory === 'ast')) {
            layoutDiv.appendChild(mainContentDiv);
            layoutDiv.appendChild(sidebarDiv);
        } else {
            layoutDiv.appendChild(sidebarDiv);
            layoutDiv.appendChild(mainContentDiv);
        }
        cvContentDiv.appendChild(layoutDiv);
    }
    targetElement.appendChild(cvContentDiv);
    // console.log(`[generateCV] CV HTML structure generated and appended to ${targetElement.id}. InnerHTML length: ${targetElement.innerHTML.length}`);
}

function createEndMarkerHTML() {
    const endText = translations[currentLang]["End of CV"] || (currentLang === 'ar' ? "نهاية السيرة" : "End of CV");
    return `<div class="cv-end-marker" style="height: 1px !important; margin-top:auto !important; visibility: hidden !important; font-size:1px; color:transparent;">${endText}</div>`;
}

function updateProgress() {
    const progressBar = document.getElementById('progressBar');
    if (!progressBar) return;

    const nameInput = document.getElementById('name-input');
    const titleInput = document.getElementById('title-input');
    const emailInput = document.getElementById('email-input');
    const phoneInput = document.getElementById('phone-input');
    const websiteInput = document.getElementById('website-input');
    const objectiveInput = document.getElementById('objective-input');
    const profilePicInput = document.getElementById('profile-pic-input');

    let filledCoreFields = 0;
    if (nameInput && nameInput.value.trim()) filledCoreFields++;
    if (titleInput && titleInput.value.trim()) filledCoreFields++;
    if (emailInput && emailInput.value.trim()) filledCoreFields++;
    if (phoneInput && phoneInput.value.trim()) filledCoreFields++;
    if (websiteInput && websiteInput.value.trim()) filledCoreFields++;
    if (objectiveInput && objectiveInput.value.trim()) filledCoreFields++;
    if (profilePicInput && profilePicInput.files && profilePicInput.files.length > 0) filledCoreFields++;
    const totalCoreFields = 7;
    const coreFieldsWeight = 6;

    const sections = ['experience', 'education', 'skills', 'languages', 'references'];
    let filledSectionsCount = 0;
    sections.forEach(sectionId => {
        const sectionContainer = document.getElementById(`${sectionId}-input`);
        if (sectionContainer) {
            const inputs = sectionContainer.querySelectorAll('input, textarea');
            if (Array.from(inputs).some(input => input.value.trim() !== '')) {
                filledSectionsCount++;
            }
        }
    });
    const totalSections = sections.length;
    const sectionsOverallWeight = 4;

    let currentWeight = 0;
    if (totalCoreFields > 0) currentWeight += (filledCoreFields / totalCoreFields) * coreFieldsWeight;
    if (totalSections > 0) currentWeight += (filledSectionsCount / totalSections) * sectionsOverallWeight;
    
    const progress = Math.min(100, Math.round(currentWeight * 10));

    progressBar.style.width = `${progress}%`;
    progressBar.textContent = `${progress}%`;
    if (progress < 30) progressBar.style.backgroundColor = '#dc3545';
    else if (progress < 70) progressBar.style.backgroundColor = '#ffc107';
    else progressBar.style.backgroundColor = '#28a745';
}

function populateWithTestData() {
    // console.log("[populateWithTestData] Populating form with test data...");
    const nameInput = document.getElementById('name-input');
    const titleInput = document.getElementById('title-input');
    const emailInput = document.getElementById('email-input');
    const phoneInput = document.getElementById('phone-input');
    const websiteInput = document.getElementById('website-input');
    const objectiveInput = document.getElementById('objective-input');
    
    if(nameInput) nameInput.value = currentLang === 'ar' ? 'أحمد محمد السيد' : 'Ahmed Mohamed Elsayed';
    if(titleInput) titleInput.value = currentLang === 'ar' ? 'مهندس برمجيات' : 'Software Engineer';
    if(emailInput) emailInput.value = 'ahmed.elsayed@example.com';
    if(phoneInput) phoneInput.value = '0501234567';
    if(websiteInput) websiteInput.value = currentLang === 'ar' ? 'المملكة العربية السعودية' : 'Saudi Arabia';
    if(objectiveInput) objectiveInput.value = currentLang === 'ar' ? 
        'مهندس برمجيات ذو خبرة عالية في تطوير تطبيقات الويب والجوال، أبحث عن فرصة للانضمام إلى فريق ديناميكي للمساهمة في بناء حلول تقنية مبتكرة وذات جودة عالية.' :
        'Highly experienced software engineer in web and mobile application development, seeking an opportunity to join a dynamic team to contribute to building innovative and high-quality technical solutions.';

    ['experience', 'education', 'skills', 'languages', 'references'].forEach(type => {
        const container = document.getElementById(`${type}-input`);
        if (container) {
            Array.from(container.children).forEach(child => { if (child.classList.contains(`${type}-entry`)) child.remove(); });
            // إضافة الحقول بناءً على النوع
            if (type === 'experience') { addExperienceField(); addExperienceField(); }
            else if (type === 'education') { addEducationField(); addEducationField(); }
            else if (type === 'skills') { addSkillField(); addSkillField(); addSkillField(); addSkillField(); addSkillField(); }
            else if (type === 'languages') { addLanguageField(); addLanguageField(); }
            else if (type === 'references') { addReferenceField(); addReferenceField(); }
        }
    });
    
    // ملء الحقول المضافة
    const expEntries = document.querySelectorAll('#experience-input .experience-entry');
    if (expEntries[0]) {
        expEntries[0].querySelector('.experience-title').value = currentLang === 'ar' ? 'مهندس برمجيات أول' : 'Senior Software Engineer';
        expEntries[0].querySelector('.experience-company').value = currentLang === 'ar' ? 'شركة الحلول المبتكرة' : 'Innovative Solutions Inc.';
        expEntries[0].querySelector('.experience-duration').value = currentLang === 'ar' ? '2020 - حتى الآن' : '2020 - Present';
        expEntries[0].querySelector('.experience-description').value = currentLang === 'ar' ? 'قيادة فرق التطوير، تصميم وتنفيذ معماريات البرمجيات، تحسين أداء التطبيقات وتأمينها.' : 'Leading development teams, designing and implementing software architectures, optimizing application performance and security.';
    }
    if (expEntries[1]) {
        expEntries[1].querySelector('.experience-title').value = currentLang === 'ar' ? 'مهندس برمجيات' : 'Software Engineer';
        expEntries[1].querySelector('.experience-company').value = currentLang === 'ar' ? 'شركة التقنية الرائدة' : 'Leading Tech Co.';
        expEntries[1].querySelector('.experience-duration').value = currentLang === 'ar' ? '2017 - 2020' : '2017 - 2020';
        expEntries[1].querySelector('.experience-description').value = currentLang === 'ar' ? 'تطوير وصيانة تطبيقات الويب باستخدام Node.js و React، التعاون مع فريق المنتج لتحسين تجربة المستخدم.' : 'Developed and maintained web applications using Node.js and React, collaborated with the product team to improve user experience.';
    }

    const eduEntries = document.querySelectorAll('#education-input .education-entry');
    if (eduEntries[0]) {
        eduEntries[0].querySelector('.education-degree').value = currentLang === 'ar' ? 'بكالوريوس علوم حاسوب' : 'B.Sc. Computer Science';
        eduEntries[0].querySelector('.education-institution').value = currentLang === 'ar' ? 'جامعة الملك فهد للبترول والمعادن' : 'King Fahd University of Petroleum & Minerals';
        eduEntries[0].querySelector('.education-duration').value = currentLang === 'ar' ? '2012 - 2017' : '2012 - 2017';
    }
    if (eduEntries[1]) {
        eduEntries[1].querySelector('.education-degree').value = currentLang === 'ar' ? 'شهادة محترف معتمد في تطوير الويب' : 'Certified Web Development Professional';
        eduEntries[1].querySelector('.education-institution').value = currentLang === 'ar' ? 'منصة إدراك' : 'Edraak Platform';
        eduEntries[1].querySelector('.education-duration').value = '2019';
    }

    const skillInputsTest = document.querySelectorAll('#skills-input .skill-item-input');
    if(skillInputsTest[0]) skillInputsTest[0].value = 'JavaScript';
    if(skillInputsTest[1]) skillInputsTest[1].value = 'React';
    if(skillInputsTest[2]) skillInputsTest[2].value = 'Node.js';
    if(skillInputsTest[3]) skillInputsTest[3].value = 'SQL';
    if(skillInputsTest[4]) skillInputsTest[4].value = currentLang === 'ar' ? 'منهجيات أجايل' : 'Agile Methodologies';
    
    const langInputsTest = document.querySelectorAll('#languages-input .language-item-input');
    if(langInputsTest[0]) langInputsTest[0].value = currentLang === 'ar' ? 'العربية (لغة أم)' : 'Arabic (Native)';
    if(langInputsTest[1]) langInputsTest[1].value = currentLang === 'ar' ? 'الإنجليزية (ممتاز)' : 'English (Fluent)';

    const refEntries = document.querySelectorAll('#references-input .reference-entry');
    if (refEntries[0]) {
        refEntries[0].querySelector('.reference-name').value = currentLang === 'ar' ? 'الدكتور علي أحمد' : 'Dr. Ali Ahmed';
        refEntries[0].querySelector('.reference-position').value = currentLang === 'ar' ? 'أستاذ مساعد، جامعة الملك فهد' : 'Assistant Professor, KFUPM';
        refEntries[0].querySelector('.reference-phone').value = '0551234567';
        refEntries[0].querySelector('.reference-email').value = 'ali.ahmed@example.com';
    }
    // The second reference field from addReferenceField() will be empty

    generateCV(cvContainer);
    updateProgress();
    // console.log("[populateWithTestData] Test data population complete.");
}
