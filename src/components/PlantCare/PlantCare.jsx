import React from 'react';

const PlantCare = () => {
    const tips = [
        { id: 1, title: 'Water Wisely', description: 'Check soil moisture before watering. Overwatering can harm roots, while underwatering causes wilting.', icon: '💧' },
        { id: 2, title: 'Light Matters', description: 'Place plants in spots with the right light—bright indirect for most, direct for succulents.', icon: '☀️' },
        { id: 3, title: 'Prune Regularly', description: 'Trim dead leaves to encourage growth and keep your plants looking tidy.', icon: '✂️' },
    ];
    return (
        <div className="py-12 px-4 bg-green-50 dark:bg-gray-800 group">
            <h2 className="text-3xl font-semibold text-center mb-8 group-hover:text-[#FFD700] transition-colors duration-300">Plant Care Tips</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {tips.map((tip) => (
                    <div
                        key={tip.id}
                        className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 flex items-start space-x-4 hover:shadow-lg transition-shadow duration-300 dark:hover:shadow-cyan-300"
                    >
                        <span className="text-3xl">{tip.icon}</span>
                        <div>
                            <h3 className="text-xl font-semibold">{tip.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{tip.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlantCare;