import React, { useState } from 'react';
import { Wallet, ArrowDownCircle, ArrowUpCircle, DollarSign, ArrowRight, ShieldCheck, Trophy, Sparkles } from 'lucide-react';

export default function WalletSimulator() {
  const [balance, setBalance] = useState(250);
  const [earnings, setEarnings] = useState(840);
  const [transactions, setTransactions] = useState([
    { id: '1', type: 'win', amount: 120, title: 'Bermuda Squad Showdown #104', date: 'Today, 2:40 PM', status: 'Credited' },
    { id: '2', type: 'entry', amount: -20, title: 'Kalahari Solo Clash #99', date: 'Today, 11:15 AM', status: 'Debited' },
    { id: '3', type: 'withdrawal', amount: -300, title: 'UPI Withdrawal Success', date: 'Yesterday, 6:00 PM', status: 'Completed' },
    { id: '4', type: 'win', amount: 350, title: 'Grand Free Fire Championship Match 1', date: 'Oct 14, 2024', status: 'Credited' },
  ]);

  const [depositAmount, setDepositAmount] = useState('50');
  const [withdrawAmount, setWithdrawAmount] = useState('100');
  const [activeTab, setActiveTab] = useState<'deposit' | 'withdraw'>('deposit');
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleDeposit = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = parseFloat(depositAmount);
    if (isNaN(amount) || amount <= 0) return;

    setBalance(prev => prev + amount);
    setTransactions(prev => [
      {
        id: Date.now().toString(),
        type: 'deposit',
        amount: amount,
        title: 'Instant Cash Deposit',
        date: 'Just now',
        status: 'Credited'
      },
      ...prev
    ]);
    
    setFeedback(`Successfully deposited $${amount} via mock Gateway!`);
    setTimeout(() => setFeedback(null), 3000);
  };

  const handleWithdraw = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = parseFloat(withdrawAmount);
    if (isNaN(amount) || amount <= 0) return;
    if (amount > balance) {
      setFeedback('Error: Insufficient balance!');
      setTimeout(() => setFeedback(null), 3000);
      return;
    }

    setBalance(prev => prev - amount);
    setTransactions(prev => [
      {
        id: Date.now().toString(),
        type: 'withdrawal',
        amount: -amount,
        title: 'Mock UPI / Paytm Withdrawal',
        date: 'Just now',
        status: 'Completed'
      },
      ...prev
    ]);

    setFeedback(`Withdrawal request of $${amount} successfully processed!`);
    setTimeout(() => setFeedback(null), 3000);
  };

  return (
    <div className="border border-brand-border bg-brand-card rounded-2xl overflow-hidden shadow-2xl">
      {/* Wallet Banner */}
      <div className="bg-gradient-to-r from-brand-orange/20 via-[#16161c] to-brand-gold/10 p-6 border-b border-brand-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-brand-orange/10 border border-brand-orange/30 text-brand-orange">
            <Wallet className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider">
              Interactive Wallet Sandbox
            </h3>
            <p className="text-xs text-gray-400">Simulate player cashouts and deposits instantly</p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold">
          <ShieldCheck className="w-4 h-4" />
          PCI-DSS Secure Sandbox
        </div>
      </div>

      {/* Wallet Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-brand-border bg-brand-dark/30">
        
        {/* Balances Column */}
        <div className="p-6 space-y-5">
          <div>
            <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Available Balance</span>
            <div className="text-3xl font-extrabold text-white font-display flex items-baseline gap-1 mt-1">
              <span className="text-brand-orange">$</span>
              {balance.toFixed(2)}
            </div>
          </div>

          <div>
            <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Total Esports Earnings</span>
            <div className="text-2xl font-extrabold text-brand-gold font-display flex items-baseline gap-1 mt-1">
              <Trophy className="w-5 h-5 text-brand-gold inline mr-1" />
              <span className="text-brand-gold">$</span>
              {earnings.toFixed(2)}
            </div>
          </div>

          <div className="pt-2">
            <div className="flex bg-[#16161c] p-1 rounded-lg border border-brand-border">
              <button 
                onClick={() => setActiveTab('deposit')}
                className={`flex-1 py-1.5 text-xs font-bold rounded uppercase tracking-wider transition-all ${
                  activeTab === 'deposit' ? 'bg-brand-orange text-black' : 'text-gray-400 hover:text-white'
                }`}
              >
                Deposit
              </button>
              <button 
                onClick={() => setActiveTab('withdraw')}
                className={`flex-1 py-1.5 text-xs font-bold rounded uppercase tracking-wider transition-all ${
                  activeTab === 'withdraw' ? 'bg-brand-orange text-black' : 'text-gray-400 hover:text-white'
                }`}
              >
                Withdraw
              </button>
            </div>
          </div>
        </div>

        {/* Action Form Column */}
        <div className="p-6">
          {feedback && (
            <div className={`p-3 rounded-lg text-xs font-semibold mb-4 text-center border ${
              feedback.includes('Error') 
                ? 'bg-red-500/10 border-red-500/20 text-red-400' 
                : 'bg-green-500/10 border-green-500/20 text-green-400'
            }`}>
              {feedback}
            </div>
          )}

          {activeTab === 'deposit' ? (
            <form onSubmit={handleDeposit} className="space-y-4">
              <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <ArrowDownCircle className="w-4 h-4 text-green-500" />
                Deposit Mock Funds
              </h4>
              <p className="text-xs text-gray-400">Add test coins to register for premium high-prize custom rooms.</p>
              
              <div>
                <label className="block text-[10px] text-gray-400 uppercase font-bold mb-1.5">Amount ($)</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                  <input 
                    type="number" 
                    value={depositAmount}
                    onChange={(e) => setDepositAmount(e.target.value)}
                    className="w-full pl-8 pr-4 py-2 bg-brand-dark border border-brand-border rounded-lg text-sm text-white focus:outline-none focus:border-brand-orange transition-colors"
                    placeholder="Enter deposit amount"
                    min="1"
                  />
                </div>
              </div>

              <div className="flex gap-2">
                {['10', '50', '100'].map(val => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setDepositAmount(val)}
                    className="flex-1 py-1 bg-[#16161c] hover:bg-brand-border border border-brand-border text-xs text-white rounded transition-colors"
                  >
                    +${val}
                  </button>
                ))}
              </div>

              <button 
                type="submit"
                className="w-full py-2.5 rounded-lg bg-gradient-to-r from-brand-orange to-brand-gold text-xs font-bold text-black uppercase tracking-wider flex items-center justify-center gap-1 hover:opacity-90 transition-all"
              >
                Deposit Mock Coins
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          ) : (
            <form onSubmit={handleWithdraw} className="space-y-4">
              <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <ArrowUpCircle className="w-4 h-4 text-brand-orange" />
                Withdraw Esports Earnings
              </h4>
              <p className="text-xs text-gray-400">Withdraw your winnings directly to your UPI, Paytm or GPay wallet.</p>
              
              <div>
                <label className="block text-[10px] text-gray-400 uppercase font-bold mb-1.5">Amount ($)</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                  <input 
                    type="number" 
                    value={withdrawAmount}
                    onChange={(e) => setWithdrawAmount(e.target.value)}
                    className="w-full pl-8 pr-4 py-2 bg-brand-dark border border-brand-border rounded-lg text-sm text-white focus:outline-none focus:border-brand-orange transition-colors"
                    placeholder="Enter withdrawal amount"
                    min="1"
                  />
                </div>
              </div>

              <div className="flex gap-2">
                {['20', '100', '200'].map(val => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setWithdrawAmount(val)}
                    className="flex-1 py-1 bg-[#16161c] hover:bg-brand-border border border-brand-border text-xs text-white rounded transition-colors"
                  >
                    ${val}
                  </button>
                ))}
              </div>

              <button 
                type="submit"
                className="w-full py-2.5 rounded-lg bg-brand-orange text-xs font-bold text-black uppercase tracking-wider flex items-center justify-center gap-1 hover:bg-brand-orange-hover transition-all"
              >
                Process Withdrawal
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>

        {/* Transaction History Column */}
        <div className="p-6 space-y-4">
          <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-brand-gold" />
            Recent Transactions
          </h4>
          
          <div className="space-y-2.5 max-h-[180px] overflow-y-auto pr-1">
            {transactions.map(tx => (
              <div key={tx.id} className="p-2.5 bg-[#16161c] border border-brand-border rounded-lg flex items-center justify-between text-xs">
                <div className="space-y-0.5">
                  <p className="font-semibold text-white truncate max-w-[150px]">{tx.title}</p>
                  <p className="text-[10px] text-gray-500">{tx.date}</p>
                </div>
                <div className="text-right">
                  <p className={`font-bold ${tx.amount > 0 ? 'text-green-400' : 'text-brand-orange'}`}>
                    {tx.amount > 0 ? '+' : ''}${Math.abs(tx.amount)}
                  </p>
                  <p className="text-[9px] text-gray-400">{tx.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}