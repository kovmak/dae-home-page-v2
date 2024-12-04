function setLanguage(lang) {
    fetch(`languages/${lang}.json`)
        .then(response => response.json())
        .then(translations => {
            console.log('Translations loaded:', translations); 
            document.querySelectorAll('[data-translate]').forEach(element => {
                const key = element.getAttribute('data-translate');
                if (translations[key]) {
                    console.log(`Translating ${key} to: ${translations[key]}`); 
                    if (element.tagName === 'IMG') {
                        element.alt = translations[key];
                    } else {
                        element.textContent = translations[key];
                    }
                }
            });
        })
        .catch(error => console.error('Error loading language file:', error));
}
