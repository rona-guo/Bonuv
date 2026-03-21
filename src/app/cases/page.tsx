import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building2, CheckCircle, ArrowRight, Star, Quote, Rocket, Award, TrendingUp } from 'lucide-react';

const cases = [
  {
    category: '咨询服务',
    gradient: 'from-blue-500 to-cyan-500',
    clients: [
      { name: '中国建筑第四工程局有限公司', highlight: true },
      { name: '中国船舶集团有限公司第七〇一研究所', highlight: true },
      { name: '天津泰达水业集团有限公司' },
      { name: '汉阳控股' },
      { name: '江苏万洋投资集团' },
      { name: '江苏永泰建造工程有限公司' },
    ],
  },
  {
    category: '人才服务',
    gradient: 'from-cyan-500 to-teal-500',
    clients: [
      { name: '美宜佳便利店有限公司', highlight: true },
      { name: '汉堡王', highlight: true },
      { name: '江苏吴江汉塔纺织整理有限公司' },
      { name: '木兰汇女性俱乐部' },
      { name: '新洲区人才服务（易创智谷产业园）站' },
      { name: '海南铭乐酒店管理有限公司' },
      { name: '曼纽科健康产业（广东）有限公司' },
      { name: '湖北腾飞人才管理顾问有限公司' },
      { name: '湖北中盛国宏人力资源管理公司' },
      { name: '无锡瑞星人力资源管理有限公司' },
    ],
  },
  {
    category: '数字化服务',
    gradient: 'from-violet-500 to-purple-500',
    clients: [
      { name: '中国石油湖北销售公司', highlight: true },
      { name: '三峡机场出入境边防检查站', highlight: true },
      { name: '江苏泰州姜堰区罗塘街道' },
      { name: '湖北融智商业模式创新研究院' },
      { name: '武汉红星杨科技有限公司' },
      { name: '巨立电梯股份有限公司' },
      { name: '武汉静磁栅机电制造有限公司' },
      { name: '武汉汉阳区民政局' },
    ],
  },
];

const testimonials = [
  {
    content: '博诺辉创团队专业、敬业，为我们提供了切实可行的解决方案，帮助企业实现了管理效率的显著提升。',
    company: '某央企分公司',
    service: '咨询服务',
  },
  {
    content: '通过人才盘点和梯队建设服务，我们的人才储备更加充足，组织活力明显增强，人才流失率大幅下降。',
    company: '某连锁零售企业',
    service: '人才服务',
  },
  {
    content: '数字化转型的成本比预期低很多，但效果却超出了预期，真正实现了降本增效的目标。',
    company: '某制造企业',
    service: '数字化服务',
  },
];

export default function CasesPage() {
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
              <Award className="w-3.5 h-3.5 mr-1.5" />
              服务案例
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              深受客户
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                信赖之选
              </span>
            </h1>
            <p className="text-xl text-slate-400">
              覆盖多个行业领域，见证企业成长与蜕变
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
            {[
              { value: '50+', label: '服务企业' },
              { value: '100+', label: '成功项目' },
              { value: '98%', label: '客户满意度' },
            ].map((stat) => (
              <div key={stat.label} className="group">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform inline-block">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases by Category */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto space-y-16">
            {cases.map((category) => (
              <div key={category.category}>
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg`}
                    style={{ boxShadow: `0 10px 40px ${category.gradient.includes('blue') ? 'rgba(59, 130, 246, 0.25)' : category.gradient.includes('cyan') ? 'rgba(6, 182, 212, 0.25)' : 'rgba(139, 92, 246, 0.25)'}` }}
                  >
                    <Building2 className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{category.category}</h2>
                    <p className="text-slate-500">{category.clients.length} 家客户</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.clients.map((client) => (
                    <Card 
                      key={client.name} 
                      className={`card-hover border-0 overflow-hidden ${
                        client.highlight ? 'bg-white shadow-md' : 'bg-white/80'
                      }`}
                    >
                      <CardContent className="p-4 flex items-center gap-3">
                        {client.highlight && (
                          <Star className="h-4 w-4 text-amber-500 shrink-0" />
                        )}
                        <span className={`text-gray-900 ${client.highlight ? 'font-medium' : ''}`}>
                          {client.name}
                        </span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700 border-0">
              客户评价
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">听听客户怎么说</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((item, index) => (
              <Card key={index} className="group card-hover border-0 shadow-xl overflow-hidden">
                <div className="h-1.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-violet-500" />
                <CardContent className="p-6">
                  <Quote className="h-10 w-10 text-blue-200 mb-4" />
                  <p className="text-gray-600 leading-relaxed mb-6">{item.content}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">{item.company}</span>
                    <Badge variant="secondary" className="bg-blue-50 text-blue-600 border-0">
                      {item.service}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        {/* 背景效果 */}
        <div className="absolute inset-0 tech-grid-dark opacity-40" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">成为下一个成功案例</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            预约免费诊断，开启您的企业创新之旅
          </p>
          <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100 shadow-xl h-14 px-8 text-base font-medium rounded-xl">
            <Link href="/contact">
              <Rocket className="mr-2 h-5 w-5" />
              立即咨询
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
