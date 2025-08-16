// critical.js
document.addEventListener('DOMContentLoaded', function() {
    // هذا الكود ضروري لبناء قائمة قوالب السيرة الذاتية عند تحميل الصفحة
    const templates = [
        { id: 'classic', name: 'الكلاسيكي', thumb: 'thumbnails/classic.png.webp' },
        { id: 'modern', name: 'العصري', thumb: 'thumbnails/modern.png.webp' },
        { id: 'creative', name: 'الإبداعي', thumb: 'thumbnails/creative.png.webp' },
        { id: 'professional', name: 'الاحترافي', thumb: 'thumbnails/professional.png.webp' },
        { id: 'elegant', name: 'الأنيق', thumb: 'thumbnails/elegant.png.webp' },
        { id: 'minimalist', name: 'البسيط', thumb: 'thumbnails/minimalist.png.webp' },
        { id: 'bold', name: 'الجريء', thumb: 'thumbnails/bold.png.webp' },
        { id: 'academic', name: 'الأكاديمي', thumb: 'thumbnails/academic.png.webp' },
        { id: 'technical', name: 'التقني', thumb: 'thumbnails/technical.png.webp' },
        { id: 'artistic', name: 'الفني', thumb: 'thumbnails/artistic.png.webp' }
    ];

    const templateSelectionContainer = document.getElementById('template-previews');
    if (templateSelectionContainer) {
        let templateHTML = '';
        templates.forEach(template => {
            templateHTML += `
                <div class="template-preview" data-template-id="${template.id}" tabindex="0" role="button" aria-label="اختر قالب ${template.name}">
                    <img src="${template.thumb}" alt="${template.name}" loading="lazy" width="300" height="424">
                    <p class="template-name">${template.name}</p>
                </div>
            `;
        });
        templateSelectionContainer.innerHTML = templateHTML;
    }
});
