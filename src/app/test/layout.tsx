import Header from "@/components/header"

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <Header position="sticky" />
      {children}
    </main>
  )
}
