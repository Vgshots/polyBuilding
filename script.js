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









// Variables for both maps
const maps = [
    {
        image: document.getElementById('map-image'),
        scale: 1,
        isPanning: false,
        startX: 0, startY: 0, offsetX: 0, offsetY: 0, initialOffsetX: 0, initialOffsetY: 0,
        initialDistance: 0,
        animationFrameId: null,
    },
    {
        image: document.getElementById('second-map-image'),
        scale: 1,
        isPanning: false,
        startX: 0, startY: 0, offsetX: 0, offsetY: 0, initialOffsetX: 0, initialOffsetY: 0,
        initialDistance: 0,
        animationFrameId: null,
    }
];

// Helper function to handle map transformations
function updateMapTransform(mapIndex) {
    const map = maps[mapIndex];
    map.image.style.transform = `translate(${map.offsetX}px, ${map.offsetY}px) scale(${map.scale})`;
}

// Reset zoom for a specific map
function resetZoom(mapIndex) {
    const map = maps[mapIndex];
    map.scale = 1;
    map.offsetX = 0;
    map.offsetY = 0;
    updateMapTransform(mapIndex);
}

// Handle mouse events for panning
function handleMouseDown(e, mapIndex) {
    if (e.button === 0) { // Left-click
        const map = maps[mapIndex];
        map.isPanning = true;
        map.startX = e.clientX;
        map.startY = e.clientY;
        map.initialOffsetX = map.offsetX;
        map.initialOffsetY = map.offsetY;
        map.image.style.cursor = 'grabbing';
    }
}

function handleMouseMove(e, mapIndex) {
    const map = maps[mapIndex];
    if (!map.isPanning) return;

    map.offsetX = map.initialOffsetX + (e.clientX - map.startX);
    map.offsetY = map.initialOffsetY + (e.clientY - map.startY);

    // Throttle the update to reduce lag
    if (map.animationFrameId) cancelAnimationFrame(map.animationFrameId);
    map.animationFrameId = requestAnimationFrame(() => updateMapTransform(mapIndex));
}

function handleMouseUp(e, mapIndex) {
    const map = maps[mapIndex];
    map.isPanning = false;
    map.image.style.cursor = 'grab';
    cancelAnimationFrame(map.animationFrameId);
}

function handleMouseLeave(e, mapIndex) {
    const map = maps[mapIndex];
    map.isPanning = false;
    map.image.style.cursor = 'grab';
    cancelAnimationFrame(map.animationFrameId);
}

// Handle touch events for panning and zooming
function handleTouchStart(e, mapIndex) {
    const map = maps[mapIndex];
    if (e.touches.length === 1) {
        map.isPanning = map.scale > 1; // Only enable panning if zoomed in
        map.startX = e.touches[0].clientX - map.offsetX;
        map.startY = e.touches[0].clientY - map.offsetY;
    } else if (e.touches.length === 2) {
        map.isPanning = false;
        map.initialDistance = getDistance(e.touches);
    }
}

function handleTouchMove(e, mapIndex) {
    const map = maps[mapIndex];
    if (e.touches.length === 1 && map.isPanning) {
        e.preventDefault(); // Prevent default scrolling behavior

        map.offsetX = e.touches[0].clientX - map.startX;
        map.offsetY = e.touches[0].clientY - map.startY;

        // Throttle the update to reduce lag
        if (map.animationFrameId) cancelAnimationFrame(map.animationFrameId);
        map.animationFrameId = requestAnimationFrame(() => updateMapTransform(mapIndex));
    } else if (e.touches.length === 2) {
        let currentDistance = getDistance(e.touches);
        let zoomDelta = currentDistance / map.initialDistance;
        map.scale = Math.min(Math.max(1, map.scale * zoomDelta), 3); // Limit zoom to 1x to 3x
        updateMapTransform(mapIndex);
        map.initialDistance = currentDistance;
    }
}

function handleTouchEnd(e, mapIndex) {
    const map = maps[mapIndex];
    map.isPanning = false;
    cancelAnimationFrame(map.animationFrameId);
}

// Handle mouse wheel for zooming
function handleWheel(e, mapIndex) {
    e.preventDefault();
    const map = maps[mapIndex];
    let zoomDelta = e.deltaY * -0.01; // Zoom in/out speed
    map.scale = Math.min(Math.max(1, map.scale + zoomDelta), 3); // Limit zoom to 1x to 3x
    updateMapTransform(mapIndex);
}

// Helper function to calculate the distance between two touch points
function getDistance(touches) {
    let dx = touches[0].clientX - touches[1].clientX;
    let dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
}

// Function to adjust map container height
function adjustMapContainers() {
    maps.forEach(map => {
        const mapContainer = map.image.parentElement;
        if (map.image && mapContainer) {
            const imageWidth = map.image.naturalWidth;
            const imageHeight = map.image.naturalHeight;

            const aspectRatio = imageWidth / imageHeight;
            const containerWidth = mapContainer.clientWidth;
            const containerHeight = containerWidth / aspectRatio;

            mapContainer.style.height = `${containerHeight}px`;
        }
    });
}

// Attach event listeners for both maps
function attachEventListeners() {
    maps.forEach((map, index) => {
        map.image.addEventListener('mousedown', (e) => handleMouseDown(e, index));
        map.image.addEventListener('mousemove', (e) => handleMouseMove(e, index));
        map.image.addEventListener('mouseup', (e) => handleMouseUp(e, index));
        map.image.addEventListener('mouseleave', (e) => handleMouseLeave(e, index));
        map.image.addEventListener('touchstart', (e) => handleTouchStart(e, index));
        map.image.addEventListener('touchmove', (e) => handleTouchMove(e, index));
        map.image.addEventListener('touchend', (e) => handleTouchEnd(e, index));
        map.image.addEventListener('wheel', (e) => handleWheel(e, index));
    });
}

// Call the adjustMapContainers function after the images are loaded
window.onload = () => {
    adjustMapContainers();
    attachEventListeners();
};































// Initialize language based on the current setting
document.addEventListener('DOMContentLoaded', () => {
    const currentLanguage = document.body.getAttribute('data-language') || 'en';
    if (currentLanguage === 'ar') {
        toggleLanguage(); // Set initial language to Arabic
    }
});