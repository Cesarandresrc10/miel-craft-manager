import { AppLayout } from "@/components/layout/AppLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { 
  Plus, 
  Search, 
  Factory,
  Play,
  CheckCircle,
  Clock,
  Package
} from "lucide-react"

const Production = () => {
  const productionOrders = [
    {
      id: "PROD-001",
      product: "Conjunto Camisita + Bombacho",
      quantity: 10,
      status: "En Proceso",
      startDate: "2024-08-15",
      estimatedCompletion: "2024-08-22",
      materials: [
        { name: "Algodón 100%", needed: "6m", available: "25m" },
        { name: "Hilo Rosa", needed: "2 rollos", available: "8 rollos" }
      ]
    },
    {
      id: "PROD-002", 
      product: "Body Manga Larga",
      quantity: 15,
      status: "Pendiente",
      startDate: "2024-08-20",
      estimatedCompletion: "2024-08-25",
      materials: [
        { name: "Algodón 100%", needed: "4.5m", available: "25m" },
        { name: "Hilo Blanco", needed: "1.5 rollos", available: "5 rollos" }
      ]
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completado": return "bg-success/10 text-success border-success/20"
      case "En Proceso": return "bg-warning/10 text-warning border-warning/20"
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
            <h1 className="text-3xl font-bold text-foreground">Producción</h1>
            <p className="text-muted-foreground">
              Gestiona tus órdenes de producción y BOM
            </p>
          </div>
          <Button className="bg-gradient-primary shadow-soft hover:shadow-glow">
            <Plus className="w-4 h-4 mr-2" />
            Nueva Orden de Producción
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-gradient-card border-border/50 shadow-soft">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">5</div>
              <div className="text-sm text-muted-foreground">Órdenes Activas</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card border-border/50 shadow-soft">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-warning">2</div>
              <div className="text-sm text-muted-foreground">En Proceso</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card border-border/50 shadow-soft">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-success">12</div>
              <div className="text-sm text-muted-foreground">Completadas</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card border-border/50 shadow-soft">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-muted-foreground">85%</div>
              <div className="text-sm text-muted-foreground">Eficiencia</div>
            </CardContent>
          </Card>
        </div>

        {/* Production Orders */}
        <Card className="bg-gradient-card border-border/50 shadow-soft">
          <CardHeader>
            <CardTitle className="text-xl font-semibold flex items-center gap-2">
              <Factory className="w-5 h-5" />
              Órdenes de Producción
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {productionOrders.map((order) => (
              <div key={order.id} className="p-4 border border-border rounded-lg bg-card">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold">{order.product}</h3>
                    <p className="text-sm text-muted-foreground">{order.id}</p>
                  </div>
                  <Badge className={getStatusColor(order.status)} variant="outline">
                    {order.status}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-sm font-medium">Cantidad</p>
                    <p className="text-lg font-bold text-primary">{order.quantity} unidades</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Inicio</p>
                    <p className="text-sm text-muted-foreground">{order.startDate}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Estimado</p>
                    <p className="text-sm text-muted-foreground">{order.estimatedCompletion}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium">Materiales Requeridos:</p>
                  {order.materials.map((material, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <span>{material.name}</span>
                      <span className="text-muted-foreground">
                        {material.needed} (disponible: {material.available})
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2 mt-4">
                  <Button size="sm" variant="outline">
                    <Play className="w-4 h-4 mr-1" />
                    Iniciar
                  </Button>
                  <Button size="sm" variant="outline">
                    Ver BOM
                  </Button>
                  <Button size="sm" variant="outline">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Completar
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  )
}

export default Production