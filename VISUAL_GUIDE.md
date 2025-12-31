# Article System - Visual Guide

## 🎯 What You Have Now

A **folder-based article system** where each article is self-contained with its own metadata, content, and images.

---

## 📚 Article Structure

### One Complete Article Looks Like:

```
my-article/
│
├── 📄 meta.json
│   └── {
│       "title": "Article Title",
│       "abstract": "Brief description",
│       "date": "2025-01-15",
│       "featured": false,
│       "banner": "/articles/my-article/images/banner.jpg"
│     }
│
├── 📝 content.mdx
│   └── # Article Title
│       
│       Article content in Markdown...
│
└── 🖼️  images/
    ├── banner.jpg
    ├── screenshot.png
    └── diagram.svg
```

---

## 🔄 How Articles Flow

```
┌─────────────────────────────────────┐
│  _posts/ folder (contains articles) │
└──────────────┬──────────────────────┘
               │
               ↓
┌─────────────────────────────────────┐
│  posts.server.js (reads data)       │
│  - Scans _posts/ folder             │
│  - Reads meta.json files            │
│  - Loads content.mdx                │
│  - Calculates reading time          │
│  - Sorts by date                    │
└──────────────┬──────────────────────┘
               │
               ↓
┌─────────────────────────────────────┐
│  route.jsx (prepares data)          │
│  - Gets featured article            │
│  - Filters other articles           │
│  - Passes to component              │
└──────────────┬──────────────────────┘
               │
               ↓
┌─────────────────────────────────────┐
│  articles.jsx (displays articles)   │
│  - Shows article list               │
│  - Shows featured article           │
│  - Links to individual articles     │
└─────────────────────────────────────┘
```

---

## 🚀 Creating an Article - Step by Step

### Step 1️⃣: Create Folder
```
_posts/
└── my-new-article/          ← Create this folder
    └── images/              ← Create images subfolder
```

### Step 2️⃣: Add Metadata File
Create `_posts/my-new-article/meta.json`:
```json
{
  "title": "My Article Title",
  "abstract": "A brief description of the article",
  "date": "2025-01-20",
  "featured": false
}
```

### Step 3️⃣: Add Content File
Create `_posts/my-new-article/content.mdx`:
```markdown
# My Article Title

Start your article here!

## Section 1

Add your content with **bold**, *italic*, [links](url), etc.

## Section 2

You can include images:

![Image alt text](/articles/my-new-article/images/my-image.jpg)

And code blocks:

```javascript
console.log('Hello, World!');
```
```

### Step 4️⃣: Add Images (Optional)
Place images in `_posts/my-new-article/images/`

### Step 5️⃣: Done! ✅
Article appears automatically in your articles list.

---

## 📋 Checklist for New Article

- [ ] Created folder in `_posts/`
- [ ] Created `meta.json` with required fields
- [ ] Created `content.mdx` with article content
- [ ] Created `images/` subfolder
- [ ] Added images (if needed)
- [ ] Checked folder name (hyphens, no spaces)
- [ ] Verified date format (YYYY-MM-DD)
- [ ] Article appears in list

---

## 🖼️ Meta.json Fields Explained

| Field | Type | Required | Example | Purpose |
|-------|------|----------|---------|---------|
| `title` | String | ✅ Yes | "My Article" | Article heading |
| `abstract` | String | ✅ Yes | "Description..." | Shows in list |
| `date` | String | ✅ Yes | "2025-01-15" | Sort & display |
| `featured` | Boolean | ❌ No | `true` | Highlight at top |
| `banner` | String | ❌ No | "/articles/..." | Featured image |

---

## 📝 Markdown Syntax

Use these in your `content.mdx`:

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text** and *italic text*

- Bullet list item
- Another item
  - Nested item

1. Numbered list
2. Second item

