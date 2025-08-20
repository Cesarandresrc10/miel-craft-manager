import { AppLayout } from "@/components/layout/AppLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  Plus, 
  Search, 
  Users,
  Phone,
  Mail,
  MapPin,
  Star
} from "lucide-react"

const Customers = () => {
  const customers = [
    {
      id: "CLI-001",
      name: "María González",
      email: "maria.gonzalez@email.com",
      phone: "+57 300 123 4567",
      address: "Calle 123 #45-67, Bogotá",
      totalOrders: 12,
      totalSpent: 850000,
      lastOrder: "2024-08-20",
      status: "VIP",
      preferences: ["Rosa", "0-3M", "Bordado personalizado"]
    },
    {
      id: "CLI-002",
      name: "Ana Rodríguez", 
      email: "ana.rodriguez@email.com",
      phone: "+57 300 234 5678",
      address: "Carrera 50 #12-34, Medellín", 
      totalOrders: 8,
      totalSpent: 650000,
      lastOrder: "2024-08-18",
      status: "Frecuente",
      preferences: ["Azul", "3-6M", "Algodón orgánico"]
    },
    {
      id: "CLI-003",
      name: "Carlos Martínez",
      email: "carlos.martinez@email.com", 
      phone: "+57 300 345 6789",
      address: "Avenida 80 #23-45, Cali",
      totalOrders: 3,
      totalSpent: 225000,
      lastOrder: "2024-08-15", 
      status: "Nuevo",
      preferences: ["Verde", "6-9M"]
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "VIP": return "bg-primary/10 text-primary border-primary/20"
      case "Frecuente": return "bg-success/10 text-success border-success/20"
      case "Nuevo": return "bg-accent/30 text-accent-foreground border-accent/40"
      default: return "bg-muted text-muted-foreground border-border"
    }
  }

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Clientes</h1>
            <p className="text-muted-foreground">
              Gestiona tu base de clientes y CRM
            </p>
          </div>
          <Button className="bg-gradient-primary shadow-soft hover:shadow-glow">
            <Plus className="w-4 h-4 mr-2" />
            Nuevo Cliente
          </Button>
        </div>

        {/* Search and Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <Card className="lg:col-span-2 bg-gradient-card border-border/50 shadow-soft">
            <CardContent className="p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="Buscar clientes por nombre, email o teléfono..."
                  className="pl-10"
                />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border/50 shadow-soft">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">89</div>
              <div className="text-sm text-muted-foreground">Total Clientes</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border/50 shadow-soft">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-success">15</div>
              <div className="text-sm text-muted-foreground">Clientes VIP</div>
            </CardContent>
          </Card>
        </div>

        {/* Customers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {customers.map((customer) => (
            <Card key={customer.id} className="bg-gradient-card border-border/50 shadow-soft hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {customer.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{customer.id}</p>
                    </div>
                  </div>
                  <Badge className={getStatusColor(customer.status)} variant="outline">
                    {customer.status}
                  </Badge>
                </div>

                {/* Contact Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    <span className="truncate">{customer.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <span>{customer.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span className="truncate">{customer.address}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-muted/30 rounded-lg">
                  <div className="text-center">
                    <p className="text-lg font-bold text-primary">{customer.totalOrders}</p>
                    <p className="text-xs text-muted-foreground">Pedidos</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-success">
                      ${customer.totalSpent.toLocaleString('es-CO')}
                    </p>
                    <p className="text-xs text-muted-foreground">Total</p>
                  </div>
                </div>

                {/* Preferences */}
                <div className="space-y-2 mb-4">
                  <p className="text-sm font-medium">Preferencias:</p>
                  <div className="flex flex-wrap gap-1">
                    {customer.preferences.map((pref, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {pref}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Last Order */}
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <div>
                    <p className="text-xs text-muted-foreground">Último pedido</p>
                    <p className="text-sm font-medium">{customer.lastOrder}</p>
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Phone className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Mail className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  )
}

export default Customers