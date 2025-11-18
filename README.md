# E-Commerce Django Website

A full-featured e-commerce website built with Django. This project includes a complete backend with models, views, and templates, plus structured frontend directories for your HTML, CSS, and JavaScript files.

## 🚀 Quick Start

### Prerequisites
- Python 3.8+
- Virtual Environment

### Installation

1. **Navigate to project directory:**
```bash
cd dummy
```

2. **Activate virtual environment (Windows PowerShell):**
```bash
.\venv\Scripts\Activate.ps1
```

Or (Windows CMD):
```bash
venv\Scripts\activate.bat
```

3. **Install dependencies:**
```bash
pip install -r requirements.txt
```

4. **Run migrations:**
```bash
python manage.py migrate
```

5. **Create superuser (admin account):**
```bash
python manage.py createsuperuser
```

6. **Start development server:**
```bash
python manage.py runserver
```

7. **Access the site:**
- Main site: `http://127.0.0.1:8000/`
- Admin panel: `http://127.0.0.1:8000/admin/`

## 📁 Project Structure

```
dummy/
├── main/
│   ├── migrations/             # Database migrations
│   ├── static/                 # Static files (CSS, JS, Images)
│   │   ├── css/
│   │   │   └── style.css       # Main stylesheet
│   │   ├── js/
│   │   │   └── main.js         # Main JavaScript
│   │   └── images/             # Your images
│   ├── templates/              # HTML templates
│   │   └── main/
│   │       ├── base.html       # Base template
│   │       ├── index.html      # Homepage
│   │       ├── products.html   # Products list
│   │       ├── product_detail.html
│   │       ├── cart.html       # Shopping cart
│   │       ├── about.html
│   │       └── contact.html
│   ├── models.py               # Database models
│   ├── views.py                # View functions
│   ├── urls.py                 # URL routing
│   └── admin.py                # Admin config
├── myproject/                  # Django project settings
├── manage.py                   # Django CLI
├── requirements.txt            # Dependencies
├── FRONTEND_SETUP_GUIDE.md     # Frontend integration guide
└── README.md                   # This file
```

## 📄 Pages & Routes

| Page | URL | File |
|------|-----|------|
| Home | `/` | `index.html` |
| Products | `/products/` | `products.html` |
| Product Detail | `/product/<id>/` | `product_detail.html` |
| Cart | `/cart/` | `cart.html` |
| About | `/about/` | `about.html` |
| Contact | `/contact/` | `contact.html` |
| Admin | `/admin/` | Django built-in |

## 🗂️ Frontend Files Location

### HTML Templates
**Put your `.html` files here:** `main/templates/main/`
- Already created: base.html, index.html, products.html, product_detail.html, cart.html, about.html, contact.html

### CSS Stylesheets  
**Put your `.css` files here:** `main/static/css/`
- Already created: style.css (base styling with responsive design)
- Link in templates: `<link rel="stylesheet" href="{% static 'css/your-file.css' %}">`

### JavaScript Files
**Put your `.js` files here:** `main/static/js/`
- Already created: main.js (cart, form handling, CSRF token)
- Link in templates: `<script src="{% static 'js/your-file.js' %}"></script>`

### Images & Assets
**Put your images here:** `main/static/images/`
- Use in templates: `<img src="{% static 'images/your-image.png' %}" alt="Description">`

## 💾 Database Models

### Category
```python
- name (CharField)
- description (TextField)
- created_at (DateTime)
```

### Product
```python
- name (CharField)
- description (TextField)
- price (Decimal)
- category (ForeignKey to Category)
- image (ImageField)
- stock (Integer)
- created_at, updated_at (DateTime)
```

### Cart
```python
- created_at, updated_at (DateTime)
```

### CartItem
```python
- cart (ForeignKey to Cart)
- product (ForeignKey to Product)
- quantity (Integer)
```

## 🎨 Customizing Frontend

### If you have existing HTML files:
1. Copy your `.html` files to `main/templates/main/`
2. Wrap with Django template tags
3. Update in views if needed

### If you have existing CSS:
1. Copy your `.css` files to `main/static/css/`
2. Link them in `base.html`

### If you have existing JavaScript:
1. Copy your `.js` files to `main/static/js/`
2. Add `<script>` tags in templates

### If you have images:
1. Copy to `main/static/images/`
2. Reference with `{% static 'images/...' %}` tag

**See FRONTEND_SETUP_GUIDE.md for detailed instructions!**

## 📊 Admin Panel Features

1. Create/Edit Categories
2. Create/Edit Products with images
3. Manage Cart items
4. View user activity

To access admin:
1. Start the server: `python manage.py runserver`
2. Visit: `http://127.0.0.1:8000/admin/`
3. Login with superuser credentials

## 🔧 Useful Commands

```bash
# Create migrations
python manage.py makemigrations

# Apply migrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Run tests
python manage.py test

# Open Django shell
python manage.py shell

# Collect static files (production)
python manage.py collectstatic

# Start development server
python manage.py runserver

# Start on specific port
python manage.py runserver 8080
```

## 📦 Installed Packages

- Django 5.2.8
- Pillow (for image handling)
- asgiref, sqlparse, tzdata (Django dependencies)

## ⚙️ Configuration

### Settings File: `myproject/settings.py`

Key configurations:
- `DEBUG = True` (Change to False for production)
- `ALLOWED_HOSTS = []` (Add domain for production)
- `DATABASES` (Currently using SQLite)
- `STATIC_URL = 'static/'`
- `MEDIA_URL = 'media/'`

### URL Configuration: `myproject/urls.py`

Main URL patterns and media file serving configured.

## 🔐 Security Notes

1. Change `SECRET_KEY` in `settings.py` for production
2. Set `DEBUG = False` for production
3. Use `{% csrf_token %}` in all forms
4. Always use `{% static %}` tag for static files
5. Always use `{% url %}` tag for links (no hardcoded URLs)

## 🌐 Responsive Design

The included `style.css` features:
- Mobile-first approach
- Media queries for tablets and phones
- Flexible grid layout
- Touch-friendly buttons and forms

## 📚 Learning Resources

- Django Official Documentation: https://docs.djangoproject.com/
- Django Templates: https://docs.djangoproject.com/en/5.2/topics/templates/
- Static Files: https://docs.djangoproject.com/en/5.2/howto/static-files/

## 🤝 Development Tips

1. **Always use virtual environment** - Keeps dependencies isolated
2. **Use template inheritance** - Base.html extends to all pages
3. **Keep models organized** - Use related_name for reverse queries
4. **Use Django ORM** - Don't write raw SQL
5. **Create meaningful migrations** - Good for version control

## 📞 Next Steps

1. Read **FRONTEND_SETUP_GUIDE.md** for detailed frontend setup
2. Customize `base.html` with your design
3. Modify `style.css` for your branding
4. Add your HTML files to templates folder
5. Add products through admin panel
6. Deploy to production when ready

## 🎯 Features Implemented

✅ Complete e-commerce models (Category, Product, Cart, CartItem)
✅ Product listing and filtering by category
✅ Product detail pages
✅ Shopping cart functionality
✅ Static file management (CSS, JS, Images)
✅ Responsive design
✅ Admin panel integration
✅ Template inheritance system
✅ Django ORM integration

## 📝 Notes

- Database is SQLite (included). For production, use PostgreSQL or MySQL.
- Images are stored in `media/` folder
- Static files (CSS, JS) are in `static/` folder
- All templates use Django template language

**Happy coding! 🚀**
