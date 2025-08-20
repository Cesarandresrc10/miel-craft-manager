import { ReactNode } from "react"
import { LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface StatsCardProps {
  title: string
  value: string
  change?: string
  changeType?: "increase" | "decrease" | "neutral"
  icon: LucideIcon
  children?: ReactNode
}

export function StatsCard({ 
  title, 
  value, 
  change, 
  changeType = "neutral", 
  icon: Icon,
  children 
}: StatsCardProps) {
  const changeColors = {
    increase: "text-success",
    decrease: "text-destructive", 
    neutral: "text-muted-foreground"
  }

  return (
    <Card className="bg-gradient-card border-border/50 shadow-soft hover:shadow-glow transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              {title}
            </p>
            <p className="text-3xl font-bold text-foreground">
              {value}
            </p>
            {change && (
              <p className={`text-sm ${changeColors[changeType]}`}>
                {change}
              </p>
            )}
          </div>
          <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-soft">
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>
        {children}
      </CardContent>
    </Card>
  )
}