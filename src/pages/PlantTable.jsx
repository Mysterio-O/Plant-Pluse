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
                        <div className="font-bold text-green-300 dark:text-white">{name}</div>
                        <div className="text-sm opacity-50 bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent font-semibold">{category}</div>
                    </div>
                </div>
            </td>
            <td>
                <span className="badge badge-ghost badge-sm">{wateringFrequency}</span>
            </td>
            <td>
                <span className='text-black dark:text-white'>
                    {`Last: ${lastWateredDate}`}
                </span>
                <br />
                <span className="md:badge badge-ghost badge-sm">Next: {nextWateringDate}</span>
            </td>
            <td className={`care-level-${careLevel.toLowerCase()}`}>{careLevel}</td>
            <th>
                <Link to={`/plantDetails/${_id}`}>
                    <button className="btn btn-info dark:btn-outline  btn-xs">details</button>
                </Link>
            </th>
        </tr>
    );
};

export default PlantTable;