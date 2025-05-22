import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import EditPlantForm from '../../pages/EditPlantForm';
import { AuthContext } from '../../Provider/AuthProvider';
import Loader from "../../pages/Loader"
const EditPlant = () => {

    const { user } = useContext(AuthContext);

    const { displayName, photoURL, email } = user;

    const { id } = useParams();

    const [plant, setPlant] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);


    useEffect(() => {
        fetch(`http://localhost:5000/plants/${id}`)
            .then(res => res.json())
            .then(data => {
                // console.log('data to edit', data);
                setPlant(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err.code, err.message)
            })
    }, [id])

    console.log(plant)
    return (
        <div className='min-h-[calc(100vh-72px)] bg-[url(https://i.ibb.co/ccwpc1pn/pexels-jplenio-1103970.jpg)] bg-cover md:max-w-6xl mx-auto rounded-3xl flex flex-col justify-center items-center p-4 md:p-10 lg:p-18'>

            <div className='md:max-w-2xl mx-auto space-y-3 flex flex-col justify-center items-center'>
                <h2 className="text-5xl text-center text-[#FAFAFA] rancho-regular">Welcome {displayName}</h2>
                <span>{email}</span>
                <p className='text-center text-[#FAFAFA] text-xl'>your plant’s information to ensure it stays healthy and properly categorized. You can change its name, category, care level, and image. Don’t forget to save your changes!</p>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className='btn rounded-3xl px-4 py-1 bg-[#FFCA28] hover:bg-transparent hover:text-[#FFCA28]'>
                        {
                            !isOpen ? 'Update Plant' : 'Hide Form'
                        }
                    </button>
            </div>

            {
                loading ? <Loader />
                    : <div className={`backdrop-blur-sm bg-white/10 rounded-2xl p-10 shadow-2xl w-full max-w-4xl mt-10 mx-auto ${!isOpen ? 'opacity-0' : 'opacity-100'} transition-all duration-500`}>

                        <EditPlantForm plant={plant} isOpen={isOpen}/>
                    </div>
            }

        </div>
    );
};

export default EditPlant;