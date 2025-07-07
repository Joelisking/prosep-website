# Top Products Schema Setup

This document explains how to set up and manage top products across different pages using Sanity CMS.

## Overview

The top products system allows you to manage different product showcases for each page:

- Home page
- Security Systems page
- Mining & General Industry page
- Laboratory Instruments page
- Pumps page

Each page can have its own unique set of top products, managed through Sanity CMS.

## Setup Instructions

### 1. Start Sanity Studio

```bash
cd sanity
npm run dev
```

This will start the Sanity Studio at `http://localhost:3333`

### 2. Create Top Products Content

1. Open Sanity Studio in your browser
2. Navigate to "Top Products" in the content menu
3. Create a new document for each page:
   - **Page**: Select the appropriate page (Home, Security Systems, etc.)
   - **Section Title**: Enter the title (e.g., "Our Top Products")
   - **Highlighted Word**: Enter the word to highlight (e.g., "Top Products")
   - **Products**: Add 1-6 products with:
     - Product ID (unique identifier)
     - Product Name
     - Category
     - Product Image (upload or select)
     - Image Alt Text

### 3. Product Guidelines

- **Home Page**: Showcase a mix of products from all categories
- **Security Systems**: Focus on security products (locks, CCTV, etc.)
- **Mining**: Mining equipment and safety gear
- **Laboratory**: Lab instruments and consumables
- **Pumps**: Various types of pumps and related equipment

### 4. Image Requirements

- Recommended size: 500x500px or larger
- Format: PNG, JPG, or WebP
- Ensure good quality and clear product visibility

## Technical Implementation

### Schema Structure

The `topProducts` schema includes:

- `page`: Which page this content is for
- `title`: Section title
- `highlightedWord`: Word to highlight in the title
- `products`: Array of product objects

### Component Usage

The `TopProducts` component automatically:

- Fetches data from Sanity based on the current page
- Renders products in a responsive grid
- Handles missing data gracefully (shows nothing if no data)
- Uses consistent styling across all pages

### Data Flow

1. Page component calls `getTopProducts(pageId)`
2. Function queries Sanity for page-specific data
3. Component receives data and renders products
4. If no data exists, component renders nothing

## Troubleshooting

### No Products Showing

1. Check if content exists in Sanity for the specific page
2. Verify the page ID matches exactly (e.g., "security-systems")
3. Ensure products have all required fields filled

### Images Not Loading

1. Check if images are properly uploaded to Sanity
2. Verify image URLs are being generated correctly
3. Check browser console for any errors

### Styling Issues

1. Ensure the component is using the correct CSS classes
2. Check if Tailwind classes are being applied
3. Verify responsive breakpoints are working

## Future Enhancements

- Add product descriptions
- Include product links/CTAs
- Add product pricing information
- Implement product filtering/sorting
- Add product availability status
