import React from 'react';
import { Home, PawPrint, AlertTriangle, MessageCircle, Stethoscope, Settings } from 'lucide-react';

const navItems = [
  { key: 'dashboard', label: 'Dashboard', icon: Home, color: 'text-blue-600' },
  { key: 'classifier', label: 'Breed & Species', icon: PawPrint, color: 'text-emerald-600' },
  { key: 'diagnosis', label: 'Disease & Bite', icon: Stethoscope, color: 'text-rose-600' },
  { key: 'snake', label: 'Snake ID', icon: AlertTriangle, color: 'text-orange-600' },
  { key: 'chat', label: 'AI Chatbot', icon: MessageCircle, color: 'text-violet-600' },
];

export default function SidebarNav({ current, onSelect, collapsed }) {
  return (
    <aside
      className={`bg-white/80 backdrop-blur border-r border-slate-200 h-full transition-all duration-300 ${
        collapsed ? 'w-16' : 'w-64'
      }`}
    >
      <div className="p-4 flex items-center gap-2">
        <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white font-bold">
          🐾
        </div>
        {!collapsed && (
          <div>
            <div className="text-slate-900 font-semibold leading-tight">Pashu Mitra AI</div>
            <div className="text-xs text-slate-500">Universal Vet Support</div>
          </div>
        )}
      </div>
      <nav className="mt-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = current === item.key;
          return (
            <button
              key={item.key}
              onClick={() => onSelect(item.key)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                active
                  ? 'bg-emerald-50 text-emerald-700'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Icon className={`${item.color}`} size={20} />
              {!collapsed && <span>{item.label}</span>}
            </button>
          );
        })}
      </nav>
      <div className="mt-auto p-4 text-xs text-slate-500 hidden sm:block">
        <div className="flex items-center gap-2"><Settings size={14} /> <span>Secure • Multilingual</span></div>
      </div>
    </aside>
  );
}
