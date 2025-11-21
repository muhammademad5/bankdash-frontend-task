"use client"

import { useMemo } from "react"
import { usePathname } from "next/navigation"
import { Search, Settings, Bell } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function DashboardHeader() {
  const pathname = usePathname()

  const title = useMemo(() => {
    const map: Record<string, string> = {
      "/": "Overview",
      "/transactions": "Transactions",
      "/accounts": "Accounts",
      "/investments": "Investments",
      "/credit-cards": "Credit Cards",
      "/loans": "Loans",
      "/services": "Services",
      "/privileges": "My Privileges",
      "/settings": "Setting",
    }
    return map[pathname] || "Overview"
  }, [pathname])

  return (
    <div className="bg-white border-b border-slate-100 px-6 py-4 sticky top-0 z-30">
      <div className="flex items-center gap-4 w-full">
        <h1 className="text-xl font-bold text-slate-800 mr-auto">{title}</h1>
        <div className="hidden md:flex items-center gap-3 flex-1 max-w-xl">
          <Search size={18} className="text-slate-400" />
          <Input
            placeholder="Search for something"
            className="bg-slate-50 border-slate-200 text-slate-700 placeholder:text-slate-400"
          />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-slate-600 hover:bg-slate-100">
            <Settings size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="relative text-slate-600 hover:bg-slate-100">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
          </Button>
          <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
            <img src="/female-profile-avatar.png" alt="User avatar" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}
