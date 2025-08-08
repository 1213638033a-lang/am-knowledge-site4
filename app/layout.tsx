
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AM Alpha Lab — Asset Management Knowledge",
  description: "资产管理知识付费站点：资产配置、指数增强、量化实战、风控体系。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
