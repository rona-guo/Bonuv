import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight,
  TrendingUp,
  Zap,
  Sparkles,
  Building2,
  Users,
  Target,
  Lightbulb,
  Cpu,
  Shield,
  CheckCircle,
  AlertCircle,
  BarChart3,
  Settings,
  ArrowUpRight,
  Rocket
} from 'lucide-react';

const enterpriseStages = [
  {
    stage: '初创期',
    stageEn: 'Startup',
    employees: '1-50人',
    description: '商业模式探索，核心团队组建',
    challenges: ['管理体系缺失', '人才招聘困难', '流程不规范'],
    ourServices: [
      { name: '组织架构设计', fit: 85 },
      { name: '核心人才招聘', fit: 90 },
      { name: '基础制度建设', fit: 80 },
    ],
    color: 'from-blue-400 to-cyan-400',
    glow: 'shadow-blue-400/30',
  },
  {
    stage: '成长期',
    stageEn: 'Growth',
    employees: '50-200人',
    description: '快速扩张，需要建立规范体系',
    challenges: ['组织效率下降', '人才梯队断层', '管理成本上升'],
    ourServices: [
      { name: '组织优化', fit: 95 },
      { name: '人才盘点与发展', fit: 92 },
      { name: '流程标准化', fit: 90 },
    ],
    color: 'from-blue-500 to-cyan-500',
    glow: 'shadow-cyan-500/30',
  },
  {
    stage: '成熟期',
    stageEn: 'Mature',
    employees: '200-1000人',
    description: '业务稳定，需要突破增长瓶颈',
    challenges: ['创新动力不足', '数字化转型压力', '人才活力下降'],
    ourServices: [
      { name: '数字化转型', fit: 92 },
      { name: '创新体系建设', fit: 88 },
      { name: '组织活力激发', fit: 85 },
    ],
    color: 'from-blue-600 to-cyan-600',
    glow: 'shadow-blue-600/30',
  },
  {
    stage: '集团化',
    stageEn: 'Enterprise',
    employees: '1000人以上',
    description: '多业务协同，需要一体化管理',
    challenges: ['管控效率低', '协同机制缺失', '共享能力不足'],
    ourServices: [
      { name: '集团管控体系', fit: 90 },
      { name: '共享服务中心', fit: 88 },
      { name: '人才中心建设', fit: 85 },
    ],
    color: 'from-blue-700 to-cyan-700',
    glow: 'shadow-cyan-600/30',
  },
];

