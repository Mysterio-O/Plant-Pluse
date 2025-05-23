import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const SeasonalPlant = () => {
    const [picks, setPicks] = useState([]);
    const [selectedPlant, setSelectedPlant] = useState(null);

    useEffect(() => {
        fetch('/seasonal_pick.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setPicks(data);
            })
            .catch(err => {
                console.error(err.code, err.message);
            });
    }, []);

    const openModal = (plant) => {
        setSelectedPlant(plant);
    };

    const closeModal = () => {
        setSelectedPlant(null);
    };

    return (
        <div className="py-12 px-4">
            <h2 className="text-3xl font-semibold text-center mb-8">Seasonal Plant Picks</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {picks.map((pick) => (
                    <div
                        key={pick.id}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                    >
                        <img src={pick?.image} alt={pick.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold">{pick.name}</h3>
                            <p className="text-gray-600 dark:text-gray-400">Season: {pick.season}</p>
                            <p className="text-gray-600 dark:text-gray-400">{pick.description}</p>
                            <button
                                onClick={() => openModal(pick)}
                                className="mt-4 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors duration-300"
                            >
                                Explore
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {selectedPlant && (
                <div className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300">
                    <div className="w-full max-w-lg bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden transform transition-transform duration-300 scale-95 hover:scale-100">
                        <div className="relative h-56">
                            <img
                                src={selectedPlant.image}
                                alt={selectedPlant.name}
                                className="w-full h-full object-cover rounded-t-2xl"
                            />
                            <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                                {selectedPlant.season}
                            </div>
                        </div>
                        <div className="p-6 max-h-[60vh] overflow-y-auto bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">{selectedPlant.name}</h2>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">{selectedPlant.description}</p>

                            <div className="space-y-4">
                                <div className="bg-blue-50 dark:bg-blue-800/40 p-4 rounded-lg transition-all hover:bg-blue-100 dark:hover:bg-blue-800/60 hover:shadow-md">
                                    <h3 className="text-sm font-semibold text-blue-700 dark:text-blue-300">Fun Fact</h3>
                                    <p className="text-xs text-gray-700 dark:text-gray-200">{selectedPlant.funFact}</p>
                                </div>
                                <div className="bg-purple-50 dark:bg-purple-800/40 p-4 rounded-lg transition-all hover:bg-purple-100 dark:hover:bg-purple-800/60 hover:shadow-md">
                                    <h3 className="text-sm font-semibold text-purple-700 dark:text-purple-300">Care Tip</h3>
                                    <p className="text-xs text-gray-700 dark:text-gray-200">{selectedPlant.careTip}</p>
                                </div>
                                <div className="bg-indigo-50 dark:bg-indigo-800/40 p-4 rounded-lg transition-all hover:bg-indigo-100 dark:hover:bg-indigo-800/60 hover:shadow-md">
                                    <h3 className="text-sm font-semibold text-indigo-700 dark:text-indigo-300">Symbolism</h3>
                                    <p className="text-xs text-gray-700 dark:text-gray-200">{selectedPlant.symbolism}</p>
                                </div>
                            </div>

                            <div className="mt-5 grid grid-cols-3 gap-3 text-xs">
                                <div>
                                    <span className="font-semibold text-gray-900 dark:text-white">Colors: </span>
                                    <span className="text-gray-600 dark:text-gray-300">{selectedPlant.bloomColor}</span>
                                </div>
                                <div>
                                    <span className="font-semibold text-gray-900 dark:text-white">Difficulty: </span>
                                    <span className="text-gray-600 dark:text-gray-300">{selectedPlant.difficultyLevel}</span>
                                </div>
                                <div>
                                    <span className="font-semibold text-gray-900 dark:text-white">Companions: </span>
                                    <span className="text-gray-600 dark:text-gray-300">{selectedPlant.companionPlants}</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 bg-gray-50 dark:bg-gray-800 text-center">
                            <button
                                onClick={closeModal}
                                className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white text-sm px-6 py-2.5 rounded-full hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600 transition-all duration-200 shadow-md hover:shadow-lg"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SeasonalPlant;