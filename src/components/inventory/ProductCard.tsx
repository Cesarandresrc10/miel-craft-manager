import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Edit, Eye, Package } from "lucide-react"

interface ProductCardProps {
  id: string
  name: string
  sku: string
  stock: number
  minStock: number
  price: number
  image?: string
  variants?: string[]
}

export function ProductCard({ 
  id, 
  name, 
  sku, 
  stock, 
  minStock, 
  price, 
  image, 
  variants = [] 
}: ProductCardProps) {
  const isLowStock = stock <= minStock
  const stockStatus = isLowStock ? "low" : stock > minStock * 2 ? "good" : "medium"
  
  const statusColors = {
    low: "bg-destructive/10 text-destructive border-destructive/20",
    medium: "bg-warning/10 text-warning border-warning/20", 
    good: "bg-success/10 text-success border-success/20"
  }

  return (
    <Card className="bg-gradient-card border-border/50 shadow-soft hover:shadow-glow transition-all duration-300 group">
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          {/* Product Image */}
          <div className="w-16 h-16 bg-muted/50 rounded-lg flex items-center justify-center border border-border/50">
            {image ? (
              <img src={image} alt={name} className="w-full h-full object-cover rounded-lg" />
            ) : (
              <Package className="w-8 h-8 text-muted-foreground" />
            )}
          </div>

          {/* Product Info */}
          <div className="flex-1 space-y-2">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {name}
                </h3>
                <p className="text-sm text-muted-foreground">{sku}</p>
              </div>
              <Badge className={statusColors[stockStatus]} variant="outline">
                {stock} unidades
              </Badge>
            </div>

            {/* Variants */}
            {variants.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {variants.slice(0, 3).map((variant, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {variant}
                  </Badge>
                ))}
                {variants.length > 3 && (
                  <Badge variant="secondary" className="text-xs">
                    +{variants.length - 3}
                  </Badge>
                )}
              </div>
            )}

            {/* Price and Actions */}
            <div className="flex items-center justify-between pt-2">
              <span className="text-lg font-bold text-primary">
                ${price.toLocaleString('es-CO')}
              </span>
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                  <Eye className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                  <Edit className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Low Stock Warning */}
            {isLowStock && (
              <div className="text-xs text-destructive bg-destructive/10 px-2 py-1 rounded border border-destructive/20">
                ⚠️ Stock bajo (mín: {minStock})
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}