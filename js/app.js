const App = {
    init() {
        this.registerServiceWorker();
        this.handleLoader();
        this.initDrawers();
        this.checkResume();
    },

    registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('./sw.js');
        }
    },

    handleLoader() {
        setTimeout(() => {
            document.body.classList.remove('loading');
            document.getElementById('loader').classList.add('hidden');
            document.getElementById('home-screen').classList.remove('hidden');
        }, 2000);
    },

    initDrawers() {
        const infoBtn = document.getElementById('btn-info');
        const statsBtn = document.getElementById('btn-stats');
        const overlay = document.getElementById('drawer-overlay');

        infoBtn.onclick = () => this.toggleDrawer('info-drawer', true);
        statsBtn.onclick = () => this.toggleDrawer('stats-drawer', true);
        overlay.onclick = () => this.closeAllDrawers();
    },

    toggleDrawer(id, show) {
        const drawer = document.getElementById(id);
        const overlay = document.getElementById('drawer-overlay');
        if (show) {
            drawer.classList.add('open');
            overlay.classList.add('active');
        }
    },

    closeAllDrawers() {
        document.querySelectorAll('.drawer').forEach(d => d.classList.remove('open'));
        document.getElementById('drawer-overlay').classList.remove('active');
    },

    checkResume() {
        const saved = Storage.getSavedGame();
        if (saved) {
            const btn = document.getElementById('btn-resume');
            btn.classList.remove('hidden');
            document.getElementById('resume-info').textContent = 
                `${saved.mode} • ${saved.size}x${saved.size}`;
        }
    }
};

window.onload = () => App.init();
