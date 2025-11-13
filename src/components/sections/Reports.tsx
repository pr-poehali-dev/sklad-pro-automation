import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const monthlyData = [
  { month: 'Янв', приход: 2400, расход: 2100 },
  { month: 'Фев', приход: 2210, расход: 2300 },
  { month: 'Мар', приход: 2890, расход: 2500 },
  { month: 'Апр', приход: 3200, расход: 2800 },
  { month: 'Май', приход: 3100, расход: 2900 },
  { month: 'Июн', приход: 3400, расход: 3100 },
];

const categoryRevenue = [
  { name: 'Электроника', value: 15400000 },
  { name: 'Продукты', value: 8900000 },
  { name: 'Одежда', value: 6700000 },
  { name: 'Мебель', value: 4200000 },
];

const reports = [
  { id: 1, name: 'Отчет по складским остаткам', type: 'Остатки', date: '13.11.2025', icon: 'Package', color: 'bg-blue-500' },
  { id: 2, name: 'Отчет по операциям за месяц', type: 'Операции', date: '01.11.2025', icon: 'Activity', color: 'bg-green-500' },
  { id: 3, name: 'Оборачиваемость товаров', type: 'Аналитика', date: '13.11.2025', icon: 'TrendingUp', color: 'bg-purple-500' },
  { id: 4, name: 'Отчет по контрагентам', type: 'Финансы', date: '10.11.2025', icon: 'Users', color: 'bg-orange-500' },
  { id: 5, name: 'ABC-анализ товаров', type: 'Аналитика', date: '08.11.2025', icon: 'BarChart3', color: 'bg-cyan-500' },
  { id: 6, name: 'Инвентаризация - результаты', type: 'Инвентаризация', date: '05.11.2025', icon: 'ClipboardList', color: 'bg-yellow-500' },
];

export default function Reports() {
  return (
    <>
      <header className="bg-card border-b border-border px-8 py-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Отчеты</h2>
            <p className="text-sm text-muted-foreground">Аналитика и отчетность по складским операциям</p>
          </div>
          <Button size="sm">
            <Icon name="FileBarChart" size={16} className="mr-2" />
            Создать отчет
          </Button>
        </div>
      </header>

      <div className="p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Оборот за месяц</p>
                  <p className="text-2xl font-bold">35.2M ₽</p>
                </div>
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Icon name="TrendingUp" className="text-white" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Средний чек</p>
                  <p className="text-2xl font-bold">127,500 ₽</p>
                </div>
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <Icon name="DollarSign" className="text-white" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Операций за день</p>
                  <p className="text-2xl font-bold">247</p>
                </div>
                <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center">
                  <Icon name="Activity" className="text-white" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Оборачиваемость</p>
                  <p className="text-2xl font-bold">12.5 дн</p>
                </div>
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Icon name="RotateCw" className="text-white" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="TrendingUp" size={20} />
                Динамика прихода и расхода
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="month" stroke="#6B7280" />
                  <YAxis stroke="#6B7280" />
                  <Tooltip />
                  <Line type="monotone" dataKey="приход" stroke="#0EA5E9" strokeWidth={2} />
                  <Line type="monotone" dataKey="расход" stroke="#F59E0B" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="BarChart3" size={20} />
                Оборот по категориям
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={categoryRevenue}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="name" stroke="#6B7280" />
                  <YAxis stroke="#6B7280" />
                  <Tooltip />
                  <Bar dataKey="value" fill="#0EA5E9" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Доступные отчеты</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {reports.map((report) => (
                <div
                  key={report.id}
                  className="p-4 border border-border rounded-lg hover:bg-muted/40 transition-colors cursor-pointer"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`${report.color} w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon name={report.icon} className="text-white" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground mb-1">{report.name}</p>
                      <p className="text-xs text-muted-foreground">{report.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{report.date}</span>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="sm">
                        <Icon name="Eye" size={14} />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Icon name="Download" size={14} />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Быстрые отчеты</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button variant="outline" className="h-auto flex-col items-start p-4 gap-2">
                <Icon name="Package" size={24} className="text-primary" />
                <div className="text-left">
                  <p className="font-semibold">Остатки на складе</p>
                  <p className="text-xs text-muted-foreground">Текущее состояние</p>
                </div>
              </Button>
              <Button variant="outline" className="h-auto flex-col items-start p-4 gap-2">
                <Icon name="TrendingUp" size={24} className="text-primary" />
                <div className="text-left">
                  <p className="font-semibold">Динамика продаж</p>
                  <p className="text-xs text-muted-foreground">За последний месяц</p>
                </div>
              </Button>
              <Button variant="outline" className="h-auto flex-col items-start p-4 gap-2">
                <Icon name="AlertTriangle" size={24} className="text-primary" />
                <div className="text-left">
                  <p className="font-semibold">Критичные остатки</p>
                  <p className="text-xs text-muted-foreground">Требуют внимания</p>
                </div>
              </Button>
              <Button variant="outline" className="h-auto flex-col items-start p-4 gap-2">
                <Icon name="Users" size={24} className="text-primary" />
                <div className="text-left">
                  <p className="font-semibold">ТОП клиентов</p>
                  <p className="text-xs text-muted-foreground">По объему заказов</p>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
