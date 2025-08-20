import { AppLayout } from "@/components/layout/AppLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  Plus, 
  Search, 
  ShoppingCart,
  Eye,
  Edit,
  Truck
} from "lucide-react"

const Orders = () => {
  const orders = [
    {
      id: "PED-001",
      customer: "María González",
      products: [
        { name: "Conjunto Rosa", quantity: 1, price: 75000 }
      ],
      total: 75000,
      status: "Pendiente",
      date: "2024-08-20",
      delivery: "2024-08-25"
    },
    {
      id: "PED-002", 
      customer: "Ana Rodríguez",
      products: [
        { name: "Body Bordado", quantity: 2, price: 45000 },
        { name: "Pijama Osito", quantity: 1, price: 95000 }
      ],
      total: 185000,
      status: "En Producción",
      date: "2024-08-18",
      delivery: "2024-08-23"
    },
    {
      id: "PED-003",
      customer: "Carlos Martínez", 
      products: [
        { name: "Conjunto Azul", quantity: 1, price: 75000 }
      ],
      total: 75000,
      status: "Completado",
      date: "2024-08-15",
      delivery: "2024-08-20"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completado": return "bg-success/10 text-success border-success/20"
      case "En Producción": return "bg-warning/10 text-warning border-warning/20" 
      case "Enviado": return "bg-primary/10 text-primary border-primary/20"
      case "Pendiente": return "bg-muted text-muted-foreground border-border"
      default: return "bg-muted text-muted-foreground border-border"
    }
  }

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Pedidos</h1>
            <p className="text-muted-foreground">
              Gestiona tus pedidos y cotizaciones
            </p>
          </div>
          <Button className="bg-gradient-primary shadow-soft hover:shadow-glow">
            <Plus className="w-4 h-4 mr-2" />
            Nuevo Pedido
          </Button>
        </div>

        {/* Search and Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <Card className="lg:col-span-2 bg-gradient-card border-border/50 shadow-soft">
            <CardContent className="p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="Buscar pedidos por cliente o ID..."
                  className="pl-10"
                />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border/50 shadow-soft">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">23</div>
              <div className="text-sm text-muted-foreground">Pedidos Activos</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border/50 shadow-soft">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-success">$2,450,000</div>
              <div className="text-sm text-muted-foreground">Total Mes</div>
            </CardContent>
          </Card>
        </div>

        {/* Orders List */}
        <Card className="bg-gradient-card border-border/50 shadow-soft">
          <CardHeader>
            <CardTitle className="text-xl font-semibold flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Lista de Pedidos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="p-4 border border-border rounded-lg bg-card hover:shadow-soft transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold">{order.id}</h3>
                    <p className="text-sm text-muted-foreground">{order.customer}</p>
                    <p className="text-xs text-muted-foreground">Fecha: {order.date}</p>
                  </div>
                  <Badge className={getStatusColor(order.status)} variant="outline">
                    {order.status}
                  </Badge>
                </div>
                
                <div className="space-y-2 mb-4">
                  {order.products.map((product, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <span>{product.name} x{product.quantity}</span>
                      <span className="font-medium">${product.price.toLocaleString('es-CO')}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <div>
                    <p className="text-lg font-bold text-primary">
                      Total: ${order.total.toLocaleString('es-CO')}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Entrega: {order.delivery}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Truck className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  )
}

export default Orders