import { ThemeToggle } from "@/entities/theme"

export function Header() {
  return (
    <header className="flex items-center justify-between gap-3 py-2 bg-l3 p-container">
      <ThemeToggle className="text-4xl" />
    </header>
  )
}