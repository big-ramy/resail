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
                    cvPdfFileBase64: cvPdfFileBase64, // Corrected from cvPdfFileBase66
                    cvPdfFileName: cvPdfFileNameForClient,
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
                    cvPdfFileBase64: cvPdfFileBase64, // Corrected from cvPdfFileBase66
                    cvPdfFileName: cvPdfFileNameForClient,
                    transactionId: details.id,
                    discountCode: actualDiscountCodeStr
                });
                const response = await fetch(scriptUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
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
        const actualDiscountPercentage = parseFloat(qrManualPaymentPage.getAttribute("data-discount-code")) || 0;
        const actualDiscountCodeStr = actualDiscountPercentage > 0 ? Object.keys(discountCodes).find(key => discountCodes[key] === currentDiscountPercentage) || 'CUSTOM_DISCOUNT' : '';
        formData.append("discountCode", actualDiscountCodeStr);
        formData.append("cvTemplateCategory", cvTemplateCategory);
        formData.append('cvPdfFileBase64', cvPdfFileBase64); // Corrected from cvPdfFileBase66
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
    console.log(`[captureCVasPDF V23 Final & Robust] بدأت العملية. تنزيل PDF: ${downloadPdf}`);

    if (!cvContainer) {
        console.error("[captureCVasPDF V23 Final & Robust] لم يتم العثور على عنصر حاوية السيرة الذاتية!");
        return Promise.reject("CV container not found");
    }
    console.log("[captureCVasPDF V23 Final & Robust] تم العثور على عنصر حاوية السيرة الذاتية:", cvContainer.id);

    if (typeof isCapturingPdf !== 'undefined' && isCapturingPdf) {
        console.warn("[captureCVasPDF V23 Final & Robust] عملية الالتقاط قيد التقدم بالفعل. سيتم التخطي.");
        return Promise.reject("Capture in progress");
    }
    if (typeof toggleLoadingOverlay === 'function') {
        toggleLoadingOverlay(true, 'Generating CV, please wait...');
    }
    if (typeof isCapturingPdf !== 'undefined') {
        isCapturingPdf = true;
    }

    // --- 1. حفظ الأنماط والحالة الأصلية لعنصر السيرة الذاتية وآبائه ---
    const originalStyles = {
        cvContainer: {},
        cvPreviewArea: {},
        cvPreviewPage: {},
        bodyOverflow: document.body.style.overflow,
        htmlOverflow: document.documentElement.style.overflow
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
    console.log("[captureCVasPDF V23 Final & Robust] تم حفظ الأنماط الأصلية لحاوية السيرة الذاتية.");

    const cvPreviewArea = document.getElementById('cv-preview-area');
    const cvPreviewPage = document.getElementById('cv-preview-page');
    const parentPropsToStore = ['display', 'justifyContent', 'alignItems', 'overflow', 'maxHeight', 'padding', 'margin', 'minHeight', 'position', 'boxSizing', 'width', 'boxShadow', 'border'];

    if (cvPreviewArea) {
        parentPropsToStore.forEach(prop => originalStyles.cvPreviewArea[prop] = getComputedStyle(cvPreviewArea)[prop]);
    }
    if (cvPreviewPage) {
        parentPropsToStore.forEach(prop => originalStyles.cvPreviewPage[prop] = getComputedStyle(cvPreviewPage)[prop]);
    }
    console.log("[captureCVasPDF V23 Final & Robust] تم حفظ الأنماط الأصلية للعناصر الأصلية (الآباء).");

    const removeButtonsOriginal = Array.from(cvContainer.querySelectorAll('.remove-field'));
    removeButtonsOriginal.forEach(btn => btn.style.display = 'none');
    console.log("[captureCVasPDF V23 Final & Robust] تم إخفاء أزرار الإزالة.");

    let captureError = null;

    try {
        // --- 2. تطبيق الأنماط المؤقتة لالتقاط PDF ---
        console.log("[captureCVasPDF V23 Final & Robust] تطبيق الأنماط المؤقتة على حاوية السيرة الذاتية لالتقاط PDF.");

        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';

        if (cvPreviewArea) {
            Object.assign(cvPreviewArea.style, {
                display: 'block',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                overflow: 'visible',
                maxHeight: 'none',
                padding: '0',
                margin: '0',
                position: 'relative',
                width: '210mm',
                boxSizing: 'border-box',
                boxShadow: 'none',
                border: 'none'
            });
        }
        if (cvPreviewPage) {
            Object.assign(cvPreviewPage.style, {
                display: 'block',
                padding: '0',
                margin: '0',
                overflow: 'visible',
                minHeight: '297mm',
                position: 'relative',
                width: '210mm',
                boxSizing: 'border-box',
                boxShadow: 'none',
                border: 'none'
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
            left: '-10000px', // Move far off-screen
            right: 'auto',
            margin: '0',
            zIndex: '-1',
            transform: 'none',
            padding: '0', // No padding on cvContainer itself for capture
            zoom: '1',
            maxWidth: 'none',
            visibility: 'visible',
            boxSizing: 'border-box',
            boxShadow: 'none',
            border: 'none'
        });

        cvContainer.className = `${selectedTemplateCategory}-layout template${selectedTemplate}`;
        cvContainer.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
        console.log(`[captureCVasPDF V23 Final & Robust] تم ضبط اتجاه حاوية السيرة الذاتية إلى: ${cvContainer.dir}`);

        // --- 3. إعادة إنشاء محتوى السيرة الذاتية للالتقاط ---
        console.log("[captureCVasPDF V23 Final & Robust] استدعاء generateCV لتعبئة حاوية السيرة الذاتية الحالية...");
        generateCV(cvContainer);

        if (cvContainer.innerHTML.trim().length === 0) {
            console.error("[captureCVasPDF V23 Final & Robust] cvContainer فارغ بعد generateCV. قد تكون دالة generateCV لا تعمل.");
            throw new Error("CV content is empty after generation. Cannot capture blank page.");
        }

        // *** إزالة إضافة العلامة المائية كعنصر HTML هنا (العودة لـ jsPDF.callback) ***
        // تم إزالة الكود الذي كان يضيف watermarkDiv إلى cvContainer.

        // --- 4. الانتظار لضمان اكتمال العرض وتحميل جميع الأصول ---
        cvContainer.offsetHeight;
        console.log(`[captureCVasPDF V23 Final & Robust] ارتفاع تمرير حاوية السيرة الذاتية بعد تعبئة المحتوى: ${cvContainer.scrollHeight}px`);

        const imagesInCv = Array.from(cvContainer.querySelectorAll('img'));
        console.log(`[captureCVasPDF V23 Final & Robust] تم العثور على ${imagesInCv.length} صورة في حاوية السيرة الذاتية.`);
        if (imagesInCv.length > 0) {
            await Promise.all(imagesInCv.map(img => {
                if (img.complete && img.naturalHeight !== 0 && img.naturalWidth !== 0) return Promise.resolve();
                return new Promise((resolve) => {
                    img.onload = () => { resolve(); };
                    img.onerror = () => {
                        console.warn(`[captureCVasPDF V23 Final & Robust] فشل تحميل الصورة في حاوية السيرة الذاتية: ${img.src}`);
                        resolve();
                    };
                    if (img.src && !img.complete) {
                        const tempSrc = img.src;
                        img.src = '';
                        img.src = tempSrc;
                    }
                });
            }));
            console.log("[captureCVasPDF V23 Final & Robust] تم فحص/تحميل جميع الصور في حاوية السيرة الذاتية.");
        }

        if (typeof FontFaceObserver !== 'undefined' && getComputedStyle(cvContainer).fontFamily) {
            const desiredFontFamilies = getComputedStyle(cvContainer).fontFamily.split(',').map(f => f.trim().replace(/['']/g, ''));
            console.log(`[captureCVasPDF V23 Final & Robust] انتظار تحميل الخطوط: ${desiredFontFamilies.join(', ')}`);
            await Promise.all(desiredFontFamilies.map(fontName => {
                if (fontName && !['sans-serif', 'serif', 'monospace', 'cursive', 'fantasy', 'system-ui', '-apple-system', 'Segoe UI', 'arial', 'helvetica'].includes(fontName.toLowerCase())) {
                    const font = new FontFaceObserver(fontName);
                    return font.load(null, 5000)
                        .catch(e => console.warn(`[captureCVasPDF V23 Final & Robust] فشل تحميل الخط ${fontName}:`, e));
                }
                return Promise.resolve();
            }));
            console.log("[captureCVasPDF V23 Final & Robust] تم فحص/تحميل جميع الخطوط المطلوبة.");
        }

        await new Promise(resolve => setTimeout(resolve, isMobileDevice() ? 5000 : 2000));
        console.log("[captureCVasPDF V23 Final & Robust] تم الانتظار للرسم النهائي بعد تطبيق الأنماط وتحميل الأصول.");

        // --- 5. تهيئة html2pdf.js وإعدادات html2canvas ---
        const isMobile = isMobileDevice();
        const scaleFactor = isMobile ? 0.8 : 1.30;
        const imageQuality = isMobile ? 0.9 : 0.98;
        console.log(`[captureCVasPDF V23 Final & Robust] استخدام المقياس: ${scaleFactor}، الجودة: ${imageQuality}. جوال: ${isMobile}`);

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
                x: 0,
                y: 0,
                width: cvContainer.offsetWidth,
                height: cvContainer.scrollHeight,
                windowWidth: cvContainer.offsetWidth,
                windowHeight: cvContainer.scrollHeight,
                scrollX: 0,
                scrollY: 0,
                onclone: (clonedDoc) => {
                    console.log("[captureCVasPDF V23 Final & Robust] تم تشغيل onclone الداخلي لـ html2canvas.");
                    const body = clonedDoc.body;
                    Object.assign(body.style, {
                        margin: '0',
                        padding: '0',
                        overflow: 'hidden',
                        width: '100vw',
                        height: '100vh',
                        boxSizing: 'border-box'
                    });
                    body.style.fontFamily = getComputedStyle(cvContainer).fontFamily || 'Tajawal, Arial, sans-serif';
                    body.style.direction = cvContainer.dir;

                    const clonedCvElement = clonedDoc.getElementById(cvContainer.id);
                    if (clonedCvElement) {
                        const computedCvStyles = getComputedStyle(cvContainer);
                        cvPropsToStore.forEach(prop => {
                            clonedCvElement.style[prop] = computedCvStyles[prop];
                        });
                        Object.assign(clonedCvElement.style, {
                            width: '210mm',
                            padding: '0', // No padding on the container itself for capture
                            boxSizing: 'border-box',
                            margin: '0',
                            left: '0', top: '0',
                            right: 'auto', bottom: 'auto',
                            maxWidth: 'none',
                            position: 'relative',
                            boxShadow: 'none',
                            border: 'none'
                        });
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

        // *** إضافة callback لـ jsPDF لوضع العلامة المائية على كل صفحة ***
        if (downloadPdf) {
            pdfOptions.jsPDF.callback = function(pdf) {
                console.log(`[captureCVasPDF V23 Final & Robust] jsPDF callback triggered. Current page: ${pdf.internal.getNumberOfPages()}`);

                const totalPages = pdf.internal.getNumberOfPages();
                const watermarkText = translations[currentLang]['Watermark Preview Text'] || (currentLang === 'ar' ? "للعرض فقط" : "ONLY PREVIEW");

                const fontNameForPdf = 'Tajawal';
                const fontStyleForPdf = 'normal';

                let fontToUse = fontNameForPdf;
                let defaultFontForArabic = 'helvetica';
                
                const availableFonts = pdf.getFontList();
                if (currentLang === 'ar') {
                    if (availableFonts['tajawal'] && availableFonts['tajawal']['normal']) {
                         fontToUse = 'tajawal';
                    } else if (availableFonts['amiri'] && availableFonts['amiri']['normal']) {
                         fontToUse = 'amiri';
                    } else {
                        fontToUse = defaultFontForArabic;
                        console.warn(`[captureCVasPDF V23 Final & Robust] الخط العربي المخصص (Tajawal أو Amiri) غير مسجل في jsPDF. استخدام '${fontToUse}'. قد لا تدعم الأحرف العربية.`);
                    }
                } else {
                    if (availableFonts['helvetica'] && availableFonts['helvetica']['normal']) {
                        fontToUse = 'helvetica';
                    } else {
                        fontToUse = 'sans-serif';
                    }
                }

                pdf.setFont(fontToUse, fontStyleForPdf);
                pdf.setFontSize(50);
                pdf.setTextColor(0, 0, 0, 0.08);
                pdf.setGState(new pdf.GState({ opacity: 0.12 }));

                const pageWidth = pdf.internal.pageSize.getWidth();
                const pageHeight = pdf.internal.pageSize.getHeight();
                const angleInDegrees = -45;

                for (let i = 1; i <= totalPages; i++) {
                    pdf.setPage(i);
                    pdf.saveGraphicsState();
                    
                    const centerX = pageWidth / 2;
                    const centerY = pageHeight / 2;

                    pdf.translate(centerX, centerY);
                    pdf.rotate(angleInDegrees * Math.PI / 180, 0, 0);
                    
                    pdf.text(watermarkText, 0, 0, {
                        align: 'center',
                        baseline: 'middle'
                    });

                    pdf.restoreGraphicsState();
                }
                pdf.setGState(new pdf.GState({ opacity: 1 }));
            };
        }
        console.log("[captureCVasPDF V23 Final & Robust] تم إعداد خيارات html2pdf.");

        // --- 6. إنشاء ملف PDF ---
        console.log("[captureCVasPDF V23 Final & Robust] بدء إنشاء html2pdf من عنصر حاوية السيرة الذاتية...");
        const worker = html2pdf().from(cvContainer).set(pdfOptions);

        if (downloadPdf) {
            console.log("[captureCVasPDF V23 Final & Robust] محاولة حفظ PDF مباشرة...");
            await worker.save();
            console.log("[captureCVasPDF V23 Final & Robust] بدأت عملية حفظ PDF.");
            return null;
        } else {
            console.log("[captureCVasPDF V23 Final & Robust] محاولة الحصول على PDF كـ blob...");
            const pdfBlob = await worker.output('blob');
            console.log(`[captureCVasPDF V23 Final & Robust] تم استلام PDF blob. الحجم: ${pdfBlob.size} بايت، النوع: ${pdfBlob.type}`);
            if (pdfBlob.size < 2048 && pdfBlob.size > 0) {
                console.warn("[captureCVasPDF V23 Final & Robust] حجم PDF blob صغير جدًا، قد يكون فارغًا أو محتواه ضئيلًا.");
            } else if (pdfBlob.size === 0) {
                console.error("[captureCVasPDF V23 Final & Robust] PDF blob size is ZERO. Capture failed to produce content.");
                throw new Error("Generated PDF is empty (size 0).");
            }
            console.log("[captureCVasPDF V23 Final & Robust] تحويل blob إلى Base64...");
            return await fileToBase64(pdfBlob);
        }

    } catch (error) {
        captureError = error;
        console.error("[captureCVasPDF V23 Final & Robust] خطأ حرج أثناء إنشاء PDF:", error, error.stack);
        alert(translations[currentLang]['Error generating PDF for CV.'] + ` (${error.message || 'Unknown error'})`);
        throw error;
    } finally {
        console.log("[captureCVasPDF V23 Final & Robust] الدخول إلى كتلة finally لاستعادة الأنماط...");

        document.body.style.overflow = originalStyles.bodyOverflow;
        document.documentElement.style.overflow = originalStyles.htmlOverflow;

        // *** إزالة العلامة المائية هنا غير مطلوب لأنها لم تعد تضاف إلى HTML ***
        // if (watermarkDiv && watermarkDiv.parentElement) {
        //     watermarkDiv.parentElement.removeChild(watermarkDiv);
        //     cvContainer.style.position = originalStyles.cvContainer.position;
        //     console.log("[captureCVasPDF V23 Final & Robust] تم إزالة العلامة المائية.");
        // }

        console.log("[captureCVasPDF V23 Final & Robust] استعادة الأنماط الأصلية لحاوية السيرة الذاتية...");
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
        console.log("[captureCVasPDF V23 Final & Robust] تم استعادة الأنماط الأصلية وأزرار الإزالة.");

        if (document.getElementById('cv-preview-page')?.classList.contains('active-page') ||
            document.getElementById('cv-template-selection-page')?.classList.contains('active-page') ||
            document.getElementById('cv-data-entry-page')?.classList.contains('active-page')) {
            console.log("[captureCVasPDF V23 Final & Robust] إعادة إنشاء السيرة الذاتية للمعاينة على الشاشة (الحاوية الأصلية).");
            generateCV(cvContainer);
        }

        if (typeof isCapturingPdf !== 'undefined') {
            isCapturingPdf = false;
        }
        if (typeof toggleLoadingOverlay === 'function') {
            toggleLoadingOverlay(false);
        }
        console.log(`[captureCVasPDF V23 Final & Robust] انتهت العملية. isCapturingPdf: ${typeof isCapturingPdf !== 'undefined' ? isCapturingPdf : 'N/A'}. الخطأ الذي حدث: ${captureError ? captureError.message : 'لا يوجد'}`);
    }
}
