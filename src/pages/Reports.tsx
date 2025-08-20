import { AppLayout } from "@/components/layout/AppLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  TrendingUp,
  DollarSign,
  Package,
  Users,
  Download,
  Calendar,
  BarChart3
} from "lucide-react"

const Reports = () => {
  const salesData = [
    { period: "Agosto 2024", sales: 2450000, orders: 45, margin: "35%" },
    { period: "Julio 2024", sales: 2180000, orders: 38, margin: "32%" },
    { period: "Junio 2024", sales: 1950000, orders: 35, margin: "30%" }
  ]

  const topProducts = [
    { name: "Conjunto Camisita + Bombacho", sales: 15, revenue: 1125000 },
    { name: "Body Manga Larga Bordado", sales: 22, revenue: 990000 },
    { name: "Pijama Osito Personalizada", sales: 8, revenue: 760000 }
  ]

  const inventoryValue = [
    { category: "Productos Terminados", value: 3450000, items: 145 },
    { category: "Materia Prima", value: 1280000, items: 89 },
    { category: "Accesorios", value: 450000, items: 234 }
  ]

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Reportes</h1>
            <p className="text-muted-foreground">
              Análisis y KPIs de tu negocio
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Calendar className="w-4 h-4 mr-2" />
              Filtrar Período
            </Button>
            <Button className="bg-gradient-primary shadow-soft hover:shadow-glow">
              <Download className="w-4 h-4 mr-2" />
              Exportar
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-gradient-card border-border/50 shadow-soft">
            <CardContent className="p-4 text-center">
              <DollarSign className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold text-primary">$2,450,000</div>
              <div className="text-sm text-muted-foreground">Ventas del Mes</div>
              <div className="text-xs text-success mt-1">+12% vs mes anterior</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border/50 shadow-soft">
            <CardContent className="p-4 text-center">
              <Package className="w-8 h-8 mx-auto mb-2 text-warning" />
              <div className="text-2xl font-bold text-warning">145</div>
              <div className="text-sm text-muted-foreground">Productos en Stock</div>
              <div className="text-xs text-destructive mt-1">12 con stock bajo</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border/50 shadow-soft">
            <CardContent className="p-4 text-center">
              <Users className="w-8 h-8 mx-auto mb-2 text-success" />
              <div className="text-2xl font-bold text-success">89</div>
              <div className="text-sm text-muted-foreground">Clientes Activos</div>
              <div className="text-xs text-success mt-1">+5 este mes</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border/50 shadow-soft">
            <CardContent className="p-4 text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold text-primary">35%</div>
              <div className="text-sm text-muted-foreground">Margen Promedio</div>
              <div className="text-xs text-success mt-1">+3% vs mes anterior</div>
            </CardContent>
          </Card>
        </div>

        {/* Reports Tabs */}
        <Tabs defaultValue="sales" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-muted/50">
            <TabsTrigger value="sales" className="flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Ventas
            </TabsTrigger>
            <TabsTrigger value="inventory" className="flex items-center gap-2">
              <Package className="w-4 h-4" />
              Inventario
            </TabsTrigger>
            <TabsTrigger value="customers" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Clientes
            </TabsTrigger>
            <TabsTrigger value="financial" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Financiero
            </TabsTrigger>
          </TabsList>

          {/* Sales Report */}
          <TabsContent value="sales" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-gradient-card border-border/50 shadow-soft">
                <CardHeader>
                  <CardTitle>Ventas por Período</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {salesData.map((period, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div>
                        <p className="font-medium">{period.period}</p>
                        <p className="text-sm text-muted-foreground">{period.orders} pedidos</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary">${period.sales.toLocaleString('es-CO')}</p>
                        <p className="text-sm text-success">Margen: {period.margin}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50 shadow-soft">
                <CardHeader>
                  <CardTitle>Productos Más Vendidos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {topProducts.map((product, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div>
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-muted-foreground">{product.sales} unidades vendidas</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary">${product.revenue.toLocaleString('es-CO')}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Inventory Report */}
          <TabsContent value="inventory" className="space-y-6">
            <Card className="bg-gradient-card border-border/50 shadow-soft">
              <CardHeader>
                <CardTitle>Valoración de Inventario</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {inventoryValue.map((category, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                    <div>
                      <p className="font-medium">{category.category}</p>
                      <p className="text-sm text-muted-foreground">{category.items} artículos</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-primary">
                        ${category.value.toLocaleString('es-CO')}
                      </p>
                    </div>
                  </div>
                ))}
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold">Total Inventario</p>
                    <p className="text-2xl font-bold text-primary">
                      $5,180,000
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Customers Report */}
          <TabsContent value="customers" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gradient-card border-border/50 shadow-soft">
                <CardHeader>
                  <CardTitle>Segmentación de Clientes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                    <span className="font-medium">Clientes VIP</span>
                    <span className="font-bold text-primary">15 (17%)</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                    <span className="font-medium">Clientes Frecuentes</span>
                    <span className="font-bold text-success">32 (36%)</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-accent/30 rounded-lg">
                    <span className="font-medium">Clientes Nuevos</span>
                    <span className="font-bold text-accent-foreground">42 (47%)</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50 shadow-soft">
                <CardHeader>
                  <CardTitle>Ticket Promedio</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center p-6">
                    <p className="text-3xl font-bold text-primary">$127,500</p>
                    <p className="text-sm text-muted-foreground">Valor promedio por pedido</p>
                    <p className="text-xs text-success mt-2">+8% vs mes anterior</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Financial Report */}
          <TabsContent value="financial" className="space-y-6">
            <Card className="bg-gradient-card border-border/50 shadow-soft">
              <CardHeader>
                <CardTitle>Flujo de Caja Básico</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-success/10 rounded-lg text-center">
                    <p className="text-sm text-muted-foreground">Ingresos</p>
                    <p className="text-2xl font-bold text-success">$2,450,000</p>
                  </div>
                  <div className="p-4 bg-destructive/10 rounded-lg text-center">
                    <p className="text-sm text-muted-foreground">Gastos</p>
                    <p className="text-2xl font-bold text-destructive">$1,590,000</p>
                  </div>
                  <div className="p-4 bg-primary/10 rounded-lg text-center">
                    <p className="text-sm text-muted-foreground">Utilidad</p>
                    <p className="text-2xl font-bold text-primary">$860,000</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  )
}

export default Reports