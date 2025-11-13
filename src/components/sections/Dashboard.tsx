import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const weeklyData = [
  { name: 'Пн', приемка: 45, отгрузка: 38 },
  { name: 'Вт', приемка: 52, отгрузка: 41 },
  { name: 'Ср', приемка: 48, отгрузка: 55 },
  { name: 'Чт', приемка: 61, отгрузка: 47 },
  { name: 'Пт', приемка: 55, отгрузка: 52 },
  { name: 'Сб', приемка: 38, отгрузка: 36 },
  { name: 'Вс', приемка: 28, отгрузка: 24 },
];

const categoryData = [
  { name: 'Электроника', value: 2847, color: '#0EA5E9' },
  { name: 'Продукты', value: 1923, color: '#33C3F0' },
  { name: 'Одежда', value: 1456, color: '#8DD1E1' },
  { name: 'Мебель', value: 987, color: '#A4E4F4' },
];

const recentOrders = [
  { id: 'ЗК-10234', client: 'ООО "Торговый Дом"', status: 'Собирается', items: 24, time: '10:24' },
  { id: 'ЗК-10235', client: 'ИП Иванов', status: 'Готов', items: 8, time: '10:18' },
  { id: 'ЗК-10236', client: 'ООО "МегаМаркет"', status: 'Отгружен', items: 156, time: '10:05' },
  { id: 'ЗК-10237', client: 'ООО "Ритейл Плюс"', status: 'Собирается', items: 42, time: '09:47' },
];

const lowStockItems = [
  { name: 'Ноутбук Lenovo T14', sku: 'EL-1034', current: 3, min: 10 },
  { name: 'Кофе Lavazza 1кг', sku: 'PR-2891', current: 15, min: 50 },
  { name: 'Джинсы Levis 501', sku: 'CL-4523', current: 8, min: 20 },
];

const stats = [
  { title: 'Товаров на складе', value: '7,213', change: '+124', icon: 'Package', color: 'bg-blue-500' },
  { title: 'Заказов сегодня', value: '47', change: '+8', icon: 'ShoppingCart', color: 'bg-sky-500' },
  { title: 'Заполненность', value: '73%', change: '+2%', icon: 'Warehouse', color: 'bg-cyan-500' },
  { title: 'На приемке', value: '156', change: '+12', icon: 'PackagePlus', color: 'bg-teal-500' },
];

export default function Dashboard() {
  return (
    <>
      <header className="bg-card border-b border-border px-8 py-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Дашборд</h2>
            <p className="text-sm text-muted-foreground">Обзор складских операций в реальном времени</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Icon name="Download" size={16} className="mr-2" />
              Экспорт
            </Button>
            <Button size="sm">
              <Icon name="Plus" size={16} className="mr-2" />
              Новая операция
            </Button>
          </div>
        </div>
      </header>

      <div className="p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                    <Badge variant="secondary" className="text-xs">
                      {stat.change}
                    </Badge>
                  </div>
                  <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                    <Icon name={stat.icon} className="text-white" size={24} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="TrendingUp" size={20} />
                Динамика операций за неделю
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="name" stroke="#6B7280" />
                  <YAxis stroke="#6B7280" />
                  <Tooltip />
                  <Line type="monotone" dataKey="приемка" stroke="#0EA5E9" strokeWidth={2} dot={{ r: 4 }} />
                  <Line type="monotone" dataKey="отгрузка" stroke="#33C3F0" strokeWidth={2} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="PieChart" size={20} />
                Товары по категориям
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {categoryData.map((cat, idx) => (
                  <div key={idx} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }}></div>
                      <span className="text-muted-foreground">{cat.name}</span>
                    </div>
                    <span className="font-semibold">{cat.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={20} />
                  Текущие заказы
                </div>
                <Badge variant="outline">4 активных</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentOrders.map((order) => (
                  <div
                    key={order.id}
                    className="flex items-center justify-between p-4 bg-muted/40 rounded-lg hover:bg-muted/60 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-semibold text-foreground">{order.id}</p>
                        <Badge
                          variant={
                            order.status === 'Отгружен'
                              ? 'default'
                              : order.status === 'Готов'
                              ? 'secondary'
                              : 'outline'
                          }
                          className="text-xs"
                        >
                          {order.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{order.client}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {order.items} позиций • {order.time}
                      </p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Icon name="ChevronRight" size={18} />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon name="AlertTriangle" size={20} />
                  Критичные остатки
                </div>
                <Badge variant="destructive">3 позиции</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {lowStockItems.map((item, idx) => (
                  <div key={idx} className="p-4 border border-border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-semibold text-foreground">{item.name}</p>
                        <p className="text-xs text-muted-foreground">Артикул: {item.sku}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Остаток:</span>
                      <span className="font-semibold text-destructive">
                        {item.current} из {item.min}
                      </span>
                    </div>
                    <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-destructive"
                        style={{ width: `${(item.current / item.min) * 100}%` }}
                      ></div>
                    </div>
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
