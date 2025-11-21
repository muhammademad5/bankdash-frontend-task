"use client"

import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { TrendingUp, TrendingDown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const yearlyData = [
  { year: "2016", amount: 10000 },
  { year: "2017", amount: 20000 },
  { year: "2018", amount: 15000 },
  { year: "2019", amount: 35000 },
  { year: "2020", amount: 25000 },
  { year: "2021", amount: 30000 },
]

const monthlyData = [
  { month: "2019", amount: 10000 },
  { month: "2017", amount: 15000 },
  { month: "2018", amount: 20000 },
  { month: "2019", amount: 25000 },
  { month: "2020", amount: 15000 },
  { month: "2021", amount: 35000 },
]

export default function Investments() {
  return (
    <div className="pb-8 px-4 md:px-6 lg:px-8 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto">

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Total Invested Amount</p>
                  <p className="text-2xl md:text-3xl font-bold text-foreground">$150,000</p>
                </div>
                <div className="p-3 rounded-lg bg-accent/10">
                  <div className="text-2xl">💰</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Number of Investments</p>
                  <p className="text-2xl md:text-3xl font-bold text-foreground">1,250</p>
                </div>
                <div className="p-3 rounded-lg bg-pink-100 dark:bg-pink-900/20">
                  <div className="text-2xl">📊</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Rate of Return</p>
                  <p className="text-2xl md:text-3xl font-bold text-green-600">+5.80%</p>
                </div>
                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/20">
                  <TrendingUp size={24} className="text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {/* Yearly Total Investment */}
          <Card>
            <CardHeader>
              <CardTitle>Yearly Total Investment</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={yearlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis dataKey="year" stroke="var(--muted-foreground)" />
                  <YAxis stroke="var(--muted-foreground)" />
                  <Tooltip contentStyle={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }} />
                  <Line
                    type="monotone"
                    dataKey="amount"
                    stroke="#FC7900"
                    strokeWidth={3}
                    dot={{ fill: "#FC7900", r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Monthly Revenue */}
          <Card>
            <CardHeader>
              <CardTitle>Monthly Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis dataKey="month" stroke="var(--muted-foreground)" />
                  <YAxis stroke="var(--muted-foreground)" />
                  <Tooltip contentStyle={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }} />
                  <Area
                    type="monotone"
                    dataKey="amount"
                    fill="#16DBCC"
                    stroke="#16DBCC"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* My Investment and Trending Stock */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {/* My Investment */}
          <Card>
            <CardHeader>
              <CardTitle>My Investment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  icon: "🍎",
                  name: "Apple Store",
                  type: "E-commerce, Marketplace",
                  amount: "$54,000",
                  value: "Investment Value",
                  return: "+16%",
                  returnColor: "text-green-600",
                },
                {
                  icon: "🔍",
                  name: "Samsung Mobile",
                  type: "E-commerce, Marketplace",
                  amount: "$25,300",
                  value: "Investment Value",
                  return: "-4%",
                  returnColor: "text-red-600",
                },
                {
                  icon: "⚡",
                  name: "Tesla Motors",
                  type: "Electric Vehicles",
                  amount: "$8,200",
                  value: "Investment Value",
                  return: "+25%",
                  returnColor: "text-green-600",
                },
              ].map((inv, idx) => (
                <div
                  key={idx}
                  className="flex items-start justify-between p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-background flex items-center justify-center text-2xl">
                      {inv.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{inv.name}</p>
                      <p className="text-xs text-muted-foreground">{inv.type}</p>
                      <p className="text-sm font-bold text-foreground mt-1">{inv.amount}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">{inv.value}</p>
                    <p className={`text-sm font-bold ${inv.returnColor}`}>{inv.return}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Trending Stock */}
          <Card>
            <CardHeader>
              <CardTitle>Trending Stock</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-muted-foreground">
                      <th className="text-left py-3 px-4 font-semibold">SL No</th>
                      <th className="text-left py-3 px-4 font-semibold">Name</th>
                      <th className="text-left py-3 px-4 font-semibold">Price</th>
                      <th className="text-left py-3 px-4 font-semibold">Return</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { sl: "01", name: "Trivago", price: "$520", return: "+5%", color: "text-green-600" },
                      { sl: "02", name: "Canon", price: "$480", return: "+10%", color: "text-green-600" },
                      { sl: "03", name: "Uber Food", price: "$350", return: "-3%", color: "text-red-600" },
                      { sl: "04", name: "Nokia", price: "$940", return: "+2%", color: "text-green-600" },
                      { sl: "05", name: "Tiktok", price: "$670", return: "-12%", color: "text-red-600" },
                    ].map((stock, idx) => (
                      <tr key={idx} className="border-b border-border hover:bg-muted/50">
                        <td className="py-4 px-4 font-medium">{stock.sl}</td>
                        <td className="py-4 px-4">{stock.name}</td>
                        <td className="py-4 px-4 font-semibold">{stock.price}</td>
                        <td className={`py-4 px-4 font-bold ${stock.color}`}>
                          <span className="inline-flex items-center gap-1">
                            {stock.return.startsWith("+") ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                            {stock.return}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
