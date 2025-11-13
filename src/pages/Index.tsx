import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Dashboard from '@/components/sections/Dashboard';
import Products from '@/components/sections/Products';
import Receiving from '@/components/sections/Receiving';
import Shipping from '@/components/sections/Shipping';
import Warehouse from '@/components/sections/Warehouse';
import Inventory from '@/components/sections/Inventory';
import Orders from '@/components/sections/Orders';
import Partners from '@/components/sections/Partners';
import Reports from '@/components/sections/Reports';

export default function Index() {
  const [activeSection, setActiveSection] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Дашборд', icon: 'LayoutDashboard' },
    { id: 'products', label: 'Товары', icon: 'Package' },
    { id: 'receiving', label: 'Приемка', icon: 'PackagePlus' },
    { id: 'shipping', label: 'Отгрузка', icon: 'PackageMinus' },
    { id: 'warehouse', label: 'Склад', icon: 'Warehouse' },
    { id: 'inventory', label: 'Инвентаризация', icon: 'ClipboardList' },
    { id: 'orders', label: 'Заказы', icon: 'ShoppingCart' },
    { id: 'partners', label: 'Контрагенты', icon: 'Users' },
    { id: 'reports', label: 'Отчеты', icon: 'FileBarChart' },
  ];



  return (
    <div className="flex h-screen bg-background">
      <aside className="w-64 bg-sidebar text-sidebar-foreground flex flex-col border-r border-sidebar-border">
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Warehouse" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">СкладПро</h1>
              <p className="text-xs text-sidebar-foreground/60">Управление складом</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                activeSection === item.id
                  ? 'bg-sidebar-accent text-primary'
                  : 'text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground'
              }`}
            >
              <Icon name={item.icon} size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-sidebar-border">
          <div className="flex items-center justify-between gap-3 px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-sidebar-accent rounded-full flex items-center justify-center">
                <Icon name="User" size={18} className="text-sidebar-foreground" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-sidebar-foreground">Оператор склада</p>
                <p className="text-xs text-sidebar-foreground/60">Смена #1</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => (window.location.href = '/auth')}
              className="text-sidebar-foreground/60 hover:text-sidebar-foreground"
            >
              <Icon name="LogOut" size={16} />
            </Button>
          </div>
        </div>
      </aside>

      <main className="flex-1 overflow-auto">
        {activeSection === 'dashboard' && <Dashboard />}
        {activeSection === 'products' && <Products />}
        {activeSection === 'receiving' && <Receiving />}
        {activeSection === 'shipping' && <Shipping />}
        {activeSection === 'warehouse' && <Warehouse />}
        {activeSection === 'inventory' && <Inventory />}
        {activeSection === 'orders' && <Orders />}
        {activeSection === 'partners' && <Partners />}
        {activeSection === 'reports' && <Reports />}
      </main>
    </div>
  );
}