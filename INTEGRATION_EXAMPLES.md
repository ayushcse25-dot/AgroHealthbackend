# Integration Examples - Your Frontend with Django

This document shows you exactly how to integrate your existing HTML, CSS, and JavaScript files.

## 📋 Example 1: Integrating Multiple HTML Pages

### Your Current Setup
```
my-frontend/
├── index.html
├── products.html
├── product-detail.html
├── cart.html
├── about.html
├── contact.html
└── css/
    └── styles.css
```

### Where to Copy

1. **Copy HTML files** to `main/templates/main/`
   - `index.html` → `main/templates/main/index.html`
   - `products.html` → `main/templates/main/products.html`
   - etc.

2. **Copy CSS** to `main/static/css/`
   - `styles.css` → `main/static/css/styles.css`

### How to Convert Your HTML to Django Templates

**Before (Your current HTML):**
```html
<!DOCTYPE html>
<html>
<head>
    <title>E-Shop</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <nav class="navbar">
        <a href="index.html">Home</a>
        <a href="products.html">Products</a>
    </nav>
    
    <div class="products">
        <!-- Product cards -->
    </div>
    
    <script src="js/main.js"></script>
</body>
</html>
```

**After (Django Template):**
```html
{% extends 'main/base.html' %}
{% load static %}

{% block title %}E-Shop - Products{% endblock %}

{% block content %}
<div class="products">
    {% for product in products %}
    <div class="product-card">
        <h3>{{ product.name }}</h3>
        <p>${{ product.price }}</p>
        <a href="{% url 'main:product_detail' product.id %}">View Details</a>
    </div>
    {% endfor %}
</div>
{% endblock %}
```

## 🎨 Example 2: Using Your CSS

### Option A: Single CSS File

**`main/static/css/styles.css`** (Your CSS)

**In `base.html`, change:**
```html
<!-- Before -->
<link rel="stylesheet" href="{% static 'css/style.css' %}">

<!-- After -->
<link rel="stylesheet" href="{% static 'css/styles.css' %}">
```

### Option B: Multiple CSS Files

Keep both the provided CSS and your CSS:

```html
<!-- In base.html -->
<link rel="stylesheet" href="{% static 'css/style.css' %}">       <!-- Provided CSS -->
<link rel="stylesheet" href="{% static 'css/your-styles.css' %}"> <!-- Your CSS -->
```

## 📝 Example 3: Using Your JavaScript

### File Structure
```
main/static/js/
├── main.js           # Provided JS
├── cart.js           # Your cart script
├── products.js       # Your products script
└── animations.js     # Your animations
```

### In Templates

**Add in `base.html` before `</body>`:**
```html
<script src="{% static 'js/main.js' %}"></script>
<script src="{% static 'js/cart.js' %}"></script>
<script src="{% static 'js/products.js' %}"></script>
<script src="{% static 'js/animations.js' %}"></script>
```

**Or add only to specific templates:**
```html
{% block extra_js %}
<script src="{% static 'js/products.js' %}"></script>
{% endblock %}
```

## 🖼️ Example 4: Using Your Images

### File Structure
```
main/static/images/
├── logo.png
├── banner.jpg
├── icon-search.svg
└── backgrounds/
    └── header-bg.jpg
```

### In HTML
```html
<!-- Logo -->
<img src="{% static 'images/logo.png' %}" alt="Logo">

<!-- Banner -->
<img src="{% static 'images/banner.jpg' %}" alt="Banner">

<!-- Icon -->
<img src="{% static 'images/icon-search.svg' %}" alt="Search">

<!-- Background image in CSS -->
```

### In CSS
```css
.header {
    background-image: url('/static/images/backgrounds/header-bg.jpg');
    background-size: cover;
}
```

## 🔗 Example 5: Converting Links

### Your Current HTML
```html
<a href="index.html">Home</a>
<a href="products.html">Products</a>
<a href="product-detail.html?id=5">Product 5</a>
<a href="contact.html">Contact</a>
```

### Django Templates (No Hardcoded URLs!)
```html
<a href="{% url 'main:home' %}">Home</a>
<a href="{% url 'main:product_list' %}">Products</a>
<a href="{% url 'main:product_detail' product_id %}">Product</a>
<a href="{% url 'main:contact' %}">Contact</a>
```

## 📋 Example 6: Converting Forms

### Your HTML Form
```html
<form method="POST" action="contact.php">
    <input type="text" name="name" placeholder="Your Name">
    <input type="email" name="email" placeholder="Your Email">
    <textarea name="message" placeholder="Message"></textarea>
    <button type="submit">Send</button>
</form>
```

