import React, { useState, useEffect } from 'react';

const ProfileStats = ({ githubUsername, leetcodeUsername }) => {
    const [githubData, setGithubData] = useState(null);
    const [leetcodeData, setLeetcodeData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                // Fetch GitHub Contributions (Heatmap data)
                const ghContribRes = await fetch(`https://github-contributions-api.deno.dev/${githubUsername}.json`);
                let totalContribs = 0;
                if (ghContribRes.ok) {
                    const ghContribData = await ghContribRes.json();
                    if (ghContribData && ghContribData.contributions) {
                        // Sum up all contribution counts
                        totalContribs = ghContribData.contributions.flat().reduce((sum, day) => sum + day.contributionCount, 0);
                    }
                }

                // Fetch GitHub Stats
                const ghRes = await fetch(`https://api.github.com/users/${githubUsername}`);
                if (ghRes.ok) {
                    const ghData = await ghRes.json();
                    setGithubData({ ...ghData, totalContributions: totalContribs });
                }

                // Fetch LeetCode Stats
                const lcRes = await fetch(`https://leetcode-api-faisalshohag.vercel.app/${leetcodeUsername}`);
                if (lcRes.ok) {
                    const lcData = await lcRes.json();
                    if (!lcData.errors) {
                        setLeetcodeData(lcData);
                    }
                }
            } catch (error) {
                console.error("Error fetching profile stats:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, [githubUsername, leetcodeUsername]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* LeetCode Box */}
            <a href={`https://leetcode.com/u/${leetcodeUsername}/`} target="_blank" rel="noopener noreferrer" className="glass-card rounded-[2rem] p-8 md:p-10 flex flex-col justify-between hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(234,179,8,0.25)] transition-all group relative overflow-hidden min-h-[350px]">
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
                
                {loading ? (
                    <div className="animate-pulse flex flex-col justify-center h-full space-y-4">
                        <div className="h-6 bg-slate-700 rounded w-3/4 mx-auto"></div>
                        <div className="h-6 bg-slate-700 rounded w-1/2 mx-auto"></div>
                    </div>
                ) : leetcodeData && leetcodeData.totalSolved !== undefined ? (
                    <div className="grid grid-cols-3 gap-4 mt-auto">
                        <div className="bg-slate-900/60 rounded-xl p-5 text-center border border-slate-700/50 shadow-inner">
                            <p className="text-sm font-semibold text-gray-400 mb-2 tracking-wide uppercase">Easy</p>
                            <p className="text-3xl font-black text-green-400">{leetcodeData.easySolved}</p>
                        </div>
                        <div className="bg-slate-900/60 rounded-xl p-5 text-center border border-slate-700/50 shadow-inner">
                            <p className="text-sm font-semibold text-gray-400 mb-2 tracking-wide uppercase">Medium</p>
                            <p className="text-3xl font-black text-yellow-400">{leetcodeData.mediumSolved}</p>
                        </div>
                        <div className="bg-slate-900/60 rounded-xl p-5 text-center border border-slate-700/50 shadow-inner">
                            <p className="text-sm font-semibold text-gray-400 mb-2 tracking-wide uppercase">Hard</p>
                            <p className="text-3xl font-black text-red-400">{leetcodeData.hardSolved}</p>
                        </div>
                        <div className="col-span-3 bg-slate-900/60 rounded-xl p-6 text-center border border-slate-700/50 mt-2 flex justify-between items-center px-8 shadow-inner">
                            <span className="text-lg font-semibold text-gray-300 uppercase tracking-widest">Total Solved</span>
                            <span className="text-4xl font-black text-white">{leetcodeData.totalSolved}</span>
                        </div>
                    </div>
                ) : (
                    <div className="bg-slate-900/50 rounded-xl p-8 text-center border border-slate-700/50 flex-1 flex flex-col justify-center">
                        <p className="text-gray-400 text-lg">Waiting for LeetCode Data...</p>
                        <p className="text-sm text-gray-500 mt-3">Make sure username "{leetcodeUsername}" is correct.</p>
                    </div>
                )}
            </a>

            {/* GitHub Box */}
            <a href={`https://github.com/${githubUsername}`} target="_blank" rel="noopener noreferrer" className="glass-card rounded-[2rem] p-8 md:p-10 flex flex-col justify-between hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(99,102,241,0.25)] transition-all group relative overflow-hidden min-h-[350px]">
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
                
                {loading ? (
                    <div className="animate-pulse flex flex-col justify-center h-full space-y-4">
                        <div className="h-6 bg-slate-700 rounded w-3/4 mx-auto"></div>
                        <div className="h-6 bg-slate-700 rounded w-1/2 mx-auto"></div>
                    </div>
                ) : githubData ? (
                    <div className="grid grid-cols-3 gap-4 mt-auto">
                        <div className="bg-slate-900/60 rounded-xl p-4 text-center border border-slate-700/50 flex flex-col items-center justify-center shadow-inner">
                            <i className="fas fa-fire text-orange-400 mb-2 text-xl"></i>
                            <span className="text-2xl font-black text-white">{githubData.totalContributions || 0}</span>
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide mt-1">Contribs</span>
                        </div>
                        <div className="bg-slate-900/60 rounded-xl p-4 text-center border border-slate-700/50 flex flex-col items-center justify-center shadow-inner">
                            <i className="fas fa-book text-indigo-400 mb-2 text-xl"></i>
                            <span className="text-2xl font-black text-white">{githubData.public_repos}</span>
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide mt-1">Repos</span>
                        </div>
                        <div className="bg-slate-900/60 rounded-xl p-4 text-center border border-slate-700/50 flex flex-col items-center justify-center shadow-inner">
                            <i className="fas fa-users text-blue-400 mb-2 text-xl"></i>
                            <span className="text-2xl font-black text-white">{githubData.followers}</span>
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
                ) : (
                    <div className="bg-slate-900/50 rounded-xl p-8 text-center border border-slate-700/50 flex-1 flex flex-col items-center justify-center">
                        <p className="text-gray-400 text-lg">Failed to load GitHub Data</p>
                    </div>
                )}
            </a>
        </div>
    );
};

export default ProfileStats;
