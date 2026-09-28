import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: {
    default: '博诺辉创 - 企业创新支撑服务商',
    template: '%s | 博诺辉创',
  },
  description:
    '武汉博诺辉创企业管理有限公司是一家专注于为企业创新过程和创新企业提供全方位管理咨询服务的专业机构。提供管理咨询、人才服务、数字化转型、知识产权全流程服务。',
  keywords: [
    '博诺辉创',
    '管理咨询',
    '企业创新',
    '人才服务',
    '数字化转型',
    '知识产权',
    '武汉',
    '企业管理',
    '人力资源咨询',
    '组织优化',
  ],
  authors: [{ name: '武汉博诺辉创企业管理有限公司' }],
  generator: 'Coze Code',
  openGraph: {
    title: '博诺辉创 - 企业创新支撑服务商',
    description:
      '专注于为企业创新过程和创新企业提供全方位管理咨询服务，助力企业实现可持续发展。',
    locale: 'zh_CN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.COZE_PROJECT_ENV === 'DEV';

  return (
    <html lang="zh-CN">
      <body className={`antialiased`}>
        {isDev && <Inspector />}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
