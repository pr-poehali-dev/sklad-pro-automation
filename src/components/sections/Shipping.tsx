import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Icon from '@/components/ui/icon';

const shipmentQueue = [
  { id: 'ОТ-2134', client: 'ООО "Торговый Дом"', items: 24, status: 'Сборка', priority: 'Высокий', time: '10:24' },
  { id: 'ОТ-2135', client: 'ИП Иванов', items: 8, status: 'Готов', priority: 'Обычный', time: '10:18' },
  { id: 'ОТ-2136', client: 'ООО "МегаМаркет"', items: 156, status: 'Отгружен', priority: 'Срочный', time: '10:05' },
  { id: 'ОТ-2137', client: 'ООО "Ритейл Плюс"', items: 42, status: 'Ожидает', priority: 'Обычный', time: '09:47' },
  { id: 'ОТ-2138', client: 'ИП Петров', items: 15, status: 'Сборка', priority: 'Срочный', time: '09:30' },
];

export default function Shipping() {
  return (
    <>
      <header className="bg-card border-b border-border px-8 py-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Отгрузка товаров</h2>
            <p className="text-sm text-muted-foreground">Сборка и отправка заказов клиентам</p>
          </div>
          <Button size="sm">
            <Icon name="PackageMinus" size={16} className="mr-2" />
            Новая отгрузка
          </Button>
        </div>
      </header>

      <div className="p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Ожидает сборки</p>
                  <p className="text-3xl font-bold">5</p>
                </div>
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <Icon name="Clock" className="text-white" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">В сборке</p>
                  <p className="text-3xl font-bold">3</p>
                </div>
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Icon name="PackageSearch" className="text-white" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Готово к отгрузке</p>
                  <p className="text-3xl font-bold">7</p>
                </div>
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <Icon name="PackageCheck" className="text-white" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Отгружено сегодня</p>
                  <p className="text-3xl font-bold">28</p>
                </div>
                <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center">
                  <Icon name="Truck" className="text-white" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Очередь отгрузки</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Номер</TableHead>
                  <TableHead>Клиент</TableHead>
                  <TableHead>Позиций</TableHead>
                  <TableHead>Приоритет</TableHead>
                  <TableHead>Статус</TableHead>
                  <TableHead>Время</TableHead>
                  <TableHead className="text-right">Действия</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {shipmentQueue.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-mono font-semibold">{item.id}</TableCell>
                    <TableCell>{item.client}</TableCell>
                    <TableCell>{item.items} шт</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          item.priority === 'Срочный'
                            ? 'destructive'
                            : item.priority === 'Высокий'
                            ? 'default'
                            : 'outline'
                        }
                      >
                        {item.priority}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          item.status === 'Отгружен'
                            ? 'default'
                            : item.status === 'Готов'
                            ? 'secondary'
                            : 'outline'
                        }
                      >
                        {item.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">{item.time}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="sm">
                          <Icon name="Eye" size={16} />
                        </Button>
                        {item.status !== 'Отгружен' && (
                          <Button variant="default" size="sm">
                            <Icon name="Play" size={16} className="mr-1" />
                            Собрать
                          </Button>
                        )}
                        <Button variant="ghost" size="sm">
                          <Icon name="Printer" size={16} />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
