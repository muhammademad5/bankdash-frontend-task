"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Send, Users, TrendingUp, CreditCard, Banknote, Settings, Gift, Lock, Menu, X } from "lucide-react"

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Dashboard", icon: Home },
    { href: "/transactions", label: "Transactions", icon: Send },
    { href: "/accounts", label: "Accounts", icon: Users },
    { href: "/investments", label: "Investments", icon: TrendingUp },
    { href: "/credit-cards", label: "Credit Cards", icon: CreditCard },
    { href: "/loans", label: "Loans", icon: Banknote },
    { href: "/services", label: "Services", icon: Settings },
    { href: "/privileges", label: "My Privileges", icon: Gift },
    { href: "/settings", label: "Setting", icon: Lock },
  ]

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md bg-primary text-primary-foreground">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed lg:relative w-64 h-screen bg-white border-r border-slate-100 transition-transform duration-300 ease-in-out z-40 lg:z-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-slate-100">
          <div className="flex items-center gap-2 text-lg font-bold">
            <div className="w-8 h-8 rounded-md bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
              📊
            </div>
            <span className="text-slate-900">BankDash.</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1 overflow-y-auto h-[calc(100vh-100px)]">
          {links.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all relative group ${
                  isActive ? "text-blue-600" : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {isActive && <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 rounded-r-full" />}
                <Icon size={20} className={isActive ? "text-blue-600" : "text-slate-400"} />
                <span className="text-sm font-medium">{label}</span>
              </Link>
            )
          })}
        </nav>
      </aside>

      {/* Mobile overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setIsOpen(false)} />}
    </>
  )
}
