# Gupta Siddhesh | Portfolio

A modern, responsive personal portfolio website built with **React**, **Tailwind CSS**, and **Three.js**. features a stunning 3D particle background, glassmorphism design, and an interactive contact form.

## 🚀 Features

-   **3D Interactive Background**: Implemented using `three.js` with mouse parallax effects.
-   **Modern Design**: Glassmorphism aesthetic using `Tailwind CSS`.
-   **Responsive**: Fully responsive navigation and layout for all devices.
-   **Component-Based**: Modular architecture with reusable React components.
-   **Contact Form**: Functional email sending using **EmailJS**.
-   **Animations**: Smooth scrolling and custom keyframe animations.

## 🛠️ Tech Stack

-   **Frontend Framework**: [React](https://react.dev/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **3D Graphics**: [Three.js](https://threejs.org/)
-   **Icons**: [FontAwesome](https://fontawesome.com/)
-   **Email Service**: [EmailJS](https://www.emailjs.com/)

## 📂 Project Structure

```
portfolio-react/
├── public/              # Static assets (Resume, Favicon)
├── src/
│   ├── components/      # Reusable React components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── TechStack.jsx
│   │   └── ThreeBackground.jsx
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles & Tailwind directives
├── index.html           # HTML entry point
├── tailwind.config.js   # Tailwind configuration
└── package.json         # Dependencies and scripts
```

## ⚡ Getting Started

### Prerequisites

-   Node.js (v14 or higher)
-   npm (v6 or higher)

### Installation

1.  **Clone the repository** (if you haven't already moved into the folder):
    ```bash
    cd portfolio-react
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

3.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

4.  **Build for Production**:
    ```bash
    npm run build
    ```

## 📧 Contact Form Configuration (EmailJS)

The contact form is pre-configured with EmailJS. The keys are located in `src/components/Contact.jsx`.

-   **Service ID**: `service_r5xkx7b`
-   **Template ID**: `template_nfwgm3o`
-   **Public Key**: `30ZRk4Y8ggz0uv21C`

> **Note**: For production usage, it is recommended to move these keys to environment variables (`.env`).

## 📄 License

This project is open for personal use and modification.
