import React from 'react';
import { GalleryViewer } from '../components/GalleryViewer';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const Gallery1Page: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 mb-2">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-sm text-emerald-300 hover:text-white transition-colors cursor-pointer bg-white/10 px-4 py-2 rounded-full border border-white/15"
        >
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </button>
      </div>
      <GalleryViewer initialTab={1} showTabs={true} />
    </div>
  );
};

export const Gallery2Page: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 mb-2">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-sm text-emerald-300 hover:text-white transition-colors cursor-pointer bg-white/10 px-4 py-2 rounded-full border border-white/15"
        >
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </button>
      </div>
      <GalleryViewer initialTab={2} showTabs={true} />
    </div>
  );
};

export const Gallery3Page: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 mb-2">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-sm text-emerald-300 hover:text-white transition-colors cursor-pointer bg-white/10 px-4 py-2 rounded-full border border-white/15"
        >
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </button>
      </div>
      <GalleryViewer initialTab={3} showTabs={true} />
    </div>
  );
};
