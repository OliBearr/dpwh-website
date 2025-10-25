# Wireframe Website

This project is a simple wireframe website designed to showcase the structure and layout of a web application. It includes multiple pages and reusable components, making it easy to understand the overall design.

## Project Structure

```
wireframe-website
├── src
│   ├── pages
│   │   ├── home.html     # Home page structure
│   │   ├── about.html    # About page structure
│   │   └── contact.html   # Contact page structure
│   ├── components
│   │   ├── header.html    # Header component
│   │   ├── footer.html    # Footer component
│   │   └── nav.html       # Navigation component
│   ├── styles
│   │   └── main.css       # Main CSS styles
│   └── scripts
│       └── main.js        # Main JavaScript file
├── public
│   ├── robots.txt         # Instructions for web crawlers
│   └── manifest.json       # Metadata for the web application
├── index.html        # Main entry point of the website
├── package.json            # npm configuration file
├── .gitignore              # Files to ignore in version control
└── README.md               # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd wireframe-website
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Open `src/index.html` in your web browser to view the website.

## Features

- Multiple pages including Home, About, and Contact.
- Reusable components for header, footer, and navigation.
- Basic styling with CSS.
- JavaScript for interactivity.

## Notes

Created by Valenzuela, John Oliver with AI and a reference design to Science Education Institute of DOST


# 🧩 Contributing Guide — DPWH Wireframe Website

Welcome, team! 👋  
Follow these steps to contribute to our DPWH website project properly.

---

## 🚀 1. Clone the Repository
Each member runs this once to get a local copy:
```bash
git clone https://github.com/OliBearr/dpwh-website.git
🧠 2. Set Up Your Git Identity (only once per computer)
bash
Copy code
git config --global user.name "Your Name"
git config --global user.email "your_github_email@example.com"
🔄 3. Always Pull Before Editing
Before starting any work, run:

bash
Copy code
git pull origin main
This ensures you have the latest version and avoids conflicts.

✏️ 4. Make Your Changes
Edit your assigned files (HTML, CSS, JS, etc.) using VS Code.

💾 5. Stage and Commit
After editing:

bash
Copy code
git add .
git commit -m "Describe your change clearly"
Examples:

git commit -m "Updated footer design"

git commit -m "Added About Us section"

☁️ 6. Push Your Work
Send your commits to GitHub:

bash
Copy code
git push origin main
If you see an error like non-fast-forward, run:

bash
Copy code
git pull origin main --rebase
git push origin main
🌿 7. (Optional) Work on Your Own Branch
To avoid conflicts, create a feature branch:

bash
Copy code
git checkout -b yourname-feature
# make edits...
git add .
git commit -m "Added hero section"
git push origin yourname-feature
Then open a Pull Request on GitHub for review.

🌐 8. View the Live Website
After pushing to main, wait a minute or two, then check:
👉 https://olibearr.github.io/dpwh-website/

🧹 9. General Rules
Keep commit messages short and descriptive.

Avoid pushing to main if someone else is currently editing.

Always pull before pushing.

Test the site locally before committing.

Be respectful and collaborative — teamwork makes it work! 💪