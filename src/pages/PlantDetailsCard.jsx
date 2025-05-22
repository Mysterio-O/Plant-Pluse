import React from 'react';
import { Link } from 'react-router';

const PlantDetailsCard = ({ plant }) => {
    console.log(plant)


    const customStyles = `
  .plant-details-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .plant-details-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }
  .plant-image {
    transition: transform 0.5s ease;
  }
  .plant-details-card:hover .plant-image {
    transform: scale(1.05);
  }
  .care-level-Easy {
    background: linear-gradient(45deg, #10B981, #34D399);
  }
  .care-level-Moderate {
    background: linear-gradient(45deg, #FBBF24, #F59E0B);
  }
  .care-level-Difficult {
    background: linear-gradient(45deg, #EF4444, #F87171);
  }
  .dark .care-level-Easy {
    background: linear-gradient(45deg, #059669, #10B981);
  }
  .dark .care-level-Moderate {
    background: linear-gradient(45deg, #FCD34D, #F59E0B);
  }
  .dark .care-level-Difficult {
    background: linear-gradient(45deg, #F87171, #DC2626);
  }
  .action-btn {
    background: linear-gradient(45deg, #10B981, #34D399);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .action-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
  .dark .action-btn {
    background: linear-gradient(45deg, #059669, #10B981);
  }
  .text-glow {
    text-shadow: 0 0 10px rgba(255, 202, 40, 0.7);
  }
`;

    return (
        <section className="py-16 bg-[#E6F4EA] dark:bg-gray-900 min-h-screen">
            <style>{customStyles}</style>
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto">
                    <div className="plant-details-card rounded-xl overflow-hidden p-8 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-800 dark:to-gray-700">
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="flex-shrink-0">
                                <img
                                    src={plant?.image}
                                    alt={plant?.name}
                                    className="plant-image w-full md:w-64 h-64 object-cover rounded-xl"
                                />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-4xl font-bold text-[#263238] dark:text-[#FFCA28] rancho-regular text-glow">
                                    {plant?.name}
                                </h2>
                                <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">{plant?.category}</p>
                                <div className="mt-4 space-x-3">
                                    <span
                                        className={`inline-block text-white text-sm font-medium px-4 py-2 rounded-full care-level-${plant?.careLevel}`}
                                    >
                                        {plant?.careLevel}
                                    </span>
                                    <span
                                        className='font-bold text-[#263238] dark:text-[#FFCA28] text-glow'
                                    >
                                      Added By: {plant?.displayName.toUpperCase()}
                                    </span>
                                </div>
                                <p className="text-gray-700 dark:text-gray-200 mt-4 text-lg">{plant?.description}</p>
                                <div className="mt-6 space-y-3">
                                    <p className="text-gray-600 dark:text-gray-300">
                                        <span className="font-medium">Watering Frequency:</span> {plant?.wateringFrequency}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        <span className="font-medium">Last Watered:</span> {plant?.lastWateredDate}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        <span className="font-medium">Next Watering:</span> {plant?.nextWateringDate}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        <span className="font-medium">Health Status:</span> {plant?.healthStatus}
                                    </p>
                                </div>
                                <div className="mt-6 flex gap-4">
                                    <Link to="/">
                                        <button className="action-btn text-white font-semibold py-2 px-6 rounded-full">
                                            Back to Home
                                        </button>
                                    </Link>
                                    <button className="action-btn text-white font-semibold py-2 px-6 rounded-full">
                                        Log Care
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlantDetailsCard;