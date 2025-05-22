import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaLeaf } from 'react-icons/fa';
import { Link } from 'react-router';
import Loader from '../../pages/Loader';
import EmptyPage from '../../pages/EmptyPage';

const MyPlants = () => {
    const { user } = useContext(AuthContext);
    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`http://localhost:5000/plants_added/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setPlants(data);
                setLoading(false)
            })
            .catch(err => {
                console.error(err.code, err.message)
                setLoading(false)
            })
    }, [user]);



    const handleDelete = (id) => {
        setLoading(true)
        fetch(`http://localhost:5000/plants/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log('deleted successfully', data);
            const remainingPlants = plants.filter(plant => plant._id !== id);
            setPlants(remainingPlants);
            setLoading(false
                
            )
        })
        .catch(err => {
            console.error(err.code, err.message);
        })
    }


    return (
        plants.length === 0 ? (
            <EmptyPage />
        ) : (
            <section className="py-16 bg-gradient-to-b from-cream-100 to-gray-100 dark:from-green-950 dark:to-gray-900 transition-colors duration-500 max-w-6xl mx-auto mt-4 rounded-2xl">
                {loading ? (
                    <Loader />
                ) : (
                    <div className="container mx-auto px-4 ">
                        <div className="text-center mb-12 ">
                            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-500 dark:from-green-400 dark:to-teal-400 flex items-center justify-center gap-2 animate-pulse-slow">
                                <FaLeaf className="text-green-600 dark:text-green-400" /> My Plants
                            </h2>
                            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 animate-slide-up">
                                Nurture your green friends with love and care!
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {plants.map((plant) => (
                                <div
                                    key={plant.id}
                                    className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl  transition-all duration-300 transform hover:-translate-y-2 animate-slide-up hover:shadow-xl hover:shadow-orange-400 dark:hover:shadow-green-400"
                                >
                                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-t-2xl"></div>
                                    <img
                                        src={plant.image}
                                        alt={plant.name}
                                        className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-110"
                                    />
                                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
                                        <FaLeaf className="text-green-500 dark:text-green-400 text-lg" /> {plant.name}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300">Category: {plant.category}</p>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">Care Level: {plant.careLevel}</p>
                                    <Link to={`/plantDetails/${plant._id}`}>
                                        <button className="btn btn-primary w-full bg-gradient-to-r from-green-500 to-teal-500 dark:from-green-400 dark:to-teal-400 border-none text-white font-semibold hover:from-green-600 hover:to-teal-600 transition-all duration-300">
                                            View Details
                                        </button>
                                    </Link>
                                    <button
                                    onClick={()=> handleDelete(plant._id)}
                                    className="btn btn-primary w-full bg-gradient-to-r from-red-500 to-yellow-500 dark:from-red-400 dark:to-yellow-400 border-none text-white font-semibold hover:from-green-600 hover:to-red-600 transition-all duration-300 mt-3">
                                        Delete Plant
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </section>
        )
    );

};

export default MyPlants;