import React from 'react';

export default function FooterBar() {
  return (
    <footer className="mt-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>
          © {new Date().getFullYear()} Pashu Mitra AI • Built for animal health, safety, and care.
        </div>
        <div className="flex items-center gap-4">
          <a className="hover:text-slate-900" href="#" aria-label="Privacy">Privacy</a>
          <a className="hover:text-slate-900" href="#" aria-label="Terms">Terms</a>
          <a className="hover:text-slate-900" href="#" aria-label="Support">Support</a>
        </div>
      </div>
    </footer>
  );
}
