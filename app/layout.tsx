
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://am-knowledge-site4.vercel.app"),
  title: {
    default: "AM Alpha Lab — 资产管理人的知识与工具台",
    template: "%s | AM Alpha Lab"
  },
  description:
    "资产管理知识付费平台：资产配置、指数增强、多因子与滚动训练、风控与业绩归因。课程+模板+代码，帮你从“会看”到“能做”。",
  keywords: [
    "资产管理","指数增强","多因子","量化投资","资产配置","风控","回测","滚动训练","BigQuant","Python"
  ],
  openGraph: {
    title: "AM Alpha Lab — 资产管理人的知识与工具台",
    description:
      "课程 · 研究 · 模板 · 代码。资产配置、指数增强、风控实战，帮你从0到1落地投研流程。",
    url: "https://am-knowledge-site4.vercel.app",
    siteName: "AM Alpha Lab",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AM Alpha Lab — 资产管理人的知识与工具台",
    description:
      "课程 · 研究 · 模板 · 代码。资产配置、指数增强、风控实战，帮你从0到1落地投研流程。",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
