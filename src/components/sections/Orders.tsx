import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const orders = [
  { id: 'ЗК-10234', client: 'ООО "Торговый Дом"', date: '13.11.2025', items: 24, total: 245000, status: 'Собирается', priority: 'Высокий' },
  { id: 'ЗК-10235', client: 'ИП Иванов', date: '13.11.2025', items: 8, total: 45000, status: 'Готов', priority: 'Обычный' },
  { id: 'ЗК-10236', client: 'ООО "МегаМаркет"', date: '13.11.2025', items: 156, total: 1250000, status: 'Отгружен', priority: 'Срочный' },
  { id: 'ЗК-10237', client: 'ООО "Ритейл Плюс"', date: '13.11.2025', items: 42, total: 380000, status: 'Новый', priority: 'Обычный' },
  { id: 'ЗК-10238', client: 'ИП Петров', date: '12.11.2025', items: 15, total: 95000, status: 'Собирается', priority: 'Высокий' },
  { id: 'ЗК-10239', client: 'ООО "Оптторг"', date: '12.11.2025', items: 67, total: 520000, status: 'Готов', priority: 'Обычный' },
];

export default function Orders() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredOrders = orders.filter(
    (o) =>
      o.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.client.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <header className="bg-card border-b border-border px-8 py-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Заказы</h2>
            <p className="text-sm text-muted-foreground">Управление заказами клиентов</p>
          </div>
          <Button size="sm">
            <Icon name="Plus" size={16} className="mr-2" />
            Новый заказ
          </Button>
        </div>
      </header>

      <div className="p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Новых</p>
                  <p className="text-3xl font-bold">8</p>
                </div>
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <Icon name="FileText" className="text-white" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">В работе</p>
                  <p className="text-3xl font-bold">15</p>
                </div>
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Icon name="Clock" className="text-white" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Готовых</p>
                  <p className="text-3xl font-bold">23</p>
                </div>
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <Icon name="CheckCircle2" className="text-white" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">За сегодня</p>
                  <p className="text-3xl font-bold">47</p>
                </div>
                <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center">
                  <Icon name="TrendingUp" className="text-white" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 relative">
                <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Поиск по номеру или клиенту..."
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
                  <TableHead>Номер</TableHead>
                  <TableHead>Клиент</TableHead>
                  <TableHead>Дата</TableHead>
                  <TableHead>Позиций</TableHead>
                  <TableHead>Сумма</TableHead>
                  <TableHead>Приоритет</TableHead>
                  <TableHead>Статус</TableHead>
                  <TableHead className="text-right">Действия</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-mono font-semibold">{order.id}</TableCell>
                    <TableCell>{order.client}</TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>{order.items} шт</TableCell>
                    <TableCell className="font-semibold">{order.total.toLocaleString()} ₽</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          order.priority === 'Срочный'
                            ? 'destructive'
                            : order.priority === 'Высокий'
                            ? 'default'
                            : 'outline'
                        }
                      >
                        {order.priority}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          order.status === 'Отгружен'
                            ? 'default'
                            : order.status === 'Готов'
                            ? 'secondary'
                            : 'outline'
                        }
                      >
                        {order.status}
                      </Badge>
                    </TableCell>
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
                Показано {filteredOrders.length} из {orders.length} заказов
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
