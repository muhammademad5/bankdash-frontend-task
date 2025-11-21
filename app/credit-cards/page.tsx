"use client"

import { Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { Plus, Eye } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CardDisplay } from "@/components/card-display"

const expenseData = [
  { name: "DBL Bank", value: 30 },
  { name: "BRC Bank", value: 25 },
  { name: "ABM Bank", value: 20 },
  { name: "MCP Bank", value: 25 },
]

const COLORS = ["#343C6A", "#FC7900", "#FA00FF", "#1814F3"]

export default function CreditCards() {
  return (
    <div className="pb-8 px-4 md:px-6 lg:px-8 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto">

        {/* My Cards Section */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-foreground mb-4">My Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <CardDisplay />
            <CardDisplay variant="secondary" />
            <CardDisplay variant="simple" />
          </div>
        </div>

        {/* Cards Analytics Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          {/* Card Expense Statistics */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">Card Expense Statistics</h2>
            <Card>
              <CardContent className="pt-6 flex justify-center">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={expenseData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {expenseData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <div className="mt-4 flex flex-wrap gap-3">
              {expenseData.map((item, index) => (
                <div key={item.name} className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }} />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card List */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-foreground mb-4">Card List</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border text-muted-foreground">
                        <th className="text-left py-3 px-4 font-semibold">Card Type</th>
                        <th className="text-left py-3 px-4 font-semibold">Bank</th>
                        <th className="text-left py-3 px-4 font-semibold">Card Number</th>
                        <th className="text-left py-3 px-4 font-semibold">Namain Card</th>
                        <th className="text-left py-3 px-4 font-semibold">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          type: "Secondary",
                          bank: "DBL Bank",
                          number: "•••• •••• 5600",
                          name: "William",
                          color: "from-blue-600",
                        },
                        {
                          type: "Secondary",
                          bank: "BRC Bank",
                          number: "•••• •••• 4300",
                          name: "Michael",
                          color: "from-pink-600",
                        },
                        {
                          type: "Secondary",
                          bank: "ABM Bank",
                          number: "•••• •••• 7590",
                          name: "Edward",
                          color: "from-yellow-600",
                        },
                      ].map((card, idx) => (
                        <tr key={idx} className="border-b border-border hover:bg-muted/50">
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2">
                              <div className={`w-8 h-6 rounded bg-gradient-to-r ${card.color} to-orange-600`} />
                              <span>{card.type}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4">{card.bank}</td>
                          <td className="py-4 px-4 font-mono">{card.number}</td>
                          <td className="py-4 px-4">{card.name}</td>
                          <td className="py-4 px-4">
                            <Button variant="link" className="text-primary gap-1">
                              <Eye size={14} />
                              <span className="hidden sm:inline">View Details</span>
                            </Button>
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

        {/* Add Card and Settings Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {/* Add New Card */}
          <Card>
            <CardHeader>
              <CardTitle>Add New Card</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-sm text-muted-foreground">
                Credit Card generally means a plastic card issued by Scheduled Commercial Banks assigned to a
                Cardholder, with a credit limit that can be used to purchase goods and services on credit or obtain cash
                advances.
              </p>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Card Type</label>
                  <select className="w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground">
                    <option>Classic</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Name On Card</label>
                  <input
                    type="text"
                    placeholder="My Cards"
                    className="w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Card Number</label>
                  <input
                    type="text"
                    placeholder="•••• •••• •••• •••"
                    className="w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground font-mono"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Expiration Date</label>
                  <input
                    type="text"
                    placeholder="25 January 2025"
                    className="w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground"
                  />
                </div>
              </div>
              <Button className="w-full gap-2">
                <Plus size={18} />
                Add Card
              </Button>
            </CardContent>
          </Card>

          {/* Card Setting */}
          <Card>
            <CardHeader>
              <CardTitle>Card Setting</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { icon: "🚫", title: "Block Card", desc: "Instantly block your card" },
                { icon: "🔐", title: "Change Pin Code", desc: "Choose another pin code" },
                { icon: "🏦", title: "Add to Google Pay", desc: "Withdraw without any card" },
                { icon: "🍎", title: "Add to Apple Pay", desc: "Withdraw without any card" },
                { icon: "🏪", title: "Add to Apple Store", desc: "Withdraw without any card" },
              ].map((setting, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors cursor-pointer"
                >
                  <div className="text-2xl">{setting.icon}</div>
                  <div>
                    <p className="font-medium text-foreground">{setting.title}</p>
                    <p className="text-xs text-muted-foreground">{setting.desc}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
