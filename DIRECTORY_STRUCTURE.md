# E-Commerce Project Directory Structure

## 📁 Quick Visual Guide

```
dummy/
│
├── 📄 manage.py                    # Django command-line tool
├── 📄 requirements.txt             # Python dependencies
├── 📄 README.md                    # Main documentation
├── 📄 FRONTEND_SETUP_GUIDE.md      # How to add your frontend files
├── 📄 INTEGRATION_EXAMPLES.md      # Code examples for integration
├── 📄 .gitignore                   # Git ignore rules
│
├── 📁 main/                        # Main Django app
│   ├── 📄 models.py               # Database models (Category, Product, Cart, CartItem)
│   ├── 📄 views.py                # View functions (home, product_list, etc.)
│   ├── 📄 urls.py                 # URL routing
│   ├── 📄 admin.py                # Django admin configuration
│   ├── 📄 apps.py                 # App configuration
│   ├── 📄 tests.py                # Tests
│   │
│   ├── 📁 templates/              # 👈 HTML FILES GO HERE
│   │   └── 📁 main/
│   │       ├── 🌐 base.html       # Base template (parent for all pages)
│   │       ├── 🌐 index.html      # Homepage
│   │       ├── 🌐 products.html   # Products listing page
│   │       ├── 🌐 product_detail.html  # Single product detail
│   │       ├── 🌐 cart.html       # Shopping cart page
│   │       ├── 🌐 about.html      # About page
│   │       └── 🌐 contact.html    # Contact page
│   │
│   ├── 📁 static/                 # 👈 CSS, JS & IMAGES GO HERE
│   │   ├── 📁 css/
│   │   │   └── 🎨 style.css       # Main stylesheet
│   │   ├── 📁 js/
│   │   │   └── 📝 main.js         # Main JavaScript file
│   │   └── 📁 images/
│   │       └── 🖼️ (your images)
│   │
│   └── 📁 migrations/             # Database migration files
│       └── 0001_initial.py
│
├── 📁 myproject/                  # Django project settings
│   ├── 📄 settings.py             # Project settings
│   ├── 📄 urls.py                 # Main URL configuration
│   ├── 📄 wsgi.py                 # WSGI configuration
│   └── 📄 asgi.py                 # ASGI configuration
│
├── 📁 venv/                       # Virtual environment (auto-generated)
│   ├── 📁 Scripts/
│   ├── 📁 Lib/
│   └── 📄 (various config files)
│
└── 📁 media/                      # User uploads (product images uploaded via admin)
    └── 📁 products/
        └── (product images)
```

## 🎯 Where to Put Your Frontend Files

### 1️⃣ HTML Files
**Location:** `main/templates/main/`
```
main/templates/main/
├── base.html              ← Base template (all pages inherit from this)
├── index.html             ← Your homepage
├── products.html          ← Your products page
├── product_detail.html    ← Your single product page
├── cart.html              ← Your cart page
├── about.html             ← Your about page
└── contact.html           ← Your contact page
```

### 2️⃣ CSS Files
**Location:** `main/static/css/`
```
main/static/css/
├── style.css              ← Main CSS (already provided)
├── your-styles.css        ← Add your CSS here
├── animations.css         ← Optional: animations
└── responsive.css         ← Optional: responsive design
```

### 3️⃣ JavaScript Files
**Location:** `main/static/js/`
```
main/static/js/
├── main.js                ← Main JS (already provided)
├── cart.js                ← Your cart functionality
├── products.js            ← Your products logic
└── animations.js          ← Optional: animations
```

### 4️⃣ Images & Assets
**Location:** `main/static/images/`
```
main/static/images/
├── logo.png
├── banner.jpg
├── icon-search.svg
├── backgrounds/
│   └── header-bg.jpg
└── products/
    └── (product images from admin)
```

