import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
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
      validation: Rule => Rule.required().max(200),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Divorce', value: 'Divorce' },
          { title: 'Corporate', value: 'Corporate' },
          { title: 'Family Law', value: 'Family Law' },
          { title: 'Criminal Defense', value: 'Criminal Defense' },
          { title: 'Insurance', value: 'Insurance' },
          { title: 'Background Checks', value: 'Background Checks' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'challenge',
      title: 'The Challenge',
      type: 'text',
      rows: 6,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'approach',
      title: 'Our Approach',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'heading',
              title: 'Approach Heading',
              type: 'string',
              validation: Rule => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 5,
              validation: Rule => Rule.required(),
            },
          ],
        },
      ],
      validation: Rule => Rule.required().min(1),
    }),
    defineField({
      name: 'outcome',
      title: 'The Outcome',
      type: 'text',
      rows: 8,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'metrics',
      title: 'Key Metrics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Metric Label',
              type: 'string',
              validation: Rule => Rule.required(),
            },
            {
              name: 'value',
              title: 'Metric Value',
              type: 'string',
              validation: Rule => Rule.required(),
            },
          ],
          preview: {
            select: {
              label: 'label',
              value: 'value',
            },
            prepare(selection) {
              return {
                title: selection.label,
                subtitle: selection.value,
              }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'testimonial',
      title: 'Client Testimonial',
      type: 'object',
      fields: [
        {
          name: 'quote',
          title: 'Quote',
          type: 'text',
          rows: 4,
        },
        {
          name: 'attribution',
          title: 'Attribution',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Display this case study prominently',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      location: 'location',
      media: 'image',
    },
    prepare(selection) {
      const { title, category, location } = selection
      return {
        title,
        subtitle: `${category} - ${location}`,
        media: selection.media,
      }
    },
  },
})

