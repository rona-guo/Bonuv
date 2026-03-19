import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight,
  Target,
  Building,
  UserCog,
  Factory,
  Monitor,
  FileCheck,
  UserPlus,
  ClipboardCheck,
  Award,
  GraduationCap,
  Database,
  Smartphone,
  CheckCircle,
  Lightbulb,
  Users,
  Cpu,
  Shield,
  Zap
} from 'lucide-react';

const consultingServices = [
  {
    icon: Target,
    title: '战略与商业模式咨询',
    description: '帮助企业明确战略方向，设计可持续的商业模式，构建核心竞争优势',
    features: ['战略规划与解码', '商业模式设计', '竞争战略分析', '增长路径设计'],
  },
  {
    icon: Building,
    title: '组织与流程优化咨询',
    description: '优化组织架构，梳理业务流程，提升组织运营效率',
    features: ['组织架构设计', '流程再造优化', '职责体系梳理', '协同机制建立'],
  },
  {
    icon: UserCog,
    title: '人力资源管理咨询',
    description: '构建完善的人力资源管理体系，提升组织人才效能',
    features: ['HR体系诊断', '制度建设', '绩效管理体系', '薪酬激励机制'],
  },
  {
    icon: Factory,
    title: '精益生产管理咨询',
    description: '推行精益生产理念，消除浪费，提升生产效率',
    features: ['精益生产导入', '现场改善', '品质管理', '效率提升'],
  },
  {
    icon: Monitor,
    title: 'IT与数字化转型咨询',
    description: '制定数字化转型战略，选择合适的技术路径，推动业务创新',
    features: ['数字化诊断', '技术规划', '系统选型', '实施辅导'],
  },
  {
    icon: FileCheck,
    title: '企业合规管理咨询',
    description: '构建合规管理体系，防范经营风险，确保企业稳健发展',
    features: ['合规诊断', '制度体系', '风险防控', '内控建设'],
  },
];

const talentServices = [
  {
    icon: UserPlus,
    title: '人才建模',
    items: ['人才模型构建', '战略解码', '人才规划', '领导力胜任力建模', '任职资格体系建设'],
  },
  {
    icon: ClipboardCheck,
    title: '人才测评与盘点',
    items: ['人才测评', '人才盘点', '继任计划', '人才梯队建设', '人才招聘/猎头'],
  },
  {
    icon: Award,
    title: '人才激励',
    items: ['绩效体系建设', 'KPI/BSC/OKR', '薪酬设计与优化', '高管薪酬', '股权激励'],
  },
  {
    icon: GraduationCap,
    title: '学习与发展',
    items: ['学习项目设计', '学习地图设计', '课程开发', '导师制建立', '培训体系建设'],
  },
];

const digitalFeatures = [
  { icon: Smartphone, title: '全场景', description: '覆盖企业所有业务场景' },
  { icon: Database, title: '高定制', description: '灵活定制满足个性需求' },
  { icon: Zap, title: '超灵活', description: '快速响应业务变化' },
  { icon: CheckCircle, title: '低成本', description: '降低信息化建设成本' },
  { icon: Shield, title: '零依赖', description: '不依赖外部开发团队' },
  { icon: Database, title: '数安全', description: '数据安全有保障' },
];

const digitalPlatforms = ['钉钉', '企业微信', '飞书', '微信服务号', '微信小程序', '浏览器'];

export default function ServicesPage() {
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
              服务内容
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              全方位企业创新服务
            </h1>
            <p className="text-xl text-indigo-100">
              从战略规划到落地执行，为企业创新发展提供全链条服务支撑
            </p>
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section id="consulting" className="py-24 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 mb-6 shadow-lg shadow-amber-500/20">
              <Lightbulb className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">咨询服务</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              长期陪伴企业成长，以企业价值效益倍增为目标，以服务结果为导向
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {consultingServices.map((service) => (
              <Card key={service.title} className="group hover:shadow-xl transition-all duration-300 border-0 bg-slate-50/50 overflow-hidden">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-4 shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {service.features.map((f) => (
                      <Badge key={f} variant="secondary" className="bg-amber-50 text-amber-700 border-0 text-xs">
                        {f}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">服务模式</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <h4 className="font-bold text-gray-900">陪跑服务</h4>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      派驻专家深入企业，长期服务，根据企业经营管理中的实际问题，提出定制化服务方案，并协助落地实施。
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <h4 className="font-bold text-gray-900">项目服务</h4>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      调研诊断（产业、行业、顾客、内外部环境调研，分析企业发展遇到的问题和障碍及其根源）；方案设计（解决方案、落地路径、改善措施）；辅导落地。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Talent Services */}
      <section id="talent" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 mb-6 shadow-lg shadow-emerald-500/20">
              <Users className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">人才服务</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              从人才建模、人才测评与盘点、人才激励、学习发展体系化解决企业面临的人才问题
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {talentServices.map((service) => (
              <Card key={service.title} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{service.title}</h3>
                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Services */}
      <section id="digital" className="py-24 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-6 shadow-lg shadow-blue-500/20">
              <Cpu className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">数字化服务</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              还原企业战略，诊断数字化转型程度，低成本高质量建立数字化企业文化
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">服务理念</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    将数字化转型能力还给企业，补齐能力短板，让企业以最低投入产出比，实现长期的以价值驱动和数字驱动的数字化转型，赋能业务，支撑战略。
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    通过管理咨询、技术指导、技能培训和服务陪跑的组合式服务，梳理正确认知，掌握技巧方法，灵活利用低代码工具全面推进数字化战略融合。
                  </p>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-2 gap-4">
                {digitalFeatures.map((feature) => (
                  <div key={feature.title} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-5 text-center">
                    <feature.icon className="h-7 w-7 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-bold text-gray-900">{feature.title}</h4>
                    <p className="text-xs text-gray-600 mt-1">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <Card className="border-0 bg-gradient-to-br from-blue-600 to-cyan-600 text-white overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">支持平台</h3>
                <div className="flex flex-wrap gap-3">
                  {digitalPlatforms.map((platform) => (
                    <Badge key={platform} variant="secondary" className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5 px-4 border-0">
                      {platform}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* IP Services */}
      <section id="ip" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-6 shadow-lg shadow-purple-500/20">
              <Shield className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">知识产权服务</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              知识产权全流程服务，保护企业创新成果，助力企业构建核心竞争壁垒
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Shield className="h-6 w-6 text-purple-600" />
                    服务内容
                  </h3>
                  <ul className="space-y-3">
                    {['知识产权战略规划', '专利申请与维护', '商标注册与管理', '著作权登记', '知识产权风险防控'].map((item) => (
                      <li key={item} className="text-gray-600 flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Target className="h-6 w-6 text-purple-600" />
                    服务价值
                  </h3>
                  <ul className="space-y-3">
                    {['保护企业核心技术', '构建竞争壁垒', '提升企业估值', '防范侵权风险', '助力高新技术企业认定'].map((item) => (
                      <li key={item} className="text-gray-600 flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:40px_40px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              选择适合您的服务
            </h2>
            <p className="text-indigo-100 text-lg mb-8">
              我们将根据您的企业现状和需求，提供定制化的解决方案
            </p>
            <Button asChild size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50 shadow-xl">
              <Link href="/contact">
                免费咨询
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
