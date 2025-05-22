import React from 'react';
import Banner from '../Banner/Banner';
import NewPlants from '../NewPlants/NewPlants';
import PlantCare from '../PlantCare/PlantCare';
import SeasonalPlant from '../SeasonalPlant/SeasonalPlant';
import Footer from '../Footer/Footer';
import PlantsMarquee from '../PlantsMarquee/PlantsMarquee';

const Home = () => {
    return (
        <div className=' mt-10'>
            <section className="banner max-w-6xl mx-auto">
                <Banner />
            </section>
            <section className="mt-16 max-w-6xl mx-auto" id='new_plants'>
                <NewPlants />
            </section>
            <section className='mt-16 mb-16 max-w-6xl mx-auto' id='care_section'>
                <PlantCare />
            </section>
            <section className='max-w-6xl mx-auto mt-16'>
                <PlantsMarquee />
            </section>
            <section className='max-w-6xl mx-auto'>
                <SeasonalPlant />
            </section>

            <footer id='footer'>
                <Footer />
            </footer>
        </div>
    );
};

export default Home;