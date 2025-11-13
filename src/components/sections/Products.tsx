import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Icon from '@/components/ui/icon';

const products = [
  { id: 1, name: 'Ноутбук Lenovo T14', sku: 'EL-1034', category: 'Электроника', stock: 45, price: 85000, location: 'A-12-03' },
  { id: 2, name: 'Кофе Lavazza 1кг', sku: 'PR-2891', category: 'Продукты', stock: 234, price: 890, location: 'B-05-12' },
  { id: 3, name: 'Джинсы Levis 501', sku: 'CL-4523', category: 'Одежда', stock: 78, price: 6500, location: 'C-08-05' },
  { id: 4, name: 'iPhone 15 Pro', sku: 'EL-1156', category: 'Электроника', stock: 23, price: 125000, location: 'A-15-01' },
  { id: 5, name: 'Стол письменный', sku: 'FU-3421', category: 'Мебель', stock: 12, price: 15000, location: 'D-02-08' },
  { id: 6, name: 'Масло оливковое 1л', sku: 'PR-3156', category: 'Продукты', stock: 456, price: 750, location: 'B-07-03' },
  { id: 7, name: 'Куртка зимняя', sku: 'CL-5892', category: 'Одежда', stock: 34, price: 12000, location: 'C-12-09' },
  { id: 8, name: 'Монитор Dell 27"', sku: 'EL-2034', category: 'Электроника', stock: 18, price: 32000, location: 'A-09-11' },
];

export default function Products() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.sku.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <header className="bg-card border-b border-border px-8 py-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Товары</h2>
            <p className="text-sm text-muted-foreground">Управление номенклатурой склада</p>
          </div>
          <Button size="sm">
            <Icon name="Plus" size={16} className="mr-2" />
            Добавить товар
          </Button>
        </div>
      </header>

      <div className="p-8 space-y-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 relative">
                <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Поиск по названию или артикулу..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" size="sm">
                <Icon name="Filter" size={16} className="mr-2" />
                Фильтры
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="Download" size={16} className="mr-2" />
                Экспорт
              </Button>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Артикул</TableHead>
                  <TableHead>Название</TableHead>
                  <TableHead>Категория</TableHead>
                  <TableHead>Остаток</TableHead>
                  <TableHead>Цена</TableHead>
                  <TableHead>Ячейка</TableHead>
                  <TableHead className="text-right">Действия</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-mono text-xs">{product.sku}</TableCell>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{product.category}</Badge>
                    </TableCell>
                    <TableCell>
                      <span className={product.stock < 50 ? 'text-destructive font-semibold' : ''}>
                        {product.stock} шт
                      </span>
                    </TableCell>
                    <TableCell>{product.price.toLocaleString()} ₽</TableCell>
                    <TableCell className="font-mono text-xs">{product.location}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="sm">
                          <Icon name="Eye" size={16} />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Icon name="Edit" size={16} />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Icon name="Printer" size={16} />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Показано {filteredProducts.length} из {products.length} товаров
              </p>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  <Icon name="ChevronLeft" size={16} />
                </Button>
                <Button variant="outline" size="sm">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">
                  <Icon name="ChevronRight" size={16} />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
