import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Lightbulb, 
  Users, 
  Cpu, 
  Shield, 
  ArrowRight,
  Target,
  Building,
  Settings,
  UserCog,
  Factory,
  Monitor,
  FileCheck,
  UserPlus,
  ClipboardCheck,
  Award,
  GraduationCap,
  TrendingUp,
  Database,
  Smartphone,
  CheckCircle
} from 'lucide-react';

const consultingServices = [
  {
    icon: Target,
    title: '战略与商业模式咨询',
    description: '帮助企业明确战略方向，设计可持续的商业模式，构建核心竞争优势',
  },
  {
    icon: Building,
    title: '组织与流程优化咨询',
    description: '优化组织架构，梳理业务流程，提升组织运营效率',
  },
  {
    icon: UserCog,
    title: '人力资源管理咨询',
    description: '构建完善的人力资源管理体系，提升组织人才效能',
  },
  {
    icon: Factory,
    title: '精益生产管理咨询',
    description: '推行精益生产理念，消除浪费，提升生产效率',
  },
  {
    icon: Monitor,
    title: 'IT与数字化转型咨询',
    description: '制定数字化转型战略，选择合适的技术路径，推动业务创新',
  },
  {
    icon: FileCheck,
    title: '企业合规管理咨询',
    description: '构建合规管理体系，防范经营风险，确保企业稳健发展',
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
    items: ['绩效体系建设（KPI、BSC、OKR等）', '薪酬设计与优化', '高管薪酬', '股权激励', '人才保留/退出设计'],
  },
  {
    icon: GraduationCap,
    title: '学习与发展',
    items: ['学习项目设计与实施', '学习地图设计', '课程设计与开发', '导师制/师徒制建立', '培训体系建设'],
  },
];

const digitalFeatures = [
  { icon: Smartphone, title: '全场景', description: '覆盖企业所有业务场景' },
  { icon: Settings, title: '高定制', description: '灵活定制满足个性需求' },
  { icon: TrendingUp, title: '超灵活', description: '快速响应业务变化' },
  { icon: Database, title: '低成本', description: '降低信息化建设成本' },
  { icon: CheckCircle, title: '零依赖', description: '不依赖外部开发团队' },
  { icon: Shield, title: '数安全', description: '数据安全有保障' },
];

const digitalPlatforms = ['钉钉', '企业微信', '飞书', '微信服务号', '微信小程序', '浏览器'];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">服务内容</h1>
            <p className="text-xl text-blue-100">
              全方位企业创新服务解决方案，助力企业实现可持续发展
            </p>
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section id="consulting" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">01</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">咨询服务</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              长期陪伴企业成长，以企业价值效益倍增为目标，以服务结果为导向，提供企业发展所需要的资源管理、人才和资本等综合服务
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {consultingServices.map((service) => (
              <Card key={service.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">服务模式</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">1</span>
                  陪跑服务
                </h4>
                <p className="text-gray-600 text-sm">
                  派驻专家深入企业，长期服务，根据观察到企业经营管理中的实际问题，提出定制化服务方案，并协助落地实施。
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">2</span>
                  项目服务
                </h4>
                <p className="text-gray-600 text-sm">
                  调研诊断（产业、行业、顾客、内外部环境调研，分析企业发展遇到的问题和障碍及其根源）；方案设计（解决方案、落地路径、改善措施）；辅导落地。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Talent Services */}
      <section id="talent" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">02</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">人才服务</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              从人才建模、人才测评与盘点、人才激励、学习发展体系化解决企业面临的人才问题
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {talentServices.map((service) => (
              <Card key={service.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
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
      <section id="digital" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">03</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">数字化服务</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              还原企业战略，诊断数字化转型程度，模块化选择服务项目内容，低成本高质量建立数字化企业文化
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">服务理念</h3>
              <p className="text-gray-600 mb-6">
                将数字化转型能力还给企业，补齐能力短板，让企业以最低投入产出比，实现长期的以价值驱动和数字驱动的数字化转型，赋能业务，支撑战略。
              </p>
              <p className="text-gray-600">
                通过管理咨询、技术指导、技能培训和服务陪跑的组合式服务，梳理正确认知，掌握技巧方法，灵活利用低代码工具与其他技术工具，有效利用其他物联网设备，全面推进数字化战略融合。
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {digitalFeatures.map((feature) => (
                <div key={feature.title} className="bg-purple-50 rounded-xl p-6 text-center">
                  <feature.icon className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <h4 className="font-bold text-gray-900">{feature.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">支持平台</h3>
              <div className="flex flex-wrap gap-3">
                {digitalPlatforms.map((platform) => (
                  <Badge key={platform} variant="secondary" className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">
                    {platform}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IP Services */}
      <section id="ip" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">04</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">知识产权服务</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              知识产权全流程服务，保护企业创新成果，助力企业构建核心竞争壁垒
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Shield className="h-6 w-6 text-orange-600" />
                    服务内容
                  </h3>
                  <ul className="space-y-3">
                    <li className="text-gray-600 flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                      知识产权战略规划
                    </li>
                    <li className="text-gray-600 flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                      专利申请与维护
                    </li>
                    <li className="text-gray-600 flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                      商标注册与管理
                    </li>
                    <li className="text-gray-600 flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                      著作权登记
                    </li>
                    <li className="text-gray-600 flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                      知识产权风险防控
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Target className="h-6 w-6 text-orange-600" />
                    服务价值
                  </h3>
                  <ul className="space-y-3">
                    <li className="text-gray-600 flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                      保护企业核心技术
                    </li>
                    <li className="text-gray-600 flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                      构建竞争壁垒
                    </li>
                    <li className="text-gray-600 flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                      提升企业估值
                    </li>
                    <li className="text-gray-600 flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                      防范侵权风险
                    </li>
                    <li className="text-gray-600 flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                      助力高新技术企业认定
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">选择适合您的服务</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            我们将根据您的企业现状和需求，提供定制化的解决方案
          </p>
          <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
            <Link href="/contact">
              免费咨询
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
