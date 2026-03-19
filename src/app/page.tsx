import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight,
  Sparkles,
  Target,
  Users,
  Zap,
  Shield,
  TrendingUp,
  Building2,
  Lightbulb,
  Cpu,
  CheckCircle,
  ChevronRight,
  BarChart3,
  Layers,
  Clock,
  Award
} from 'lucide-react';

const services = [
  {
    icon: Lightbulb,
    title: '战略咨询服务',
    description: '战略规划、商业模式设计、组织优化，助力企业明确方向',
    gradient: 'from-amber-500 to-orange-500',
    shadow: 'shadow-amber-500/20',
  },
  {
    icon: Users,
    title: '人才发展服务',
    description: '人才建模、测评盘点、激励体系、学习发展全链条解决方案',
    gradient: 'from-emerald-500 to-teal-500',
    shadow: 'shadow-emerald-500/20',
  },
  {
    icon: Cpu,
    title: '数字化转型服务',
    description: '低代码平台、流程数字化、数据资产管理，赋能业务增长',
    gradient: 'from-blue-500 to-cyan-500',
    shadow: 'shadow-blue-500/20',
  },
  {
    icon: Shield,
    title: '知识产权服务',
    description: '专利申请、商标注册、风险防控，保护创新成果',
    gradient: 'from-purple-500 to-pink-500',
    shadow: 'shadow-purple-500/20',
  },
];

const clientTypes = [
  {
    type: '成长型企业',
    icon: TrendingUp,
    description: '处于快速扩张期，需要建立规范管理体系',
    painPoints: ['组织架构不清晰', '人才梯队断层', '流程效率低下'],
    fitScore: 95,
    services: ['组织优化', '人才盘点', '流程再造'],
  },
  {
    type: '转型期企业',
    icon: Zap,
    description: '业务模式变革中，需要数字化能力支撑',
    painPoints: ['数字化基础薄弱', '数据孤岛严重', '转型路径不清'],
    fitScore: 92,
    services: ['数字化转型', '流程优化', '组织变革'],
  },
  {
    type: '创新型企业',
    icon: Sparkles,
    description: '研发导向型，需要知识产权和创新管理',
    painPoints: ['知识产权保护不足', '研发管理不规范', '创新成果转化难'],
    fitScore: 90,
    services: ['知识产权服务', '研发管理', '创新体系建设'],
  },
  {
    type: '集团型企业',
    icon: Building2,
    description: '多业务单元协同，需要一体化管理方案',
    painPoints: ['集团管控效率低', '人才供给不足', '协同机制缺失'],
    fitScore: 88,
    services: ['集团管控', '人才中心建设', '共享服务中心'],
  },
];

const stats = [
  { value: '50+', label: '服务企业', icon: Building2 },
  { value: '100+', label: '成功项目', icon: Award },
  { value: '98%', label: '客户满意度', icon: CheckCircle },
  { value: '20+', label: '平均从业年限', icon: Clock },
];

