import React from 'react';
import AddPlantForm from '../../pages/AddPlantForm';

const AddPlants = () => {
    return (
        <div className='min-h-[calc(100vh-72px)] bg-[url(/auth-bg.webp)] bg-cover md:max-w-6xl mx-auto rounded-3xl flex flex-col justify-center items-center p-4 md:p-10 lg:p-18'>

            <div className='md:max-w-2xl mx-auto space-y-3 rancho-regular'>
                <h2 className="text-5xl text-center text-[#FAFAFA]">🌱 Add a New Plant</h2>
                <p className='text-center text-[#FAFAFA]'>Easily register a new plant in your collection by providing its name, type, care instructions, and growth details. Keep track of your green companions in one place!</p>
            </div>

            {/* add plant form */}

            <div className='backdrop-blur-sm bg-white/10 rounded-2xl p-10 shadow-2xl w-full max-w-4xl mt-10'>

                <AddPlantForm/>
            </div>


        </div>
    );
};

export default AddPlants;