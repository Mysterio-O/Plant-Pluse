import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PlantDetailsCard from '../../pages/PlantDetailsCard';
import Loader from '../../pages/Loader';

const PlantDetails = () => {
    const { id } = useParams();
    const [plant, setPlant] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://assignment-010-server.vercel.app/plants/${id}`)
            .then(res => res.json())
            .then(data => {
                setPlant(data);
                setLoading(false)
                // console.log(data)
            })
    }, [id])


    useEffect(() => {
        document.title = `${plant.name}-Details/${plant?.displayName}`
    }, [plant])

    return (
        <div>
            {
                loading ? <Loader /> : <PlantDetailsCard plant={plant} />
            }
        </div>
    );
};

export default PlantDetails;