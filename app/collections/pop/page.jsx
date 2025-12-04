import React from 'react';
import { Trophy, Medal, Award } from 'lucide-react';

export default function WinnersPodium() {
  const winners = [
    { place: 1, name: "Li-Shuai", score: 55184, color: "bg-yellow-400", height: "h-64", icon: Trophy },
    { place: 2, name: "Louis", score: 42913, color: "bg-gray-300", height: "h-48", icon: Medal },
    { place: 3, name: "Patricia", score: 15798, color: "bg-amber-600", height: "h-40", icon: Award }
  ];

  const games = [
    "Video Games",
    "The Horror Film Genre",
    "Flags of Oceania",
    "Harry Potter and the Great Quiz Competition",
    "Foreign Languages Quiz",
    "Name that fish!",
    "The Lord of the Rings",
    "2000s Music",
    "What's Your Penguin IQ?"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-blue-300 to-indigo-300 flex items-center justify-center p-8">
      <div className="w-full px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900">Quiz Night Winners</h1>
        </div>

        <div className="flex items-end justify-between gap-12 max-w-[1800px] mx-auto">
          {/* Week Counter - Left Side */}
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-8 text-gray-900 w-[400px] self-center flex-shrink-0">
            <div className="text-center">
              <p className="text-6xl font-bold mb-2">9/9</p>
              <p className="text-2xl font-bold">weeks until the social</p>
              <p className="text-xl font-bold mt-2">November 29th</p>
            </div>
          </div>

          {/* Games List - Middle */}
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-8 text-gray-900 w-[700px] self-center flex-shrink-0">
            <h2 className="text-5xl font-bold mb-6 text-center">Kahoot!</h2>
            <div className="grid grid-cols-2 gap-3">
              {games.map((game, index) => (
                <div key={index} className="bg-white/30 rounded p-3 hover:bg-white/40 transition-colors">
                  <p className="font-bold text-lg">Game {index + 1}:</p>
                  <p className="text-xl font-bold">{game}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Podium */}
          <div className="flex items-end justify-center gap-10 flex-grow">
            {/* 2nd Place */}
            <div className="flex flex-col items-center flex-1 max-w-xs">
              <div className="mb-4 transform hover:scale-110 transition-transform">
                <Medal className="w-20 h-20 text-gray-300" />
              </div>
              <div className="bg-white rounded-t-lg shadow-2xl p-8 text-center w-full">
                <div className="text-7xl font-bold text-gray-400 mb-2">2</div>
                <h3 className="text-2xl font-semibold mb-2">{winners[1].name}</h3>
                <p className="text-3xl font-bold text-gray-600">{winners[1].score.toLocaleString()}</p>
                <p className="text-base text-gray-500 mt-1">points</p>
              </div>
              <div className={`${winners[1].color} ${winners[1].height} w-full rounded-b-lg shadow-xl`}></div>
            </div>

            {/* 1st Place */}
            <div className="flex flex-col items-center flex-1 max-w-xs">
              <div className="mb-4 transform hover:scale-110 transition-transform animate-pulse">
                <Trophy className="w-24 h-24 text-yellow-400" />
              </div>
              <div className="bg-white rounded-t-lg shadow-2xl p-8 text-center w-full">
                <div className="text-8xl font-bold text-yellow-500 mb-2">1</div>
                <h3 className="text-2xl font-semibold mb-2">{winners[0].name}</h3>
                <p className="text-3xl font-bold text-yellow-600">{winners[0].score.toLocaleString()}</p>
                <p className="text-base text-gray-500 mt-1">points</p>
              </div>
              <div className={`${winners[0].color} ${winners[0].height} w-full rounded-b-lg shadow-xl`}></div>
            </div>

            {/* 3rd Place */}
            <div className="flex flex-col items-center flex-1 max-w-xs">
              <div className="mb-4 transform hover:scale-110 transition-transform">
                <Award className="w-20 h-20 text-amber-600" />
              </div>
              <div className="bg-white rounded-t-lg shadow-2xl p-8 text-center w-full">
                <div className="text-7xl font-bold text-amber-700 mb-2">3</div>
                <h3 className="text-2xl font-semibold mb-2">{winners[2].name}</h3>
                <p className="text-3xl font-bold text-amber-600">{winners[2].score.toLocaleString()}</p>
                <p className="text-base text-gray-500 mt-1">points</p>
              </div>
              <div className={`${winners[2].color} ${winners[2].height} w-full rounded-b-lg shadow-xl`}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
