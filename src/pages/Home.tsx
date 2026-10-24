import React from 'react';
import { Designation } from '../components/Designation';
import { ElectionSection } from '../components/ElectionSection';
import { AboutSection } from '../components/AboutSection';
import { SkillsSection } from '../components/SkillsSection';
import { FinanceDemo } from '../components/FinanceDemo';
import { GalleryViewer } from '../components/GalleryViewer';
import { ContactSection } from '../components/ContactSection';

export const Home: React.FC = () => {
  return (
    <div id="home" className="space-y-12">
      {/* Hero / Designation */}
      <Designation />

      {/* Floating 3D Election Section */}
      <ElectionSection />

      {/* About the candidate */}
      <AboutSection />

      {/* Skills Showcase */}
      <SkillsSection />

      {/* Illustrative Finance Demonstration */}
      <FinanceDemo />

      {/* Gallery / Certificates Section */}
      <div id="gallery">
        <GalleryViewer initialTab={2} showTabs={true} />
      </div>

      {/* Contact & Countdown */}
      <ContactSection />
    </div>
  );
};
