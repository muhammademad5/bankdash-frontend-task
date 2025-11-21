interface CardDisplayProps {
  variant?: "primary" | "secondary" | "simple"
}

export function CardDisplay({ variant = "primary" }: CardDisplayProps) {
  if (variant === "simple") {
    return (
      <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Balance</p>
            <p className="text-2xl font-bold text-foreground">$5,756</p>
          </div>
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-sm">💳</div>
        </div>
        <div className="pt-2 border-t border-border">
          <p className="text-xs text-muted-foreground mb-3">CARD HOLDER</p>
          <p className="font-semibold text-foreground mb-4">Eddy Cusuma</p>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>3778 •••• •••• 1234</span>
            <span>12/22</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`rounded-3xl p-6 md:p-8 text-white space-y-8 ${
        variant === "primary"
          ? "bg-gradient-to-br from-primary via-primary to-accent"
          : "bg-gradient-to-br from-blue-600 to-blue-700"
      }`}
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm opacity-80 mb-1">Balance</p>
          <p className="text-3xl font-bold">$5,756</p>
        </div>
        <div className="w-12 h-8 bg-white/20 rounded-lg flex items-center justify-center">💳</div>
      </div>
      <div className="space-y-4 border-t border-white/20 pt-8">
        <div className="flex justify-between text-xs opacity-80">
          <span>CARD HOLDER</span>
          <span>VALID THRU</span>
        </div>
        <div className="flex justify-between items-end">
          <span className="font-semibold text-lg">Eddy Cusuma</span>
          <span className="font-semibold">12/22</span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-sm font-mono tracking-wider">3778 •••• •••• 1234</p>
        <div className="w-12 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs">💳</div>
      </div>
    </div>
  )
}
