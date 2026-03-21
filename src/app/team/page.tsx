import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Award,
  Users,
  Target,
  Lightbulb,
  Cpu,
  Shield,
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
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    category: '组织与人才管理',
    icon: Users,
    description: '构建高效组织体系，打造人才竞争优势',
    capabilities: ['组织架构设计', '人才盘点与建模', '绩效与激励体系', '培训发展体系'],
    strength: 96,
    gradient: 'from-cyan-500 to-teal-500',
  },
  {
    category: '数字化转型',
    icon: Cpu,
    description: '以低代码为核心，助力企业低成本数字化',
    capabilities: ['数字化诊断', '低代码平台实施', '流程数字化', '数据资产管理'],
    strength: 90,
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    category: '知识产权服务',
    icon: Shield,
    description: '保护创新成果，构建企业竞争壁垒',
    capabilities: ['专利申请与布局', '商标注册', '知识产权风险防控', '高企认定辅导'],
    strength: 88,
    gradient: 'from-blue-600 to-indigo-500',
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
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-slate-950">
        {/* 背景效果 */}
        <div className="absolute inset-0 tech-grid-dark opacity-40" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[80px]" />
        
        {/* 旋转装饰 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-blue-500/10 rounded-full animate-spin-slow" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-blue-500/20 text-cyan-300 border border-blue-400/30 px-4 py-1.5">
              <Users className="w-3.5 h-3.5 mr-1.5" />
              专业团队
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              专业能力
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                护航企业发展
              </span>
            </h1>
            <p className="text-xl text-slate-400">
              汇聚战略、人力、技术、知识产权多领域专家，为企业提供全方位支撑
            </p>
          </div>
        </div>
      </section>

      {/* Team Credentials */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {teamCredentials.map((item) => (
              <div key={item.label} className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  {item.value}
                </div>
                <div className="text-sm font-medium text-gray-900 mt-1">{item.label}</div>
                <div className="text-xs text-slate-500 mt-0.5">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700 border-0">
              核心能力
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              四大核心能力领域
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              覆盖企业创新发展的关键环节
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teamCapabilities.map((item) => (
              <Card key={item.category} className="group card-hover border-0 bg-white overflow-hidden">
                <div className={`h-1.5 bg-gradient-to-r ${item.gradient}`} />
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {/* 图标 */}
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                      style={{ boxShadow: `0 10px 40px ${item.gradient.includes('blue') ? 'rgba(59, 130, 246, 0.25)' : item.gradient.includes('cyan') ? 'rgba(6, 182, 212, 0.25)' : 'rgba(139, 92, 246, 0.25)'}` }}
                    >
                      <item.icon className="h-7 w-7 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{item.category}</h3>
                        <div className="flex items-center gap-2">
                          <div className="w-20 h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div 
                              className={`h-full bg-gradient-to-r ${item.gradient} rounded-full`}
                              style={{ width: `${item.strength}%` }}
                            />
                          </div>
                          <span className="text-sm font-bold text-slate-600">{item.strength}%</span>
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
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
            {/* 能力条 */}
            <div>
              <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700 border-0">
                能力图谱
              </Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                专业能力图谱
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                基于多年实践积累，我们在各个专业领域建立了深厚的能力储备
              </p>
              <div className="space-y-5">
                {expertise.map((item) => (
                  <div key={item.area} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-gray-900">{item.area}</span>
                      <span className="font-bold text-blue-600">{item.level}%</span>
                    </div>
                    <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-violet-500 rounded-full transition-all duration-1000"
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* 团队优势卡片 */}
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-blue-600 to-cyan-600 text-white overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">团队优势</h3>
                <div className="space-y-5">
                  {[
                    { title: '跨界融合', desc: '战略、人力、技术、知识产权多领域专家协同' },
                    { title: '实战导向', desc: '核心顾问均有知名企业实战管理经验' },
                    { title: '方法论驱动', desc: '持续研究创新方法论，保持专业领先' },
                    { title: '陪跑服务', desc: '深入一线，确保方案落地执行' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm text-blue-100">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Experience */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700 border-0">
              行业经验
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              行业经验覆盖
            </h2>
            <p className="text-gray-600 text-lg">
              深耕多个行业，积累丰富的实践经验
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {industryExperience.map((industry) => (
              <div 
                key={industry}
                className="px-6 py-3 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-blue-200 group cursor-default"
              >
                <span className="text-gray-900 font-medium group-hover:text-blue-600 transition-colors">{industry}</span>
              </div>
            ))}
          </div>

          {/* 底部标语 */}
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { text: '专心', desc: '专注企业创新服务领域' },
                { text: '专注', desc: '深耕管理咨询方法论' },
                { text: '专业', desc: '专家团队护航成长' },
              ].map((item) => (
                <div key={item.text} className="text-center group">
                  <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform inline-block">
                    {item.text}
                  </div>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
