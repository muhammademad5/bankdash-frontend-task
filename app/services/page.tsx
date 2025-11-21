import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Services() {
  return (
    <div className="pb-8 px-4 md:px-6 lg:px-8 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-6">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Wire Transfer", desc: "Send money worldwide securely", icon: "🌍" },
            { title: "Bill Payment", desc: "Pay your bills online instantly", icon: "💳" },
            { title: "Investment", desc: "Manage your investments easily", icon: "📈" },
            { title: "Loan Application", desc: "Apply for loans online", icon: "📝" },
            { title: "Card Management", desc: "Control your credit cards", icon: "🎫" },
            { title: "Customer Support", desc: "24/7 customer support available", icon: "💬" },
          ].map((service, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{service.desc}</p>
                <Button variant="link" className="gap-2 p-0">
                  Learn More
                  <ArrowRight size={16} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
