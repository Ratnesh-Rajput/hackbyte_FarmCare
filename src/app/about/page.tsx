"use client"

import AboutDocs from "@/content/docs/about.mdx"

export default function About() {
  return (
    <main className="flex flex-col min-h-screen py-24 px-8">
      <div className="mx-auto prose max-w-[80ch] prose-cyan dark:prose-dark mt-8">
        <AboutDocs />
      </div>
    </main>
  )
}
