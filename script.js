function toggleLanguage() {
    const isArabic = document.body.getAttribute('data-language') === 'ar';
    const translations = {
        en: {
            title: '🏢 polytechnic Building Information',
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








let scale = 1;
let mapImage = document.getElementById('map-image');
let isPanning = false;
let startX, startY, offsetX = 0, offsetY = 0, initialOffsetX = 0, initialOffsetY = 0;
let initialDistance = 0;
let animationFrameId = null;

// Zoom to a specific location (from table button click)
function scrollToMap() {
    const mapContainer = document.querySelector('.map');
    if (mapContainer) {
        mapContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// Zoom to a specific location (from table button click)
function zoomToLocation(x, y, zoomLevel) {
    console.log(`Zooming to location: ${x}, ${y} with zoom level: ${zoomLevel}`);

    scale = zoomLevel;

    // Map dimensions
    const mapWidth = 2481;  // Full map width
    const mapHeight = 3508; // Full map height

    // Center of the image
    const imageWidth = mapImage.naturalWidth;
    const imageHeight = mapImage.naturalHeight;

    // Calculate the scaled coordinates
    const scaledX = (x * scale) - (mapWidth / 2) + (imageWidth / 2);
    const scaledY = (y * scale) - (mapHeight / 2) + (imageHeight / 2);

    // Apply transform with adjusted offsets
    mapImage.style.transform = `translate(${scaledX}px, ${scaledY}px) scale(${scale})`;

    // Scroll the map container into view
    scrollToMap();
}

// Reset zoom to default
function resetZoom() {
    scale = 1;
    offsetX = 0;
    offsetY = 0;
    mapImage.style.transform = `translate(0px, 0px) scale(1)`;
}

// Handle mouse events for smooth panning
mapImage.addEventListener('mousedown', (e) => {
    if (e.button === 0) { // Left-click
        isPanning = true;
        startX = e.clientX;
        startY = e.clientY;
        initialOffsetX = offsetX;
        initialOffsetY = offsetY;
        mapImage.style.cursor = 'grabbing';
    }
});

mapImage.addEventListener('mousemove', (e) => {
    if (!isPanning) return;
    cancelAnimationFrame(animationFrameId);

    offsetX = initialOffsetX + (e.clientX - startX);
    offsetY = initialOffsetY + (e.clientY - startY);

    animationFrameId = requestAnimationFrame(() => {
        mapImage.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
    });
});

mapImage.addEventListener('mouseup', () => {
    isPanning = false;
    mapImage.style.cursor = 'grab';
    cancelAnimationFrame(animationFrameId);
});

mapImage.addEventListener('mouseleave', () => {
    isPanning = false;
    mapImage.style.cursor = 'grab';
    cancelAnimationFrame(animationFrameId);
});

// Handle touch events for smooth panning and zooming
mapImage.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
        isPanning = true;
        startX = e.touches[0].clientX - offsetX;
        startY = e.touches[0].clientY - offsetY;
    } else if (e.touches.length === 2) {
        isPanning = false;
        initialDistance = getDistance(e.touches);
    }
});

mapImage.addEventListener('touchmove', (e) => {
    e.preventDefault();
    if (e.touches.length === 1 && isPanning) {
        cancelAnimationFrame(animationFrameId);

        offsetX = e.touches[0].clientX - startX;
        offsetY = e.touches[0].clientY - startY;

        animationFrameId = requestAnimationFrame(() => {
            mapImage.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
        });
    } else if (e.touches.length === 2) {
        let currentDistance = getDistance(e.touches);
        let zoomDelta = currentDistance / initialDistance;
        scale = Math.min(Math.max(0.5, scale * zoomDelta), 3); // Limit zoom
        mapImage.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
        initialDistance = currentDistance;
    }
});

mapImage.addEventListener('touchend', () => {
    isPanning = false;
    cancelAnimationFrame(animationFrameId);
});

// Helper function to calculate the distance between two touch points
function getDistance(touches) {
    let dx = touches[0].clientX - touches[1].clientX;
    let dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
}

// Handle mouse wheel for zooming
mapImage.addEventListener('wheel', (e) => {
    e.preventDefault();
    let zoomDelta = e.deltaY * -0.01; // Zoom in/out speed
    scale = Math.min(Math.max(0.5, scale + zoomDelta), 3); // Limit zoom range
    mapImage.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
});



function adjustMapContainer() {
    const mapImage = document.getElementById('map-image');
    const mapContainer = document.querySelector('.map');

    if (mapImage && mapContainer) {
        const imageWidth = mapImage.naturalWidth;
        const imageHeight = mapImage.naturalHeight;

        const aspectRatio = imageWidth / imageHeight;
        const containerWidth = mapContainer.clientWidth;
        const containerHeight = containerWidth / aspectRatio;

        mapContainer.style.height = `${containerHeight}px`;
    }
}

// Call this function after the image is loaded
window.onload = adjustMapContainer;









// Initialize language based on the current setting
document.addEventListener('DOMContentLoaded', () => {
    const currentLanguage = document.body.getAttribute('data-language') || 'en';
    if (currentLanguage === 'ar') {
        toggleLanguage(); // Set initial language to Arabic
    }
});