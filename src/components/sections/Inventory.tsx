import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Icon from '@/components/ui/icon';

const inventoryList = [
  { id: 'ИНВ-2024-11', zone: 'Зона A', date: '13.11.2025', status: 'В процессе', checked: 145, total: 240, operator: 'Иванов И.' },
  { id: 'ИНВ-2024-10', zone: 'Зона B', date: '12.11.2025', status: 'Завершено', checked: 320, total: 320, operator: 'Петров П.' },
  { id: 'ИНВ-2024-09', zone: 'Зона C', date: '10.11.2025', status: 'Завершено', checked: 180, total: 180, operator: 'Сидоров С.' },
  { id: 'ИНВ-2024-08', zone: 'Зона D', date: '08.11.2025', status: 'Завершено', checked: 120, total: 120, operator: 'Иванов И.' },
];

const discrepancies = [
  { product: 'Ноутбук Lenovo T14', sku: 'EL-1034', expected: 45, actual: 42, diff: -3, location: 'A-12-03' },
  { product: 'Кофе Lavazza 1кг', sku: 'PR-2891', expected: 234, actual: 239, diff: +5, location: 'B-05-12' },
  { product: 'iPhone 15 Pro', sku: 'EL-1156', expected: 23, actual: 21, diff: -2, location: 'A-15-01' },
];

export default function Inventory() {
  return (
    <>
      <header className="bg-card border-b border-border px-8 py-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Инвентаризация</h2>
            <p className="text-sm text-muted-foreground">Проведение и контроль инвентаризаций</p>
          </div>
          <Button size="sm">
            <Icon name="ClipboardList" size={16} className="mr-2" />
            Новая инвентаризация
          </Button>
        </div>
      </header>

      <div className="p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Активных</p>
                  <p className="text-3xl font-bold">1</p>
                </div>
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Icon name="ClipboardCheck" className="text-white" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Завершено за месяц</p>
                  <p className="text-3xl font-bold">8</p>
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
                  <p className="text-sm text-muted-foreground mb-1">Расхождений</p>
                  <p className="text-3xl font-bold">3</p>
                </div>
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <Icon name="AlertTriangle" className="text-white" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Проверено позиций</p>
                  <p className="text-3xl font-bold">765</p>
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
            <CardTitle>История инвентаризаций</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Номер</TableHead>
                  <TableHead>Зона</TableHead>
                  <TableHead>Дата</TableHead>
                  <TableHead>Прогресс</TableHead>
                  <TableHead>Оператор</TableHead>
                  <TableHead>Статус</TableHead>
                  <TableHead className="text-right">Действия</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {inventoryList.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-mono font-semibold">{item.id}</TableCell>
                    <TableCell>{item.zone}</TableCell>
                    <TableCell>{item.date}</TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">{item.checked} / {item.total}</span>
                          <span className="font-semibold">{Math.round((item.checked / item.total) * 100)}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary"
                            style={{ width: `${(item.checked / item.total) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{item.operator}</TableCell>
                    <TableCell>
                      <Badge variant={item.status === 'Завершено' ? 'default' : 'secondary'}>
                        {item.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="sm">
                          <Icon name="Eye" size={16} />
                        </Button>
                        {item.status === 'В процессе' && (
                          <Button variant="default" size="sm">
                            <Icon name="Play" size={16} className="mr-1" />
                            Продолжить
                          </Button>
                        )}
                        <Button variant="ghost" size="sm">
                          <Icon name="FileText" size={16} />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Icon name="AlertCircle" size={20} />
                Расхождения
              </div>
              <Badge variant="destructive">{discrepancies.length}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {discrepancies.map((item, idx) => (
                <div key={idx} className="p-4 border border-border rounded-lg hover:bg-muted/40 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-semibold text-foreground">{item.product}</p>
                      <p className="text-xs text-muted-foreground">Артикул: {item.sku} • Ячейка: {item.location}</p>
                    </div>
                    <Badge variant={item.diff < 0 ? 'destructive' : 'default'}>
                      {item.diff > 0 ? '+' : ''}{item.diff} шт
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <div>
                        <span className="text-muted-foreground">Ожидалось: </span>
                        <span className="font-semibold">{item.expected} шт</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Фактически: </span>
                        <span className="font-semibold">{item.actual} шт</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Icon name="AlertCircle" size={14} className="mr-1" />
                      Разобрать
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
