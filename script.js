// --- بداية الملف: translations, global variables, DOMContentLoaded etc. ---
const translations = {
    "ar": {
        "image-paths": { // هذا هو الجزء الخاص بمسارات الصور
            "normal": (id) => `CV templates_ar/${id}.webp`,
            "standard": (id) => `CV templates_ar/${id}.webp`,
            "professional": (id) => `CV templates_ar/${id}.webp`,
            "ast": (id) => `CV templates_ar/${id}.webp`
        },
        // ترجمات صفحة الدفع (العربية)
        "local-payment-title": "الدفع المحلي",
        "local-payment-desc": "(عبر STC Pay أو تحويل الراجحي)",
        "sar-currency": "ريال سعودي",
        "click-to-pay": "اختر وسيلتك المفضلة:",
        "international-payment-header": "دولي وآمن",
        "card-payment-title": "الدفع بالبطاقة الائتمانية",
        "click-to-pay-ls": "اضغط للدفع الآمن:",
        "pay-with-card": "ادفع الآن",
        "select_font_label": "اختر خط السيرة الذاتية:",
        // ترجمات رسائل التنبيه/الأخطاء (العربية)
        "Please fill in all fields.": "الرجاء ملء جميع الحقول المطلوبة.",
        "Please enter a valid email.": "الرجاء إدخال عنوان بريد إلكتروني صالح.",
        "File size exceeds the limit (3MB).": "حجم الملف يتجاوز الحد المسموح به (3 ميجابايت).",
        "Please attach only image or PDF files.": "الرجاء إرفاق ملفات صور أو PDF فقط.",
        "An error occurred while preparing your payment. Please try again or contact support.": "حدث خطأ أثناء تحضير عملية الدفع. يرجى المحاولة مرة أخرى أو الاتصال بالدعم.",
        "Error, price for this category is undefined.": "حدث خطأ، السعر لهذه الفئة غير محدد.",
        "Please select a valid image file.": "الرجاء اختيار ملف صورة صالح.",
        "Image size is too large. Please select an image smaller than {size} megabytes.": "حجم الصورة كبير جداً. الرجاء اختيار صورة أصغر من {size} ميغابايت.",
        "You must have at least one field in this section.": "يجب أن يكون لديك حقل واحد على الأقل في هذا القسم.",
        "payment-success": "تم استلام طلبك بنجاح! سيتم إرسال السيرة الذاتية إلى بريدك الإلكتروني قريباً.",
        "Error processing file.": "حدث خطأ أثناء معالجة الملف.",
        "Enter a skill": "أدخل مهارة",
        //قسم المهارات
        "Select Level": "اختر المستوى",
        "Beginner": "مبتدئ",
        "Intermediate": "متوسط",
        "Advanced": "متقدم",
        "Expert": "خبير",

        "select_name_font_label": "خط الاسم الرئيسي:",
        "select_headings_font_label": "خط العناوين:",
        "select_body_font_label": "خط النص الأساسي:",

        // --- ترجمات لوحة التحكم بالألوان ---
        "color_presets_titl": "اختر قالب الوان",
        "color_customization_title":"تخصيص ألوان القالب",
        "background_colors_title": "ألوان الخلفيات",
        "primary_bg_label": "الخلفية الأساسية / الرأس",
        "sidebar_bg_label": "خلفية العامود الجانبي",
        "accent_bg_label": "خلفية مميزة / للمهارات",
        "gradient_label": "متدرج",
        "text_colors_title": "ألوان النصوص والأيقونات",
        "header_text_label": "نص الرأس",
        "title_text_label": "نص العناوين",
        "body_text_label": "نص المحتوى",
        "subtle_text_label": "نص فرعي",
        "gradient_horizontal": "أفقي",
        "gradient_vertical": "عمودي",
        "gradient_diagonal": "قطري",

        // الترجمات العامة المتبقية من الملف الأصلي
        "promo_bar_text": "عرض خاص! استخدم كود <span class='blinking-code'>FIRSTBUY</span> لخصم 25% أو كود <span class='blinking-code'>SAVE10</span> لخصم 10%!",
        "from-city": "من",
        "notification-action": "قام للتو بإنشاء سيرته الذاتية!",
        "CV downloaded successfully!": "تم تنزيل السيرة الذاتية بنجاح!",
        "Professional CV Builder": "إنشاء السيرة الذاتية الاحترافية",
        "brand-name": "رسائل",
        "home-link": "الرئيسية",
        "features-link": "المميزات",
        "products-link": "المنتجات",
        "product-basic": "ارسال واتساب",
        "product-cv": "إنشاء سيرة ذاتية",
        "about-link": "عنا",
        "contact-link": "اتصل بنا",
        "English": "English",
        "Professional CV Builder_header": "أنشئ سيرتك الذاتية الاحترافية بسهولة",
        "Create a professional CV that stands out and gets you hired.": "ابرز مهاراتك وخبراتك بتصميم احترافي يلفت الانتباه ويفتح لك أبواب الفرص.",
        "Create Your CV Now": "ابدأ في إنشاء سيرتك الذاتية الآن",
        "loading-cv-text": "جاري إنشاء السيرة الذاتية، يرجى الانتظار...",
        "Why Resail CV Builder?": "لماذا نظام رسائل لإنشاء السيرة الذاتية؟",
        "Easy Data Entry": "سهولة إدخال البيانات",
        "Intuitive forms to quickly fill in all your information.": "نماذج سهلة وبديهية لملء جميع بياناتك بسرعة ويسر.",
        "Diverse and Professional Templates": "قوالب متنوعة واحترافية",
        "Choose from many modern and attractive designs to suit your style.": "اختر من بين العديد من التصميمات العصرية والجذابة لتناسب ذوقك ومجالك.",
        "Arabic and English Support": "دعم كامل للغة العربية والإنجليزية",
        "Create your CV in either Arabic or English with proper formatting.": "أنشئ سيرتك الذاتية بلغتك المفضلة مع ضمان التنسيق الصحيح لكلا الاتجاهين.",
        "Instant Preview": "معاينة فورية",
        "See your CV instantly as you build it, ensuring it looks perfect.": "شاهد شكل سيرتك الذاتية فور إدخال البيانات أو اختيار القالب لتضمن المظهر المثالي.",
        "Professional PDF Export": "تصدير بصيغة PDF عالية الجودة",
        "Download your completed CV as a high-quality PDF file, ready to share.": "احصل على سيرتك الذاتية النهائية كملف PDF احترافي جاهز للطباعة أو المشاركة عبر الإنترنت.",
        "Flexible Payment Options": "خيارات دفع متنوعة وآمنة",
        "Pay easily using various methods including PayPal and local options.": "وسائل دفع متعددة تشمل PayPal وخيارات محلية لتسهيل عملية الحصول على سيرتك الذاتية.",
        "Customer Testimonials": "ماذا قال عملاؤنا عنا؟",
        "“Creating my CV was incredibly easy and fast. The templates are modern and professional. Highly recommended!”": "«كانت عملية إنشاء سيرتي الذاتية سهلة وسريعة بشكل لا يصدق. القوالب عصرية واحترافية حقًا. أوصي به بشدة!»",
        "- Sarah Ahmed": "- سارة أحمد",
        "“I loved the variety of templates and the instant preview feature. It helped me choose the perfect design for my application.”": "«أعجبتني حقًا تنوع القوالب وميزة المعاينة الفورية. ساعدني ذلك في اختيار التصميم المثالي لتقديمي.»",
        "- Khalid Hassan": "- خالد حسن",
        "About Resail CV Builder": "عن نظام رسائل لإنشاء السيرة الذاتية",
        "Resail is your go-to platform for effortlessly creating professional and impactful CVs. We provide a wide range of modern templates and intuitive tools to help you stand out in the job market with a high-quality PDF resume.": "رسائل هو نظامك المتكامل لإنشاء سير ذاتية احترافية ومؤثرة بسهولة. نقدم مجموعة واسعة من القوالب العصرية والأدوات البديهية لمساعدتك على التميز في سوق العمل بسيرة ذاتية عالية الجودة بصيغة PDF.",
        "Our service focuses on simplifying the CV creation process, offering diverse templates, and ensuring full support for both Arabic and English languages with accurate formatting. Download your ready-to-share PDF CV after a seamless payment process.": "تركز خدمتنا على تبسيط عملية إنشاء السيرة الذاتية، وتقديم قوالب متنوعة، وضمان الدعم الكامل للغتين العربية والإنجليزية بتنسيق دقيق. احصل على سيرتك الذاتية بصيغة PDF جاهزة للمشاركة بعد عملية دفع سلسة.",
        "CVs Generated So Far": "عدد السير الذاتية التي تم إنشاؤها حتى الآن",
        "+٥٠٠٠": "+٥٠٠٠",
        "Join thousands who have successfully created their professional CVs.": "انضم إلى آلاف المستخدمين الذين أنشأوا سيرهم الذاتية الاحترافية بنجاح.",
        "Frequently Asked Questions": "الأسئلة الشائعة",
        "How do I create a CV?": "كيف يمكنني إنشاء سيرة ذاتية؟",
        "Simply click on 'Create Your CV Now', fill in your details in the form, choose a template, and preview your CV.": "ما عليك سوى النقر على زر 'ابدأ في إنشاء سيرتك الذاتية الآن'، قم بملء بياناتك في النموذج، اختر القالب المناسب، وقم بمعاينة سيرتك الذاتية.",
        "Are the templates free?": "هل القوالب مجانية؟",
        "We offer a variety of free and premium templates. Premium templates require a small fee for download.": "نقدم مجموعة متنوعة من القوالب المجانية والمدفوعة. تتطلب القوالب المدفوعة رسماً بسيطاً للتنزيل أو الطباعة.",
        "How do I download my CV?": "كيف يمكنني تنزيل سيرتي الذاتية؟",
        "After previewing your CV, click on 'Request Download / Print'. You will be guided through the payment process if you selected a premium template, and then you can download the PDF.": "بعد معاينة السيرة الذاتية واختيار القالب، انقر على زر 'طلب تنزيل / طباعة'. سيتم توجيهك لعملية الدفع إذا اخترت قالباً مدفوعاً، وبعدها يمكنك تنزيل الملف بصيغة PDF.",
        "Contact Us": "تواصل معنا",
        "For inquiries or support, please contact us via email: ramyheshamamer@gmail.com": "للاستفسارات أو الدعم، تواصل عبر البريد الإلكتروني: <strong><a href=\"mailto:ramyheshamamer@gmail.com\">ramyheshamamer@gmail.com</a></strong>",
        "Enter Your Information": "أدخل بياناتك",
        "Full Name": "الاسم",
        "Enter your name": "أدخل اسمك",
        "Job Title": "المسمى الوظيفي",
        "Enter your job title": "أدخل المسمى الوظيفي",
        "Email Address": "البريد الإلكتروني",
        "Enter your email address": "أدخل بريدك الإلكتروني",
        "Phone Number": "رقم الهاتف",
        "Enter your phone number": "أدخل رقم هاتفك",
        "Website / Portfolio": "الموقع الشخصي",
        "Enter your website or portfolio URL": "أدخل موقعك الشخصي",
        "Profile Picture": "الصورة الشخصية",
        "Choose a picture to enhance the look of your CV in some templates.": "اختر صورة لتحسين مظهر السيرة الذاتية في بعض النماذج.",
        "Career Objective": "الهدف الوظيفي",
        "Enter your career objective": "أدخل هدفك الوظيفي",
        "Work Experience": "الخبرة العملية",
        "Add Experience": "إضافة خبرة",
        "Remove Last": "حذف آخر",
        "Job Title_placeholder": "المسمى الوظيفي",
        "Company": "الشركة",
        "Duration": "المدة",
        "Description": "الوصف",
        "Education": "المؤهلات العلمية",
        "Add Education": "إضافة مؤهل",
        "Degree": "الشهادة",
        "University/Institution": "الجامعة/المعهد",
        // ترجمة اضافة قسم مخصص
        "custome-section": "إضافة قسم مخصص",
        "custom_section_placeholder": "عنوان القسم الجديد (مثال: المشاريع أو الدورات)",
        "add_subsection_btn": '<i class="fas fa-plus"></i> إضافة عنوان فرعي',
        "remove_subsection_title": "حذف العنوان الفرعي",
        "subsection_title_placeholder": "العنوان الفرعي (مثال: شهادة PMP)",
        "subsection_desc_placeholder": "الوصف أو التفاصيل المتعلقة بالعنوان الفرعي...",
        "remove_section_btn": "حذف القسم بالكامل",
        "confirm_delete_section": "هل أنت متأكد من حذف هذا القسم بالكامل؟",
        "Skills": "المهارات ",
        "Add Skill": "إضافة مهارة",
        "Enter a skill": "أدخل مهارة",
        "Languages": "اللغات",
        "Add Language": "إضافة لغة",
        "Enter a language": "أدخل لغة",
        "References": "المراجع",
        "Add Reference": "إضافة مرجع",
        "Name": "الاسم",
        "Position": "الموقع",
        "Phone": "الهاتف",
        "Email": "البريد",
        "Data Completion Progress": "نسبة إكمال البيانات",
        "Back to Home": "العودة للرئيسية",
        "Next: Choose Template": "التالي: اختر قالب",
        "Choose a CV Template and Preview": "اختر نموذجًا للسيرة الذاتية والمعاينة",
        "Normal Templates (Full Width)": "نماذج عادية (عرض الصفحة)",
        "Normal Template 1 Preview": "معاينة النموذج العادي 1",
        "Normal Template 2 Preview": "معاينة النموذج العادي 2",
        "Normal Template 3 Preview": "معاينة النموذج العادي 3",
        "Normal Template 4 Preview": "معاينة النموذج العادي 4",
        "Normal Template 5 Preview": "معاينة النموذج العادي 5",
        "Normal Template 6 Preview": "معاينة النموذج العادي 6",
        "Normal Template 7 Preview": "معاينة النموذج العادي 7",
        "Normal Template 8 Preview": "معاينة النموذج العادي 8",
        "Normal Template 9 Preview": "معاينة النموذج العادي 9",
        "Normal Template 10 Preview": "معاينة النموذج العادي 10",
        "Normal Template 11 Preview": "معاينة النموذج العادي 11",
        "Normal Template 12 Preview": "معاينة النموذج العادي 12",
        "Standard Templates (Sidebar)": "نماذج عادية (قسم جانبي ورئيسي)",
        "Standard Template 1 Preview": "معاينة النموذج العادي 1 (شريط جانبي)",
        "Standard Template 2 Preview": "معاينة النموذج العادي 2 (شريط جانبي)",
        "Standard Template 3 Preview": "معاينة النموذج العادي 3 (شريط جانبي)",
        "Standard Template 4 Preview": "معاينة النموذج العادي 4 (شريط جانبي)",
        "Standard Template 5 Preview": "معاينة النموذج العادي 5 (شريط جانبي)",
        "Standard Template 6 Preview": "معاينة النموذج العادي 6 (شريط جانبي)",
        "Standard Template 7 Preview": "معاينة النموذج العادي 7 (شريط جانبي)",
        "Standard Template 8 Preview": "معاينة النموذج العادي 8 (شريط جانبي)",
        "Standard Template 9 Preview": "معاينة النموذج العادي 9 (شريط جانبي)",
        "Standard Template 10 Preview": "معاينة النموذج العادي 10 (شريط جانبي)",
        "Standard Template 11 Preview": "معاينة النموذج العادي 11 (شريط جانبي)",
        "Standard Template 12 Preview": "معاينة النموذج العادي 12 (شريط جانبي)",
        "Professional Templates (Header + Sidebar)": "نماذج احترافية (رأس وجانبي ورئيسي)",
        "Professional Template 1 Preview": "معاينة النموذج الاحترافي 1",
        "Professional Template 2 Preview": "معاينة النموذج الاحترافي 2",
        "Professional Template 3 Preview": "معاينة النموذج الاحترافي 3",
        "Professional Template 4 Preview": "معاينة النموذج الاحترافي 4",
        "Professional Template 5 Preview": "معاينة النموذج الاحترافي 5",
        "Professional Template 6 Preview": "معاينة النموذج الاحترافي 6",
        "Professional Template 7 Preview": "معاينة النموذج الاحترافي 7",
        "Professional Template 8 Preview": "معاينة النموذج الاحترافي 8",
        "Professional Template 9 Preview": "معاينة النموذج الاحترافي 9",
        "Professional Template 10 Preview": "معاينة النموذج الاحترافي 10",
        "Professional Template 11 Preview": "معاينة النموذج الاحترافي 11",
        "Professional Template 12 Preview": "معاينة النموذج الاحترافي 12",
        "AST Supported Templates": "نماذج داعمة لأنظمة AST",
        "AST Template 1 Preview": "معاينة نموذج AST 1",
        "AST Template 2 Preview": "معاينة نموذج AST 2",
        "AST Template 3 Preview": "معاينة نموذج AST 3",
        "AST Template 4 Preview": "معاينة نموذج AST 4",
        "AST Template 5 Preview": "معاينة نموذج AST 5",
        "AST Template 6 Preview": "معاينة نموذج AST 6",
        "AST Template 7 Preview": "معاينة نموذج AST 7",
        "AST Template 8 Preview": "معاينة نموذج AST 8",
        "AST Template 9 Preview": "معاينة نموذج AST 9",
        "AST Template 10 Preview": "معاينة نموذج AST 10",
        "AST Template 11 Preview": "معاينة نموذج AST 11",
        "AST Template 12 Preview": "معاينة نموذج AST 12",
        "Back to Data Entry": "العودة لإدخال البيانات",
        "Next: Preview CV": "التالي: معاينة السيرة",
        "Your CV Preview": "معاينة سيرتك الذاتية",
        "Download PDF (Direct)": "تنزيل PDF (معاينة)",
        "Request Download / Print": "طلب تنزيل / طباعة",
        "Back to Templates": "العودة للنماذج",
        "choose-payment": "اختر وسيلة الدفع",
        "Enter discount code (if any)": "أدخل كود الخصم (إن وجد)",
        "Apply Discount": "تطبيق الخصم",
        "messages": "السعر",
        "payment": "الدفع",
        "payment-note": "بعد إتمام الدفع في تطبيق البنك، الرجاء تعبئة البيانات التالية:",
        "your-name": "اسمك:",
        "your-email": "بريدك الإلكتروني:",
        "your-phone": "رقم الهاتف:",
        "attachment": "أرفق إيصال الدفع (صورة / PDF):",
        "submit": "إرسال",
        "Submitting...": "جاري الإرسال...",
        "Back to Payment Options": "العودة لخيارات الدفع",
        "terms-of-service-title": "شروط الخدمة",
        "terms-of-service-intro-p": "مرحباً بكم في نظام رسائل لإنشاء السيرة الذاتية. باستخدامك لخدماتنا، فإنك توافق على الالتزام بالشروط والأحكام التالية، والتي تشكل اتفاقية ملزمة بينك وبين \"رسائل\". يرجى قراءتها بعناية.",
        "terms-of-service-h4-1": "1. استخدام الخدمة",
        "terms-of-service-p-1-1": "تتيح لك منصة رسائل إنشاء وتصميم السير الذاتية الاحترافية وتصديرها بصيغة PDF. يجب أن تكون جميع البيانات والمعلومات التي تقدمها (بما في ذلك، على سبيل المثال لا الحصر، الاسم، الخبرات، المؤهلات، المهارات) صحيحة ودقيقة وحديثة، وتتحمل أنت وحدك مسؤولية المحتوى الخاص بك. لا يجوز استخدام الخدمة لأي أغراض غير قانونية أو احتيالية أو تشهيرية أو غير مصرح بها.",
        "terms-of-service-p-1-2": "نحتفظ بالحق في تعليق أو إنهاء وصولك إلى الخدمة إذا انتهكت أياً من هذه الشروط، أو إذا رأينا أن سلوكك يضر بالخدمة أو المستخدمين الآخرين.",
        "terms-of-service-h4-2": "2. الملكية الفكرية",
        "terms-of-service-p-2-1": "جميع التصميمات، القوالب، النصوص، الرسومات، الشعارات، الأيقونات، الصور، البرمجيات، وأي محتوى آخر متاح عبر الخدمة (\"محتوى الخدمة\") هي ملكية فكرية خاصة بـ \"رسائل\" أو مرخصة لنا، وهي محمية بموجب قوانين حقوق النشر والعلامات التجارية والملكية الفكرية الأخرى. عند استخدامك للخدمة، فإنك تحصل على ترخيص شخصي، غير حصري، غير قابل للتحويل، وقابل للإلغاء لاستخدام السيرة الذاتية التي تنشئها لأغراضك الشخصية أو المهنية فقط.",
        "terms-of-service-p-2-2": "لا يجوز لك إعادة بيع أو إعادة إنتاج أو توزيع أو تعديل أو إنشاء أعمال مشتقة أو عرض علني أو أداء علني أو نشر أو نقل أو استغلال أي جزء من محتوى الخدمة أو الخدمة نفسها دون إذن كتابي مسبق من \"رسائل\".",
        "terms-of-service-h4-3": "3. الدفع والأسعار",
        "terms-of-service-p-3-1": "تتطلب بعض القوالب والميزات المتقدمة دفع رسوم محددة. تكون جميع الأسعار موضحة بوضوح في صفحة اختيار القوالب أو عند بداية عملية الدفع. تحتفظ \"رسائل\" بالحق في تعديل الأسعار أو فرض رسوم على ميزات جديدة في أي وقت، مع إخطار مسبق بذلك. جميع المدفوعات تتم عبر بوابات دفع خارجية آمنة (مثل Lemon Squeezy). \"رسائل\" لا تقوم بتخزين معلومات بطاقة الدفع الخاصة بك.",
        "terms-of-service-p-3-2": "جميع المدفوعات غير قابلة للاسترداد إلا في حالات محددة وفقًا لسياسة الاسترداد الخاصة بنا، والتي يمكنك مراجعتها في القسم المخصص لذلك.",
        "terms-of-service-h4-4": "4. حدود المسؤولية",
        "terms-of-service-p-4-1": "يتم تقديم الخدمة \"كما هي\" و \"حسب توفرها\" دون أي ضمانات من أي نوع، صريحة أو ضمنية. نحن لا نضمن دقة أو اكتمال أو صلاحية أو موثوقية أو توفر أي معلومات مقدمة من قبل المستخدمين أو النتائج التي يمكن الحصول عليها من استخدام الخدمة.",
        "terms-of-service-p-4-2": "لن تكون \"رسائل\" مسؤولة، تحت أي ظرف من الظروف، عن أي أضرار مباشرة أو غير مباشرة أو عرضية أو خاصة أو تبعية أو تأديبية، بما في ذلك، على سبيل المثال لا الحصر، خسارة الأرباح، البيانات، أو الاستخدام، تنشأ عن استخدام أو عدم القدرة على استخدام الخدمة.",
        "terms-of-service-h4-5": "5. التعديلات على الشروط",
        "terms-of-service-p-5-1": "نحتفظ بالحق في تعديل أو تحديث هذه الشروط والأحكام في أي وقت ودون إشعار مسبق. سيتم نشر أي تغييرات على هذه الصفحة، ويعتبر استمرار استخدامك للخدمة بعد نشر التعديلات بمثابة موافقة منك على الشروط المعدلة. يرجى مراجعة هذه الصفحة بانتظام للاطلاع على أي تحديثات.",
        "terms-of-service-h4-6": "6. القانون المعمول به",
        "terms-of-service-p-6-1": "تخضع هذه الشروط والأحكام وتفسر وفقًا لقوانين المملكة العربية السعودية، وتوافق على الخضوع للاختصاص القضائي الحصري لمحاكم المملكة العربية السعودية لحل أي نزاعات تنشأ عن هذه الشروط أو استخدام الخدمة.",
        "terms-of-service-h4-7": "7. الاتصال بنا",
        "terms-of-service-p-7-1": "لأي أسئلة أو استفسارات بخصوص شروط الخدمة، يرجى الاتصال بنا عبر البريد الإلكتروني: <strong><a href=\"mailto:ramyheshamamer@gmail.com\">ramyheshamamer@gmail.com</a></strong>.",
        "back-to-home": "العودة للرئيسية",
        "terms-of-service-link": "شروط الخدمة",
        "refund-policy-link": "سياسة الاسترداد",
        "privacy-policy-link": "سياسة الخصوصية",
        "refund-policy-title": "سياسة الاسترداد والنزاعات",
        "refund-policy-intro-p": "نحن في \"رسائل\" نسعى لتقديم خدمة عالية الجودة وضمان رضا عملائنا. نظرًا لطبيعة منتجاتنا الرقمية (السير الذاتية التي يتم إنشاؤها وتنزيلها بصيغة PDF)، فإن سياستنا للاسترداد والنزاعات كالتالي:",
        "refund-policy-h4-1": "1. المنتجات الرقمية (السير الذاتية بصيغة PDF)",
        "refund-policy-p-1-1": "بمجرد إتمام عملية الدفع ونجاح إنشاء السيرة الذاتية وإرسالها إلى بريدك الإلكتروني (أو توفير رابط التنزيل)، تعتبر الخدمة قد اكتملت بالكامل. ولذلك، لا تتوفر عادةً عمليات استرداد للمبالغ المدفوعة.",
        "refund-policy-h4-2": "2. حالات الاسترداد الاستثنائية",
        "refund-policy-p-2-1": "قد يتم النظر في طلبات الاسترداد في الحالات الاستثنائية التالية فقط:",
        "refund-policy-list-1": [
            "<strong>مشكلة فنية جوهرية:</strong> إذا واجهت مشكلة فنية في نظامنا منعتك من إنشاء أو تنزيل السيرة الذاتية بشكل كامل، ولم يتمكن فريق الدعم من حل المشكلة في غضون فترة زمنية معقولة.",
            "<strong>خطأ فادح في المنتج:</strong> إذا كانت السيرة الذاتية التي تم إنشاؤها تحتوي على أخطاء فادحة ناتجة عن خلل في نظامنا (وليس بسبب أخطاء في البيانات المدخلة من قبلك)، ولم نتمكن من تصحيحها.",
            "<strong>الدفع المكرر:</strong> إذا قمت بالدفع لنفس الخدمة عن طريق الخطأ أكثر من مرة."
        ],
        "refund-policy-h4-3": "3. عملية طلب الاسترداد",
        "refund-policy-p-3-1": "لتقديم طلب استرداد، يرجى الاتصال بفريق الدعم لدينا عبر البريد الإلكتروني <a href=\"mailto:ramyheshamamer@gmail.com\">ramyheshamamer@gmail.com</a> في غضون 7 أيام من تاريخ الشراء. يجب أن يتضمن طلبك التفاصيل التالية:",
        "refund-policy-list-2": [
            "اسمك الكامل والبريد الإلكتروني المستخدم في الشراء.",
            "تاريخ ورقم المعاملة (إن وجد).",
            "وصف مفصل للمشكلة التي واجهتها والأسباب التي تدفعك لطلب الاسترداد.",
            "أي لقطات شاشة أو مستندات تدعم طلبك."
        ],
        "refund-policy-h4-4": "4. مراجعة الطلبات",
        "refund-policy-p-4-1": "سنقوم بمراجعة جميع طلبات الاسترداد بعناية. سيتم إخطارك بالقرار في غضون 5 أيام عمل من استلام طلبك. إذا تمت الموافقة على الاسترداد، فسيتم معالجة المبلغ إلى طريقة الدفع الأصلية خلال 7-14 يوم عمل، اعتمادًا على سياسات معالج الدفع الخاص بك.",
        "refund-policy-h4-5": "5. حل النزاعات",
        "refund-policy-p-5-1": "نحن نشجعك على الاتصال بنا مباشرة في حال وجود أي مشاكل أو نزاعات قبل اللجوء إلى معالج الدفع أو البنك. نسعى لحل جميع المشكلات بشكل ودي وعادل لضمان رضا عملائنا.",
        "privacy-policy-title": "سياسة الخصوصية",
        "privacy-policy-intro-p": "نحن في \"رسائل\" نلتزم بحماية خصوصية بياناتك الشخصية. توضح هذه السياسة كيف نجمع، نستخدم، نحمي، وندير المعلومات التي تقدمها لنا عند استخدام خدماتنا لإنشاء السير الذاتية.",
        "privacy-policy-h4-1": "1. المعلومات التي نجمعها",
        "privacy-policy-list-1": [
            "<strong>معلومات السيرة الذاتية:</strong> نقوم بجمع المعلومات التي تدخلها مباشرة في نماذج إنشاء السيرة الذاتية، مثل اسمك الكامل، المسمى الوظيفي، عنوان البريد الإلكتروني، رقم الهاتف، الموقع الشخصي/المحفظة، الهدف الوظيفي، تفاصيل الخبرة العملية، المؤهلات العلمية، المهارات، اللغات، والمراجع. إذا قمت بتحميل صورة شخصية، فإننا نقوم بجمعها أيضاً.",
            "<strong>معلومات الاتصال والدفع:</strong> عند إجراء عملية شراء، نجمع اسمك، بريدك الإلكتروني، ورقم هاتفك. تفاصيل الدفع (مثل أرقام البطاقات الائتمانية) يتم معالجتها مباشرة بواسطة بوابات دفع خارجية آمنة (مثل Lemon Squeezy/Stripe)، ونحن لا نقوم بتخزين هذه المعلومات الحساسة على خوادمنا.",
            "<strong>بيانات الاستخدام:</strong> قد نجمع معلومات حول كيفية وصولك واستخدامك لخدمتنا، مثل عنوان IP، نوع المتصفح، الصفحات التي زرتها، والوقت المستغرق في كل صفحة. هذه البيانات تُستخدم لتحسين الخدمة ولا ترتبط بشكل مباشر بمعلوماتك الشخصية."
        ],
        "privacy-policy-h4-2": "2. كيف نستخدم معلوماتك",
        "privacy-policy-p-2-1": "نستخدم المعلومات التي نجمعها للأغراض التالية:",
        "privacy-policy-list-2": [
            "لتقديم خدمة إنشاء السيرة الذاتية وتخصيصها لك.",
            "لمعالجة معاملات الدفع الخاصة بك وتزويدك بالمنتج النهائي (ملف PDF للسيرة الذاتية).",
            "لتحسين وتطوير خدماتنا وميزاتنا.",
            "للتواصل معك بخصوص استخدامك للخدمة، أو لأغراض الدعم الفني، أو لإرسال تحديثات مهمة.",
            "لضمان الامتثال للمتطلبات القانونية والتنظيمية."
        ],
        "privacy-policy-h4-3": "3. مشاركة المعلومات",
        "privacy-policy-p-3-1": "نحن لا نبيع، نؤجر، أو نتبادل معلوماتك الشخصية مع أطراف ثالثة لأغراض التسويق. قد نشارك معلوماتك مع:",
        "privacy-policy-list-3": [
            "<strong>مقدمي الخدمات الخارجيين:</strong> مثل بوابات الدفع (Lemon Squeezy/Stripe) ومعالجي البريد الإلكتروني، وذلك بالقدر اللازم لتقديم خدماتنا. هؤلاء المقدمون ملزمون بالحفاظ على سرية معلوماتك.",
            "<strong>الامتثال القانوني:</strong> قد نكشف عن معلوماتك إذا كان ذلك مطلوبًا بموجب القانون أو أمر قضائي، أو لحماية حقوقنا ومصالحنا أو حقوق المستخدمين الآخرين."
        ],
        "privacy-policy-h4-4": "4. أمان البيانات",
        "privacy-policy-p-4-1": "نحن نتخذ إجراءات أمنية معقولة ومناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به، أو التغيير، أو الكشف، أو التدمير. ومع ذلك، يجب أن تدرك أنه لا يوجد نظام نقل بيانات عبر الإنترنت أو تخزين إلكتروني آمن 100%.",
        "privacy-policy-h4-5": "5. حقوقك",
        "privacy-policy-p-5-1": "يحق لك الوصول إلى بياناتك الشخصية التي نحتفظ بها، وطلب تصحيح أي معلومات غير دقيقة، أو طلب حذف بياناتك. لممارسة هذه الحقوق، يرجى الاتصال بنا عبر البريد الإلكتروني المذكور أدناه.",
        "privacy-policy-h4-6": "6. التعديلات على سياسة الخصوصية",
        "privacy-policy-p-6-1": "نحتفظ بالحق في تعديل أو تحديث سياسة الخصوصية هذه من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة، ويعتبر استمرارك في استخدام الخدمة بعد نشر التعديلات بمثابة موافقة منك على السياسة المعدلة.",
        "privacy-policy-h4-7": "7. الاتصال بنا",
        "privacy-policy-p-7-1": "لأي أسئلة أو استفسارات بخصوص سياسة الخصوصية، يرجى الاتصال بنا عبر البريد الإلكتروني: <strong><a href=\"mailto:ramyheshamamer@gmail.com\">ramyheshamamer@gmail.com</a></strong>."
    },
    "en": {
        "image-paths": { // هذا هو الجزء الخاص بمسارات الصور
            "normal": (id) => `CV templates_en/${id}.webp`,
            "standard": (id) => `CV templates_en/${id}.webp`,
            "professional": (id) => `CV templates_en/${id}.webp`,
            "ast": (id) => `CV templates_en/${id}.webp`
        },
        // ترجمات صفحة الدفع (الإنجليزية - مع العملة بالدولار)
        "local-payment-title": "Local Payment",
        "local-payment-desc": "(via STC Pay or Al Rajhi Transfer)", // هذا مفتاح جديد تم إضافته
        "sar-currency": "SAR", 
        "click-to-pay": "Choose your preferred method:",
        "international-payment-header": "International & Secure",
        "card-payment-title": "Credit Card Payment",
        "click-to-pay-ls": "Click for secure payment:",
        "pay-with-card": "Pay Now",
        "select_font_label": "Select CV Font:",
        "add_custom_section_btn": "Add Custom Section",
        // ترجمات رسائل التنبيه/الأخطاء (الإنجليزية)
        "Please fill in all fields.": "Please fill in all required fields.",
        "Please enter a valid email.": "Please enter a valid email address.",
        "File size exceeds the limit (3MB).": "File size exceeds the 3MB limit.",
        "Please attach only image or PDF files.": "Please attach only image or PDF files.",
        "An error occurred while preparing your payment. Please try again or contact support.": "An error occurred while preparing your payment. Please try again or contact support.",
        "Error, price for this category is undefined.": "Error, price for this category is undefined.",
        "Please select a valid image file.": "Please select a valid image file.",
        "Image size is too large. Please select an image smaller than {size} megabytes.": "Image size is too large. Please select an image smaller than {size} megabytes.",
        "You must have at least one field in this section.": "You must have at least one field in this section.",
        "payment-success": "Your request has been successfully received! The CV will be sent to your email shortly.",
        "Error processing file.": "Error processing file.",
        //قسم المهارات
        "Enter a skill": "Enter a skill",
        "Select Level": "Select Level",
        "Beginner": "Beginner",
        "Intermediate": "Intermediate",
        "Advanced": "Advanced",
        "Expert": "Expert",

        "select_name_font_label": "Main Name Font:",
        "select_headings_font_label": "Headings Font:",
        "select_body_font_label": "Body Text Font:",

        // --- Color Picker Translations ---
        "color_presets_titl": "Choose a color template",
        "color_customization_title":"Customize Template Colors",
        "background_colors_title": "Background Colors",
        "primary_bg_label": "Primary BG / Header",
        "sidebar_bg_label": "Sidebar BG",
        "accent_bg_label": "Accent / Skills BG",
        "gradient_label": "Gradient",
        "text_colors_title": "Text & Icon Colors",
        "header_text_label": "Header Text",
        "title_text_label": "Titles Text",
        "body_text_label": "Body Text",
        "subtle_text_label": "Subtle Text",
        "gradient_horizontal": "Horizontal",
        "gradient_vertical": "Vertical",
        "gradient_diagonal": "Diagonal",

        // الترجمات العامة المتبقية من الملف الأصلي
        "promo_bar_text": "Special Offer! Use code <span class='blinking-code'>FIRSTBUY</span> for 25% off or <span class='blinking-code'>SAVE10</span> for 10% off!",
        "from-city": "from",
        "notification-action": "just created their CV!",
        "CV downloaded successfully!": "CV downloaded successfully!",
        "Professional CV Builder": "Professional CV Builder",
        "brand-name": "Resail",
        "home-link": "Home",
        "features-link": "Features",
        "products-link": "Products",
        "product-basic": "WhatsApp Sender",
        "product-cv": "CV Builder",
        "about-link": "About Us",
        "contact-link": "Contact Us",
        "English": "العربية", // هذا هو النص الذي يظهر للتبديل للعربية
        "Professional CV Builder_header": "Build Your Professional CV Easily",
        "Create a professional CV that stands out and gets you hired.": "Showcase your skills and experience with a professional design that grabs attention and opens doors to opportunities.",
        "Create Your CV Now": "Create Your CV Now",
        "loading-cv-text": "Generating CV, please wait...",
        "Why Resail CV Builder?": "Why Resail CV Builder?",
        "Easy Data Entry": "Easy Data Entry",
        "Intuitive forms to quickly fill in all your information.": "Intuitive and easy forms to quickly fill in all your information.",
        "Diverse and Professional Templates": "Diverse and Professional Templates",
        "Choose from many modern and attractive designs to suit your style.": "Choose from many modern and attractive designs to suit your taste and field.",
        "Arabic and English Support": "Full Arabic and English Support",
        "Create your CV in either Arabic or English with proper formatting.": "Create your CV in your preferred language, ensuring correct formatting for both directions.",
        "Instant Preview": "Instant Preview",
        "See your CV instantly as you build it, ensuring it looks perfect.": "See your CV instantly as you enter data or choose a template to ensure the perfect look.",
        "Professional PDF Export": "Professional PDF Export",
        "Download your completed CV as a high-quality PDF file, ready to share.": "Get your final CV as a professional PDF file, ready for printing or sharing online.",
        "Flexible Payment Options": "Flexible and Secure Payment Options",
        "Pay easily using various methods including PayPal and local options.": "Multiple payment methods including PayPal and local options to facilitate the process of getting your CV.",
        "Customer Testimonials": "What Our Customers Say?",
        "“Creating my CV was incredibly easy and fast. The templates are modern and professional. Highly recommended!”": "“Creating my CV was incredibly easy and fast. The templates are modern and professional. Highly recommended!”",
        "- Sarah Ahmed": "- Sarah Ahmed",
        "“I loved the variety of templates and the instant preview feature. It helped me choose the perfect design for my application.”": "“I loved the variety of templates and the instant preview feature. It helped me choose the perfect design for my application.”",
        "- Khalid Hassan": "- Khalid Hassan",
        "About Resail CV Builder": "About Resail CV Builder",
        "Resail is your go-to platform for effortlessly creating professional and impactful CVs. We provide a wide range of modern templates and intuitive tools to help you stand out in the job market with a high-quality PDF resume.": "Resail is your comprehensive system for easily creating professional and impactful CVs. We offer a wide range of modern templates and intuitive tools to help you stand out in the job market with a high-quality PDF resume.",
        "Our service focuses on simplifying the CV creation process, offering diverse templates, and ensuring full support for both Arabic and English languages with accurate formatting. Download your ready-to-share PDF CV after a seamless payment process.": "Our service focuses on simplifying the CV creation process, offering diverse templates, and ensuring full support for both Arabic and English languages with accurate formatting. Get your PDF CV ready to share after a seamless payment process.",
        "CVs Generated So Far": "CVs Generated So Far",
        "+٥٠٠٠": "5000+",
        "Join thousands who have successfully created their professional CVs.": "Join thousands who have successfully created their professional CVs.",
        "Frequently Asked Questions": "Frequently Asked Questions",
        "How do I create a CV?": "How do I create a CV?",
        "Simply click on 'Create Your CV Now', fill in your details in the form, choose a template, and preview your CV.": "Simply click on 'Create Your CV Now', fill in your details in the form, choose a template, and preview your CV.",
        "Are the templates free?": "Are the templates free?",
        "We offer a variety of free and premium templates. Premium templates require a small fee for download.": "We offer a variety of free and premium templates. Premium templates require a small fee for download or printing.",
        "How do I download my CV?": "How do I download my CV?",
        "After previewing your CV, click on 'Request Download / Print'. You will be guided through the payment process if you selected a premium template, and then you can download the PDF.": "After previewing your CV and choosing the template, click on 'Request Download / Print'. You will be guided through the payment process if you selected a premium template, and then you can download the PDF file.",
        "Contact Us": "Contact Us",
        "For inquiries or support, please contact us via email: ramyheshamamer@gmail.com": "For inquiries or support, please contact us via email: <strong><a href=\"mailto:ramyheshamamer@gmail.com\">ramyheshamamer@gmail.com</a></strong>",
        "Enter Your Information": "Enter Your Information",
        "Full Name": "Full Name",
        "Enter your name": "Enter your name",
        "Job Title": "Job Title",
        "Enter your job title": "Enter your job title",
        "Email Address": "Email Address",
        "Enter your email address": "Enter your email address",
        "Phone Number": "Phone Number",
        "Enter your phone number": "Enter your phone number",
        "Website / Portfolio": "Website / Portfolio",
        "Enter your website or portfolio URL": "Enter your website or portfolio URL",
        "Profile Picture": "Profile Picture",
        "Choose a picture to enhance the look of your CV in some templates.": "Choose a picture to enhance the look of your CV in some templates.",
        "Career Objective": "Career Objective",
        "Enter your career objective": "Enter your career objective",
        "Work Experience": "Work Experience",
        "Add Experience": "Add Experience",
        "Remove Last": "Remove Last",
        "Job Title_placeholder": "Job Title",
        "Company": "Company",
        "Duration": "Duration",
        "Description": "Description",
        "Education": "Education",
        "Add Education": "Add Education",
        "Degree": "Degree",
        "University/Institution": "University/Institution",
        "custome-section": "ِAdd Custome Section",
        "custom_section_placeholder": "New Section Title (e.g., Projects or Courses)",
        "add_subsection_btn": '<i class="fas fa-plus"></i> Add Sub-heading',
        "remove_subsection_title": "Remove Sub-heading",
        "subsection_title_placeholder": "Sub-heading (e.g., PMP Certificate)",
        "subsection_desc_placeholder": "Description or details related to the sub-heading...",
        "remove_section_btn": "Delete Entire Section",
        "confirm_delete_section": "Are you sure you want to delete this entire section?",
        "Skills": "Skills ",
        "Add Skill": "Add Skill",
        "Enter a skill": "Enter a skill",
        "Languages": "Languages",
        "Add Language": "Add Language",
        "Enter a language": "Enter a language",
        "References": "References",
        "Add Reference": "Add Reference",
        "Name": "Name",
        "Position": "Position",
        "Phone": "Phone",
        "Email": "Email",
        "Data Completion Progress": "Data Completion Progress",
        "Back to Home": "Back to Home",
        "Next: Choose Template": "Next: Choose Template",
        "Choose a CV Template and Preview": "Choose a CV Template and Preview",
        "Normal Templates (Full Width)": "Normal Templates (Full Width)",
        "Normal Template 1 Preview": "Normal Template 1 Preview",
        "Normal Template 2 Preview": "Normal Template 2 Preview",
        "Normal Template 3 Preview": "Normal Template 3 Preview",
        "Normal Template 4 Preview": "Normal Template 4 Preview",
        "Normal Template 5 Preview": "Normal Template 5 Preview",
        "Normal Template 6 Preview": "Normal Template 6 Preview",
        "Normal Template 7 Preview": "Normal Template 7 Preview",
        "Normal Template 8 Preview": "Normal Template 8 Preview",
        "Normal Template 9 Preview": "Normal Template 9 Preview",
        "Normal Template 10 Preview": "Normal Template 10 Preview",
        "Normal Template 11 Preview": "Normal Template 11 Preview",
        "Normal Template 12 Preview": "Normal Template 12 Preview",
        "Standard Templates (Sidebar)": "Standard Templates (Sidebar)",
        "Standard Template 1 Preview": "Standard Template 1 Preview",
        "Standard Template 2 Preview": "Standard Template 2 Preview",
        "Standard Template 3 Preview": "Standard Template 3 Preview",
        "Standard Template 4 Preview": "Standard Template 4 Preview",
        "Standard Template 5 Preview": "Standard Template 5 Preview",
        "Standard Template 6 Preview": "Standard Template 6 Preview",
        "Standard Template 7 Preview": "Standard Template 7 Preview",
        "Standard Template 8 Preview": "Standard Template 8 Preview",
        "Standard Template 9 Preview": "Standard Template 9 Preview",
        "Standard Template 10 Preview": "Standard Template 10 Preview",
        "Standard Template 11 Preview": "Standard Template 11 Preview",
        "Standard Template 12 Preview": "Standard Template 12 Preview",
        "Professional Templates (Header + Sidebar)": "Professional Templates (Header + Sidebar)",
        "Professional Template 1 Preview": "Professional Template 1 Preview",
        "Professional Template 2 Preview": "Professional Template 2 Preview",
        "Professional Template 3 Preview": "Professional Template 3 Preview",
        "Professional Template 4 Preview": "Professional Template 4 Preview",
        "Professional Template 5 Preview": "Professional Template 5 Preview",
        "Professional Template 6 Preview": "Professional Template 6 Preview",
        "Professional Template 7 Preview": "Professional Template 7 Preview",
        "Professional Template 8 Preview": "Professional Template 8 Preview",
        "Professional Template 9 Preview": "Professional Template 9 Preview",
        "Professional Template 10 Preview": "Professional Template 10 Preview",
        "Professional Template 11 Preview": "Professional Template 11 Preview",
        "Professional Template 12 Preview": "Professional Template 12 Preview",
        "AST Supported Templates": "AST Supported Templates",
        "AST Template 1 Preview": "AST Template 1 Preview",
        "AST Template 2 Preview": "AST Template 2 Preview",
        "AST Template 3 Preview": "AST Template 3 Preview",
        "AST Template 4 Preview": "AST Template 4 Preview",
        "AST Template 5 Preview": "AST Template 5 Preview",
        "AST Template 6 Preview": "AST Template 6 Preview",
        "AST Template 7 Preview": "AST Template 7 Preview",
        "AST Template 8 Preview": "AST Template 8 Preview",
        "AST Template 9 Preview": "AST Template 9 Preview",
        "AST Template 10 Preview": "AST Template 10 Preview",
        "AST Template 11 Preview": "AST Template 11 Preview",
        "AST Template 12 Preview": "AST Template 12 Preview",
        "Back to Data Entry": "Back to Data Entry",
        "Next: Preview CV": "Next: Preview CV",
        "Your CV Preview": "Your CV Preview",
        "Download PDF (Direct)": "Download PDF (Preview)",
        "Request Download / Print": "Request Download / Print",
        "Back to Templates": "Back to Templates",
        "choose-payment": "Choose Payment Method",
        "Enter discount code (if any)": "Enter discount code (if any)",
        "Apply Discount": "Apply Discount",
        "messages": "Price",
        "payment": "Payment",
        "payment-note": "After completing the payment in the banking application, please fill in the following details:",
        "your-name": "Your Name:",
        "your-email": "Your Email:",
        "your-phone": "Phone Number:",
        "attachment": "Attach payment receipt (image / PDF):",
        "submit": "Submit",
        "Submitting...": "Submitting...",
        "Back to Payment Options": "Back to Payment Options",
        "terms-of-service-link": "Terms of Service",
        "refund-policy-link": "Refund Policy",
        "privacy-policy-link": "privacy policy",
        "terms-of-service-title": "Terms of Service",
        "terms-of-service-intro-p": "Welcome to the Resail CV Builder system. By using our services, you agree to abide by the following terms and conditions, which constitute a binding agreement between you and \"Resail\". Please read them carefully.",
        "terms-of-service-h4-1": "1. Service Use",
        "terms-of-service-p-1-1": "Resail platform allows you to create and design professional CVs and export them as PDF. All data and information you provide (including, but not limited to, name, experience, qualifications, skills) must be accurate, complete, and up-to-date, and you are solely responsible for your content. The service may not be used for any illegal, fraudulent, defamatory, or unauthorized purposes.",
        "terms-of-service-p-1-2": "We reserve the right to suspend or terminate your access to the service if you violate any of these terms, or if we deem your conduct harmful to the service or other users.",
        "terms-of-service-h4-2": "2. Intellectual Property",
        "terms-of-service-p-2-1": "All designs, templates, texts, graphics, logos, icons, images, software, and any other content available through the service (\"Service Content\") are the intellectual property of \"Resail\" or licensed to us, and are protected by copyright, trademark, and other intellectual property laws. By using the service, you obtain a personal, non-exclusive, non-transferable, and revocable license to use the CV you create for your personal or professional purposes only.",
        "terms-of-service-p-2-2": "You may not resell, reproduce, distribute, modify, create derivative works from, publicly display, publicly perform, publish, transmit, or exploit any part of the Service Content or the service itself without prior written permission from \"Resail\".",
        "terms-of-service-h4-3": "3. Payment and Pricing",
        "terms-of-service-p-3-1": "Some templates and advanced features require specific fees. All prices are clearly displayed on the template selection page or at the start of the payment process. \"Resail\" reserves the right to modify prices or impose fees for new features at any time, with prior notice. All payments are made through secure external payment gateways (such as Lemon Squeezy). \"Resail\" does not store your payment card information.",
        "terms-of-service-p-3-2": "All payments are non-refundable except in specific cases according to our refund policy, which you can review in the dedicated section.",
        "terms-of-service-h4-4": "4. Limitation of Liability",
        "terms-of-service-p-4-1": "The service is provided \"as is\" and \"as available\" without warranties of any kind, express or implied. We do not guarantee the accuracy, completeness, validity, reliability, or availability of any information provided by users or the results that can be obtained from using the service.",
        "terms-of-service-p-4-2": "Under no circumstances shall \"Resail\" be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including, but not limited to, loss of profits, data, or use, arising from the use or inability to use the service.",
        "terms-of-service-h4-5": "5. Modifications to Terms",
        "terms-of-service-p-5-1": "We reserve the right to modify or update these terms and conditions at any time without prior notice. Any changes will be posted on this page, and your continued use of the service after the modifications are published constitutes your acceptance of the modified terms. Please review this page regularly for any updates.",
        "terms-of-service-h4-6": "6. Governing Law",
        "terms-of-service-p-6-1": "These terms and conditions are governed by and construed in accordance with the laws of the Kingdom of Saudi Arabia, and you agree to submit to the exclusive jurisdiction of the courts of the Kingdom of Saudi Arabia to resolve any disputes arising from these terms or the use of the service.",
        "terms-of-service-h4-7": "7. Contact Us",
        "terms-of-service-p-7-1": "For any questions or inquiries regarding the terms of service, please contact us via email: <strong><a href=\"mailto:ramyheshamamer@gmail.com\">ramyheshamamer@gmail.com</a></strong>."
    }
};

