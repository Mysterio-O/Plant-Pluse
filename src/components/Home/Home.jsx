import React from 'react';
import Banner from '../Banner/Banner';
import NewPlants from '../NewPlants/NewPlants';

const Home = () => {
    return (
        <div className='max-w-6xl mx-auto mt-10'>
            <section className="banner">
                <Banner />
            </section>
            <section className="new_plants mt-16">
                <NewPlants />
            </section>
        </div>
    );
};

export default Home;