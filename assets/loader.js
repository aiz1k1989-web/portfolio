(async function loadKorlanPortfolio() {
    let data = null;
    try {
        const response = await fetch('./data/site-data.json', { cache: 'no-cache' });
        if (!response.ok) throw new Error('HTTP ' + response.status);
        data = await response.json();
    } catch (error) {
        console.warn('Portfolio data could not be loaded. Local fallback will be used.', error);
    }

    window.__KORLAN_SITE_DATA__ = data;
    const app = document.createElement('script');
    app.src = './assets/app.js';
    app.async = true;
    app.onerror = () => console.error('Could not load the portfolio application.');
    document.head.appendChild(app);
})();
