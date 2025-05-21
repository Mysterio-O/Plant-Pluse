import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PlantDetailsCard from '../../pages/PlantDetailsCard';
import Loader from '../../pages/Loader';

const PlantDetails = () => {
    const { id } = useParams();
    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/plant.json')
            .then(res => res.json())
            .then(data => {
                setPlants(data);
                setLoading(false)
                // console.log(data)
            })
    }, [])
    // console.log(plants, typeof id);
    const plant = plants.find(p => p.id === parseInt(id));
    // console.log(plant)
    return (
        <div>
            {
                loading ? <Loader /> : <PlantDetailsCard plant={plant} />
            }
        </div>
    );
};

export default PlantDetails;