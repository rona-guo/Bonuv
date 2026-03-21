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
  ArrowRight,
  Rocket,
  Sparkles,
  Shield,
  Zap
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
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

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
              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
              联系我们
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              期待与您
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                携手合作
              </span>
            </h1>
            <p className="text-xl text-slate-400">
              让我们携手，助力企业创新发展
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="border-0 shadow-2xl overflow-hidden">
              <div className="h-1.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-violet-500" />
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">发送咨询</h2>
                <p className="text-gray-600 mb-8">填写以下信息，我们将尽快与您联系</p>
                
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">提交成功！</h3>
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
                          className="h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">电话 *</label>
                        <Input
                          required
                          placeholder="请输入联系电话"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
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
                          className="h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">公司名称</label>
                        <Input
                          placeholder="请输入公司名称"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">咨询服务</label>
                      <select
                        className="w-full h-12 rounded-xl border border-slate-200 px-4 text-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
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
                        className="border-slate-200 focus:border-blue-500 focus:ring-blue-500 resize-none rounded-xl"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-lg shadow-blue-500/25 h-14 rounded-xl text-base font-medium"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      提交咨询
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* 联系方式 */}
              <Card className="border-0 shadow-2xl overflow-hidden">
                <div className="h-1.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-violet-500" />
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">联系方式</h2>
                  
                  <div className="space-y-6">
                    {[
                      { icon: Phone, label: '电话', value: '188-7222-2897', gradient: 'from-blue-500 to-cyan-500' },
                      { icon: Mail, label: '邮箱', value: 'contact@bonuv.com', gradient: 'from-cyan-500 to-teal-500' },
                      { icon: MapPin, label: '地址', value: '武汉市东湖新技术开发区长城园路8号光谷精工科技园', gradient: 'from-violet-500 to-purple-500' },
                      { icon: Clock, label: '工作时间', value: '周一至周五 9:00 - 18:00', gradient: 'from-blue-600 to-indigo-500' },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shrink-0 shadow-lg`}
                          style={{ boxShadow: `0 8px 30px ${item.gradient.includes('blue') ? 'rgba(59, 130, 246, 0.2)' : item.gradient.includes('cyan') ? 'rgba(6, 182, 212, 0.2)' : 'rgba(139, 92, 246, 0.2)'}` }}
                        >
                          <item.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 mb-1">{item.label}</div>
                          <div className="text-gray-600">{item.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* 快速响应 */}
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-blue-600 to-cyan-600 text-white overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">快速响应承诺</h3>
                  <p className="text-blue-100 mb-6 leading-relaxed">
                    我们承诺在收到您的咨询后24小时内给予回复，为您提供专业的服务建议
                  </p>
                  <div className="space-y-3">
                    {[
                      { icon: CheckCircle, text: '免费初步诊断' },
                      { icon: CheckCircle, text: '专属顾问对接' },
                      { icon: CheckCircle, text: '定制化方案' },
                    ].map((item) => (
                      <div key={item.text} className="flex items-center gap-3">
                        <item.icon className="h-5 w-5 text-cyan-200" />
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* 服务优势 */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Zap, label: '快速响应', desc: '24小时内回复' },
                  { icon: Shield, label: '专业团队', desc: '资深顾问' },
                  { icon: Rocket, label: '定制方案', desc: '量身打造' },
                ].map((item) => (
                  <Card key={item.label} className="border-0 bg-white shadow-lg text-center p-4">
                    <item.icon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="font-bold text-gray-900 text-sm">{item.label}</div>
                    <div className="text-xs text-slate-500 mt-1">{item.desc}</div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
