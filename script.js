document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('header nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if(targetElement){
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            }
        });
    });

    const languageSwitcher = document.getElementById('language-switcher');
    const elements = document.querySelectorAll('[data-lang-ja]');

    function setLanguage(lang) {
        elements.forEach(element => {
            const jaText = element.getAttribute('data-lang-ja');
            const enText = element.getAttribute('data-lang-en');
            if (lang === 'ja') {
                element.textContent = jaText;
            } else if (lang === 'en') {
                element.textContent = enText;
            }
        });
    }

    languageSwitcher.addEventListener('change', function() {
        const selectedLang = this.value;
        setLanguage(selectedLang);
    });
      // 初期言語を設定 (例：ブラウザの言語設定に従う)
    const initialLang = navigator.language.startsWith('ja') ? 'ja' : 'en';
    languageSwitcher.value = initialLang;
    setLanguage(initialLang);

    // 詳細表示ボタンのイベントリスナーを追加
    const detailButtons = document.querySelectorAll('.detail-button');
    detailButtons.forEach(button => {
        button.addEventListener('click', function() {
            const details = this.nextElementSibling;
            details.style.display = details.style.display === 'none' ? 'block' : 'none';
              this.textContent = this.textContent === '詳細を表示' ? '詳細を隠す':'詳細を表示';
              const selectedLang = languageSwitcher.value;
               if(selectedLang ==='ja'){
                this.textContent = this.textContent === '詳細を表示' ? '詳細を隠す':'詳細を表示';
               } else if(selectedLang ==='en'){
                 this.textContent = this.textContent === 'Show Details' ? 'Hide Details':'Show Details';
               }
        });
    });
});