const CONTROL_VISIBILITY_CONFIG = {
    // للفئة العادية، نستخدم خلفية أساسية، ولون للهيدر والنصوص
    'normal': ['primary-bg', 'header-text', 'title-text', 'body-text', 'subtle-text', 'accent-bg'],
    // للفئة القياسية، نضيف لون خلفية للشريط الجانبي
    'standard': ['primary-bg', 'sidebar-bg', 'header-text', 'title-text', 'body-text', 'subtle-text', 'accent-bg'],
    // للفئة الاحترافية، كل الألوان مهمة
    'professional': ['primary-bg', 'sidebar-bg', 'header-text', 'title-text', 'body-text', 'subtle-text', 'accent-bg'],
    // فئة AST تشبه الفئة القياسية
    'ast': ['primary-bg', 'sidebar-bg', 'header-text', 'title-text', 'body-text', 'subtle-text', 'accent-bg'],
    // الفئة الإبداعية تعتمد بشكل كبير على الألوان
    'creative': ['primary-bg', 'sidebar-bg', 'header-text', 'title-text', 'body-text', 'subtle-text', 'accent-bg']
};

const colorPalettes = [
    // --- 9 لوحات ألوان ثابتة ---
    { name: 'Ocean Blue', id: 'palette-ocean', isGradient: false, colors: { '--primary-bg': '#0d47a1', '--secondary-bg': '#1976d2', '--sidebar-bg': '#f4f6f8', '--accent-bg': '#bbdefb', '--header-text': '#ffffff', '--title-text': '#0d47a1', '--body-text': '#333333', '--subtle-text': '#5f6368' } },
    { name: 'Forest Green', id: 'palette-forest', isGradient: false, colors: { '--primary-bg': '#1b5e20', '--secondary-bg': '#388e3c', '--sidebar-bg': '#f5f5f5', '--accent-bg': '#c8e6c9', '--header-text': '#ffffff', '--title-text': '#1b5e20', '--body-text': '#212121', '--subtle-text': '#616161' } },
    { name: 'Graphite & Amber', id: 'palette-graphite', isGradient: false, colors: { '--primary-bg': '#263238', '--secondary-bg': '#37474f', '--sidebar-bg': '#f5f5f5', '--accent-bg': '#ffecb3', '--header-text': '#ffffff', '--title-text': '#ffab00', '--body-text': '#212121', '--subtle-text': '#757575' } },
    { name: 'Ruby Red', id: 'palette-ruby', isGradient: false, colors: { '--primary-bg': '#b71c1c', '--secondary-bg': '#d32f2f', '--sidebar-bg': '#fbe9e7', '--accent-bg': '#ffcdd2', '--header-text': '#ffffff', '--title-text': '#b71c1c', '--body-text': '#424242', '--subtle-text': '#757575' } },
    { name: 'Royal Purple', id: 'palette-purple', isGradient: false, colors: { '--primary-bg': '#4a148c', '--secondary-bg': '#7b1fa2', '--sidebar-bg': '#f3e5f5', '--accent-bg': '#e1bee7', '--header-text': '#ffffff', '--title-text': '#4a148c', '--body-text': '#311b92', '--subtle-text': '#6a1b9a' } },
    { name: 'Earth Tones', id: 'palette-earth', isGradient: false, colors: { '--primary-bg': '#4e342e', '--secondary-bg': '#6d4c41', '--sidebar-bg': '#efebe9', '--accent-bg': '#d7ccc8', '--header-text': '#ffffff', '--title-text': '#4e342e', '--body-text': '#3e2723', '--subtle-text': '#5d4037' } },
    { name: 'Slate Blue', id: 'palette-slate', isGradient: false, colors: { '--primary-bg': '#455a64', '--secondary-bg': '#607d8b', '--sidebar-bg': '#eceff1', '--accent-bg': '#cfd8dc', '--header-text': '#ffffff', '--title-text': '#37474f', '--body-text': '#263238', '--subtle-text': '#546e7a' } },
    { name: 'Teal', id: 'palette-teal', isGradient: false, colors: { '--primary-bg': '#00695c', '--secondary-bg': '#00897b', '--sidebar-bg': '#e0f2f1', '--accent-bg': '#b2dfdb', '--header-text': '#ffffff', '--title-text': '#004d40', '--body-text': '#004d40', '--subtle-text': '#00796b' } },
    { name: 'Maroon', id: 'palette-maroon', isGradient: false, colors: { '--primary-bg': '#880e4f', '--secondary-bg': '#c2185b', '--sidebar-bg': '#fce4ec', '--accent-bg': '#f8bbd0', '--header-text': '#ffffff', '--title-text': '#880e4f', '--body-text': '#560027', '--subtle-text': '#ad1457' } },

    // --- 6 لوحات ألوان متدرجة ---
    { name: 'Sunset Fade', id: 'palette-sunset', isGradient: true, colors: { '--primary-bg': 'linear-gradient(to right, #8e2de2, #4a00e0)', '--secondary-bg': '#4a00e0', '--sidebar-bg': '#f3e5f5', '--accent-bg': '#d1c4e9', '--header-text': '#ffffff', '--title-text': '#4a00e0', '--body-text': '#333333', '--subtle-text': '#673ab7' } },
    { name: 'Oceanic Deep', id: 'palette-oceanic', isGradient: true, colors: { '--primary-bg': 'linear-gradient(to right, #005c97, #363795)', '--secondary-bg': '#005c97', '--sidebar-bg': '#e0f7fa', '--accent-bg': '#b2ebf2', '--header-text': '#ffffff', '--title-text': '#005c97', '--body-text': '#004d40', '--subtle-text': '#00796b' } },
    { name: 'Mint Fresh', id: 'palette-mint', isGradient: true, colors: { '--primary-bg': 'linear-gradient(to right, #26d0ce, #1a2980)', '--secondary-bg': '#26d0ce', '--sidebar-bg': '#f1f8e9', '--accent-bg': '#dcedc8', '--header-text': '#ffffff', '--title-text': '#1a2980', '--body-text': '#33691e', '--subtle-text': '#558b2f' } },
    { name: 'Soft Peach', id: 'palette-peach', isGradient: true, colors: { '--primary-bg': 'linear-gradient(to right, #ff9a9e, #fad0c4)', '--secondary-bg': '#ff9a9e', '--sidebar-bg': '#fff5f5', '--accent-bg': '#ffcdd2', '--header-text': '#ffffff', '--title-text': '#e57373', '--body-text': '#bf360c', '--subtle-text': '#f44336' } },
    { name: 'Lush Green', id: 'palette-lush', isGradient: true, colors: { '--primary-bg': 'linear-gradient(to right, #2e7d32, #c8e6c9)', '--secondary-bg': '#2e7d32', '--sidebar-bg': '#f1f8e9', '--accent-bg': '#a5d6a7', '--header-text': '#ffffff', '--title-text': '#1b5e20', '--body-text': '#2e7d32', '--subtle-text': '#66bb6a' } },
    { name: 'Night Sky', id: 'palette-night', isGradient: true, colors: { '--primary-bg': 'linear-gradient(to right, #2c3e50, #4c5a65)', '--secondary-bg': '#2c3e50', '--sidebar-bg': '#eceff1', '--accent-bg': '#b0bec5', '--header-text': '#ffffff', '--title-text': '#2c3e50', '--body-text': '#37474f', '--subtle-text': '#546e7a' } }
];

