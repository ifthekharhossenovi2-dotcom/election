import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ZoomIn, Award, CheckCircle2, Trophy, Sparkles } from 'lucide-react';
import galleryData from '../galleryData.json';

export type GalleryTab = 'certifications' | 'sports';

interface GalleryViewerProps {
  initialTab?: 1 | 2 | 3 | 'certifications' | 'sports';
  showTabs?: boolean;
}

const CERTIFICATE_CAPTIONS: Record<string, { title: string; issuer: string; date?: string }> = {
  '/assets/certificates/1_pcc_programming_contest_certificate.jpeg': {
    title: '2nd Place (1st Runners-Up) — PCC Monthly Programming Contest',
    issuer: 'PCIU Computer Club',
    date: '27 Feb 2025'
  },
  '/assets/certificates/2_pcc_contest_prize_distribution.jpeg': {
    title: 'PCC Monthly Programming Contest Prize Distribution Ceremony',
    issuer: 'PCIU Computer Club & Port City International University',
    date: 'February 2025'
  },
  '/assets/certificates/3_google_gemini_certified_student.jpeg': {
    title: 'Gemini Certified Student (University)',
    issuer: 'Google for Education',
    date: 'Issued 23 Sep 2025 · Valid through 22 Sep 2029'
  },
  '/assets/certificates/4_ict_olympiad_bangladesh_appreciation.jpeg': {
    title: 'Certificate of Appreciation — Campus Ambassador (Season 2)',
    issuer: 'ICT Olympiad Bangladesh',
    date: '24 May 2025'
  },
  '/assets/certificates/5_skillzone_networking_technology.jpeg': {
    title: 'Certificate of Completion — Networking Technology Workshop',
    issuer: 'Skill Zone',
    date: '23 Aug 2025'
  },
  '/assets/certificates/6_interactive_cares_data_science_ml.jpeg': {
    title: 'Certificate of Completion — Data Science & Machine Learning',
    issuer: 'Interactive Cares'
  },
  '/assets/certificates/7_bylc_campus_ambassador_2020.jpeg': {
    title: 'Certificate of Appreciation — BYLC Campus Ambassador 2020',
    issuer: 'Bangladesh Youth Leadership Center (BYLC)'
  },
  '/assets/certificates/8_bangladesh_youth_volunteer_award.jpeg': {
    title: 'Certificate of Participation — Bangladesh Youth Volunteer Award',
    issuer: 'Go Up Foundation & Amra Scout Group',
    date: '11 Mar 2023'
  }
};

const SPORTS_CULTURAL_CAPTIONS: Record<string, { title: string; subtitle: string; category: string }> = {
  '/assets/sports_cultural/sports_1.jpeg': {
    title: 'CSE & Tech Seminar with Shofayet Nur & Subashis Roy',
    subtitle: 'PCIU Computer Club Online Learning & Tech Session',
    category: 'Tech Seminar'
  },
  '/assets/sports_cultural/sports_2.jpeg': {
    title: 'Interactive Career Workshop with Jhankar Mahbub',
    subtitle: 'Programming Hero & PCIU Student Session',
    category: 'Workshop'
  },
  '/assets/sports_cultural/sports_3.jpeg': {
    title: 'PCC E-Sports Championship 1.0 (Skill Zone x PCC)',
    subtitle: 'Campus Gaming Arena & Club Delegation',
    category: 'E-Sports'
  },
  '/assets/sports_cultural/sports_4.jpeg': {
    title: 'CSE & PCC Carnival 2026 — Cultural & Musical Stage',
    subtitle: 'PCIU Computer Club Presents CSE Carnival 2026',
    category: 'Cultural Stage'
  },
  '/assets/sports_cultural/sports_5.jpeg': {
    title: 'PCC Sports Week 2025 — Cricket Team (Stark Battler)',
    subtitle: 'Squad Fixture & Tournament Participation',
    category: 'Cricket Tournament'
  },
  '/assets/sports_cultural/sports_6.jpeg': {
    title: 'CSE & PCC Carnival — Auditorium Celebration',
    subtitle: 'Active Participant in PCIU Computer Club Festival',
    category: 'Campus Carnival'
  },
  '/assets/sports_cultural/sports_7.jpeg': {
    title: 'eFootball Tournament Season 2',
    subtitle: 'PCIU Computer Club Mobile E-Sports League',
    category: 'Mobile Gaming'
  },
  '/assets/sports_cultural/sports_8.jpeg': {
    title: '1st Prize — Mini Militia Tournament (PCC E-Sports)',
    subtitle: 'PCC E-Sports Championship 1.0 Prize Handover Ceremony',
    category: 'Champion (1st Prize)'
  },
  '/assets/sports_cultural/sports_9.jpeg': {
    title: 'CSE Career Guidance & Industry Insights with Anisul Islam',
    subtitle: 'Port City International University Auditorium Seminar',
    category: 'Career Seminar'
  },
  '/assets/sports_cultural/sports_10.jpeg': {
    title: 'The Aura — Nourishing The Innocents (3rd Edition)',
    subtitle: 'Community Welfare & Student Volunteer Activity',
    category: 'Social Work'
  },
  '/assets/sports_cultural/sports_11.jpeg': {
    title: 'University Fest Photo Booth — POIHAK 2025 / CSE Movement',
    subtitle: 'Port City International University Campus Life',
    category: 'Campus Festival'
  },
  '/assets/sports_cultural/sports_12.jpeg': {
    title: 'Free Fire Mobile Championship',
    subtitle: 'PCIU Computer Club E-Sports Competition Arena',
    category: 'E-Sports'
  },
  '/assets/sports_cultural/sports_13.jpeg': {
    title: 'CSE Futsal Tournament Season 2.0 — Team Blue Lock',
    subtitle: 'PCIU CSE Department Tournament Bracket & Playoff',
    category: 'Futsal League'
  }
};

