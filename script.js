function toggleLanguage() {
    const isArabic = document.body.getAttribute('data-language') === 'ar';
    const translations = {
        en: {
            title: '🏢 Building Information',
            headers: ['🏛️ Building Number', '📋 Description/Usage'],
            cells: {
                'مختبرات تكنولوجيا المعلومات 🖥️': 'IT Labs 🖥️',
                'الأكاديميات، التسجيل، مركز معلومات الطلاب، الفصول الدراسية 📚': 'Academics, Registry, Student Information Centre, Classrooms 📚',
                'خدمات تكنولوجيا المعلومات 🛠️': 'ICT Services 🛠️',
                'الفصول الدراسية، الخزائن 🏫': 'Classrooms, Lockers 🏫',
                'الموارد البشرية، المالية، مختبرات تكنولوجيا المعلومات، الفصول الدراسية، الموظفون، الخزائن 🏢': 'HR, Finance, IT Labs, Classrooms, Corporate Staff, Lockers 🏢',
                'قاعة البحرين 🌟': 'Bahrain Hall 🌟',
                'الرياضة، العيادة الطبية 💪🏥': 'Gym, Medical Clinic 💪🏥',
                'مساحة الحرم الجامعي العامة 🌳': 'General campus space 🌳',
                'مركز تعلم المكتبة، الفصول الدراسية، الخزائن 📖': 'Library Learning Centre, Classrooms, Lockers 📖',
                'ورش الهندسة، مكان الصلاة ⚙️🙏': 'Engineering Workshops, Prayer Space ⚙️🙏',
                'BPSC، مختبرات الهندسة، الأنشطة الطلابية، الخزائن، المسجد 🕌': 'BPSC, Engineering Labs, Student Activities, Lockers, Mosque 🕌',
                'مساحة الحرم الجامعي العامة (كابينة 26-A: مطعم واحة البشاير 🍴)': 'General campus space (Cabin 26-A: Wahat Al-Bashayer Cafeteria 🍴)',
                'قريب من ديربي كوفي ☕': 'Located near Derby Coffee ☕',
                'ورش الهندسة، الخزائن، ديربي كوفي ⚙️☕': 'Engineering Workshops, Lockers, Derby Coffee ⚙️☕',
                'ورشة مع خزائن 🔧': 'Workshop with Lockers 🔧',
                'مختبرات تكنولوجيا المعلومات، ورش الهندسة، الخزائن 🖥️⚙️': 'IT Labs, Engineering Workshops, Lockers 🖥️⚙️',
                'مكتب خدمات الأمن، تخصيص الخزائن 🔒': 'Security Services Office, Locker Allocation 🔒',
                'كابينة الأمن 🛡️': 'Security Cabin 🛡️',
                'العيادة الطبية (مركز الصحة والعافية 🏥)': 'Medical Clinic (Health and Wellness Centre 🏥)'
            }
        },
        ar: {
            title: '🏢 معلومات المباني',
            headers: ['🏛️ رقم المبنى', '📋 الوصف / الاستخدام'],
            cells: {
                'IT Labs 🖥️': 'مختبرات تكنولوجيا المعلومات 🖥️',
                'Academics, Registry, Student Information Centre, Classrooms 📚': 'الأكاديميات، التسجيل، مركز معلومات الطلاب، الفصول الدراسية 📚',
                'ICT Services 🛠️': 'خدمات تكنولوجيا المعلومات 🛠️',
                'Classrooms, Lockers 🏫': 'الفصول الدراسية، الخزائن 🏫',
                'HR, Finance, IT Labs, Classrooms, Corporate Staff, Lockers 🏢': 'الموارد البشرية، المالية، مختبرات تكنولوجيا المعلومات، الفصول الدراسية، الموظفون، الخزائن 🏢',
                'Bahrain Hall 🌟': 'قاعة البحرين 🌟',
                'Gym, Medical Clinic 💪🏥': 'الرياضة، العيادة الطبية 💪🏥',
                'General campus space 🌳': 'مساحة الحرم الجامعي العامة 🌳',
                'Library Learning Centre, Classrooms, Lockers 📖': 'مركز تعلم المكتبة، الفصول الدراسية، الخزائن 📖',
                'Engineering Workshops, Prayer Space ⚙️🙏': 'ورش الهندسة، مكان الصلاة ⚙️🙏',
                'BPSC, Engineering Labs, Student Activities, Lockers, Mosque 🕌': 'BPSC، مختبرات الهندسة، الأنشطة الطلابية، الخزائن، المسجد 🕌',
                'General campus space (Cabin 26-A: Wahat Al-Bashayer Cafeteria 🍴)': 'مساحة الحرم الجامعي العامة (كابينة 26-A: مطعم واحة البشاير 🍴)',
                'Located near Derby Coffee ☕': 'قريب من ديربي كوفي ☕',
                'Engineering Workshops, Lockers, Derby Coffee ⚙️☕': 'ورش الهندسة، الخزائن، ديربي كوفي ⚙️☕',
                'Workshop with Lockers 🔧': 'ورشة مع خزائن 🔧',
                'IT Labs, Engineering Workshops, Lockers 🖥️⚙️': 'مختبرات تكنولوجيا المعلومات، ورش الهندسة، الخزائن 🖥️⚙️',
                'Security Services Office, Locker Allocation 🔒': 'مكتب خدمات الأمن، تخصيص الخزائن 🔒',
                'Security Cabin 🛡️': 'كابينة الأمن 🛡️',
                'Medical Clinic (Health and Wellness Centre 🏥)': 'العيادة الطبية (مركز الصحة والعافية 🏥)'
            }
        }
    };

    const lang = isArabic ? 'en' : 'ar';
    document.body.setAttribute('data-language', lang);

    document.getElementById('toggle-language').textContent = isArabic ? '🔄 العربية' : '🔄 English';
    document.querySelector('.table-title').textContent = translations[lang].title;
    document.querySelectorAll('.styled-table th').forEach((th, index) => {
        th.textContent = translations[lang].headers[index];
    });
    document.querySelectorAll('.styled-table td').forEach(td => {
        td.textContent = translations[lang].cells[td.textContent] || td.textContent;
    });
}

// Initialize language based on the current setting
document.addEventListener('DOMContentLoaded', () => {
    const currentLanguage = document.body.getAttribute('data-language') || 'en';
    if (currentLanguage === 'ar') {
        toggleLanguage(); // Set initial language to Arabic
    }
});
