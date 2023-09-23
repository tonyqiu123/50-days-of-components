import { Metadata } from 'next'

import RootLayout from './RootLayout'

export const metadata: Metadata = {
  title: '50 Days of Components',
  description: 'Highly Customizable Next.js/React Components',
}

interface Props extends React.PropsWithChildren { }

export default function Layout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}