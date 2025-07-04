import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import NewPlants from '../NewPlants/NewPlants';
import PlantCare from '../PlantCare/PlantCare';
import SeasonalPlant from '../SeasonalPlant/SeasonalPlant';
import Footer from '../Footer/Footer';
import PlantsMarquee from '../PlantsMarquee/PlantsMarquee';
import { useLocation } from 'react-router';

const Home = () => {

    const location = useLocation()

    useEffect(() => {
        if (location.state?.scrollTo === 'new_plants') {
            const newPlantSection = document.getElementById('new_plants');
            if (newPlantSection) {
                newPlantSection.scrollIntoView({ behavior: 'smooth' })
            }
        };

    }, [location])

    useEffect(()=> {
        document.title = 'Home || Plant_Pulse'
    },[])

    return (
        <div className=''>
            <section className="banner max-w-[1600px] mx-auto py-2 bg-[#E6F4EA] dark:bg-gray-900">
                <Banner />
            </section>
            <section className="" id='new_plants'>
                <NewPlants />
            </section>
            <section className='max-w-[1600px] mx-auto' id='care_section'>
                <PlantCare />
            </section>
            <section className='max-w-[1600px] mx-auto'>
                <PlantsMarquee />
            </section>
            <section className='max-w-[1600px] mx-auto'>
                <SeasonalPlant />
            </section>

            <footer id='footer'>
                <Footer />
            </footer>
        </div>
    );
};

export default Home;