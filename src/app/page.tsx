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
  Building2,
  Target,
  Award,
  TrendingUp
} from 'lucide-react';

const services = [
  {
    icon: Lightbulb,
    title: '咨询服务',
    description: '战略与商业模式咨询、组织与流程优化、人力资源管理咨询、精益生产管理咨询、IT与数字化转型咨询、企业合规管理咨询',
    href: '/services#consulting',
  },
  {
    icon: Users,
    title: '人才服务',
    description: '人才建模、人才测评与盘点、人才激励、学习发展体系，从人才战略到人才落地的全流程服务',
    href: '/services#talent',
  },
  {
    icon: Cpu,
    title: '数字化服务',
    description: '还原企业战略，诊断数字化转型程度，低成本高质量建立数字化企业文化，赋能业务、支撑战略',
    href: '/services#digital',
  },
  {
    icon: Shield,
    title: '知识产权',
    description: '知识产权全流程服务，保护企业创新成果，助力企业构建核心竞争壁垒',
    href: '/services#ip',
  },
];

const teamMembers = [
  {
    name: '祝艳波',
    title: '战略与商业模式咨询师',
    highlights: ['20+年人力资源管理领域经验', '7+年知识创新认知方法论研究', '企业管理咨询顾问'],
  },
  {
    name: '刘春明',
    title: '高级人力资源咨询师',
    highlights: ['前500强HRD', '长江人力资源学堂特邀讲师', '湖北省人力资源经理协会培训专委会委员'],
  },
  {
    name: '王爽',
    title: '人才评鉴与盘点咨询师',
    highlights: ['11年华为工作经验', '华为人力资源专家', '心理咨询师'],
  },
  {
    name: '郭润娜',
    title: '人力资源管理顾问',
    highlights: ['20+企业经营管理经验', '高新企业HRD', '人力资源管理师'],
  },
  {
    name: '周子濠',
    title: '数字化转型专家',
    highlights: ['外企科技公司技术总监', '8+企业数字化转型经验', 'PMP项目经理'],
  },
];

const cases = [
  { name: '中国建筑第四工程局有限公司', category: '咨询' },
  { name: '中国船舶集团有限公司第七〇一研究所', category: '咨询' },
  { name: '美宜佳便利店有限公司', category: '人才服务' },
  { name: '汉堡王', category: '人才服务' },
  { name: '中国石油湖北销售公司', category: '数字化' },
  { name: '江苏万洋投资集团', category: '咨询' },
];

const values = [
  { icon: Target, label: '专心', description: '专注企业创新服务' },
  { icon: Award, label: '专注', description: '深耕管理咨询领域' },
  { icon: TrendingUp, label: '专业', description: '专家团队护航成长' },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="container mx-auto px-4 py-24 lg:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white hover:bg-white/30">
              企业创新支撑服务商
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              武汉博诺辉创
              <br />
              企业管理有限公司
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              专注于为企业创新过程和创新企业提供全方位管理咨询服务，打造持续创新能力和高效运营体系，助力企业实现可持续发展
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                <Link href="/services">
                  了解服务内容
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                <Link href="/contact">立即咨询</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            {values.map((value) => (
              <div key={value.label} className="text-center">
                <value.icon className="h-8 w-8 mx-auto mb-3 text-blue-600" />
                <h3 className="text-lg font-bold text-gray-900">{value.label}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">关于我们</h2>
              <p className="text-gray-600 text-lg">深耕企业创新服务，赋能企业持续成长</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                武汉博诺辉创企业管理有限公司是一家专注于为企业创新过程和创新企业提供全方位管理咨询服务的专业机构。公司系统关注客户创新战略规划、创新组织建设、创新人才管理、创新成果转化四个方面，为企业提供管理咨询、组织优化、流程优化服务，人才测评、管理、培训服务，数字化转型服务，知识产权全流程服务等。
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                我们的团队由经验丰富的行业专家、管理顾问、人力资源专家和知识产权专家组成，具备深厚的专业知识和丰富的实践经验，为客户打造持续的创新能力和高效的运营体系，助力企业在激烈的市场竞争中脱颖而出，实现可持续发展。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">核心服务</h2>
            <p className="text-gray-600 text-lg">全方位企业创新服务解决方案</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map((service) => (
              <Card key={service.title} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                    <service.icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {service.description}
                  </CardDescription>
                  <Link 
                    href={service.href}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center"
                  >
                    了解详情
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">核心团队</h2>
            <p className="text-gray-600 text-lg">专业团队，护航企业成长</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center">
                <CardHeader className="pb-2">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 mx-auto flex items-center justify-center text-white text-xl font-bold mb-3">
                    {member.name.charAt(0)}
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <p className="text-sm text-blue-600 font-medium">{member.title}</p>
                </CardHeader>
                <CardContent>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {member.highlights.slice(0, 2).map((h, i) => (
                      <li key={i} className="truncate">{h}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/team">
                查看完整团队
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">服务案例</h2>
            <p className="text-gray-600 text-lg">深受客户信赖，见证企业成长</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {cases.map((item) => (
              <div 
                key={item.name}
                className="bg-white rounded-lg p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <Building2 className="h-10 w-10 text-blue-600 shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">{item.name}</p>
                  <Badge variant="secondary" className="mt-1">{item.category}</Badge>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/cases">
                查看更多案例
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">开启企业创新之旅</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            无论您是初创企业还是成熟企业，我们都能为您提供专业的管理咨询服务，助力企业实现跨越式发展
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              <Link href="/contact">免费咨询</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              <Link href="/services">了解服务</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">博诺辉创</h3>
              <p className="text-sm">企业创新支撑服务商，专注于为企业创新过程和创新企业提供全方位管理咨询服务。</p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">服务内容</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services#consulting" className="hover:text-white transition-colors">咨询服务</Link></li>
                <li><Link href="/services#talent" className="hover:text-white transition-colors">人才服务</Link></li>
                <li><Link href="/services#digital" className="hover:text-white transition-colors">数字化服务</Link></li>
                <li><Link href="/services#ip" className="hover:text-white transition-colors">知识产权</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">快速链接</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/team" className="hover:text-white transition-colors">核心团队</Link></li>
                <li><Link href="/cases" className="hover:text-white transition-colors">服务案例</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">联系我们</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">联系方式</h4>
              <ul className="space-y-2 text-sm">
                <li>地址：湖北省武汉市</li>
                <li>邮箱：contact@bonu-huichuang.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>© {new Date().getFullYear()} 武汉博诺辉创企业管理有限公司 版权所有</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
