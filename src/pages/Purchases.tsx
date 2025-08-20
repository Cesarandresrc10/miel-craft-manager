import { AppLayout } from "@/components/layout/AppLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  Plus, 
  Search, 
  FileText,
  Truck,
  Building2,
  Calendar
} from "lucide-react"

const Purchases = () => {
  const purchaseOrders = [
    {
      id: "OC-001",
      supplier: "Textiles La Rosa",
      items: [
        { name: "Algodón 100% Blanco", quantity: "50m", price: 400000 }
      ],
      total: 400000,
      status: "Pendiente",
      orderDate: "2024-08-20",
      expectedDelivery: "2024-08-25"
    },
    {
      id: "OC-002",
      supplier: "Bordados Express", 
      items: [
        { name: "Hilo Bordado Rosa", quantity: "10 rollos", price: 150000 },
        { name: "Hilo Bordado Azul", quantity: "10 rollos", price: 150000 }
      ],
      total: 300000,
      status: "En Tránsito",
      orderDate: "2024-08-18",
      expectedDelivery: "2024-08-22"
    },
    {
      id: "OC-003",
      supplier: "Accesorios Baby",
      items: [
        { name: "Botones Madera", quantity: "100 unidades", price: 250000 }
      ],
      total: 250000,
      status: "Recibido",
      orderDate: "2024-08-15",
      expectedDelivery: "2024-08-20"
    }
  ]

  const suppliers = [
    {
      id: "PROV-001",
      name: "Textiles La Rosa",
      contact: "Laura Martínez",
      phone: "+57 300 111 2222",
      email: "ventas@textilelarosa.com",
      products: ["Algodón", "Lino", "Telas especiales"],
      rating: 4.8,
      totalOrders: 15
    },
    {
      id: "PROV-002", 
      name: "Bordados Express",
      contact: "Carlos Rodríguez",
      phone: "+57 300 333 4444",
      email: "info@bordadosexpress.com", 
      products: ["Hilos", "Agujas", "Accesorios bordado"],
      rating: 4.6,
      totalOrders: 12
    },
    {
      id: "PROV-003",
      name: "Accesorios Baby",
      contact: "María González", 
      phone: "+57 300 555 6666",
      email: "ventas@accesoriosbaby.com",
      products: ["Botones", "Broches", "Etiquetas"],
      rating: 4.9,
      totalOrders: 8
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Recibido": return "bg-success/10 text-success border-success/20"
      case "En Tránsito": return "bg-warning/10 text-warning border-warning/20"
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
            <h1 className="text-3xl font-bold text-foreground">Compras</h1>
            <p className="text-muted-foreground">
              Gestiona proveedores y órdenes de compra
            </p>
          </div>
          <Button className="bg-gradient-primary shadow-soft hover:shadow-glow">
            <Plus className="w-4 h-4 mr-2" />
            Nueva Orden de Compra
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-gradient-card border-border/50 shadow-soft">
            <CardContent className="p-4 text-center">
              <FileText className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold text-primary">8</div>
              <div className="text-sm text-muted-foreground">Órdenes Activas</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border/50 shadow-soft">
            <CardContent className="p-4 text-center">
              <Truck className="w-8 h-8 mx-auto mb-2 text-warning" />
              <div className="text-2xl font-bold text-warning">3</div>
              <div className="text-sm text-muted-foreground">En Tránsito</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border/50 shadow-soft">
            <CardContent className="p-4 text-center">
              <Building2 className="w-8 h-8 mx-auto mb-2 text-success" />
              <div className="text-2xl font-bold text-success">12</div>
              <div className="text-sm text-muted-foreground">Proveedores</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border/50 shadow-soft">
            <CardContent className="p-4 text-center">
              <Calendar className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
              <div className="text-2xl font-bold text-foreground">$950,000</div>
              <div className="text-sm text-muted-foreground">Total Mes</div>
            </CardContent>
          </Card>
        </div>

        {/* Purchase Orders */}
        <Card className="bg-gradient-card border-border/50 shadow-soft">
          <CardHeader>
            <CardTitle className="text-xl font-semibold flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Órdenes de Compra
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {purchaseOrders.map((order) => (
              <div key={order.id} className="p-4 border border-border rounded-lg bg-card">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold">{order.id}</h3>
                    <p className="text-sm text-muted-foreground">{order.supplier}</p>
                    <p className="text-xs text-muted-foreground">
                      Pedido: {order.orderDate} • Entrega: {order.expectedDelivery}
                    </p>
                  </div>
                  <Badge className={getStatusColor(order.status)} variant="outline">
                    {order.status}
                  </Badge>
                </div>
                
                <div className="space-y-2 mb-4">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <span>{item.name} - {item.quantity}</span>
                      <span className="font-medium">${item.price.toLocaleString('es-CO')}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <p className="text-lg font-bold text-primary">
                    Total: ${order.total.toLocaleString('es-CO')}
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      Ver Detalles
                    </Button>
                    {order.status === "En Tránsito" && (
                      <Button size="sm" className="bg-gradient-primary">
                        Recibir
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Suppliers */}
        <Card className="bg-gradient-card border-border/50 shadow-soft">
          <CardHeader>
            <CardTitle className="text-xl font-semibold flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              Proveedores
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {suppliers.map((supplier) => (
                <div key={supplier.id} className="p-4 border border-border rounded-lg bg-card hover:shadow-soft transition-all">
                  <div className="mb-3">
                    <h3 className="font-semibold">{supplier.name}</h3>
                    <p className="text-sm text-muted-foreground">{supplier.contact}</p>
                    <p className="text-xs text-muted-foreground">{supplier.phone}</p>
                  </div>
                  
                  <div className="space-y-2 mb-3">
                    <p className="text-sm font-medium">Productos:</p>
                    <div className="flex flex-wrap gap-1">
                      {supplier.products.map((product, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {product}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <div className="text-sm">
                      <span className="text-warning">★</span> {supplier.rating} 
                      <span className="text-muted-foreground ml-2">
                        ({supplier.totalOrders} órdenes)
                      </span>
                    </div>
                    <Button size="sm" variant="outline">
                      Contactar
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  )
}

export default Purchases