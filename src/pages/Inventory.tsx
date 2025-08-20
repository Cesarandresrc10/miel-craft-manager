import { useState } from "react"
import { AppLayout } from "@/components/layout/AppLayout"
import { ProductCard } from "@/components/inventory/ProductCard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { 
  Plus, 
  Search, 
  Filter,
  Package,
  Scissors,
  AlertTriangle
} from "lucide-react"

const Inventory = () => {
  const [searchQuery, setSearchQuery] = useState("")

  const rawMaterials = [
    {
      id: "mat-1",
      name: "Algodón 100% Blanco",
      sku: "MAT-ALG-001", 
      stock: 25,
      minStock: 10,
      unit: "metros",
      cost: 8000,
      supplier: "Textiles La Rosa"
    },
    {
      id: "mat-2",
      name: "Hilo Bordado Rosa",
      sku: "MAT-HIL-002",
      stock: 8,
      minStock: 5,
      unit: "rollos", 
      cost: 15000,
      supplier: "Bordados Express"
    },
    {
      id: "mat-3",
      name: "Botones Madera Natural",
      sku: "MAT-BOT-003",
      stock: 45,
      minStock: 50,
      unit: "unidades",
      cost: 2500,
      supplier: "Accesorios Baby"
    }
  ]

  const finishedProducts = [
    {
      id: "prod-1",
      name: "Conjunto Camisita + Bombacho",
      sku: "PROD-CB-001",
      stock: 8,
      minStock: 10,
      price: 75000,
      variants: ["0-3M", "3-6M", "6-9M", "Rosa", "Azul"]
    },
    {
      id: "prod-2", 
      name: "Body Manga Larga Bordado",
      sku: "PROD-BM-002",
      stock: 15,
      minStock: 5,
      price: 45000,
      variants: ["0-3M", "3-6M", "Blanco", "Amarillo"]
    },
    {
      id: "prod-3",
      name: "Pijama Osito Personalizada",
      sku: "PROD-PO-003", 
      stock: 3,
      minStock: 8,
      price: 95000,
      variants: ["6-9M", "9-12M", "Rosa", "Azul", "Verde"]
    }
  ]

  const lowStockItems = [...rawMaterials, ...finishedProducts].filter(item => item.stock <= item.minStock)

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Inventario</h1>
            <p className="text-muted-foreground">
              Gestiona tu materia prima y productos terminados
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filtros
            </Button>
            <Button className="bg-gradient-primary shadow-soft hover:shadow-glow">
              <Plus className="w-4 h-4 mr-2" />
              Agregar Producto
            </Button>
          </div>
        </div>

        {/* Search and Filters */}
        <Card className="bg-gradient-card border-border/50 shadow-soft">
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="Buscar por nombre, SKU o proveedor..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Badge variant="outline" className="text-destructive border-destructive/20 bg-destructive/10">
                <AlertTriangle className="w-3 h-3 mr-1" />
                {lowStockItems.length} con stock bajo
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Inventory Tabs */}
        <Tabs defaultValue="products" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-muted/50">
            <TabsTrigger value="products" className="flex items-center gap-2">
              <Package className="w-4 h-4" />
              Productos Terminados
            </TabsTrigger>
            <TabsTrigger value="materials" className="flex items-center gap-2">
              <Scissors className="w-4 h-4" />
              Materia Prima
            </TabsTrigger>
            <TabsTrigger value="low-stock" className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Stock Bajo
            </TabsTrigger>
          </TabsList>

          {/* Finished Products */}
          <TabsContent value="products" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {finishedProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </TabsContent>

          {/* Raw Materials */}
          <TabsContent value="materials" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {rawMaterials.map((material) => (
                <Card key={material.id} className="bg-gradient-card border-border/50 shadow-soft hover:shadow-glow transition-all duration-300 group">
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {material.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">{material.sku}</p>
                          <p className="text-xs text-muted-foreground">
                            Proveedor: {material.supplier}
                          </p>
                        </div>
                        <Badge 
                          className={material.stock <= material.minStock 
                            ? "bg-destructive/10 text-destructive border-destructive/20" 
                            : "bg-success/10 text-success border-success/20"
                          } 
                          variant="outline"
                        >
                          {material.stock} {material.unit}
                        </Badge>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-border/50">
                        <span className="text-lg font-bold text-primary">
                          ${material.cost.toLocaleString('es-CO')} / {material.unit}
                        </span>
                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button size="sm" variant="ghost" className="h-8 px-3">
                            Editar
                          </Button>
                        </div>
                      </div>

                      {material.stock <= material.minStock && (
                        <div className="text-xs text-destructive bg-destructive/10 px-2 py-1 rounded border border-destructive/20">
                          ⚠️ Stock bajo (mín: {material.minStock} {material.unit})
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Low Stock */}
          <TabsContent value="low-stock" className="space-y-4">
            <Card className="bg-gradient-card border-border/50 shadow-soft">
              <CardHeader>
                <CardTitle className="text-xl font-semibold flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning" />
                  Artículos con Stock Bajo
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {lowStockItems.length === 0 ? (
                  <p className="text-center text-muted-foreground py-8">
                    ¡Excelente! No hay artículos con stock bajo.
                  </p>
                ) : (
                  <div className="space-y-3">
                    {lowStockItems.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-4 bg-warning/10 rounded-lg border border-warning/20">
                        <div>
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">{item.sku}</p>
                          <p className="text-xs text-warning">
                            Stock actual: {item.stock} | Mínimo: {item.minStock}
                          </p>
                        </div>
                        <Button size="sm" className="bg-gradient-primary">
                          Reabastecer
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  )
}

export default Inventory