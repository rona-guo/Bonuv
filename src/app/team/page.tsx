import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Briefcase, GraduationCap, Users } from 'lucide-react';

const teamMembers = [
  {
    name: '祝艳波',
    title: '战略与商业模式咨询师',
    avatar: '祝',
    color: 'from-blue-500 to-indigo-600',
    highlights: [
      '10+年管理咨询经验',
      '20+年人力资源管理领域经验',
      '7+年知识创新认知方法论研究',
      '企业管理咨询顾问',
    ],
    tags: ['战略规划', '商业模式', '人力资源'],
  },
  {
    name: '刘春明',
    title: '高级人力资源咨询师',
    avatar: '刘',
    color: 'from-green-500 to-teal-600',
    highlights: [
      '前500强HRD',
      '长江人力资源学堂特邀讲师',
      '湖北省人力资源经理协会培训专委会委员',
      '湖北咨询师联盟特聘专家',
    ],
    tags: ['人力资源', '组织发展', '培训体系'],
  },
  {
    name: '王爽',
    title: '人才评鉴与盘点咨询师',
    avatar: '王',
    color: 'from-purple-500 to-pink-600',
    highlights: [
      '11年华为工作经验',
      '华为人力资源专家',
      '心理咨询师',
      '人才测评专家',
    ],
    tags: ['人才测评', '华为经验', '心理咨询'],
  },
  {
    name: '郭润娜',
    title: '人力资源管理顾问',
    avatar: '郭',
    color: 'from-orange-500 to-red-600',
    highlights: [
      '20+企业经营管理经验',
      '高新企业HRD',
      '人力资源管理师',
      '人才管理专家',
    ],
    tags: ['人力资源管理', '企业管理', '人才发展'],
  },
  {
    name: '周子濠',
    title: '数字化转型专家',
    avatar: '周',
    color: 'from-cyan-500 to-blue-600',
    highlights: [
      '外企科技公司技术总监',
      '8+企业数字化转型经验',
      '15年软件研发及团队管理',
      'PMP项目经理',
    ],
    tags: ['数字化转型', '技术管理', '敏捷开发'],
  },
];

export default function TeamPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">核心团队</h1>
            <p className="text-xl text-blue-100">
              经验丰富的行业专家，为客户打造持续创新能力和高效运营体系
            </p>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Users className="h-8 w-8 mx-auto mb-3 text-blue-600" />
              <div className="text-3xl font-bold text-gray-900">5+</div>
              <div className="text-sm text-gray-600">核心顾问</div>
            </div>
            <div className="text-center">
              <Briefcase className="h-8 w-8 mx-auto mb-3 text-blue-600" />
              <div className="text-3xl font-bold text-gray-900">100+</div>
              <div className="text-sm text-gray-600">服务企业</div>
            </div>
            <div className="text-center">
              <GraduationCap className="h-8 w-8 mx-auto mb-3 text-blue-600" />
              <div className="text-3xl font-bold text-gray-900">20+</div>
              <div className="text-sm text-gray-600">平均行业经验（年）</div>
            </div>
            <div className="text-center">
              <Award className="h-8 w-8 mx-auto mb-3 text-blue-600" />
              <div className="text-3xl font-bold text-gray-900">500+</div>
              <div className="text-sm text-gray-600">成功案例</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid gap-8">
              {teamMembers.map((member, index) => (
                <Card key={member.name} className="overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${member.color}`} />
                  <CardHeader className="flex flex-row items-start gap-6 pb-2">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-2xl font-bold shrink-0`}>
                      {member.avatar}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl">{member.name}</CardTitle>
                      <CardDescription className="text-blue-600 font-medium mt-1">
                        {member.title}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {member.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {member.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-600">
                          <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${member.color}`} />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">为什么选择我们</h2>
            <p className="text-gray-600 text-lg">专业团队，护航企业成长</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">专业背景</h3>
              <p className="text-gray-600">
                团队成员来自华为、500强企业等知名企业，具备丰富的实战经验
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">跨界融合</h3>
              <p className="text-gray-600">
                涵盖战略、人力、技术、知识产权等多领域专家，提供全方位服务
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">持续学习</h3>
              <p className="text-gray-600">
                团队持续研究新方法论、新技术，保持专业领先优势
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
