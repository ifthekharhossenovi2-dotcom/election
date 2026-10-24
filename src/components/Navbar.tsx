import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Wrench, UserCheck, Images, Menu, X, Landmark, Calculator } from 'lucide-react';
import { CAMPAIGN_INFO } from '../data/campaignData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', icon: <Home size={18} />, path: '/' },
    { name: 'About', icon: <UserCheck size={18} />, path: '/#about', action: () => handleScrollTo('about') },
    { name: 'Skills', icon: <Wrench size={18} />, path: '/skills' },
    { name: 'ElectionSection', icon: <Landmark size={18} />, path: '/electionSection' },
    { name: 'Finance Demo', icon: <Calculator size={18} />, path: '/finance-demo' },
    { name: 'Gallery', icon: <Images size={18} />, path: '/gallery1' }
  ];

  const handleScrollTo = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/#' + id);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleNavClick = (link: typeof navLinks[0]) => {
    if (link.action) {
      link.action();
    } else {
      navigate(link.path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#093A79]/95 backdrop-blur-md shadow-[0_10px_30px_rgba(2,0,36,0.6)] border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto lg:px-10 px-5 flex justify-between items-center h-20">
        {/* Brand */}
        <div
          onClick={() => {
            navigate('/');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="cursor-pointer flex items-center gap-2 group"
        >
          <span className="text-2xl transform transition-transform group-hover:scale-110">⌨️</span>
          <p className="text-2xl text-[#25a244] font-extrabold tracking-wide drop-shadow-md group-hover:text-[#05f244] transition-colors">
            🗳️ Ovi
          </p>
          <span className="hidden sm:inline-block text-xs font-semibold px-2 py-0.5 rounded-full bg-white/10 text-emerald-300 border border-emerald-500/30">
            Treasurer 2026–27
          </span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center space-x-2 text-white font-medium">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.name}>
                <button
                  onClick={() => handleNavClick(link)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#25a244] text-white shadow-md shadow-[#25a244]/40 font-semibold'
                      : 'text-gray-200 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span className={isActive ? 'text-white' : 'text-[#05f244]'}>{link.icon}</span>
                  <span>{link.name}</span>
                </button>
              </li>
            );
          })}

          <li className="pl-3">
            <button
              onClick={() => {
                navigate('/electionPage');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-[#25a244] hover:bg-[#1f8838] text-white font-semibold px-6 py-2.5 rounded-full shadow-[0_4px_20px_rgba(37,162,68,0.5)] transition-all transform hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <span>{CAMPAIGN_INFO.symbolEmoji}</span>
              <span>নির্বাচন ইশতিহার</span>
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center gap-3 text-white">
          <button
            onClick={() => {
              navigate('/electionPage');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs bg-[#25a244] text-white font-semibold px-3 py-1.5 rounded-full shadow-md"
          >
            ইশতিহার
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-white/10 cursor-pointer text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#093A79] border-b border-white/10 px-6 py-5 shadow-2xl transition-all">
          <ul className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-left text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#25a244] text-white'
                        : 'text-gray-200 hover:bg-white/10'
                    }`}
                  >
                    <span className="text-[#05f244]">{link.icon}</span>
                    <span>{link.name}</span>
                  </button>
                </li>
              );
            })}
            <li className="pt-2">
              <button
                onClick={() => {
                  navigate('/electionPage');
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full text-center bg-[#25a244] hover:bg-[#1f8838] text-white font-semibold py-3 rounded-full shadow-lg transition-transform transform active:scale-95"
              >
                🗳️ নির্বাচন ইশতিহার (Manifesto)
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
