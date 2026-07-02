const dictionary = {
    'en': {
        'Dashboard': 'Dashboard',
        'Summarizer': 'Summarizer',
        'AI Copilot': 'AI Copilot',
        'Reminders': 'Reminders',
        'History': 'History',
        'Rewards': 'Rewards',
        'Analysis History': 'Analysis History',
        'Medical Match': 'Medical Match',
        'Health Rewards': 'Health Rewards',
        'Play Now': 'Play Now',
        'Delete': 'Delete',
        'View Details': 'View Details',
        'Logout': 'Logout',
        'Profile': 'Profile'
    },
    'hi': {
        'Dashboard': 'डैशबोर्ड',
        'Summarizer': 'सारांशक',
        'AI Copilot': 'एआई कोपायलट',
        'Reminders': 'रिमाइंडर',
        'History': 'इतिहास',
        'Rewards': 'इनाम',
        'Analysis History': 'विश्लेषण इतिहास',
        'Medical Match': 'मेडिकल मैच',
        'Health Rewards': 'स्वास्थ्य इनाम',
        'Play Now': 'अभी खेलें',
        'Delete': 'हटाएं',
        'View Details': 'विवरण देखें',
        'Logout': 'लॉग आउट',
        'Profile': 'प्रोफ़ाइल'
    },
    'es': {
        'Dashboard': 'Panel',
        'Summarizer': 'Resumidor',
        'AI Copilot': 'Copiloto de IA',
        'Reminders': 'Recordatorios',
        'History': 'Historial',
        'Rewards': 'Recompensas',
        'Analysis History': 'Historial de Análisis',
        'Medical Match': 'Juego Médico',
        'Health Rewards': 'Recompensas de Salud',
        'Play Now': 'Jugar Ahora',
        'Delete': 'Eliminar',
        'View Details': 'Ver Detalles',
        'Logout': 'Cerrar sesión',
        'Profile': 'Perfil'
    }
};

let currentLang = localStorage.getItem('site_lang') || 'en';

function translateTextNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        let text = node.textContent.trim();
        if (text && dictionary['en'][text]) {
            // Find English key by value or assume text is the key.
            // Since we want to support switching multiple times, we store original text in a data attribute.
            let parent = node.parentElement;
            if (parent && !parent.hasAttribute('data-original-text')) {
                parent.setAttribute('data-original-text', text);
            }
            let originalText = parent ? parent.getAttribute('data-original-text') : text;
            
            if (dictionary[currentLang] && dictionary[currentLang][originalText]) {
                node.textContent = dictionary[currentLang][originalText];
            }
        }
    } else {
        node.childNodes.forEach(translateTextNode);
    }
}

function applyTranslations() {
    // Only translate elements with specific text to avoid breaking dynamic content
    const elementsToTranslate = document.querySelectorAll('a, h1, h2, h3, h4, span, button, p');
    
    elementsToTranslate.forEach(el => {
        if (!el.hasAttribute('data-original-text') && el.childNodes.length === 1 && el.childNodes[0].nodeType === Node.TEXT_NODE) {
            let text = el.textContent.trim();
            if (dictionary['en'][text]) {
                el.setAttribute('data-original-text', text);
            }
        }
        
        let originalText = el.getAttribute('data-original-text');
        if (originalText && dictionary[currentLang] && dictionary[currentLang][originalText]) {
            // Replace the first text node content
            for(let child of el.childNodes) {
                if(child.nodeType === Node.TEXT_NODE && child.textContent.trim().length > 0) {
                    child.textContent = dictionary[currentLang][originalText];
                    break;
                }
            }
        }
    });
}

function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('site_lang', lang);
    applyTranslations();
    
    // Sync mobile and desktop selects
    let select = document.getElementById('langSelect');
    let mobileSelect = document.getElementById('langSelectMobile');
    if (select) select.value = lang;
    if (mobileSelect) mobileSelect.value = lang;
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    let select = document.getElementById('langSelect');
    let mobileSelect = document.getElementById('langSelectMobile');
    if (select) select.value = currentLang;
    if (mobileSelect) mobileSelect.value = currentLang;
    
    applyTranslations();
});
