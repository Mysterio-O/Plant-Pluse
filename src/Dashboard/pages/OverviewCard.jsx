import React from 'react';
import {
    CircularProgressbar,
    buildStyles
} from 'react-circular-progressbar';

const OverviewCard = ({ card }) => {
    const {Icon} = card
    return (
        <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
            <div className='flex justify-between items-start'>
                <div>
                    <h4 className="text-gray-500 text-sm font-medium flex justify-center items-center gap-2">{card.title}
                        <Icon size={26} className={card.iconColor}/>
                    </h4>
                    <h2 className="text-3xl font-bold text-gray-900">{card.value}</h2>
                    <p className={`text-sm mt-1 font-medium`} style={{ color: card.changeColor }}>
                        {card.change}
                    </p>
                </div>
                <div className="w-12 h-12">
                    <CircularProgressbar
                        value={card.progress}
                        text={`${card.progress}%`}
                        styles={buildStyles({
                            textSize: '32px',
                            pathColor: card.color,
                            textColor: card.color,
                            trailColor: '#e5e7eb',
                        })}
                    />
                </div>
            </div>
        </div>
    );
};

export default OverviewCard;