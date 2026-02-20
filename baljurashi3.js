// البحث عن الزر وعنوان الصفحة (اسم المدينة)
const cityBtn = document.getElementById('cityBtn');
const cityTitle = document.querySelector('h1') ? document.querySelector('h1').innerText : '';

// رسالة افتراضية
let customMessage = 'مرحباً بك في مشروعنا! استمتع باكتشاف التراث والطبيعة.';

// تحديد الرسالة بناءً على اسم المدينة في الصفحة
if (cityTitle.includes('الباحة')) {
    customMessage = 'مرحباً بك في الباحة! تنفس هواء غابة رغدان النقي واستمتع بسحر الطبيعة.';
} else if (cityTitle.includes('بلجرشي')) {
    customMessage = 'أهلاً بك في بلجرشي! عاصمة التجارة وموطن سوق السبت التاريخي.';
} else if (cityTitle.includes('المندق')) {
    customMessage = 'هل تشعر بالبرودة؟ أنت الآن في المندق، مدينة الضباب والصحة العالمية!';
} else if (cityTitle.includes('القرى')) {
    customMessage = 'مرحباً بك في القرى! بوابة الباحة الشمالية وموطن المدرجات الخضراء والرمان.';
} else if (cityTitle.includes('العقيق')) {
    customMessage = 'أهلاً بك في العقيق! بوابة الباحة الجوية وأرض النخيل والسهول الواسعة.';
}

// تفعيل الزر
if (cityBtn) {
    cityBtn.addEventListener('click', () => {
        // التأكد إن الرسالة ما طلعت من قبل عشان ما تتكرر
        if (document.getElementById('inlineMessage')) return;

        // إنشاء مربع جديد للرسالة داخل الصفحة
        const msgBox = document.createElement('div');
        msgBox.id = 'inlineMessage';
        msgBox.textContent = customMessage;
        
        // تنسيق المربع الجديد عشان يناسب الفخامة (بدون ما تحتاج تعدل ملف الـ CSS)
        msgBox.style.backgroundColor = 'rgba(226, 199, 117, 0.15)';
        msgBox.style.color = '#e2c775';
        msgBox.style.padding = '20px';
        msgBox.style.marginTop = '15px';
        msgBox.style.borderRadius = '12px';
        msgBox.style.border = '1px dashed #e2c775';
        msgBox.style.fontSize = '1.2rem';
        msgBox.style.fontWeight = 'bold';
        msgBox.style.textAlign = 'center';
        msgBox.style.transition = 'all 0.5s ease';
        
        // تأثير ظهور ناعم
        msgBox.style.opacity = '0';
        
        // إضافة المربع تحت الزر مباشرة
        cityBtn.parentNode.insertBefore(msgBox, cityBtn.nextSibling);
        
        // إخفاء الزر وإظهار الرسالة
        cityBtn.style.display = 'none';
        setTimeout(() => {
            msgBox.style.opacity = '1';
        }, 50);
    });
}