const industrySolutions = [
  {
    industry: '制造业',
    icon: Settings,
    painPoints: ['生产效率低', '库存管理混乱', '质量管控难'],
    solutions: ['精益生产咨询', '流程优化', '数字化工厂'],
    cases: ['巨立电梯', '武汉静磁栅'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    industry: '零售连锁',
    icon: Building2,
    painPoints: ['门店扩张慢', '人才供给不足', '标准化程度低'],
    solutions: ['连锁运营体系', '人才梯队建设', '培训体系搭建'],
    cases: ['美宜佳', '汉堡王'],
    gradient: 'from-cyan-500 to-teal-500',
  },
  {
    industry: '科技互联网',
    icon: Lightbulb,
    painPoints: ['研发管理弱', '知识产权风险', '人才竞争激烈'],
    solutions: ['研发管理体系', '知识产权服务', '股权激励设计'],
    cases: ['武汉红星杨', '江苏万洋投资'],
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    industry: '国企/央企',
    icon: Shield,
    painPoints: ['市场化转型', '人才机制僵化', '数字化滞后'],
    solutions: ['市场化改革', '人才机制创新', '数字化转型'],
    cases: ['中国建筑四局', '中国船舶701所'],
    gradient: 'from-blue-600 to-indigo-600',
  },
];

const serviceFitMatrix = [
  { service: '战略与商业模式', startup: 70, growth: 85, mature: 90, enterprise: 95 },
  { service: '组织与流程优化', startup: 75, growth: 95, mature: 85, enterprise: 90 },
  { service: '人力资源管理', startup: 80, growth: 95, mature: 90, enterprise: 88 },
  { service: '人才服务', startup: 90, growth: 95, mature: 85, enterprise: 80 },
  { service: '数字化转型', startup: 60, growth: 80, mature: 92, enterprise: 95 },
  { service: '知识产权服务', startup: 85, growth: 90, mature: 85, enterprise: 80 },
];

export default function SolutionsPage() {
  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-slate-950">
        {/* 背景效果 */}
        <div className="absolute inset-0 tech-grid-dark opacity-40" />
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[80px]" />
        
        {/* 旋转装饰 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-blue-500/10 rounded-full animate-spin-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-cyan-500/10 rounded-full animate-spin-reverse" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-blue-500/20 text-cyan-300 border border-blue-400/30 px-4 py-1.5">
              <Target className="w-3.5 h-3.5 mr-1.5" />
              解决方案
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              为您的企业找到
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                最适合的方案
              </span>
            </h1>
            <p className="text-xl text-slate-400">
              基于企业生命周期和行业特点，精准匹配服务内容
            </p>
          </div>
        </div>
      </section>

      {/* Enterprise Stage Analysis */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700 border-0">
              企业生命周期
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              服务适配模型
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              不同发展阶段的企业面临不同的挑战，我们提供针对性的解决方案
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {enterpriseStages.map((item, index) => (
              <Card 
                key={item.stage} 
                className="group card-hover border-0 bg-white overflow-hidden"
              >
                {/* 顶部渐变条 */}
                <div className={`h-1.5 bg-gradient-to-r ${item.color}`} />
                
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">{item.stage}</CardTitle>
                      <p className="text-xs text-slate-400 mt-0.5">{item.stageEn}</p>
                    </div>
                    <Badge variant="secondary" className="bg-slate-100 text-slate-600 font-medium">
                      {item.employees}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-500 mt-3">{item.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* 挑战 */}
                  <div>
                    <p className="text-xs text-gray-500 mb-2 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3 text-red-400" />
                      典型挑战
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {item.challenges.map((c) => (
                        <Badge key={c} variant="secondary" className="bg-red-50 text-red-600 border-0 text-xs">
                          {c}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* 推荐服务 */}
                  <div>
                    <p className="text-xs text-gray-500 mb-2 flex items-center gap-1">
                      <CheckCircle className="h-3 w-3 text-blue-400" />
                      推荐服务
                    </p>
                    <div className="space-y-2">
                      {item.ourServices.map((s) => (
                        <div key={s.name} className="flex items-center justify-between">
                          <span className="text-sm text-gray-700">{s.name}</span>
                          <div className="flex items-center gap-2">
                            <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                              <div 
                                className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                                style={{ width: `${s.fit}%` }}
                              />
                            </div>
                            <span className="text-xs font-medium text-slate-500 w-8">{s.fit}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Fit Matrix */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700 border-0">
              数据洞察
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              服务适配度矩阵
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              基于数据分析，为您展示不同服务在各阶段企业的适配程度
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                        <th className="px-6 py-5 text-left font-semibold text-sm">服务类型</th>
                        <th className="px-4 py-5 text-center font-semibold text-sm">初创期</th>
                        <th className="px-4 py-5 text-center font-semibold text-sm">成长期</th>
                        <th className="px-4 py-5 text-center font-semibold text-sm">成熟期</th>
                        <th className="px-4 py-5 text-center font-semibold text-sm">集团化</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {serviceFitMatrix.map((row, index) => (
                        <tr key={row.service} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                          <td className="px-6 py-5 font-medium text-gray-900">{row.service}</td>
                          <td className="px-4 py-5 text-center">
                            <span className={`inline-flex items-center justify-center w-14 h-14 rounded-xl text-sm font-bold transition-transform hover:scale-110 ${
                              row.startup >= 85 ? 'bg-gradient-to-br from-blue-100 to-cyan-100 text-blue-700' : 
                              row.startup >= 70 ? 'bg-cyan-50 text-cyan-700' : 
                              'bg-slate-100 text-slate-600'
                            }`}>
                              {row.startup}
                            </span>
                          </td>
                          <td className="px-4 py-5 text-center">
                            <span className={`inline-flex items-center justify-center w-14 h-14 rounded-xl text-sm font-bold transition-transform hover:scale-110 ${
                              row.growth >= 85 ? 'bg-gradient-to-br from-blue-100 to-cyan-100 text-blue-700' : 
                              row.growth >= 70 ? 'bg-cyan-50 text-cyan-700' : 
                              'bg-slate-100 text-slate-600'
                            }`}>
                              {row.growth}
                            </span>
                          </td>
                          <td className="px-4 py-5 text-center">
                            <span className={`inline-flex items-center justify-center w-14 h-14 rounded-xl text-sm font-bold transition-transform hover:scale-110 ${
                              row.mature >= 85 ? 'bg-gradient-to-br from-blue-100 to-cyan-100 text-blue-700' : 
                              row.mature >= 70 ? 'bg-cyan-50 text-cyan-700' : 
                              'bg-slate-100 text-slate-600'
                            }`}>
                              {row.mature}
                            </span>
                          </td>
                          <td className="px-4 py-5 text-center">
                            <span className={`inline-flex items-center justify-center w-14 h-14 rounded-xl text-sm font-bold transition-transform hover:scale-110 ${
                              row.enterprise >= 85 ? 'bg-gradient-to-br from-blue-100 to-cyan-100 text-blue-700' : 
                              row.enterprise >= 70 ? 'bg-cyan-50 text-cyan-700' : 
                              'bg-slate-100 text-slate-600'
                            }`}>
                              {row.enterprise}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            
            {/* 图例 */}
            <div className="flex items-center justify-center gap-8 mt-8">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-gradient-to-br from-blue-100 to-cyan-100" />
                <span className="text-sm text-gray-600">高度适配 (≥85)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-cyan-50" />
                <span className="text-sm text-gray-600">中度适配 (70-84)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-slate-100" />
                <span className="text-sm text-gray-600">一般适配 (&lt;70)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700 border-0">
              行业深耕
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              行业解决方案
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              深耕多个行业，积累丰富的实践经验
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {industrySolutions.map((item) => (
              <Card key={item.industry} className="group card-hover border-0 bg-white overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {/* 图标 */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      style={{ boxShadow: `0 10px 40px ${item.gradient.includes('blue') ? 'rgba(59, 130, 246, 0.3)' : item.gradient.includes('cyan') ? 'rgba(6, 182, 212, 0.3)' : 'rgba(139, 92, 246, 0.3)'}` }}
                    >
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{item.industry}</h3>
                      
                      <div className="mt-4 space-y-3">
                        <div>
                          <p className="text-xs text-gray-500 mb-1.5">行业痛点</p>
                          <div className="flex flex-wrap gap-1">
                            {item.painPoints.map((p) => (
                              <Badge key={p} variant="secondary" className="bg-red-50 text-red-600 border-0 text-xs">
                                {p}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1.5">解决方案</p>
                          <div className="flex flex-wrap gap-1">
                            {item.solutions.map((s) => (
                              <Badge key={s} variant="secondary" className="bg-blue-50 text-blue-600 border-0 text-xs">
                                {s}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1.5">服务案例</p>
                          <p className="text-sm text-gray-700 font-medium">{item.cases.join('、')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        {/* 背景效果 */}
        <div className="absolute inset-0 tech-grid-dark opacity-40" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[80px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              不确定哪个方案适合您？
            </h2>
            <p className="text-slate-400 text-lg mb-10">
              预约免费诊断，我们的顾问将为您定制专属解决方案
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100 shadow-xl h-14 px-8 text-base font-medium rounded-xl">
                <Link href="/contact">
                  <Rocket className="mr-2 h-5 w-5" />
                  预约免费诊断
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base font-medium border-white/20 text-white bg-white/5 hover:bg-white/10 rounded-xl">
                <Link href="/services">
                  了解服务详情
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
