import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

export default function Auth() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    role: 'client',
    company: '',
  });

  const roles = [
    { value: 'client', label: 'Покупатель', icon: 'ShoppingCart', description: 'Оформление и отслеживание заказов' },
    { value: 'supplier', label: 'Поставщик', icon: 'Truck', description: 'Управление поставками товаров' },
    { value: 'operator', label: 'Оператор склада', icon: 'Package', description: 'Работа со складскими операциями' },
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center">
              <Icon name="Warehouse" className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">СкладПро</h1>
              <p className="text-muted-foreground">Система управления складом</p>
            </div>
          </div>

          <div className="space-y-4 mt-8">
            <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="TrendingUp" className="text-white" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Контроль в реальном времени</h3>
                <p className="text-sm text-muted-foreground">
                  Отслеживайте остатки, операции и заказы в режиме реального времени
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
              <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="BarChart3" className="text-white" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Аналитика и отчеты</h3>
                <p className="text-sm text-muted-foreground">
                  Детальная аналитика складских операций и автоматические отчеты
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
              <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Users" className="text-white" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Ролевая модель доступа</h3>
                <p className="text-sm text-muted-foreground">
                  Разные уровни доступа для операторов, поставщиков и клиентов
                </p>
              </div>
            </div>
          </div>
        </div>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>Добро пожаловать</CardTitle>
            <CardDescription>Войдите или создайте новый аккаунт</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login">Вход</TabsTrigger>
                <TabsTrigger value="register">Регистрация</TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="space-y-4">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="login-password">Пароль</Label>
                    <Input
                      id="login-password"
                      type="password"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="LogIn" size={18} className="mr-2" />
                    Войти
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="register" className="space-y-4">
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="register-name">Имя</Label>
                    <Input
                      id="register-name"
                      type="text"
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-email">Email</Label>
                    <Input
                      id="register-email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-password">Пароль</Label>
                    <Input
                      id="register-password"
                      type="password"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role">Роль</Label>
                    <Select value={formData.role} onValueChange={(value) => setFormData({ ...formData, role: value })}>
                      <SelectTrigger id="role">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {roles.map((role) => (
                          <SelectItem key={role.value} value={role.value}>
                            <div className="flex items-center gap-2">
                              <Icon name={role.icon} size={16} />
                              <div>
                                <div className="font-medium">{role.label}</div>
                                <div className="text-xs text-muted-foreground">{role.description}</div>
                              </div>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {(formData.role === 'supplier' || formData.role === 'client') && (
                    <div className="space-y-2">
                      <Label htmlFor="company">Компания</Label>
                      <Input
                        id="company"
                        type="text"
                        placeholder='ООО "Торговый дом"'
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  )}

                  <div className="bg-muted/50 p-4 rounded-lg border border-border">
                    <div className="flex items-start gap-2">
                      <Icon name={roles.find((r) => r.value === formData.role)?.icon || 'User'} size={20} className="text-primary mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {roles.find((r) => r.value === formData.role)?.label}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {roles.find((r) => r.value === formData.role)?.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="UserPlus" size={18} className="mr-2" />
                    Создать аккаунт
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
