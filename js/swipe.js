class SwipeHandler {
    constructor(element, callback) {
        this.element = element;
        this.callback = callback;
        this.touchStart = { x: 0, y: 0 };
        this.threshold = 30; // Minimum distance for a swipe

        this.element.addEventListener('touchstart', (e) => this.handleStart(e), {passive: false});
        this.element.addEventListener('touchend', (e) => this.handleEnd(e), {passive: false});
    }

    handleStart(e) {
        this.touchStart.x = e.touches[0].clientX;
        this.touchStart.y = e.touches[0].clientY;
    }

    handleEnd(e) {
        const dx = e.changedTouches[0].clientX - this.touchStart.x;
        const dy = e.changedTouches[0].clientY - this.touchStart.y;

        if (Math.abs(dx) < this.threshold && Math.abs(dy) < this.threshold) return;

        let direction = null;
        if (Math.abs(dx) > Math.abs(dy)) {
            direction = dx > 0 ? 'right' : 'left';
        } else {
            direction = dy > 0 ? 'down' : 'up';
        }

        if (direction) this.callback(direction);
    }
}
