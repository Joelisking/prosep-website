import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'categoryProducts',
  title: 'Category Products',
  type: 'document',
  fields: [
    defineField({
      name: 'service',
      title: 'Service',
      type: 'string',
      options: {
        list: [
          {title: 'Pumps', value: 'pumps'},
          {title: 'Laboratory Instruments', value: 'laboratory-instruments'},
          {title: 'Security Systems', value: 'security-systems'},
          {title: 'Mining & Mineral Processing', value: 'mining-mineral-processing'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pumpsCategory',
      title: 'Pumps Category',
      type: 'string',
      options: {
        list: [
          {title: 'Surface Pumps', value: 'surface-pumps'},
          {title: 'Submersible Pumps', value: 'submersible-pumps'},
          {title: 'Borehole Pumps', value: 'borehole-pumps'},
        ],
      },
      hidden: ({parent}) => parent?.service !== 'pumps',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const service = context.document?.service
          if (service === 'pumps' && !value) {
            return 'Pumps category is required when service is Pumps'
          }
          return true
        }),
    }),
    defineField({
      name: 'laboratoryCategory',
      title: 'Laboratory Category',
      type: 'string',
      options: {
        list: [
          {title: 'Glassware, Microscopes & Balances', value: 'glassware-microscopes-balances'},
          {title: 'Lab Chemicals & Consumables', value: 'lab-chemicals-consumables'},
          {title: 'Testing Equipment', value: 'testing-equipment'},
          {title: 'Lab Furniture & Safety Gear', value: 'lab-furniture-safety-gear'},
        ],
      },
      hidden: ({parent}) => parent?.service !== 'laboratory-instruments',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const service = context.document?.service
          if (service === 'laboratory-instruments' && !value) {
            return 'Laboratory category is required when service is Laboratory Instruments'
          }
          return true
        }),
    }),
    defineField({
      name: 'securityCategory',
      title: 'Security Category',
      type: 'string',
      options: {
        list: [
          {title: 'Video Surveillance Systems (CCTV)', value: 'security-cameras'},
          {title: 'Smart Locks & Access Control Systems', value: 'access-control'},
          {title: 'Door and Window Security', value: 'door-window-security'},
          {title: 'Padlocks', value: 'padlocks'},
          {title: 'Lockout Tagout', value: 'lockout-tagout'},
          {title: 'Personal Protective Equipment', value: 'safety-equipment'},
          {title: 'Security Chains & Hasps', value: 'security-chains'},
        ],
      },
      hidden: ({parent}) => parent?.service !== 'security-systems',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const service = context.document?.service
          if (service === 'security-systems' && !value) {
            return 'Security category is required when service is Security Systems'
          }
          return true
        }),
    }),
    defineField({
      name: 'miningCategory',
      title: 'Mining Category',
      type: 'string',
      options: {
        list: [
          {title: 'Mineral Processing', value: 'mineral-processing'},
          {title: 'Crushing', value: 'crushing'},
          {title: 'Milling', value: 'milling'},
          {title: 'Mining Chemicals', value: 'mining-chemicals'},
        ],
      },
      hidden: ({parent}) => parent?.service !== 'mining-mineral-processing',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const service = context.document?.service
          if (service === 'mining-mineral-processing' && !value) {
            return 'Mining category is required when service is Mining & Mineral Processing'
          }
          return true
        }),
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
              name: 'name',
              title: 'Product Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'id',
              title: 'Product Slug',
              type: 'slug',
              options: {
                source: (doc, options) => (options.parent as {name?: string})?.name || '',
                maxLength: 200,
                slugify: (input) =>
                  input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .replace(/[^\w-]+/g, '')
                    .slice(0, 200),
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Product Description',
              type: 'text',
              rows: 3,
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
              description: 'Optional. If left empty, will use the product name as alt text.',
              initialValue: ({parent}) => (parent as {name?: string})?.name || '',
            }),
            defineField({
              name: 'showFullImage',
              title: 'Show Full Image',
              type: 'boolean',
              description:
                'When enabled, the image will show the complete product without cropping. When disabled, the image will fill the container (may crop parts of the image).',
              initialValue: false,
            }),
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'description',
              media: 'image',
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      service: 'service',
      pumpsCategory: 'pumpsCategory',
      laboratoryCategory: 'laboratoryCategory',
      securityCategory: 'securityCategory',
      miningCategory: 'miningCategory',
      subtitle: 'products',
    },
    prepare({
      service,
      pumpsCategory,
      laboratoryCategory,
      securityCategory,
      miningCategory,
      subtitle,
    }) {
      const productCount = Array.isArray(subtitle) ? subtitle.length : 0
      const serviceTitle = service
        ?.replace(/-/g, ' ')
        .replace(/\b\w/g, (l: string) => l.toUpperCase())

      // Get the appropriate category based on service
      let category = pumpsCategory || laboratoryCategory || securityCategory || miningCategory
      const categoryTitle = category
        ?.replace(/-/g, ' ')
        .replace(/\b\w/g, (l: string) => l.toUpperCase())

      return {
        title: `${serviceTitle} - ${categoryTitle}`,
        subtitle: `${productCount} product${productCount !== 1 ? 's' : ''}`,
      }
    },
  },
})
