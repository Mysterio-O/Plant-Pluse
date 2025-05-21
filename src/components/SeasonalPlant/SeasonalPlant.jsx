import React from 'react';

const SeasonalPlant = () => {
    const picks = [
        {
            id: 1,
            name: 'Poinsettia',
            season: 'Winter',
            description: 'Vibrant red leaves brighten winter days. Keep in bright light and avoid cold drafts.',
            image: 'https://i.ibb.co/CsQqT9YR/dammanns-garden-co-poinsettias-houseplants-poinsettia-in-window.jpg',
        },
        {
            id: 2,
            name: 'Sunflower',
            season: 'Summer',
            description: 'Bold and cheerful, sunflowers thrive in full sun with well-drained soil.',
            image: 'https://i.ibb.co/Wvd68kTv/Sunflower-Henry-Wilde-Helianthus-annuus-HAHW-2101.jpg',
        },
        {
            id: 3,
            name: 'Chrysanthemum',
            season: 'Fall',
            description: 'Colorful blooms perfect for autumn. Water moderately and keep in cool temperatures.',
            image: 'https://i.ibb.co/Jjh5T6bf/growing-chrysanthemums-2-66f2b37f46192.jpg',
        },
    ];
    return (
        <div className="py-12 px-4">
            <h2 className="text-3xl font-semibold text-center mb-8">Seasonal Plant Picks</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {picks.map((pick) => (
                    <div
                        key={pick.id}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                    >
                        <img src={pick.image} alt={pick.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold">{pick.name}</h3>
                            <p className="text-gray-600 dark:text-gray-400">Season: {pick.season}</p>
                            <p className="text-gray-600 dark:text-gray-400">{pick.description}</p>
                            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors duration-300">
                                Explore
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SeasonalPlant;