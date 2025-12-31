# Portfolio Directory Structure

## Complete Folder Layout

```
portfolio/
│
├── SETUP_COMPLETE.md                          ← Setup overview
├── ARTICLE_GUIDE.md                           ← Full article system guide
├── SYSTEM_REDESIGN_SUMMARY.md                 ← Before/after comparison
│
├── app/
│   └── routes/
│       └── articles_._index/
│           │
│           ├── _posts/                        ← ALL ARTICLES HERE
│           │   │
│           │   ├── QUICK_START.md             ← Quick reference (30 seconds)
│           │   ├── README.md                  ← Full documentation
│           │   │
│           │   ├── TEMPLATE_meta.json         ← Use to create new articles
│           │   ├── TEMPLATE_content.mdx       ← Use to create new articles
│           │   │
│           │   ├── hello-world/               ← Article 1
│           │   │   ├── meta.json              ├─ Metadata (title, date, etc)
│           │   │   ├── content.mdx            ├─ Article content (Markdown)
│           │   │   └── images/                └─ Images folder
│           │   │       └── (banner.jpg, etc)
│           │   │
│           │   └── modern-styling-in-react/   ← Article 2
│           │       ├── meta.json              ├─ Metadata (title, date, etc)
│           │       ├── content.mdx            ├─ Article content (Markdown)
│           │       └── images/                └─ Images folder
│           │           └── (banner.jpg, etc)
│           │
│           ├── articles.jsx                   ← Display component
│           ├── articles.module.css            ← Styling
│           ├── posts.server.js                ← ⭐ UPDATED: Loads from _posts/
│           └── route.jsx                      ← Route config
│
└── [other project files...]
```

## Article Folder Template

Every article follows this structure:

```
_posts/article-slug/
│
├── meta.json                      (Required)
│   ├── title
│   ├── abstract
│   ├── date
│   ├── featured (optional)
│   └── banner (optional)
│
├── content.mdx                    (Required)
│   └── Article content in Markdown/MDX
│
└── images/                        (Optional)
    ├── banner.jpg
    ├── screenshot.png
    └── [any other images]
```

## Documentation Files

### Root Level
- `SETUP_COMPLETE.md` - This setup overview
- `ARTICLE_GUIDE.md` - Complete system documentation
- `SYSTEM_REDESIGN_SUMMARY.md` - What changed and why

### In _posts/
- `QUICK_START.md` - 30-second quick reference
- `README.md` - Detailed guide with examples
- `TEMPLATE_meta.json` - Copy for new articles
- `TEMPLATE_content.mdx` - Copy for new articles

## Current Articles

### 1. Hello World
```
_posts/hello-world/
├── meta.json                    ← Featured: false
├── content.mdx                  ← Basic intro article
└── images/
```

### 2. Modern Styling in React
```
_posts/modern-styling-in-react/
├── meta.json                    ← Featured: true
├── content.mdx                  ← Full article content
└── images/
```

## Key Files Modified

- ✅ `posts.server.js` - Updated to load from `_posts/` folder structure

## Key Files Created

- ✅ `_posts/` - Main articles directory
- ✅ `SETUP_COMPLETE.md` - Setup guide (root)
- ✅ `ARTICLE_GUIDE.md` - Full system guide (root)
- ✅ `SYSTEM_REDESIGN_SUMMARY.md` - Before/after (root)
- ✅ `_posts/README.md` - Detailed documentation
- ✅ `_posts/QUICK_START.md` - Quick reference
- ✅ `_posts/TEMPLATE_meta.json` - Template
- ✅ `_posts/TEMPLATE_content.mdx` - Template
- ✅ Example articles with proper structure

## How to Add a New Article

```bash
# Navigate to _posts/
cd app/routes/articles_._index/_posts/

# Create new folder with images subdirectory
mkdir -p my-new-article/images

# Copy templates (or edit manually)
cp TEMPLATE_meta.json my-new-article/meta.json
cp TEMPLATE_content.mdx my-new-article/content.mdx

# Edit the files with your content
# Add images to my-new-article/images/

# Done! Article appears automatically when you start the server
```

## Article Metadata Example

```json
{
  "title": "How to Learn React",
  "abstract": "A beginner's guide to getting started with React development",
  "date": "2025-01-15",
  "featured": false,
  "banner": "/articles/how-to-learn-react/images/banner.jpg"
}
```

## Image Reference Example

In your `content.mdx`:

```markdown
![Article banner](/articles/how-to-learn-react/images/banner.jpg)

# How to Learn React

Some content here...

![Diagram](/articles/how-to-learn-react/images/architecture.png)
```

## System Benefits

✅ **Organized** - All article files in one place
✅ **Self-Contained** - Images stored with articles
✅ **Easy to Manage** - Simple folder structure
✅ **Well-Documented** - Guides and templates included
✅ **Automatic** - No configuration needed
✅ **Scalable** - Easy to add many articles

## Next Steps

1. Read `QUICK_START.md` (in _posts/)
2. Review `README.md` (in _posts/)
3. Create new articles using templates
4. Run development server to see articles

---

**Status:** ✅ Setup Complete
**Version:** 2.0 (Folder-based)
**Last Updated:** January 2025
