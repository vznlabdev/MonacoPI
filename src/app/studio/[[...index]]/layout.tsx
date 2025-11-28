import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Monaco PI - Content Studio',
  description: 'Content management system for Monaco PI',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}

