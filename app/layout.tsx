import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Clean Air Rewards - Australian Government Smoking Cessation Programme',
  description: 'A data-driven, incentive-based smoking cessation programme integrating with My Health Record and pharmacy networks.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-AU">
      <body>{children}</body>
    </html>
  )
}
