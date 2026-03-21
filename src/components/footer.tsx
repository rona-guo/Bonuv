import Link from 'next/link';
import { Mail, Phone, MapPin, Sparkles } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 tech-grid-dark opacity-30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <div>
                <div className="font-bold text-lg text-white">博诺辉创</div>
                <div className="text-xs text-slate-500">BONO Creater</div>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
              武汉博诺辉创企业管理有限公司，致力于为企业提供战略咨询、人才发展、数字化转型、知识产权等全方位创新服务，助力企业实现可持续发展。
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-400">
                <Phone className="h-4 w-4 text-cyan-400" />
                <span>188-7222-2897</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Mail className="h-4 w-4 text-cyan-400" />
                <span>contact@bonuv.com</span>
              </div>
              <div className="flex items-start gap-3 text-slate-400">
                <MapPin className="h-4 w-4 text-cyan-400 mt-0.5 shrink-0" />
                <span>武汉市东湖新技术开发区长城园路8号光谷精工科技园</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-6 text-lg text-white">快速链接</h3>
            <ul className="space-y-3">
              {[
                { name: '首页', href: '/' },
                { name: '解决方案', href: '/solutions' },
                { name: '服务内容', href: '/services' },
                { name: '专业团队', href: '/team' },
                { name: '服务案例', href: '/cases' },
                { name: '联系我们', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <Sparkles className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-6 text-lg text-white">服务内容</h3>
            <ul className="space-y-3">
              {[
                { name: '咨询服务', href: '/services#consulting' },
                { name: '人才服务', href: '/services#talent' },
                { name: '数字化服务', href: '/services#digital' },
                { name: '知识产权', href: '/services#ip' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <Sparkles className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} 武汉博诺辉创企业管理有限公司. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a 
              href="https://beian.miit.gov.cn/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              鄂ICP备2024061230号
            </a>
            <a 
              href="https://www.bonuv.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              www.bonuv.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
