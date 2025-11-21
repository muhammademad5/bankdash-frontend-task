import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function Accounts() {
  return (
    <div className="pb-8 px-4 md:px-6 lg:px-8 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto">

        <div className="mt-8 flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-foreground">Accounts</h2>
          <Button gap="2">
            <Plus size={18} />
            Add Account
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Checking Account", balance: "$12,500.00", bank: "First National Bank" },
            { name: "Savings Account", balance: "$25,750.50", bank: "City Bank" },
            { name: "Money Market", balance: "$8,300.00", bank: "Regional Trust" },
          ].map((account, idx) => (
            <Card key={idx}>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">{account.name}</h3>
                <p className="text-2xl font-bold text-primary mb-4">{account.balance}</p>
                <p className="text-sm text-muted-foreground">{account.bank}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
