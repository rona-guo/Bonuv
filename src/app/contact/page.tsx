'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  CheckCircle
} from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: '公司地址',
    content: '湖北省武汉市',
  },
  {
    icon: Mail,
    title: '电子邮箱',
    content: 'contact@bonu-huichuang.com',
  },
  {
    icon: Phone,
    title: '联系电话',
    content: '400-XXX-XXXX',
  },
  {
    icon: Clock,
    title: '工作时间',
    content: '周一至周五 9:00-18:00',
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // 模拟提交
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">联系我们</h1>
            <p className="text-xl text-blue-100">
              期待与您的合作，让我们一起推动企业创新发展
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>在线咨询</CardTitle>
                <CardDescription>
                  请填写以下信息，我们将尽快与您联系
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">提交成功</h3>
                    <p className="text-gray-600">感谢您的咨询，我们将尽快与您联系！</p>
                    <Button 
                      className="mt-6" 
                      variant="outline"
                      onClick={() => setSubmitted(false)}
                    >
                      继续咨询
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">姓名 *</Label>
                        <Input id="name" placeholder="请输入您的姓名" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">公司名称</Label>
                        <Input id="company" placeholder="请输入公司名称" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">联系电话 *</Label>
                        <Input id="phone" type="tel" placeholder="请输入联系电话" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">电子邮箱</Label>
                        <Input id="email" type="email" placeholder="请输入电子邮箱" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">咨询服务</Label>
                      <Input id="service" placeholder="请选择咨询类型（咨询/人才/数字化/知识产权）" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">咨询内容 *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="请详细描述您的需求..." 
                        rows={5}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={loading}>
                      {loading ? '提交中...' : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          提交咨询
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>联系方式</CardTitle>
                  <CardDescription>
                    您也可以通过以下方式直接联系我们
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                        <item.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{item.title}</h4>
                        <p className="text-gray-600">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
                <CardHeader>
                  <CardTitle className="text-white">为什么选择我们？</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-200" />
                    <span>专业团队，经验丰富</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-200" />
                    <span>定制方案，精准服务</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-200" />
                    <span>长期陪伴，共同成长</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-200" />
                    <span>结果导向，价值倍增</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>服务流程</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { step: '01', title: '需求沟通', desc: '了解企业现状与需求' },
                      { step: '02', title: '方案设计', desc: '制定定制化解决方案' },
                      { step: '03', title: '服务实施', desc: '专业团队落地执行' },
                      { step: '04', title: '效果评估', desc: '持续优化与改进' },
                    ].map((item, index) => (
                      <div key={item.step} className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold shrink-0">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
