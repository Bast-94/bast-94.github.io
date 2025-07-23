"use client"

import { useTheme } from "../contexts/theme-context"
import { Sun, Moon } from "lucide-react"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
      aria-label={`Basculer vers le mode ${theme === "light" ? "sombre" : "clair"}`}
    >
      <div className="relative w-6 h-6">
        <Sun
          size={20}
          className={`absolute inset-0 text-yellow-500 transition-all duration-300 ${
            theme === "light" ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
          }`}
        />
        <Moon
          size={20}
          className={`absolute inset-0 text-blue-400 transition-all duration-300 ${
            theme === "dark" ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
          }`}
        />
      </div>
    </button>
  )
}
