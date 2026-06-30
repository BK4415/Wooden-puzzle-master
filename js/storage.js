const Storage = {
    SAVE_KEY: 'wpm_save_state',
    STATS_KEY: 'wpm_stats',

    saveGame(state) {
        localStorage.setItem(this.SAVE_KEY, JSON.stringify(state));
    },

    getSavedGame() {
        const data = localStorage.getItem(this.SAVE_KEY);
        return data ? JSON.parse(data) : null;
    },

    clearSave() {
        localStorage.removeItem(this.SAVE_KEY);
    },

    updateStats(gameData) {
        let stats = JSON.parse(localStorage.getItem(this.STATS_KEY)) || {
            wins: 0,
            bestTimes: {},
            bestMoves: {},
            totalMoves: 0
        };

        stats.wins++;
        stats.totalMoves += gameData.moves;
        
        const comboKey = `${gameData.mode}_${gameData.size}`;
        if (!stats.bestTimes[comboKey] || gameData.time < stats.bestTimes[comboKey]) {
            stats.bestTimes[comboKey] = gameData.time;
        }
        
        localStorage.setItem(this.STATS_KEY, JSON.stringify(stats));
        this.checkAchievements(stats);
    },

    checkAchievements(stats) {
        // Logic for unlocking badges based on stats
        const achievements = [];
        if (stats.wins >= 1) achievements.push("First Win");
        if (stats.wins >= 100) achievements.push("Centurion");
        localStorage.setItem('wpm_achievements', JSON.stringify(achievements));
    }
};
