class PuzzleEngine {
    constructor(size = 4, mode = 'classic') {
        this.size = size;
        this.mode = mode;
        this.grid = [];
        this.emptyPos = { r: size - 1, c: size - 1 };
    }

    init(savedState = null) {
        if (savedState) {
            this.grid = savedState.grid;
            this.emptyPos = savedState.emptyPos;
        } else {
            this.generateSolvedGrid();
            this.shuffle();
        }
    }

    generateSolvedGrid() {
        let count = 1;
        this.grid = [];
        for (let r = 0; r < this.size; r++) {
            this.grid[r] = [];
            for (let c = 0; c < this.size; c++) {
                if (r === this.size - 1 && c === this.size - 1) {
                    this.grid[r][c] = 0; // Empty
                } else {
                    this.grid[r][c] = count++;
                }
            }
        }
    }

    shuffle() {
        // To ensure solvability, we simulate random valid moves
        let moves = 0;
        const maxMoves = this.size * this.size * 20;
        while (moves < maxMoves) {
            const neighbors = this.getNeighbors(this.emptyPos);
            const move = neighbors[Math.floor(Math.random() * neighbors.length)];
            this.swap(this.emptyPos, move);
            this.emptyPos = move;
            moves++;
        }
    }

    getNeighbors(pos) {
        const n = [];
        if (pos.r > 0) n.push({r: pos.r - 1, c: pos.c});
        if (pos.r < this.size - 1) n.push({r: pos.r + 1, c: pos.c});
        if (pos.c > 0) n.push({r: pos.r, c: pos.c - 1});
        if (pos.c < this.size - 1) n.push({r: pos.r, c: pos.c + 1});
        return n;
    }

    swap(p1, p2) {
        const temp = this.grid[p1.r][p1.c];
        this.grid[p1.r][p1.c] = this.grid[p2.r][p2.c];
        this.grid[p2.r][p2.c] = temp;
    }

    moveTile(r, c) {
        // Support for multi-tile movement in same row/column
        if (r === this.emptyPos.r) {
            const dir = c < this.emptyPos.c ? 1 : -1;
            for (let i = this.emptyPos.c; i !== c; i -= dir) {
                this.swap({r, c: i}, {r, c: i - dir});
            }
            this.emptyPos = { r, c };
            return true;
        } else if (c === this.emptyPos.c) {
            const dir = r < this.emptyPos.r ? 1 : -1;
            for (let i = this.emptyPos.r; i !== r; i -= dir) {
                this.swap({r: i, c}, {r: i - dir, c});
            }
            this.emptyPos = { r, c };
            return true;
        }
        return false;
    }

    isSolved() {
        // Logic to check against pattern mode (Classic, Snake, etc.)
        // Simplified for Classic:
        let count = 1;
        for (let r = 0; r < this.size; r++) {
            for (let c = 0; c < this.size; c++) {
                if (r === this.size - 1 && c === this.size - 1) return true;
                if (this.grid[r][c] !== count++) return false;
            }
        }
        return true;
    }
          }
