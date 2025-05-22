import React, { useEffect, useState } from 'react';
import PlantTable from '../../pages/PlantTable';
import Loader from '../../pages/Loader'
import EmptyPage from '../../pages/EmptyPage';

const AllPlants = () => {
    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/plants').then(res => res.json()).then(data => {
            console.log(data)
            setPlants(data)
            setLoading(false)
        })
    }, [])
    // console.log(plants)
    return (
        plants.length === 0 ? (<EmptyPage />)
            : (
                <div className='max-w-6xl mx-auto mt-6'>
                    <div className="overflow-x-auto dark:text-white">
                        {
                            loading ? <Loader />
                                : <table className="table">
                                    {/* head */}
                                    <thead className='dark:bg-white'>
                                        <tr className='w-full'>
                                            <th>Plant</th>
                                            <th>Watering Frequency</th>
                                            <th className='hidden md:block'>Watering</th>
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