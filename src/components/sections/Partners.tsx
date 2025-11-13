import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Icon from '@/components/ui/icon';

const clients = [
  { id: 1, name: 'ООО "Торговый Дом"', inn: '7712345678', contact: 'Иванов Иван', phone: '+7 495 123-45-67', orders: 145, total: 12500000 },
  { id: 2, name: 'ИП Иванов А.П.', inn: '771234567890', contact: 'Иванов Антон', phone: '+7 495 234-56-78', orders: 23, total: 850000 },
  { id: 3, name: 'ООО "МегаМаркет"', inn: '7713456789', contact: 'Петрова Мария', phone: '+7 495 345-67-89', orders: 456, total: 45000000 },
  { id: 4, name: 'ООО "Ритейл Плюс"', inn: '7714567890', contact: 'Сидоров Петр', phone: '+7 495 456-78-90', orders: 87, total: 5600000 },
];

const suppliers = [
  { id: 1, name: 'ООО "ТехноПоставка"', inn: '7722345678', contact: 'Козлов Сергей', phone: '+7 495 567-89-01', supplies: 234, total: 23400000 },
  { id: 2, name: 'ИП Сидоров Е.К.', inn: '772234567890', contact: 'Сидоров Евгений', phone: '+7 495 678-90-12', supplies: 45, total: 3200000 },
  { id: 3, name: 'ООО "МегаОпт"', inn: '7723456789', contact: 'Новикова Анна', phone: '+7 495 789-01-23', supplies: 567, total: 67800000 },
];

export default function Partners() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('clients');

  const filteredClients = clients.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.inn.includes(searchQuery)
  );

  const filteredSuppliers = suppliers.filter(
    (s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.inn.includes(searchQuery)
  );

  return (
    <>
      <header className="bg-card border-b border-border px-8 py-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Контрагенты</h2>
            <p className="text-sm text-muted-foreground">Управление клиентами и поставщиками</p>
          </div>
          <Button size="sm">
            <Icon name="Plus" size={16} className="mr-2" />
            Добавить контрагента
          </Button>
        </div>
      </header>

      <div className="p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Всего клиентов</p>
                  <p className="text-3xl font-bold">{clients.length}</p>
                </div>
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Icon name="Users" className="text-white" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Поставщиков</p>
                  <p className="text-3xl font-bold">{suppliers.length}</p>
                </div>
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <Icon name="Truck" className="text-white" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Активных заказов</p>
                  <p className="text-3xl font-bold">47</p>
                </div>
                <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center">
                  <Icon name="ShoppingCart" className="text-white" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="flex items-center justify-between mb-6">
                <TabsList>
                  <TabsTrigger value="clients">
                    <Icon name="Users" size={16} className="mr-2" />
                    Клиенты ({clients.length})
                  </TabsTrigger>
                  <TabsTrigger value="suppliers">
                    <Icon name="Truck" size={16} className="mr-2" />
                    Поставщики ({suppliers.length})
                  </TabsTrigger>
                </TabsList>

                <div className="flex items-center gap-4">
                  <div className="relative w-64">
                    <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Поиск..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button variant="outline" size="sm">
                    <Icon name="Download" size={16} className="mr-2" />
                    Экспорт
                  </Button>
                </div>
              </div>

              <TabsContent value="clients" className="mt-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Название</TableHead>
                      <TableHead>ИНН</TableHead>
                      <TableHead>Контактное лицо</TableHead>
                      <TableHead>Телефон</TableHead>
                      <TableHead>Заказов</TableHead>
                      <TableHead>Оборот</TableHead>
                      <TableHead className="text-right">Действия</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredClients.map((client) => (
                      <TableRow key={client.id}>
                        <TableCell className="font-medium">{client.name}</TableCell>
                        <TableCell className="font-mono text-sm">{client.inn}</TableCell>
                        <TableCell>{client.contact}</TableCell>
                        <TableCell className="text-sm">{client.phone}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{client.orders}</Badge>
                        </TableCell>
                        <TableCell className="font-semibold">{client.total.toLocaleString()} ₽</TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Button variant="ghost" size="sm">
                              <Icon name="Eye" size={16} />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Icon name="Edit" size={16} />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Icon name="Phone" size={16} />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>

              <TabsContent value="suppliers" className="mt-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Название</TableHead>
                      <TableHead>ИНН</TableHead>
                      <TableHead>Контактное лицо</TableHead>
                      <TableHead>Телефон</TableHead>
                      <TableHead>Поставок</TableHead>
                      <TableHead>Оборот</TableHead>
                      <TableHead className="text-right">Действия</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredSuppliers.map((supplier) => (
                      <TableRow key={supplier.id}>
                        <TableCell className="font-medium">{supplier.name}</TableCell>
                        <TableCell className="font-mono text-sm">{supplier.inn}</TableCell>
                        <TableCell>{supplier.contact}</TableCell>
                        <TableCell className="text-sm">{supplier.phone}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{supplier.supplies}</Badge>
                        </TableCell>
                        <TableCell className="font-semibold">{supplier.total.toLocaleString()} ₽</TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Button variant="ghost" size="sm">
                              <Icon name="Eye" size={16} />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Icon name="Edit" size={16} />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Icon name="Phone" size={16} />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
