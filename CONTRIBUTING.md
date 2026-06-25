# Contributing to ELMARAGHY Law Firm Website

Thank you for your interest in contributing to the ELMARAGHY Law Firm website! This document provides guidelines and instructions for contributing to this project.

---

## 📋 Table of Contents

- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Making Changes](#making-changes)
- [Code Style](#code-style)
- [Committing Changes](#committing-changes)
- [Creating Pull Requests](#creating-pull-requests)
- [Reporting Issues](#reporting-issues)
- [Feature Requests](#feature-requests)

---

## 🚀 Getting Started

### Prerequisites
- Git installed on your computer
- Python 3 or Node.js (for local testing)
- A GitHub account
- Basic HTML, CSS, and JavaScript knowledge

### Fork and Clone
1. Click **Fork** on the repository page
2. Clone your fork:
```bash
git clone https://github.com/YOUR-USERNAME/ELMARAGHY-Law-firm.git
cd ELMARAGHY-Law-firm
```

3. Add upstream remote:
```bash
git remote add upstream https://github.com/adelsafy0-glitch/ELMARAGHY-Law-firm.git
```

---

## 💻 Development Setup

### 1. Create a Branch
```bash
# Update main branch
git fetch upstream
git checkout main
git merge upstream/main

# Create feature branch
git checkout -b feature/your-feature-name
```

### 2. Run Locally
```bash
# Using Python
python3 -m http.server 8000
# Visit: http://localhost:8000

# Or using the start script
./start.sh          # macOS/Linux
start.bat           # Windows
```

### 3. Make Your Changes
- Edit HTML in `index.html`
- Edit CSS in `styles.css`
- Edit JavaScript in `app.js`
- Update documentation as needed

### 4. Test Your Changes
- Test in multiple browsers (Chrome, Firefox, Safari, Edge)
- Test on mobile devices (use browser dev tools)
- Test form validation
- Test responsive design

---

## ✨ Making Changes

### File Organization

```
ELMARAGHY-Law-firm/
├── index.html              # Main HTML - Structure only
├── styles.css              # All styling
├── app.js                  # All JavaScript
├── docs/
│   └── deployment.md       # Deployment guide
├── README.md               # Project overview
├── CONTRIBUTING.md         # This file
└── ...
```

### HTML Guidelines
- Use semantic HTML5 elements
- Keep JavaScript out of HTML (use app.js)
- Use meaningful IDs and classes
- Maintain RTL (right-to-left) structure
- Keep proper indentation

Example:
```html
<section id="about" class="section">
    <h2>About Section</h2>
    <p>Content here...</p>
</section>
```

### CSS Guidelines
- Use CSS variables for colors
- Use Flexbox/Grid for layouts
- Mobile-first approach
- Comment complex sections
- Avoid inline styles
- Use meaningful class names

Example:
```css
/* Sections */
.section {
    background: white;
    padding: 40px;
    margin: 30px 0;
    border-radius: 10px;
}

.section h2 {
    color: var(--primary-color);
    border-right: 4px solid var(--accent-color);
    padding-right: 15px;
}
```

### JavaScript Guidelines
- Use vanilla JavaScript (no jQuery/frameworks)
- Use meaningful variable names
- Comment complex logic
- Use modern ES6+ syntax
- Add error handling
- Test thoroughly

Example:
```javascript
// Good
function handleFormSubmission(event) {
    event.preventDefault();
    const formData = new FormData(bookingForm);
    // Process form...
}

// Avoid
function f(e) {
    e.preventDefault();
    // ...
}
```

---

## 🎨 Code Style

### Naming Conventions
```javascript
// Variables and functions: camelCase
const userName = "John";
function getUserData() { }

// Classes: PascalCase
class UserManager { }

// Constants: UPPER_SNAKE_CASE
const MAX_ATTEMPTS = 5;

// CSS classes: kebab-case
.button-primary
.form-group
.booking-form
```

### Formatting
- Indentation: 4 spaces (HTML/CSS), 4 spaces (JavaScript)
- Line length: Keep under 100 characters when possible
- Use single quotes for strings in JavaScript
- Add blank lines between logical sections

---

## 📝 Committing Changes

### Before Committing
1. Test all changes locally
2. Check for console errors (F12 → Console)
3. Verify responsive design
4. Review your code

### Commit Messages
Use clear, descriptive commit messages:

```bash
# Good commits
git commit -m "Add dark mode toggle to settings"
git commit -m "Fix form validation for Egyptian phone numbers"
git commit -m "Improve mobile responsive layout"
git commit -m "Update deployment documentation"

# Avoid
git commit -m "fix bug"
git commit -m "changes"
git commit -m "update"
```

### Commit Process
```bash
# Check what changed
git status

# Stage specific files
git add index.html
git add styles.css
git add app.js

# Or stage all
git add .

# Commit with message
git commit -m "Descriptive message about changes"

# Push to your fork
git push origin feature/your-feature-name
```

---

## 🔄 Creating Pull Requests

### Before Creating PR
1. Ensure your branch is up to date:
```bash
git fetch upstream
git rebase upstream/main
```

2. Push to your fork:
```bash
git push origin feature/your-feature-name
```

### PR Template
When creating a PR, include:

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement

## Changes Made
- Change 1
- Change 2
- Change 3

## Testing
- [ ] Tested in Chrome
- [ ] Tested in Firefox
- [ ] Tested on mobile
- [ ] Form validation tested
- [ ] Responsive design verified

## Screenshots (if applicable)
Before/After screenshots

## Checklist
- [ ] Code follows style guidelines
- [ ] Comments added for complex logic
- [ ] Documentation updated
- [ ] No console errors
- [ ] All tests pass
```

### PR Guidelines
- Keep PRs focused on one feature/fix
- Write clear, detailed descriptions
- Reference related issues (#123)
- Request review from maintainers
- Be responsive to feedback

---

## 🐛 Reporting Issues

### Bug Report Template
```markdown
**Describe the bug:**
Clear description of what the bug is

**Steps to reproduce:**
1. Step 1
2. Step 2
3. Step 3

**Expected behavior:**
What should happen

**Actual behavior:**
What actually happens

**Screenshots:**
If applicable

**Environment:**
- Browser: Chrome 90
- Device: Desktop/Mobile
- OS: Windows/macOS/Linux
```

### Submit a Bug
1. Go to [Issues](https://github.com/adelsafy0-glitch/ELMARAGHY-Law-firm/issues)
2. Click **New Issue**
3. Choose **Bug Report**
4. Fill in the template
5. Submit

---

## 💡 Feature Requests

### Feature Request Template
```markdown
**Description:**
Clear description of the requested feature

**Use case:**
Why would this feature be useful?

**Proposed solution:**
How should it work?

**Alternative solutions:**
Other approaches considered

**Examples:**
Similar features in other projects
```

### Submit a Feature Request
1. Go to [Issues](https://github.com/adelsafy0-glitch/ELMARAGHY-Law-firm/issues)
2. Click **New Issue**
3. Choose **Feature Request**
4. Fill in the template
5. Submit

---

## 📚 Enhancement Ideas

### High Priority
- [ ] Backend integration for form submissions
- [ ] Email notification system
- [ ] Admin appointment dashboard
- [ ] Multi-language support

### Medium Priority
- [ ] Blog/Articles section
- [ ] Case studies showcase
- [ ] Testimonials section
- [ ] Gallery/Portfolio

### Low Priority
- [ ] Dark mode toggle
- [ ] Advanced analytics
- [ ] Live chat integration
- [ ] Payment integration

---

## 🔐 Security

### Security Guidelines
- Never commit sensitive data (.env files, API keys, passwords)
- Validate all user inputs
- Use HTTPS for all external resources
- Keep dependencies updated
- Report security issues privately to maintainers

### Reporting Security Issues
- **DO NOT** create public issues for security vulnerabilities
- Email: adelsafy0@gmail.com
- Include detailed description and steps to reproduce

---

## 📖 Documentation

### Update Documentation When:
- Adding new features
- Changing existing functionality
- Fixing bugs that weren't obvious
- Updating instructions

### Documentation Files
- `README.md` - Project overview
- `SETUP_COMPLETE.md` - Setup guide
- `docs/deployment.md` - Deployment instructions
- Code comments - Inline explanations

---

## ✅ Review Checklist

Before submitting a PR, ensure:

**Code Quality**
- [ ] Code follows style guidelines
- [ ] No console errors/warnings
- [ ] Comments added for complex logic
- [ ] DRY principle followed (Don't Repeat Yourself)
- [ ] Performance optimized

**Testing**
- [ ] Tested in Chrome
- [ ] Tested in Firefox
- [ ] Tested in Safari
- [ ] Tested on mobile
- [ ] Form validation works
- [ ] Responsive design verified

**Documentation**
- [ ] README updated (if needed)
- [ ] Comments added
- [ ] Deployment guide updated (if needed)
- [ ] CONTRIBUTING guide updated (if needed)

**Git**
- [ ] Commits have clear messages
- [ ] No merge conflicts
- [ ] Branch is up to date with main
- [ ] No unnecessary files committed

---

## 🤝 Community Guidelines

### Be Respectful
- Treat all contributors with respect
- Be open to feedback and suggestions
- Avoid personal attacks
- Focus on ideas, not individuals

### Be Helpful
- Help other contributors
- Answer questions patiently
- Provide constructive feedback
- Share knowledge

### Be Professional
- Use clear, professional language
- Keep discussions on-topic
- Respect others' time
- Follow the code of conduct

---

## 📞 Questions?

- Check existing documentation
- Search closed issues for similar questions
- Ask in issues with [QUESTION] tag
- Contact: adelsafy0@gmail.com

---

## 🙏 Thank You!

Your contributions make this project better! We appreciate:
- Bug reports
- Feature suggestions
- Code improvements
- Documentation updates
- Sharing the project

---

## 📄 License

By contributing to this project, you agree that your contributions will be licensed under its MIT License.

---

**Happy Contributing! 🚀**

Last Updated: June 25, 2026
