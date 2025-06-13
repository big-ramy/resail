// --- بداية الملف: translations, global variables, DOMContentLoaded etc. ---
const translations = {
    "ar": {
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
        "English": "English", // This will be "العربية" when current lang is English
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
        "+٥٠٠٠": "+٥٠٠٠", // Ensure this stays Arabic if it's a fixed number representation
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
        "Skills": "المهارات",
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
        "messages": "رسائل", // This one is duplicated for price (السعر المدفوع: 0 ريال) and label "messages"
        "payment": "الدفع",
        "payment-note": "بعد إتمام الدفع في تطبيق البنك، الرجاء تعبئة البيانات التالية:",
        "your-name": "اسمك:",
        "your-email": "بريدك الإلكتروني:",
        "your-phone": "رقم الهاتف:",
        "attachment": "أرفق إيصال الدفع (صورة / PDF):",
        "submit": "إرسال",
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
        "terms-of-service-p-7-1": "لأي أسئلة أو استفسارات بخصوص شروط الخدمة، يرجى الاتصال بنا عبر البريد الإلكتروني: <a href=\"mailto:ramyheshamamer@gmail.com\">ramyheshamamer@gmail.com</a>.",
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
        "privacy-policy-p-7-1": "لأي أسئلة أو استفسارات بخصوص سياسة الخصوصية، يرجى الاتصال بنا عبر البريد الإلكتروني: <a href=\"mailto:ramyheshamamer@gmail.com\">ramyheshamamer@gmail.com</a>."
    },
    "en": {
        "CV downloaded successfully!": "CV downloaded successfully!", // <--- أضف هذا السطر
        "Professional CV Builder": "Professional CV Builder",
        "brand-name": "Resail",
        "home-link": "Home",
        "features-link": "Features",
        "products-link": "Products",
        "product-basic": "WhatsApp Sender",
        "product-cv": "CV Builder",
        "about-link": "About Us",
        "contact-link": "Contact Us",
        "English": "العربية", // This will be "English" when current lang is English
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
        "+٥٠٠٠": "5000+", // Translating the number as well
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
        "Skills": "Skills",
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
        "messages": "Messages",
        "payment": "Payment",
        "payment-note": "After completing the payment in the banking application, please fill in the following details:",
        "your-name": "Your Name:",
        "your-email": "Your Email:",
        "your-phone": "Phone Number:",
        "attachment": "Attach payment receipt (image / PDF):",
        "submit": "Submit",
        "Back to Payment Options": "Back to Payment Options",
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
        "terms-of-service-p-7-1": "For any questions or inquiries regarding the terms of service, please contact us via email: <a href=\"mailto:ramyheshamamer@gmail.com\">ramyheshamamer@gmail.com</a>.",
        "back-to-home": "Back to Home",
        "terms-of-service-link": "Terms of Service",
        "refund-policy-link": "Refund Policy",
        "privacy-policy-link": "Privacy Policy",
        "refund-policy-title": "Refund and Disputes Policy",
        "refund-policy-intro-p": "At \"Resail\", we strive to provide high-quality service and ensure customer satisfaction. Due to the nature of our digital products (CVs created and downloaded as PDF), our refund and disputes policy is as follows:",
        "refund-policy-h4-1": "1. Digital Products (PDF CVs)",
        "refund-policy-p-1-1": "Once the payment process is completed and the CV is successfully created and sent to your email (or download link provided), the service is considered fully completed. Therefore, refunds are generally not available for paid amounts.",
        "refund-policy-h4-2": "2. Exceptional Refund Cases",
        "refund-policy-p-2-1": "Refund requests may be considered only in the following exceptional cases:",
        "refund-policy-list-1": [
            "<strong>Significant Technical Issue:</strong> If you encountered a technical issue in our system that prevented you from fully creating or downloading the CV, and our support team could not resolve the issue within a reasonable timeframe.",
            "<strong>Major Product Error:</strong> If the generated CV contains major errors resulting from a defect in our system (and not due to errors in the data entered by you), and we were unable to correct them.",
            "<strong>Duplicate Payment:</strong> If you accidentally paid for the same service more than once."
        ],
        "refund-policy-h4-3": "3. Refund Request Process",
        "refund-policy-p-3-1": "To submit a refund request, please contact our support team via email <a href=\"mailto:ramyheshamamer@gmail.com\">ramyheshamamer@gmail.com</a> within 7 days of the purchase date. Your request must include the following details:",
        "refund-policy-list-2": [
            "Your full name and email used for the purchase.",
            "Transaction date and number (if any).",
            "A detailed description of the problem you encountered and the reasons for your refund request.",
            "Any screenshots or documents supporting your request."
        ],
        "refund-policy-h4-4": "4. Review of Requests",
        "refund-policy-p-4-1": "We will review all refund requests carefully. You will be notified of the decision within 5 business days of receiving your request. If the refund is approved, the amount will be processed to the original payment method within 7-14 business days, depending on your payment processor's policies.",
        "refund-policy-h4-5": "5. Dispute Resolution",
        "refund-policy-p-5-1": "We encourage you to contact us directly in case of any issues or disputes before resorting to the payment processor or bank. We strive to resolve all issues amicably and fairly to ensure customer satisfaction.",
        "privacy-policy-title": "Privacy Policy",
        "privacy-policy-intro-p": "At \"Resail\", we are committed to protecting the privacy of your personal data. This policy explains how we collect, use, protect, and manage the information you provide to us when using our CV building services.",
        "privacy-policy-h4-1": "1. Information We Collect",
        "privacy-policy-list-1": [
            "<strong>CV Information:</strong> We collect information you directly enter into the CV creation forms, such as your full name, job title, email address, phone number, personal website/portfolio, career objective, work experience details, educational qualifications, skills, languages, and references. If you upload a profile picture, we also collect it.",
            "<strong>Contact and Payment Information:</strong> When you make a purchase, we collect your name, email, and phone number. Payment details (such as credit card numbers) are processed directly by secure external payment gateways (such as Lemon Squeezy/Stripe), and we do not store this sensitive information on our servers.",
            "<strong>Usage Data:</strong> We may collect information about how you access and use our service, such as IP address, browser type, pages visited, and time spent on each page. This data is used to improve the service and is not directly linked to your personal information."
        ],
        "privacy-policy-h4-2": "2. How We Use Your Information",
        "privacy-policy-p-2-1": "We use the information we collect for the following purposes:",
        "privacy-policy-list-2": [
            "To provide and customize the CV creation service for you.",
            "To process your payment transactions and provide you with the final product (PDF CV file).",
            "To improve and develop our services and features.",
            "To communicate with you regarding your use of the service, for technical support purposes, or to send important updates.",
            "To ensure compliance with legal and regulatory requirements."
        ],
        "privacy-policy-h4-3": "3. Information Sharing",
        "privacy-policy-p-3-1": "We do not sell, rent, or trade your personal information with third parties for marketing purposes. We may share your information with:",
        "privacy-policy-list-3": [
            "<strong>External Service Providers:</strong> Such as payment gateways (Lemon Squeezy/Stripe) and email processors, to the extent necessary to provide our services. These providers are obligated to maintain the confidentiality of your information.",
            "<strong>Legal Compliance:</strong> We may disclose your information if required by law or court order, or to protect our rights and interests or the rights of other users."
        ],
        "privacy-policy-h4-4": "4. Data Security",
        "privacy-policy-p-4-1": "We take reasonable and appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, you should be aware that no internet data transmission or electronic storage system is 100% secure.",
        "privacy-policy-h4-5": "5. Your Rights",
        "privacy-policy-p-5-1": "You have the right to access your personal data we hold, request correction of any inaccurate information, or request deletion of your data. To exercise these rights, please contact us via the email address provided below.",
        "privacy-policy-h4-6": "6. Modifications to Privacy Policy",
        "privacy-policy-p-6-1": "We reserve the right to modify or update this Privacy Policy from time to time. Any changes will be posted on this page, and your continued use of the service after the modifications are published constitutes your acceptance of the modified policy.",
        "privacy-policy-h4-7": "7. Contact Us",
        "privacy-policy-p-7-1": "For any questions or inquiries regarding the privacy policy, please contact us via email: <a href=\"mailto:ramyheshamamer@gmail.com\">ramyheshamamer@gmail.com</a>."
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

const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3MB
const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'application/pdf'];

// **عنوان URL لخادم Node.js الخاص بك**
// يجب تحديث هذا بـ IP الخادم الفعلي عند النشر (مثال: 'http://192.168.1.100:3000')
const NODE_SERVER_URL = 'https://cv-generator-service-627901029415.asia-east2.run.app';
//const NODE_SERVER_URL = 'http://localhost:8080';


// **عنوان URL لتطبيق Google Apps Script الخاص بك (الخاص بمعالجة الدفع فقط)**
const GOOGLE_APPS_SCRIPT_WEB_APP_URL_PAYMENT_PROCESSOR = 'https://script.google.com/macros/s/AKfycbxxkX4jsV4zSz4vR7FcCOhYJmXXuOAt5WrJYgZmhTlmO7dzqXARLM6q_5QNo2KVs8bWww/exec';

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

    if (isMobileDevice()) {
        document.body.classList.add('is-mobile');
    } else {
        document.body.classList.add('is-desktop');
    }

    if (submitPaymentProofButton) {
        submitPaymentProofButton.addEventListener('click', submitPaymentProof);
    }
    
    // إعادة تحميل PayPal SDK عند تحميل الصفحة
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
    // إعادة تحميل PayPal SDK عند تغيير اللغة
    loadPayPalSDK(currentLang);

    // **أضف هذا السطر:**
    // قم بإعادة تعبئة البيانات المترجمة إذا كانت في صفحة إدخال البيانات
    if (document.getElementById('cv-data-entry-page')?.classList.contains('active-page')) {
        populateWithTestData(); // ستقوم هذه الدالة بإعادة تعبئة الحقول بالبيانات المترجمة
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

function updatePageContentLanguage() {
    const isArabic = currentLang === 'ar';

    // تأكد من أن هذه الاستعلامات واسعة بما يكفي لتشمل جميع العناصر التي تحتاج إلى ترجمة
    // [data-translate] أُضيفت لأنها مستخدمة في الـ <ul> وفي الـ footer.
    const allTranslatableElements = document.querySelectorAll('[data-en], [data-ar], [data-translate-id], [data-translate]');

    if (loadingOverlayGlobal && loadingOverlayGlobal.style.display === 'flex' && loadingTextGlobal) {
        const currentMessageKey = loadingTextGlobal.getAttribute('data-current-key') || 'Generating CV, please wait...';
        loadingTextGlobal.textContent = translations[currentLang][currentMessageKey] || currentMessageKey;
    }

    allTranslatableElements.forEach(element => {
        let newContent = null; // يمكن أن يكون سلسلة نصية أو مصفوفة
        const translateIdKey = element.getAttribute('data-translate-id');
        const translateKey = element.getAttribute('data-translate');

        // الأولوية لـ data-translate-id، ثم data-translate، ثم data-en/data-ar
        if (translateIdKey && translations[currentLang] && translations[currentLang][translateIdKey] !== undefined) {
            newContent = translations[currentLang][translateIdKey];
        } else if (translateKey && translations[currentLang] && translations[currentLang][translateKey] !== undefined) {
            newContent = translations[currentLang][translateKey];
        } else {
            // هذا الجزء خاص بالعناصر التي تستخدم data-en/data-ar مباشرة كنصوص أو كمفاتيح
            const textKeyAttr = isArabic ? element.getAttribute('data-ar') : element.getAttribute('data-en');
            if (textKeyAttr) {
                // إذا كان data-ar/data-en يشير إلى مفتاح في كائن الترجمة
                if (translations[currentLang] && translations[currentLang][textKeyAttr] !== undefined) {
                    newContent = translations[currentLang][textKeyAttr];
                } else { // وإلا، استخدم قيمة السمة مباشرة
                    newContent = textKeyAttr;
                }
            }
        }

        if (newContent !== null) {
            // إذا كان المحتوى المترجم مصفوفة (للقوائم مثل UL)
            if (Array.isArray(newContent) && element.tagName === 'UL') {
                let listHtml = '';
                newContent.forEach(itemHtml => {
                    // نستخدم innerHTML هنا للحفاظ على وسوم HTML داخل عناصر القائمة (مثل <strong>)
                    listHtml += `<li>${itemHtml}</li>`;
                });
                element.innerHTML = listHtml; // نضع المحتوى الجديد في الـ UL
            }
            // إذا كان المحتوى المترجم سلسلة نصية
            else if (typeof newContent === 'string') {
                // نتحقق مما إذا كانت السلسلة تحتوي على وسوم HTML ونستخدم innerHTML إذا وجدت
                if (newContent.includes('<a href') || newContent.includes('<strong>')) {
                    element.innerHTML = newContent;
                } else {
                    // تجنب تعيين textContent للعناصر مثل img أو input أو textarea
                    // ترجمتها تتم عبر سمات placeholder/alt
                    if (element.tagName !== 'IMG' && element.tagName !== 'INPUT' && element.tagName !== 'TEXTAREA') {
                        element.textContent = newContent;
                    }
                }
            }
        }
    });

    // تحديث placeholder و alt - هذا الجزء يعمل بشكل صحيح ويجب الاحتفاظ به
    const placeholderElements = document.querySelectorAll('[data-en-placeholder], [data-ar-placeholder]');
    placeholderElements.forEach(element => {
        const placeholderKey = isArabic ? element.getAttribute('data-ar-placeholder') : element.getAttribute('data-en-placeholder');
        if (placeholderKey && translations[currentLang] && translations[currentLang][placeholderKey] !== undefined) {
            element.placeholder = translations[currentLang][placeholderKey];
        } else if (placeholderKey) { // Fallback to direct attribute value
            element.placeholder = placeholderKey;
        }
    });

    const altElements = document.querySelectorAll('[data-en-alt], [data-ar-alt]');
    altElements.forEach(element => {
        if (element.tagName === 'IMG') {
            const altKey = isArabic ? element.getAttribute('data-ar-alt') : element.getAttribute('data-en-alt');
            if (altKey && translations[currentLang] && translations[currentLang][altKey] !== undefined) {
                element.alt = translations[currentLang][altKey];
            } else if (altKey) { // Fallback to direct attribute value
                element.alt = altKey;
            }
        }
    });

    // معالجة روابط التذييل بشكل خاص لضمان ترجمة نص الرابط - هذا الجزء يعمل بشكل صحيح
    const footerLinks = document.querySelectorAll('footer .list-inline-item a');
    footerLinks.forEach(link => {
        const key = link.getAttribute('data-translate');
        if (key && translations[currentLang] && translations[currentLang][key] !== undefined) {
            link.textContent = translations[currentLang][key];
        }
    });

    // معالجة روابط البريد الإلكتروني في سياسات الخصوصية وشروط الخدمة - هذا الجزء يعمل بشكل صحيح
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

    // تحديث عرض السعر إذا كانت صفحة الدفع نشطة
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

// --- Payment Related Functions (for UI) ---
function openPaymentForCV_appsScript() {
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
        if (discounted === 0) {
            alert(currentLang === 'ar' ? 'هذه السيرة الذاتية مجانية! سيتم إرسالها قريباً إلى بريدك الإلكتروني.' : 'This CV is free! It will be sent to your email shortly.');
            // إذا كان مجانياً (خصم 100%)، نولّد PDF بدون علامة مائية ونرسله إلى Apps Script
            // هنا نرسل مباشرة للـ Apps Script (لأنه مجاني، لا حاجة لنموذج الدفع اليدوي)
            sendPaymentDataToAppsScript('Discounted/Free', selectedPriceToPay, true, null); // Method, Price, isPaid, file
            showPage('landing-page');
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
    if(paypalContainer) paypalContainer.style.display = "none";
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
        qrPaymentImage.src = "QRstcpay.png.webp";
        qrPaymentImage.alt = "STC Pay QR Code";
        qrPaymentImage.style.display = "block";
        manualPaymentForm.style.display = "block";
        if(submitBtn) submitBtn.style.display = "block";
    } else if (method.toLowerCase() === "rajhi") {
        qrPaymentImage.src = "QRalrajhi.png.webp";
        qrPaymentImage.alt = "Al Rajhi QR Code";
        qrPaymentImage.style.display = "block";
        manualPaymentForm.style.display = "block";
        if(submitBtn) submitBtn.style.display = "block";
    } else if (method.toLowerCase() === "paypal") {
        // إذا اختار PayPal، نعرض زر PayPal
        if(paypalContainer) {
            paypalContainer.style.display = "block";
            renderPayPalButton(finalPrice, templateCategory);
        }
        manualPaymentForm.style.display = "none"; // نخفي نموذج الدفع اليدوي لـ QR
        if(submitBtn) submitBtn.style.display = "none";
    }
    showPage('qr-manual-payment-page');
}

function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// loadPayPalSDK - استعادة تحميل PayPal SDK
function loadPayPalSDK(lang) {
    const existingScript = document.getElementById("paypal-sdk");
    if (existingScript) {
        existingScript.remove();
    }
    const script = document.createElement("script");
    script.id = "paypal-sdk";
    const locale = (lang === "ar") ? "ar_SA" : "en_US";
    // هذا Client ID هو لاختبار PayPal، يجب استبداله بـ Client ID الخاص بك في الإنتاج
    script.src = `https://www.paypal.com/sdk/js?client-id=Abhv3wUuFjO_XRoXoxJ0g3AyrUE3yExMtqp3TLUrK0N82SrBpxRk-kde3jyS-XmAeLEnbJiRds4w7aEr&currency=USD&locale=${locale}&disable-funding=card`;
    script.onload = () => {
        const paypalContainer = document.getElementById("paypal-button-container");
        const qrPage = document.getElementById('qr-manual-payment-page');
        if (qrPage && qrPage.classList.contains('active-page') && qrPage.getAttribute("data-payment-method") === "paypal") {
             const price = parseFloat(qrPage.getAttribute("data-price-paid")) || getDiscountedPrice();
             const category = qrPage.getAttribute("data-cv-template-category") || selectedTemplateCategory;
             renderPayPalButton(price, category);
        }
    };
    document.head.appendChild(script);
}

// renderPayPalButton - استعادة وعيادة ربطها بـ Apps Script
function renderPayPalButton(finalPrice, templateCategory) {
    const paypalContainer = document.getElementById("paypal-button-container");
    if (!paypalContainer) return;
    paypalContainer.innerHTML = ''; // مسح الأزرار القديمة

    if (typeof paypal === 'undefined') {
        console.warn("PayPal SDK not loaded. Retrying in 500ms.");
        setTimeout(() => renderPayPalButton(finalPrice, templateCategory), 500);
        return;
    }
    let amountUSD = parseFloat((finalPrice / 3.75).toFixed(2));
    if (amountUSD < 0.01 && finalPrice > 0) amountUSD = 0.01;
    else if (finalPrice === 0) amountUSD = 0;

    // إذا كان المبلغ صفرًا (خصم 100%)، لا حاجة لـ PayPal، استدعِ مباشرة إرسال البيانات
    if (amountUSD === 0) {
        alert(currentLang === 'ar' ? 'هذه السيرة الذاتية مجانية! سيتم إرسالها قريباً إلى بريدك الإلكتروني.' : 'This CV is free! It will be sent to your email shortly.');
        sendPaymentDataToAppsScript('PayPal (Free via Discount)', 0, true, null); // Method, Price, isPaid, file
        showPage('landing-page');
        return;
    }

    paypal.Buttons({
        createOrder: (data, actions) => {
            return actions.order.create({
                purchase_units: [{
                    amount: { value: amountUSD.toString(), currency_code: 'USD' },
                    description: `CV Service (${finalPrice} SAR)`
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
                const transactionId = details.id;

                // الخطوة 1: توليد PDF من Node.js بدون علامة مائية
                const pdfData = await generatePdfFromNode(true); // isPaid: true -> بدون علامة مائية

                if (!pdfData || !pdfData.base64Pdf) {
                    throw new Error('Failed to generate PDF from Node.js before sending to Apps Script.');
                }
                
                // الخطوة 2: إرسال تفاصيل PayPal + الـ PDF إلى Google Apps Script
                // يجب أن تتوافق أسماء الحقول تمامًا مع ما يتوقعه Apps Script (e.parameter)
                const formData = new URLSearchParams();
                formData.append('name', payerName);
                formData.append('email', payerEmail);
                formData.append('phoneNumber', document.getElementById('phone-input')?.value.trim() || ''); // قد تحتاج لسحبه من حقل الهاتف بالنموذج
                formData.append('pricePaid', finalPrice.toString());
                formData.append('paymentMethod', 'PayPal');
                formData.append('cvTemplateCategory', templateCategory);
                formData.append('discountCode', discountApplied > 0 ? Object.keys(discountCodes).find(key => discountCodes[key] === discountApplied) || 'CUSTOM_DISCOUNT' : 'N/A');
                formData.append('language', currentLang);
                formData.append('paypalTransactionId', transactionId); // معرف معاملة PayPal
                formData.append('cvPdfFileBase64', pdfData.base64Pdf); // الـ PDF بـ Base64
                formData.append('cvPdfFileName', `CV_${payerName.replace(/\s/g, '_') || 'ResailCV'}.pdf`); // اسم الملف للـ CV

                const response = await fetch(GOOGLE_APPS_SCRIPT_WEB_APP_URL_PAYMENT_PROCESSOR, {
                    method: 'POST',
                    body: formData,
                });
                
                const data = await response.json();

                if (data.status === 'success') {
                    alert(data.message || translations[currentLang]["CV generated successfully and sent!"]);
                } else {
                    throw new Error(data.error || data.message || 'Server error in Apps Script payment processing.');
                }
                showPage('landing-page');

            } catch (error) {
                console.error('Error in PayPal onApprove (client-side):', error);
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


// submitPaymentProof - هذا هو للدفع اليدوي (STC Pay / Al Rajhi)
async function submitPaymentProof(event) {
    event.preventDefault();
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
        const fileBase64 = file ? await fileToBase64(file) : null;
        const actualDiscountCodeStr = currentDiscountPercentage > 0 ? Object.keys(discountCodes).find(key => discountCodes[key] === currentDiscountPercentage) || 'CUSTOM_DISCOUNT' : 'N/A';

        // الخطوة 1: توليد PDF من Node.js بدون علامة مائية (isPaid: true)
        const pdfData = await generatePdfFromNode(true); 

        if (!pdfData || !pdfData.base64Pdf) {
            throw new Error('Failed to generate PDF from Node.js before sending to Apps Script.');
        }

        // الخطوة 2: إرسال جميع البيانات (بما في ذلك PDF) إلى Google Apps Script
        // هنا نقوم بتسطيح الكائن ليتناسب مع e.parameter
        const formData = new URLSearchParams();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phoneNumber', phoneNumber);
        formData.append('pricePaid', pricePaid); 
        formData.append('paymentMethod', paymentMethod);
        formData.append('cvTemplateCategory', cvTemplateCategory);
        formData.append('discountCode', actualDiscountCodeStr);
        formData.append('language', currentLang);
        formData.append('paymentFileBase64', fileBase64 || ''); // إيصال الدفع
        formData.append('paymentFileType', file?.type || '');
        formData.append('cvPdfFileBase64', pdfData.base64Pdf); // الـ PDF بـ Base64
        formData.append('cvPdfFileName', `CV_${name.replace(/\s/g, '_') || 'ResailCV'}.pdf`); // اسم الملف للـ CV

        const response = await fetch(GOOGLE_APPS_SCRIPT_WEB_APP_URL_PAYMENT_PROCESSOR, {
            method: 'POST',
            body: formData, 
        });
        
        const data = await response.json();

        if (data.status === 'success') {
            qrPaymentResultDiv.style.color = "green";
            qrPaymentResultDiv.textContent = data.message || (translations[currentLang]["payment-success"]);
            setTimeout(() => { showPage('landing-page'); }, 5000);
        } else {
            throw new Error(data.error || data.message || 'Server-side processing error in Apps Script.');
        }

    } catch (err) {
        console.error("Error in submitPaymentProof (client-side):", err);
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
    document.querySelectorAll('#skills-input .skill-item-input').forEach(input => {
        const skill = input.value.trim();
        if (skill) {
            skills.push(skill);
        }
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
 * دالة مركزية لتوليد PDF من Node.js Server.
 * @param {boolean} isPaid - هل الـ PDF بدون علامة مائية (مدفوع)؟
 * @returns {Promise<Object>} يحتوي على { status, base64Pdf, message }
 */
async function generatePdfFromNode(isPaid) {
    toggleLoadingOverlay(true, 'Generating CV, please wait...');

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
        isPaid: isPaid, // لتحديد ما إذا كان بعلامة مائية أم لا
        templateCss: getSelectedTemplateCss() // إرسال الـ CSS المحدد
    };

    try {
        const response = await fetch(`${NODE_SERVER_URL}/generate-cv`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cvData),
            mode: 'cors'
        });

        if (!response.ok) {
            const errorBody = await response.json().catch(() => ({ message: 'Unknown server error.' }));
            throw new Error(`Node.js server error: ${response.status} - ${errorBody.message}`);
        }

        const result = await response.json();
        if (result.status === 'success') {
            return result; // يحتوي على base64Pdf
        } else {
            throw new Error(result.message || 'Error from Node.js server.');
        }
    } catch (error) {
        console.error("Error generating PDF from Node.js:", error);
        alert(translations[currentLang]['Error generating PDF for CV.'] + ` (${error.message})`);
        return null;
    } finally {
        toggleLoadingOverlay(false);
    }
}

/**
 * دالة لإرسال بيانات الدفع والـ PDF إلى Google Apps Script.
 * هذه الدالة تجمع بيانات الدفع من النموذج الحالي بالإضافة إلى الـ PDF Base64.
 * @param {string} paymentMethod - طريقة الدفع (مثال: 'PayPal', 'STC Pay', 'Al Rajhi', 'Discounted/Free').
 * @param {number} pricePaid - المبلغ المدفوع.
 * @param {boolean} isPaid - هل الـ PDF بدون علامة مائية؟
 * @param {File|null} paymentFile - ملف الإيصال (للدفع اليدوي)، أو null لـ PayPal.
 */
async function sendPaymentDataToAppsScript(paymentMethod, pricePaid, isPaid, paymentFile) {
    toggleLoadingOverlay(true, 'Payment processing, please wait...');

    const name = document.getElementById('payment-name')?.value.trim() || document.getElementById('name-input')?.value.trim();
    const email = document.getElementById('payment-email')?.value.trim() || document.getElementById('email-input')?.value.trim();
    const phoneNumber = document.getElementById('payment-phone')?.value.trim() || document.getElementById('phone-input')?.value.trim();

    // التحقق من البريد الإلكتروني
    if (!email || !validateEmail(email)) {
        alert(translations[currentLang]['Please enter a valid email.']);
        toggleLoadingOverlay(false); return;
    }

    let fileBase64 = null;
    if (paymentFile) {
        if (paymentFile.size > MAX_FILE_SIZE) {
            alert(translations[currentLang]['File size exceeds the limit (3MB).']);
            toggleLoadingOverlay(false); return;
        }
        if (!ALLOWED_FILE_TYPES.includes(paymentFile.type)) {
            alert(translations[currentLang]['Please attach only image or PDF files.']);
            toggleLoadingOverlay(false); return;
        }
        fileBase64 = await fileToBase64(paymentFile);
    }

    try {
        const actualDiscountCodeStr = discountApplied > 0 ? Object.keys(discountCodes).find(key => discountCodes[key] === discountApplied) || 'CUSTOM_DISCOUNT' : 'N/A';

        // الخطوة 1: توليد PDF من Node.js بدون علامة مائية
        const pdfData = await generatePdfFromNode(isPaid); 

        if (!pdfData || !pdfData.base64Pdf) {
            throw new Error('Failed to generate PDF from Node.js before sending to Apps Script.');
        }

        // الخطوة 2: إرسال جميع البيانات (بما في ذلك PDF) إلى Google Apps Script
        const formData = new URLSearchParams();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phoneNumber', phoneNumber);
        formData.append('pricePaid', pricePaid.toString()); 
        formData.append('paymentMethod', paymentMethod);
        formData.append('cvTemplateCategory', selectedTemplateCategory); // استخدام الفئة المختارة عالمياً
        formData.append('discountCode', actualDiscountCodeStr);
        formData.append('language', currentLang);
        formData.append('paymentFileBase64', fileBase64 || ''); // إيصال الدفع
        formData.append('paymentFileType', paymentFile?.type || '');
        formData.append('cvPdfFileBase64', pdfData.base64Pdf); // الـ PDF بـ Base64
        formData.append('cvPdfFileName', `CV_${name.replace(/\s/g, '_') || 'ResailCV'}.pdf`); // اسم الملف للـ CV

        // إذا كان هناك تفاصيل PayPal إضافية (من onApprove)، أضفها هنا
        // هذا الجزء يفترض أننا لم نقم بتمرير تفاصيل PayPal المعقدة عبر هذه الدالة،
        // بل تم التعامل معها مباشرة في دالة renderPayPalButton->onApprove.
        // إذا كنت تريد دالة sendPaymentDataToAppsScript أن تكون عامة لمعالجة كل شيء
        // بما في ذلك تفاصيل PayPal الكاملة، فستحتاج لتعديل هذه الدالة لاستقبالها.
        // ولكن بناءً على التدفق الحالي، تفاصيل PayPal تمر مباشرة من onApprove.


        const response = await fetch(GOOGLE_APPS_SCRIPT_WEB_APP_URL_PAYMENT_PROCESSOR, {
            method: 'POST',
            body: formData, 
        });
        
        const data = await response.json();

        if (data.status === 'success') {
            alert(data.message || translations[currentLang]["payment-success"]);
            showPage('landing-page');
        } else {
            throw new Error(data.error || data.message || 'Server-side processing error in Apps Script.');
        }

    } catch (err) {
        console.error("Error in sendPaymentDataToAppsScript (client-side):", err);
        alert(translations[currentLang]["Error processing file."] || "Error: ") + err.message;
    } finally {
        toggleLoadingOverlay(false);
    }
}


// استبدال استدعاءات توليد الـ PDF القديمة في ملف index.html
// هذا الزر في صفحة المعاينة (تنزيل PDF (مباشر))
document.querySelector('#cv-preview-page .btn-info.ms-3').onclick = async function() {
    const pdfData = await generatePdfFromNode(false); // isPaid: false -> مع علامة مائية
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
    const previews = document.querySelectorAll('.template-preview-container .template-preview');
    previews.forEach(preview => preview.classList.remove('selected-template'));

    const selectedPreview = document.querySelector(`.template-preview[data-template-category="${category}"][onclick*="selectTemplate(${templateNumber}, '${category}')"]`);
    if (selectedPreview) {
        selectedPreview.classList.add('selected-template');
    }
    selectedTemplate = templateNumber;
    selectedTemplateCategory = category;
    generateCV(cvContainer); // تبقى هذه الدالة لتحديث المعاينة على الشاشة
}

function handleProfilePicChange(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            profilePicDataUrl = e.target.result;
            generateCV(cvContainer); updateProgress();
        };
        reader.readAsDataURL(file);
    } else {
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
}
function removeLastEducationField() { 
    const educationInput = document.getElementById('education-input');
    if (!educationInput) return;
    const entries = educationInput.querySelectorAll('.education-entry');
    if (entries.length > 1) {
        educationInput.removeChild(entries[entries.length - 1]);
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
}
function removeLastSkillField() {
    const skillsInput = document.getElementById('skills-input');
    if (!skillsInput) return;
    const entries = skillsInput.querySelectorAll('.skill-entry');
    if (entries.length > 1) {
        skillsInput.removeChild(entries[entries.length - 1]);
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
}
function removeLastLanguageField() {
    const languagesInput = document.getElementById('languages-input');
    if (!languagesInput) return;
    const entries = languagesInput.querySelectorAll('.language-entry');
    if (entries.length > 1) {
        languagesInput.removeChild(entries[entries.length - 1]);
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
        <input type="email" placeholder="البريد" data-en-placeholder="Email" class="reference-email" oninput="generateCV(cvContainer); updateProgress()">
    `;
    referencesInput.appendChild(newEntry);
}
function removeLastReferenceField() {
    const referencesInput = document.getElementById('references-input');
    if (!referencesInput) return;
    const entries = referencesInput.querySelectorAll('.reference-entry');
    if (entries.length > 1) {
        referencesInput.removeChild(entries[entries.length - 1]);
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
    generateCV(cvContainer); updateProgress();
}

/**
 * Generates or updates the HTML content of the CV within the specified target element.
 * هذه الدالة تستخدم فقط لعرض المعاينة على الشاشة.
 * @param {HTMLElement} targetElement The DOM element to populate with CV content.
 */
function generateCV(targetElement) {
    if (!targetElement) {
        console.error("[generateCV] Target element for CV generation is null or undefined!");
        return;
    }

    const isArabic = currentLang === 'ar';
    const direction = isArabic ? 'rtl' : 'ltr';

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
    if (website) { contactInfoHTML += `<div class="cv-contact-item"><i class="fas fa-map-marker-alt"></i><p>${website}</p></div>`; hasContactInfo = true; }
    contactInfoHTML += '</div>';
    if (!hasContactInfo) contactInfoHTML = '';

    const objectiveHTML = objective ? `<div class="cv-section" id="objective"><h3 class="cv-section-title">${translations[currentLang]['Career Objective']}</h3><p>${objective.replace(/\n/g, '<br>')}</p></div>` : '';

    let experienceHTML = '';
    const experienceEntries = getExperiencesData(); // استخدام الدالة الجديدة
    if (experienceEntries.length > 0) {
        experienceHTML = `<div class="cv-section" id="experience"><h3 class="cv-section-title">${translations[currentLang]['Work Experience']}</h3>`;
        experienceEntries.forEach(entry => {
            const expTitle = entry.title || '';
            const company = entry.company || '';
            const duration = entry.duration || '';
            const desc = entry.description || '';
            if (expTitle || company || duration || desc) {
                 experienceHTML += `<div class="cv-experience-item">
                                    <h4 class="cv-job-title">${expTitle || translations[currentLang]['No Title']}</h4>
                                    ${company || duration ? `<h5 class="cv-company">${company}${company && duration ? ' - ' : ''}${duration}</h5>` : ''}
                                    ${desc ? `<p>${desc.replace(/\n/g, '<br>')}</p>` : ''}
                                 </div>`;
            }
        });
        experienceHTML += '</div>';
    }

    let educationHTML = '';
    const educationEntries = getEducationsData(); // استخدام الدالة الجديدة
    if (educationEntries.length > 0) {
        educationHTML = `<div class="cv-section" id="education"><h3 class="cv-section-title">${translations[currentLang]['Education']}</h3>`;
        educationEntries.forEach(entry => {
            const degree = entry.degree || '';
            const institution = entry.institution || '';
            const duration = entry.duration || '';
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
    const filledSkills = getSkillsData(); // استخدام الدالة الجديدة
    if (filledSkills.length > 0) {
        const useSingleColumnSkills = (selectedTemplateCategory !== 'normal' && filledSkills.length <= 5 && selectedTemplateCategory !== 'professional') || (selectedTemplateCategory === 'professional' && filledSkills.length <=3) || (selectedTemplateCategory === 'normal');
        skillsHTML = `<div class="cv-section" id="skills"><h3 class="cv-section-title">${translations[currentLang]['Skills']}</h3><ul class="cv-skill-list ${useSingleColumnSkills ? 'single-column' : ''}">`;
        filledSkills.forEach(skill => { skillsHTML += `<li class="cv-skill-item">${skill}</li>`; });
        skillsHTML += '</ul></div>';
    }

    let languagesHTML = '';
    const filledLanguages = getLanguagesData(); // استخدام الدالة الجديدة
    if (filledLanguages.length > 0) {
        languagesHTML = `<div class="cv-section" id="languages"><h3 class="cv-section-title">${translations[currentLang]['Languages']}</h3><ul class="cv-language-list">`;
        filledLanguages.forEach(lang => { languagesHTML += `<li>${lang}</li>`; });
        languagesHTML += '</ul></div>';
    }
    
    let referencesHTML = '';
    const referenceEntries = getReferencesData(); // استخدام الدالة الجديدة
    if (referenceEntries.length > 0) {
        referencesHTML = `<div class="cv-section" id="references"><h3 class="cv-section-title">${translations[currentLang]['References']}</h3>`;
        referenceEntries.forEach(entry => {
            const refName = entry.name || '';
            const position = entry.position || '';
            const phoneNum = entry.phone || '';
            const refEmailVal = entry.email || ''; 
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
    // هذه الأنماط فقط للمعاينة على الشاشة، لا تؤثر على PDF المولّد من Apps Script
    Object.assign(cvContentDiv.style, {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: '1',
        minHeight: '100%',
        height: '100%', 
        overflow: 'visible' 
    });


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
        // الأنماط هنا هي فقط للمعاينة على الشاشة، وليست للـ PDF النهائي
        Object.assign(layoutDiv.style, {
            display: (selectedTemplateCategory === 'professional') ? 'grid' : 'flex',
            flexGrow: '1',
            minHeight: '100%',
            height: '100%',
            overflow: 'visible'
        });


        const sidebarDiv = document.createElement('div');
        sidebarDiv.className = 'cv-sidebar';
        sidebarDiv.dir = direction;
        Object.assign(sidebarDiv.style, { flexGrow: '1', minHeight: '1px', overflow: 'visible', display: 'flex', flexDirection: 'column' });
        
        const mainContentDiv = document.createElement('div');
        mainContentDiv.className = 'cv-main-content';
        mainContentDiv.dir = direction;
        Object.assign(mainContentDiv.style, { flexGrow: '1', minHeight: '1px', overflow: 'visible', display: 'flex', flexDirection: 'column' });


        if (selectedTemplateCategory === 'professional') {
            const professionalHeader = document.createElement('div');
            professionalHeader.className = 'cv-header professional-layout';
            professionalHeader.dir = direction;
            Object.assign(professionalHeader.style, { gridArea: 'header' }); // Assign grid area here

            let proHeaderPicHTML = '';
            if (profilePicDataUrl && (selectedTemplate === 1 || selectedTemplate === 2 )) {
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

            // For professional layout, append in logical grid order
            layoutDiv.appendChild(sidebarDiv); // Sidebar always comes first in DOM for grid-area to align it visually left
            layoutDiv.appendChild(mainContentDiv);

        } else { // Standard and AST layouts (flexbox based)
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

            // For Standard/AST, *always* append sidebar first in DOM
            // CSS (flex-direction: row-reverse) will handle visual reordering for RTL
            layoutDiv.appendChild(sidebarDiv);
            layoutDiv.appendChild(mainContentDiv);
        }
        cvContentDiv.appendChild(layoutDiv);
    }
    targetElement.appendChild(cvContentDiv);
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
    const nameInput = document.getElementById('name-input');
    const titleInput = document.getElementById('title-input');
    const emailInput = document.getElementById('email-input');
    const phoneInput = document.getElementById('phone-input');
    const websiteInput = document.getElementById('website-input');
    const objectiveInput = document.getElementById('objective-input');

    if(websiteInput) websiteInput.value = currentLang === 'ar' ? 'المملكة العربية السعودية' : 'Saudi Arabia';
    
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
            if (type === 'experience') { addExperienceField(); addExperienceField(); }
            else if (type === 'education') { addEducationField(); addEducationField(); }
            else if (type === 'skills') { addSkillField(); addSkillField(); addSkillField(); addSkillField(); addSkillField(); }
            else if (type === 'languages') { addLanguageField(); addLanguageField(); }
            else if (type === 'references') { addReferenceField(); addReferenceField(); }
        }
    });
    
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

    generateCV(cvContainer);
    updateProgress();
}
