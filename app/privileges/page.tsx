import { Card, CardContent } from "@/components/ui/card"

export default function Privileges() {
  return (
    <div className="pb-8 px-4 md:px-6 lg:px-8 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-6">My Privileges</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Cashback Rewards", desc: "Earn 2% cashback on all purchases", icon: "💰" },
            { title: "Priority Support", desc: "Get priority customer support 24/7", icon: "⭐" },
            { title: "Exclusive Offers", desc: "Access exclusive deals and promotions", icon: "🎁" },
            { title: "Travel Benefits", desc: "Travel insurance and airport lounge access", icon: "✈️" },
            { title: "Zero Annual Fee", desc: "No annual fee for credit card", icon: "💳" },
            { title: "Higher Limits", desc: "Enjoy higher credit limits", icon: "📈" },
          ].map((privilege, idx) => (
            <Card key={idx}>
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">{privilege.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{privilege.title}</h3>
                <p className="text-sm text-muted-foreground">{privilege.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