## 📊 Database Models Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                        DATABASE                             │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Category                 Product                           │
│  ┌──────────────────┐    ┌──────────────────┐              │
│  │ id (PK)          │    │ id (PK)          │              │
│  │ name             │    │ name             │              │
│  │ description      │    │ description      │              │
│  │ created_at       │    │ price            │──┐           │
│  └──────────────────┘    │ category_id (FK) │  │           │
│         ▲                │ image            │  │           │
│         │                │ stock            │  │           │
│         └────────────┤   │ created_at       │  │           │
│          1 to Many      │ updated_at       │  │           │
│                         └──────────────────┘  │           │
│                                               │           │
│         Cart                   CartItem       │           │
│         ┌──────────────────┐   ┌───────────────────┐      │
│         │ id (PK)          │   │ id (PK)           │      │
│         │ created_at       │   │ cart_id (FK) ─────┼────┐ │
│         │ updated_at       │   │ product_id (FK) ──┤────┼─┼──┐
│         └──────────────────┘   │ quantity          │    │ │  │
│                ▲                └───────────────────┘    │ │  │
│                │                                         │ │  │
│                └─────1 to Many──────────────────────────┘ │  │
│                                                            │  │
│                                                            └──┘
└─────────────────────────────────────────────────────────────┘
```

## 🔄 Request Flow

```
User Browser
    │
    ↓
URLs (main/urls.py)          Routes request to views
    │
    ↓
Views (main/views.py)         Processes logic, gets data
    │
    ↓
Models (main/models.py)       Fetches data from database
    │
    ↓
Database (SQLite)             Stores/retrieves data
    │
    ↓ (returns data)
Templates (main/templates/)   Renders HTML with Django tags
    │
    ↓ (includes)
Static Files (main/static/)   CSS, JS, Images
    │
    ↓
User Browser                  Displays webpage
```

## 📝 File Purposes

| File/Folder | Purpose |
|-------------|---------|
| `manage.py` | Django command-line tool |
| `settings.py` | Project configuration |
| `urls.py` | URL routing (main: myproject/urls.py) |
| `views.py` | Business logic, renders templates |
| `models.py` | Database schema definitions |
| `templates/` | HTML files (Django templates) |
| `static/` | CSS, JavaScript, Images |
| `media/` | User-uploaded files (product images) |
| `migrations/` | Database change history |
| `admin.py` | Django admin configuration |

## 🚀 Development Workflow

```
1. Start Server
   python manage.py runserver

2. Create Content
   Add products via /admin/

3. View Website
   Visit http://127.0.0.1:8000/

4. Edit Templates
   Modify main/templates/main/*.html

5. Edit Styles
   Modify main/static/css/*.css

6. Edit Scripts
   Modify main/static/js/*.js

7. Refresh Browser
   See changes (with CSS/JS hard refresh: Ctrl+Shift+R)

8. Make Database Changes
   python manage.py makemigrations
   python manage.py migrate
```

## 💾 Key Directories

| Directory | Contains | Read/Write |
|-----------|----------|-----------|
| `main/templates/main/` | HTML pages | Read & Write |
| `main/static/css/` | Stylesheets | Read & Write |
| `main/static/js/` | JavaScript | Read & Write |
| `main/static/images/` | Images | Read & Write |
| `media/` | Uploaded files | Write only (Django) |
| `main/migrations/` | DB migrations | Read only (Django auto-generated) |
| `venv/` | Python packages | Read only (auto-generated) |

## ✅ Checklist for Setup

- [ ] HTML files in `main/templates/main/`
- [ ] CSS files in `main/static/css/`
- [ ] JavaScript files in `main/static/js/`
- [ ] Images in `main/static/images/`
- [ ] Database configured (SQLite already set up)
- [ ] Migrations applied (`python manage.py migrate`)
- [ ] Server running (`python manage.py runserver`)
- [ ] Admin panel accessible (`/admin/`)
- [ ] Products added via admin panel

**Start building! 🎉**
