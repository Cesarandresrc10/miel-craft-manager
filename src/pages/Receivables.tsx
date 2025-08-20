import { AppLayout } from "@/components/layout/AppLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Plus, 
  Search, 
  CreditCard,
  Clock,
  DollarSign,
  AlertTriangle,
  Calendar,
  User
} from "lucide-react"

const Receivables = () => {
  const pendingInvoices = [
    {
      id: "FAC-001",
      customer: "María González",
      amount: 185000,
      dueDate: "2024-08-25",
      daysOverdue: 0,
      status: "Pendiente"
    },
    {
      id: "FAC-002",
      customer: "Ana Rodríguez", 
      amount: 95000,
      dueDate: "2024-08-20",
      daysOverdue: 3,
      status: "Vencido"
    },
    {
      id: "FAC-003",
      customer: "Carlos Martínez",
      amount: 150000,
      dueDate: "2024-08-30",
      daysOverdue: 0,
      status: "Pendiente"
    }
  ]

  const recentPayments = [
    {
      id: "PAG-001",
      customer: "Laura Pérez",
      amount: 75000,
      date: "2024-08-20",
      method: "Transferencia",
      invoice: "FAC-005"
    },
    {
      id: "PAG-002",
      customer: "Miguel Silva",
      amount: 120000,
      date: "2024-08-19",
      method: "Efectivo",
      invoice: "FAC-004"
    }
  ]

  const agingData = [
    { range: "0-30 días", amount: 430000, count: 5, color: "bg-success" },
    { range: "31-60 días", amount: 185000, count: 2, color: "bg-warning" },
    { range: "61+ días", amount: 95000, count: 1, color: "bg-destructive" }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pagado": return "bg-success/10 text-success border-success/20"
      case "Pendiente": return "bg-warning/10 text-warning border-warning/20"
      case "Vencido": return "bg-destructive/10 text-destructive border-destructive/20"
      default: return "bg-muted text-muted-foreground border-border"
    }
  }

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Cartera</h1>
            <p className="text-muted-foreground">
              Gestiona cuentas por cobrar y pagos
            </p>
          </div>
          <Button className="bg-gradient-primary shadow-soft hover:shadow-glow">
            <Plus className="w-4 h-4 mr-2" />
            Registrar Pago
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-gradient-card border-border/50 shadow-soft">
            <CardContent className="p-4 text-center">
              <DollarSign className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold text-primary">$710,000</div>
              <div className="text-sm text-muted-foreground">Total por Cobrar</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border/50 shadow-soft">
            <CardContent className="p-4 text-center">
              <Clock className="w-8 h-8 mx-auto mb-2 text-warning" />
              <div className="text-2xl font-bold text-warning">$280,000</div>
              <div className="text-sm text-muted-foreground">Vencidas</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border/50 shadow-soft">
            <CardContent className="p-4 text-center">
              <Calendar className="w-8 h-8 mx-auto mb-2 text-success" />
              <div className="text-2xl font-bold text-success">$195,000</div>
              <div className="text-sm text-muted-foreground">Cobrado Hoy</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border/50 shadow-soft">
            <CardContent className="p-4 text-center">
              <User className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
              <div className="text-2xl font-bold text-foreground">8</div>
              <div className="text-sm text-muted-foreground">Clientes con Deuda</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-muted/50">
            <TabsTrigger value="pending">Cuentas Pendientes</TabsTrigger>
            <TabsTrigger value="payments">Pagos Recientes</TabsTrigger>
            <TabsTrigger value="aging">Aging de Cartera</TabsTrigger>
          </TabsList>

          {/* Pending Invoices */}
          <TabsContent value="pending" className="space-y-4">
            <Card className="bg-gradient-card border-border/50 shadow-soft">
              <CardHeader>
                <CardTitle className="text-xl font-semibold flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Facturas Pendientes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {pendingInvoices.map((invoice) => (
                  <div key={invoice.id} className="p-4 border border-border rounded-lg bg-card">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold">{invoice.id}</h3>
                        <p className="text-sm text-muted-foreground">{invoice.customer}</p>
                        <p className="text-xs text-muted-foreground">
                          Vencimiento: {invoice.dueDate}
                        </p>
                        {invoice.daysOverdue > 0 && (
                          <p className="text-xs text-destructive font-medium">
                            {invoice.daysOverdue} días vencida
                          </p>
                        )}
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-primary">
                          ${invoice.amount.toLocaleString('es-CO')}
                        </p>
                        <Badge className={getStatusColor(invoice.status)} variant="outline">
                          {invoice.status}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        Recordar Pago
                      </Button>
                      <Button size="sm" className="bg-gradient-primary">
                        Registrar Pago
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Recent Payments */}
          <TabsContent value="payments" className="space-y-4">
            <Card className="bg-gradient-card border-border/50 shadow-soft">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Pagos Recientes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentPayments.map((payment) => (
                  <div key={payment.id} className="p-4 border border-border rounded-lg bg-card">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold">{payment.customer}</h3>
                        <p className="text-sm text-muted-foreground">
                          Factura: {payment.invoice}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {payment.date} • {payment.method}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-success">
                          +${payment.amount.toLocaleString('es-CO')}
                        </p>
                        <Badge className="bg-success/10 text-success border-success/20" variant="outline">
                          Pagado
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Aging Report */}
          <TabsContent value="aging" className="space-y-4">
            <Card className="bg-gradient-card border-border/50 shadow-soft">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Aging de Cartera</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {agingData.map((item, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg bg-card">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{item.range}</h3>
                      <span className="text-sm text-muted-foreground">
                        {item.count} facturas
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded ${item.color}`}></div>
                      <p className="text-xl font-bold">
                        ${item.amount.toLocaleString('es-CO')}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  )
}

export default Receivables