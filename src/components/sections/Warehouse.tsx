import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const zones = [
  { id: 'A', name: 'Зона A (Электроника)', capacity: 85, used: 73, cells: 240, color: 'bg-blue-500' },
  { id: 'B', name: 'Зона B (Продукты)', capacity: 92, used: 85, cells: 320, color: 'bg-green-500' },
  { id: 'C', name: 'Зона C (Одежда)', capacity: 68, used: 46, cells: 180, color: 'bg-purple-500' },
  { id: 'D', name: 'Зона D (Мебель)', capacity: 45, used: 28, cells: 120, color: 'bg-orange-500' },
];

const recentMovements = [
  { id: 1, product: 'Ноутбук Lenovo T14', from: 'A-12-03', to: 'A-15-08', qty: 3, time: '11:24', operator: 'Иванов И.' },
  { id: 2, product: 'Кофе Lavazza 1кг', from: 'B-05-12', to: 'B-08-03', qty: 50, time: '11:18', operator: 'Петров П.' },
  { id: 3, product: 'Джинсы Levis 501', from: 'C-08-05', to: 'C-12-01', qty: 15, time: '11:05', operator: 'Сидоров С.' },
  { id: 4, product: 'iPhone 15 Pro', from: 'A-15-01', to: 'A-18-05', qty: 8, time: '10:47', operator: 'Иванов И.' },
];

export default function Warehouse() {
  return (
    <>
      <header className="bg-card border-b border-border px-8 py-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Склад</h2>
            <p className="text-sm text-muted-foreground">Управление складскими зонами и ячейками</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Icon name="Map" size={16} className="mr-2" />
              Карта склада
            </Button>
            <Button size="sm">
              <Icon name="ArrowLeftRight" size={16} className="mr-2" />
              Переместить товар
            </Button>
          </div>
        </div>
      </header>

      <div className="p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {zones.map((zone) => (
            <Card key={zone.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Зона {zone.id}</p>
                    <p className="text-xl font-bold">{zone.name.replace(`Зона ${zone.id} `, '')}</p>
                  </div>
                  <div className={`${zone.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                    <span className="text-white text-xl font-bold">{zone.id}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Заполненность</span>
                      <span className="font-semibold">{zone.used}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full ${zone.color}`}
                        style={{ width: `${zone.used}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Ячеек всего</span>
                    <span className="font-semibold">{zone.cells}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Вместимость</span>
                    <span className="font-semibold">{zone.capacity} м³</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4">
                  <Icon name="Eye" size={16} className="mr-2" />
                  Просмотр
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="History" size={20} />
              Последние перемещения
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentMovements.map((movement) => (
                <div
                  key={movement.id}
                  className="flex items-center justify-between p-4 bg-muted/40 rounded-lg hover:bg-muted/60 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold text-foreground">{movement.product}</p>
                      <Badge variant="outline">{movement.qty} шт</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="MapPin" size={14} />
                      <span className="font-mono">{movement.from}</span>
                      <Icon name="ArrowRight" size={14} />
                      <span className="font-mono">{movement.to}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">{movement.time}</p>
                    <p className="text-xs text-muted-foreground">{movement.operator}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Icon name="AlertCircle" size={18} />
                Переполненные зоны
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {zones
                  .filter((z) => z.used > 80)
                  .map((zone) => (
                    <div key={zone.id} className="flex items-center justify-between p-3 bg-destructive/10 rounded-lg">
                      <div>
                        <p className="font-semibold text-sm">{zone.name}</p>
                        <p className="text-xs text-muted-foreground">{zone.cells} ячеек</p>
                      </div>
                      <Badge variant="destructive">{zone.used}%</Badge>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Icon name="CheckCircle2" size={18} />
                Оптимальная загрузка
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {zones
                  .filter((z) => z.used >= 50 && z.used <= 80)
                  .map((zone) => (
                    <div key={zone.id} className="flex items-center justify-between p-3 bg-green-500/10 rounded-lg">
                      <div>
                        <p className="font-semibold text-sm">{zone.name}</p>
                        <p className="text-xs text-muted-foreground">{zone.cells} ячеек</p>
                      </div>
                      <Badge variant="secondary">{zone.used}%</Badge>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Icon name="TrendingDown" size={18} />
                Недозагруженные зоны
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {zones
                  .filter((z) => z.used < 50)
                  .map((zone) => (
                    <div key={zone.id} className="flex items-center justify-between p-3 bg-yellow-500/10 rounded-lg">
                      <div>
                        <p className="font-semibold text-sm">{zone.name}</p>
                        <p className="text-xs text-muted-foreground">{zone.cells} ячеек</p>
                      </div>
                      <Badge variant="outline">{zone.used}%</Badge>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
