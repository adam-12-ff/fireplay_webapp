import React, { useState } from 'react';
import { Trophy, Shield, Settings, Check, Zap, Users, Plus, Star, Award, BarChart2 } from 'lucide-react';
import BracketGenerator from '../components/BracketGenerator';

export default function HostPanel() {
  const [lobbyName, setLobbyName] = useState('');
  const [lobbyMap, setLobbyMap] = useState('Bermuda');
  const [lobbyType, setLobbyType] = useState('SQUAD');
  const [lobbyFee, setLobbyFee] = useState('5');
  const [lobbyPrize, setLobbyPrize] = useState('100');
  const [createdLobbies, setCreatedLobbies] = useState([
    { name: 'Sponsor Cup Bermuda', map: 'Bermuda', type: 'SQUAD', fee: '$5.00', prize: '$150.00', status: 'Pending Approval' },
    { name: 'Guild Clash Kalahari', map: 'Kalahari', type: 'SOLO', fee: 'Free', prize: '$50.00', status: 'Active' },
  ]);

  const handleCreateLobby = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lobbyName.trim()) return;

    const newLobby = {
      name: lobbyName.trim(),
      map: lobbyMap,
      type: lobbyType,
      fee: lobbyFee === '0' ? 'Free' : `$${parseFloat(lobbyFee).toFixed(2)}`,
      prize: `$${parseFloat(lobbyPrize).toFixed(2)}`,
      status: 'Pending Approval'
    };

    setCreatedLobbies([newLobby, ...createdLobbies]);
    setLobbyName('');
  };

  const hostFeatures = [
    {
      icon: <Settings className="w-6 h-6 text-brand-orange" />,
      title: 'Automated Room Creation',
      description: 'Our host API links directly with Free Fire client servers to generate Custom Room IDs and passwords instantly, saving you manual effort.'
    },
    {
      icon: <Shield className="w-6 h-6 text-brand-gold" />,
      title: 'Anti-Cheat Dashboard',
      description: 'Monitor player clients in real-time. Our dashboard flags emulator signals, rooted kernels, and suspicious ping rates instantly.'
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-brand-orange" />,
      title: 'Real-Time Stats & Brackets',
      description: 'Track team standings, individual kills, and advance players through multi-round brackets automatically without screenshots.'
    },
    {
      icon: <Users className="w-6 h-6 text-brand-gold" />,
      title: 'Automated Prize Split',
      description: 'Define your prize pool structure (e.g. Top 3 split + Kill bounty). Winnings are credited to players wallets automatically.'
    }
  ];

  return (
    <div className="pt-24 pb-20 space-y-24">
      {/* Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/esports.jpg" 
            alt="Esports Tournament" 
            className="w-full h-full object-cover opacity-10 filter blur-[2px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/95 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center space-y-4">
          <span className="text-xs font-extrabold text-brand-orange uppercase tracking-widest block">For Guilds & Organizers</span>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white uppercase tracking-wide">
            Tournament <span className="text-brand-orange glow-orange">Host Panel</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Create custom rooms, manage multi-round brackets, automate results, and split prize pools with our professional host suite.
          </p>
        </div>
      </section>

      {/* Host Core Features */}
      <section className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hostFeatures.map((feat, idx) => (
            <div key={idx} className="p-6 rounded-2xl border border-brand-border bg-brand-card hover:border-brand-orange/30 transition-all duration-300">
              <div className="p-3 w-fit rounded-xl bg-brand-dark border border-brand-border mb-4">
                {feat.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-white uppercase mb-2">{feat.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-light">{feat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bracket Visualizer Section */}
      <section className="container mx-auto px-4 max-w-7xl">
        <div className="space-y-4 text-center mb-10">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-widest">Esports Bracket Builder</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white uppercase">
            Interactive <span className="text-brand-gold glow-gold">Tournament Bracket</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto leading-relaxed">
            Advance teams through Quarter-Finals, Semi-Finals, and Grand Finals. Test the bracket sandbox below.
          </p>
        </div>
        <BracketGenerator />
      </section>

      {/* Create Tournament Sandbox & Live Panel */}
      <section className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Create Lobby Form */}
          <div className="lg:col-span-5 border border-brand-border bg-brand-card rounded-2xl p-6 md:p-8 space-y-6">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-brand-orange uppercase tracking-widest">Creator Suite</span>
              <h3 className="font-display text-xl font-bold text-white uppercase">Create Custom Lobby</h3>
              <p className="text-xs text-gray-400">Launch a custom tournament room for your community.</p>
            </div>

            <form onSubmit={handleCreateLobby} className="space-y-4 text-left">
              <div>
                <label className="block text-[10px] text-gray-400 uppercase font-bold mb-1.5">Lobby Name</label>
                <input
                  type="text"
                  required
                  value={lobbyName}
                  onChange={(e) => setLobbyName(e.target.value)}
                  className="w-full px-4 py-2 bg-brand-dark border border-brand-border rounded-lg text-xs text-white focus:outline-none focus:border-brand-orange transition-colors"
                  placeholder="e.g. Guild Clash Season 4"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] text-gray-400 uppercase font-bold mb-1.5">Map</label>
                  <select
                    value={lobbyMap}
                    onChange={(e) => setLobbyMap(e.target.value)}
                    className="w-full px-3 py-2 bg-brand-dark border border-brand-border rounded-lg text-xs text-white focus:outline-none focus:border-brand-orange"
                  >
                    <option value="Bermuda">Bermuda</option>
                    <option value="Kalahari">Kalahari</option>
                    <option value="Purgatory">Purgatory</option>
                    <option value="Alpine">Alpine</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] text-gray-400 uppercase font-bold mb-1.5">Match Type</label>
                  <select
                    value={lobbyType}
                    onChange={(e) => setLobbyType(e.target.value)}
                    className="w-full px-3 py-2 bg-brand-dark border border-brand-border rounded-lg text-xs text-white focus:outline-none focus:border-brand-orange"
                  >
                    <option value="SOLO">Solo (Clash)</option>
                    <option value="DUO">Duo Rush</option>
                    <option value="SQUAD">Squad Showdown</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] text-gray-400 uppercase font-bold mb-1.5">Entry Fee ($)</label>
                  <input
                    type="number"
                    required
                    min="0"
                    value={lobbyFee}
                    onChange={(e) => setLobbyFee(e.target.value)}
                    className="w-full px-4 py-2 bg-brand-dark border border-brand-border rounded-lg text-xs text-white focus:outline-none focus:border-brand-orange transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-gray-400 uppercase font-bold mb-1.5">Prize Pool ($)</label>
                  <input
                    type="number"
                    required
                    min="10"
                    value={lobbyPrize}
                    onChange={(e) => setLobbyPrize(e.target.value)}
                    className="w-full px-4 py-2 bg-brand-dark border border-brand-border rounded-lg text-xs text-white focus:outline-none focus:border-brand-orange transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-brand-orange to-brand-gold text-xs font-bold text-black uppercase tracking-wider hover:shadow-glow transition-all"
              >
                Submit Lobby for Approval
              </button>
            </form>
          </div>

          {/* Active Lobbies Panel */}
          <div className="lg:col-span-7 border border-brand-border bg-brand-card rounded-2xl p-6 md:p-8 space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">Moderation Queue</span>
                <h3 className="font-display text-xl font-bold text-white uppercase">Your Created Lobbies</h3>
              </div>
              <span className="px-2.5 py-1 rounded bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-[10px] font-bold uppercase tracking-wider">
                Live Status
              </span>
            </div>

            <div className="space-y-3.5">
              {createdLobbies.map((lobby, idx) => (
                <div key={idx} className="p-4 bg-brand-dark border border-brand-border rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1.5 text-left">
                    <div className="flex items-center gap-2">
                      <h4 className="font-display text-base font-bold text-white uppercase">{lobby.name}</h4>
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-brand-orange/10 text-brand-orange border border-brand-orange/20">
                        {lobby.type}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400">Map: {lobby.map} • Entry: {lobby.fee} • Prize: {lobby.prize}</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      lobby.status === 'Active' 
                        ? 'bg-green-500/10 border border-green-500/20 text-green-400' 
                        : 'bg-yellow-500/10 border border-yellow-500/20 text-yellow-400'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${lobby.status === 'Active' ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'}`}></span>
                      {lobby.status}
                    </span>
                    <p className="text-[9px] text-gray-500 mt-1">Lobby ID will generate once approved</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}