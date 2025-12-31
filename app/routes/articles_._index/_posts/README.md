# Articles Post Structure

This folder contains all your blog posts in a well-organized, easy-to-manage format.

## Folder Structure

Each article is organized in its own folder with the following structure:

```
_posts/
├── post-slug/
│   ├── meta.json          # Metadata (title, date, abstract, etc.)
│   ├── content.mdx        # Article content in MDX format
│   └── images/            # All images for this article
│       ├── banner.jpg     # Featured banner image (optional)
│       └── other-image.jpg
└── another-post/
    ├── meta.json
    ├── content.mdx
    └── images/
```

## Creating a New Article

### Step 1: Create the folder structure

```bash
mkdir -p _posts/my-new-article/images
```

### Step 2: Create `meta.json`

This file contains metadata about your article:

```json
{
  "title": "Your Article Title",
  "abstract": "A brief summary of your article (shown in the list)",
  "date": "2025-12-31",
  "featured": false,
  "banner": "/articles/my-new-article/images/banner.jpg"
}
```

**Fields:**
- `title` (string, required): The title of your article
- `abstract` (string, required): A brief summary shown in the articles list
- `date` (string, required): Publication date in YYYY-MM-DD format
- `featured` (boolean, optional): Set to `true` to feature this article at the top (default: false)
- `banner` (string, optional): Path to the banner image (used for featured articles)

### Step 3: Create `content.mdx`

Write your article content in MDX format (Markdown + JSX support).

**Example:**
```mdx
# My Article Title

Welcome to my article! This is the opening paragraph.

## Section 1

Here's some content with a list:
- Point 1
- Point 2
- Point 3

## Section 2

You can also reference images:

![Image alt text](/articles/my-new-article/images/my-image.jpg)

Or use JSX components directly in MDX if needed.
```

### Step 4: Add images to the `images/` folder

Place all images in the `images/` subfolder. Reference them in your content with the path:

```
/articles/post-slug/images/image-name.jpg
```

## Examples

### Example 1: Simple Article

**Folder:** `_posts/getting-started/`

**meta.json:**
```json
{
  "title": "Getting Started with React",
  "abstract": "A beginner's guide to React fundamentals",
  "date": "2025-01-15",
  "featured": false
}
```

**content.mdx:**
```mdx
# Getting Started with React

React is a JavaScript library...

## Components

Components are the building blocks...
```

### Example 2: Featured Article with Images

**Folder:** `_posts/advanced-techniques/`

**meta.json:**
```json
{
  "title": "Advanced React Techniques",
  "abstract": "Master advanced patterns and optimization strategies",
  "date": "2025-02-01",
  "featured": true,
  "banner": "/articles/advanced-techniques/images/banner.png"
}
```

**content.mdx:**
```mdx
# Advanced React Techniques

![Banner](/articles/advanced-techniques/images/banner.png)

## Performance Optimization

...

## Code Splitting

![Architecture Diagram](/articles/advanced-techniques/images/architecture.png)
```

## Important Notes

1. **Slug Generation**: The folder name becomes your article slug (e.g., `my-new-article` → `/articles/my-new-article`)
2. **Image Paths**: Always use absolute paths starting with `/articles/`
3. **Date Format**: Use `YYYY-MM-DD` format for consistency
4. **Featured Articles**: Only set one article as featured at a time (though multiple are allowed)
5. **Reading Time**: Automatically calculated from word count

## Adding Images

1. Create the image in the `images/` subfolder
2. Reference it in your MDX:
   ```mdx
   ![Alt text](/articles/post-slug/images/image-name.jpg)
   ```

## Markdown & MDX Support

You can use standard Markdown syntax plus JSX:

- **Bold**: `**text**`
- **Italic**: `*text*`
- **Code**: `` `code` ``
- **Code blocks**: ` ```language `
- **Lists**: `- item` or `1. item`
- **Links**: `[text](url)`
- **Images**: `![alt](url)`
- **JSX Components**: `<ComponentName prop="value" />`

## Quick Reference

| Task | How-To |
|------|--------|
| Create new article | Create folder in `_posts/` with `meta.json` and `content.mdx` |
| Add images | Place in `images/` subfolder, reference with `/articles/slug/images/name.jpg` |
| Feature an article | Set `featured: true` in `meta.json` |
| Change publish date | Update `date` field in `meta.json` |
| Update abstract | Edit `abstract` field in `meta.json` |

---

**Tips for best results:**
- Keep folder names short and use hyphens (not spaces)
- Use descriptive image names
- Write clear abstracts (they appear in the article list)
- Optimize images before uploading
