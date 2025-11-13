import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Icon from '@/components/ui/icon';

const receivingQueue = [
  { id: 'ПР-1045', supplier: 'ООО "ТехноПоставка"', items: 45, status: 'Ожидает', date: '13.11.2025', time: '09:00' },
  { id: 'ПР-1046', supplier: 'ИП Сидоров', items: 12, status: 'Проверка', date: '13.11.2025', time: '10:30' },
  { id: 'ПР-1047', supplier: 'ООО "МегаОпт"', items: 234, status: 'Размещение', date: '13.11.2025', time: '11:15' },
  { id: 'ПР-1048', supplier: 'ООО "Партнер"', items: 78, status: 'Завершено', date: '13.11.2025', time: '08:20' },
];

export default function Receiving() {
  return (
    <>
      <header className="bg-card border-b border-border px-8 py-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Приемка товаров</h2>
            <p className="text-sm text-muted-foreground">Регистрация и обработка входящих поставок</p>
          </div>
          <Button size="sm">
            <Icon name="PackagePlus" size={16} className="mr-2" />
            Новая приемка
          </Button>
        </div>
      </header>

      <div className="p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">В очереди</p>
                  <p className="text-3xl font-bold">3</p>
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
                  <p className="text-sm text-muted-foreground mb-1">В работе</p>
                  <p className="text-3xl font-bold">1</p>
                </div>
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Icon name="PackageCheck" className="text-white" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Завершено сегодня</p>
                  <p className="text-3xl font-bold">12</p>
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
                  <p className="text-sm text-muted-foreground mb-1">Принято позиций</p>
                  <p className="text-3xl font-bold">1,247</p>
                </div>
                <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center">
                  <Icon name="Package" className="text-white" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Очередь приемки</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Номер</TableHead>
                  <TableHead>Поставщик</TableHead>
                  <TableHead>Позиций</TableHead>
                  <TableHead>Дата/Время</TableHead>
                  <TableHead>Статус</TableHead>
                  <TableHead className="text-right">Действия</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {receivingQueue.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-mono font-semibold">{item.id}</TableCell>
                    <TableCell>{item.supplier}</TableCell>
                    <TableCell>{item.items} шт</TableCell>
                    <TableCell className="text-sm">
                      {item.date}
                      <br />
                      <span className="text-muted-foreground">{item.time}</span>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          item.status === 'Завершено'
                            ? 'default'
                            : item.status === 'Проверка'
                            ? 'secondary'
                            : 'outline'
                        }
                      >
                        {item.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="sm">
                          <Icon name="Eye" size={16} />
                        </Button>
                        {item.status !== 'Завершено' && (
                          <Button variant="default" size="sm">
                            <Icon name="Play" size={16} className="mr-1" />
                            Начать
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
