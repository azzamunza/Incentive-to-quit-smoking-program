import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Clean Air Rewards - Proposed Smoking Cessation Programme for Australian Government',
  description: 'A proposal for a data-driven, incentive-based smoking cessation programme to integrate with My Health Record and pharmacy networks.',
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
