import React from 'react';
import { useParams } from 'react-router';

const PlantDetails = () => {
    const id = useParams();

    return (
        <div>
            {`from ${id.id}`}
        </div>
    );
};

export default PlantDetails;