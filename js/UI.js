const UI = {
    currentSize: 4,
    currentType: 'Number',
    currentMode: 'Classic',

    init() {
        this.bindEvents();
        this.updatePreview();
    },

    bindEvents() {
        document.querySelectorAll('.size-opt').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelector('.size-opt.active').classList.remove('active');
                e.target.classList.add('active');
                this.currentSize = parseInt(e.target.dataset.size);
                this.updatePreview();
            });
        });
    },

    updatePreview() {
        const container = document.getElementById('preview-board');
        container.style.gridTemplateColumns = `repeat(${this.currentSize}, 1fr)`;
        container.innerHTML = '';
        
        for (let i = 0; i < this.currentSize * this.currentSize; i++) {
            const tile = document.createElement('div');
            tile.className = 'tile preview-tile';
            if (this.currentType === 'Number') {
                tile.textContent = (i + 1 === this.currentSize**2) ? '' : i + 1;
                if (!tile.textContent) tile.classList.add('empty');
            }
            container.appendChild(tile);
        }
    }
};

UI.init();