// قائمة الخطوط العربية
const arabicFonts = [
    { name: 'Tajawal (تجوال)', value: "'Tajawal', sans-serif" },
    { name: 'Cairo (القاهرة)', value: "'Cairo', sans-serif" },
    { name: 'Amiri (أميري - كلاسيكي)', value: "'Amiri', serif" },
    { name: 'Almarai (المراعي)', value: "'Almarai', sans-serif" },
    { name: 'Markazi Text (مركزي)', value: "'Markazi Text', serif" },
    { name: 'Lalezar (لاله زار - للعناوين)', value: "'Lalezar', cursive" }
];

// قائمة الخطوط الإنجليزية
const englishFonts = [
    { name: 'Roboto', value: "'Roboto', sans-serif" },
    { name: 'Lato', value: "'Lato', sans-serif" },
    { name: 'Montserrat', value: "'Montserrat', sans-serif" },
    { name: 'Open Sans', value: "'Open Sans', sans-serif" },
    { name: 'PT Sans', value: "'PT Sans', sans-serif" },
    { name: 'Playfair Display (Serif)', value: "'Playfair Display', serif" },
    { name: 'Noto Serif (Serif)', value: "'Noto Serif', serif" }
];

/**
 * يقوم بتعبئة قوائم اختيار الخطوط بالخيارات المناسبة (عربية أو إنجليزية) بناءً على اللغة الحالية.
 */
function populateFontSelectors() {
    const isArabic = currentLang === 'ar';
    const fontList = isArabic ? arabicFonts : englishFonts;

    const selectors = {
        name: document.getElementById('font-selector-name'),
        headings: document.getElementById('font-selector-headings'),
        body: document.getElementById('font-selector-body')
    };

    // تعبئة كل قائمة منسدلة
    for (const key in selectors) {
        const selectElement = selectors[key];
        if (selectElement) {
            // مسح الخيارات القديمة
            selectElement.innerHTML = '';
            // إضافة الخيارات الجديدة
            fontList.forEach(font => {
                const option = document.createElement('option');
                option.value = font.value;
                option.textContent = font.name;
                selectElement.appendChild(option);
            });
        }
    }

    // تحديد خطوط افتراضية مختلفة لكل عنصر
    if(selectors.name) selectors.name.value = isArabic ? "'Cairo', sans-serif" : "'Playfair Display', serif";
    if(selectors.headings) selectors.headings.value = isArabic ? "'Tajawal', sans-serif" : "'Montserrat', sans-serif";
    if(selectors.body) selectors.body.value = isArabic ? "'Almarai', sans-serif" : "'Roboto', sans-serif";

    // تطبيق الخطوط الافتراضية على المعاينة
    applySelectedFonts();
}

/**
 * إعداد زر تبديل اللغة بشكل ديناميكي بناءً على اللغة الحالية.
 */
function setupLanguageToggle() {
    const langToggleButton = document.getElementById('lang-toggle-btn');
    if (!langToggleButton) return;

    if (currentLang === 'ar') {
        // إذا كانت الصفحة الحالية عربية، يجب أن يحول الزر إلى الإنجليزية
        langToggleButton.textContent = 'English';
        langToggleButton.href = 'en.html';
        langToggleButton.onclick = () => setUserLanguage('en');
    } else {
        // إذا كانت الصفحة الحالية إنجليزية، يجب أن يحول الزر إلى العربية
        langToggleButton.textContent = 'العربية';
        langToggleButton.href = 'index.html';
        langToggleButton.onclick = () => setUserLanguage('ar');
    }
}

/**
 * =========================================================================
 * == دالة setUserLanguage النهائية - مع مسح البيانات عند تغيير اللغة ==
 * =========================================================================
 * تحدد لغة المستخدم وتمسح البيانات المحفوظة لضمان عرض بيانات تجريبية جديدة ومترجمة.
 * @param {string} lang - اللغة الجديدة ('ar' أو 'en').
 */
function setUserLanguage(lang) {
    // 1. الخطوة الأهم: مسح بيانات السيرة الذاتية المحفوظة
    // هذا يضمن أنه عند تحميل الصفحة الجديدة، لن تجد بيانات قديمة بلغة خاطئة.
    localStorage.removeItem('resailCvData');

    // 2. تحديد اختيار اللغة الجديد في ذاكرة الجلسة (sessionStorage)
    // هذا يضمن أن المتصفح سيتذكر اللغة الجديدة خلال هذه الزيارة.
    sessionStorage.setItem('userLang', lang);

    // 3. إعادة تحميل الصفحة باللغة الجديدة
    // سيقوم الرابط (href) الموجود على الزر بالانتقال إلى الصفحة الصحيحة.
    // إذا كنت تريد التأكيد، يمكنك إضافة السطر التالي:
    // window.location.href = lang === 'ar' ? 'index.html' : 'en.html';
}

/**
 * يجمع كل بيانات نموذج السيرة الذاتية ويحفظها في localStorage.
 */
function saveCvDataToLocalStorage() {
    // 1. إنشاء كائن لتخزين كل البيانات
    const cvData = {
        name: document.getElementById('name-input')?.value,
        title: document.getElementById('title-input')?.value,
        email: document.getElementById('email-input')?.value,
        phone: document.getElementById('phone-input')?.value,
        website: document.getElementById('website-input')?.value,
        objective: document.getElementById('objective-input')?.value,
        profilePic: profilePicDataUrl, // حفظ الصورة كـ Base64
        experiences: getExperiencesData(),
        educations: getEducationsData(),
        skills: getSkillsData(),
        languages: getLanguagesData(),
        references: getReferencesData(),
        customSections: getCustomSectionsData()
    };

    // 2. تحويل الكائن إلى نص JSON وحفظه
    try {
        localStorage.setItem('resailCvData', JSON.stringify(cvData));
    } catch (e) {
        console.error("Error saving to localStorage", e);
    }
}

/**
 * يفحص localStorage عن بيانات محفوظة، وإذا وجدت، يقوم بتعبئة النموذج بها.
 */
function loadCvDataFromLocalStorage() {
    try {
        const savedDataJSON = localStorage.getItem('resailCvData');
        if (!savedDataJSON) return; // لا توجد بيانات محفوظة

        const savedData = JSON.parse(savedDataJSON);

        // 1. تعبئة الحقول النصية البسيطة
        document.getElementById('name-input').value = savedData.name || '';
        document.getElementById('title-input').value = savedData.title || '';
        document.getElementById('email-input').value = savedData.email || '';
        document.getElementById('phone-input').value = savedData.phone || '';
        document.getElementById('website-input').value = savedData.website || '';
        document.getElementById('objective-input').value = savedData.objective || '';
        
        // 2. استرجاع الصورة الشخصية
        if (savedData.profilePic) {
            profilePicDataUrl = savedData.profilePic;
        }

        // 3. إعادة بناء الحقول الديناميكية (الخبرات، التعليم، إلخ)
        // مسح الحقول الافتراضية أولاً
        document.getElementById('experience-input').innerHTML = '';
        document.getElementById('education-input').innerHTML = '';
        document.getElementById('skills-input').innerHTML = '';
        document.getElementById('languages-input').innerHTML = '';
        document.getElementById('references-input').innerHTML = '';

        // إعادة إنشاء الحقول من البيانات المحفوظة
        savedData.experiences?.forEach(data => addExperienceField(data));
        savedData.educations?.forEach(data => addEducationField(data));
        savedData.skills?.forEach(data => addSkillField(data));
        savedData.languages?.forEach(data => addLanguageField(data));
        savedData.references?.forEach(data => addReferenceField(data));
        if (savedData.customSections && savedData.customSections.length > 0) {
            const formNavigationButtons = document.getElementById('form-navigation-buttons');

            savedData.customSections.forEach(sectionData => {
                const sectionWrapper = document.createElement('div');
                sectionWrapper.className = 'custom-section-wrapper mb-3 p-3 border rounded';

                const titleInput = document.createElement('input');
                titleInput.type = 'text';
                titleInput.placeholder = translations[currentLang]['custom_section_placeholder'];
                titleInput.className = 'form-control form-control-lg mb-2 custom-section-title';
                titleInput.value = sectionData.title;
                titleInput.oninput = () => generateCV(document.getElementById('cv-container'));
                
                const subSectionsContainer = document.createElement('div');
                subSectionsContainer.className = 'sub-sections-container';

                sectionData.subSections.forEach(subData => {
                    const subSectionEntry = document.createElement('div');
                    subSectionEntry.className = 'custom-subsection-entry border p-2 mb-2 rounded position-relative';
                    subSectionEntry.innerHTML = `
                        <button type="button" class="remove-field" onclick="this.parentElement.remove(); generateCV(document.getElementById('cv-container'));" title="${translations[currentLang]['remove_subsection_title']}">&times;</button>
                        <input type="text" class="form-control mb-2 custom-subsection-title" placeholder="${translations[currentLang]['subsection_title_placeholder']}" value="${subData.title || ''}" oninput="generateCV(document.getElementById('cv-container'));">
                        <textarea class="form-control custom-subsection-description" placeholder="${translations[currentLang]['subsection_desc_placeholder']}" rows="3" oninput="generateCV(document.getElementById('cv-container'));">${subData.description || ''}</textarea>
                    `;
                    subSectionsContainer.appendChild(subSectionEntry);
                });

                const buttonContainer = document.createElement('div');
                buttonContainer.className = 'mt-2';
                // ... (يمكنك إعادة بناء الأزرار هنا بنفس طريقة دالة addCustomSection)

                sectionWrapper.appendChild(titleInput);
                sectionWrapper.appendChild(subSectionsContainer);
                sectionWrapper.appendChild(buttonContainer); // أضف حاوية الأزرار
                
                if (formNavigationButtons) {
                   formNavigationButtons.parentNode.insertBefore(sectionWrapper, formNavigationButtons);
                }
            });
        }

    } catch (e) {
        console.error("Error loading from localStorage", e);
        // في حال وجود خطأ، نقوم بمسح البيانات التالفة
        localStorage.removeItem('resailCvData');
    }
}

