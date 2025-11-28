import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 2,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'fullDescription',
      title: 'Full Description',
      type: 'text',
      rows: 6,
    }),
    defineField({
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Icon identifier for UI display',
    }),
    defineField({
      name: 'category',
      title: 'Service Category',
      type: 'string',
      options: {
        list: [
          { title: 'Personal', value: 'personal' },
          { title: 'Corporate', value: 'corporate' },
          { title: 'Legal Support', value: 'legal' },
          { title: 'Background & Due Diligence', value: 'background' },
        ],
      },
    }),
    defineField({
      name: 'featured',
      title: 'Featured Service',
      type: 'boolean',
      description: 'Display this service prominently on the homepage',
      initialValue: false,
    }),
    defineField({
      name: 'availableIn',
      title: 'Available In Locations',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'location' }] }],
      description: 'Select locations where this service is offered',
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
    },
    prepare(selection) {
      const { title, category } = selection
      return {
        title,
        subtitle: category ? category.toUpperCase() : 'Uncategorized',
      }
    },
  },
})

