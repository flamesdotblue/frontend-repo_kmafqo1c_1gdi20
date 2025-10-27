import React from 'react';
import { PawPrint, Stethoscope, AlertTriangle, MessageCircle, Camera, Heart } from 'lucide-react';

const modules = [
  {
    key: 'classifier',
    title: 'Breed & Species Classifier',
    desc: 'Identify cattle, buffalo, dogs, cats, and more with image upload. Shows top 3 matches and confidence.',
    icon: PawPrint,
    accent: 'from-emerald-400 to-emerald-600',
    badge: 'Image • AI',
  },
  {
    key: 'diagnosis',
    title: 'Disease & Snakebite Diagnosis',
    desc: 'Enter symptoms or bite details to get probable diagnoses, first-aid, and treatment suggestions.',
    icon: Stethoscope,
    accent: 'from-rose-400 to-rose-600',
    badge: 'Health',
  },
  {
    key: 'snake',
    title: 'Snake ID & Danger Assessment',
    desc: 'Upload a snake photo to learn if it is venomous and get safety recommendations.',
    icon: AlertTriangle,
    accent: 'from-orange-400 to-orange-600',
    badge: 'Safety',
  },
  {
    key: 'chat',
    title: 'AI Chatbot (Q&A)',
    desc: 'Ask anything about breeds, care, nutrition, and history. Multi-turn and multilingual.',
    icon: MessageCircle,
    accent: 'from-violet-400 to-violet-600',
    badge: 'Chat',
  },
  {
    key: 'emotion',
    title: 'Pet Emotion Communicator',
    desc: 'Upload pet image/video to interpret mood and get bonding advice.',
    icon: Heart,
    accent: 'from-pink-400 to-pink-600',
    badge: 'Wellbeing',
  },
  {
    key: 'feedback',
    title: 'Feedback & Validation',
    desc: 'Confirm or correct predictions. Your input improves accuracy for everyone.',
    icon: Camera,
    accent: 'from-sky-400 to-sky-600',
    badge: 'Community',
  },
];

export default function ModuleGrid({ onOpen }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
      {modules.map((m) => {
        const Icon = m.icon;
        return (
          <div
            key={m.key}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${m.accent}`} />
            <div className="p-5">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${m.accent} text-white flex items-center justify-center`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{m.title}</h3>
                    <span className="inline-flex items-center px-2 py-0.5 mt-1 text-xs rounded-full bg-slate-100 text-slate-600">{m.badge}</span>
                  </div>
                </div>
                <button
                  onClick={() => onOpen(m.key)}
                  className="px-3 py-1.5 text-sm rounded-md border border-slate-200 hover:bg-slate-50 active:scale-95"
                >Open</button>
              </div>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">{m.desc}</p>
            </div>
            <div className="px-5 pb-5">
              <div className="text-xs text-slate-500 flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" /> Ready • Offline-first
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
