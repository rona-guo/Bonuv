'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  Linkedin,
  ArrowRight
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // 这里可以添加表单提交逻辑
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-700" />
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:40px_40px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-0">
              联系我们
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              期待与您合作
            </h1>
            <p className="text-xl text-blue-100">
              让我们携手，助力企业创新发展
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500" />
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">发送咨询</h2>
                <p className="text-gray-600 mb-8">填写以下信息，我们将尽快与您联系</p>
                
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">提交成功！</h3>
                    <p className="text-gray-600">我们将尽快与您联系</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">姓名 *</label>
                        <Input
                          required
                          placeholder="请输入您的姓名"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">电话 *</label>
                        <Input
                          required
                          placeholder="请输入联系电话"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">邮箱</label>
                        <Input
                          type="email"
                          placeholder="请输入电子邮箱"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">公司名称</label>
                        <Input
                          placeholder="请输入公司名称"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">咨询服务</label>
                      <select
                        className="w-full h-10 rounded-md border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      >
                        <option value="">请选择咨询服务</option>
                        <option value="consulting">咨询服务</option>
                        <option value="talent">人才服务</option>
                        <option value="digital">数字化服务</option>
                        <option value="ip">知识产权服务</option>
                        <option value="other">其他</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">需求描述</label>
                      <Textarea
                        placeholder="请简要描述您的需求..."
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg shadow-blue-500/20 h-12"
                    >
                      提交咨询
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-0 shadow-xl overflow-hidden">
                <div className="h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500" />
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">联系方式</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 mb-1">电话</div>
                        <div className="text-gray-600">188-7222-2897</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 mb-1">邮箱</div>
                        <div className="text-gray-600">contact@bonuv.com</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 mb-1">地址</div>
                        <div className="text-gray-600">武汉市东湖新技术开发区长城园路8号光谷精工科技园</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
                        <Clock className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 mb-1">工作时间</div>
                        <div className="text-gray-600">周一至周五 9:00 - 18:00</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-600 to-cyan-600 text-white overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">快速响应</h3>
                  <p className="text-blue-100 mb-6 leading-relaxed">
                    我们承诺在收到您的咨询后24小时内给予回复，为您提供专业的服务建议
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-200" />
                      <span>免费初步诊断</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-200" />
                      <span>专属顾问对接</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-200" />
                      <span>定制化方案</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-[#0077B5] flex items-center justify-center shrink-0">
                      <Linkedin className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 mb-1">LinkedIn</div>
                      <div className="text-sm text-gray-600">关注我们，获取最新行业洞察</div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400" />
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
