/**
 * Main script for handling internationalization and localization
 * Manages language switching and dynamic content updates
 */

class I18nManager {
    constructor() {
        this.currentLanguage = 'en'; // Default language
        this.translations = window.translations || translations || {};
        this.elements = {};
        this.init();
    }

    /**
     * Initialize the i18n manager
     */
    init() {
        this.detectBrowserLanguage();
        this.loadUserPreference();
        this.cacheElements();
        this.bindEvents();
        this.updateContent();
        this.updateLanguageDisplay();
    }

    /**
     * Detect browser language and set as default if supported
     */
    detectBrowserLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        const langCode = browserLang.split('-')[0]; // Get primary language code
        
        // Check if browser language is supported
        if (this.translations[langCode]) {
            this.currentLanguage = langCode;
        }
    }

    /**
     * Load user language preference from localStorage
     */
    loadUserPreference() {
        const savedLanguage = localStorage.getItem('preferred-language');
        if (savedLanguage && this.translations[savedLanguage]) {
            this.currentLanguage = savedLanguage;
        }
    }

    /**
     * Save user language preference to localStorage
     */
    saveUserPreference() {
        localStorage.setItem('preferred-language', this.currentLanguage);
    }

    /**
     * Cache DOM elements for better performance
     */
    cacheElements() {
        this.elements = {
            dropdown: document.querySelector('.dropdown'),
            dropdownToggle: document.getElementById('languageDropdown'),
            dropdownMenu: document.getElementById('languageMenu'),
            dropdownItems: document.querySelectorAll('.dropdown-item'),
            currentLangText: document.getElementById('current-lang-text'),
            translatableElements: document.querySelectorAll('[data-i18n]'),
            currentLangDisplay: document.getElementById('current-lang-display'),
            documentTitle: document.title
        };
    }

    /**
     * Bind event listeners
     */
    bindEvents() {
        // Dropdown toggle click
        this.elements.dropdownToggle.addEventListener('click', (e) => {
            e.preventDefault();
            this.toggleDropdown();
        });

        // Dropdown item clicks
        this.elements.dropdownItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const selectedLang = item.getAttribute('data-lang');
                this.switchLanguage(selectedLang);
                this.closeDropdown();
            });
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.elements.dropdown.contains(e.target)) {
                this.closeDropdown();
            }
        });

        // Handle keyboard navigation
        this.elements.dropdownToggle.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.toggleDropdown();
            }
        });

        this.elements.dropdownItems.forEach(item => {
            item.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const selectedLang = item.getAttribute('data-lang');
                    this.switchLanguage(selectedLang);
                    this.closeDropdown();
                }
            });
        });
    }

    /**
     * Switch to specified language
     * @param {string} langCode - Language code to switch to
     */
    switchLanguage(langCode) {
        if (!this.translations[langCode]) {
            console.warn(`Translation for language '${langCode}' not found`);
            return;
        }

        // Add fade transition effect
        document.body.classList.add('fade-transition');
        
        setTimeout(() => {
            this.currentLanguage = langCode;
            this.updateContent();
            this.updateActiveButton();
            this.updateLanguageDisplay();
            this.updateDocumentLanguage();
            this.saveUserPreference();
            
            // Remove fade effect
            document.body.classList.remove('fade-transition');
            document.body.classList.add('show');
        }, 150);
    }

    /**
     * Update all translatable content on the page
     */
    updateContent() {
        this.elements.translatableElements.forEach(element => {
            const translationKey = element.getAttribute('data-i18n');
            const translatedText = this.getTranslation(translationKey);
            
            if (translatedText) {
                element.textContent = translatedText;
            }
        });

        // Update document title
        const titleTranslation = this.getTranslation('page.title');
        if (titleTranslation) {
            document.title = titleTranslation;
        }
    }

    /**
     * Get translation for a specific key
     * @param {string} key - Translation key (dot notation supported)
     * @returns {string|null} - Translated text or null if not found
     */
    getTranslation(key) {
        const keys = key.split('.');
        let translation = this.translations[this.currentLanguage];

        for (const k of keys) {
            if (translation && typeof translation === 'object' && k in translation) {
                translation = translation[k];
            } else {
                console.warn(`Translation key '${key}' not found for language '${this.currentLanguage}'`);
                return null;
            }
        }

        return typeof translation === 'string' ? translation : null;
    }

    /**
     * Toggle dropdown open/close
     */
    toggleDropdown() {
        this.elements.dropdown.classList.toggle('open');
    }

    /**
     * Close dropdown
     */
    closeDropdown() {
        this.elements.dropdown.classList.remove('open');
    }

    /**
     * Update active state of dropdown items
     */
    updateActiveButton() {
        this.elements.dropdownItems.forEach(item => {
            const itemLang = item.getAttribute('data-lang');
            if (itemLang === this.currentLanguage) {
                item.classList.add('active');
                item.setAttribute('aria-pressed', 'true');
            } else {
                item.classList.remove('active');
                item.setAttribute('aria-pressed', 'false');
            }
        });
        
        // Update dropdown toggle text
        const languageName = this.getTranslation(`language_names.${this.currentLanguage}`);
        if (this.elements.currentLangText && languageName) {
            this.elements.currentLangText.textContent = languageName;
        }
    }

    /**
     * Update the current language display
     */
    updateLanguageDisplay() {
        if (this.elements.currentLangDisplay) {
            const languageName = this.getTranslation(`language_names.${this.currentLanguage}`);
            this.elements.currentLangDisplay.textContent = languageName || this.currentLanguage.toUpperCase();
        }
    }

    /**
     * Update document language attribute
     */
    updateDocumentLanguage() {
        document.documentElement.setAttribute('lang', this.currentLanguage);
    }

    /**
     * Get current language
     * @returns {string} - Current language code
     */
    getCurrentLanguage() {
        return this.currentLanguage;
    }

    /**
     * Get available languages
     * @returns {Array} - Array of available language codes
     */
    getAvailableLanguages() {
        return Object.keys(this.translations);
    }

    /**
     * Check if a language is supported
     * @param {string} langCode - Language code to check
     * @returns {boolean} - True if language is supported
     */
    isLanguageSupported(langCode) {
        return langCode in this.translations;
    }
}

// Error handling for missing translations
window.addEventListener('error', (e) => {
    if (e.message.includes('translations')) {
        console.error('Translations not loaded. Please ensure translations.js is loaded before script.js');
    }
});

// Initialize the i18n manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    try {
        window.i18nManager = new I18nManager();
        console.log('I18n Manager initialized successfully');
    } catch (error) {
        console.error('Failed to initialize I18n Manager:', error);
        
        // Fallback: show error message to user
        const errorDiv = document.createElement('div');
        errorDiv.style.cssText = `
            position: fixed;
            top: 10px;
            right: 10px;
            background: #ff4757;
            color: white;
            padding: 10px 15px;
            border-radius: 5px;
            font-size: 14px;
            z-index: 1000;
        `;
        errorDiv.textContent = 'Language switching unavailable. Please refresh the page.';
        document.body.appendChild(errorDiv);
        
        setTimeout(() => {
            if (errorDiv.parentNode) {
                errorDiv.parentNode.removeChild(errorDiv);
            }
        }, 5000);
    }
});

// Export for potential use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = I18nManager;
}