const capabilities = [
  { label: '战略规划能力', value: 95 },
  { label: '组织变革经验', value: 92 },
  { label: '人才管理专长', value: 96 },
  { label: '数字化转型', value: 90 },
  { label: '知识产权服务', value: 88 },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50" />
        <div className="absolute inset-0 tech-grid" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-6 px-4 py-1.5 bg-indigo-100 text-indigo-700 border-0">
                <Sparkles className="w-3 h-3 mr-2" />
                企业创新支撑服务商
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                让创新成为企业的
                <span className="block mt-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  核心竞争力
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
                我们专注于企业创新战略规划、组织建设、人才管理与成果转化四大领域，
                以专业咨询助力企业突破发展瓶颈，实现可持续增长。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-xl shadow-indigo-500/25 group">
                  <Link href="/solutions">
                    发现您的解决方案
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-gray-200 hover:bg-gray-50">
                  <Link href="/contact">预约免费诊断</Link>
                </Button>
              </div>
            </div>
            
            {/* Right Side - Stats Card */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
              <Card className="relative bg-white/80 backdrop-blur-xl border-0 shadow-2xl rounded-2xl">
                <CardContent className="p-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">团队核心能力</h3>
                  <div className="space-y-4">
                    {capabilities.map((cap) => (
                      <div key={cap.label} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">{cap.label}</span>
                          <span className="font-medium text-indigo-600">{cap.value}%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-1000"
                            style={{ width: `${cap.value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <div className="grid grid-cols-2 gap-4">
                      {stats.slice(0, 2).map((stat) => (
                        <div key={stat.label} className="text-center">
                          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            {stat.value}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Client Analysis Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-purple-100 text-purple-700 border-0">
              客户洞察
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              我们最懂哪类企业？
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              基于多年实践，我们深入理解不同发展阶段企业的核心挑战与需求
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {clientTypes.map((client) => (
              <Card key={client.type} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${client.icon === TrendingUp ? 'from-emerald-500 to-teal-500' : client.icon === Zap ? 'from-amber-500 to-orange-500' : client.icon === Sparkles ? 'from-purple-500 to-pink-500' : 'from-blue-500 to-cyan-500'} flex items-center justify-center shadow-lg`}>
                        <client.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{client.type}</h3>
                        <p className="text-xs text-gray-500">{client.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        {client.fitScore}%
                      </div>
                      <div className="text-[10px] text-gray-400">适配度</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-gray-500 mb-2">核心痛点</p>
                      <div className="flex flex-wrap gap-1.5">
                        {client.painPoints.map((point) => (
                          <Badge key={point} variant="secondary" className="bg-red-50 text-red-600 border-0 text-xs">
                            {point}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-2">推荐服务</p>
                      <div className="flex flex-wrap gap-1.5">
                        {client.services.map((service) => (
                          <Badge key={service} variant="secondary" className="bg-indigo-50 text-indigo-600 border-0 text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-indigo-200 text-indigo-600 hover:bg-indigo-50">
              <Link href="/solutions">
                查看完整解决方案
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700 border-0">
              服务体系
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              四大核心服务领域
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              构建企业创新支撑体系，提供从战略到落地的全链条服务
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map((service) => (
              <Card key={service.title} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 shadow-lg ${service.shadow} group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Link 
                    href="/services"
                    className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700 group/link"
                  >
                    了解详情
                    <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:40px_40px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              为什么选择博诺辉创？
            </h2>
            <p className="text-indigo-100 text-lg max-w-2xl mx-auto">
              我们不只是提供咨询服务，更是您企业创新发展的长期伙伴
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center mx-auto mb-5">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">结果导向</h3>
              <p className="text-indigo-100 text-sm">
                以价值效益倍增为目标，每个项目都有可衡量的成果输出
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center mx-auto mb-5">
                <Layers className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">陪跑服务</h3>
              <p className="text-indigo-100 text-sm">
                深入企业一线，长期陪伴成长，确保方案真正落地执行
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center mx-auto mb-5">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">数据驱动</h3>
              <p className="text-indigo-100 text-sm">
                运用科学方法论和数据工具，让决策有据可依
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50 shadow-xl">
              <Link href="/contact">开启合作之旅</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              准备好让企业更进一步了吗？
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              无论您处于哪个发展阶段，我们都能为您提供适合的解决方案
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-xl shadow-indigo-500/25">
                <Link href="/contact">
                  预约免费诊断
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-gray-200">
                <Link href="/cases">查看服务案例</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
                <span className="text-lg font-bold text-white">博诺辉创</span>
              </div>
              <p className="text-sm leading-relaxed">
                专注于为企业创新过程和创新企业提供全方位管理咨询服务的专业机构。
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">服务体系</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services" className="hover:text-white transition-colors">战略咨询</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">人才服务</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">数字化转型</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">知识产权</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">关于我们</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/team" className="hover:text-white transition-colors">专业团队</Link></li>
                <li><Link href="/cases" className="hover:text-white transition-colors">服务案例</Link></li>
                <li><Link href="/solutions" className="hover:text-white transition-colors">解决方案</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">联系我们</h4>
              <ul className="space-y-2 text-sm">
                <li>湖北省武汉市</li>
                <li>contact@bonu-huichuang.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© {new Date().getFullYear()} 武汉博诺辉创企业管理有限公司 版权所有</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
