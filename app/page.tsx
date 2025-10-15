import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Star,
  Users,
  BarChart3,
  Zap,
  Shield,
  FileText,
  PieChart,
  Smartphone,
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B0F19] text-white">
      {/* Header */}
      <header className="border-b border-gray-800 sticky top-0 z-40 bg-[#0B0F19]">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-400 to-teal-400"></div>
            <span>PrioxiFi</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors">
              Features
            </Link>
            <Link href="#solutions" className="text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors">
              Solutions
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors">
              Pricing
            </Link>
            <Link href="#contact" className="text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors">
              Log in
            </Link>
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-black font-medium">Request Demo</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="container relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <div className="flex flex-col gap-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 rounded-full bg-cyan-900/30 px-4 py-1.5 text-sm font-medium text-cyan-400 mx-auto lg:mx-0 w-fit">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                  </span>
                  FCA & GDPR Compliant
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Transform Your <span className="text-cyan-400">Financial Advisory</span> Practice
                </h1>
                <p className="text-lg text-gray-400 max-w-xl mx-auto lg:mx-0">
                  PrioxiFi helps financial advisory firms within the Openwork network automate payruns, manage
                  commissions, track client pipelines, and ensure compliance with powerful tools designed specifically
                  for principals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-black font-medium">
                    Request Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-gray-700 hover:bg-gray-800">
                    Talk to Sales
                  </Button>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-400">
                  <div className="flex -space-x-2">
                    <img
                      src="/professional-headshot-person-1.png"
                      alt="User"
                      className="h-8 w-8 rounded-full border-2 border-[#0B0F19]"
                    />
                    <img
                      src="/professional-headshot-person-2.png"
                      alt="User"
                      className="h-8 w-8 rounded-full border-2 border-[#0B0F19]"
                    />
                    <img
                      src="/professional-headshot-person-3.png"
                      alt="User"
                      className="h-8 w-8 rounded-full border-2 border-[#0B0F19]"
                    />
                  </div>
                  <span>
                    <strong className="font-medium text-white">500+</strong> advisory firms trust us
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-full blur-3xl opacity-30"></div>
                <div className="relative mx-auto w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] border-[1px] border-cyan-500/30 rounded-full flex items-center justify-center">
                  <div className="absolute w-full h-full rounded-full border-[1px] border-cyan-500/20 animate-[spin_30s_linear_infinite]">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500 p-2 rounded-full">
                      <PieChart className="h-4 w-4 text-black" />
                    </div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-cyan-500 p-2 rounded-full">
                      <Shield className="h-4 w-4 text-black" />
                    </div>
                    <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500 p-2 rounded-full">
                      <Users className="h-4 w-4 text-black" />
                    </div>
                    <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-cyan-500 p-2 rounded-full">
                      <BarChart3 className="h-4 w-4 text-black" />
                    </div>
                  </div>
                  <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] rounded-full border-[1px] border-cyan-500/40 flex items-center justify-center">
                    <div className="w-[150px] h-[150px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] rounded-full bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border-[1px] border-cyan-500/50 flex flex-col items-center justify-center p-4 text-center">
                      <h3 className="text-lg font-bold text-cyan-400 mb-2">Real-time Dashboard</h3>
                      <p className="text-xs text-gray-400">Track revenue, performance, and adviser activity</p>
                      <Button className="mt-4 bg-cyan-500 hover:bg-cyan-600 text-black text-xs h-8 px-3">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Background decorations */}
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 transform">
            <div className="h-64 w-64 rounded-full bg-cyan-500 opacity-10 blur-3xl"></div>
          </div>
          <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 transform">
            <div className="h-64 w-64 rounded-full bg-teal-500 opacity-10 blur-3xl"></div>
          </div>
        </section>

        {/* Logos Section */}
        <section className="py-12 border-y border-gray-800 bg-[#0D1320]">
          <div className="container">
            <p className="text-center text-sm font-medium text-gray-500 mb-8">
              TRUSTED BY LEADING FINANCIAL ADVISORY FIRMS
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="h-8 w-24 bg-gray-800 rounded opacity-60 hover:opacity-100 transition-opacity"
                ></div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">PrioxiFi is built for Openwork partners</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Our platform is designed to meet the specific needs of different roles within your Openwork partner
                firm, with special focus on principals' requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 p-6 rounded-xl border border-yellow-500/20 hover:border-yellow-500/40 transition-colors">
                <div className="h-12 w-12 rounded-lg bg-yellow-500/20 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-yellow-500">Principals</h3>
                <p className="text-gray-400 mb-4">
                  Get complete visibility into your firm's performance, revenue streams, and compliance status.
                </p>
                <Link href="#" className="inline-flex items-center text-yellow-500 font-medium hover:text-yellow-400">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 p-6 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-colors">
                <div className="h-12 w-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-green-500">Managers</h3>
                <p className="text-gray-400 mb-4">
                  Streamline operations, track adviser performance, and manage recruitment and training processes.
                </p>
                <Link href="#" className="inline-flex items-center text-green-500 font-medium hover:text-green-400">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-colors">
                <div className="h-12 w-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-500">Advisers</h3>
                <p className="text-gray-400 mb-4">
                  Focus on clients with tools that track commissions, manage documents, and ensure compliance
                  requirements are met.
                </p>
                <Link href="#" className="inline-flex items-center text-blue-500 font-medium hover:text-blue-400">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-[#0D1320]">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Our platform offers a comprehensive suite of tools designed to help your financial advisory firm thrive
                in today's complex regulatory environment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-[#0B0F19] p-6 rounded-xl border border-gray-800 hover:border-cyan-500/30 transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                <div className="mb-4 h-12 w-12 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-cyan-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Real-time Dashboards</h3>
                <p className="text-gray-400 mb-4">
                  Track revenue, performance metrics, and adviser activity with customizable real-time dashboards.
                </p>
                <Link href="#" className="inline-flex items-center text-cyan-500 font-medium hover:text-cyan-400">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              <div className="bg-[#0B0F19] p-6 rounded-xl border border-gray-800 hover:border-cyan-500/30 transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                <div className="mb-4 h-12 w-12 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-cyan-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Automated Commissions</h3>
                <p className="text-gray-400 mb-4">
                  Automate commission calculations and error-flagging workflows to ensure accurate and timely payments.
                </p>
                <Link href="#" className="inline-flex items-center text-cyan-500 font-medium hover:text-cyan-400">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              <div className="bg-[#0B0F19] p-6 rounded-xl border border-gray-800 hover:border-cyan-500/30 transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                <div className="mb-4 h-12 w-12 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-cyan-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Adviser Onboarding</h3>
                <p className="text-gray-400 mb-4">
                  Streamline adviser onboarding with document upload capabilities and automated compliance tracking.
                </p>
                <Link href="#" className="inline-flex items-center text-cyan-500 font-medium hover:text-cyan-400">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              <div className="bg-[#0B0F19] p-6 rounded-xl border border-gray-800 hover:border-cyan-500/30 transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                <div className="mb-4 h-12 w-12 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                  <Users className="h-6 w-6 text-cyan-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Integrated Modules</h3>
                <p className="text-gray-400 mb-4">
                  Manage recruitment, training, and performance reviews with our integrated module system.
                </p>
                <Link href="#" className="inline-flex items-center text-cyan-500 font-medium hover:text-cyan-400">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              <div className="bg-[#0B0F19] p-6 rounded-xl border border-gray-800 hover:border-cyan-500/30 transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                <div className="mb-4 h-12 w-12 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-cyan-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Compliance Management</h3>
                <p className="text-gray-400 mb-4">
                  Ensure FCA and GDPR compliance with automated checks, alerts, and comprehensive audit trails.
                </p>
                <Link href="#" className="inline-flex items-center text-cyan-500 font-medium hover:text-cyan-400">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              <div className="bg-[#0B0F19] p-6 rounded-xl border border-gray-800 hover:border-cyan-500/30 transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                <div className="mb-4 h-12 w-12 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                  <Smartphone className="h-6 w-6 text-cyan-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Mobile Access</h3>
                <p className="text-gray-400 mb-4">
                  Access critical information and tools on the go with our mobile-optimized platform for advisers.
                </p>
                <Link href="#" className="inline-flex items-center text-cyan-500 font-medium hover:text-cyan-400">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Transparent Pricing</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Choose the plan that's right for your Openwork partner firm. All plans include dedicated support and
                regular updates.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Standard Plan */}
              <div className="bg-[#0B0F19] p-8 rounded-xl border border-gray-800 hover:border-cyan-500/30 transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold">Standard</h3>
                  <div className="mt-4 mb-6">
                    <span className="text-4xl font-bold">£299</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <p className="text-gray-400">For smaller Openwork partner firms</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "Up to 5 advisers",
                    "Commission reconciliation",
                    "Basic compliance tools",
                    "Email support",
                    "Mobile access",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3 text-cyan-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white">Request Demo</Button>
              </div>

              {/* Professional Plan */}
              <div className="bg-gradient-to-b from-cyan-900/20 to-transparent p-8 rounded-xl border border-cyan-500/30 hover:border-cyan-500/50 transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-cyan-500 text-black text-xs font-bold py-1 px-3 rounded-full">
                  MOST POPULAR
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold">Professional</h3>
                  <div className="mt-4 mb-6">
                    <span className="text-4xl font-bold">£599</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <p className="text-gray-400">For established Openwork partner firms</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "Up to 15 advisers",
                    "Advanced commission management",
                    "Full compliance toolkit",
                    "Priority support",
                    "Custom dashboards",
                    "Adviser performance tracking",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3 text-cyan-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-medium">Request Demo</Button>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-[#0B0F19] p-8 rounded-xl border border-gray-800 hover:border-cyan-500/30 transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold">Enterprise</h3>
                  <div className="mt-4 mb-6">
                    <span className="text-4xl font-bold">Custom</span>
                  </div>
                  <p className="text-gray-400">For large Openwork partner networks</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "Unlimited advisers",
                    "Full commission automation",
                    "Advanced compliance reporting",
                    "Dedicated account manager",
                    "Custom integrations",
                    "White-labeling options",
                    "Network-wide analytics",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3 text-cyan-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white">Contact Sales</Button>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-400 mb-6">
                All plans include secure data storage, regular updates, and Openwork network compatibility
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-cyan-500" />
                  <span>FCA Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-cyan-500" />
                  <span>GDPR Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-cyan-500" />
                  <span>ISO 27001 Certified</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-cyan-900/30 to-teal-900/30">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Ready to transform your Openwork partner practice?</h2>
                <p className="text-gray-400 mb-8 text-lg">
                  Join hundreds of principals in the Openwork network who have already taken the leap and experienced
                  the difference our platform can make for their advisory firms.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Streamlined commission management",
                    "FCA & GDPR compliant",
                    "Secure multi-role access",
                    "Dedicated support team",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3 text-cyan-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-black font-medium">
                    Request Demo
                  </Button>
                  <Button size="lg" variant="outline" className="border-gray-700 hover:bg-gray-800">
                    Talk to Sales
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500/10 rounded-3xl blur-3xl opacity-30"></div>
                <div className="relative bg-[#0B0F19] rounded-xl p-8 shadow-xl border border-cyan-500/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="h-5 w-5 fill-cyan-500 text-cyan-500" />
                      ))}
                    </div>
                    <span className="text-sm">5.0 (120+ reviews)</span>
                  </div>
                  <blockquote className="text-lg mb-6">
                    "PrioxiFi has completely transformed how we manage our advisory practice. Commission reconciliation
                    that used to take days now happens automatically, and our compliance processes are more robust than
                    ever."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <img
                      src="/professional-business-woman-headshot.png"
                      alt="Customer"
                      className="h-12 w-12 rounded-full"
                    />
                    <div>
                      <p className="font-medium">Sarah Johnson</p>
                      <p className="text-sm text-gray-400">Principal, Johnson Financial Advisors</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Book a Principal's Demo</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  See how PrioxiFi can help your Openwork partner firm automate processes, ensure compliance, and boost
                  productivity with a personalized demo for principals.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="bg-[#0D1320] p-8 rounded-xl border border-gray-800">
                  <h3 className="text-xl font-bold mb-6 text-cyan-400">Contact Information</h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Email</p>
                      <p className="font-medium">sales@prioxifi.com</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Phone</p>
                      <p className="font-medium">+44 (0) 20 1234 5678</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Address</p>
                      <p className="font-medium">123 Fintech Plaza, London, EC2A 1NT</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-3">Compliance</p>
                      <div className="flex gap-4">
                        <div className="h-10 w-16 rounded bg-gray-800 flex items-center justify-center text-xs font-medium">
                          FCA
                        </div>
                        <div className="h-10 w-16 rounded bg-gray-800 flex items-center justify-center text-xs font-medium">
                          GDPR
                        </div>
                        <div className="h-10 w-16 rounded bg-gray-800 flex items-center justify-center text-xs font-medium">
                          ISO 27001
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0D1320] p-8 rounded-xl border border-gray-800">
                  <h3 className="text-xl font-bold mb-6 text-cyan-400">Request a demo</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-400 mb-1">
                          First Name
                        </label>
                        <Input
                          id="first-name"
                          className="bg-[#0B0F19] border-gray-800 focus:border-cyan-500 focus:ring-cyan-500/20"
                        />
                      </div>
                      <div>
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-400 mb-1">
                          Last Name
                        </label>
                        <Input
                          id="last-name"
                          className="bg-[#0B0F19] border-gray-800 focus:border-cyan-500 focus:ring-cyan-500/20"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                        Work Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        className="bg-[#0B0F19] border-gray-800 focus:border-cyan-500 focus:ring-cyan-500/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-1">
                        Advisory Firm
                      </label>
                      <Input
                        id="company"
                        className="bg-[#0B0F19] border-gray-800 focus:border-cyan-500 focus:ring-cyan-500/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-gray-400 mb-1">
                        Your Role
                      </label>
                      <Input
                        id="role"
                        className="bg-[#0B0F19] border-gray-800 focus:border-cyan-500 focus:ring-cyan-500/20"
                        placeholder="Principal, Network Partner, etc."
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                        How can we help?
                      </label>
                      <Textarea
                        id="message"
                        rows={4}
                        className="bg-[#0B0F19] border-gray-800 focus:border-cyan-500 focus:ring-cyan-500/20"
                      />
                    </div>
                    <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-medium">Book a Demo</Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#080B12] text-gray-400 py-12 border-t border-gray-800">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-8">
            <div className="col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 font-bold text-xl text-white mb-4">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-400 to-teal-400"></div>
                <span>PrioxiFi</span>
              </div>
              <p className="mb-4">
                Empowering financial advisory firms with intelligent automation and compliance solutions.
              </p>
              <div className="flex gap-4">
                {["twitter", "facebook", "instagram", "linkedin"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-cyan-500/20 transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                  </a>
                ))}
              </div>
            </div>

            {["Platform", "Company", "Resources", "Legal"].map((category) => (
              <div key={category}>
                <h4 className="font-medium text-white mb-4">{category}</h4>
                <ul className="space-y-3">
                  {[1, 2, 3, 4].map((i) => (
                    <li key={i}>
                      <a href="#" className="hover:text-cyan-400 transition-colors">
                        {category} Link {i}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>© 2023 PrioxiFi. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
