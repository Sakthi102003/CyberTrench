# Cybersecurity Deep Trench

A deep dive into cybersecurity concepts, visualized as an ocean trench exploration. This project organizes security topics by complexity and depth, from fundamental principles at the surface to theoretical and advanced cryptographic concepts in the abyss.

## 🌊 Overview

**Cybersecurity Deep Trench** is an interactive visualization that maps 60+ cybersecurity concepts across 8 distinct depth zones. As you scroll down, you descend deeper into the "trench," encountering increasingly complex and theoretical topics.

### The Zones
1.  **Surface: Fundamentals** (0m - 2000m) - Core concepts like CIA Triad, Defense in Depth.
2.  **Level 2: Cryptography** (2000m - 4000m) - Encryption, PKI, Hashing.
3.  **Level 3: Systems** (4000m - 6000m) - OS security, TCB, Memory Safety.
4.  **Level 4: Architecture** (6000m - 8000m) - Security models (Bell-LaPadula, Biba).
5.  **Level 5: Operations** (8000m - 10000m) - Forensics, Chaos Engineering, Zero Trust.
6.  **Level 6: Advanced Trust** (10000m - 12000m) - ORAM, Differential Privacy, Post-Quantum.
7.  **Level 7: Theoretical** (12000m - 14000m) - MPC, Homomorphic Encryption, VDFs.
8.  **Level 8: The Void** (14000m+) - The bleeding edge: One-Time Programs, Relativistic Crypto.

## 🛠️ Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: CSS Modules, Custom Animations (Ocean/Wave effects)
- **Deployment**: Static Site Generation (via Vite build)

## 🚀 How to Run

1.  **Prerequisites**: Ensure you have [Node.js](https://nodejs.org) installed.

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

3.  **Audio Setup**:
    To enable the ambient audio, you need to place `surface.mp3` and `deep.mp3` in the `public/sounds/` directory. See [AUDIO_SOURCES.md](AUDIO_SOURCES.md) for details.

4.  **Start Development Server**:
    ```bash
    npm run dev
    ```
    Open your browser to `http://localhost:5173` (or the port shown in your terminal).

5.  **Linting**:
    ```bash
    npm run lint
    ```

6.  **Build for Production**:
    ```bash
    npm run build
    ```
    The output will be in the `dist/` directory.

## ✨ Features

- **Interactive Depth Gauge**: A sticky HUD shows your current depth in meters as you scroll.
- **Ambient Audio System**: Dynamic soundscape that transitions from surface waves to deep underwater ambience as you descend.
- **Discovery Tracker**: Gamified progress counter that tracks how many concepts you've uncovered.
- **Immersive UI**: Ocean gradient background that darkens as you descend.
- **Responsive Design**: Optimized for both desktop and mobile exploration.
- **Curated Resources**: Each concept links to high-quality resources (Wikipedia, Research Papers, Tech Blogs).

## 📄 License

This project is open source. Feel free to fork and expand the trench!

## 💡 Inspiration

This project was inspired by [Deep ML Trench](https://deep-ml-trench.vercel.app/).
