import { AppLayout } from "@/components/layout/AppLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { 
  Settings as SettingsIcon,
  User,
  Building,
  Palette,
  Bell,
  Shield,
  Upload,
  Save
} from "lucide-react"

const Settings = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Configuración</h1>
            <p className="text-muted-foreground">
              Personaliza tu aplicación y datos del negocio
            </p>
          </div>
          <Button className="bg-gradient-primary shadow-soft hover:shadow-glow">
            <Save className="w-4 h-4 mr-2" />
            Guardar Cambios
          </Button>
        </div>

        {/* Settings Tabs */}
        <Tabs defaultValue="business" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-muted/50">
            <TabsTrigger value="business" className="flex items-center gap-2">
              <Building className="w-4 h-4" />
              Negocio
            </TabsTrigger>
            <TabsTrigger value="user" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Usuario
            </TabsTrigger>
            <TabsTrigger value="appearance" className="flex items-center gap-2">
              <Palette className="w-4 h-4" />
              Apariencia
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Bell className="w-4 h-4" />
              Notificaciones
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Seguridad
            </TabsTrigger>
          </TabsList>

          {/* Business Settings */}
          <TabsContent value="business" className="space-y-6">
            <Card className="bg-gradient-card border-border/50 shadow-soft">
              <CardHeader>
                <CardTitle>Información del Negocio</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Nombre del Negocio</Label>
                    <Input id="businessName" placeholder="Miel Babies & Kids" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="rut">RUT/NIT</Label>
                    <Input id="rut" placeholder="123456789-0" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Dirección</Label>
                    <Input id="address" placeholder="Calle 123 #45-67, Bogotá" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input id="phone" placeholder="+57 300 123 4567" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="contacto@mielbabies.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currency">Moneda</Label>
                    <Input id="currency" placeholder="COP" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="logo">Logo del Negocio</Label>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Building className="w-8 h-8 text-white" />
                    </div>
                    <Button variant="outline">
                      <Upload className="w-4 h-4 mr-2" />
                      Subir Logo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* User Settings */}
          <TabsContent value="user" className="space-y-6">
            <Card className="bg-gradient-card border-border/50 shadow-soft">
              <CardHeader>
                <CardTitle>Información Personal</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Nombre</Label>
                    <Input id="firstName" placeholder="María" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Apellido</Label>
                    <Input id="lastName" placeholder="González" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="userEmail">Email</Label>
                    <Input id="userEmail" type="email" placeholder="maria@mielbabies.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="userPhone">Teléfono</Label>
                    <Input id="userPhone" placeholder="+57 300 123 4567" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-soft">
              <CardHeader>
                <CardTitle>Cambiar Contraseña</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Contraseña Actual</Label>
                  <Input id="currentPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword">Nueva Contraseña</Label>
                  <Input id="newPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
                  <Input id="confirmPassword" type="password" />
                </div>
                <Button variant="outline">Actualizar Contraseña</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Appearance Settings */}
          <TabsContent value="appearance" className="space-y-6">
            <Card className="bg-gradient-card border-border/50 shadow-soft">
              <CardHeader>
                <CardTitle>Personalización Visual</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-3">Colores del Tema</h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label>Color Primario</Label>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-primary rounded border"></div>
                          <Input value="#ec4899" className="flex-1" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Color Secundario</Label>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-secondary rounded border"></div>
                          <Input value="#f1f5f9" className="flex-1" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Color de Acento</Label>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-accent rounded border"></div>
                          <Input value="#fef3c7" className="flex-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium">Preferencias de Interfaz</h4>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="darkMode">Modo Oscuro</Label>
                      <Switch id="darkMode" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="animations">Animaciones</Label>
                      <Switch id="animations" defaultChecked />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Settings */}
          <TabsContent value="notifications" className="space-y-6">
            <Card className="bg-gradient-card border-border/50 shadow-soft">
              <CardHeader>
                <CardTitle>Configuración de Notificaciones</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Stock Bajo</Label>
                      <p className="text-sm text-muted-foreground">Recibir alertas cuando el stock esté bajo</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Nuevos Pedidos</Label>
                      <p className="text-sm text-muted-foreground">Notificar cuando lleguen nuevos pedidos</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Recordatorios de Pago</Label>
                      <p className="text-sm text-muted-foreground">Recordatorios automáticos de cartera vencida</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Reportes Semanales</Label>
                      <p className="text-sm text-muted-foreground">Resumen semanal de ventas y KPIs</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Settings */}
          <TabsContent value="security" className="space-y-6">
            <Card className="bg-gradient-card border-border/50 shadow-soft">
              <CardHeader>
                <CardTitle>Seguridad y Respaldos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Respaldo Automático</Label>
                      <p className="text-sm text-muted-foreground">Crear respaldos diarios automáticamente</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Autenticación de Dos Factores</Label>
                      <p className="text-sm text-muted-foreground">Agregar una capa extra de seguridad</p>
                    </div>
                    <Switch />
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <h4 className="font-medium mb-3">Gestión de Datos</h4>
                  <div className="flex gap-2">
                    <Button variant="outline">
                      Exportar Datos
                    </Button>
                    <Button variant="outline">
                      Crear Respaldo Manual
                    </Button>
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

export default Settings