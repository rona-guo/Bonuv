'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Sparkles } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const navItems = [
  { href: '/', label: '首页' },
  { href: '/solutions', label: '解决方案' },
  { href: '/services', label: '服务内容' },
  { href: '/team', label: '专业团队' },
  { href: '/cases', label: '服务案例' },
  { href: '/contact', label: '联系我们' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 首页特殊样式：初始透明，滚动后变白色
  const headerBg = isHome && !scrolled
    ? 'bg-transparent'
    : 'bg-white/95 backdrop-blur-xl shadow-lg shadow-slate-900/5';

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${headerBg}`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            {/* 光效 */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-30 blur-sm transition-opacity" />
          </div>
          <div className="hidden sm:block">
            <div className={`font-bold text-lg transition-colors ${isHome && !scrolled ? 'text-white' : 'text-gray-900'}`}>
              博诺辉创
            </div>
            <div className={`text-[10px] tracking-wider transition-colors ${isHome && !scrolled ? 'text-slate-400' : 'text-slate-500'}`}>
              BONO CREATER
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 ${
                  isActive
                    ? isHome && !scrolled
                      ? 'text-cyan-400'
                      : 'text-blue-600 bg-blue-50'
                    : isHome && !scrolled
                      ? 'text-slate-300 hover:text-white'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
                {/* 活动指示器 */}
                {isActive && (
                  <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full ${
                    isHome && !scrolled ? 'bg-cyan-400' : 'bg-blue-600'
                  }`} />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Button 
            asChild 
            className={`h-11 px-6 rounded-xl font-medium transition-all duration-300 ${
              isHome && !scrolled
                ? 'bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm'
                : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40'
            }`}
          >
            <Link href="/contact">
              <Sparkles className="w-4 h-4 mr-2" />
              预约咨询
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden p-2.5 rounded-xl transition-colors ${
            isHome && !scrolled
              ? 'text-white hover:bg-white/10'
              : 'text-gray-600 hover:bg-slate-100'
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white/98 backdrop-blur-xl">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                    isActive
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <Button 
              asChild 
              className="mt-4 h-11 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg shadow-blue-500/20 rounded-xl"
            >
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Sparkles className="w-4 h-4 mr-2" />
                预约咨询
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
