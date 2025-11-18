# E-Commerce Website - Frontend Setup Guide

## 📁 Project Structure

```
dummy/
├── main/
│   ├── static/                 # Static files (CSS, JS, Images)
│   │   ├── css/
│   │   │   └── style.css       # Main CSS file
│   │   ├── js/
│   │   │   └── main.js         # Main JavaScript file
│   │   └── images/             # Put your images here
│   ├── templates/              # HTML templates
│   │   └── main/
│   │       ├── base.html       # Base template (extends to all pages)
│   │       ├── index.html      # Homepage
│   │       ├── products.html   # Products listing page
│   │       ├── product_detail.html  # Single product detail
│   │       ├── cart.html       # Shopping cart page
│   │       ├── about.html      # About page
│   │       └── contact.html    # Contact page
│   └── models.py               # Database models
├── myproject/                  # Django project settings
├── manage.py                   # Django management script
└── requirements.txt            # Python dependencies
```

## 🎨 Where to Put Your Frontend Files

### 1. **HTML Files** 📄
**Location:** `main/templates/main/`

Your HTML files go here. The following files are already created:
- `base.html` - Base template (all pages inherit from this)
- `index.html` - Homepage
- `products.html` - Products listing with filtering
- `product_detail.html` - Individual product details
- `cart.html` - Shopping cart
- `about.html` - About page
- `contact.html` - Contact page

**To add your own HTML files:**
1. Create new `.html` files in `main/templates/main/` folder
2. Use Django template tags: `{% extends 'main/base.html' %}`
3. Define blocks like `{% block content %}...{% endblock %}`

**Example:**
```html
{% extends 'main/base.html' %}

{% block title %}My Page Title{% endblock %}

{% block content %}
    <h1>Your content here</h1>
{% endblock %}
```

### 2. **CSS Files** 🎨
**Location:** `main/static/css/`

The main CSS file is `style.css` which includes:
- Global styles
- Navigation bar
- Product cards
- Forms
- Responsive design

**To add multiple CSS files:**
1. Create separate `.css` files in `main/static/css/`
2. Link them in `base.html`:
```html
<link rel="stylesheet" href="{% static 'css/your-file.css' %}">
```

**Already included CSS features:**
- Responsive grid layout
- Navigation styling
- Product card styling
- Button styles
- Mobile-friendly design

### 3. **JavaScript Files** 📝
**Location:** `main/static/js/`

The main JS file is `main.js` which includes:
- Add to cart functionality
- Form handling
- CSRF token management
- Price formatting

**To add multiple JS files:**
1. Create separate `.js` files in `main/static/js/`
2. Add them in `base.html` before the closing `</body>` tag:
```html
<script src="{% static 'js/your-file.js' %}"></script>
```

Or add them in individual templates:
```html
{% block extra_js %}
<script src="{% static 'js/your-file.js' %}"></script>
{% endblock %}
```

### 4. **Images & Assets** 🖼️
**Location:** `main/static/images/`

1. Put all your image files here
2. Reference them in HTML:
```html
<img src="{% static 'images/your-image.png' %}" alt="Description">
```

For product images uploaded through Django admin:
- They are stored in `media/products/` folder
- Access via `{{ product.image.url }}`

## 🔗 Using Static Files in Templates

**Always use the `{% static %}` tag:**

```html
{% load static %}
<!-- CSS -->
<link rel="stylesheet" href="{% static 'css/style.css' %}">

<!-- Images -->
<img src="{% static 'images/logo.png' %}" alt="Logo">

<!-- JavaScript -->
<script src="{% static 'js/main.js' %}"></script>
```

## 📝 Available Pages & Views

| Page | URL | Template | Description |
|------|-----|----------|-------------|
| Home | `/` | `index.html` | Homepage with featured products |
| Products | `/products/` | `products.html` | All products with category filter |
| Product Detail | `/product/<id>/` | `product_detail.html` | Single product with details |
| Cart | `/cart/` | `cart.html` | Shopping cart |
| About | `/about/` | `about.html` | About page |
| Contact | `/contact/` | `contact.html` | Contact form |
| Admin | `/admin/` | Django built-in | Manage products & categories |

## 🔧 How to Integrate Your Own Frontend

### Step 1: Replace HTML Templates
If you have your own HTML files:
1. Copy your `.html` files to `main/templates/main/`
2. Update the template names in `views.py` if needed
3. Wrap content with Django tags for dynamic data

### Step 2: Replace CSS
1. Copy your `.css` files to `main/static/css/`
2. Update CSS file names in `base.html` `<link>` tags

### Step 3: Replace JavaScript
1. Copy your `.js` files to `main/static/js/`
2. Add script tags in `base.html` or individual templates
3. Ensure CSRF token is included for form submissions

### Step 4: Copy Images
1. Put all images in `main/static/images/`
2. Update image paths in HTML to use `{% static 'images/...' %}`

## 🚀 Running the Server

```bash
# Activate virtual environment (Windows PowerShell)
.\venv\Scripts\Activate.ps1

# Run development server
python manage.py runserver
```

Visit: `http://127.0.0.1:8000/`

## 💾 Adding Products in Admin Panel

1. Go to `http://127.0.0.1:8000/admin/`
2. Create a superuser (if not created):
   ```bash
   python manage.py createsuperuser
   ```
3. Login with superuser credentials
4. Add Categories and Products in the admin panel

## 📦 Key Django Template Tags

```html
{% load static %}

<!-- Static files -->
{% static 'path/to/file' %}

<!-- URLs (no hardcoding) -->
{% url 'main:home' %}
{% url 'main:product_detail' product.id %}

<!-- Conditionals -->
{% if condition %}...{% endif %}

<!-- Loops -->
{% for item in items %}...{% endfor %}

<!-- Variables -->
{{ variable_name }}

<!-- Filters -->
{{ text|truncatewords:10 }}
{{ price|floatformat:2 }}
```

## 🔐 Important Notes

1. **Always use `{% static %}` tag** for CSS, JS, and images
2. **Always use `{% url %}` tag** for links (no hardcoded URLs)
3. **Use `{% csrf_token %}`** in all forms for security
4. **Images uploaded via forms** go to `media/` folder
5. **Static files** (CSS, JS, images you provide) go to `static/` folder

## 📚 Next Steps

1. **Customize base.html** - Add your logo, header, footer design
2. **Style the pages** - Modify `style.css` to match your design
3. **Add more pages** - Create new HTML files following the same pattern
4. **Add JavaScript interactivity** - Enhance with animations, validations
5. **Add products** - Use Django admin to add categories and products

For more help, check Django documentation: https://docs.djangoproject.com/
