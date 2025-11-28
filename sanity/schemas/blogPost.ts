import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'blogPost',
  title: 'Blog Post',
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
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required().max(200),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Investigation Tips', value: 'Investigation Tips' },
          { title: 'Hiring Guide', value: 'Hiring Guide' },
          { title: 'Legal Insights', value: 'Legal Insights' },
          { title: 'Family Law', value: 'Family Law' },
          { title: 'Investigation Methods', value: 'Investigation Methods' },
          { title: 'Background Checks', value: 'Background Checks' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      validation: Rule => Rule.required(),
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
      placeholder: 'e.g., 5 min read',
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
      name: 'introduction',
      title: 'Introduction',
      type: 'text',
      rows: 5,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'sections',
      title: 'Content Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'heading',
              title: 'Section Heading',
              type: 'string',
              validation: Rule => Rule.required(),
            },
            {
              name: 'content',
              title: 'Section Content',
              type: 'text',
              rows: 8,
              validation: Rule => Rule.required(),
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'conclusion',
      title: 'Conclusion',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          validation: Rule => Rule.max(60),
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          validation: Rule => Rule.max(160),
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      media: 'image',
      date: 'publishedAt',
    },
    prepare(selection) {
      const { title, category, date } = selection
      const dateStr = date ? new Date(date).toLocaleDateString() : 'No date'
      return {
        title,
        subtitle: `${category} - ${dateStr}`,
        media: selection.media,
      }
    },
  },
})

