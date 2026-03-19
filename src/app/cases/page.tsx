import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, CheckCircle } from 'lucide-react';

const cases = [
  {
    category: '咨询服务',
    color: 'blue',
    clients: [
      '中国建筑第四工程局有限公司',
      '中国船舶集团有限公司第七〇一研究所',
      '天津泰达水业集团有限公司',
      '汉阳控股',
      '江苏万洋投资集团',
      '江苏永泰建造工程有限公司',
    ],
  },
  {
    category: '人才服务',
    color: 'green',
    clients: [
      '江苏吴江汉塔纺织整理有限公司',
      '木兰汇女性俱乐部',
      '美宜佳便利店有限公司',
      '汉堡王',
      '新洲区人才服务（易创智谷产业园）站',
      '海南铭乐酒店管理有限公司',
      '曼纽科健康产业（广东）有限公司',
      '湖北腾飞人才管理顾问有限公司',
      '湖北中盛国宏人力资源管理公司',
      '无锡瑞星人力资源管理有限公司',
    ],
  },
  {
    category: '数字化服务',
    color: 'purple',
    clients: [
      '中国石油湖北销售公司',
      '三峡机场出入境边防检查站',
      '江苏泰州姜堰区罗塘街道',
      '湖北融智商业模式创新研究院',
      '武汉红星杨科技有限公司',
      '巨立电梯股份有限公司',
      '武汉静磁栅机电制造有限公司',
      '武汉汉阳区民政局',
    ],
  },
];

const colorMap: Record<string, { bg: string; text: string; badge: string }> = {
  blue: { bg: 'bg-blue-100', text: 'text-blue-600', badge: 'bg-blue-50 text-blue-700' },
  green: { bg: 'bg-green-100', text: 'text-green-600', badge: 'bg-green-50 text-green-700' },
  purple: { bg: 'bg-purple-100', text: 'text-purple-600', badge: 'bg-purple-50 text-purple-700' },
};

export default function CasesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">服务案例</h1>
            <p className="text-xl text-blue-100">
              深受客户信赖，见证企业成长
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-gray-900">50+</div>
              <div className="text-sm text-gray-600 mt-1">服务企业</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900">100+</div>
              <div className="text-sm text-gray-600 mt-1">成功项目</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900">98%</div>
              <div className="text-sm text-gray-600 mt-1">客户满意度</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases by Category */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-16">
            {cases.map((category) => (
              <div key={category.category}>
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 rounded-xl ${colorMap[category.color].bg} flex items-center justify-center`}>
                    <Building2 className={`h-6 w-6 ${colorMap[category.color].text}`} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{category.category}</h2>
                    <p className="text-gray-600">{category.clients.length} 家客户</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.clients.map((client) => (
                    <Card key={client} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4 flex items-center gap-3">
                        <CheckCircle className={`h-5 w-5 ${colorMap[category.color].text} shrink-0`} />
                        <span className="text-gray-900 font-medium">{client}</span>
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">客户评价</h2>
            <p className="text-gray-600 text-lg">听听客户怎么说</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">某央企分公司</CardTitle>
                <CardDescription>咨询服务</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic">
                  "博诺辉创团队专业、敬业，为我们提供了切实可行的解决方案，帮助企业实现了管理效率的显著提升。"
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">某连锁零售企业</CardTitle>
                <CardDescription>人才服务</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic">
                  "通过人才盘点和梯队建设服务，我们的人才储备更加充足，组织活力明显增强。"
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">某制造企业</CardTitle>
                <CardDescription>数字化服务</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic">
                  "数字化转型的成本比预期低很多，但效果却超出了预期，真正实现了降本增效。"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
