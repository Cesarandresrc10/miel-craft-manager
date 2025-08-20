import { AppLayout } from "@/components/layout/AppLayout"
import { StatsCard } from "@/components/dashboard/StatsCard"
import { ProductCard } from "@/components/inventory/ProductCard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Package, 
  ShoppingCart, 
  Users, 
  TrendingUp, 
  Plus, 
  AlertTriangle,
  DollarSign,
  Factory
} from "lucide-react"

const Index = () => {
  // Sample data
  const stats = [
    {
      title: "Ventas del Mes",
      value: "$2,450,000",
      change: "+12% vs mes anterior",
      changeType: "increase" as const,
      icon: DollarSign
    },
    {
      title: "Pedidos Activos", 
      value: "23",
      change: "8 pendientes de producción",
      changeType: "neutral" as const,
      icon: ShoppingCart
    },
    {
      title: "Productos en Stock",
      value: "145",
      change: "12 con stock bajo",
      changeType: "decrease" as const,
      icon: Package
    },
    {
      title: "Clientes Activos",
      value: "89",
      change: "+5 este mes",
      changeType: "increase" as const,
      icon: Users
    }
  ]

  const recentProducts = [
    {
      id: "1",
      name: "Conjunto Camisita + Bombacho",
      sku: "PROD-CB-001",
      stock: 8,
      minStock: 10,
      price: 75000,
      variants: ["0-3M", "3-6M", "6-9M", "Rosa", "Azul"]
    },
    {
      id: "2", 
      name: "Body Manga Larga Bordado",
      sku: "PROD-BM-002",
      stock: 15,
      minStock: 5,
      price: 45000,
      variants: ["0-3M", "3-6M", "Blanco", "Amarillo"]
    },
    {
      id: "3",
      name: "Pijama Osito Personalizada",
      sku: "PROD-PO-003", 
      stock: 3,
      minStock: 8,
      price: 95000,
      variants: ["6-9M", "9-12M", "Rosa", "Azul", "Verde"]
    }
  ]

  const lowStockAlerts = [
    { name: "Algodón 100% Blanco", stock: "2.5m", needed: "10m" },
    { name: "Hilo Bordado Rosa", stock: "3 rollos", needed: "5 rollos" },
    { name: "Botones Madera", stock: "15 unidades", needed: "50 unidades" }
  ]

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground">
              Resumen de tu emprendimiento Miel Babies & Kids
            </p>
          </div>
          <Button className="bg-gradient-primary shadow-soft hover:shadow-glow">
            <Plus className="w-4 h-4 mr-2" />
            Nuevo Pedido
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Products Section */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-gradient-card border-border/50 shadow-soft">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl font-semibold">Productos Recientes</CardTitle>
                <Button variant="outline" size="sm">
                  Ver Todos
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gradient-card border-border/50 shadow-soft">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Acciones Rápidas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button variant="outline" className="h-20 flex-col gap-2">
                    <Package className="w-6 h-6" />
                    <span className="text-sm">Inventario</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col gap-2">
                    <Factory className="w-6 h-6" />
                    <span className="text-sm">Producción</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col gap-2">
                    <ShoppingCart className="w-6 h-6" />
                    <span className="text-sm">Nuevo Pedido</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col gap-2">
                    <Users className="w-6 h-6" />
                    <span className="text-sm">Clientes</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Low Stock Alerts */}
            <Card className="bg-gradient-card border-border/50 shadow-soft">
              <CardHeader className="flex flex-row items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-warning" />
                <CardTitle className="text-lg font-semibold">Alertas de Stock</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {lowStockAlerts.map((alert, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-warning/10 rounded-lg border border-warning/20">
                    <div>
                      <p className="font-medium text-sm">{alert.name}</p>
                      <p className="text-xs text-muted-foreground">
                        Stock: {alert.stock} | Necesario: {alert.needed}
                      </p>
                    </div>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full">
                  Ver Todas las Alertas
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-gradient-card border-border/50 shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Actividad Reciente</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Pedido #001 completado</p>
                      <p className="text-xs text-muted-foreground">Hace 2 horas</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Nuevo cliente registrado</p>
                      <p className="text-xs text-muted-foreground">Hace 4 horas</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-2">
                    <div className="w-2 h-2 bg-warning rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Stock bajo: Algodón</p>
                      <p className="text-xs text-muted-foreground">Hace 6 horas</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  )
};

export default Index;
