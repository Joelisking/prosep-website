import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'topProducts',
  title: 'Top Products',
  type: 'document',
  fields: [
    defineField({
      name: 'page',
      title: 'Page',
      type: 'string',
      options: {
        list: [
          {title: 'Home', value: 'home'},
          {title: 'Security Systems', value: 'security-systems'},
          {title: 'Mining & General Industry', value: 'mining-general-industry'},
          {title: 'Laboratory Instruments', value: 'laboratory-instruments'},
          {title: 'Pumps', value: 'pumps'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      description: 'The title for the top products section (e.g., "Our Top Products")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'highlightedWord',
      title: 'Highlighted Word',
      type: 'string',
      description: 'The word to highlight in the title (e.g., "Top Products")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'id',
              title: 'Product ID',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'name',
              title: 'Product Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'category',
              title: 'Category',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'image',
              title: 'Product Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'imageAlt',
              title: 'Image Alt Text',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'category',
              media: 'image',
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1).max(6),
    }),
  ],
  preview: {
    select: {
      title: 'page',
      subtitle: 'title',
    },
    prepare({title, subtitle}) {
      return {
        title: `${title.charAt(0).toUpperCase() + title.slice(1)} Page`,
        subtitle: subtitle,
      }
    },
  },
})
