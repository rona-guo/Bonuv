import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building2, CheckCircle, ArrowRight, Star, Quote } from 'lucide-react';

const cases = [
  {
    category: '咨询服务',
    color: 'from-amber-500 to-orange-500',
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
    color: 'from-emerald-500 to-teal-500',
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
    color: 'from-blue-500 to-cyan-500',
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
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700" />
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:40px_40px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-0">
              服务案例
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              深受客户信赖
            </h1>
            <p className="text-xl text-indigo-100">
              覆盖多个行业领域，见证企业成长与蜕变
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                50+
              </div>
              <div className="text-sm text-gray-600 mt-1">服务企业</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                100+
              </div>
              <div className="text-sm text-gray-600 mt-1">成功项目</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                98%
              </div>
              <div className="text-sm text-gray-600 mt-1">客户满意度</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases by Category */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-16">
            {cases.map((category) => (
              <div key={category.category}>
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{category.category}</h2>
                    <p className="text-gray-600">{category.clients.length} 家客户</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.clients.map((client) => (
                    <Card 
                      key={client.name} 
                      className={`hover:shadow-lg transition-all duration-300 border-0 overflow-hidden ${
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
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">客户评价</h2>
            <p className="text-gray-600 text-lg">听听客户怎么说</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((item, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500" />
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-indigo-200 mb-4" />
                  <p className="text-gray-600 leading-relaxed mb-6">{item.content}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">{item.company}</span>
                    <Badge variant="secondary" className="bg-indigo-50 text-indigo-600 border-0">
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
      <section className="py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">成为下一个成功案例</h2>
          <p className="text-indigo-100 text-lg mb-8 max-w-xl mx-auto">
            预约免费诊断，开启您的企业创新之旅
          </p>
          <Button asChild size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50 shadow-xl">
            <Link href="/contact">
              立即咨询
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
