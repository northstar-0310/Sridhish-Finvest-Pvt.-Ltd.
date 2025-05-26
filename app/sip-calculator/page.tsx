'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { formatCurrency, formatNumber } from '@/lib/utils';
import { BarChart, Clock, TrendingUp, DollarSign, Calendar, Target, Zap, Repeat } from 'lucide-react';
import Link from 'next/link';

export default function SIPCalculator() {
  const [investmentType, setInvestmentType] = useState<'sip' | 'lumpsum'>('sip');
  const [investment, setInvestment] = useState(10000);
  const [lumpsumAmount, setLumpsumAmount] = useState(100000);
  const [duration, setDuration] = useState(5);
  const [rate, setRate] = useState(12);
  const [futureValue, setFutureValue] = useState(0);
  const [totalInvestment, setTotalInvestment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  useEffect(() => {
    if (investmentType === 'sip') {
      calculateSIP();
    } else {
      calculateLumpsum();
    }
  }, [investment, lumpsumAmount, duration, rate, investmentType]);

  const calculateSIP = () => {
    const monthlyRate = rate / 12 / 100;
    const months = duration * 12;
    
    const futureVal = investment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    const totInvestment = investment * months;
    const totInterest = futureVal - totInvestment;
    
    setFutureValue(futureVal);
    setTotalInvestment(totInvestment);
    setTotalInterest(totInterest);
  };

  const calculateLumpsum = () => {
    const annualRate = rate / 100;
    const futureVal = lumpsumAmount * Math.pow(1 + annualRate, duration);
    const totInterest = futureVal - lumpsumAmount;
    
    setFutureValue(futureVal);
    setTotalInvestment(lumpsumAmount);
    setTotalInterest(totInterest);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary/5 to-primary/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl mb-6">
                SIP Calculator
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Calculate the returns on your Systematic Investment Plan (SIP) and plan your investments better.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calculator Form */}
            <div className="lg:col-span-2">
              <Card className="border border-border/50 shadow-sm">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl flex items-center">
                        <BarChart className="h-6 w-6 mr-2 text-primary" />
                        {investmentType === 'sip' ? 'SIP Calculator' : 'Lumpsum Calculator'}
                      </CardTitle>
                      <CardDescription>
                        {investmentType === 'sip' 
                          ? 'Calculate the future value of your SIP investments'
                          : 'Calculate the future value of your Lumpsum investment'}
                      </CardDescription>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium">
                        {investmentType === 'sip' ? 'SIP' : 'Lumpsum'}
                      </span>
                      <Switch
                        id="investment-type"
                        checked={investmentType === 'lumpsum'}
                        onCheckedChange={(checked) => setInvestmentType(checked ? 'lumpsum' : 'sip')}
                        className="data-[state=checked]:bg-primary"
                      />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {investmentType === 'sip' ? (
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label htmlFor="investment" className="text-sm font-medium text-muted-foreground">
                          Monthly Investment (₹)
                        </label>
                        <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                          {formatCurrency(investment)}
                        </span>
                      </div>
                      <Slider
                        id="investment"
                        min={500}
                        max={100000}
                        step={500}
                        value={[investment]}
                        onValueChange={(value) => setInvestment(value[0])}
                        className="mb-2"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>₹500</span>
                        <span>₹1,00,000</span>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label htmlFor="lumpsum" className="text-sm font-medium text-muted-foreground">
                          Investment Amount (₹)
                        </label>
                        <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                          {formatCurrency(lumpsumAmount)}
                        </span>
                      </div>
                      <Slider
                        id="lumpsum"
                        min={1000}
                        max={10000000}
                        step={1000}
                        value={[lumpsumAmount]}
                        onValueChange={(value) => setLumpsumAmount(value[0])}
                        className="mb-2"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>₹1,000</span>
                        <span>₹1,00,00,000</span>
                      </div>
                    </div>
                  )}

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label htmlFor="duration" className="text-sm font-medium text-muted-foreground">
                        Investment Duration: {duration} {duration === 1 ? 'Year' : 'Years'}
                      </label>
                    </div>
                    <Slider
                      id="duration"
                      min={1}
                      max={30}
                      step={1}
                      value={[duration]}
                      onValueChange={(value) => setDuration(value[0])}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>1 Year</span>
                      <span>30 Years</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label htmlFor="rate" className="text-sm font-medium text-muted-foreground">
                        Expected Return Rate: {rate}% p.a.
                      </label>
                    </div>
                    <Slider
                      id="rate"
                      min={1}
                      max={30}
                      step={0.5}
                      value={[rate]}
                      onValueChange={(value) => setRate(value[0])}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>1%</span>
                      <span>30%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Results */}
            <div>
              <Card className="border border-border/50 shadow-sm h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">Investment Summary</CardTitle>
                  <CardDescription>Your SIP returns at a glance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    {investmentType === 'sip' ? (
                      <div className="flex justify-between">
                        <div className="flex items-center text-muted-foreground">
                          <Repeat className="h-4 w-4 mr-2 text-primary" />
                          <span>Monthly Investment</span>
                        </div>
                        <span className="font-medium">{formatCurrency(investment)}</span>
                      </div>
                    ) : (
                      <div className="flex justify-between">
                        <div className="flex items-center text-muted-foreground">
                          <Zap className="h-4 w-4 mr-2 text-primary" />
                          <span>Lumpsum Investment</span>
                        </div>
                        <span className="font-medium">{formatCurrency(lumpsumAmount)}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2 text-primary" />
                        <span>Total Investment</span>
                      </div>
                      <span className="font-medium">{formatCurrency(totalInvestment)}</span>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center text-muted-foreground">
                        <TrendingUp className="h-4 w-4 mr-2 text-primary" />
                        <span>Total Interest</span>
                      </div>
                      <span className="font-medium text-green-600">{formatCurrency(totalInterest)}</span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between text-lg font-bold">
                        <div className="flex items-center">
                          <Target className="h-5 w-5 mr-2 text-primary" />
                          <span>Total Value</span>
                        </div>
                        <span className="text-primary">{formatCurrency(futureValue)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 pt-4 border-t">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Duration</span>
                      <span>{duration} {duration === 1 ? 'Year' : 'Years'}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        Expected Return {investmentType === 'sip' ? '(p.a.)' : '(Annualized)'}
                      </span>
                      <span>{rate}%</span>
                    </div>
                  </div>

                  <Button asChild className="w-full mt-6" size="lg">
                    <Link href="/contact">
                      Start Investing
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Information Section */}
          <div className="mt-12">
            <Card className="border border-border/50 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl">What is SIP?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  A Systematic Investment Plan (SIP) is an investment strategy that allows you to invest a fixed amount in mutual funds at regular intervals (monthly, quarterly, etc.). It helps in building wealth over the long term through the power of compounding.
                </p>
                <div className="grid md:grid-cols-2 gap-6 pt-4">
                  <div className="space-y-4">
                    <h3 className="font-semibold flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                      Benefits of SIP:
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span><strong>Rupee Cost Averaging:</strong> Buy more units when prices are low and fewer when prices are high</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span><strong>Power of Compounding:</strong> Earn returns on your returns over the long term</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span><strong>Disciplined Investing:</strong> Regular investments regardless of market conditions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span><strong>Affordable:</strong> Start with as low as ₹500 per month</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-primary" />
                      How to use this calculator?
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">1.</span>
                        <span>Enter your monthly investment amount</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">2.</span>
                        <span>Select investment duration in years</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">3.</span>
                        <span>Adjust expected rate of return (typically 10-12% for equity funds)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">4.</span>
                        <span>View your investment summary and potential returns</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
