# 📸 PicGallery_JS

A lightweight, modern, and responsive photo gallery web application built with **pure HTML5, CSS3, and Vanilla JavaScript**. It dynamically fetches photo collections from the [Picsum Photos API](https://picsum.photos/) and renders interactive cards on the fly.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-ISC-green?style=for-the-badge)

---

## 📖 Description

**PicGallery_JS** is an interactive photography gallery created to demonstrate core web development fundamentals without relying on bulky libraries or third-party frameworks. 

The application connects asynchronously to the **Lorem Picsum REST API** to retrieve curated photo metadata. Utilizing modern JavaScript ES6+ features (`async`/`await`, `fetch`, and programmatic DOM manipulation), it parses and constructs accessible photo card components. Each card displays:
- A high-resolution image with lazy-loading for optimal performance.
- The photographer/author's name.
- The unique photo ID for easy reference.
- A direct external link to view the original work on Unsplash.

The user interface follows modern design aesthetics with a sleek dark palette, the **Plus Jakarta Sans** typeface, subtle lift-on-hover animations, and a fully fluid CSS Grid layout that looks seamless on smartphones, tablets, and wide desktop displays.

---

## 🌟 Key Features

- **⚡ Zero Dependencies**: Pure HTML, CSS, and JavaScript — no build steps, bundlers, or frameworks required.
- **🔄 Asynchronous API Integration**: Fetches real-time photo metadata using native `fetch()` and `async`/`await`.
- **🧱 Dynamic DOM Construction**: Generates cards programmatically with proper accessibility attributes and clean structure.
- **📱 Fully Responsive Grid**: Mobile-first layout using CSS Grid and Flexbox that dynamically adapts column counts based on viewport size.
- **🖼️ Performance Optimized**: Incorporates native lazy loading (`loading="lazy"`) and targeted image dimensions from the Picsum CDN.
- **🔗 Photographer Attribution**: Provides external links with `target="_blank"` and `rel="noopener noreferrer"` for security and author credit.
- **🛡️ Error Handling**: Friendly on-screen feedback if the network is disconnected or the API is unavailable.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Semantic structure, accessibility landmarks (`header`, `main`, `article`) |
| **CSS3** | Modern styling, CSS Grid, Flexbox, smooth transitions, responsive breakpoints |
| **JavaScript (ES6+)** | API calls, promise handling, dynamic element generation & event handling |
| **Picsum Photos API** | High-quality image endpoints and photo metadata |
| **Google Fonts** | Modern typography using *Plus Jakarta Sans* |

---

## 📁 Project Structure

```text
PicGallery_JS/
├── index.html       # Semantic HTML layout and container elements
├── styles.css       # Design tokens, responsive grid, card styling & animations
├── script.js        # API fetch logic and dynamic DOM card generation
├── package.json     # Project metadata and quick local server script
└── README.md        # Comprehensive documentation
```

---

## 🚀 Getting Started

You can run this project locally in seconds:

### Option 1: Live Server (Recommended)
1. Clone the repository:
   ```bash
   git clone https://github.com/akshxttadi/PicGallery_JS.git
   ```
2. Open the folder in **VS Code**.
3. Right-click `index.html` and select **Open with Live Server**.

### Option 2: Direct Browser Launch
Simply double-click `index.html` in your file explorer to open it directly in any browser.

### Option 3: Local Node Server
If you have Node.js installed, run:
```bash
npx serve .
```

---

## 🔌 API Reference

This project fetches data from the public endpoint:
```http
GET https://picsum.photos/v2/list?page=1&limit=8
```

Each photo card dynamically builds the following image URL:
```text
https://picsum.photos/id/{photo.id}/400/250
```

---

## 👤 Author

- **Akshat Aditya** - [@akshxttadi](https://github.com/akshxttadi)

---

## 📄 License

This project is licensed under the [ISC License](LICENSE).