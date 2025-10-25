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

