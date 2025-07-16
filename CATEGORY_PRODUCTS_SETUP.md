# Category Products Setup

This document explains how to set up and manage category products that appear in dialogs when service category cards are clicked.

## Overview

The category products system allows you to manage products for each service category separately from the top products. When a user clicks on a service category card, a dialog opens showing all available products for that specific category.

## Available Categories

### Pumps

- `surface-pumps` - Surface Pumps
- `submersible-pumps` - Submersible Pumps
- `borehole-pumps` - Borehole Pumps

### Laboratory Instruments

- `glassware-microscopes-balances` - Glassware, Microscopes & Balances
- `lab-chemicals-consumables` - Lab Chemicals & Consumables
- `testing-equipment` - Testing Equipment
- `lab-furniture-safety-gear` - Lab Furniture & Safety Gear

### Security Systems

- `security-cameras` - Video Surveillance Systems (CCTV)
- `access-control` - Smart Locks & Access Control Systems
- `padlocks` - Padlocks
- `lockout-tagout` - Lockout Tagout/ Occupational Safety
- `safety-equipment` - Personal Protective Equipment
- `security-chains` - Security Chains & Hasps

### Mining & Mineral Processing

- `mineral-processing` - Mineral Processing
- `crushing` - Crushing
- `milling` - Milling
- `mining-chemicals` - Chemicals for mining: HCL, Borax, Citric acid

## Setup Instructions

### 1. Start Sanity Studio

```bash
cd sanity
npm run dev
```

This will start the Sanity Studio at `http://localhost:3333`

### 2. Create Category Products Content

1. Open Sanity Studio in your browser
2. Navigate to "Category Products" in the content menu
3. Create a new document for each category:
   - **Service**: First select the service (Pumps, Laboratory Instruments, Security Systems, or Mining & Mineral Processing)
   - **Category Field**: After selecting a service, only the relevant category field will appear (e.g., "Pumps Category" for pumps service)
   - **Products**: Add products with:
     - Product Name
     - Product Description (optional)
     - Product Image (upload or select)
     - Image Alt Text (optional - will use product name if left empty)

### 3. Product Guidelines

- **Product Name**: Clear, descriptive name
- **Description**: Brief description of the product (optional but recommended)
- **Image**: High-quality product image (recommended size: 500x500px or larger)
- **Image Alt Text**: Descriptive alt text for accessibility (optional - defaults to product name)

### 4. Hierarchical Selection

The system now uses a hierarchical approach:

1. **Service Selection**: First select the main service (Pumps, Laboratory Instruments, etc.)
2. **Service-Specific Category Field**: Only the relevant category field appears (e.g., "Pumps Category" for pumps)
3. **Clean Interface**: No confusing mixed categories - only relevant options are shown

### 5. Category Mapping

The category slugs in the code must match exactly with the values in Sanity:

- Service category cards use `categorySlug` to identify which products to load
- The `getCategoryProducts()` function queries Sanity using this slug
- If no products are found, the dialog shows a "no products available" message

## Technical Implementation

### Component Structure

1. **ServiceCategories**: Main component that renders category cards
2. **CategoryProductsDialog**: Dialog component that displays products
3. **CategoryProductCard**: Individual product card within the dialog

### Data Flow

1. User clicks on a service category card
2. `handleCategoryClick()` is triggered with the category slug
3. `getCategoryProducts(categorySlug)` queries Sanity
4. Products are displayed in the dialog
5. User can close dialog or browse products

### Error Handling

- If no `categorySlug` is provided, nothing happens when clicked
- If no products are found in Sanity, a "no products available" message is shown
- Network errors are logged to console

## Usage Examples

### Adding a New Category

1. Add the category to the Sanity schema (`sanity/schemaTypes/categoryProducts.ts`)
2. Add the category slug to the service page equipment array
3. Create the category products content in Sanity Studio

### Adding Products to Existing Category

1. Go to Sanity Studio
2. Find the existing category document
3. Add new products to the products array
4. Save the document

## Troubleshooting

### Dialog Not Opening

1. Check if `categorySlug` is properly set in the equipment array
2. Verify the slug matches exactly with Sanity values
3. Check browser console for errors

### No Products Showing

1. Verify category products exist in Sanity for the specific category
2. Check if the category slug matches exactly
3. Ensure products have all required fields filled

### Images Not Loading

1. Check if images are properly uploaded to Sanity
2. Verify image URLs are being generated correctly
3. Check browser console for any errors

## Future Enhancements

- Add product filtering/sorting within categories
- Include product specifications/datasheets
- Add "Contact Us" buttons for each product
- Implement product search functionality
- Add product availability status
- Include product pricing information