// Global variables
let currentLang = 'ar';
let selectedTemplate = 1;
let selectedTemplateCategory = 'normal';
let profilePicDataUrl = null;
let selectedPriceToPay = 0;
let discountApplied = 0;
const discountCodes = { "SAVE10": 10, "FIRSTBUY": 25, "FREECV": 100 };
const PRICES = {
    local: { normal: 19, standard: 25, professional: 29, ast: 29, creative: 33 }, // أسعار بالريال
    lemonSqueezy: { normal: 25, standard: 33, professional: 39, ast: 39 , creative: 45 }, // أسعار بالريال
};

const CHECKOUT_CONFIG = {
    normal: {
        link: 'https://resail-cvs.lemonsqueezy.com/buy/bbfff981-9bd9-495c-b1ac-40b013f5b598?enabled=863216'
    },
    standard: {
        link: 'https://resail-cvs.lemonsqueezy.com/buy/a00ef7a0-db54-47cf-9145-4b5c50892b84?enabled=865702'
    },
    professional: {
        link: 'https://resail-cvs.lemonsqueezy.com/buy/fd9e9305-914a-4936-96ed-e308e9ea6460?enabled=865708'
    },
    ast: {
        link: 'https://resail-cvs.lemonsqueezy.com/buy/38ead94f-86f2-4f7e-a6eb-e5887f5f0d47?enabled=865714'
    },
    creative: {
    link: 'https://resail-cvs.lemonsqueezy.com/buy/c78cce0d-171e-49ff-86dd-5288509cdadc'
    }
};


// DOM elements
let paymentNameInput, paymentEmailInput, paymentPhoneInput, paymentMessagesInput, paymentFileInput, qrPaymentResultDiv, submitPaymentProofButton, cvContainer, siteHeaderGlobal, loadingOverlayGlobal, loadingTextGlobal;

const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3MB
const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'application/pdf'];

// **عنوان URL لخادم Node.js الخاص بك**
// يجب تحديث هذا بـ IP الخادم الفعلي عند النشر (مثال: 'http://192.168.1.100:3000')
//const NODE_SERVER_URL = 'https://cv-generator-service-627901029415.asia-east2.run.app';
//const NODE_SERVER_URL = 'http://localhost:8080';
const NODE_SERVER_URL = 'https://resail-cv-generator-f0jc.onrender.com';


// **عنوان URL لتطبيق Google Apps Script الخاص بك (الخاص بمعالجة الدفع فقط)**
const GOOGLE_APPS_SCRIPT_WEB_APP_URL_PAYMENT_PROCESSOR = 'https://script.google.com/macros/s/AKfycbxxkX4jsV4zSz4vR7FcCOhYJmXXuOAt5WrJYgZmhTlmO7dzqXARLM6q_5QNo2KVs8bWww/exec';

// --- دوال إشعارات المبيعات الحية ---
let salesQueue = [
    { name: "محمد", city: "الرياض" },
    { name: "سارة", city: "جدة" },
    { name: "عبدالرحمن", city: "الدمام" }
]; // بيانات أولية افتراضية

// في أعلى ملف script.js مع بقية المتغيرات
let finalPriceToPay = 0; // سيحتفظ بالسعر النهائي بعد الخصم
let appliedCode = ""; // سيحتفظ بالكود المطبق


/**
 * تطبق الخط المختار من القائمة المنسدلة على حاوية عرض السيرة الذاتية.
 */
function applySelectedFonts() {
    const nameFont = document.getElementById('font-selector-name')?.value;
    const headingsFont = document.getElementById('font-selector-headings')?.value;
    const bodyFont = document.getElementById('font-selector-body')?.value;
    const cvContainer = document.getElementById('cv-container');

    if (!cvContainer || !nameFont || !headingsFont || !bodyFont) return;

    // طريقة فعالة لتطبيق التنسيقات عبر إضافة وسم style مخصص للمعاينه الحية
    let livePreviewStyle = document.getElementById('live-font-styles');
    if (!livePreviewStyle) {
        livePreviewStyle = document.createElement('style');
        livePreviewStyle.id = 'live-font-styles';
        document.head.appendChild(livePreviewStyle);
    }

    // كتابة قواعد CSS مباشرةً لاستهداف العناصر الصحيحة
    livePreviewStyle.textContent = `
        /* تطبيق خط النص الأساسي على الحاوية وعناصر الاتصال */
        #cv-container, #cv-container .cv-contact-item p { font-family: ${bodyFont}; }
        /* تجاوز الخط لاسم الشخص وعنوانه الوظيفي */
        #cv-container .cv-name, #cv-container .cv-title { font-family: ${nameFont}; }
        /* تجاوز الخط لعناوين الأقسام */
        #cv-container .cv-section-title { font-family: ${headingsFont}; }
    `;
}

/**
 * =========================================================================
 * == دالة createPaletteControls النهائية - (تخفي/تظهر البالتات حسب الفئة) ==
 * =========================================================================
 */
function createPaletteControls() {
    const container = document.getElementById('palette-selector');
    if (!container) return;
    container.innerHTML = '';

    // 1. نحدد ما إذا كان يجب إظهار لوحات الألوان المتدرجة
    const showGradientPalettes = !['normal', 'standard'].includes(selectedTemplateCategory);

    colorPalettes.forEach(palette => {
        // 2. إذا كانت اللوحة متدرجة والفئة لا تدعمها، نتجاوزها
        if (palette.isGradient && !showGradientPalettes) {
            return; // تخطي هذه اللوحة والانتقال إلى التالية
        }

        // 3. بناء وعرض الأيقونة للوحات المسموح بها فقط
        const swatch = document.createElement('div');
        swatch.className = 'palette-swatch';
        swatch.dataset.paletteId = palette.id;
        
        const primaryCircle = `<span class="palette-color" style="background: ${palette.colors['--primary-bg']};"></span>`;
        const titleCircle = `<span class="palette-color" style="background: ${palette.colors['--title-text']};"></span>`;
        const accentCircle = `<span class="palette-color" style="background: ${palette.colors['--accent-bg']};"></span>`;

        swatch.innerHTML = `${primaryCircle}${titleCircle}${accentCircle}`;
        
        swatch.onclick = () => applyPalette(palette.id);
        container.appendChild(swatch);
    });
}

/**
 * =========================================================================
 * == دالة applyPalette النهائية - (تقوم بتحديث الواجهة فقط) ==
 * =========================================================================
 * @param {string} paletteId - معرف لوحة الألوان.
 */
