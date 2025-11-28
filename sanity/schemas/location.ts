import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'location',
  title: 'Location',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Location Name',
      type: 'string',
      description: 'e.g., Colorado, Florida, Texas',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'SEO title for the location page',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
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
    }),
    defineField({
      name: 'majorCities',
      title: 'Major Cities',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'city',
              title: 'City Name',
              type: 'string',
              validation: Rule => Rule.required(),
            },
            {
              name: 'county',
              title: 'County',
              type: 'string',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'services',
      title: 'Services Offered',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of investigation services available in this location',
    }),
    defineField({
      name: 'expertiseAreas',
      title: 'Local Expertise Areas',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Expertise Title',
              type: 'string',
              validation: Rule => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: Rule => Rule.required(),
            },
            {
              name: 'answer',
              title: 'Answer',
              type: 'text',
              rows: 4,
              validation: Rule => Rule.required(),
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'statistics',
      title: 'Statistics',
      type: 'object',
      fields: [
        {
          name: 'yearsExperience',
          title: 'Years of Experience',
          type: 'string',
        },
        {
          name: 'resolutionRate',
          title: 'Resolution Rate',
          type: 'string',
        },
        {
          name: 'casesCompleted',
          title: 'Cases Completed',
          type: 'string',
        },
        {
          name: 'availability',
          title: 'Availability',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'license',
      title: 'License Information',
      type: 'string',
      description: 'e.g., Licensed under FL Chapter 493',
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      description: 'Order in which locations appear (lower numbers first)',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
    },
  },
})

