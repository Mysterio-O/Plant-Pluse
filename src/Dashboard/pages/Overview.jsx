import React, { useContext, useEffect, useState } from 'react';
import { TbWorldSearch } from 'react-icons/tb';
import 'react-circular-progressbar/dist/styles.css';
import OverviewCard from './OverviewCard';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaLeaf, FaSeedling, FaUsers } from 'react-icons/fa';
import OverviewCharts from './OverviewCharts';

const Overview = () => {
    const [searchText, setSearchText] = useState('');

    const [plantsCount, setPlantsCount] = useState(0);
    const [myPlants, setMyPlants] = useState(0);
    const [usersCount, setUsersCount] = useState(0);

    const { user } = useContext(AuthContext);
    const { email } = user;

    useEffect(() => {
        fetch('http://localhost:5000/plant=counts')
            .then(res => res.json())
            .then(data => setPlantsCount(data?.count))
            .catch(err => console.error("Error fetching all plants count.", err));

        fetch(`http://localhost:5000/plants_added/${email}?count=true`)
            .then(res => res.json())
            .then(data => setMyPlants(data?.plants))

        fetch('http://localhost:5000/allUsersCount')
            .then(res => res.json())
            .then(data => setUsersCount(data?.count))
            .catch(err => {
                console.error("error fetching users count. from client side..", err);
            })
    }, [email])
    // console.log(myPlants);
    console.log(usersCount);

    const cardData = [
        {
            title: 'Total Plants',
            value: plantsCount,
            progress: plantsCount * 50 / 100,
            color: '#7E22CE', // purple
            change: '+14% Inc',
            changeColor: '#7E22CE',
            Icon: FaLeaf,
            iconColor: 'text-[#7E22CE]',
            to:'/dashboard/all_plants'
        },
        {
            title: 'My Plants',
            value: myPlants,
            progress: myPlants * 50 / 100,
            color: '#facc15', // yellow
            change: '+06% Inc',
            changeColor: '#eab308',
            Icon:FaSeedling,
            iconColor: 'text-[#facc15]',
            to:`/dashboard/my_plants/${email}`
        },
        {
            title: 'Total Users',
            value: usersCount,
            progress: usersCount * 50 / 100,
            color: '#f87171', // red
            change: '+04% Dec',
            changeColor: '#f87171',
            Icon:FaUsers,
            iconColor: 'text-[#f87171]'
        }
    ];

    return (
        <div className='transition-colors duration-300'>

            {/* header part */}
            <header className="flex justify-between items-center gap-4 md:pt-16 mb-8">
                <h1 className='text-2xl md:text-3xl font-semibold text-black dark:text-white'>
                    Dashboard
                </h1>

                <form className="flex items-center bg-[#eef0fc] rounded-full px-2 py-1 focus-within:ring-2 focus-within:ring-purple-600">
                    <input
                        type="search"
                        name="search"
                        placeholder="Search"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        className="bg-transparent focus:outline-none px-4 py-2 text-sm text-gray-700 placeholder-gray-500 w-40 md:w-64"
                    />
                    <button
                        type="submit"
                        className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl p-2 ml-1"
                    >
                        <TbWorldSearch size={20} />
                    </button>
                </form>
            </header>

            {/* card stats */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {cardData.map((card, idx) => (
                    <OverviewCard key={idx} card={card} idx={idx}/>
                ))}
            </div>

            <div>
                <OverviewCharts/>
            </div>
        </div>
    );
};

export default Overview;
