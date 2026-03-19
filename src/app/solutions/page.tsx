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
  ArrowUpRight
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
    color: 'from-emerald-500 to-teal-500',
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
    color: 'from-purple-500 to-pink-500',
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
    color: 'from-amber-500 to-orange-500',
  },
];

const industrySolutions = [
  {
    industry: '制造业',
    icon: Settings,
    painPoints: ['生产效率低', '库存管理混乱', '质量管控难'],
    solutions: ['精益生产咨询', '流程优化', '数字化工厂'],
    cases: ['巨立电梯', '武汉静磁栅'],
  },
  {
    industry: '零售连锁',
    icon: Building2,
    painPoints: ['门店扩张慢', '人才供给不足', '标准化程度低'],
    solutions: ['连锁运营体系', '人才梯队建设', '培训体系搭建'],
    cases: ['美宜佳', '汉堡王'],
  },
  {
    industry: '科技互联网',
    icon: Lightbulb,
    painPoints: ['研发管理弱', '知识产权风险', '人才竞争激烈'],
    solutions: ['研发管理体系', '知识产权服务', '股权激励设计'],
    cases: ['武汉红星杨', '江苏万洋投资'],
  },
  {
    industry: '国企/央企',
    icon: Shield,
    painPoints: ['市场化转型', '人才机制僵化', '数字化滞后'],
    solutions: ['市场化改革', '人才机制创新', '数字化转型'],
    cases: ['中国建筑四局', '中国船舶701所'],
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
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700" />
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:40px_40px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-0">
              解决方案
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              为您的企业找到最适合的方案
            </h1>
            <p className="text-xl text-indigo-100">
              基于企业生命周期和行业特点，精准匹配服务内容
            </p>
          </div>
        </div>
      </section>

      {/* Enterprise Stage Analysis */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              企业生命周期服务适配
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              不同发展阶段的企业面临不同的挑战，我们提供针对性的解决方案
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {enterpriseStages.map((item) => (
              <Card key={item.stage} className="group hover:shadow-xl transition-all duration-300 border-0 bg-slate-50/50 overflow-hidden">
                <div className={`h-1.5 bg-gradient-to-r ${item.color}`} />
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">{item.stage}</CardTitle>
                      <p className="text-xs text-gray-400 mt-0.5">{item.stageEn}</p>
                    </div>
                    <Badge variant="secondary" className="bg-white text-gray-600">
                      {item.employees}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-2 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
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
                  <div>
                    <p className="text-xs text-gray-500 mb-2 flex items-center gap-1">
                      <CheckCircle className="h-3 w-3" />
                      推荐服务
                    </p>
                    <div className="space-y-2">
                      {item.ourServices.map((s) => (
                        <div key={s.name} className="flex items-center justify-between">
                          <span className="text-sm text-gray-700">{s.name}</span>
                          <div className="flex items-center gap-2">
                            <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                              <div 
                                className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                                style={{ width: `${s.fit}%` }}
                              />
                            </div>
                            <span className="text-xs font-medium text-gray-500">{s.fit}%</span>
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
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              服务适配度矩阵
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              基于数据分析，为您展示不同服务在各阶段企业的适配程度
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                        <th className="px-6 py-4 text-left font-semibold">服务类型</th>
                        <th className="px-4 py-4 text-center font-semibold">初创期</th>
                        <th className="px-4 py-4 text-center font-semibold">成长期</th>
                        <th className="px-4 py-4 text-center font-semibold">成熟期</th>
                        <th className="px-4 py-4 text-center font-semibold">集团化</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {serviceFitMatrix.map((row, index) => (
                        <tr key={row.service} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                          <td className="px-6 py-4 font-medium text-gray-900">{row.service}</td>
                          <td className="px-4 py-4 text-center">
                            <span className={`inline-flex items-center justify-center w-12 h-12 rounded-lg text-sm font-bold ${
                              row.startup >= 85 ? 'bg-emerald-100 text-emerald-700' : 
                              row.startup >= 70 ? 'bg-amber-100 text-amber-700' : 
                              'bg-gray-100 text-gray-600'
                            }`}>
                              {row.startup}
                            </span>
                          </td>
                          <td className="px-4 py-4 text-center">
                            <span className={`inline-flex items-center justify-center w-12 h-12 rounded-lg text-sm font-bold ${
                              row.growth >= 85 ? 'bg-emerald-100 text-emerald-700' : 
                              row.growth >= 70 ? 'bg-amber-100 text-amber-700' : 
                              'bg-gray-100 text-gray-600'
                            }`}>
                              {row.growth}
                            </span>
                          </td>
                          <td className="px-4 py-4 text-center">
                            <span className={`inline-flex items-center justify-center w-12 h-12 rounded-lg text-sm font-bold ${
                              row.mature >= 85 ? 'bg-emerald-100 text-emerald-700' : 
                              row.mature >= 70 ? 'bg-amber-100 text-amber-700' : 
                              'bg-gray-100 text-gray-600'
                            }`}>
                              {row.mature}
                            </span>
                          </td>
                          <td className="px-4 py-4 text-center">
                            <span className={`inline-flex items-center justify-center w-12 h-12 rounded-lg text-sm font-bold ${
                              row.enterprise >= 85 ? 'bg-emerald-100 text-emerald-700' : 
                              row.enterprise >= 70 ? 'bg-amber-100 text-amber-700' : 
                              'bg-gray-100 text-gray-600'
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
            <div className="flex items-center justify-center gap-6 mt-6">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded bg-emerald-100" />
                <span className="text-sm text-gray-600">高度适配 (≥85)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded bg-amber-100" />
                <span className="text-sm text-gray-600">中度适配 (70-84)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded bg-gray-100" />
                <span className="text-sm text-gray-600">一般适配 (&lt;70)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              行业解决方案
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              深耕多个行业，积累丰富的实践经验
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {industrySolutions.map((item) => (
              <Card key={item.industry} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shrink-0 shadow-lg shadow-indigo-500/20">
                      <item.icon className="h-7 w-7 text-white" />
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
                              <Badge key={s} variant="secondary" className="bg-indigo-50 text-indigo-600 border-0 text-xs">
                                {s}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1.5">服务案例</p>
                          <p className="text-sm text-gray-700">{item.cases.join('、')}</p>
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
      <section className="py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:40px_40px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              不确定哪个方案适合您？
            </h2>
            <p className="text-indigo-200 text-lg mb-8">
              预约免费诊断，我们的顾问将为您定制专属解决方案
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50 shadow-xl">
                <Link href="/contact">
                  预约免费诊断
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Link href="/services">
                  了解服务详情
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
