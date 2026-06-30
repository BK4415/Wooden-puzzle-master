const UI = {
    // ... previous code ...

    initGame() {
        // This runs on game.html
        this.engine = new PuzzleEngine(
            parseInt(localStorage.getItem('wpm_size') || 4),
            localStorage.getItem('wpm_mode') || 'classic'
        );
        
        const saved = Storage.getSavedGame();
        this.engine.init(saved);
        this.renderBoard();
        this.startTimer();
        
        new SwipeHandler(document.getElementById('puzzle-container'), (dir) => {
            this.handleInput(dir);
        });
    },

    handlePhotoUpload(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                // Process and slice image using Canvas
                this.processImage(img);
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    },

    processImage(img) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const size = Math.min(img.width, img.height);
        
        canvas.width = 600; // Standardize high-res
        canvas.height = 600;
        
        // Center Crop
        ctx.drawImage(img, (img.width-size)/2, (img.height-size)/2, size, size, 0, 0, 600, 600);
        
        const processedImageData = canvas.toDataURL('image/jpeg', 0.8);
        localStorage.setItem('wpm_custom_photo', processedImageData);
        this.updatePreview();
    },

    showVictory(moves, seconds) {
        document.getElementById('final-moves').textContent = moves;
        document.getElementById('final-time').textContent = this.formatTime(seconds);
        
        // Star Rating Logic based on efficiency
        const stars = this.calculateStars(moves, seconds);
        document.getElementById('star-rating').textContent = '⭐'.repeat(stars);
        
        const overlay = document.getElementById('victory-overlay');
        overlay.classList.remove('hidden');
        overlay.classList.add('show');
    },

    calculateStars(moves, time) {
        const size = this.engine.size;
        const minMoves = size * size * 5; // Rough baseline
        if (moves < minMoves) return 5;
        if (moves < minMoves * 1.5) return 4;
        if (moves < minMoves * 2) return 3;
        return 2;
    }
};
