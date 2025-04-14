import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"

export const metadata: Metadata = {
  title: "Credit Building Guide | PDM GROUP",
  description: "A comprehensive guide to building credit for beginners from PDM GROUP",
}

export default function CreditGuidePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/resources">
            <Button variant="ghost" className="mb-8 pl-0">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Resources
            </Button>
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">PDM Group: Credit Building Guide for Beginners</h1>
              <p className="text-sm text-muted-foreground mt-2">Downloads coming soon</p>
            </div>

            <div className="border-t border-b py-8 my-12">
              <h2 className="text-2xl font-bold mb-4">Welcome to PDM Group's Financial Tools for Independence</h2>
              <p className="text-muted-foreground">
                This guide is designed to help you build credit confidently. It's written in plain, empowering language
                for anyone starting their financial journey. Use this resource as a roadmap—not financial advice—and
                consult a certified advisor for personal decisions.
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Why Credit Matters</h2>
              <p className="mb-4">Good credit opens doors:</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Lower interest rates</strong> on loans & credit cards
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Easier approval</strong> for housing, cars, or phones
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Increased independence</strong> and financial flexibility
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Better job opportunities</strong> (some employers check credit)
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="underline">Creative Independence</strong>: Access to SBA loans and startup
                    funding for your creative ventures
                  </span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">What Is Credit?</h2>
              <p className="mb-6">
                Credit allows you to borrow money now and repay later. Your behavior is tracked in a{" "}
                <strong>credit report</strong>, and a score from 300–850 measures how well you manage debt.
              </p>

              <h3 className="text-xl font-bold mb-4">Credit Score Factors</h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[200px]">Factor</TableHead>
                      <TableHead>Impact</TableHead>
                      <TableHead>Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Payment History</TableCell>
                      <TableCell>35%</TableCell>
                      <TableCell>Pay on time, every time</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Credit Utilization</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>Keep balances below 30% of your limit</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Length of History</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>Older accounts show long-term responsibility</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Credit Mix</TableCell>
                      <TableCell>10%</TableCell>
                      <TableCell>A mix of credit cards, loans, etc. is better</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">New Credit</TableCell>
                      <TableCell>10%</TableCell>
                      <TableCell>Too many recent applications hurt your score</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">How to Start Building Credit: Step-by-Step</h2>

              <div className="space-y-8">
                <div className="border border-border p-6 bg-card">
                  <h3 className="text-xl font-bold mb-3">✅ 1. Check Your Credit</h3>
                  <ul className="space-y-2">
                    <li>
                      Use{" "}
                      <a
                        href="https://www.creditkarma.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        Credit Karma
                      </a>{" "}
                      or{" "}
                      <a
                        href="https://www.annualcreditreport.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        AnnualCreditReport.com
                      </a>
                    </li>
                    <li>Look for errors or unfamiliar accounts</li>
                  </ul>
                </div>

                <div className="border border-border p-6 bg-card">
                  <h3 className="text-xl font-bold mb-3">✅ 2. Get a Secured Credit Card</h3>
                  <ul className="space-y-2">
                    <li>
                      <strong>Capital One Platinum Secured</strong>: Low deposit, easy approval
                    </li>
                    <li>
                      <strong>Discover it® Secured</strong>: Cashback rewards and graduation to unsecured
                    </li>
                  </ul>
                </div>

                <div className="border border-border p-6 bg-card">
                  <h3 className="text-xl font-bold mb-3">✅ 3. Make Small Purchases Only</h3>
                  <ul className="space-y-2">
                    <li>Buy 1 small item (like a coffee or gas) monthly</li>
                    <li>
                      Pay it off <strong>in full and early</strong>
                    </li>
                  </ul>
                </div>

                <div className="border border-border p-6 bg-card">
                  <h3 className="text-xl font-bold mb-3">✅ 4. Always Pay On Time</h3>
                  <ul className="space-y-2">
                    <li>
                      Late payments hurt and stay on your report for <strong>7 years</strong>
                    </li>
                    <li>Set phone calendar reminders or auto-pay</li>
                  </ul>
                </div>

                <div className="border border-border p-6 bg-card">
                  <h3 className="text-xl font-bold mb-3">✅ 5. Keep Credit Usage Low</h3>
                  <ul className="space-y-2">
                    <li>
                      Stay <strong>under 30%</strong> of your total limit
                    </li>
                    <li>Example: $1,000 limit → keep balance below $300</li>
                  </ul>
                </div>

                <div className="border border-border p-6 bg-card">
                  <h3 className="text-xl font-bold mb-3">✅ 6. Don't Apply for Everything</h3>
                  <ul className="space-y-2">
                    <li>Avoid too many credit applications in a short time</li>
                  </ul>
                </div>

                <div className="border border-border p-6 bg-card">
                  <h3 className="text-xl font-bold mb-3">✅ 7. Become an Authorized User</h3>
                  <ul className="space-y-2">
                    <li>Ask a parent or trusted friend to add you to their card (you don't even need to use it)</li>
                  </ul>
                </div>

                <div className="border border-border p-6 bg-card">
                  <h3 className="text-xl font-bold mb-3">✅ 8. Monitor Monthly</h3>
                  <ul className="space-y-2">
                    <li>Watch your score grow. Look out for fraud or identity theft</li>
                  </ul>
                </div>

                <div className="border border-border p-6 bg-card">
                  <h3 className="text-xl font-bold mb-3">✅ 9. Stay Consistent & Be Patient</h3>
                  <ul className="space-y-2">
                    <li>
                      Credit takes <strong>time</strong>, not tricks. Focus on habits
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Interactive Checklist: Your Credit Starter Plan</h2>
              <div className="border border-border p-6 bg-card">
                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox id="check1" />
                    <label
                      htmlFor="check1"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I reviewed my credit report
                    </label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="check2" />
                    <label
                      htmlFor="check2"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I opened a secured card
                    </label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="check3" />
                    <label
                      htmlFor="check3"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I made my first small purchase
                    </label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="check4" />
                    <label
                      htmlFor="check4"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I paid off my balance early
                    </label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="check5" />
                    <label
                      htmlFor="check5"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      My credit usage is below 30%
                    </label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="check6" />
                    <label
                      htmlFor="check6"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I set payment reminders
                    </label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="check7" />
                    <label
                      htmlFor="check7"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I avoided new unnecessary applications
                    </label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="check8" />
                    <label
                      htmlFor="check8"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I asked to be an authorized user
                    </label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="check9" />
                    <label
                      htmlFor="check9"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I checked my report again this month
                    </label>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Common Pitfalls to Avoid</h2>
              <div className="border border-border p-6 bg-card">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-destructive mr-2">❌</span>
                    <span>Missing payments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-destructive mr-2">❌</span>
                    <span>Maxing out cards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-destructive mr-2">❌</span>
                    <span>Applying for multiple cards at once</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-destructive mr-2">❌</span>
                    <span>Ignoring statements or fraud alerts</span>
                  </li>
                </ul>
              </div>
            </section>

            <div className="border-t pt-8 mt-12">
              <h3 className="text-xl font-bold mb-4">Legal Note</h3>
              <p className="text-sm text-muted-foreground mb-8">
                This guide is for informational purposes based on real experience. It is not a substitute for financial
                advice. Always consult with a certified financial planner (CFP), public accountant (CPA), or credit
                advisor before making credit decisions.
              </p>

              <div className="text-center">
                <p className="font-bold mb-2">Part of PDM Group's Free Resources Initiative</p>
                <p className="text-muted-foreground mb-6">
                  Empowering creatives and entrepreneurs with tools for scalable independence.
                </p>
                <Button asChild>
                  <Link href="/resources">Visit More Free Tools</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
