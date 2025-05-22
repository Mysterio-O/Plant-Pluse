import React from 'react';
import { Link } from 'react-router';

const PlantTable = ({ plant }) => {
    const { image, name, category, careLevel, wateringFrequency, _id, lastWateredDate, nextWateringDate } = plant;
    return (
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={image}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{category}</div>
                    </div>
                </div>
            </td>
            <td>
                <span className="badge badge-ghost badge-sm">{wateringFrequency}</span>
            </td>
            <td className='hidden md:block'>
                {`last watered ${lastWateredDate}`}
                <br />
                <span className="badge badge-ghost badge-sm">Next water {nextWateringDate}</span>
            </td>
            <td>{careLevel}</td>
            <th>
                <Link to={`/plantDetails/${_id}`}>
                    <button className="btn btn-ghost btn-xs">details</button>
                </Link>
            </th>
        </tr>
    );
};

export default PlantTable;