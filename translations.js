/**
 * Translation data for the student reflection page
 * Supports English (en) and French (fr) languages
 */
const translations = {
    en: {
        page: {
            title: "Student Reflection - Course Experience"
        },
        main: {
            title: "Course Reflection",
            welcome: "Welcome to my course reflection page. Below, I'll share my thoughts and experiences from this learning journey."
        },
        questions: {
            enjoyment: {
                title: "What did you enjoy most about the course?",
                answer: "I particularly enjoyed the hands-on approach to learning internationalization concepts. The practical exercises helped me understand how real-world applications handle multiple languages and cultural differences. Working with different character encodings and date formats was especially enlightening."
            },
            challenge: {
                title: "What was the most challenging part?",
                answer: "The most challenging aspect was understanding the nuances between internationalization (i18n) and localization (l10n). Initially, I thought they were the same thing, but learning about cultural context, right-to-left languages, and locale-specific formatting really opened my eyes to the complexity involved in creating truly global applications."
            },
            improvement: {
                title: "What could be improved about the course?",
                answer: "While the course covered the fundamentals well, I would have appreciated more examples of complex scenarios like handling pluralization rules in different languages, or working with currencies and number formatting across various locales. Additionally, more practice with professional i18n libraries and frameworks would have been valuable."
            }
        },
        footer: {
            text: "Thank you for taking the time to read my reflection. This page demonstrates basic i18n/l10n implementation using vanilla JavaScript.",
            current_language: "Current Language:"
        },
        language_names: {
            en: "English",
            fr: "French",
            sw: "Swahili"
        }
    },
    fr: {
        page: {
            title: "Réflexion Étudiante - Expérience de Cours"
        },
        main: {
            title: "Réflexion sur le Cours",
            welcome: "Bienvenue sur ma page de réflexion de cours. Ci-dessous, je partagerai mes pensées et expériences de ce parcours d'apprentissage."
        },
        questions: {
            enjoyment: {
                title: "Qu'avez-vous le plus apprécié dans le cours ?",
                answer: "J'ai particulièrement apprécié l'approche pratique de l'apprentissage des concepts d'internationalisation. Les exercices pratiques m'ont aidé à comprendre comment les applications du monde réel gèrent plusieurs langues et différences culturelles. Travailler avec différents encodages de caractères et formats de date était particulièrement éclairant."
            },
            challenge: {
                title: "Quelle était la partie la plus difficile ?",
                answer: "L'aspect le plus difficile était de comprendre les nuances entre l'internationalisation (i18n) et la localisation (l10n). Au début, je pensais que c'était la même chose, mais apprendre sur le contexte culturel, les langues de droite à gauche, et le formatage spécifique aux locales m'a vraiment ouvert les yeux sur la complexité impliquée dans la création d'applications vraiment globales."
            },
            improvement: {
                title: "Qu'est-ce qui pourrait être amélioré dans le cours ?",
                answer: "Bien que le cours ait bien couvert les fondamentaux, j'aurais apprécié plus d'exemples de scénarios complexes comme la gestion des règles de pluralisation dans différentes langues, ou travailler avec les devises et le formatage des nombres à travers diverses locales. De plus, plus de pratique avec des bibliothèques et frameworks i18n professionnels aurait été précieux."
            }
        },
        footer: {
            text: "Merci d'avoir pris le temps de lire ma réflexion. Cette page démontre une implémentation i18n/l10n de base utilisant JavaScript vanilla.",
            current_language: "Langue Actuelle :"
        },
        language_names: {
            en: "Anglais",
            fr: "Français",
            sw: "Kiswahili"
        }
    },
    sw: {
        page: {
            title: "Tafakari ya Mwanafunzi - Uzoefu wa Kozi"
        },
        main: {
            title: "Tafakari ya Kozi",
            welcome: "Karibu kwenye ukurasa wangu wa tafakari ya kozi. Hapa chini, nitashiriki mawazo yangu na uzoefu kutoka kwenye safari hii ya kujifunza."
        },
        questions: {
            enjoyment: {
                title: "Ni nini ulifurahia zaidi kuhusu kozi?",
                answer: "Nilifurahia hasa mbinu za vitendo za kujifunza dhana za kimataifa. Mazoezi ya vitendo yalinisaidia kuelewa jinsi programu za dunia halisi zinavyoshughulikia lugha nyingi na tofauti za kitamaduni. Kufanya kazi na mifumo tofauti ya herufi na miundo ya tarehe kulikuwa kunaongoza hasa."
            },
            challenge: {
                title: "Sehemu gani ilikuwa ngumu zaidi?",
                answer: "Kipengele chenye changamoto zaidi kilikuwa kuelewa tofauti kati ya kimataifa (i18n) na eneo (l10n). Mwanzoni, nilifikiri ni kitu kimoja, lakini kujifunza kuhusu muktadha wa kitamaduni, lugha za kushoto kwenda kulia, na muundo maalum wa eneo kulinifungua macho kwenye utata uliohusika katika kuunda programu za kimataifa kweli."
            },
            improvement: {
                title: "Ni nini kingeweza kuboreshwa kuhusu kozi?",
                answer: "Ingawa kozi ilifunika misingi vizuri, ningependa mifano zaidi ya mazingira magumu kama kushughulikia sheria za wingi katika lugha tofauti, au kufanya kazi na sarafu na muundo wa nambari katika maeneo mbalimbali. Pia, mazoezi zaidi na maktaba za kitaaluma za i18n na mifumo ingebadilika."
            }
        },
        footer: {
            text: "Asante kwa kuchukua muda kusoma tafakari yangu. Ukurasa huu unaonyesha utekelezaji wa msingi wa i18n/l10n kwa kutumia JavaScript safi.",
            current_language: "Lugha ya Sasa:"
        },
        language_names: {
            en: "Kiingereza",
            fr: "Kifaransa",
            sw: "Kiswahili"
        }
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations;
}
