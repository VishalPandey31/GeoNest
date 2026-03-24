import React, { useState, useEffect } from 'react';
import { IndianRupee, Calculator, PieChart } from 'lucide-react';

const EmiCalculator = ({ propertyPriceStr }) => {
  const extractPrice = (str) => {
    if (!str) return 5000000;
    const match = str.match(/(\d+(?:\.\d+)?)\s*(Lakh|Crore|Cr|L)/i);
    if (match) {
      let val = parseFloat(match[1]);
      if (match[2].toLowerCase().startsWith('c')) val *= 10000000;
      else val *= 100000;
      return val;
    }
    return 5000000;
  };

  const [principal, setPrincipal] = useState(extractPrice(propertyPriceStr));
  const [years, setYears] = useState(25);
  const [rate, setRate] = useState(8.5);

  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  useEffect(() => {
    const P = principal;
    const R = (rate / 100) / 12;
    const N = years * 12;

    if (P > 0 && R > 0 && N > 0) {
      const mathEmi = Math.round(P * R * Math.pow(1 + R, N) / (Math.pow(1 + R, N) - 1));
      setEmi(mathEmi);
      setTotalInterest(Math.round((mathEmi * N) - P));
    } else {
      setEmi(0);
      setTotalInterest(0);
    }
  }, [principal, years, rate]);

  const formatCurrency = (num) => new Intl.NumberFormat('en-IN').format(num);

  return (
    <div className="glass-morphism p-6 md:p-8 border-primary rounded-2xl mb-10 shadow-2xl">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center border border-primary">
          <Calculator className="text-primary" size={24} />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white premium-font">EMI Calculator</h3>
          <p className="text-gray-400 text-sm">Plan your finances instantly</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Sliders Area */}
        <div className="space-y-8">
          {/* Principal */}
          <div>
            <div className="flex justify-between text-white mb-2">
              <span className="font-bold">Loan Amount</span>
              <span className="text-primary font-bold flex items-center">
                <IndianRupee size={16} /> {formatCurrency(principal)}
              </span>
            </div>
            <input
              type="range"
              min="500000"
              max="50000000"
              step="100000"
              value={principal}
              onChange={(e) => setPrincipal(Number(e.target.value))}
              className="w-full accent-[#c5a059] cursor-pointer h-2 bg-white/10 rounded-lg appearance-none"
            />
          </div>

          {/* Tenure */}
          <div>
            <div className="flex justify-between text-white mb-2">
              <span className="font-bold">Tenure (Years)</span>
              <span className="text-primary font-bold">{years} Years</span>
            </div>
            <input
              type="range"
              min="5"
              max="30"
              step="1"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full accent-[#c5a059] cursor-pointer h-2 bg-white/10 rounded-lg appearance-none"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>5 Years</span>
              <span>30 Years</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <div className="flex justify-between text-white mb-2">
              <span className="font-bold">Interest Rate (% p.a.)</span>
              <span className="text-primary font-bold">{rate}%</span>
            </div>
            <input
              type="range"
              min="5"
              max="15"
              step="0.1"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full accent-[#c5a059] cursor-pointer h-2 bg-white/10 rounded-lg appearance-none"
            />
          </div>
        </div>

        {/* Results Area */}
        <div className="bg-black/40 border border-primary/20 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center">
          <PieChart className="text-primary mb-4 opacity-70" size={48} />
          <h4 className="text-gray-400 font-bold uppercase tracking-wider text-sm mb-2">Monthly EMI</h4>
          <div className="text-5xl font-extrabold text-white flex items-center justify-center mb-8 drop-shadow-[0_0_15px_rgba(197,160,89,0.3)]">
            <IndianRupee size={36} className="text-primary mr-1" />
            {formatCurrency(emi)}
          </div>

          <div className="w-full h-px bg-white/10 mb-6" />

          <div className="w-full grid grid-cols-2 gap-4 text-left">
            <div>
              <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Principal Amount</p>
              <p className="text-white font-bold flex items-center">
                <IndianRupee size={12} className="mr-1" /> {formatCurrency(principal)}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Total Interest</p>
              <p className="text-primary font-bold flex items-center">
                <IndianRupee size={12} className="mr-1" /> {formatCurrency(totalInterest)}
              </p>
            </div>
            <div className="col-span-2 pt-2 mt-2 border-t border-white/5">
              <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Total Amount Payable</p>
              <p className="text-white font-bold flex items-center text-lg">
                <IndianRupee size={16} className="mr-1" /> {formatCurrency(principal + totalInterest)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmiCalculator;
