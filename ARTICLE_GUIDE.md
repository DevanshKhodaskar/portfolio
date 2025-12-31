# Article System Guide

## Overview

Your article system has been completely redesigned for better organization and ease of creating new posts. Each article is now self-contained in its own folder with separate metadata and content files.

## New Folder Structure

```
app/routes/articles_._index/
├── _posts/                          # Main articles folder
│   ├── README.md                    # This guide
│   ├── hello-world/                 # Article folder
│   │   ├── meta.json               # Article metadata
│   │   ├── content.mdx             # Article content
│   │   └── images/                 # Images folder
│   │       └── banner.jpg
│   └── modern-styling-in-react/
│       ├── meta.json
│       ├── content.mdx
│       └── images/
│           └── banner.jpg
├── articles.jsx                     # Articles display component
├── posts.server.js                 # Server-side post loader (UPDATED)
└── route.jsx                        # Route configuration
```

## How It Works

### 1. **Post Discovery**
   - The system automatically scans the `_posts/` folder
   - Each subfolder represents one article
   - No manual registration needed

### 2. **Data Loading**
   - `meta.json`: Contains article metadata (title, date, featured status, etc.)
   - `content.mdx`: Contains the full article content in MDX format
   - Both files are automatically loaded and processed

### 3. **Image Management**
   - All images go in the `images/` subfolder
   - Images are referenced with absolute paths: `/articles/post-slug/images/image-name.jpg`
   - Easy to move articles without breaking links

## Step-by-Step: Creating a New Article

### 1. Create the Folder Structure

```bash
# Create a new folder with images subfolder
mkdir -p app/routes/articles_._index/_posts/my-new-post/images
```

### 2. Create `meta.json`

Create a file: `app/routes/articles_._index/_posts/my-new-post/meta.json`

```json
{
  "title": "My Article Title",
  "abstract": "A brief summary that appears in the articles list",
  "date": "2025-01-15",
  "featured": false,
  "banner": "/articles/my-new-post/images/banner.jpg"
}
```

**Required fields:**
- `title`: The article title
- `abstract`: Brief summary for the listing
- `date`: Publication date (YYYY-MM-DD)

**Optional fields:**
- `featured`: Set to `true` to highlight this article
- `banner`: Path to banner image (used if featured)

### 3. Create `content.mdx`

Create a file: `app/routes/articles_._index/_posts/my-new-post/content.mdx`

Write your article in Markdown/MDX format:

```mdx
# Article Title

This is the opening paragraph of your article.

## Section 1

Content with **bold** and *italic* text.

- List item 1
- List item 2

## Section 2

You can include images:

![Image description](/articles/my-new-post/images/my-image.jpg)

### Subsection

More content here.

## Code Examples

```javascript
function hello() {
  console.log('Hello, World!');
}
```

## Links

[Link to external site](https://example.com)
```

### 4. Add Images

1. Save your images in the `images/` folder
2. Reference them in your content:
   ```mdx
   ![Alt text](/articles/my-new-post/images/image.jpg)
   ```

### 5. Done!

The article automatically appears in your articles list, sorted by date.

## Article Metadata Fields

| Field | Type | Required | Example | Notes |
|-------|------|----------|---------|-------|
| `title` | string | Yes | "My Article" | Displayed as article heading |
| `abstract` | string | Yes | "Brief summary..." | Shown in article list |
| `date` | string | Yes | "2025-01-15" | YYYY-MM-DD format, used for sorting |
| `featured` | boolean | No | `true` | Highlights article at top |
| `banner` | string | No | "/articles/slug/images/banner.jpg" | Featured image for highlighted articles |

## MDX Features

### Basic Markdown
- **Bold**: `**text**`
- **Italic**: `*text*`
- **Links**: `[Text](url)`
- **Images**: `![Alt](url)`
- **Lists**: `- item` or `1. item`
- **Headings**: `# H1`, `## H2`, etc.
- **Code blocks**: ` ```language code ``` `

### Advanced
- Use JSX components directly
- Import custom components
- Embed external content

## Image Best Practices

1. **Naming**: Use descriptive names (e.g., `architecture-diagram.png`)
2. **Optimization**: Compress images before uploading
3. **Formats**: Use `jpg` for photos, `png` for diagrams
4. **Size**: Keep image dimensions reasonable
5. **Paths**: Always use absolute paths starting with `/articles/`

## Examples

### Example 1: Basic Article

**Folder:** `_posts/react-hooks-guide/`

**meta.json:**
```json
{
  "title": "React Hooks Guide",
  "abstract": "Learn how to use React Hooks effectively",
  "date": "2025-01-20"
}
```

**content.mdx:**
```mdx
# React Hooks Guide

Hooks are a new addition to React...

## useState Hook

The useState hook lets you add state to functional components.

```jsx
const [count, setCount] = useState(0);
```

## useEffect Hook

The useEffect hook lets you perform side effects...
```

### Example 2: Featured Article with Banner

**Folder:** `_posts/web-performance/`

**meta.json:**
```json
{
  "title": "Web Performance Optimization",
  "abstract": "Practical tips to speed up your web applications",
  "date": "2025-02-01",
  "featured": true,
  "banner": "/articles/web-performance/images/banner.png"
}
```

**content.mdx:**
```mdx
![Banner](/articles/web-performance/images/banner.png)

# Web Performance Optimization

In this article, we'll explore practical techniques...

## Lazy Loading

![Lazy loading diagram](/articles/web-performance/images/lazy-loading.png)

Lazy loading helps reduce initial page load...

## Code Splitting

Code splitting reduces bundle size...
```

## File Organization Tips

1. **Keep slugs simple**: Use hyphens, no spaces
   - ✅ Good: `my-article`, `react-101`
   - ❌ Bad: `my article`, `MyArticle`

2. **Organize images**: Group related images logically
   ```
   images/
   ├── banner.jpg
   ├── diagram-1.png
   ├── diagram-2.png
   └── screenshots/
   ```

3. **Date consistency**: Always use YYYY-MM-DD format

4. **One featured article**: While multiple are allowed, keep one featured for best UX

## How Reading Time is Calculated

- Automatic calculation based on word count
- Displayed with article metadata
- No manual configuration needed

## Troubleshooting

### Article doesn't appear
- Check that folder has `meta.json` and `content.mdx`
- Verify `meta.json` is valid JSON
- Check console for error messages

### Images don't show
- Verify image path uses `/articles/slug/images/name.ext`
- Check image file exists in `images/` folder
- Ensure image format is supported (jpg, png, gif, svg)

### Broken links in featured articles
- Update paths in `banner` field in `meta.json`
- Check image filenames match references in `content.mdx`

## Quick Checklist for New Article

- [ ] Created folder in `_posts/`
- [ ] Created `meta.json` with required fields
- [ ] Created `content.mdx` with content
- [ ] Created `images/` folder
- [ ] Added banner image (if featured)
- [ ] Verified folder name uses hyphens (not spaces)
- [ ] Checked date format (YYYY-MM-DD)
- [ ] Tested image paths
- [ ] Article appears in list

## System Commands

No special commands needed! The system automatically:
- Discovers posts in `_posts/`
- Reads metadata from `meta.json`
- Processes content from `content.mdx`
- Calculates reading time
- Sorts by date
- Highlights featured articles

---

**Last Updated:** January 2025
**System Version:** 2.0 (Folder-based)
