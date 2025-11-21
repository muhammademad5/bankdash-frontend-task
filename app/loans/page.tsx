import { Card, CardContent } from "@/components/ui/card"

export default function Loans() {
  return (
    <div className="pb-8 px-4 md:px-6 lg:px-8 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-6">Loans</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: "Home Loan", amount: "$150,000.00", rate: "4.5%", term: "30 years" },
            { name: "Car Loan", amount: "$35,000.00", rate: "6.2%", term: "5 years" },
          ].map((loan, idx) => (
            <Card key={idx}>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">{loan.name}</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Loan Amount</p>
                    <p className="text-xl font-bold text-foreground">{loan.amount}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Interest Rate</p>
                      <p className="font-semibold text-foreground">{loan.rate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Term</p>
                      <p className="font-semibold text-foreground">{loan.term}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
