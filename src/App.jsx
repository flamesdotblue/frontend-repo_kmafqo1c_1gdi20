import React, { useState } from 'react';
import SidebarNav from './components/SidebarNav.jsx';
import TopBar from './components/TopBar.jsx';
import ModuleGrid from './components/ModuleGrid.jsx';
import FooterBar from './components/FooterBar.jsx';
import UploadDropzone from './components/UploadDropzone.jsx';

export default function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentView, setCurrentView] = useState('dashboard');
  const [language, setLanguage] = useState('English');
  const [status, setStatus] = useState('Ready');

  // Selected files state (for UX feedback only in this UI demo)
  const [classifierFiles, setClassifierFiles] = useState([]);
  const [snakeFiles, setSnakeFiles] = useState([]);
  const [emotionFiles, setEmotionFiles] = useState([]);

  const handleOpenModule = (key) => {
    setCurrentView(key);
    if (key === 'feedback') {
      setStatus('Logging Securely');
      setTimeout(() => setStatus('Confirmed'), 900);
      setTimeout(() => setStatus('Ready'), 2000);
    }
  };

  const HeaderTitle = () => {
    const titles = {
      dashboard: 'Welcome to Pashu Mitra AI',
      classifier: 'Breed & Species Classifier',
      diagnosis: 'Disease & Snakebite Diagnosis',
      snake: 'Snake Identification & Danger Assessment',
      chat: 'AI Chatbot (Q&A)',
      emotion: 'Pet Emotion Communicator',
      feedback: 'Feedback & Validation',
    };
    return <h1 className="text-xl sm:text-2xl font-semibold text-slate-900">{titles[currentView] || 'Pashu Mitra AI'}</h1>;
  };

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return (
          <>
            <div className="mb-6">
              <p className="text-slate-600">A modular assistant for field workers, pet owners, and veterinarians—secure, multilingual, and mobile-first.</p>
            </div>
            <ModuleGrid onOpen={handleOpenModule} />
          </>
        );
      case 'classifier':
        return (
          <div className="grid gap-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="font-semibold text-slate-900">Upload Animal Image</h2>
              <p className="text-sm text-slate-600">Drag & drop or select a clear photo for best results.</p>
              <div className="mt-4">
                <UploadDropzone
                  label="Drop image or tap to browse (camera supported)"
                  accept="image/*"
                  multiple={false}
                  capture="environment"
                  onFiles={(files) => setClassifierFiles(files)}
                />
              </div>
              <div className="mt-3 text-xs text-slate-500">Selected: {classifierFiles.length} file(s)</div>
            </section>
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="font-semibold text-slate-900">Results</h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex items-center justify-between"><span>Top Match</span><span className="font-medium">—</span></li>
                <li className="flex items-center justify-between"><span>Second</span><span className="font-medium">—</span></li>
                <li className="flex items-center justify-between"><span>Third</span><span className="font-medium">—</span></li>
              </ul>
              <div className="mt-3 text-xs text-slate-500">Snake images will show a clear danger label.</div>
            </section>
          </div>
        );
      case 'diagnosis':
        return (
          <div className="grid gap-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="font-semibold text-slate-900">Symptoms & Details</h2>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <input className="px-3 py-2 rounded-md border border-slate-200" placeholder="Animal species/breed" />
                <input className="px-3 py-2 rounded-md border border-slate-200" placeholder="Age / weight" />
                <input className="px-3 py-2 rounded-md border border-slate-200 sm:col-span-2" placeholder="Symptoms (comma separated)" />
                <textarea className="px-3 py-2 rounded-md border border-slate-200 sm:col-span-2" rows="3" placeholder="Additional notes, bite details if any" />
                <div className="sm:col-span-2">
                  <label className="block text-sm text-slate-600 mb-1">Upload relevant images</label>
                  <UploadDropzone
                    label="Add photos (optional)"
                    accept="image/*"
                    multiple={true}
                    onFiles={() => {}}
                  />
                </div>
              </div>
              <button className="mt-4 px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700">Analyze</button>
            </section>
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="font-semibold text-slate-900">Assessment</h2>
              <p className="text-sm text-slate-600 mt-2">Most probable diagnosis, first-aid, and steps will appear here.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 rounded-full bg-orange-100 text-orange-700">Emergency button will suggest local contacts if severe</span>
              </div>
              <button className="mt-4 px-4 py-2 rounded-md bg-orange-600 text-white hover:bg-orange-700">Emergency</button>
            </section>
          </div>
        );
      case 'snake':
        return (
          <div className="grid gap-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="font-semibold text-slate-900">Snake Image Classifier</h2>
              <p className="text-sm text-slate-600">Upload a clear image for identification and venom danger assessment.</p>
              <div className="mt-4">
                <UploadDropzone
                  label="Drop snake image (camera supported)"
                  accept="image/*"
                  multiple={false}
                  capture="environment"
                  onFiles={(files) => setSnakeFiles(files)}
                />
              </div>
              <div className="mt-3 text-xs text-slate-500">Selected: {snakeFiles.length} file(s)</div>
            </section>
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="font-semibold text-slate-900">Danger Assessment</h2>
              <div className="mt-3 text-sm">
                <div className="inline-flex items-center px-2 py-1 rounded-full bg-slate-100 text-slate-700">Venom status: —</div>
                <p className="mt-3 text-slate-600">Safety recommendations will appear here.</p>
              </div>
            </section>
          </div>
        );
      case 'chat':
        return (
          <div className="grid gap-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="h-72 overflow-y-auto rounded-lg border border-slate-200 p-3 bg-slate-50 text-sm text-slate-700">
                <div className="mb-3"><span className="font-medium">You:</span> What are common signs of heat stress in cattle?</div>
                <div className="mb-3"><span className="font-medium">AI:</span> Increased respiration, drooling, reduced feed intake; offer shade, cool water, ventilation.</div>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <input className="flex-1 px-3 py-2 rounded-md border border-slate-200" placeholder={`Ask in ${language}`} />
                <button className="px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700">Send</button>
              </div>
            </section>
          </div>
        );
      case 'emotion':
        return (
          <div className="grid gap-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="font-semibold text-slate-900">Pet Emotion Analysis</h2>
              <p className="text-sm text-slate-600">Upload a dog or cat image/video to interpret mood.</p>
              <div className="mt-4">
                <UploadDropzone
                  label="Upload image or short video"
                  accept="image/*,video/*"
                  multiple={false}
                  capture="environment"
                  onFiles={(files) => setEmotionFiles(files)}
                />
              </div>
              <div className="mt-3 text-xs text-slate-500">Selected: {emotionFiles.length} file(s)</div>
            </section>
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="font-semibold text-slate-900">Insights</h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>Mood: —</li>
                <li>Confidence: —</li>
                <li>Advice: —</li>
              </ul>
            </section>
          </div>
        );
      case 'feedback':
        return (
          <div className="grid gap-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="font-semibold text-slate-900">Confirm or Correct</h2>
              <p className="text-sm text-slate-600">Help improve predictions by providing quick feedback.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <button className="px-3 py-1.5 text-sm rounded-md border border-slate-200 hover:bg-slate-50">Correct</button>
                <button className="px-3 py-1.5 text-sm rounded-md border border-slate-200 hover:bg-slate-50">Partially correct</button>
                <button className="px-3 py-1.5 text-sm rounded-md bg-emerald-600 text-white hover:bg-emerald-700">Confirmed</button>
              </div>
              <div className="mt-4 text-xs">
                <span className={`inline-flex items-center px-2 py-1 rounded-full ${
                  status === 'Logging Securely' ? 'bg-blue-100 text-blue-700' : status === 'Confirmed' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-700'
                }`}>{status}</span>
              </div>
            </section>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <div className="h-screen w-full grid" style={{ gridTemplateColumns: sidebarCollapsed ? '4rem 1fr' : '16rem 1fr', gridTemplateRows: 'auto 1fr' }}>
        <SidebarNav current={currentView} onSelect={setCurrentView} collapsed={sidebarCollapsed} />
        <div className="flex flex-col">
          <TopBar
            onToggleSidebar={() => setSidebarCollapsed((v) => !v)}
            language={language}
            onLanguageChange={setLanguage}
            onLogin={() => alert('Auth flow integrates with Firebase in production')}
          />
          <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between mb-6">
              <HeaderTitle />
              <div className="text-xs text-slate-500">Language: {language}</div>
            </div>
            {renderContent()}
          </main>
          <FooterBar />
        </div>
      </div>
    </div>
  );
}