[Link text](https://url.com)

![Image alt text](/articles/slug/images/image.jpg)

`inline code`

```javascript
// Code block
function hello() {
  console.log('Hello');
}
```
```

---

## 🎨 Article Display

### In Article List:
```
┌─────────────────────────────────────┐
│  📌 FEATURED ARTICLE                │
│  ├─ Large thumbnail image           │
│  ├─ Title                           │
│  ├─ Abstract (summary)              │
│  ├─ Date                            │
│  └─ Read Experience button          │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  Article Title 2                    │
│  ├─ Date                            │
│  ├─ Abstract                        │
│  ├─ Reading Time: 5 min             │
│  └─ Read More →                     │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  Article Title 3                    │
│  ├─ Date                            │
│  ├─ Abstract                        │
│  ├─ Reading Time: 8 min             │
│  └─ Read More →                     │
└─────────────────────────────────────┘
```

---

## 🔍 File Reference Guide

### Must Read
| File | When | Purpose |
|------|------|---------|
| `QUICK_START.md` | First time | 30-second overview |
| `README.md` | Detailed info | Complete documentation |
| `TEMPLATE_*` | New article | Copy as template |

### Root Documentation
| File | Purpose |
|------|---------|
| `SETUP_COMPLETE.md` | Setup overview |
| `ARTICLE_GUIDE.md` | Full system guide |
| `SYSTEM_REDESIGN_SUMMARY.md` | What changed |
| `DIRECTORY_STRUCTURE.md` | Folder layout |

---

## 💡 Tips & Best Practices

### Folder Names
✅ Good:
- `my-article`
- `react-tutorial`
- `web-performance`

❌ Bad:
- `my article` (spaces)
- `MyArticle` (uppercase)
- `my_article` (underscores)

### Abstracts
✅ Good:
- "Learn how to build fast web applications using modern techniques"

❌ Bad:
- "Article about stuff"
- "Lorem ipsum"

### Dates
✅ Good:
- `"2025-01-15"`

❌ Bad:
- `"Jan 15, 2025"`
- `"15/01/2025"`

### Images
✅ Good:
- `/articles/my-article/images/architecture-diagram.png`

❌ Bad:
- `/static/images/random-image.jpg`
- `../images/image.png`

---

## ⚙️ How Reading Time Works

Automatically calculated based on:
- Word count in `content.mdx`
- Average reading speed (200 words/minute)
- No configuration needed

---

## 🌐 Article URLs

Automatically accessible at:

```
/articles/{folder-name}
```

Examples:
- `/articles/hello-world`
- `/articles/modern-styling-in-react`
- `/articles/my-new-article`

---

## 🎓 Learning Path

**Day 1: Setup**
1. Read `QUICK_START.md`
2. Review `README.md`
3. Understand folder structure

**Day 2: Create First Article**
1. Copy templates
2. Create folder for article
3. Add metadata and content
4. Add images
5. View in list

**Day 3+: Manage Articles**
1. Add more articles
2. Feature best ones
3. Update existing content
4. Add more images

---

## ✅ System Ready!

You now have:
- ✅ Organized article system
- ✅ Two example articles
- ✅ Complete documentation
- ✅ Ready-to-copy templates
- ✅ Clear guidelines

**Start creating articles now!**

---

## 🆘 Troubleshooting

### Article doesn't appear?
- Check `meta.json` is valid JSON
- Verify `content.mdx` exists
- Check folder name (no spaces, lowercase)

### Images don't show?
- Verify path: `/articles/slug/images/name.jpg`
- Check image file exists in folder
- Try refreshing browser

### Reading time is wrong?
- Reading time auto-calculates from word count
- Check content in `content.mdx`
- Cannot be manually set

### Folder won't scan?
- Ensure folder is in `_posts/`
- Check folder name (no special characters)
- Verify `meta.json` and `content.mdx` exist

---

**System Version:** 2.0 (Folder-based)
**Status:** ✅ Ready to Use
**Last Updated:** January 2025

Happy article writing! 🎉
