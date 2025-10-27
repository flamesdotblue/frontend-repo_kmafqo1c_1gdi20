import React from 'react';
import { Menu, Languages, User, Mic, Volume2, Search } from 'lucide-react';

const languages = [
  'English',
  'हिन्दी (Hindi)',
  'বাংলা (Bengali)',
  'తెలుగు (Telugu)',
  'मराठी (Marathi)',
  'தமிழ் (Tamil)',
  'ગુજરાતી (Gujarati)',
  'ಕನ್ನಡ (Kannada)',
  'മലയാളം (Malayalam)',
  'ਪੰਜਾਬੀ (Punjabi)',
  'ଓଡ଼ିଆ (Odia)',
  'অসমীয়া (Assamese)',
  'اردو (Urdu)',
  'मैथिली (Maithili)',
  'संस्कृत (Sanskrit)'
];

export default function TopBar({ onToggleSidebar, language, onLanguageChange, onLogin }) {
  return (
    <header className="sticky top-0 z-20 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 active:scale-95 transition"
            aria-label="Toggle navigation"
          >
            <Menu size={20} />
          </button>
          <div className="hidden sm:flex items-center gap-2 text-slate-700">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search modules, help, first-aid..."
              className="w-64 px-3 py-2 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
            />
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden xs:flex items-center gap-2">
            <button className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50" title="Voice input">
              <Mic size={18} />
            </button>
            <button className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50" title="Text-to-speech">
              <Volume2 size={18} />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <Languages size={18} className="text-slate-600" />
            <select
              value={language}
              onChange={(e) => onLanguageChange(e.target.value)}
              className="text-sm px-2 py-1 rounded-md border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
          </div>
          <button
            onClick={onLogin}
            className="hidden sm:inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md bg-emerald-600 text-white hover:bg-emerald-700 active:scale-[0.98]"
          >
            <User size={16} /> Login / Sign up
          </button>
        </div>
      </div>
    </header>
  );
}
