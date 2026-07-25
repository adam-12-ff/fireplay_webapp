import React from 'react';
import { Trophy, Users, Shield, Zap, Flame, DollarSign, Calendar } from 'lucide-react';

export interface Tournament {
  id: string;
  title: string;
  type: 'SOLO' | 'DUO' | 'SQUAD';
  prizePool: string;
  entryFee: string;
  slotsTotal: number;
  slotsFilled: number;
  time: string;
  map: 'Bermuda' | 'Purgatory' | 'Kalahari' | 'Alpine';
  status: 'UPCOMING' | 'REGISTRATION OPEN' | 'LIVE' | 'FINISHED';
}

interface TournamentCardProps {
  tournament: Tournament;
  onJoinClick: (tournament: Tournament) => void;
}

export default function TournamentCard({ tournament, onJoinClick }: TournamentCardProps) {
  const fillPercentage = (tournament.slotsFilled / tournament.slotsTotal) * 100;
  const isFull = tournament.slotsFilled >= tournament.slotsTotal;

  const mapBadgeColor = {
    Bermuda: 'bg-green-500/10 border-green-500/30 text-green-400',
    Purgatory: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400',
    Kalahari: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400',
    Alpine: 'bg-sky-500/10 border-sky-500/30 text-sky-400',
  }[tournament.map];

  return (
    <div className="relative overflow-hidden rounded-xl border border-brand-border bg-brand-card hover:border-brand-orange/40 transition-all duration-300 group flex flex-col h-full">
      {/* Glow highlight */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange via-brand-gold to-brand-orange transform -translate-y-1 group-hover:translate-y-0 transition-transform duration-300"></div>

      {/* Card Header */}
      <div className="p-4 bg-[#16161c] border-b border-brand-border/40 flex items-center justify-between">
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${mapBadgeColor} uppercase tracking-wider`}>
          {tournament.map}
        </span>
        <span className="flex items-center gap-1 text-[11px] text-gray-400">
          <Calendar className="w-3.5 h-3.5 text-brand-orange" />
          {tournament.time}
        </span>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-grow space-y-4">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display text-lg font-bold text-white group-hover:text-brand-orange transition-colors uppercase leading-tight">
              {tournament.title}
            </h3>
            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-brand-orange/10 text-brand-orange border border-brand-orange/20">
              {tournament.type}
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1">Free Fire Clash Squad / Battle Royale</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 bg-brand-dark/50 p-3 rounded-lg border border-brand-border/40">
          <div>
            <span className="block text-[9px] text-gray-500 uppercase tracking-wider">Prize Pool</span>
            <span className="text-base font-extrabold text-brand-gold flex items-center gap-0.5">
              <Trophy className="w-4 h-4 text-brand-gold shrink-0" />
              {tournament.prizePool}
            </span>
          </div>
          <div>
            <span className="block text-[9px] text-gray-500 uppercase tracking-wider">Entry Fee</span>
            <span className="text-base font-extrabold text-white flex items-center gap-0.5">
              <DollarSign className="w-4 h-4 text-brand-orange shrink-0" />
              {tournament.entryFee}
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div>
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-gray-400 flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-brand-orange" />
              Slots Filled
            </span>
            <span className="font-bold text-white">
              {tournament.slotsFilled} / {tournament.slotsTotal}
            </span>
          </div>
          <div className="w-full bg-brand-dark h-2 rounded-full overflow-hidden border border-brand-border">
            <div 
              className="bg-gradient-to-r from-brand-orange to-brand-gold h-full rounded-full transition-all duration-300"
              style={{ width: `${fillPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Card Footer Action */}
      <div className="p-4 bg-[#16161c] border-t border-brand-border/40 mt-auto">
        <button
          onClick={() => onJoinClick(tournament)}
          disabled={isFull && tournament.status !== 'LIVE'}
          className={`w-full py-2.5 rounded-lg font-display text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
            tournament.status === 'LIVE'
              ? 'bg-red-500/10 border border-red-500/30 text-red-500 hover:bg-red-500/20'
              : isFull
              ? 'bg-brand-border text-gray-500 cursor-not-allowed border border-transparent'
              : 'bg-brand-orange hover:bg-brand-orange-hover text-black hover:shadow-glow'
          }`}
        >
          {tournament.status === 'LIVE' 
            ? '🔴 Watch Live Room' 
            : isFull 
            ? 'Slots Filled' 
            : 'Register & Join Room'}
        </button>
      </div>
    </div>
  );
}