function applyPalette(paletteId) {
    const selectedPalette = colorPalettes.find(p => p.id === paletteId);
    if (!selectedPalette) return;

    const colors = selectedPalette.colors;

    // الخطوة 1: تحديث قيم أدوات التحكم فقط
    for (const [key, value] of Object.entries(colors)) {
        const controlName = key.replace('--', '');
        const component = document.querySelector(`.color-control-component[data-color-name="${controlName}"]`);
        
        if (component) { // للألوان القابلة للتدرج
            const toggle = component.querySelector('.gradient-toggle');
            const solidPicker = component.querySelector(`#color-picker-${controlName}`);
            const startPicker = component.querySelector(`#color-picker-${controlName}-start`);
            const endPicker = component.querySelector(`#color-picker-${controlName}-end`);

            if (typeof value === 'string' && value.startsWith('linear-gradient')) {
                if (!toggle.checked) toggle.click();
                const colorValues = value.match(/#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g);
                if (colorValues && colorValues.length >= 2) {
                    startPicker.value = colorValues[0];
                    endPicker.value = colorValues[1];
                }
            } else {
                if (toggle.checked) toggle.click();
                solidPicker.value = value;
            }
        } else { // لألوان النصوص الثابتة
             const textPicker = document.getElementById(`color-picker-${controlName}`);
             if(textPicker) textPicker.value = value;
        }
    }
    
    document.querySelectorAll('.palette-swatch').forEach(s => s.classList.remove('selected'));
    document.querySelector(`.palette-swatch[data-palette-id="${paletteId}"]`).classList.add('selected');

    // الخطوة 2: استدعاء دالة التطبيق الموحدة
    applySelectedColors();
}

/**
 * 3. (تحديث) لإضافة الترجمة اللازمة
 */
function updateTranslationsForPalette() {
     const title = document.querySelector('#palette-container h6');
     if (title) {
        title.textContent = translations[currentLang]['color_presets_title'];
     }
}

/**
 * =========================================================================
 * ==  الكود الجديد للتحكم في الأحجام والأنماط الديناميكية (الإصدار 2.0)  ==
 * =========================================================================
 */

// دالة لتطبيق أحجام النصوص والصور بناءً على قيم المنزلقات
function applyDynamicSizes() {
    const cvContainer = document.getElementById('cv-container');
    if (!cvContainer) return;

    // قراءة قيم المنزلقات
    const nameSize = document.getElementById('name-size-slider')?.value;
    const titleSize = document.getElementById('title-size-slider')?.value;
    const contactSize = document.getElementById('contact-size-slider')?.value;
    const sectionTitleSize = document.getElementById('section-title-size-slider')?.value;
    const subsectionTitleSize = document.getElementById('subsection-title-size-slider')?.value;
    const bodyTextSize = document.getElementById('body-text-size-slider')?.value;
    const imageSize = document.getElementById('image-size-slider')?.value;
    const imageRadius = document.getElementById('image-radius-slider')?.value;

    // تطبيق القيم كمتغيرات CSS على حاوية السيرة الذاتية
    cvContainer.style.setProperty('--font-size-name', `${nameSize}em`);
    cvContainer.style.setProperty('--font-size-title', `${titleSize}em`);
    cvContainer.style.setProperty('--font-size-contact', `${contactSize}em`);
    cvContainer.style.setProperty('--font-size-section-title', `${sectionTitleSize}em`);
    cvContainer.style.setProperty('--font-size-subsection-title', `${subsectionTitleSize}em`);
    cvContainer.style.setProperty('--font-size-body', `${bodyTextSize}em`);
    cvContainer.style.setProperty('--image-size', `${imageSize}px`);
    cvContainer.style.setProperty('--image-radius', `${imageRadius}%`);
}

// دالة لربط الأحداث بالمنزلقات الجديدة
function setupDynamicControlListeners() {
    const sliders = [
        'image-size-slider', 'image-radius-slider',
        'name-size-slider', 'title-size-slider', 'contact-size-slider',
        'section-title-size-slider', 'subsection-title-size-slider', 'body-text-size-slider'
    ];
    
    sliders.forEach(sliderId => {
        const slider = document.getElementById(sliderId);
        if (slider) {
            slider.addEventListener('input', applyDynamicSizes);
        }
    });
}


/**
 * === الدالة النهائية: مصدر الحقيقة الوحيد للألوان ===
 * تقرأ كل الألوان من لوحة التحكم وتعيدها كنص CSS جاهز للاستخدام.
 */
function getColorVariablesAsCssText() {
    let cssText = '#cv-container {';
    // جمع ألوان الخلفيات
    document.querySelectorAll('.color-control-component').forEach(component => {
        const colorName = component.dataset.colorName;
        const toggle = component.querySelector('.gradient-toggle');
        let finalValue;
        if (toggle && toggle.checked) {
            const start = component.querySelector(`#color-picker-${colorName}-start`).value;
            const end = component.querySelector(`#color-picker-${colorName}-end`).value;
            const direction = component.querySelector('.gradient-direction').value;
            finalValue = `linear-gradient(${direction}, ${start}, ${end})`;
        } else {
            finalValue = component.querySelector(`#color-picker-${colorName}`).value;
        }
        cssText += `--${colorName}: ${finalValue};`;
    });
    // جمع ألوان النصوص
    cssText += `--header-text: ${document.getElementById('color-picker-header-text').value};`;
    cssText += `--title-text: ${document.getElementById('color-picker-title-text').value};`;
    cssText += `--body-text: ${document.getElementById('color-picker-body-text').value};`;
    cssText += `--subtle-text: ${document.getElementById('color-picker-subtle-text').value};`;
    cssText += '}';
    return cssText;
}


/**
 * يقرأ الألوان المختارة من الواجهة ويطبقها كمتغيرات CSS على حاوية السيرة الذاتية.
 */
function applySelectedColors() {
    let livePreviewStyle = document.getElementById('live-color-styles');
    if (!livePreviewStyle) {
        livePreviewStyle = document.createElement('style');
        livePreviewStyle.id = 'live-color-styles';
        document.head.appendChild(livePreviewStyle);
    }
    livePreviewStyle.textContent = getColorVariablesAsCssText();
}

/**
 * إعداد وظائف مكونات التحكم بالألوان (التبديل بين اللون الثابت والمتدرج).
 */
function setupColorControls() {
    // ربط الأحداث لمكونات الخلفيات القابلة للتدرج
    document.querySelectorAll('.color-control-component').forEach(component => {
        const toggle = component.querySelector('.gradient-toggle');
        const solidPicker = component.querySelector('.solid-color-picker');
        const gradientControls = component.querySelector('.gradient-controls');

        if (toggle && solidPicker && gradientControls) {
            toggle.addEventListener('change', () => {
                solidPicker.style.display = toggle.checked ? 'none' : 'block';
                gradientControls.style.display = toggle.checked ? 'block' : 'none';
                applySelectedColors(); // أعد تطبيق الألوان عند التبديل
            });
        }
        component.querySelectorAll('input[type="color"], select').forEach(input => {
            input.addEventListener('input', applySelectedColors);
        });
    });

    // ربط الأحداث لأدوات ألوان النصوص الثابتة (هذا الجزء كان ناقصاً)
    document.getElementById('color-picker-header-text').addEventListener('input', applySelectedColors);
    document.getElementById('color-picker-title-text').addEventListener('input', applySelectedColors);
    document.getElementById('color-picker-body-text').addEventListener('input', applySelectedColors);
    document.getElementById('color-picker-subtle-text').addEventListener('input', applySelectedColors);
}



// --- أضف هذه الدالة الجديدة بالكامل ---
/**
 * تتحكم في إظهار أو إخفاء أدوات التحكم في الألوان بناءً على فئة القالب الحالية.
 */
function updateColorControlVisibility() {
    // الحصول على قائمة عناصر التحكم المسموح بها للفئة الحالية
    const allowedControls = CONTROL_VISIBILITY_CONFIG[selectedTemplateCategory] || [];

    // إخفاء جميع عناصر التحكم أولاً
    document.querySelectorAll('#color-picker-container [data-control-for]').forEach(control => {
        control.style.display = 'none';
    });

    // إظهار عناصر التحكم المسموح بها فقط
    allowedControls.forEach(controlName => {
        const controlElement = document.querySelector(`#color-picker-container [data-control-for="${controlName}"]`);
        if (controlElement) {
            controlElement.style.display = 'block'; // أو 'flex' إذا كان يستخدم flexbox
        }
    });
}

/**
 * تتحكم في إظهار أو إخفاء خيار "التدرج" بناءً على فئة القالب الحالية.
 */
function updateControlsForCategory() {
    const cvContainer = document.getElementById('cv-container');
    if (!cvContainer) return;

    const isAdvancedCategory = cvContainer.classList.contains('professional-layout') ||
                               cvContainer.classList.contains('ast-layout') ||
                               cvContainer.classList.contains('creative-layout');

    document.querySelectorAll('.gradient-toggle-wrapper').forEach(wrapper => {
        wrapper.style.display = isAdvancedCategory ? 'flex' : 'none';
        
        // إذا كانت الفئة بسيطة، تأكد من إيقاف التدرج وإعادة الواجهة للحالة الافتراضية
        if (!isAdvancedCategory) {
            const toggle = wrapper.querySelector('.gradient-toggle');
            if (toggle.checked) {
                toggle.checked = false;
                // قم بتشغيل حدث "change" يدويًا لتحديث الواجهة
                toggle.dispatchEvent(new Event('change'));
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createPaletteControls();
    loadCvDataFromLocalStorage();
    updateControlsForCategory();
    applySelectedColors();
    setupColorControls();
    setupDynamicControlListeners();
    // === أضف هذه الأسطر الأربعة هنا لربط ألوان النصوص ===
    document.getElementById('color-picker-header-text').addEventListener('input', applySelectedColors);
    document.getElementById('color-picker-title-text').addEventListener('input', applySelectedColors);
    document.getElementById('color-picker-body-text').addEventListener('input', applySelectedColors);
    document.getElementById('color-picker-subtle-text').addEventListener('input', applySelectedColors);
    // =======================================================

    const nameFontSelector = document.getElementById('font-selector-name');
    const headingsFontSelector = document.getElementById('font-selector-headings');
    const bodyFontSelector = document.getElementById('font-selector-body');

    if (nameFontSelector) nameFontSelector.addEventListener('change', applySelectedFonts);
    if (headingsFontSelector) headingsFontSelector.addEventListener('change', applySelectedFonts);
    if (bodyFontSelector) bodyFontSelector.addEventListener('change', applySelectedFonts);

    document.addEventListener('keydown', function(event) {
        if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
            event.preventDefault();
            console.log("Ctrl+P pressed. Triggering custom print dialog.");
            window.print();
        }
    });
    // --- بداية: الكود الجديد لدفع المحتوى ---
    const promoBar = document.getElementById('promo-bar');
    if (promoBar) {
        const promoBarHeight = promoBar.offsetHeight;
        document.body.style.paddingTop = `${promoBarHeight}px`;
    }

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
    document.getElementById('lemon-squeezy-btn').addEventListener('click', handleLemonSqueezyPurchase);

        // --- إضافة جديدة: تفعيل زر إزالة الخصم ---
    document.getElementById('remove-discount-btn').addEventListener('click', (e) => {
        e.preventDefault(); // لمنع الرابط من القفز لأعلى الصفحة
        removeDiscount();
    });

    

    if (isMobileDevice()) {
        document.body.classList.add('is-mobile');
    } else {
        document.body.classList.add('is-desktop');
    }

    if (submitPaymentProofButton) {
        submitPaymentProofButton.addEventListener('click', submitPaymentProof);
    }

    setInitialLanguage();
    initializeDiscountCards(); // <<< أضف هذا السطر
    populateFontSelectors();
    startSalesNotifications();
    updateCounters(); // أضف هذا الاستدعاء
    updateLanguage();
    showPage('landing-page');
    lazyLoadImages();
    setupColorControls();
});

function addCustomSection() {
    const sectionWrapper = document.createElement('div');
    sectionWrapper.className = 'custom-section-wrapper mb-3 p-3 border rounded';

    // حقل العنوان الرئيسي للقسم
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    // استخدام الترجمة للنص التوضيحي
    titleInput.placeholder = translations[currentLang]['custom_section_placeholder'];
    titleInput.className = 'form-control form-control-lg mb-2 custom-section-title';
    titleInput.oninput = () => generateCV(document.getElementById('cv-container'));

    // حاوية للمداخل الفرعية
    const subSectionsContainer = document.createElement('div');
    subSectionsContainer.className = 'sub-sections-container';

    // الأزرار
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'mt-2';

    // زر لإضافة مدخل فرعي جديد
    const addSubSectionButton = document.createElement('button');
    addSubSectionButton.type = 'button';
    addSubSectionButton.className = 'btn btn-sm btn-outline-primary me-2';
    // استخدام الترجمة لمحتوى الزر
    addSubSectionButton.innerHTML = translations[currentLang]['add_subsection_btn'];
    addSubSectionButton.onclick = function() {
        const subSectionEntry = document.createElement('div');
        subSectionEntry.className = 'custom-subsection-entry border p-2 mb-2 rounded position-relative';
        
        // استخدام الترجمة داخل innerHTML
        subSectionEntry.innerHTML = `
            <button type="button" class="remove-field" onclick="this.parentElement.remove(); generateCV(document.getElementById('cv-container'));" title="${translations[currentLang]['remove_subsection_title']}">&times;</button>
            <input type="text" class="form-control mb-2 custom-subsection-title" placeholder="${translations[currentLang]['subsection_title_placeholder']}" oninput="generateCV(document.getElementById('cv-container'));">
            <textarea class="form-control custom-subsection-description" placeholder="${translations[currentLang]['subsection_desc_placeholder']}" rows="3" oninput="generateCV(document.getElementById('cv-container'));"></textarea>
        `;
        
        subSectionsContainer.appendChild(subSectionEntry);
    };

    // زر لحذف القسم بالكامل
    const removeSectionButton = document.createElement('button');
    removeSectionButton.type = 'button';
    removeSectionButton.className = 'btn btn-sm btn-danger';
    // استخدام الترجمة لنص الزر
    removeSectionButton.textContent = translations[currentLang]['remove_section_btn'];
    removeSectionButton.onclick = function() {
        // استخدام الترجمة لرسالة التأكيد
        if (confirm(translations[currentLang]['confirm_delete_section'])) {
            sectionWrapper.remove();
            generateCV(document.getElementById('cv-container'));
        }
    };
    
    buttonContainer.appendChild(addSubSectionButton);
    buttonContainer.appendChild(removeSectionButton);

    sectionWrapper.appendChild(titleInput);
    sectionWrapper.appendChild(subSectionsContainer);
    sectionWrapper.appendChild(buttonContainer);
    
    const formNavigationButtons = document.getElementById('form-navigation-buttons');
    formNavigationButtons.parentNode.insertBefore(sectionWrapper, formNavigationButtons);

    addSubSectionButton.click();
}

function updateTemplateImageSources() {
    const templateImages = document.querySelectorAll('.template-preview');
    console.log("Updating template image sources for language:", currentLang); // Debug
    templateImages.forEach(img => {
        const templateId = parseInt(img.getAttribute('data-template-id'));
        const templateCategory = img.getAttribute('data-template-category');
        if (!isNaN(templateId) && translations[currentLang]["image-paths"][templateCategory]) {
            const newSrc = translations[currentLang]["image-paths"][templateCategory](templateId);
            img.src = newSrc;
            console.log(`Setting image src for id ${templateId} (${templateCategory}) to: ${newSrc}`); // Debug
        } else {
            console.warn(`Could not set src for image. templateId: ${templateId}, category: ${templateCategory}, lang: ${currentLang}`); // Debug
        }
    });
}
/**
 * =========================================================================
 * == دالة setInitialLanguage المعدلة - بدون إعادة توجيه تلقائية للمستخدم ==
 * =========================================================================
 * تحدد اللغة الأولية للموقع بناءً على الـ URL أو اختيار المستخدم السابق،
 * وتتجاهل لغة المتصفح تمامًا لتجنب إعادة التوجيه التلقائي.
 */
function setInitialLanguage() {
    const userChosenLang = sessionStorage.getItem('userLang');
    const path = window.location.pathname;

    // 1. إذا كان المستخدم قد اختار لغة بالفعل (من الزر مثلاً)، استخدمها فورًا
    if (userChosenLang) {
        currentLang = userChosenLang;
        return;
    }

    // 2. تحديد اللغة بناءً على الـ URL الحالي فقط
    // إذا كانت الصفحة تنتهي بـ 'en.html'، تكون اللغة إنجليزية
    if (path.endsWith('en.html')) {
        currentLang = 'en';
    }
    // إذا كانت الصفحة هي الصفحة الرئيسية (index.html أو المسار الجذري '/'), تكون اللغة عربية
    else if (path.endsWith('index.html') || path.endsWith('/')) {
        currentLang = 'ar';
    }
    // في أي حالة أخرى (مثلاً، إذا كان URL غير متوقع)، اجعل اللغة عربية كافتراضي
    else {
        currentLang = 'ar';
    }

    // 3. (اختياري) إذا كنت تريد حفظ هذه اللغة الافتراضية في sessionStorage
    // لمنع إعادة الحساب عند كل تحميل للصفحة لنفس الجلسة
    sessionStorage.setItem('userLang', currentLang);

    console.log(`[setInitialLanguage] Language set to: ${currentLang}`);
}

/**
 * دالة مركزية لتحديث عرض الأسعار في صفحة الدفع.
 * تقوم بحساب الأسعار بعد الخصم وعرضها دائماً بالريال السعودي.
 */
function updateAllPriceDisplays() {
    const category = selectedTemplateCategory;
    if (!category) return;

    // الأسعار بالريال السعودي دائماً
    const originalLocalPrice = PRICES.local[category];
    const originalLsPrice = PRICES.lemonSqueezy[category];

    // حساب الأسعار النهائية بناءً على نسبة الخصم المطبقة
    const finalLocalPrice = Math.max(0, Math.round(originalLocalPrice * (1 - discountApplied / 100)));
    const finalLsPrice = Math.max(0, Math.round(originalLsPrice * (1 - discountApplied / 100)));

    // تحديث واجهة الدفع المحلي
    const localPriceElement = document.getElementById('local-price-display');
    const localCurrencyElement = localPriceElement.nextElementSibling;
    if (localPriceElement) {
        if (discountApplied > 0 && finalLocalPrice < originalLocalPrice) {
            // عرض السعر الأصلي مشطوباً بجانب السعر الجديد
            localPriceElement.innerHTML = `<del style="color: #999; font-size: 0.8em;">${originalLocalPrice}</del> ${finalLocalPrice}`;
        } else {
            localPriceElement.textContent = originalLocalPrice;
        }
        // تحديث رمز العملة (سيقرأ الآن "SAR" أو "ريال سعودي" بشكل صحيح)
        if (localCurrencyElement) {
            localCurrencyElement.textContent = translations[currentLang]['sar-currency'];
        }
    }

    // تحديث واجهة الدفع عبر Lemon Squeezy
    const lsPriceElement = document.getElementById('ls-price-display');
    const lsCurrencyElement = lsPriceElement.nextElementSibling;
    if (lsPriceElement) {
        if (discountApplied > 0 && finalLsPrice < originalLsPrice) {
            lsPriceElement.innerHTML = `<del style="color: #999; font-size: 0.8em;">${originalLsPrice}</del> ${finalLsPrice}`;
        } else {
            lsPriceElement.textContent = originalLsPrice;
        }
        // تحديث رمز العملة
        if (lsCurrencyElement) {
            lsCurrencyElement.textContent = translations[currentLang]['sar-currency'];
        }
    }

    // تحديث المتغير العام الذي سيُستخدم عند الدفع اليدوي
    finalPriceToPay = finalLocalPrice;
}
function toggleSiteHeader(show) {
    if (siteHeaderGlobal) {
        siteHeaderGlobal.style.display = show ? 'flex' : 'none';
    }
}

function startSalesNotifications() {
    const notificationElement = document.getElementById('sales-notification');
    const nameElement = document.getElementById('sales-name');
    const cityElement = document.getElementById('sales-city');

    if (!notificationElement || !nameElement || !cityElement) return;

    // جلب بيانات حقيقية لتحديث القائمة
    fetchRecentSales();

    setInterval(() => {
        if (salesQueue.length === 0) return;

        // اختيار عنصر عشوائي وعرضه
        const sale = salesQueue[Math.floor(Math.random() * salesQueue.length)];
        nameElement.textContent = sale.name;
        cityElement.textContent = sale.city;

        notificationElement.classList.add('show');

        // إخفاء الإشعار بعد 5 ثواني
        setTimeout(() => {
            notificationElement.classList.remove('show');
        }, 5000);

    }, 8000); // عرض إشعار جديد كل 8 ثواني
}

async function fetchRecentSales() {
    try {
        const response = await fetch(`${GOOGLE_APPS_SCRIPT_WEB_APP_URL_PAYMENT_PROCESSOR}?action=getRecentSales`);
        const data = await response.json();
        if (data.status === 'success' && data.sales.length > 0) {
            salesQueue = data.sales; // تحديث القائمة بالبيانات الحقيقية
        }
    } catch (error) {
        console.error("Could not fetch recent sales:", error);
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

function updatePaymentOptionsUI(category) {
    if (!category || !PRICES.local[category] || !PRICES.lemonSqueezy[category]) {
        console.error("Invalid category or prices not defined for:", category);
        return;
    }

    // جلب عناصر عرض السعر من الـ HTML
    const localPriceElement = document.getElementById('local-price-display');
    const lsPriceElement = document.getElementById('ls-price-display');

    // تحديث النصوص بالأسعار الصحيحة
    if (localPriceElement) {
        localPriceElement.textContent = PRICES.local[category];
    }
    if (lsPriceElement) {
        lsPriceElement.textContent = PRICES.lemonSqueezy[category];
    }
}

/**
 * دالة لإلغاء تطبيق أي خصم حالي.
 */
function removeDiscount() {
    // 1. إعادة تعيين متغيرات الخصم العامة
    discountApplied = 0;
    appliedCode = "";
    
    // 2. مسح قيمة حقل كود الخصم المخفي
    const codeInput = document.getElementById('discount-code');
    if (codeInput) codeInput.value = "";
    
    // 3. إزالة التحديد من أي بطاقة خصم مختارة
    document.querySelectorAll('.discount-card.selected').forEach(card => {
        card.classList.remove('selected');
    });

    // 4. تحديث عرض الأسعار لتعود إلى قيمتها الأصلية
    updateAllPriceDisplays();
    
    // 5. إخفاء زر "إزالة الخصم" نفسه
    document.getElementById('remove-discount-container').style.display = 'none';
}

// ✅ استبدل الدالة القديمة بالكامل بهذه النسخة المبسطة ✅
function showPage(pageId) {
    const pages = document.querySelectorAll('.page-section');
    pages.forEach(page => {
        page.classList.remove('active-page');
    });

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
            generateCV(cvContainer);
            updateProgress();
        }
    } else {
        console.error(`[showPage] Target page with ID "${pageId}" not found.`);
    }
}

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    console.log(`[toggleLanguage] Language toggled to: ${currentLang}`);
    updateLanguage();
    updateCounters(); 
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
    updateTemplateImageSources();
    // إعادة تحميل PayPal SDK عند تغيير اللغة
    populateFontSelectors();
    setupLanguageToggle();
    updateTranslationsForPalette();


    // **أضف هذا السطر:**
    // قم بإعادة تعبئة البيانات المترجمة إذا كانت في صفحة إدخال البيانات
    if (document.getElementById('cv-data-entry-page')?.classList.contains('active-page')) {
         // ستقوم هذه الدالة بإعادة تعبئة الحقول بالبيانات المترجمة
    }
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

// استبدل الدالة بالكامل بهذه النسخة المصححة
function updatePageContentLanguage() {
    const isArabic = currentLang === 'ar';
    const allTranslatableElements = document.querySelectorAll('[data-en], [data-ar], [data-translate-id], [data-translate]');

    if (loadingOverlayGlobal && loadingOverlayGlobal.style.display === 'flex' && loadingTextGlobal) {
        const currentMessageKey = loadingTextGlobal.getAttribute('data-current-key') || 'Generating CV, please wait...';
        loadingTextGlobal.textContent = translations[currentLang][currentMessageKey] || currentMessageKey;
    }

    allTranslatableElements.forEach(element => {
        let newContent = null;
        const translateIdKey = element.getAttribute('data-translate-id');
        const translateKey = element.getAttribute('data-translate');

        if (translateIdKey && translations[currentLang] && translations[currentLang][translateIdKey] !== undefined) {
            newContent = translations[currentLang][translateIdKey];
        } else if (translateKey && translations[currentLang] && translations[currentLang][translateKey] !== undefined) {
            newContent = translations[currentLang][translateKey];
        } else {
            const textKeyAttr = isArabic ? element.getAttribute('data-ar') : element.getAttribute('data-en');
            if (textKeyAttr) {
                if (translations[currentLang] && translations[currentLang][textKeyAttr] !== undefined) {
                    newContent = translations[currentLang][textKeyAttr];
                } else {
                    newContent = textKeyAttr;
                }
            }
        }

        if (newContent !== null) {
            if (Array.isArray(newContent) && element.tagName === 'UL') {
                let listHtml = '';
                newContent.forEach(itemHtml => {
                    listHtml += `<li>${itemHtml}</li>`;
                });
                element.innerHTML = listHtml;
            } else if (typeof newContent === 'string') {
                
                // --- بداية التعديل الجوهري ---
                // نستخدم تعبيراً نمطياً للتحقق من وجود أي وسم HTML في النص
                const containsHtml = /<[a-z][\s\S]*>/i.test(newContent);

                if (containsHtml) {
                    // إذا كان النص يحتوي على HTML، استخدم innerHTML لتفسيره
                    element.innerHTML = newContent;
                } else {
                    // إذا كان النص عادياً، استخدم textContent (أكثر أماناً)
                    if (element.tagName !== 'IMG' && element.tagName !== 'INPUT' && element.tagName !== 'TEXTAREA') {
                        element.textContent = newContent;
                    }
                }
                // --- نهاية التعديل الجوهري ---

            }
        }
    });

    // ... باقي أجزاء الدالة (placeholder, alt, links) تبقى كما هي دون تغيير ...
    const placeholderElements = document.querySelectorAll('[data-en-placeholder], [data-ar-placeholder]');
    placeholderElements.forEach(element => {
        const placeholderKey = isArabic ? element.getAttribute('data-ar-placeholder') : element.getAttribute('data-en-placeholder');
        if (placeholderKey && translations[currentLang] && translations[currentLang][placeholderKey] !== undefined) {
            element.placeholder = translations[currentLang][placeholderKey];
        } else if (placeholderKey) {
            element.placeholder = placeholderKey;
        }
    });

    const altElements = document.querySelectorAll('[data-en-alt], [data-ar-alt]');
    altElements.forEach(element => {
        if (element.tagName === 'IMG') {
            const altKey = isArabic ? element.getAttribute('data-ar-alt') : element.getAttribute('data-en-alt');
            if (altKey && translations[currentLang] && translations[currentLang][altKey] !== undefined) {
                element.alt = translations[currentLang][altKey];
            } else if (altKey) {
                element.alt = altKey;
            }
        }
    });

    const footerLinks = document.querySelectorAll('footer .list-inline-item a');
    footerLinks.forEach(link => {
        const key = link.getAttribute('data-translate');
        if (key && translations[currentLang] && translations[currentLang][key] !== undefined) {
            link.textContent = translations[currentLang][key];
        }
    });

    const contactEmailLinks = document.querySelectorAll('#contact p strong a, #terms-of-service-page a[href^="mailto:"], #refund-policy a[href^="mailto:"], #privacy-policy a[href^="mailto:"]');
    contactEmailLinks.forEach(link => {
        let key;
        if (link.closest('#contact')) {
            key = 'email-address-contact';
        } else if (link.closest('#terms-of-service-page')) {
            key = 'terms-of-service-email-contact';
        } else if (link.closest('#refund-policy')) {
            key = 'refund-policy-email-contact';
        } else if (link.closest('#privacy-policy')) {
            key = 'privacy-policy-email-contact';
        }
        if (key && translations[currentLang] && translations[currentLang][key] !== undefined) {
            link.textContent = translations[currentLang][key];
        }
    });

    if (document.getElementById('payment-options-page')?.classList.contains('active-page')) {
        updateAllPriceDisplays(); // تم التعديل لاستدعاء الدالة الصحيحة
    }
}   

function collectCvData() {
    // هذه الدالة تجمع كل البيانات من حقول الإدخال وتعيدها ككائن واحد
    const cvData = {
        name: document.getElementById('name-input')?.value.trim(),
        jobTitle: document.getElementById('title-input')?.value.trim(),
        email: document.getElementById('email-input')?.value.trim(),
        phone: document.getElementById('phone-input')?.value.trim(),
        website: document.getElementById('website-input')?.value.trim(),
        profilePicDataUrl: profilePicDataUrl,
        objective: document.getElementById('objective-input')?.value.trim(),
        experiences: getExperiencesData(),
        educations: getEducationsData(),
        skills: getSkillsData(),
        languages: getLanguagesData(),
        references: getReferencesData(),
        templateCategory: selectedTemplateCategory,
        templateNumber: selectedTemplate,
        language: currentLang,
        // لا نمرر isPaid هنا، سيتم تحديدها لاحقًا
        templateCss: getSelectedTemplateCss() // إرسال الـ CSS المحدد
    };
    return cvData;
}

// استبدل الدالة القديمة بالكامل بهذه النسخة المصححة
async function handleLemonSqueezyPurchase() {
    toggleLoadingOverlay(true, 'Preparing secure payment...');
    try {
        // 1. جمع بيانات السيرة الذاتية
        const cvData = collectCvData();
        
        // 2. استدعاء الخادم لتحضير الجلسة وتخزين البيانات مؤقتاً
        const prepareResponse = await fetch(`${NODE_SERVER_URL}/api/prepare-checkout`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cvData)
        });

        if (!prepareResponse.ok) {
            const errorText = await prepareResponse.text();
            throw new Error(`Server failed to prepare session: ${errorText}`);
        }
        
        const { sessionId } = await prepareResponse.json();

        if (!sessionId) {
            throw new Error('Could not retrieve session ID from the server.');
        }

        // 3. احصل على رابط الدفع الأساسي من كائن الإعدادات
        const checkoutConfig = CHECKOUT_CONFIG[selectedTemplateCategory];
        if (!checkoutConfig || !checkoutConfig.link) {
            throw new Error('Checkout link for the selected category is not configured.');
        }

        // --- بداية التعديل: تم إعادة ترتيب هذا الجزء ---

        // 4. أنشئ الرابط أولاً
        const finalUrl = new URL(checkoutConfig.link);
        
        // 5. أضف البيانات الأساسية للرابط (معرف الجلسة، البريد الإلكتروني، الاسم)
        finalUrl.searchParams.set('checkout[custom][session_id]', sessionId);
        
        if (cvData.email) {
            finalUrl.searchParams.set('checkout[email]', cvData.email);
        }
        if (cvData.name) {
            finalUrl.searchParams.set('checkout[name]', cvData.name);
        }
        
        // 6. الآن، بعد إنشاء الرابط، تحقق من وجود كود خصم وأضفه
        const codeInput = document.getElementById("discount-code");
        const code = codeInput ? codeInput.value.trim() : "";
        if (code) {
            // هذا السطر الآن يعمل بشكل صحيح لأن finalUrl موجود بالفعل
            finalUrl.searchParams.set('discount_code', code); // التغيير هنا: من 'discount' إلى 'discount_code'
        }
        
        // --- نهاية التعديل ---

        // 7. وجه المستخدم إلى صفحة الدفع النهائية في Lemon Squeezy
        console.log('Redirecting to Lemon Squeezy:', finalUrl.toString());
        window.location.href = finalUrl.toString();

    } catch (error) {
        console.error('Lemon Squeezy purchase error:', error);
        alert('An error occurred while preparing your payment. Please try again or contact support.');
        toggleLoadingOverlay(false);
    }
}


/**
 * دالة لجلب وتحديث عداد السير الذاتية وعداد الزوار
 * مع دعم اللغتين العربية والإنجليزية
 */
async function updateCounters() {
  const cvCounterElement = document.getElementById('cv-counter-span');
  const visitorCounterElement = document.getElementById('visitor-counter-span');

  // نتأكد من وجود العناصر في الصفحة قبل إرسال الطلب
  if (!cvCounterElement || !visitorCounterElement) {
    return;
  }

  try {
    // نستخدم نفس رابط الـ Web App لكن مع إضافة معامل 'action'
    const response = await fetch(`${GOOGLE_APPS_SCRIPT_WEB_APP_URL_PAYMENT_PROCESSOR}?action=getCounters`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    if (data.status === 'success') {
      // --- بداية التعديل الجوهري ---

      // 1. تحديد لغة تنسيق الأرقام بناءً على متغير اللغة الحالي
      const locale = currentLang === 'ar' ? 'ar-EG' : 'en-US';

      // 2. تحديث عداد السير الذاتية باستخدام التنسيق الصحيح
      cvCounterElement.textContent = `+${data.cvCount.toLocaleString(locale)}`;

      // 3. تحديث عداد الزوار باستخدام التنسيق الصحيح
      visitorCounterElement.textContent = `+${data.visitorCount.toLocaleString(locale)}`;
      
      // --- نهاية التعديل الجوهري ---
    }
  } catch (error) {
    console.error('Failed to fetch counters:', error);
    // في حال فشل الطلب، تبقى الأرقام الافتراضية كما هي
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

/**
 * ينتقل إلى صفحة اختيار القالب.
 * تم تعطيل التحقق الصارم للسماح للمستخدم بالانتقال حتى مع وجود البيانات التجريبية.
 */
function validateAndShowTemplatePage() {
    
    // تم تعطيل التحقق في هذه المرحلة عمداً.
    // بما أننا نعرض معاينة كاملة باستخدام البيانات التجريبية، يمكن للمستخدم
    // استعراض القوالب المختلفة ثم العودة لاحقاً لملء بياناته الخاصة.
    /* const name = document.getElementById('name-input');
    const title = document.getElementById('title-input');
    const email = document.getElementById('email-input');

    if (!name.value.trim() || !title.value.trim() || !email.value.trim()) {
        // رسالة التنبيه التي تظهر لك
        alert(translations[currentLang]['Please fill in all fields.'] || 'Please fill in the basic fields (Name, Job Title, Email) before proceeding.');
        return;
    }
    */
    
    // الآن، سينتقل مباشرة إلى صفحة القوالب دون إظهار رسالة التنبيه
    showPage('cv-template-selection-page');
}

function initializeDiscountCards() {
    const discountCards = document.querySelectorAll('.discount-card');
    const codeInput = document.getElementById('discount-code');

    discountCards.forEach(card => {
        card.addEventListener('click', () => {
            // إزالة التحديد من كل البطاقات
            discountCards.forEach(c => c.classList.remove('selected'));
            // إضافة التحديد للبطاقة المختارة
            card.classList.add('selected');
            
            const code = card.getAttribute('data-code');
            codeInput.value = code; // تعبئة الحقل المخفي
            applyDiscountCode(); // استدعاء دالة تطبيق الخصم
        });
    });
}

/**
 * يعالج الضغط على زر "تطبيق الخصم".
 * يحدّث الأسعار المعروضة ويُظهر رسالة إرشادية للمستخدم.
 */
async function applyDiscountCode() {
    const codeInput = document.getElementById("discount-code");
    if (!codeInput) return;
    const code = codeInput.value.trim().toUpperCase();

    if (code && discountCodes[code] !== undefined) {
        discountApplied = discountCodes[code];
        appliedCode = code;
        
        const alertMessage = currentLang === 'ar' ? 
            `تم تطبيق كود الخصم "${code}".\n\n- تم تحديث سعر الدفع المحلي.\n- للدفع بالبطاقة، الرجاء إدخال نفس الكود مرة أخرى في صفحة الدفع التالية لتأكيد الخصم.` :
            `Discount code "${code}" applied.\n\n- The price for local payment has been updated.\n- For card payment, please re-enter the code on the next page to confirm your discount.`;
        alert(alertMessage);
        
        // --- تعديل: إظهار زر الإزالة ---
        document.getElementById('remove-discount-container').style.display = 'block';

    } else if (code) {
        removeDiscount(); // إذا كان الكود خاطئ، قم بإزالة أي خصم سابق
        alert(currentLang === 'ar' ? 'كود الخصم غير صالح.' : 'Invalid discount code.');
    } else {
        removeDiscount(); // إذا كان الحقل فارغاً، قم بإزالة أي خصم سابق
    }
    
    updateAllPriceDisplays();

    // التحقق مما إذا كان السعر أصبح مجانياً بعد التحديث
    if (finalPriceToPay === 0 && discountApplied > 0) {
        alert(currentLang === 'ar' ? 'هذه السيرة الذاتية مجانية! سيتم إرسالها إلى بريدك الإلكتروني.' : 'This CV is free! It will be sent to your email shortly.');
        toggleLoadingOverlay(true, 'Processing your free CV...');
        try {
            const pdfData = await generatePdfFromNode(true);
            if (pdfData && pdfData.base64Pdf) {
                await sendPaymentDataToAppsScript('Discounted/Free', 0, pdfData.base64Pdf, null);
                showPage('landing-page');
            } else {
                throw new Error("Failed to generate PDF for free CV.");
            }
        } catch (error) {
            console.error("Error processing free CV:", error);
            alert("Error: " + error.message);
        } finally {
            toggleLoadingOverlay(false);
        }
    }
}

// --- Payment Related Functions (for UI) ---
// استبدل هذه الدالة بالكامل
function openPaymentForCV_appsScript() {
    // ... الكود الحالي لإعادة تعيين المتغيرات ...
    discountApplied = 0;
    appliedCode = "";
    selectedPriceToPay = PRICES.local[selectedTemplateCategory];
    finalPriceToPay = selectedPriceToPay;
    
    document.querySelectorAll('.discount-card').forEach(c => c.classList.remove('selected'));
    
    const codeInput = document.getElementById("discount-code");
    if (codeInput) codeInput.value = "";

    // --- تعديل: التأكد من إخفاء زر الإزالة ---
    document.getElementById('remove-discount-container').style.display = 'none';

    updateAllPriceDisplays();
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


/**
 * يعالج فتح صفحة الدفع اليدوي (الراجحي أو STC Pay).
 * هذه الدالة الآن مسؤولة عن حساب السعر النهائي بناءً على كود الخصم المدخل في لحظة الضغط.
 * @param {string} method - طريقة الدفع المختارة ('Rajhi' أو 'STC Pay').
 * @param {string} templateCategory - فئة القالب المختار ('normal', 'standard', etc.).
 */
function openQrPaymentPage(method, templateCategory) {
    // 1. جلب السعر الأصلي من كائن الأسعار بناءً على فئة القالب
    const originalPrice = PRICES.local[templateCategory];
    if (originalPrice === undefined) {
        console.error("Price for category not found:", templateCategory);
        alert("حدث خطأ، السعر لهذه الفئة غير محدد.");
        return;
    }

    // 2. حساب السعر النهائي مع الخصم في لحظة الضغط
    const codeInput = document.getElementById("discount-code");
    const code = codeInput ? codeInput.value.trim().toUpperCase() : "";
    let finalPrice = originalPrice;
    let appliedDiscountCode = ""; // سيتم حفظ الكود الفعلي هنا

    if (code && discountCodes[code] !== undefined) {
        const discountPercentage = discountCodes[code];
        finalPrice = Math.max(0, Math.round(originalPrice * (1 - discountPercentage / 100)));
        appliedDiscountCode = code; // حفظ الكود الصحيح الذي تم استخدامه
    }

    // 3. الحصول على عناصر واجهة المستخدم وتجهيزها
    const qrPaymentImage = document.getElementById("qr-payment-image");
    const manualPaymentForm = document.getElementById("manual-payment-form");
    const submitBtn = document.getElementById("submit-payment-proof");
    const qrPaymentResultDiv = document.getElementById("qr-payment-result");

    // إعادة تعيين الواجهة عند كل فتح
    if(qrPaymentImage) qrPaymentImage.style.display = "none";
    if(manualPaymentForm) manualPaymentForm.style.display = "none";
    if(submitBtn) submitBtn.style.display = "none";
    if(qrPaymentResultDiv) qrPaymentResultDiv.textContent = '';

    // 4. تعبئة نموذج الدفع اليدوي بالبيانات من الصفحة الرئيسية والسعر المحسوب
    const mainName = document.getElementById('name-input')?.value.trim();
    const mainEmail = document.getElementById('email-input')?.value.trim();
    const mainPhone = document.getElementById('phone-input')?.value.trim();

    if (paymentNameInput) paymentNameInput.value = mainName;
    if (paymentEmailInput) paymentEmailInput.value = mainEmail;
    if (paymentPhoneInput) paymentPhoneInput.value = mainPhone;
    
    // استخدام السعر النهائي المحسوب لتعبئة حقل السعر
    if(paymentMessagesInput) paymentMessagesInput.value = finalPrice; 

    // 5. حفظ البيانات الهامة في سمات (attributes) الصفحة لتستخدمها دالة الإرسال لاحقًا
    const qrManualPaymentPage = document.getElementById('qr-manual-payment-page');
    if (qrManualPaymentPage) {
        qrManualPaymentPage.setAttribute("data-payment-method", method);
        qrManualPaymentPage.setAttribute("data-discount-code", appliedDiscountCode); // حفظ الكود الفعلي
        qrManualPaymentPage.setAttribute("data-cv-template-category", templateCategory);
        qrManualPaymentPage.setAttribute("data-price-paid", finalPrice.toString());
    }

    // 6. عرض رمز QR الصحيح ونموذج الدفع
    if (method.toLowerCase() === "stc pay" || method.toLowerCase() === "rajhi") {
        if(qrPaymentImage) {
            qrPaymentImage.src = (method.toLowerCase() === "stc pay") ? "QRstcpay.png.webp" : "QRalrajhi.png.webp";
            qrPaymentImage.alt = (method.toLowerCase() === "stc pay") ? "STC Pay QR Code" : "Al Rajhi QR Code";
            qrPaymentImage.style.display = "block";
        }
        if(manualPaymentForm) manualPaymentForm.style.display = "block";
        if(submitBtn) submitBtn.style.display = "block";
    }

    // 7. الانتقال إلى صفحة الدفع
    showPage('qr-manual-payment-page');
}

function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

/**
 * يعالج إرسال إثبات الدفع اليدوي (STC Pay / Al Rajhi).
 * تم تحديث هذه الدالة بالكامل لإصلاح مشاكل إرسال البيانات.
 * @param {Event} event - كائن الحدث لمنع السلوك الافتراضي للنموذج.
 */
async function submitPaymentProof(event) {
    event.preventDefault(); // منع أي سلوك افتراضي للنموذج

    const submitButton = document.getElementById("submit-payment-proof");
    if (submitButton.disabled) {
        return; // منع الإرسال المتعدد إذا كان الزر معطلاً بالفعل
    }

    // تعطيل الزر وتغيير نصه لإعطاء مؤشر للمستخدم
    submitButton.disabled = true;
    submitButton.innerHTML = `<span class="spinner-border spinner-border-sm"></span> ${translations[currentLang]['Submitting...'] || 'Submitting...'}`;
    
    const qrPaymentResultDiv = document.getElementById("qr-payment-result");
    qrPaymentResultDiv.textContent = ''; // مسح أي رسائل سابقة

    try {
        // 1. جمع البيانات من نموذج الدفع اليدوي
        const name = paymentNameInput.value.trim();
        const email = paymentEmailInput.value.trim();
        const phoneNumber = paymentPhoneInput.value.trim();
        const file = paymentFileInput.files[0];

        // 2. جمع البيانات المخزنة في سمات الصفحة (data-attributes)
        const qrManualPaymentPage = document.getElementById('qr-manual-payment-page');
        const paymentMethod = qrManualPaymentPage.getAttribute("data-payment-method");
        const cvTemplateCategory = qrManualPaymentPage.getAttribute("data-cv-template-category");
        const pricePaid = qrManualPaymentPage.getAttribute("data-price-paid");
        
        // --- إصلاح مشكلة كود الخصم ---
        // قراءة كود الخصم كنص مباشرة من السمة المحفوظة
        const actualDiscountCodeStr = qrManualPaymentPage.getAttribute("data-discount-code") || 'N/A';

        // 3. التحقق من صحة البيانات المدخلة
        if (!name || !email || !phoneNumber) {
            throw new Error(translations[currentLang]['Please fill in all fields.'] || 'Please fill in all required fields.');
        }
        if (!validateEmail(email)) {
            throw new Error(translations[currentLang]['Please enter a valid email.'] || 'Please enter a valid email address.');
        }
        if (file) {
            if (file.size > MAX_FILE_SIZE) {
                throw new Error(translations[currentLang]['File size exceeds the limit (3MB).'] || 'File size exceeds the 3MB limit.');
            }
            if (!ALLOWED_FILE_TYPES.includes(file.type)) {
                throw new Error(translations[currentLang]['Please attach only image or PDF files.'] || 'Please attach only image or PDF files.');
            }
        }

        toggleLoadingOverlay(true, 'Payment processing, please wait...');

        // 4. تحويل ملف الإيصال إلى Base64 (إن وجد)
        const fileBase64 = file ? await fileToBase64(file) : null;

        // 5. توليد نسخة PDF من السيرة الذاتية (مع علامة مائية لأن الدفع لم تتم الموافقة عليه بعد)
        const pdfData = await generatePdfFromNode(true); // isPaid: false
        if (!pdfData || !pdfData.base64Pdf) {
            throw new Error('Failed to generate CV PDF for submission.');
        }

        // 6. تجهيز كافة البيانات للإرسال إلى Apps Script
        const formData = new URLSearchParams();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phoneNumber', phoneNumber);
        formData.append('pricePaid', pricePaid);
        formData.append('paymentMethod', paymentMethod);
        formData.append('cvTemplateCategory', cvTemplateCategory);
        formData.append('discountCode', actualDiscountCodeStr); // استخدام الكود النصي الصحيح
        formData.append('language', currentLang);
        
        // --- إصلاح مشكلة بيانات المدينة/الموقع ---
        // جلب قيمة حقل "الموقع" من الصفحة الرئيسية وإضافتها للطلب
        const website = document.getElementById('website-input')?.value.trim();
        formData.append('website', website || '');
        
        formData.append('paymentFileBase64', fileBase64 || '');
        formData.append('paymentFileType', file?.type || '');
        formData.append('cvPdfFileBase64', pdfData.base64Pdf);
        formData.append('cvPdfFileName', `CV_Preview_${name.replace(/\s/g, '_')}.pdf`);

        // 7. إرسال الطلب إلى Google Apps Script
        const response = await fetch(GOOGLE_APPS_SCRIPT_WEB_APP_URL_PAYMENT_PROCESSOR, {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();

        if (data.status === 'success') {
            qrPaymentResultDiv.style.color = "green";
            qrPaymentResultDiv.textContent = data.message || (translations[currentLang]["payment-success"]);
            // لا نُعيد تفعيل الزر هنا لأنه سينتقل لصفحة أخرى بعد 5 ثواني
            setTimeout(() => { showPage('landing-page'); }, 5000);
        } else {
            // إذا فشل الطلب من جهة الخادم، قم برمي خطأ ليتم التقاطه في catch
            throw new Error(data.error || 'An unknown error occurred on the server.');
        }

    } catch (err) {
        // عرض أي خطأ للمستخدم (سواء من التحقق أو من الإرسال)
        console.error("Error in submitPaymentProof:", err);
        qrPaymentResultDiv.style.color = "red";
        qrPaymentResultDiv.textContent = err.message;
    } finally {
        // هذا الجزء سيعمل دائمًا، سواء نجح الطلب أم فشل
        toggleLoadingOverlay(false);

        // إعادة تفعيل الزر فقط في حال حدوث خطأ وبقاء المستخدم في الصفحة
        if (!qrPaymentResultDiv.textContent.includes("نجاح") && !qrPaymentResultDiv.textContent.includes("Success")) {
            submitButton.disabled = false;
            submitButton.innerHTML = translations[currentLang]['submit'] || 'Submit';
        }
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

function getExperiencesData() {
    const experiences = [];
    document.querySelectorAll('#experience-input .experience-entry').forEach(entry => {
        const title = entry.querySelector('.experience-title')?.value.trim();
        const company = entry.querySelector('.experience-company')?.value.trim();
        const duration = entry.querySelector('.experience-duration')?.value.trim();
        const description = entry.querySelector('.experience-description')?.value.trim();
        if (title || company || duration || description) {
            experiences.push({ title, company, duration, description });
        }
    });
    return experiences;
}

function getEducationsData() {
    const educations = [];
    document.querySelectorAll('#education-input .education-entry').forEach(entry => {
        const degree = entry.querySelector('.education-degree')?.value.trim();
        const institution = entry.querySelector('.education-institution')?.value.trim();
        const duration = entry.querySelector('.education-duration')?.value.trim();
        if (degree || institution || duration) {
            educations.push({ degree, institution, duration });
        }
    });
    return educations;
}

function getSkillsData() {
    const skills = [];
    document.querySelectorAll('#skills-input .skill-entry').forEach(entry => {
        
        // الخطوة 1: ابحث عن حقل إدخال اسم المهارة
        const nameInput = entry.querySelector('.skill-item-input');
        
        // الخطوة 2: *** هذا هو التحقق الأهم الذي كان ناقصاً ***
        // لا تكمل الكود إلا إذا تم العثور على حقل الإدخال بنجاح
        if (nameInput) {
            const name = nameInput.value.trim();

            // تجاهل المهارات الفارغة
            if (name === '') {
                return; // يعادل 'continue' في الحلقة
            }

            // الخطوة 3: ابحث الآن عن قائمة المستوى (إن وجدت)
            const levelSelect = entry.querySelector('.skill-level-select');
            let level = '100%'; // قيمة افتراضية للمهارات التي ليس لها مستوى (الحقول القديمة)

            if (levelSelect) {
                // تجاهل المهارة إذا لم يتم تحديد مستوى
                if (levelSelect.value === '0') {
                    return; 
                }
                level = levelSelect.value;
            }
            
            // إذا وصلنا إلى هنا، فكل شيء سليم. أضف المهارة.
            skills.push({ name, level });
        }
        // إذا لم يتم العثور على nameInput من الأساس، سيتجاهل الكود هذا الـ entry وينتقل للتالي دون أن ينهار.
    });
    return skills;
}

function getLanguagesData() {
    const languages = [];
    document.querySelectorAll('#languages-input .language-item-input').forEach(input => {
        const lang = input.value.trim();
        if (lang) {
            languages.push(lang);
        }
    });
    return languages;
}

function getReferencesData() {
    const references = [];
    document.querySelectorAll('#references-input .reference-entry').forEach(entry => {
        const name = entry.querySelector('.reference-name')?.value.trim();
        const position = entry.querySelector('.reference-position')?.value.trim();
        const phone = entry.querySelector('.reference-phone')?.value.trim();
        const email = entry.querySelector('.reference-email')?.value.trim();
        if (name || position || phone || email) {
            references.push({ name, position, phone, email });
        }
    });
    return references;
}

/**
 * يجمع بيانات جميع الأقسام المخصصة من نموذج الإدخال.
 * @returns {Array} - مصفوفة من كائنات الأقسام المخصصة.
 */
function getCustomSectionsData() {
    const sections = [];
    document.querySelectorAll('.custom-section-wrapper').forEach(sectionWrapper => {
        const sectionTitle = sectionWrapper.querySelector('.custom-section-title')?.value.trim();
        
        // تجاهل القسم بالكامل إذا كان عنوانه الرئيسي فارغًا
        if (!sectionTitle) return;

        const subSections = [];
        sectionWrapper.querySelectorAll('.custom-subsection-entry').forEach(subSectionEntry => {
            const subTitle = subSectionEntry.querySelector('.custom-subsection-title')?.value.trim();
            const description = subSectionEntry.querySelector('.custom-subsection-description')?.value.trim();
            
            // أضف القسم الفرعي فقط إذا كان يحتوي على عنوان أو وصف
            if (subTitle || description) {
                subSections.push({ title: subTitle, description: description });
            }
        });

        // أضف القسم الرئيسي فقط إذا كان يحتوي على أقسام فرعية ذات محتوى
        if (subSections.length > 0) {
            sections.push({
                title: sectionTitle,
                subSections: subSections
            });
        }
    });
    return sections;
}

function getSelectedTemplateCss() {
    let cssRules = [];
    const stylesheets = document.styleSheets;

    // مجموعة شاملة من المحددات العامة والفئات التي يجب تضمينها دائمًا
    // تشمل عناصر HTML الأساسية، فئات Bootstrap، وفئات الاتجاه
    const commonSelectors = [
        'body', 'html', '#cv-container', '.cv-content',
        '.cv-header', '.cv-name', '.cv-title', '.cv-contact-info', '.cv-contact-item', '.cv-profile-pic',
        '.cv-section', '.cv-section-title', '.cv-experience-item', '.cv-education-item',
        '.cv-job-title', '.cv-degree', '.cv-company', '.cv-institution', '.cv-duration',
        '.cv-skill-list', '.cv-skill-item', '.cv-language-list', '.cv-reference-item',
        '.cv-table-row', '.cv-two-column-layout', '.cv-professional-layout', '.ast-layout',
        '.cv-sidebar', '.cv-main-content', '.cv-end-marker', '.filler',
        'h1', 'h2', 'h3', 'h4', 'h5', 'p', 'ul', 'li', 'img', 'a', 'div', 'span',
        '.container', '.row', '.col-md-', '.d-flex', '.mb-', '.mt-', '.ms-', '.me-', // Bootstrap
        '.rtl', '.ltr', // اتجاه اللغة
        '.remove-field', // لإزالة زر الحذف
        // أضف أي فئات أو معرفات أخرى تظهر في style.css وتحتاج لتضمينها بشكل عام
    ];

    // تعبير عادي للتحقق من تطابق المحددات العامة أو أجزاء منها
    const commonSelectorsRegex = new RegExp(`(^|\\b)(<span class="math-inline">\{commonSelectors\.map\(s \=\> s\.replace\('\.', '\\\\\.'\)\)\.join\('\|'\)\}\)\(\\\\b\|</span>)`);


    for (let i = 0; i < stylesheets.length; i++) {
        try {
            const rules = stylesheets[i].cssRules || stylesheets[i].rules;
            if (!rules) continue;

            for (let j = 0; j < rules.length; j++) {
                const rule = rules[j];
                let ruleText = rule.cssText;

                // 1. تضمين قواعد @font-face بشكل صريح
                if (rule.type === CSSRule.FONT_FACE_RULE) {
                    cssRules.push(ruleText);
                    continue;
                }

                // 2. معالجة قواعد @media print / screen بشكل خاص
                if (rule.type === CSSRule.MEDIA_RULE) {
                    // تضمين قواعد الطباعة والاستجابة
                    // هنا نأخذ كل قواعد @media print (خاصة بملف style.css)
                    // وأيضاً @media screen أو max-width (المهمة لضبط العرض على الشاشة ثم إخفائها)
                    if (rule.conditionText.includes('print') || rule.conditionText.includes('screen') || rule.conditionText.includes('(max-width:')) {
                        cssRules.push(ruleText); 
                    }
                    continue;
                }

                // 3. تحليل قواعد CSS العادية
                const selectorText = rule.selectorText;
                if (selectorText) {
                    const templateSpecificSelector = `.<span class="math-inline">\{selectedTemplateCategory\}\-layout\.template</span>{selectedTemplate}`;

                    const isGeneral = commonSelectorsRegex.test(selectorText);
                    const isTemplateSpecific = selectorText.includes(templateSpecificSelector);
                    const isCvRelated = selectorText.includes('.cv-'); // فئات تبدأ بـ .cv- (مثل .cv-header)

                    // إذا كان المحدد عاماً جداً، أو خاصاً بالقالب، أو يتعلق بالـ CV
                    // و لا يكون محددًا لعناصر الواجهة الأمامية التي نريد إخفاءها (مثل .navbar)
                    // هذا الجزء يتطلب دقة لمنع تضمين CSS غير مرغوب فيه
                    const isFrontendUI = selectorText.includes('.navbar') || selectorText.includes('.site-header') || selectorText.includes('.page-section:not') || selectorText.includes('.progress-container') || selectorText.includes('.language-toggle');

                    if ((isGeneral || isTemplateSpecific || isCvRelated) && !isFrontendUI) {
                        cssRules.push(ruleText);
                    }
                }
            }
        } catch (e) {
            console.warn(`Could not read CSS rules from stylesheet (possibly CORS issue): ${e.message}`);
        }
    }

    // ** قواعد CSS إضافية هنا لتجاوز المشاكل وتأكيد التنسيق للـ PDF **
    // هذه القواعد ستُضاف دائمًا في نهاية الـ CSS، مما يضمن أنها تطغى على القواعد الأخرى.
    // وهي حلول لمشاكل محددة في الخطوط، الاتجاه، الهوامش، تخطيط الأعمدة، وإخفاء عناصر العارض.
    cssRules.push(`
        /* 1. قواعد أساسية لـ HTML/BODY لتأكيد اتجاه الصفحة والهوامش */
        html, body {
            margin: 0 !important;
            padding: 0 !important;
            width: 210mm !important; /* عرض A4 */
            min-height: 297mm !important; /* ارتفاع A4 */
            background: white !important; /* خلفية بيضاء لضمان عدم ظهور خلفية العارض */
            color: #212529 !important; /* لون نص افتراضي */
            direction: ${currentLang === 'ar' ? 'rtl' : 'ltr'} !important;
            text-align: ${currentLang === 'ar' ? 'right' : 'left'} !important;
            box-sizing: border-box !important;
            overflow: hidden !important; /* مهم جداً لمنع أي scrollbars في الـ PDF */
        }
        body.rtl { direction: rtl !important; text-align: right !important; }
        body.ltr { direction: ltr !important; text-align: left !important; }

        /* 2. إخفاء جميع عناصر الواجهة الأمامية غير المرغوبة (بشكل شامل) */
        /* هذه المحددات يجب أن تستهدف عناصر واجهة المستخدم التي قد تظهر في الـ PDF */
        .site-header, .navbar, .page-section:not(.active-page), .progress-container,
        .language-toggle, .btn-info, .btn-success, #cv-preview-area,
        .popup-box, .popup-close, .form-group, .remove-field,
        .template-preview-container, .template-category, .template-previews,
        /* أي عناصر أخرى من واجهة المستخدم لديك في الـ HTML لا تريد ظهورها */
        .d-flex.justify-content-center.mt-4 { /* الأزرار في صفحة المعاينة */
            display: none !important;
            visibility: hidden !important;
            height: 0 !important;
            max-height: 0 !important;
            overflow: hidden !important;
            padding: 0 !important;
            margin: 0 !important;
        }

        /* 3. تأكيد تنسيق الـ CV للحاوية الرئيسية */
        #cv-container {
            position: relative !important;
            width: 210mm !important; /* عرض A4 */
            min-height: 297mm !important; /* ارتفاع A4 */
            height: auto !important; /* لتسمح بالنمو على عدة صفحات */
            margin: 0 !important; /* لإزالة أي إزاحة غير مرغوبة */
            padding: 0 !important; /* الحشوة تكون داخل الأقسام */
            box-shadow: none !important; /* إزالة أي ظل لحاوية المعاينة */
            border: none !important; /* إزالة أي حدود لحاوية المعاينة */
            background: white !important; /* خلفية بيضاء للسيرة الذاتية */
            color: #212529 !important; /* لون نص افتراضي */
            overflow: visible !important; /* مهم جداً للسماح بالمحتوى على عدة صفحات */
            direction: ${currentLang === 'ar' ? 'rtl' : 'ltr'} !important;
            text-align: ${currentLang === 'ar' ? 'right' : 'left'} !important;
            box-sizing: border-box !important;
        }

        /* 4. معالجة الخطوط (ضمان تطبيق Tajawal للعربية) */
        body, p, span, div, h1, h2, h3, h4, h5, h6, li {
            font-family: 'Tajawal', sans-serif !important;
        }
        /* قواعد الخطوط الخاصة بكل قالب (أضفها هنا أيضاً لتطغى) */
        .normal-layout.template1 .cv-name, .normal-layout.template1 .cv-title, .normal-layout.template1 .cv-section-title { font-family: 'Roboto', sans-serif !important; }
        .normal-layout.template2 .cv-name, .normal-layout.template2 .cv-title, .normal-layout.template2 .cv-section-title { font-family: 'Lato', sans-serif !important; }
        /* ... كرر هذا لجميع القوالب والفئات التي تحدد الخطوط في style.css */

        /* 5. معالجة تخطيط الأعمدة (Standard, Professional, AST) */
        .cv-two-column-layout, .ast-layout {
            display: flex !important; /* Use flex for print */
            flex-direction: var(--print-flex-direction) !important; /* Apply correct flex direction from variable */
            gap: 10mm !important;
            page-break-inside: auto !important; /* Allow page breaks here */
            flex-wrap: nowrap !important; /* Prevent wrapping to next line */
        }
        .cv-professional-layout {
            display: grid !important;
            grid-template-columns: var(--print-grid-columns) !important; /* Apply grid columns from variable */
            grid-template-areas: var(--print-grid-areas) !important; /* Apply grid areas from variable */
            gap: 10mm !important;
            page-break-inside: auto !important; /* Allow page breaks here */
        }
        .cv-sidebar, .cv-main-content {
            display: flex !important; /* Revert to flex for individual columns */
            flex-direction: column !important; /* Ensure content stacks vertically within column */
            vertical-align: top !important; /* Align to top */
            padding: 8mm !important; /* Inner padding */
            box-sizing: border-box !important;
            height: auto !important; /* Allow height to adjust */
            min-height: 1px !important; /* Smallest possible height */
            page-break-inside: avoid !important; /* Crucial: prevent breaking content within individual columns */
            text-align: ${currentLang === 'ar' ? 'right' : 'left'} !important; /* Text alignment within the column */
        }

        /* 5.1. تحديد عرض الأعمدة (إذا لم يكن في القالب الأصلي) */
        .cv-two-column-layout .cv-sidebar, .ast-layout .cv-sidebar { width: 80mm !important; flex-shrink: 0 !important; } /* Make sidebar fixed width */
        .cv-professional-layout .cv-sidebar { width: 80mm !important; flex-shrink: 0 !important; }
        .cv-main-content { width: auto !important; flex-grow: 1 !important;} /* Main content takes remaining space */


        /* 5.2. معالجة Professional Layout (حسب التغييرات في style.css الخاص بك) */
        /* ملف style.css الخاص بك يحتوي على Professional Layout يجعل الشريط الجانبي على اليسار دائماً */
        /* سنحافظ على هذا السلوك عند الطباعة */
        .cv-professional-layout[dir="rtl"], .cv-professional-layout[dir="ltr"] {
            /* These will be overridden by --print-grid-columns and --print-grid-areas */
            /* grid-template-columns: 80mm 1fr !important; */
            /* grid-template-areas: "sidebar main" !important; */
        }
        .cv-professional-layout .cv-sidebar { grid-area: sidebar !important; }
        .cv-professional-layout .cv-main-content { grid-area: main !important; }
        .cv-professional-layout .cv-header.professional-layout { grid-area: header !important; display: flex !important; flex-direction: column !important; } /* Use flex for header content within grid */


        /* 6. تحسينات عامة على العناصر النصية والقوائم */
        h1, h2, h3, h4, h5, h6, p, li {
            word-break: break-word !important;
            white-space: pre-wrap !important; /* للحفاظ على الأسطر الجديدة من textarea */
            line-height: 1.6 !important;
            margin: 0 !important; /* لإزالة أي هوامش افتراضية غير مرغوبة */
            padding: 0 !important;
        }
        ul {
            list-style: none !important;
            padding: 0 !important;
            margin: 0 !important;
            text-align: ${currentLang === 'ar' ? 'right' : 'left'} !important;
        }
        /* إذا كنت تستخدم نقاطاً للقوائم، يمكنك إعادتها يدوياً لـ RTL/LTR */
        html[dir="rtl"] ul li::before {
            content: "• " !important; /* نقطة القائمة */
            color: inherit !important;
            display: inline-block !important;
            width: 1em !important;
            margin-left: 0.5em !important;
            text-align: left !important;
        }
        html[dir="ltr"] ul li::before {
            content: "• " !important;
            color: inherit !important;
            display: inline-block !important;
            width: 1em !important;
            margin-right: 0.5em !important;
            text-align: right !important;
        }
        .cv-skill-item, .cv-language-list li {
            text-align: inherit !important;
            padding-right: ${currentLang === 'ar' ? '0' : '15px'} !important;
            padding-left: ${currentLang === 'ar' ? '15px' : '0'} !important;
        }
        .cv-contact-item i {
            margin-left: ${currentLang === 'ar' ? '8px' : '0'} !important;
            margin-right: ${currentLang === 'ar' ? '0' : '8px'} !important;
        }

        /* 7. قواعد للطباعة / التوليد التي يجب أن تطغى في سياق الطباعة (مكررة لكن مهمة) */
        @media print {
            html, body {
                margin: 0 !important; padding: 0 !important;
                width: 210mm !important;
                min-height: 297mm !important;
                background: white !important;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
                direction: ${currentLang === 'ar' ? 'rtl' : 'ltr'} !important;
                text-align: ${currentLang === 'ar' ? 'right' : 'left'} !important;
            }
            #cv-container {
                box-shadow: none !important;
                border: none !important;
                min-height: 297mm !important;
                height: auto !important;
                overflow: visible !important;
                page-break-before: auto !important;
                page-break-after: auto !important;
                page-break-inside: auto !important; /* Allow page breaks inside container */
                margin: 0 !important;
                padding: 0 !important;
            }
            .cv-section { page-break-inside: avoid !important; }
            .cv-experience-item, .cv-education-item, .cv-reference-item { page-break-inside: avoid !important; }
        }
    `);

    return cssRules.join('\n');
}


/**
 * =========================================================================
 * == الدالة النهائية والشاملة التي تعالج كل مشاكل الطباعة بالجافا سكريبت ==
 * (النسخة النهائية مع نظام الألوان الذكي المحدث وإصلاح الطباعة)
 * =========================================================================
 * @param {boolean} isPaid - هل النسخة مدفوعة وبدون علامة مائية
 * @returns {Promise<Object|null>} - كائن يحتوي على بيانات الـ PDF أو null
 */
async function generatePdfFromNode(isPaid) {
    toggleLoadingOverlay(true, 'Preparing perfect layout...');
    try {
        const cvPreviewElement = document.getElementById('cv-container');
        if (!cvPreviewElement) throw new Error("CV container not found.");

        const tempContainer = document.createElement('div');
        generateCV(tempContainer);
        const finalHtml = tempContainer.innerHTML;
        tempContainer.remove();

        const mainCssText = document.getElementById('main-stylesheet')?.textContent || '';
        const cvData = collectCvData();
        const direction = cvData.language === 'ar' ? 'rtl' : 'ltr';

        // ---  ⭐ بداية التعديل الجوهري: التقاط الأنماط الديناميكية  ---
        // 1. قراءة متغيرات الألوان من لوحة التحكم
        const colorVariablesCSS = getColorVariablesAsCssText();
        // 2. قراءة متغيرات الأحجام والأنماط المطبقة مباشرة على العنصر
        const dynamicStylesFromElement = cvPreviewElement.style.cssText;
        // 3. دمج الأنماط الديناميكية مع متغيرات الألوان في قاعدة CSS واحدة
        const dynamicStyleRule = `#cv-container { ${dynamicStylesFromElement} }`;
        // ---  ⭐ نهاية التعديل الجوهري  ---

        const isArabic = currentLang === 'ar';
        const nameFont = document.getElementById('font-selector-name')?.value || (isArabic ? "'Cairo', sans-serif" : "'Playfair Display', serif");
        const headingsFont = document.getElementById('font-selector-headings')?.value || (isArabic ? "'Tajawal', sans-serif" : "'Montserrat', sans-serif");
        const bodyFont = document.getElementById('font-selector-body')?.value || (isArabic ? "'Almarai', sans-serif" : "'Roboto', sans-serif");

        const printCssOverrides = `
            ${colorVariablesCSS}
            ${dynamicStyleRule} /* <<< إضافة الأنماط الديناميكية هنا */

            html, body { margin: 0 !important; padding: 0 !important; background: white !important; font-size: 10pt; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            #cv-container { margin: 0 !important; box-shadow: none !important; border: none !important; }
            .professional-layout { grid-template-rows: auto !important; }
            .cv-experience-item, .cv-education-item, .skill-item-wrapper, .cv-reference-item, .cv-language-list  { page-break-inside: avoid !important;}
            #cv-container { font-family: ${bodyFont} !important; }
            #cv-container .cv-name, #cv-container .cv-title { font-family: ${nameFont} !important; }
            #cv-container .cv-section-title { font-family: ${headingsFont} !important; }

            .cv-section-title {
                page-break-after: avoid !important;
            }
            
            .cv-content .cv-main-content,
            .cv-sidebar {
                padding-top: 15mm !important;
            }
            
            #cv-container.watermarked::before {
                position: fixed !important; 
                top: 50% !important; left: 50% !important;
                width: 100vw; height: 100vh;
                transform: translate(-50%, -50%) rotate(-40deg) !important;
                z-index: 10000 !important;
            }
        `;

        const fullPageHtml = `
            <!DOCTYPE html>
            <html lang="${cvData.language}" dir="${direction}">
            <head>
                <meta charset="UTF-8">
                <title>CV</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Almarai:wght@400;700&family=Cairo:wght@400;700&family=Tajawal:wght@400;700&family=Amiri:wght@400;700&family=Lalezar&family=Markazi+Text:wght@400;700&family=Roboto:wght@400;700&family=Lato:wght@400;700&family=Montserrat:wght@400;700&family=Open+Sans:wght@400;700&family=PT+Sans:wght@400;700&family=Playfair+Display:wght@400;700&family=Noto+Serif:wght@400;700&display=swap" rel="stylesheet">
                <style>
                    ${mainCssText}
                    ${printCssOverrides}
                </style>
            </head>
            <body class="${direction}">
                 <div id="cv-container" class="${isPaid ? '' : 'watermarked'} ${cvData.templateCategory}-layout template${cvData.templateNumber}" dir="${direction}">
                    ${finalHtml}
                 </div>
            </body>
            </html>
        `;

        const response = await fetch(`${NODE_SERVER_URL}/generate-cv`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fullHtml: fullPageHtml }),
            mode: 'cors'
        });

        if (!response.ok) throw new Error(await response.text());
        
        const pdfData = await response.json();
        
        if (pdfData && pdfData.status === 'success') {
            return pdfData;
        } else {
            throw new Error(pdfData.message || "Failed to generate PDF on server.");
        }
    } catch (error) {
        console.error("Error in generatePdfFromNode:", error);
        alert('An error occurred while preparing the PDF: ' + error.message);
        return null;
    } finally {
        toggleLoadingOverlay(false);
    }
}
/**
 * دالة مساعدة تأخذ الـ HTML النهائي وترسله للخادم.
 * @param {string} finalHtml - كود HTML للعنصر الجاهز للطباعة.
 * @param {boolean} isPaid - هل النسخة مدفوعة.
 * @returns {Promise<Object>}
 */
async function sendFinalHtmlToServer(finalHtml, isPaid) {
    const mainCssText = document.getElementById('main-stylesheet')?.textContent || '';
    if (!mainCssText) {
        throw new Error("Critical: Main stylesheet could not be found in the DOM.");
    }
    
    const cvData = collectCvData();
    const direction = cvData.language === 'ar' ? 'rtl' : 'ltr';

    const fullPageHtml = `
        <!DOCTYPE html>
        <html lang="${cvData.language}" dir="${direction}">
        <head>
            <meta charset="UTF-8">
            <title>CV</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
            <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700&display=swap" rel="stylesheet">
            <style>
                ${mainCssText}
            </style>
        </head>
        <body class="${direction}">
             ${finalHtml.replace('class="', `class="${isPaid ? '' : 'watermarked'} `)}
        </body>
        </html>
    `;

    const response = await fetch(`${NODE_SERVER_URL}/generate-cv`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullHtml: fullPageHtml }),
        mode: 'cors'
    });

    if (!response.ok) {
        const errorBody = await response.json().catch(() => ({ message: 'Server error' }));
        throw new Error(`Node.js server error: ${response.status} - ${errorBody.message}`);
    }

    return await response.json();
}
/**
 * دالة مركزية لإرسال بيانات الدفع والـ PDF النهائي إلى Google Apps Script.
 * هذه الدالة لا تقوم بتوليد الـ PDF بنفسها، بل تستقبله كبيانات جاهزة.
 * @param {string} paymentMethod - طريقة الدفع (مثال: 'PayPal', 'STC Pay', 'Discounted/Free').
 * @param {number} pricePaid - المبلغ المدفوع.
 * @param {string} cvPdfBase64 - بيانات السيرة الذاتية بصيغة Base64 (تم توليدها مسبقاً).
 * @param {File|null} paymentFile - ملف الإيصال (للدفع اليدوي)، أو null للعمليات التلقائية.
 */
async function sendPaymentDataToAppsScript(paymentMethod, pricePaid, cvPdfBase64, paymentFile) {
    toggleLoadingOverlay(true, 'Payment processing, please wait...');

    try {
        // 1. جمع بيانات المستخدم الأساسية من حقول الإدخال الرئيسية
        const name = document.getElementById('name-input')?.value.trim() || 'Unnamed User';
        const email = document.getElementById('email-input')?.value.trim();
        const phoneNumber = document.getElementById('phone-input')?.value.trim();
        const website = document.getElementById('website-input')?.value.trim();

        // 2. التحقق من صحة البيانات الأساسية
        if (!email || !validateEmail(email)) {
            // استخدام رسالة خطأ عامة لأن هذه الدالة قد تُستدعى من سياقات مختلفة
            throw new Error(translations[currentLang]['Please enter a valid email.'] || 'A valid email is required to send your CV.');
        }
        
        if (!cvPdfBase64) {
            throw new Error('CV PDF data was not provided to the submission function.');
        }

        // 3. معالجة ملف إيصال الدفع (إن وجد)
        let paymentFileBase64 = null;
        if (paymentFile) {
            // يمكنك إضافة التحقق من حجم ونوع الملف هنا أيضاً كطبقة حماية إضافية
            if (paymentFile.size > MAX_FILE_SIZE) {
                throw new Error(translations[currentLang]['File size exceeds the limit (3MB).']);
            }
            if (!ALLOWED_FILE_TYPES.includes(paymentFile.type)) {
                throw new Error(translations[currentLang]['Please attach only image or PDF files.']);
            }
            paymentFileBase64 = await fileToBase64(paymentFile);
        }

        // 4. تجهيز حمولة البيانات (Payload) بتنسيق URLSearchParams
        const formData = new URLSearchParams();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phoneNumber', phoneNumber || '');
        formData.append('website', website || ''); // إرسال بيانات الموقع/المدينة
        formData.append('pricePaid', pricePaid.toString());
        formData.append('paymentMethod', paymentMethod);
        formData.append('cvTemplateCategory', selectedTemplateCategory); // استخدام المتغير العام
        formData.append('discountCode', appliedCode || 'N/A'); // استخدام المتغير العام للكود المطبق
        formData.append('language', currentLang); // استخدام المتغير العام

        // بيانات الملفات
        formData.append('paymentFileBase64', paymentFileBase64 || '');
        formData.append('paymentFileType', paymentFile?.type || '');
        formData.append('cvPdfFileBase64', cvPdfBase64); // استخدام بيانات الـ PDF التي تم تمريرها
        formData.append('cvPdfFileName', `CV_${name.replace(/\s/g, '_')}.pdf`);

        // 5. إرسال الطلب إلى Google Apps Script
        const response = await fetch(GOOGLE_APPS_SCRIPT_WEB_APP_URL_PAYMENT_PROCESSOR, {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();

        if (data.status === 'success') {
            alert(data.message || translations[currentLang]["payment-success"]);
            showPage('landing-page');
        } else {
            // إذا فشل الطلب من جهة الخادم، قم برمي خطأ ليتم عرضه
            throw new Error(data.error || 'An unknown error occurred on the server.');
        }

    } catch (err) {
        console.error("Error in sendPaymentDataToAppsScript:", err);
        // عرض أي خطأ للمستخدم
        alert((translations[currentLang]["Error processing file."] || "Error: ") + err.message);
    } finally {
        // إخفاء شاشة التحميل دائمًا في النهاية
        toggleLoadingOverlay(false);
    }
}


// استبدال استدعاءات توليد الـ PDF القديمة في ملف index.html
// هذا الزر في صفحة المعاينة (تنزيل PDF (مباشر))
document.querySelector('#cv-preview-page .btn-info.ms-3').onclick = async function() {
    const pdfData = await generatePdfFromNode(true); // isPaid: false -> مع علامة مائية
    if (pdfData && pdfData.base64Pdf) {
        const blob = base64toBlob(pdfData.base64Pdf, 'application/pdf');
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `CV_${document.getElementById('name-input')?.value.replace(/\s/g, '_') || 'ResailCV'}.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        alert(translations[currentLang]['CV downloaded successfully!']);
    } else {
        // رسالة الخطأ يتم عرضها بالفعل داخل generatePdfFromNode
    }
};

// هذا الزر في صفحة المعاينة (طلب تنزيل / طباعة)
document.querySelector('#cv-preview-page .btn-success.ms-3').onclick = function() {
    openPaymentForCV_appsScript(); // هذا سيؤدي إلى صفحة خيارات الدفع
};


// دالة مساعدة لتحويل Base64 إلى Blob
function base64toBlob(base64, type = 'application/octet-stream') {
    const binStr = atob(base64);
    const len = binStr.length;
    const arr = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        arr[i] = binStr.charCodeAt(i);
    }
    return new Blob([arr], { type: type });
}


function selectTemplate(templateNumber, category) {
    const cvContainer = document.getElementById('cv-container');
    const previews = document.querySelectorAll('.template-preview-container .template-preview');
    previews.forEach(preview => preview.classList.remove('selected-template'));

    // --- هذا هو السطر الأهم الذي يجب تعديله ---
    // بدلاً من .classList.add، نستخدم .className = '' لمسح كل شيء أولاً
    cvContainer.className = ''; 
    // ------------------------------------------

    // ثم نضيف الكلاسات الجديدة والنظيفة
    cvContainer.classList.add(`${category}-layout`, `template${templateNumber}`);

    // الكود التالي يبقى كما هو
    const selectedPreview = document.querySelector(`.template-preview[data-template-category="${category}"][onclick*="selectTemplate(${templateNumber}, '${category}')"]`);
    if (selectedPreview) {
        selectedPreview.classList.add('selected-template');
    }
    
    selectedTemplate = templateNumber;
    selectedTemplateCategory = category;
    
    // الآن، عندما يتم استدعاء هذه الدالة، ستجد الكلاس الصحيح فقط
    updateControlsForCategory();
    createPaletteControls();
    generateCV(cvContainer);
    updateColorControlVisibility(); 

}
/**
 * يعالج تغيير الصورة الشخصية، يتحقق من حجمها،
 * ثم يقوم بتصغيرها وضغطها قبل إضافتها للسيرة الذاتية.
 */
function handleProfilePicChange(event) {
    const file = event.target.files[0];
    const inputElement = event.target;

    if (!file) {
        profilePicDataUrl = null;
        generateCV(cvContainer);
        updateProgress();
        return;
    }

    // 1. التحقق من نوع وحجم الملف
    if (!file.type.startsWith('image/')) {
        alert(currentLang === 'ar' ? 'الرجاء اختيار ملف صورة صالح.' : 'Please select a valid image file.');
        inputElement.value = '';
        return;
    }
    if (file.size > MAX_FILE_SIZE) {
        alert(currentLang === 'ar' ? `حجم الصورة كبير جداً. الرجاء اختيار صورة أصغر من ${MAX_FILE_SIZE / 1024 / 1024} ميغابايت.` : `Image size is too large. Please select an image smaller than ${MAX_FILE_SIZE / 1024 / 1024}MB.`);
        inputElement.value = '';
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
            // 2. تصغير الصورة باستخدام Canvas
            const canvas = document.createElement('canvas');
            const MAX_WIDTH = 400; // أقصى عرض للصورة
            const MAX_HEIGHT = 400; // أقصى ارتفاع للصورة
            let width = img.width;
            let height = img.height;

            if (width > height) {
                if (width > MAX_WIDTH) {
                    height *= MAX_WIDTH / width;
                    width = MAX_WIDTH;
                }
            } else {
                if (height > MAX_HEIGHT) {
                    width *= MAX_HEIGHT / height;
                    height = MAX_HEIGHT;
                }
            }
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);

            // 3. تحويل الصورة المصغرة إلى Base64 مع ضغطها (JPEG quality 90%)
            // استخدام 'image/jpeg' يعطي حجم أصغر بكثير من 'image/png'
            profilePicDataUrl = canvas.toDataURL('image/jpeg', 0.9);

            // 4. تحديث المعاينة
            generateCV(cvContainer);
            updateProgress();
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function addExperienceField(data = null) {
    const container = document.getElementById('experience-input');
    if (!container) return;
    const newEntry = document.createElement('div');
    newEntry.className = 'experience-entry';
    newEntry.innerHTML = `
        <button type="button" class="remove-field" onclick="removeField(this)"><i class="fas fa-times-circle"></i></button>
        <input type="text" placeholder="${translations[currentLang]['Job Title_placeholder'] || 'Job Title'}" class="experience-title" oninput="generateCV(cvContainer); updateProgress()">
        <input type="text" placeholder="${translations[currentLang]['Company'] || 'Company'}" class="experience-company" oninput="generateCV(cvContainer); updateProgress()">
        <input type="text" placeholder="${translations[currentLang]['Duration'] || 'Duration'}" class="experience-duration" oninput="generateCV(cvContainer); updateProgress()">
        <textarea placeholder="${translations[currentLang]['Description'] || 'Description'}" class="experience-description" oninput="generateCV(cvContainer); updateProgress()"></textarea>
    `;
    container.appendChild(newEntry);

    // الجزء الجديد: ملء البيانات إذا تم توفيرها
    if (data) {
        newEntry.querySelector('.experience-title').value = data.title || '';
        newEntry.querySelector('.experience-company').value = data.company || '';
        newEntry.querySelector('.experience-duration').value = data.duration || '';
        newEntry.querySelector('.experience-description').value = data.description || '';
    }
}

function removeLastExperienceField() {
    const experienceInput = document.getElementById('experience-input');
    if (!experienceInput) return;
    const entries = experienceInput.querySelectorAll('.experience-entry');
    if (entries.length > 1) {
        experienceInput.removeChild(entries[entries.length - 1]);
        generateCV(cvContainer); updateProgress();
    } else {
        alert(translations[currentLang]['You must have at least one field in this section.']);
    }
}

function addEducationField(data = null) {
    const educationInput = document.getElementById('education-input');
    if (!educationInput) return;
    const newEntry = document.createElement('div');
    newEntry.className = 'education-entry';
    newEntry.innerHTML = `
         <button type="button" class="remove-field" onclick="removeField(this)"><i class="fas fa-times-circle"></i></button>
        <input type="text" placeholder="${translations[currentLang]['Degree'] || 'Degree'}" class="education-degree" oninput="generateCV(cvContainer); updateProgress()">
        <input type="text" placeholder="${translations[currentLang]['University/Institution'] || 'University/Institution'}" class="education-institution" oninput="generateCV(cvContainer); updateProgress()">
        <input type="text" placeholder="${translations[currentLang]['Duration'] || 'Duration'}" class="education-duration" oninput="generateCV(cvContainer); updateProgress()">
    `;
    educationInput.appendChild(newEntry);

    // الجزء الجديد
    if (data) {
        newEntry.querySelector('.education-degree').value = data.degree || '';
        newEntry.querySelector('.education-institution').value = data.institution || '';
        newEntry.querySelector('.education-duration').value = data.duration || '';
    }
}

// استبدل دالة addSkillField بالكامل
function addSkillField(data = null) {
    const skillsInput = document.getElementById('skills-input');
    if (!skillsInput) return;
    const newEntry = document.createElement('div');
    newEntry.className = 'skill-entry border p-2 mb-2 rounded position-relative';

    // قسم لإدخال اسم المهارة والمستوى
    newEntry.innerHTML = `
        <button type="button" class="remove-field" onclick="removeField(this)">&times;</button>
        <div class="row">
            <div class="col-md-6">
                <input type="text" class="form-control skill-item-input" placeholder="${translations[currentLang]['Enter a skill'] || 'Enter a skill'}" oninput="generateCV(cvContainer); updateProgress()">
            </div>
            <div class="col-md-6">
                <select class="form-select skill-level-select" onchange="generateCV(cvContainer); updateProgress()">
                    <option value="0">${translations[currentLang]['Select Level'] || 'Select Level'}</option>
                    <option value="30%">${translations[currentLang]['Beginner'] || 'Beginner'}</option>
                    <option value="50%">${translations[currentLang]['Intermediate'] || 'Intermediate'}</option>
                    <option value="75%">${translations[currentLang]['Advanced'] || 'Advanced'}</option>
                    <option value="100%">${translations[currentLang]['Expert'] || 'Expert'}</option>
                </select>
            </div>
        </div>
    `;
    skillsInput.appendChild(newEntry);

    // للتوافق مع البيانات القديمة (اختياري)
    if (data) {
        newEntry.querySelector('.skill-item-input').value = data.name || (typeof data === 'string' ? data : '');
        if(data.level) newEntry.querySelector('.skill-level-select').value = data.level;
    }
}

// ولا تنس تعديل دالة جلب بيانات المهارات لتقرأ المستوى أيضاً
function getSkillsData() {
    const skills = [];
    document.querySelectorAll('#skills-input .skill-entry').forEach(entry => {
        const name = entry.querySelector('.skill-item-input').value.trim();
        const level = entry.querySelector('.skill-level-select').value;
        if (name && level !== '0') {
            skills.push({ name, level });
        }
    });
    return skills;
}

// وأضف الترجمات الجديدة لكائن translations
// في قسم ar
// "Select Level": "اختر المستوى", "Beginner": "مبتدئ", "Intermediate": "متوسط", "Advanced": "متقدم", "Expert": "خبير"
// في قسم en
// "Select Level": "Select Level", "Beginner": "Beginner", "Intermediate": "Intermediate", "Advanced": "Advanced", "Expert": "Expert"

function removeLastSkillField() {
    const skillsInput = document.getElementById('skills-input');
    if (!skillsInput) return;
    const entries = skillsInput.querySelectorAll('.skill-entry');
    // تعديل: نحذف طالما يوجد عنصر واحد على الأقل
    if (entries.length > 0) {
        skillsInput.removeChild(entries[entries.length - 1]);
        generateCV(cvContainer); 
        updateProgress();
    }
}

function removeLastLanguageField() {
    const languagesInput = document.getElementById('languages-input');
    if (!languagesInput) return;
    const entries = languagesInput.querySelectorAll('.language-entry');
    // تعديل: نحذف طالما يوجد عنصر واحد على الأقل
    if (entries.length > 0) {
        languagesInput.removeChild(entries[entries.length - 1]);
        generateCV(cvContainer); 
        updateProgress();
    }
}

function removeLastReferenceField() {
    const referencesInput = document.getElementById('references-input');
    if (!referencesInput) return;
    const entries = referencesInput.querySelectorAll('.reference-entry');
    // تعديل: نحذف طالما يوجد عنصر واحد على الأقل
    if (entries.length > 0) {
        referencesInput.removeChild(entries[entries.length - 1]);
        generateCV(cvContainer); 
        updateProgress();
    }
}

function removeField(button) {
    const entry = button.parentElement;
    const parentContainer = entry.parentElement;
    // تعديل: أزلنا الشرط الذي يمنع حذف آخر عنصر
    parentContainer.removeChild(entry);
    generateCV(cvContainer); 
    updateProgress();
}

function addLanguageField(data = null) {
    const languagesInput = document.getElementById('languages-input');
    if (!languagesInput) return;
    const newEntry = document.createElement('div');
    newEntry.className = 'language-entry';
    newEntry.innerHTML = `
        <button type="button" class="remove-field" onclick="removeField(this)"><i class="fas fa-times-circle"></i></button>
        <input type="text" placeholder="${translations[currentLang]['Enter a language'] || 'Enter a language'}" class="language-item-input" oninput="generateCV(cvContainer); updateProgress()">
    `;
    languagesInput.appendChild(newEntry);
    
    // الجزء الجديد
    if (data) {
        newEntry.querySelector('.language-item-input').value = data || '';
    }
}


function addReferenceField(data = null) {
    const referencesInput = document.getElementById('references-input');
    if (!referencesInput) return;
    const newEntry = document.createElement('div');
    newEntry.className = 'reference-entry';
    newEntry.innerHTML = `
        <button type="button" class="remove-field" onclick="removeField(this)"><i class="fas fa-times-circle"></i></button>
        <input type="text" placeholder="${translations[currentLang]['Name'] || 'Name'}" class="reference-name" oninput="generateCV(cvContainer); updateProgress()">
        <input type="text" placeholder="${translations[currentLang]['Position'] || 'Position'}" class="reference-position" oninput="generateCV(cvContainer); updateProgress()">
        <input type="text" placeholder="${translations[currentLang]['Phone'] || 'Phone'}" class="reference-phone" oninput="generateCV(cvContainer); updateProgress()">
        <input type="email" placeholder="${translations[currentLang]['Email'] || 'Email'}" class="reference-email" oninput="generateCV(cvContainer); updateProgress()">
    `;
    referencesInput.appendChild(newEntry);

    // الجزء الجديد
    if (data) {
        newEntry.querySelector('.reference-name').value = data.name || '';
        newEntry.querySelector('.reference-position').value = data.position || '';
        newEntry.querySelector('.reference-phone').value = data.phone || '';
        newEntry.querySelector('.reference-email').value = data.email || '';
    }
}



/**
 * =========================================================================
 * == دالة generateCV النهائية - مع إضافة عنصر التمدد (endmarker) ==
 * =========================================================================
 * @param {HTMLElement} targetElement The DOM element to populate with CV content.
 */
function generateCV(targetElement) {
    if (!targetElement) {
        console.error("[generateCV] Target element is null!");
        return;
    }

    const isArabic = currentLang === 'ar';
    const direction = isArabic ? 'rtl' : 'ltr';
    targetElement.dir = direction;
    targetElement.innerHTML = ''; // مسح المحتوى القديم

    // --- 1. جمع البيانات ---
    const name = document.getElementById('name-input')?.value.trim() || '';
    const title = document.getElementById('title-input')?.value.trim() || '';
    const emailVal = document.getElementById('email-input')?.value.trim() || '';
    const phone = document.getElementById('phone-input')?.value.trim() || '';
    const website = document.getElementById('website-input')?.value.trim() || '';
    const objective = document.getElementById('objective-input')?.value.trim() || '';

    // --- 2. بناء أجزاء HTML ---
    const endMarkerHTML = createEndMarkerHTML();
    let profilePicHTML = profilePicDataUrl ? `<img src="${profilePicDataUrl}" class="cv-profile-pic" alt="Profile Picture">` : '';

    let contactInfoHTML = `<div class="cv-section" data-section-name="contact-info"><div class="cv-contact-info">`;
    if (emailVal) contactInfoHTML += `<div class="cv-contact-item"><i class="fas fa-envelope"></i><p>${emailVal}</p></div>`;
    if (phone) contactInfoHTML += `<div class="cv-contact-item"><i class="fas fa-phone"></i><p>${phone}</p></div>`;
    if (website) contactInfoHTML += `<div class="cv-contact-item"><i class="fas fa-map-marker-alt"></i><p>${website}</p></div>`;
    contactInfoHTML += '</div></div>';

    const objectiveHTML = objective ? `<div class="cv-section" id="objective"><h3 class="cv-section-title">${translations[currentLang]['Career Objective']}</h3><p>${objective.replace(/(\r\n|\n|\r)+/g, '<br>')}</p></div>` : '';

    let experienceHTML = '';
    const experienceEntries = getExperiencesData();
    if (experienceEntries.length > 0 && experienceEntries.some(e => e.title || e.company)) {
        experienceHTML = `<div class="cv-section" id="experience"><h3 class="cv-section-title">${translations[currentLang]['Work Experience']}</h3>`;
        experienceEntries.forEach(entry => {
            if (entry.title || entry.company) {
                experienceHTML += `<div class="cv-experience-item"><h4 class="cv-job-title">${entry.title}</h4><h5 class="cv-company">${entry.company}${entry.company && entry.duration ? ' - ' : ''}${entry.duration}</h5><p>${entry.description.replace(/(\r\n|\n|\r)+/g, '<br>')}</p></div>`;
            }
        });
        experienceHTML += '</div>';
    }

    let educationHTML = '';
    const educationEntries = getEducationsData();
    if (educationEntries.length > 0 && educationEntries.some(e => e.degree || e.institution)) {
        educationHTML = `<div class="cv-section" id="education"><h3 class="cv-section-title">${translations[currentLang]['Education']}</h3>`;
        educationEntries.forEach(entry => {
             if (entry.degree || entry.institution) {
                educationHTML += `<div class="cv-education-item"><h4 class="cv-degree">${entry.degree}</h4><h5 class="cv-institution">${entry.institution}${entry.institution && entry.duration ? ' - ' : ''}${entry.duration}</h5></div>`;
            }
        });
        educationHTML += '</div>';
    }

    let customSectionsHTML = '';
    const customSections = getCustomSectionsData();
    if (customSections.length > 0) {
        customSections.forEach(section => {
            customSectionsHTML += `<div class="cv-section" id="custom-${section.title.replace(/\s+/g, '-')}">`;
            customSectionsHTML += `<h3 class="cv-section-title">${section.title}</h3>`;
            section.subSections.forEach(sub => {
                customSectionsHTML += `<div class="cv-experience-item">`; // نستخدم نفس تنسيق الخبرات
                if (sub.title) {
                    customSectionsHTML += `<h4 class="cv-job-title">${sub.title}</h4>`;
                }
                if (sub.description) {
                    customSectionsHTML += `<p>${sub.description.replace(/(\r\n|\n|\r)+/g, '<br>')}</p>`;
                }
                customSectionsHTML += `</div>`;
            });
            customSectionsHTML += `</div>`;
        });
    }
    
    const skillsContainerClass = (selectedTemplateCategory === 'normal') ? 'horizontal-skills' : 'vertical-skills';

    let skillsHTMLWithLevels = '';
    const skillsWithLevels = getSkillsData();
    if (skillsWithLevels.length > 0) {
        // 2. نستخدم المتغير الجديد لوضع الكلاس الصحيح في الـ HTML
        skillsHTMLWithLevels = `<div class="cv-section" id="skills"><h3 class="cv-section-title">${translations[currentLang]['Skills']}</h3><div class="skills-container ${skillsContainerClass}">`;
        skillsWithLevels.forEach(skill => {
            skillsHTMLWithLevels += `<div class="skill-item-wrapper"><span class="skill-name">${skill.name}</span><div class="skill-level-bar"><div class="skill-level-progress" style="width: ${skill.level};"></div></div></div>`;
        });
        skillsHTMLWithLevels += '</div></div>';
    }

    
    let languagesHTML = '';
    const filledLanguages = getLanguagesData();
    if (filledLanguages.length > 0) {
        languagesHTML = `<div class="cv-section" id="languages"><h3 class="cv-section-title">${translations[currentLang]['Languages']}</h3><ul class="cv-language-list">`;
        filledLanguages.forEach(lang => { languagesHTML += `<li>${lang}</li>`; });
        languagesHTML += '</ul></div>';
    }
    
    let referencesHTML = '';
    const referenceEntries = getReferencesData();
    if (referenceEntries.length > 0 && referenceEntries.some(r => r.name)) {
        referencesHTML = `<div class="cv-section" id="references"><h3 class="cv-section-title">${translations[currentLang]['References']}</h3><div class="cv-references-list">`;
        referenceEntries.forEach(ref => {
            if(ref.name) {
                referencesHTML += `<div class="cv-reference-item"><h4>${ref.name}</h4><p>${ref.position || ''}</p><p>${ref.phone || ''}</p><p>${ref.email || ''}</p></div>`;
            }
        });
        referencesHTML += '</div></div>';
    }

    // --- 3. بناء الهيكل النهائي بناءً على فئة القالب ---
    const cvContentDiv = document.createElement('div');
    cvContentDiv.className = 'cv-content';

    if (selectedTemplateCategory === 'normal') {
        cvContentDiv.innerHTML = `<div class="cv-header">${profilePicHTML}<div class="cv-header-text"><h1 class="cv-name">${name}</h1><h2 class="cv-title">${title}</h2>${contactInfoHTML}</div></div><div class="cv-body-content">${objectiveHTML}${experienceHTML}${customSectionsHTML}${educationHTML}${skillsHTMLWithLevels}${languagesHTML}${referencesHTML}${endMarkerHTML}</div>`;
    } 
    else if (selectedTemplateCategory === 'creative') {
        if (selectedTemplate == 1) {
            cvContentDiv.innerHTML = `<div class="header-wave">${profilePicHTML}<div class="header-text"><h1 class="cv-name">${name}</h1><h2 class="cv-title">${title}</h2></div></div><div class="content-columns"><div class="left-column">${objectiveHTML}${experienceHTML}${customSectionsHTML}${educationHTML}${referencesHTML}${endMarkerHTML}</div><div class="right-column">${contactInfoHTML}${skillsHTMLWithLevels}${languagesHTML}${endMarkerHTML}</div></div>`;
        } else if (selectedTemplate == 2) {
            cvContentDiv.innerHTML = `<div class="header-wave"><h1 class="cv-name">${name}</h1><h2 class="cv-title">${title}</h2></div><div class="content-columns"><div class="left-column">${objectiveHTML}${experienceHTML}${customSectionsHTML}${educationHTML}${endMarkerHTML}</div><div class="right-column">${profilePicHTML}${contactInfoHTML}${skillsHTMLWithLevels}${languagesHTML}${referencesHTML}${endMarkerHTML}</div></div>`;
        } else if (selectedTemplate == 3) {
            cvContentDiv.innerHTML = `<div class="cv-sidebar"><div class="cv-header two-col-main">${profilePicHTML}<h1 class="cv-name">${name}</h1><h2 class="cv-title">${title}</h2></div>${contactInfoHTML}${skillsHTMLWithLevels}${languagesHTML}${referencesHTML}${endMarkerHTML}</div><div class="cv-main-content">${objectiveHTML}${experienceHTML}${customSectionsHTML}${educationHTML}${endMarkerHTML}</div>`;
        }
    }
    // === بداية: الكود المصحح الذي يعالج كل الفئات المتبقية ===
    else { // هذا الكود سيعالج الآن Standard, AST, و Professional بشكل صحيح
        const layoutDiv = document.createElement('div');
        const sidebarDiv = document.createElement('div');
        sidebarDiv.className = 'cv-sidebar';
        const mainContentDiv = document.createElement('div');
        mainContentDiv.className = 'cv-main-content';

        if (selectedTemplateCategory === 'professional') {
            layoutDiv.className = 'cv-professional-layout';
            const professionalHeader = document.createElement('div');
            professionalHeader.className = 'cv-header professional-layout';
    
            // --- المنطق الجديد لتوزيع المحتوى بشكل صحيح من البداية ---
            let headerHTML, sidebarHTML;
            
            // إذا كان القالب 1 أو 3
            if (selectedTemplate == 1 || selectedTemplate == 3) {
                // الصورة ومعلومات الاتصال تكون في الرأس
                const contactForHeader = contactInfoHTML.replace('<div class="cv-section" data-section-name="contact-info">', '').replace(/<\/div>$/, '');
                headerHTML = `<div class="cv-details">${profilePicHTML}<h1 class="cv-name">${name}</h1><h2 class="cv-title">${title}</h2>${contactForHeader}</div>`;
                sidebarHTML = `${skillsHTMLWithLevels}${languagesHTML}${referencesHTML}${endMarkerHTML}`;
            } 
            // إذا كان القالب 2
            else { 
                // الصورة ومعلومات الاتصال تكون في العامود الجانبي
                headerHTML = `<div class="cv-details"><h1 class="cv-name">${name}</h1><h2 class="cv-title">${title}</h2></div>`;
                sidebarHTML = `${profilePicHTML}${contactInfoHTML}${skillsHTMLWithLevels}${languagesHTML}${referencesHTML}${endMarkerHTML}`;
            }
    
            professionalHeader.innerHTML = headerHTML;
            sidebarDiv.innerHTML = sidebarHTML;
            mainContentDiv.innerHTML = `${objectiveHTML}${experienceHTML}${customSectionsHTML}${educationHTML}${endMarkerHTML}`;
            cvContentDiv.appendChild(professionalHeader);           

        } else { // هذا الجزء يعالج Standard و AST كما كان
            layoutDiv.className = 'cv-two-column-layout';
            sidebarDiv.innerHTML = profilePicHTML + contactInfoHTML + skillsHTMLWithLevels + languagesHTML + referencesHTML + endMarkerHTML;
            mainContentDiv.innerHTML = `<div class="cv-header two-col-main"><h1 class="cv-name">${name}</h1><h2 class="cv-title">${title}</h2></div>${objectiveHTML}${experienceHTML}${customSectionsHTML}${educationHTML}${endMarkerHTML}`;
        }
        
        layoutDiv.appendChild(sidebarDiv);
        layoutDiv.appendChild(mainContentDiv);
        cvContentDiv.appendChild(layoutDiv);
    }
    // === نهاية: الكود المصحح ===
    
    targetElement.appendChild(cvContentDiv);

    // --- 4. استدعاء دوال التنسيق والتحديث بعد بناء الهيكل ---
    saveCvDataToLocalStorage();
    applySelectedFonts();
    applySelectedColors();
    applyDynamicSizes();
}



function createEndMarkerHTML() {
    const endText = translations[currentLang]["End of CV"] || (currentLang === 'ar' ? "نهاية السيرة" : "End of CV");
    return `<div class="cv-end-marker" style="height: 279mm !important; margin-top:auto !important; visibility: hidden !important; font-size:1px; color:transparent;">${endText}</div>`;
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
    if(websiteInput) websiteInput.value = currentLang === 'ar' ? 'المدينة المنورة' : 'Saudi Arabia';
    if(objectiveInput) objectiveInput.value = currentLang === 'ar' ? 
        'مهندس برمجيات ذو خبرة عالية في تطوير تطبيقات الويب والجوال، أبحث عن فرصة للانضمام إلى فريق ديناميكي للمساهمة في بناء حلول تقنية مبتكرة وذات جودة عالية.' :
        'Highly experienced software engineer in web and mobile application development, seeking an opportunity to join a dynamic team to contribute to building innovative and high-quality technical solutions.';

    // === بداية التعديل المهم هنا ===
    ['experience', 'education', 'skills', 'languages', 'references'].forEach(type => {
        const container = document.getElementById(`${type}-input`);
        if (container) {
            // أولاً، مسح كل الحقول القديمة الموجودة
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
            
            // ثانيًا، إضافة العدد المطلوب من الحقول
            if (type === 'experience') { 
                addExperienceField(); // نترك حقلين للخبرة كمثال جيد
                addExperienceField(); 
            } else if (type === 'education') { 
                addEducationField(); 
            } else if (type === 'skills') { 
                addSkillField(); // إضافة 5 مهارات كمثال
                addSkillField();
                addSkillField();
                addSkillField();
                addSkillField();
            } else if (type === 'languages') { 
                addLanguageField(); // إضافة حقل واحد فقط للغات
            } else if (type === 'references') { 
                addReferenceField(); // إضافة حقل واحد فقط للمراجع
            }
        }
    });
    // === نهاية التعديل المهم هنا ===
    
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

    const skillInputsTest = document.querySelectorAll('#skills-input .skill-item-input');
    if(skillInputsTest[0]) skillInputsTest[0].value = 'JavaScript';
    if(skillInputsTest[1]) skillInputsTest[1].value = 'React';
    if(skillInputsTest[2]) skillInputsTest[2].value = 'Node.js';
    if(skillInputsTest[3]) skillInputsTest[3].value = 'SQL';
    if(skillInputsTest[4]) skillInputsTest[4].value = currentLang === 'ar' ? 'منهجيات أجايل' : 'Agile Methodologies';
    
    const langInputsTest = document.querySelectorAll('#languages-input .language-item-input');
    if(langInputsTest[0]) langInputsTest[0].value = currentLang === 'ar' ? 'العربية (لغة أم)' : 'Arabic (Native)';
    
    const refEntries = document.querySelectorAll('#references-input .reference-entry');
    if (refEntries[0]) {
        refEntries[0].querySelector('.reference-name').value = currentLang === 'ar' ? 'الدكتور علي أحمد' : 'Dr. Ali Ahmed';
        refEntries[0].querySelector('.reference-position').value = currentLang === 'ar' ? 'أستاذ مساعد، جامعة الملك فهد' : 'Assistant Professor, KFUPM';
        refEntries[0].querySelector('.reference-phone').value = '0551234567';
        refEntries[0].querySelector('.reference-email').value = 'ali.ahmed@example.com';
    }

    generateCV(cvContainer);
    updateProgress();
}

