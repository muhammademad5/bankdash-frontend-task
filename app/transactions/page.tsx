"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Transactions() {
  return (
    <div className="pb-8 px-4 md:px-6 lg:px-8 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto">

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>All Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-muted-foreground">
                    <th className="text-left py-3 px-4 font-semibold">Date</th>
                    <th className="text-left py-3 px-4 font-semibold">Description</th>
                    <th className="text-left py-3 px-4 font-semibold">Category</th>
                    <th className="text-left py-3 px-4 font-semibold">Amount</th>
                    <th className="text-left py-3 px-4 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      date: "28 Jan 2021",
                      desc: "Spotify Subscription",
                      cat: "Entertainment",
                      amount: "-$25.00",
                      status: "Complete",
                    },
                    {
                      date: "25 Jan 2021",
                      desc: "PayPal Transfer",
                      cat: "Transfer",
                      amount: "+$2,500.00",
                      status: "Complete",
                    },
                    {
                      date: "21 Jan 2021",
                      desc: "Amazon Purchase",
                      cat: "Shopping",
                      amount: "-$156.50",
                      status: "Complete",
                    },
                    {
                      date: "18 Jan 2021",
                      desc: "Netflix Subscription",
                      cat: "Entertainment",
                      amount: "-$15.99",
                      status: "Complete",
                    },
                    {
                      date: "15 Jan 2021",
                      desc: "Bank Transfer",
                      cat: "Transfer",
                      amount: "+$1,000.00",
                      status: "Complete",
                    },
                  ].map((trans, idx) => (
                    <tr key={idx} className="border-b border-border hover:bg-muted/50">
                      <td className="py-4 px-4">{trans.date}</td>
                      <td className="py-4 px-4 font-medium">{trans.desc}</td>
                      <td className="py-4 px-4">{trans.cat}</td>
                      <td
                        className={`py-4 px-4 font-semibold ${trans.amount.startsWith("+") ? "text-green-600" : "text-red-600"}`}
                      >
                        {trans.amount}
                      </td>
                      <td className="py-4 px-4">
                        <span className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-xs font-medium">
                          {trans.status}
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
  )
}