export const GalleryViewer: React.FC<GalleryViewerProps> = ({
  initialTab = 'certifications',
  showTabs = true
}) => {
  // Normalize initial tab
  const resolveInitialTab = (): GalleryTab => {
    if (initialTab === 2 || initialTab === 3 || initialTab === 'sports') {
      return 'sports';
    }
    return 'certifications';
  };

  const [activeTab, setActiveTab] = useState<GalleryTab>(resolveInitialTab);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const certImages = galleryData.certifications || galleryData.gallery2 || [];
  const sportsImages = galleryData.sports_cultural || galleryData.gallery3 || [];

  const getGalleryInfo = (tab: GalleryTab) => {
    switch (tab) {
      case 'certifications':
        return {
          title: '🏆 Verified Certifications & Credentials',
          subtitle: 'Explore verified certifications, skill achievements, and professional milestones of candidate Iftekhar Hossen Ovi.',
          images: certImages
        };
      case 'sports':
        return {
          title: '🏅 Sports, E-Sports & Cultural Activities',
          subtitle: 'Authentic photos from PCC sports weeks, e-sports championships, university carnivals, workshops, and community events.',
          images: sportsImages
        };
    }
  };

  const currentGallery = getGalleryInfo(activeTab);
  const images = currentGallery.images;

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const prevImage = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const currentCert = activeTab === 'certifications' ? CERTIFICATE_CAPTIONS[images[currentIndex]] : null;
  const currentSports = activeTab === 'sports' ? SPORTS_CULTURAL_CAPTIONS[images[currentIndex]] : null;

  return (
    <div className="px-4 sm:px-6 md:px-10 py-14">
      {/* Gallery Category Tabs - Only 2 authentic categories */}
      {showTabs && (
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveTab('certifications')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'certifications'
                ? 'bg-[#25a244] text-white shadow-[0_0_15px_rgba(37,162,68,0.6)]'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            <Award size={15} />
            <span>🏆 Verified Certifications ({certImages.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('sports')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'sports'
                ? 'bg-[#25a244] text-white shadow-[0_0_15px_rgba(37,162,68,0.6)]'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            <Trophy size={15} />
            <span>🏅 Sports & Cultural ({sportsImages.length})</span>
          </button>
        </div>
      )}

      {/* Section Title */}
      <motion.h1
        className="text-2xl md:text-4xl font-bold mb-3 text-center text-[#ebedf0] drop-shadow-lg"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {currentGallery.title}
      </motion.h1>

      <motion.p
        className="text-center text-xs md:text-base text-gray-300 mb-10 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {currentGallery.subtitle}
      </motion.p>

      {/* Grid: Responsive presentation with titles and tags */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {images.map((src, idx) => {
          const certInfo = activeTab === 'certifications' ? CERTIFICATE_CAPTIONS[src] : null;
          const sportsInfo = activeTab === 'sports' ? SPORTS_CULTURAL_CAPTIONS[src] : null;

          return (
            <motion.div
              key={idx}
              className="relative overflow-hidden rounded-xl border border-[#25a244]/60 shadow-[0_4px_20px_rgba(0,0,0,0.3)] cursor-pointer group bg-black/40 flex flex-col justify-between hover:border-[#25a244] transition-all"
              whileHover={{ scale: 1.02 }}
              onClick={() => openLightbox(idx)}
            >
              <div className="relative overflow-hidden bg-black/30">
                <img
                  src={src}
                  alt={certInfo ? certInfo.title : sportsInfo ? sportsInfo.title : `Gallery item ${idx + 1}`}
                  className="w-full h-44 sm:h-52 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                
                {sportsInfo && (
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-black/75 text-emerald-300 border border-emerald-500/40 backdrop-blur-sm">
                    {sportsInfo.category}
                  </span>
                )}

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 backdrop-blur-[2px]">
                  <ZoomIn size={18} className="text-[#05f244]" />
                  <p className="text-white font-semibold text-xs sm:text-sm">
                    {activeTab === 'certifications' ? 'View Certificate' : 'View Photo'}
                  </p>
                </div>
              </div>

              {certInfo && (
                <div className="p-3 bg-white/5 border-t border-white/10 text-left">
                  <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold line-clamp-1">
                    <CheckCircle2 size={13} className="shrink-0 text-[#05f244]" />
                    <span>{certInfo.title}</span>
                  </div>
                  <p className="text-[11px] text-gray-300 truncate mt-0.5">{certInfo.issuer}</p>
                </div>
              )}

              {sportsInfo && (
                <div className="p-3 bg-white/5 border-t border-white/10 text-left">
                  <div className="flex items-center gap-1.5 text-emerald-300 text-xs font-bold line-clamp-1">
                    <Sparkles size={12} className="shrink-0 text-[#05f244]" />
                    <span>{sportsInfo.title}</span>
                  </div>
                  <p className="text-[11px] text-gray-300 line-clamp-1 mt-0.5">{sportsInfo.subtitle}</p>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white text-3xl hover:text-[#05f244] transition-colors p-2 cursor-pointer z-10"
              onClick={closeLightbox}
              aria-label="Close Lightbox"
            >
              <X size={32} />
            </button>

            {/* Left Prev Button */}
            <button
              className="absolute left-4 sm:left-8 text-white hover:text-[#05f244] transition-colors p-2 cursor-pointer z-10 bg-black/60 rounded-full hover:bg-black/80"
              onClick={prevImage}
              aria-label="Previous image"
            >
              <ChevronLeft size={36} />
            </button>

            {/* Image and Caption Container */}
            <div className="relative max-h-[90vh] max-w-[90vw] flex flex-col items-center">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={currentCert ? currentCert.title : currentSports ? currentSports.title : `Expanded view ${currentIndex + 1}`}
                className="max-h-[72vh] max-w-[90vw] object-contain rounded-xl shadow-[0_10px_40px_rgba(37,162,68,0.6)] border-2 border-[#25a244]"
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
              />

              {currentCert && (
                <div className="mt-3 text-center max-w-2xl px-4 py-2 rounded-xl bg-black/70 border border-white/10 backdrop-blur-md">
                  <h3 className="text-sm sm:text-base font-bold text-white flex items-center justify-center gap-2">
                    <CheckCircle2 size={16} className="text-[#05f244]" />
                    <span>{currentCert.title}</span>
                  </h3>
                  <p className="text-xs text-emerald-300 mt-0.5">
                    {currentCert.issuer} {currentCert.date && `• ${currentCert.date}`}
                  </p>
                  <div className="text-[10px] text-gray-400 font-mono mt-1">
                    Verified Credential {currentIndex + 1} of {images.length}
                  </div>
                </div>
              )}

              {currentSports && (
                <div className="mt-3 text-center max-w-2xl px-4 py-2 rounded-xl bg-black/70 border border-white/10 backdrop-blur-md">
                  <span className="inline-block px-2.5 py-0.5 mb-1 text-[11px] font-semibold text-emerald-300 bg-emerald-950/70 border border-emerald-500/40 rounded-full">
                    {currentSports.category}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    {currentSports.title}
                  </h3>
                  <p className="text-xs text-emerald-200 mt-0.5">
                    {currentSports.subtitle}
                  </p>
                  <div className="text-[10px] text-gray-400 font-mono mt-1">
                    Sports & Cultural Activity {currentIndex + 1} of {images.length}
                  </div>
                </div>
              )}

              {!currentCert && !currentSports && (
                <div className="mt-3 text-xs sm:text-sm text-gray-300 font-mono">
                  {currentIndex + 1} / {images.length}
                </div>
              )}
            </div>

            {/* Right Next Button */}
            <button
              className="absolute right-4 sm:right-8 text-white hover:text-[#05f244] transition-colors p-2 cursor-pointer z-10 bg-black/60 rounded-full hover:bg-black/80"
              onClick={nextImage}
              aria-label="Next image"
            >
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
