"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts"
import { Send, ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TransactionCard } from "@/components/transaction-card"
import { CardDisplay } from "@/components/card-display"

const weeklyData = [
  { day: "Sat", deposit: 400, withdraw: 240 },
  { day: "Sun", deposit: 300, withdraw: 130 },
  { day: "Mon", deposit: 430, withdraw: 200 },
  { day: "Tue", deposit: 450, withdraw: 220 },
  { day: "Wed", deposit: 350, withdraw: 140 },
  { day: "Thu", deposit: 400, withdraw: 180 },
  { day: "Fri", deposit: 480, withdraw: 240 },
]

const expenseData = [
  { name: "Entertainment", value: 30 },
  { name: "Bill Expense", value: 15 },
  { name: "Investment", value: 20 },
  { name: "Others", value: 35 },
]

const balanceData = [
  { month: "Jul", balance: 250 },
  { month: "Aug", balance: 450 },
  { month: "Sep", balance: 550 },
  { month: "Oct", balance: 650 },
  { month: "Nov", balance: 500 },
  { month: "Dec", balance: 700 },
  { month: "Jan", balance: 750 },
]

const COLORS = ["#343C6A", "#FC7900", "#FA00FF", "#1814F3"]

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

const contacts = [
  { name: "Livia Bator", role: "CEO", img: "/female-profile-avatar.png" },
  { name: "Randy Press", role: "Director", img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=128&q=80" },
  { name: "Workman", role: "Designer", img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=128&q=80" },
]

export default function Dashboard() {
  return (
    <div className="pb-8 px-4 md:px-6 lg:px-8 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* My Cards and Recent Transactions */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">My Cards</h2>
            <Button variant="link" className="text-primary">
              See All
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Cards - Left Side (2 columns) */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              <CardDisplay />
              <CardDisplay variant="secondary" />
            </div>

            {/* Recent Transactions - Right Side */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-foreground">Recent Transaction</h3>
              <Card>
                <CardContent className="space-y-3 pt-6">
                  <TransactionCard
                    icon="💰"
                    title="Deposit from my Card"
                    date="28 January 2021"
                    amount="-$850"
                    color="text-red-500"
                  />
                  <TransactionCard
                    icon="💳"
                    title="Deposit Paypal"
                    date="25 January 2021"
                    amount="+$2,500"
                    color="text-green-500"
                  />
                  <TransactionCard
                    icon="👤"
                    title="Jemi Wilson"
                    date="21 January 2021"
                    amount="+$5,400"
                    color="text-blue-500"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Weekly Activity and Expense Statistics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          {/* Weekly Activity - Left (2 columns) */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">Weekly Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                    <XAxis dataKey="day" stroke="var(--muted-foreground)" />
                    <YAxis stroke="var(--muted-foreground)" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "var(--card)",
                        border: "1px solid var(--border)",
                        borderRadius: "8px",
                      }}
                      cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
                    />
                    <Legend verticalAlign="top" align="right" iconType="circle" />
                    <Bar name="Deposit" dataKey="deposit" fill="#1814F3" radius={[8, 8, 0, 0]} />
                    <Bar name="Withdraw" dataKey="withdraw" fill="#16DBCC" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Expense Statistics - Right (1 column) */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">Expense Statistics</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <ResponsiveContainer width="100%" height={280}>
                  <PieChart>
                    <Pie
                      data={expenseData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="value"
                      label
                    >
                      {expenseData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Balance History and Quick Transfer Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          {/* Balance History */}
          <Card className="lg:col-span-2 lg:order-2">
            <CardHeader>
              <CardTitle className="text-foreground">Balance History</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={balanceData}>
                  <defs>
                    <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1814F3" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#1814F3" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                  <XAxis dataKey="month" stroke="var(--muted-foreground)" />
                  <YAxis stroke="var(--muted-foreground)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "var(--card)",
                      border: "1px solid var(--border)",
                      borderRadius: "8px",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="balance"
                    stroke="#1814F3"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorBalance)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Quick Transfer */}
          <Card className="bg-white lg:col-span-1 lg:order-1">
            <CardHeader>
              <CardTitle className="text-foreground">Quick Transfer</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between gap-6 mb-6">
                <div className="flex items-center gap-6">
                  {contacts.map((contact) => (
                    <div key={contact.name} className="flex flex-col items-center gap-2">
                      <Avatar className="size-14">
                        <AvatarImage src={contact.img} alt={contact.name} />
                        <AvatarFallback>{contact.name.slice(0,2)}</AvatarFallback>
                      </Avatar>
                      <p className="text-sm font-semibold text-foreground text-center">{contact.name}</p>
                      <p className="text-xs text-muted-foreground">{contact.role}</p>
                    </div>
                  ))}
                </div>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:text-slate-700">
                  <ChevronRight size={20} />
                </button>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-xs text-slate-500">Write Amount</span>
                <div className="relative flex-1">
                  <input
                    type="number"
                    defaultValue={525.5}
                    className="w-full px-5 py-3 rounded-full bg-slate-100 border border-transparent text-slate-700 placeholder-slate-400 text-sm pr-24"
                  />
                  <Button className="absolute right-1 top-1/2 -translate-y-1/2 gap-2 rounded-full px-6 bg-[#1814F3] hover:bg-[#1814F3]/90 text-white shadow-md">
                    <Send size={16} />
                    <span>Send</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        
      </div>
    </div>
  )
}
