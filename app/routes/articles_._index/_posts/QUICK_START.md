# Quick Start: Add a New Article

## 30-Second Setup

### 1. Copy Template Folder
```bash
# In app/routes/articles_._index/_posts/
cp -r TEMPLATE my-article-title
```

Or manually create:
```bash
mkdir -p _posts/my-article-title/images
```

### 2. Update `meta.json`
```json
{
  "title": "My Article Title",
  "abstract": "Brief summary here",
  "date": "2025-01-15",
  "featured": false
}
```

### 3. Update `content.mdx`
Write your article content in Markdown.

### 4. Add Images (Optional)
Drop images in `_posts/my-article-title/images/`

## Done! ✅

Your article automatically appears in the list, sorted by date.

---

## File Structure
```
_posts/my-article-title/
├── meta.json           # Metadata (title, date, abstract)
├── content.mdx         # Article content (Markdown)
└── images/             # Place images here
    └── banner.jpg
```

## Image Paths

Reference images in your content:
```markdown
![Alt text](/articles/my-article-title/images/image.jpg)
```

## Mark as Featured

To highlight an article at the top:

```json
{
  "featured": true,
  "banner": "/articles/my-article-title/images/banner.jpg"
}
```

## Tips

- Folder name becomes the article URL (use hyphens, no spaces)
- Date format: `YYYY-MM-DD`
- Reading time is auto-calculated
- Articles sort by date (newest first)

---

**For detailed guide:** See `README.md` in this folder