### Django Template Form
```html
<form method="POST">
    {% csrf_token %}
    <input type="text" name="name" placeholder="Your Name">
    <input type="email" name="email" placeholder="Your Email">
    <textarea name="message" placeholder="Message"></textarea>
    <button type="submit">Send</button>
</form>
```

## 🔄 Example 7: Displaying Dynamic Content

### Your HTML (Static)
```html
<div class="products">
    <div class="product-card">
        <img src="images/product1.jpg">
        <h3>Product 1</h3>
        <p>$99.99</p>
    </div>
    <div class="product-card">
        <img src="images/product2.jpg">
        <h3>Product 2</h3>
        <p>$129.99</p>
    </div>
</div>
```

### Django Template (Dynamic)
```html
<div class="products">
    {% for product in products %}
    <div class="product-card">
        {% if product.image %}
            <img src="{{ product.image.url }}" alt="{{ product.name }}">
        {% else %}
            <img src="{% static 'images/placeholder.jpg' %}" alt="No image">
        {% endif %}
        <h3>{{ product.name }}</h3>
        <p>${{ product.price }}</p>
        <a href="{% url 'main:product_detail' product.id %}">View Details</a>
    </div>
    {% empty %}
    <p>No products available</p>
    {% endfor %}
</div>
```

## 📊 Example 8: Using Variables from Backend

### Python View
```python
def product_list(request):
    products = Product.objects.all()
    context = {
        'products': products,
        'total_products': products.count(),
    }
    return render(request, 'main/products.html', context)
```

### HTML Template
```html
<h2>All Products ({{ total_products }})</h2>

{% if products %}
    <div class="products-grid">
        {% for product in products %}
        <div class="product-item">
            <h3>{{ product.name }}</h3>
            <p class="price">${{ product.price }}</p>
            <p class="stock">Stock: {{ product.stock }}</p>
        </div>
        {% endfor %}
    </div>
{% else %}
    <p>No products found.</p>
{% endif %}
```

## ✅ Checklist for Integration

- [ ] Copy all `.html` files to `main/templates/main/`
- [ ] Copy all `.css` files to `main/static/css/`
- [ ] Copy all `.js` files to `main/static/js/`
- [ ] Copy all images to `main/static/images/`
- [ ] Update `<link>` tags to use `{% static %}` tag
- [ ] Update `<script>` tags to use `{% static %}` tag
- [ ] Update `<img src>` to use `{% static %}` tag
- [ ] Convert hardcoded links to `{% url %}` tags
- [ ] Add `{% csrf_token %}` to forms
- [ ] Use `{% extends 'main/base.html' %}` for inheritance
- [ ] Use `{% block %}` for content sections
- [ ] Add `{% load static %}` at top of templates

## 🚀 Quick Integration Steps

1. **Copy files:**
   ```bash
   # Copy HTML files
   copy your-project\*.html → dummy\main\templates\main\

   # Copy CSS files
   copy your-project\css\*.css → dummy\main\static\css\

   # Copy JS files
   copy your-project\js\*.js → dummy\main\static\js\

   # Copy images
   copy your-project\images\* → dummy\main\static\images\
   ```

2. **Update HTML templates** - Add Django tags
3. **Update CSS** - Change image paths if needed
4. **Test** - Run `python manage.py runserver`

## 📚 Django Template Tags Reference

```html
{% load static %}                          # Load static tag
{% static 'path/to/file' %}               # Static files
{% url 'view_name' %}                     # URL names
{% url 'app:view_name' param_id %}        # URL with parameters
{% if condition %}...{% endif %}          # Conditionals
{% for item in items %}...{% endfor %}    # Loops
{{ variable }}                             # Display variables
{% csrf_token %}                          # CSRF protection
{% extends 'template.html' %}             # Template inheritance
{% block name %}...{% endblock %}         # Block definition
{% include 'template.html' %}             # Include template
{{ value|filter }}                        # Filters
{% comment %}...{% endcomment %}          # Comments
```

## 🎯 Common Mistakes to Avoid

❌ **Wrong:** `<link href="css/styles.css">`
✅ **Right:** `<link href="{% static 'css/styles.css' %}">`

❌ **Wrong:** `<a href="products.html">`
✅ **Right:** `<a href="{% url 'main:product_list' %}">`

❌ **Wrong:** `<form method="POST">`
✅ **Right:** `<form method="POST">{% csrf_token %}...</form>`

❌ **Wrong:** `{{ product.image }}`
✅ **Right:** `<img src="{{ product.image.url }}">`

## 📞 Need Help?

Check the main README.md and FRONTEND_SETUP_GUIDE.md files!
