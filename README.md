# 🧩 Wooden Puzzle Master - Premium PWA

**Wooden Puzzle Master** ek luxury-themed, mobile-first Progressive Web App (PWA) sliding puzzle game hai. Isse Vanilla JavaScript, HTML5, aur CSS3 ka use karke banaya gaya hai. Yeh game ek premium mobile game ka experience deta hai jisme smooth animations, wooden textures, aur intelligent puzzle logic ka use kiya gaya hai.

---

## 🌟 Key Features

- **Premium UI/UX:** Luxury walnut wood theme, smooth transitions, aur responsive design.
- **Game Modes:** 
    - **Number Mode:** Classic, Snake, Spiral, aur Upside Down patterns.
    - **Photo Mode:** 5 built-in presets (Raaj, Ronit, Ada, etc.) aur Custom Photo Upload functionality.
- **Variable Board Sizes:** 3x3 se lekar 7x7 tak multiple difficulty levels.
- **Advanced Controls:** Single tile swipe aur Multiple tile swipe (row/column movement) support.
- **Progressive Web App (PWA):** 
    - Offline support via Service Workers.
    - Add to Home Screen (Installable).
    - Splash screen aur custom icons.
- **Smart Logic:** Hamesha solvable puzzles generate karta hai.
- **Statistics & Achievements:** Best times, moves, aur professional badge system.
- **Resume System:** Game state automatically save hota hai (LocalStorage), taki aap wahi se shuru kar sakein jahan choda tha.
- **Victory System:** Star rating, performance summary, aur screenshot sharing feature.

---

## 📂 Project Structure

```text
Wooden-Puzzle-Master/
├── index.html              # Main Entry Point & Home Screen
├── game.html               # Gameplay Screen
├── about.html              # Game Info & Developer details
├── manifest.json           # PWA Configuration
├── sw.js                   # Service Worker (Offline Support)
├── assets/                 # Images, Logos & Presets
│   ├── logo.png
│   ├── preset-1.jpg ... preset-5.jpg
│   └── trophy.png
├── css/
│   ├── style.css           # Global & Home Styles
│   └── game.css            # Gameplay & Board Styles
└── js/
    ├── app.js              # PWA & Core App Logic
    ├── puzzle.js           # Puzzle Engine (Shuffle/Solve)
    ├── ui.js               # UI Updates & Live Preview
    ├── swipe.js            # Touch & Gesture Handling
    └── storage.js          # LocalStorage & Stats Management
