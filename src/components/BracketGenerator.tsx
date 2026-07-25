import React, { useState } from 'react';
import { Trophy, Users, ArrowRight, ShieldAlert, Check, Plus, Trash2 } from 'lucide-react';

interface Team {
  id: string;
  name: string;
}

interface Match {
  id: string;
  round: number;
  teamA: Team | null;
  teamB: Team | null;
  scoreA: number;
  scoreB: number;
  winnerId: string | null;
}

export default function BracketGenerator() {
  const [teams, setTeams] = useState<Team[]>([
    { id: '1', name: 'TSG Esports' },
    { id: '2', name: 'Total Gaming' },
    { id: '3', name: 'Nigma Galaxy' },
    { id: '4', name: 'GodLike FF' },
    { id: '5', name: 'Orangutan Gaming' },
    { id: '6', name: 'Chemin Esports' },
    { id: '7', name: 'Revenant Esports' },
    { id: '8', name: 'Skylightz Gaming' },
  ]);

  const [newTeamName, setNewTeamName] = useState('');
  const [matches, setMatches] = useState<Match[]>([
    // Round 1 (Quarter Finals)
    { id: 'q1', round: 1, teamA: { id: '1', name: 'TSG Esports' }, teamB: { id: '2', name: 'Total Gaming' }, scoreA: 0, scoreB: 0, winnerId: null },
    { id: 'q2', round: 1, teamA: { id: '3', name: 'Nigma Galaxy' }, teamB: { id: '4', name: 'GodLike FF' }, scoreA: 0, scoreB: 0, winnerId: null },
    { id: 'q3', round: 1, teamA: { id: '5', name: 'Orangutan Gaming' }, teamB: { id: '6', name: 'Chemin Esports' }, scoreA: 0, scoreB: 0, winnerId: null },
    { id: 'q4', round: 1, teamA: { id: '7', name: 'Revenant Esports' }, teamB: { id: '8', name: 'Skylightz Gaming' }, scoreA: 0, scoreB: 0, winnerId: null },
    // Round 2 (Semi Finals)
    { id: 's1', round: 2, teamA: null, teamB: null, scoreA: 0, scoreB: 0, winnerId: null },
    { id: 's2', round: 2, teamA: null, teamB: null, scoreA: 0, scoreB: 0, winnerId: null },
    // Round 3 (Grand Finals)
    { id: 'f1', round: 3, teamA: null, teamB: null, scoreA: 0, scoreB: 0, winnerId: null },
  ]);

  const addTeam = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTeamName.trim() || teams.length >= 8) return;
    const newTeam = { id: Date.now().toString(), name: newTeamName.trim() };
    setTeams([...teams, newTeam]);
    setNewTeamName('');
    
    // Update round 1 matches with new team
    const updatedMatches = [...matches];
    const matchIndex = Math.floor((teams.length) / 2);
    if (matchIndex < 4) {
      const match = updatedMatches[matchIndex];
      if (!match.teamA) {
        match.teamA = newTeam;
      } else if (!match.teamB) {
        match.teamB = newTeam;
      }
      setMatches(updatedMatches);
    }
  };

  const deleteTeam = (id: string) => {
    const updatedTeams = teams.filter(t => t.id !== id);
    setTeams(updatedTeams);
    resetBracket(updatedTeams);
  };

  const resetBracket = (currentTeams: Team[]) => {
    const freshMatches: Match[] = [
      { id: 'q1', round: 1, teamA: currentTeams[0] || null, teamB: currentTeams[1] || null, scoreA: 0, scoreB: 0, winnerId: null },
      { id: 'q2', round: 1, teamA: currentTeams[2] || null, teamB: currentTeams[3] || null, scoreA: 0, scoreB: 0, winnerId: null },
      { id: 'q3', round: 1, teamA: currentTeams[4] || null, teamB: currentTeams[5] || null, scoreA: 0, scoreB: 0, winnerId: null },
      { id: 'q4', round: 1, teamA: currentTeams[6] || null, teamB: currentTeams[7] || null, scoreA: 0, scoreB: 0, winnerId: null },
      { id: 's1', round: 2, teamA: null, teamB: null, scoreA: 0, scoreB: 0, winnerId: null },
      { id: 's2', round: 2, teamA: null, teamB: null, scoreA: 0, scoreB: 0, winnerId: null },
      { id: 'f1', round: 3, teamA: null, teamB: null, scoreA: 0, scoreB: 0, winnerId: null },
    ];
    setMatches(freshMatches);
  };

  const setWinner = (matchId: string, winnerId: string, scoreWinner: number, scoreLoser: number) => {
    const updatedMatches = matches.map(m => {
      if (m.id === matchId) {
        const isTeamA = m.teamA?.id === winnerId;
        return {
          ...m,
          winnerId,
          scoreA: isTeamA ? scoreWinner : scoreLoser,
          scoreB: isTeamA ? scoreLoser : scoreWinner
        };
      }
      return m;
    });

    // Advance team to the next round
    const completedMatch = updatedMatches.find(m => m.id === matchId);
    if (completedMatch) {
      const winnerTeam = completedMatch.teamA?.id === winnerId ? completedMatch.teamA : completedMatch.teamB;
      
      if (matchId === 'q1' || matchId === 'q2') {
        const semiMatch = updatedMatches.find(m => m.id === 's1');
        if (semiMatch) {
          if (matchId === 'q1') semiMatch.teamA = winnerTeam;
          if (matchId === 'q2') semiMatch.teamB = winnerTeam;
        }
      } else if (matchId === 'q3' || matchId === 'q4') {
        const semiMatch = updatedMatches.find(m => m.id === 's2');
        if (semiMatch) {
          if (matchId === 'q3') semiMatch.teamA = winnerTeam;
          if (matchId === 'q4') semiMatch.teamB = winnerTeam;
        }
      } else if (matchId === 's1' || matchId === 's2') {
        const finalMatch = updatedMatches.find(m => m.id === 'f1');
        if (finalMatch) {
          if (matchId === 's1') finalMatch.teamA = winnerTeam;
          if (matchId === 's2') finalMatch.teamB = winnerTeam;
        }
      }
    }

    setMatches(updatedMatches);
  };

  const getMatchById = (id: string) => matches.find(m => m.id === id);

  return (
    <div className="border border-brand-border bg-brand-card rounded-2xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="bg-[#16161c] p-6 border-b border-brand-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <Trophy className="w-5 h-5 text-brand-gold" />
            Interactive Bracket Generator
          </h3>
          <p className="text-xs text-gray-400">Generate, customize, and advance brackets for 8-team tournaments</p>
        </div>
        <button
          onClick={() => resetBracket(teams)}
          className="px-4 py-2 bg-brand-dark hover:bg-brand-border border border-brand-border text-xs font-bold text-white uppercase tracking-wider rounded-lg transition-colors"
        >
          Reset Bracket
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-brand-border">
        {/* Manage Teams Panel */}
        <div className="p-6 lg:col-span-1 space-y-4">
          <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
            <Users className="w-4 h-4 text-brand-orange" />
            Manage Teams ({teams.length}/8)
          </h4>

          <form onSubmit={addTeam} className="flex gap-2">
            <input
              type="text"
              value={newTeamName}
              onChange={(e) => setNewTeamName(e.target.value)}
              placeholder="Team Name"
              disabled={teams.length >= 8}
              className="flex-grow px-3 py-1.5 bg-brand-dark border border-brand-border rounded-lg text-xs text-white focus:outline-none focus:border-brand-orange disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={teams.length >= 8}
              className="p-1.5 rounded-lg bg-brand-orange text-black font-bold disabled:opacity-50"
            >
              <Plus className="w-4 h-4" />
            </button>
          </form>

          <div className="space-y-1.5 max-h-[220px] overflow-y-auto pr-1">
            {teams.map((team, index) => (
              <div key={team.id} className="flex items-center justify-between p-2 bg-brand-dark/50 border border-brand-border rounded-lg text-xs">
                <span className="font-semibold text-gray-300">
                  {index + 1}. {team.name}
                </span>
                <button
                  onClick={() => deleteTeam(team.id)}
                  className="p-1 text-gray-500 hover:text-brand-orange transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
            {teams.length === 0 && (
              <p className="text-xs text-gray-500 text-center py-4">No teams added yet.</p>
            )}
          </div>
        </div>

        {/* Bracket Visualizer Panel */}
        <div className="p-6 lg:col-span-3 bg-brand-dark/20 overflow-x-auto">
          <div className="min-w-[650px] grid grid-cols-3 gap-6 h-full items-center">
            
            {/* Round 1: Quarter Finals */}
            <div className="space-y-6">
              <h5 className="text-[10px] font-bold text-brand-orange uppercase tracking-widest text-center border-b border-brand-border/40 pb-2">
                Quarter Finals (BO1)
              </h5>
              {['q1', 'q2', 'q3', 'q4'].map((id) => {
                const match = getMatchById(id);
                if (!match) return null;
                return (
                  <div key={id} className="p-3 bg-[#16161c] border border-brand-border rounded-xl space-y-2 relative">
                    {/* Team A */}
                    <div className="flex items-center justify-between text-xs">
                      <span className={`font-semibold truncate max-w-[120px] ${match.winnerId === match.teamA?.id ? 'text-brand-gold font-bold' : 'text-gray-400'}`}>
                        {match.teamA?.name || 'TBD'}
                      </span>
                      {match.teamA && !match.winnerId && (
                        <button
                          onClick={() => setWinner(id, match.teamA!.id, 7, Math.floor(Math.random() * 6))}
                          className="px-1.5 py-0.5 bg-brand-orange/10 hover:bg-brand-orange text-[9px] text-brand-orange hover:text-black font-bold rounded"
                        >
                          Win
                        </button>
                      )}
                      {match.winnerId && (
                        <span className="font-bold text-white">{match.scoreA}</span>
                      )}
                    </div>
                    {/* Divider */}
                    <div className="border-t border-brand-border/40 my-1"></div>
                    {/* Team B */}
                    <div className="flex items-center justify-between text-xs">
                      <span className={`font-semibold truncate max-w-[120px] ${match.winnerId === match.teamB?.id ? 'text-brand-gold font-bold' : 'text-gray-400'}`}>
                        {match.teamB?.name || 'TBD'}
                      </span>
                      {match.teamB && !match.winnerId && (
                        <button
                          onClick={() => setWinner(id, match.teamB!.id, 7, Math.floor(Math.random() * 6))}
                          className="px-1.5 py-0.5 bg-brand-orange/10 hover:bg-brand-orange text-[9px] text-brand-orange hover:text-black font-bold rounded"
                        >
                          Win
                        </button>
                      )}
                      {match.winnerId && (
                        <span className="font-bold text-white">{match.scoreB}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Round 2: Semi Finals */}
            <div className="space-y-16">
              <h5 className="text-[10px] font-bold text-brand-orange uppercase tracking-widest text-center border-b border-brand-border/40 pb-2">
                Semi Finals (BO3)
              </h5>
              {['s1', 's2'].map((id) => {
                const match = getMatchById(id);
                if (!match) return null;
                return (
                  <div key={id} className="p-3 bg-[#16161c] border border-brand-border rounded-xl space-y-2 relative">
                    {/* Team A */}
                    <div className="flex items-center justify-between text-xs">
                      <span className={`font-semibold truncate max-w-[120px] ${match.winnerId === match.teamA?.id ? 'text-brand-gold font-bold' : 'text-gray-400'}`}>
                        {match.teamA?.name || 'Waiting...'}
                      </span>
                      {match.teamA && match.teamB && !match.winnerId && (
                        <button
                          onClick={() => setWinner(id, match.teamA!.id, 2, Math.floor(Math.random() * 2))}
                          className="px-1.5 py-0.5 bg-brand-orange/10 hover:bg-brand-orange text-[9px] text-brand-orange hover:text-black font-bold rounded"
                        >
                          Win
                        </button>
                      )}
                      {match.winnerId && (
                        <span className="font-bold text-white">{match.scoreA}</span>
                      )}
                    </div>
                    {/* Divider */}
                    <div className="border-t border-brand-border/40 my-1"></div>
                    {/* Team B */}
                    <div className="flex items-center justify-between text-xs">
                      <span className={`font-semibold truncate max-w-[120px] ${match.winnerId === match.teamB?.id ? 'text-brand-gold font-bold' : 'text-gray-400'}`}>
                        {match.teamB?.name || 'Waiting...'}
                      </span>
                      {match.teamA && match.teamB && !match.winnerId && (
                        <button
                          onClick={() => setWinner(id, match.teamB!.id, 2, Math.floor(Math.random() * 2))}
                          className="px-1.5 py-0.5 bg-brand-orange/10 hover:bg-brand-orange text-[9px] text-brand-orange hover:text-black font-bold rounded"
                        >
                          Win
                        </button>
                      )}
                      {match.winnerId && (
                        <span className="font-bold text-white">{match.scoreB}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Round 3: Grand Finals */}
            <div className="space-y-28">
              <h5 className="text-[10px] font-bold text-brand-gold glow-gold uppercase tracking-widest text-center border-b border-brand-border/40 pb-2">
                Grand Finals (BO5)
              </h5>
              {['f1'].map((id) => {
                const match = getMatchById(id);
                if (!match) return null;
                const grandWinner = match.winnerId 
                  ? (match.winnerId === match.teamA?.id ? match.teamA : match.teamB) 
                  : null;

                return (
                  <div key={id} className="space-y-4">
                    <div className="p-3 bg-[#16161c] border border-brand-gold/30 shadow-glow-gold rounded-xl space-y-2 relative">
                      {/* Team A */}
                      <div className="flex items-center justify-between text-xs">
                        <span className={`font-semibold truncate max-w-[120px] ${match.winnerId === match.teamA?.id ? 'text-brand-gold font-bold' : 'text-gray-400'}`}>
                          {match.teamA?.name || 'Waiting...'}
                        </span>
                        {match.teamA && match.teamB && !match.winnerId && (
                          <button
                            onClick={() => setWinner(id, match.teamA!.id, 3, Math.floor(Math.random() * 3))}
                            className="px-1.5 py-0.5 bg-brand-gold/10 hover:bg-brand-gold text-[9px] text-brand-gold hover:text-black font-bold rounded"
                          >
                            Win
                          </button>
                        )}
                        {match.winnerId && (
                          <span className="font-bold text-white">{match.scoreA}</span>
                        )}
                      </div>
                      {/* Divider */}
                      <div className="border-t border-brand-border/40 my-1"></div>
                      {/* Team B */}
                      <div className="flex items-center justify-between text-xs">
                        <span className={`font-semibold truncate max-w-[120px] ${match.winnerId === match.teamB?.id ? 'text-brand-gold font-bold' : 'text-gray-400'}`}>
                          {match.teamB?.name || 'Waiting...'}
                        </span>
                        {match.teamA && match.teamB && !match.winnerId && (
                          <button
                            onClick={() => setWinner(id, match.teamB!.id, 3, Math.floor(Math.random() * 3))}
                            className="px-1.5 py-0.5 bg-brand-gold/10 hover:bg-brand-gold text-[9px] text-brand-gold hover:text-black font-bold rounded"
                          >
                            Win
                          </button>
                        )}
                        {match.winnerId && (
                          <span className="font-bold text-white">{match.scoreB}</span>
                        )}
                      </div>
                    </div>

                    {grandWinner && (
                      <div className="p-3 bg-brand-gold/10 border border-brand-gold rounded-xl text-center space-y-1 animate-bounce">
                        <Trophy className="w-8 h-8 text-brand-gold mx-auto" />
                        <h6 className="font-display text-xs font-bold text-white uppercase">Tournament Champion</h6>
                        <p className="text-sm font-extrabold text-brand-gold uppercase">{grandWinner.name}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}