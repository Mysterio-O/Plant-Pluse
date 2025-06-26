import React from 'react';
import { Link } from 'react-router';

const PlantCard = ({ plant }) => {
    return (
        <div
            className="plant-card rounded-xl overflow-hidden flex flex-col items-center p-6
             bg-gradient-to-br from-green-50 to-emerald-100 
             dark:bg-white dark:from-white dark:to-white"
        >
            <div className="w-32 h-32 mb-4">
                <img
                    src={plant.image}
                    alt={plant.name}
                    className="plant-image w-full h-full object-cover"
                />
            </div>
            <h3 className="text-xl font-semibold text-[#263238] dark:text-black text-center">
                {plant.name}
            </h3>
            <p className="text-gray-600 dark:text-black text-sm mt-1 text-center">
                {plant.category}
            </p>
            <div className="mt-2">
                <span
                    className={`inline-block text-sm font-medium px-3 py-1 rounded-full border care-level-${plant.careLevel.toLowerCase()} dark:text-black`}
                >
                    {plant.careLevel}
                </span>
            </div>
            <p className="health-status text-gray-600 dark:text-black text-sm mt-2 opacity-75 text-center">
                <span className="font-medium">Health:</span> {plant.healthStatus}
            </p>
            <Link to={`/plantDetails/${plant._id}`}>
                <button className="view-details-btn mt-4 w-full text-white font-semibold py-2 rounded-full cursor-pointer">
                    View Details
                </button>
            </Link>
        </div>
    );
};

export default PlantCard;
