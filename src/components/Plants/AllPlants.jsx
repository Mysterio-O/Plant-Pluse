import React, { useEffect, useState } from 'react';
import PlantTable from '../../pages/PlantTable';
import Loader from '../../pages/Loader'
import EmptyPage from '../../pages/EmptyPage';
import { MdOutlineSort } from 'react-icons/md';
import { FcCollapse } from 'react-icons/fc';

const AllPlants = () => {
    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState(true);

    const [sort, setSort] = useState('');

    const [isSortOpen, setIsSortOpen] = useState(false);

    useEffect(() => {
        fetch(`https://b11a10-server-side-mysterio-o.vercel.app/plants?sortParam=${sort}`).then(res => res.json())
            .then(data => {
                // console.log(data)
                setPlants(data)
                setLoading(false)
            })
    }, [sort])
    // console.log(plants)

    useEffect(() => {
        document.title = 'All Plants || Plant_Pulse'
    }, [])


    const handleSortNext = async () => {
        // console.log('clicked');
        setSort('nextWateringDate');
    }

    const handleSortLast = () => {
        setSort('lastWateredDate')
    }

    const handleSortDefault = () => {
        setSort('')
    }


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
    `



    return (
        plants.length === 0 ? (<EmptyPage />)
            : (
                <div className='max-w-6xl mx-auto mt-6'>

                    {/* handle open-close sort buttons */}
                    <button
                        onClick={() => setIsSortOpen(!isSortOpen)}
                        className="btn btn-primary px-6 py-2 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition duration-200 ease-in-out mb-3 text-xl">
                        {
                            !isSortOpen ? 'Sort' : 'Collapse'
                        }
                        {
                            !isSortOpen ? <span><MdOutlineSort size={30} /></span> : <span><FcCollapse size={30} /></span>
                        }


                    </button>


                    {/* sort buttons */}
                    <div className={`${!isSortOpen ? 'hidden' : 'block'}`}>
                        <button
                            onClick={handleSortNext}
                            className="btn btn-primary capitalize px-5 py-2.5 text-base font-medium rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm focus:outline-2 focus:outline-offset-2 focus:outline-primary/50 disabled:bg-gray-400 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 mb-2 mr-2"
                        >
                            sort by next watering date
                        </button>
                        <button
                            onClick={handleSortLast}
                            className="btn btn-primary capitalize px-5 py-2.5 text-base font-medium rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm focus:outline-2 focus:outline-offset-2 focus:outline-primary/50 disabled:bg-gray-400 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 mb-2 mr-2"
                        >
                            sort by last watering date
                        </button>
                        <button
                            onClick={handleSortDefault}
                            className="btn btn-primary capitalize px-5 py-2.5 text-base font-medium rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm focus:outline-2 focus:outline-offset-2 focus:outline-primary/50 disabled:bg-gray-400 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 mb-2"
                        >
                            sort by Default
                        </button>
                    </div>

                    <style>{customStyle}</style>
                    <div className="overflow-x-auto dark:text-white">
                        {
                            loading ? <Loader />
                                : <table className="table">
                                    {/* head */}
                                    <thead className='bg-black dark:bg-green-300 bg-clip-text text-transparent'>
                                        <tr className='w-full'>
                                            <th>Plant</th>
                                            <th>Watering Frequency</th>
                                            <th>Watering</th>
                                            <th>Care Level</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        {
                                            plants.map(plant => <PlantTable key={plant._id} plant={plant} />)
                                        }

                                    </tbody>
                                </table>
                        }
                    </div>
                </div>
            )
    );
};

export default AllPlants;