import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { MdOutlineSort } from 'react-icons/md';
import { FcCollapse } from 'react-icons/fc';
import { Link } from 'react-router';
import Loader from '../pages/Loader';
import EmptyPage from '../pages/EmptyPage';

const AllPlantsCard = () => {
    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sort, setSort] = useState('');
    const [isSortOpen, setIsSortOpen] = useState(false);

    useEffect(() => {
        fetch(`https://b11a10-server-side-mysterio-o.vercel.app/plants?sortParam=${sort}`)
            .then((res) => res.json())
            .then((data) => {
                setPlants(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching plants:', err);
                setLoading(false);
            });
    }, [sort]);

    useEffect(() => {
        document.title = 'All Plants || Plant_Pulse';
    }, []);

    const handleSortNext = () => {
        setSort('nextWateringDate');
    };

    const handleSortLast = () => {
        setSort('lastWateredDate');
    };

    const handleSortDefault = () => {
        setSort('');
    };

    const customStyle = `
    .care-level-easy {
      color: #10B981;
    }
    .care-level-moderate {
      color: #F59E0B;
    }
    .care-level-difficult {
      color: #EF4444;
    }
    .dark .care-level-easy {
      color: #34D399;
    }
    .dark .care-level-moderate {
      color: #FCD34D;
    }
    .dark .care-level-difficult {
      color: #F87171;
    }
  `;

    // Animation variants for cards
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, duration: 0.3, ease: 'easeOut' },
        }),
    };

    return (
        <div className="max-w-6xl mx-auto mt-6 p-6 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 raleway-regular min-h-[calc(100vh-4rem)]">
            {plants.length === 0 && !loading ? (
                <EmptyPage />
            ) : (
                <>
                    {/* Sort Toggle Button */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <button
                            onClick={() => setIsSortOpen(!isSortOpen)}
                            className="btn btn-primary px-6 py-2 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition duration-200 ease-in-out mb-3 text-xl flex items-center gap-2"
                        >
                            {!isSortOpen ? 'Sort' : 'Collapse'}
                            {!isSortOpen ? <MdOutlineSort size={30} /> : <FcCollapse size={30} />}
                        </button>
                    </motion.div>

                    {/* Sort Buttons */}
                    <motion.div
                        className={`${!isSortOpen ? 'hidden' : 'flex flex-wrap gap-2 mb-4'}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: isSortOpen ? 1 : 0, height: isSortOpen ? 'auto' : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <button
                            onClick={handleSortNext}
                            className="btn btn-primary capitalize px-5 py-2.5 text-base font-medium rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm focus:outline-2 focus:outline-offset-2 focus:outline-emerald-500 disabled:bg-gray-400 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
                        >
                            Sort by Next Watering Date
                        </button>
                        <button
                            onClick={handleSortLast}
                            className="btn btn-primary capitalize px-5 py-2.5 text-base font-medium rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm focus:outline-2 focus:outline-offset-2 focus:outline-emerald-500 disabled:bg-gray-400 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
                        >
                            Sort by Last Watered Date
                        </button>
                        <button
                            onClick={handleSortDefault}
                            className="btn btn-primary capitalize px-5 py-2.5 text-base font-medium rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm focus:outline-2 focus:outline-offset-2 focus:outline-emerald-500 disabled:bg-gray-400 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
                        >
                            Sort by Default
                        </button>
                    </motion.div>

                    <style>{customStyle}</style>

                    {/* Plant Cards */}
                    {loading ? (
                        <Loader />
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {plants.map((plant, index) => (
                                <motion.div
                                    key={plant._id}
                                    className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200"
                                    variants={cardVariants}
                                    initial="hidden"
                                    animate="visible"
                                    custom={index}
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img src={plant.image} alt={`${plant.name} avatar`} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold text-emerald-600 dark:text-emerald-400">{plant.name}</div>
                                            <div className="text-sm bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent font-semibold">
                                                {plant.category}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <p>
                                            <span className="font-medium">Watering Frequency:</span>{' '}
                                            <span className="badge badge-ghost badge-sm">{plant.wateringFrequency}</span>
                                        </p>
                                        <p>
                                            <span className="font-medium">Last Watered:</span> {plant.lastWateredDate}
                                        </p>
                                        <p>
                                            <span className="font-medium">Next Watering:</span>{' '}
                                            <span className="badge badge-ghost badge-sm">{plant.nextWateringDate}</span>
                                        </p>
                                        <p>
                                            <span className="font-medium">Care Level:</span>{' '}
                                            <span className={`care-level-${plant.careLevel.toLowerCase()}`}>{plant.careLevel}</span>
                                        </p>
                                    </div>
                                    <Link to={`/plantDetails/${plant._id}`}>
                                        <button className="btn btn-info dark:btn-outline btn-sm w-full mt-3">
                                            Details
                                        </button>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default AllPlantsCard;