interface TransactionCardProps {
  icon: string
  title: string
  date: string
  amount: string
  color: string
}

export function TransactionCard({ icon, title, date, amount, color }: TransactionCardProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-lg">{icon}</div>
        <div>
          <p className="font-medium text-foreground">{title}</p>
          <p className="text-xs text-muted-foreground">{date}</p>
        </div>
      </div>
      <p className={`font-bold ${color}`}>{amount}</p>
    </div>
  )
}
