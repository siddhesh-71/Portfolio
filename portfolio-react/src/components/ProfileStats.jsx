import React from 'react';

const ProfileStats = ({ githubUsername, leetcodeUsername }) => {
    const leetcode = {
        easySolved: 12,
        mediumSolved: 18,
        hardSolved: 1,
        totalSolved: 31,
    };

    const github = {
        public_repos: 12,
        followers: 3,
        totalContributions: 180,
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* LeetCode Box */}
            <a href={`https://leetcode.com/u/${leetcodeUsername}/`} target="_blank" rel="noopener noreferrer"
                className="glass-card rounded-[2rem] p-8 md:p-10 flex flex-col justify-between hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(234,179,8,0.25)] transition-all group relative overflow-hidden min-h-[280px]">
                <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-500/5 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-125"></div>

                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-5">
                        <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 text-2xl border border-yellow-500/20 shadow-[0_0_15px_rgba(234,179,8,0.3)]">
                            <i className="fas fa-code"></i>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors">LeetCode Stats</h3>
                            <p className="text-base text-gray-400">@{leetcodeUsername}</p>
                        </div>
                    </div>
                    <i className="fas fa-external-link-alt text-gray-600 group-hover:text-yellow-400 transition-colors text-xl"></i>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-auto">
                    <div className="bg-slate-900/60 rounded-xl p-5 text-center border border-slate-700/50 shadow-inner">
                        <p className="text-sm font-semibold text-gray-400 mb-2 tracking-wide uppercase">Easy</p>
                        <p className="text-3xl font-black text-green-400">{leetcode.easySolved}</p>
                    </div>
                    <div className="bg-slate-900/60 rounded-xl p-5 text-center border border-slate-700/50 shadow-inner">
                        <p className="text-sm font-semibold text-gray-400 mb-2 tracking-wide uppercase">Medium</p>
                        <p className="text-3xl font-black text-yellow-400">{leetcode.mediumSolved}</p>
                    </div>
                    <div className="bg-slate-900/60 rounded-xl p-5 text-center border border-slate-700/50 shadow-inner">
                        <p className="text-sm font-semibold text-gray-400 mb-2 tracking-wide uppercase">Hard</p>
                        <p className="text-3xl font-black text-red-400">{leetcode.hardSolved}</p>
                    </div>
                    <div className="col-span-3 bg-slate-900/60 rounded-xl p-6 text-center border border-slate-700/50 mt-2 flex justify-between items-center px-8 shadow-inner">
                        <span className="text-lg font-semibold text-gray-300 uppercase tracking-widest">Total Solved</span>
                        <span className="text-4xl font-black text-white">{leetcode.totalSolved}</span>
                    </div>
                </div>
            </a>

            {/* GitHub Box */}
            <a href={`https://github.com/${githubUsername}`} target="_blank" rel="noopener noreferrer"
                className="glass-card rounded-[2rem] p-8 md:p-10 flex flex-col justify-between hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(99,102,241,0.25)] transition-all group relative overflow-hidden min-h-[280px]">
                <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/5 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-125"></div>

                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-5">
                        <div className="w-16 h-16 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 text-3xl border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                            <i className="fab fa-github"></i>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">GitHub Profile</h3>
                            <p className="text-base text-gray-400">@{githubUsername}</p>
                        </div>
                    </div>
                    <i className="fas fa-external-link-alt text-gray-600 group-hover:text-indigo-400 transition-colors text-xl"></i>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-auto">
                    <div className="bg-slate-900/60 rounded-xl p-4 text-center border border-slate-700/50 flex flex-col items-center justify-center shadow-inner">
                        <i className="fas fa-fire text-orange-400 mb-2 text-xl"></i>
                        <span className="text-2xl font-black text-white">{github.totalContributions}+</span>
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide mt-1">Contribs</span>
                    </div>
                    <div className="bg-slate-900/60 rounded-xl p-4 text-center border border-slate-700/50 flex flex-col items-center justify-center shadow-inner">
                        <i className="fas fa-book text-indigo-400 mb-2 text-xl"></i>
                        <span className="text-2xl font-black text-white">{github.public_repos}</span>
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide mt-1">Repos</span>
                    </div>
                    <div className="bg-slate-900/60 rounded-xl p-4 text-center border border-slate-700/50 flex flex-col items-center justify-center shadow-inner">
                        <i className="fas fa-users text-blue-400 mb-2 text-xl"></i>
                        <span className="text-2xl font-black text-white">{github.followers}</span>
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide mt-1">Followers</span>
                    </div>
                    <div className="col-span-3 mt-2 relative">
                        <img
                            src={`https://ghchart.rshah.org/22c55e/${githubUsername}`}
                            alt="GitHub Contributions Chart"
                            className="w-full rounded-xl opacity-80 group-hover:opacity-100 transition-opacity bg-slate-900/60 p-4 border border-slate-700/50 shadow-inner"
                        />
                    </div>
                </div>
            </a>
        </div>
    );
};

export default ProfileStats;
