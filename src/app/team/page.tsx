import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Award,
  Users,
  Target,
  Lightbulb,
  Cpu,
  Shield,
  TrendingUp,
  CheckCircle,
  Briefcase,
  GraduationCap,
  Building2
} from 'lucide-react';

const teamCapabilities = [
  {
    category: '战略与商业模式',
    icon: Target,
    description: '帮助企业明确战略方向，设计可持续商业模式',
    capabilities: ['战略规划与解码', '商业模式设计', '竞争分析', '增长战略'],
    strength: 95,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    category: '组织与人才管理',
    icon: Users,
    description: '构建高效组织体系，打造人才竞争优势',
    capabilities: ['组织架构设计', '人才盘点与建模', '绩效与激励体系', '培训发展体系'],
    strength: 96,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    category: '数字化转型',
    icon: Cpu,
    description: '以低代码为核心，助力企业低成本数字化',
    capabilities: ['数字化诊断', '低代码平台实施', '流程数字化', '数据资产管理'],
    strength: 90,
    color: 'from-purple-500 to-pink-500',
  },
  {
    category: '知识产权服务',
    icon: Shield,
    description: '保护创新成果，构建企业竞争壁垒',
    capabilities: ['专利申请与布局', '商标注册', '知识产权风险防控', '高企认定辅导'],
    strength: 88,
    color: 'from-amber-500 to-orange-500',
  },
];

const teamCredentials = [
  { icon: Building2, label: '500强企业背景', value: '60%', description: '核心顾问来自知名企业' },
  { icon: GraduationCap, label: '平均从业年限', value: '15+', description: '深耕管理咨询领域' },
  { icon: Award, label: '专业资质认证', value: '30+', description: 'PMP/HRM/心理咨询等' },
  { icon: Briefcase, label: '服务企业数量', value: '100+', description: '覆盖多个行业领域' },
];

const expertise = [
  { area: '战略管理', level: 95 },
  { area: '组织发展', level: 92 },
  { area: '人才管理', level: 96 },
  { area: '流程优化', level: 90 },
  { area: '数字化转型', level: 88 },
  { area: '知识产权', level: 85 },
];

const industryExperience = [
  '制造业', '零售连锁', '科技互联网', '国企央企', '金融', '医疗健康', '教育', '房地产'
];

export default function TeamPage() {
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
              专业团队
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              专业能力，护航企业发展
            </h1>
            <p className="text-xl text-indigo-100">
              汇聚战略、人力、技术、知识产权多领域专家，为企业提供全方位支撑
            </p>
          </div>
        </div>
      </section>

      {/* Team Credentials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {teamCredentials.map((item) => (
              <div key={item.label} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-indigo-500/20">
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {item.value}
                </div>
                <div className="text-sm font-medium text-gray-900 mt-1">{item.label}</div>
                <div className="text-xs text-gray-500 mt-0.5">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              核心能力领域
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              四大核心能力板块，覆盖企业创新发展的关键环节
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teamCapabilities.map((item) => (
              <Card key={item.category} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <div className={`h-1.5 bg-gradient-to-r ${item.color}`} />
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0 shadow-lg`}>
                      <item.icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{item.category}</h3>
                        <div className="flex items-center gap-2">
                          <div className="w-20 h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div 
                              className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                              style={{ width: `${item.strength}%` }}
                            />
                          </div>
                          <span className="text-sm font-bold text-gray-600">{item.strength}%</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {item.capabilities.map((cap) => (
                          <Badge key={cap} variant="secondary" className="bg-slate-100 text-gray-700 border-0 text-xs">
                            {cap}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Radar */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                专业能力图谱
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                基于多年实践积累，我们在各个专业领域建立了深厚的能力储备
              </p>
              <div className="space-y-4">
                {expertise.map((item) => (
                  <div key={item.area} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-gray-900">{item.area}</span>
                      <span className="text-indigo-600 font-semibold">{item.level}%</span>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-1000"
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="border-0 shadow-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">团队优势</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-indigo-200 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">跨界融合</p>
                      <p className="text-sm text-indigo-200">战略、人力、技术、知识产权多领域专家协同</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-indigo-200 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">实战导向</p>
                      <p className="text-sm text-indigo-200">核心顾问均有知名企业实战管理经验</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-indigo-200 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">方法论驱动</p>
                      <p className="text-sm text-indigo-200">持续研究创新方法论，保持专业领先</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-indigo-200 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">陪跑服务</p>
                      <p className="text-sm text-indigo-200">深入一线，确保方案落地执行</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Experience */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              行业经验覆盖
            </h2>
            <p className="text-gray-600 text-lg">
              深耕多个行业，积累丰富的实践经验
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {industryExperience.map((industry) => (
              <div 
                key={industry}
                className="px-6 py-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <span className="text-gray-900 font-medium">{industry}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  专心
                </div>
                <p className="text-sm text-gray-600">专注企业创新服务领域</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  专注
                </div>
                <p className="text-sm text-gray-600">深耕管理咨询方法论</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  专业
                </div>
                <p className="text-sm text-gray-600">专家团队护航成长</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
