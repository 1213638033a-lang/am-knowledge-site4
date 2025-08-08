'use client';

import { useState } from "react";
import { ArrowRight, BookOpen, Brain, LineChart, CreditCard, Shield, Users, Mail, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Page() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const features = [
    { icon: <LineChart className="w-6 h-6" />, title: "资产配置", desc: "股债/商品/另类多资产配置框架与回测模板。" },
    { icon: <Brain className="w-6 h-6" />, title: "量化研究", desc: "多因子、滚动训练、风格暴露、风险模型与实盘细节。" },
    { icon: <BookOpen className="w-6 h-6" />, title: "系统课程", desc: "从 0 到 1 资产管理课程 + 进阶实战营。" },
    { icon: <Shield className="w-6 h-6" />, title: "风险管理", desc: "回撤控制、止损体系、业绩归因与风控工具箱。" },
  ];

  const plans = [
    {
      name: "入门会员",
      price: "¥29/月",
      tag: "适合自学",
      points: ["精选文章与周报", "基础工具下载（Excel 模板）", "会员社群旁听"]
    },
    {
      name: "专业会员",
      price: "¥199/月",
      tag: "最受欢迎",
      highlight: true,
      points: ["全部会员文章 + 课程节选", "模型/回测代码示例（Python/BigQuant）", "策略复盘直播与问答", "策略模板与报告模版"]
    },
    {
      name: "机构席位",
      price: "¥ 询价",
      tag: "团队/机构",
      points: ["私享课 & 内训（可定制）", "投研流程落地顾问", "风控体系搭建/审阅", "数据与工程化支持"]
    }
  ];

  const courses = [
    { title: "资产配置 101：从 CAPM 到 Black-Litterman", level: "基础", duration: "4h", badge: "新课" },
    { title: "多因子框架与滚动训练：从回测到上线", level: "进阶", duration: "6h", badge: "热卖" },
    { title: "指数增强实战：风格暴露与风险预算", level: "进阶", duration: "5h" }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-30 w-full border-b bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-black" />
            <span className="font-semibold">AM Alpha Lab</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:opacity-70">能力</a>
            <a href="#courses" className="hover:opacity-70">课程</a>
            <a href="#pricing" className="hover:opacity-70">会员</a>
            <a href="#newsletter" className="hover:opacity-70">订阅</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden md:inline-flex">登录</Button>
            <Button>
              立即加入
              <ArrowRight className="ml-1 w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
              <Users className="w-3.5 h-3.5" />
              面向资产管理人的知识与工具
            </div>
            <h1 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">
              打造你的 <span className="underline decoration-2 decoration-black">资产管理</span> 知识库与实战工具台
            </h1>
            <p className="mt-4 text-gray-600 md:text-lg">
              专注资产配置、指数增强与量化实战。提供课程、研究、模板、代码与案例，帮你缩短从“会看”到“能做”的距离。
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button className="h-11 px-5">免费试读</Button>
              <Button variant="outline" className="h-11 px-5">查看课程大纲</Button>
            </div>
            <div className="mt-6 flex items-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4"/>7 天不满意可退</div>
              <div className="flex items-center gap-1"><Shield className="w-4 h-4"/>合规与风控导向</div>
              <div className="flex items-center gap-1"><CreditCard className="w-4 h-4"/>支持企业采购</div>
            </div>
          </div>
          <div>
            <Card className="rounded-2xl shadow-sm">
              <CardHeader>
                <CardTitle>免费领取 · 资产配置入门清单（PDF）</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">输入邮箱，获取 15 页入门清单与 3 个可复用模板（再平衡/目标风险/绩效归因）。</p>
                <div className="mt-4 flex gap-2">
                  <Input type="email" value={email} onChange={(e:any)=>setEmail(e.target.value)} placeholder="你的邮箱" />
                  <Button onClick={()=>setSubmitted(true)} className="whitespace-nowrap">立即获取</Button>
                </div>
                {submitted && (
                  <p className="mt-3 text-sm text-green-600 flex items-center gap-2"><Mail className="w-4 h-4"/> 已提交。我们会把下载链接发送到：{email || "你的邮箱"}</p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="features" className="border-t">
        <div className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-4 gap-6">
          {features.map((f, i)=> (
            <Card key={i} className="rounded-2xl">
              <CardHeader className="space-y-2">
                <div className="w-10 h-10 rounded-xl border flex items-center justify-center">{f.icon}</div>
                <CardTitle className="text-base">{f.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-600">{f.desc}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="courses" className="border-t bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl md:text-3xl font-semibold">课程与专题</h2>
            <Button variant="ghost" className="gap-1">查看全部<ArrowRight className="w-4 h-4"/></Button>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {courses.map((c, i)=> (
              <Card key={i} className="rounded-2xl hover:shadow-md transition">
                <CardHeader className="space-y-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    {c.title}
                    {c.badge && <span className="ml-1 text-xs rounded-full border px-2 py-0.5">{c.badge}</span>}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-600 flex items-center justify-between">
                  <div>难度：{c.level}</div>
                  <div>时长：{c.duration}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="border-t">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-semibold">会员与服务</h2>
          <p className="mt-2 text-gray-600">先免费订阅，认可后再升级。团队/机构可开票并签订合规条款。</p>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {plans.map((p, i)=> (
              <Card key={i} className={`rounded-2xl ${p.highlight? 'border-2 border-black' : ''}`}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{p.name}</span>
                    <span className="text-sm text-gray-500">{p.tag}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-semibold">{p.price}</div>
                  <ul className="mt-4 space-y-2 text-sm text-gray-700">
                    {p.points.map((pt, j)=> (
                      <li key={j} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5"/>{pt}</li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6">选择 {p.name}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="newsletter" className="border-t bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">订阅《AM Alpha 周报》</h3>
            <p className="mt-2 text-gray-600">每周一封：一张图看市场、一个主题拆解、一个可复用模板。无废话、高信噪比。</p>
            <div className="mt-4 flex gap-2 max-w-lg">
              <Input placeholder="你的邮箱" />
              <Button>订阅</Button>
            </div>
          </div>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>给我们留言</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Input placeholder="你的称呼" />
                <Textarea placeholder="你想学/想解决什么？(例：指数增强回撤压制、滚动训练窗口怎么设、投研流程搭建...)" />
                <Button className="w-full">发送</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-4 gap-6 text-sm">
          <div className="space-y-2">
            <div className="font-semibold">AM Alpha Lab</div>
            <p className="text-gray-600">资产管理人的知识与工具。内容仅作教学参考，不构成投资建议。</p>
          </div>
          <div>
            <div className="font-semibold">导航</div>
            <ul className="mt-2 space-y-1 text-gray-600">
              <li><a href="#features">能力</a></li>
              <li><a href="#courses">课程</a></li>
              <li><a href="#pricing">会员</a></li>
              <li><a href="#newsletter">订阅</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">法律</div>
            <ul className="mt-2 space-y-1 text-gray-600">
              <li>使用条款</li>
              <li>隐私政策</li>
              <li>风险披露</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">联系</div>
            <ul className="mt-2 space-y-1 text-gray-600">
              <li>contact@amalpha.co</li>
              <li>商务合作</li>
            </ul>
          </div>
        </div>
        <div className="border-t py-6 text-center text-xs text-gray-500">© {new Date().getFullYear()} AM Alpha Lab. All rights reserved.</div>
      </footer>
    </div>
  );
}