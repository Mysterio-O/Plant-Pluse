import React from 'react';

const PlantCare = () => {
    const tips = [
        { id: 1, title: 'Water Wisely', description: 'Check soil moisture before watering. Overwatering can harm roots, while underwatering causes wilting.', icon: '💧' },
        { id: 2, title: 'Light Matters', description: 'Place plants in spots with the right light—bright indirect for most, direct for succulents.', icon: '☀️' },
        { id: 3, title: 'Prune Regularly', description: 'Trim dead leaves to encourage growth and keep your plants looking tidy.', icon: '✂️' },
    ];
    return (
        <div className="py-12 px-4 bg-gradient-to-b from-[#E6F4EA] to-gray-50 dark:bg-none dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-[1400px] px-6 py-12 rounded-t-md mx-auto lg:animate-pulse hover:animate-none bg-white dark:bg-gray-50 dark:bg-gradient group">
                <h2 className="text-3xl  font-semibold flex flex-col justify-center items-center mb-8 group-hover:text-[#10B981] dark:group-hover:text-black transition-all duration-300 text-[#ffd700] lg:text-black dark:text-[#ffd700] group-hover:scale-110 group-hover:translate-y-2">
                <span>Plant Care Tips</span>
                <span className='bg-[#10B981] w-0 h-0 group-hover:h-1 group-hover:w-40 transition-all duration-500 dark:bg-black'/>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto hover:scale-110 transition-all duration-500 hover:skew-x-6">
                {tips.map((tip) => (
                    <div
                        key={tip.id}
                        className="bg-white dark:text-white dark:bg-gray-700 rounded-lg shadow-md p-6 flex items-start space-x-4 hover:shadow-lg transition-shadow duration-300 dark:hover:shadow-cyan-300"
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
        </div>
    );
};

export default PlantCare;