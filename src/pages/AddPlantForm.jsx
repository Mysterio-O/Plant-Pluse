import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const AddPlantForm = () => {

    const { user } = useContext(AuthContext);
    const { displayName, email, photoURL } = user;
    const navigate = useNavigate();



    const handleAddPlant = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        // console.log(data);

        const plantsData = { ...data, displayName, email, userPhoto: photoURL }

        fetch('https://b11a10-server-side-mysterio-o.vercel.app/plants', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(plantsData)
        })
            .then(res => res.json())
            .then(data => {
                // console.log('data after adding in the database', data);
                if (data.insertedId) {
                    form.reset();
                    Swal.fire({
                        title: 'Plant Added!',
                        text: 'Your plant has been successfully added to your collection.',
                        icon: 'success',
                        background: '#0a3b59',
                        color: '#ffffff',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#1a567a',
                        customClass: {
                            popup: 'text-sm md:text-base lg:text-lg rounded-xl p-4 shadow-xl',
                            title: 'text-white font-semibold',
                            content: 'text-white',
                            confirmButton: 'rounded-lg px-4 py-2 text-white font-semibold'
                        }
                    });
                    navigate(`/my_plants/${email}`)
                } else {
                    throw new Error('Failed to add plant');
                }
            })
            .catch(err => {
                console.error(err.code, err.message);
                Swal.fire({
                    title: 'Error',
                    text: 'Failed to add the plant. Please try again.',
                    icon: 'error',
                    background: '#0a3b59',
                    color: '#ffffff',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#1a567a',
                    customClass: {
                        popup: 'text-sm md:text-base lg:text-lg rounded-xl p-4 shadow-xl',
                        title: 'text-white font-semibold',
                        content: 'text-white',
                        confirmButton: 'rounded-lg px-4 py-2 text-white font-semibold'
                    }
                });
            })

    }

    return (
        <form onSubmit={handleAddPlant}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>

                {/* image input */}
                <fieldset className="fieldset border-base-300 rounded-xl px-3 py-2 border">
                    <label className="label text-black dark:text-[#FAFAFA]">Image</label>
                    <input type="text" name='image' className="input input-bordered w-full bg-white/20 text-black placeholder-black" placeholder="Enter Image URL" required />
                </fieldset>

                {/* name input */}
                <fieldset className="fieldset border-base-300 rounded-xl px-3 py-2 border">
                    <label className="label text-black dark:text-[#FAFAFA]">Plant Name</label>
                    <input type="text" name='name' className="input input-bordered w-full bg-white/20 text-black placeholder-black" placeholder="Enter Plant Name" required />
                </fieldset>

                {/* category input */}
                <fieldset className="fieldset border-base-300 rounded-xl px-3 py-2 border">
                    <label className="label text-black dark:text-[#FAFAFA]">Category</label>
                    <select name='category' className="input input-bordered w-full bg-white/20 text-black" defaultValue='Select a Category' required>
                        <option>Flowering Plants</option>
                        <option>Low Light Plants</option>
                        <option>Ferns</option>
                        <option>Cactus</option>
                        <option>Succulents</option>
                        <option>Conifers / Gymnosperms</option>
                        <option>Herbs</option>
                        <option>Aquatic Plants</option>
                        <option>Houseplants / Indoor Plants</option>
                        <option>Ornamental Plants</option>
                    </select>
                </fieldset>

                {/* care level input */}
                <fieldset className="fieldset border-base-300 rounded-xl px-3 py-2 border">
                    <label className="label text-black dark:text-[#FAFAFA]">Care Level</label>
                    <select name='careLevel' className="input input-bordered w-full bg-white/20 text-black" defaultValue='Select Care Level' required>
                        <option>Easy</option>
                        <option>Moderate</option>
                        <option>Difficult</option>
                    </select>
                </fieldset>

                {/* watering frequency input */}
                <fieldset className="fieldset border-base-300 rounded-xl px-3 py-2 border">
                    <label className="label text-black dark:text-[#FAFAFA]">Watering Frequency</label>
                    <input type="text" name='wateringFrequency' className="input input-bordered w-full bg-white/20 text-white placeholder-black" placeholder="e.g. Twice a week" required />
                </fieldset>

                {/* last watering date input */}
                <fieldset className="fieldset border-base-300 rounded-xl px-3 py-2 border">
                    <label className="label text-black dark:text-[#FAFAFA]">Last Watered</label>
                    <input type="date" name='lastWateredDate' className="input input-bordered w-full bg-white/20 text-black placeholder-black" required />
                </fieldset>

                {/* next watering date input */}
                <fieldset className="fieldset border-base-300 rounded-xl px-3 py-2 border">
                    <label className="label text-black dark:text-[#FAFAFA]">Next Watering</label>
                    <input type="date" name='nextWateringDate' className="input input-bordered w-full bg-white/20 text-black placeholder-black" required />
                </fieldset>

                {/* health status input */}
                <fieldset className="fieldset border-base-300 rounded-xl px-3 py-2 border">
                    <label className="label text-black dark:text-[#FAFAFA]">Health Status</label>
                    <select name='healthStatus' className="input input-bordered w-full bg-white/20 text-black" defaultValue='Select Health Status' required>
                        <option>Healthy</option>
                        <option>Slightly Unhealthy / Stressed</option>
                        <option>Diseased</option>
                        <option>Dry</option>
                        <option>Needs attention</option>
                        <option>Pest-Infested</option>
                        <option>Nutrient Deficient</option>
                        <option>Thriving</option>
                        <option>Overwatered</option>
                        <option>Underwatered / Dried Out</option>
                        <option>Dead or Dying</option>
                    </select>
                </fieldset>

                {/* user email */}
                <fieldset className="fieldset border-base-300 rounded-xl px-3 py-2 border">
                    <label className="label text-black dark:text-[#FAFAFA]">User Email</label>
                    <input type="text" name='email' className="input input-bordered w-full bg-white/20 text-black placeholder-black" defaultValue={email} readOnly />
                </fieldset>

                {/* user name */}
                <fieldset className="fieldset border-base-300 rounded-xl px-3 py-2 border">
                    <label className="label text-black dark:text-[#FAFAFA]">User Name</label>
                    <input type="text" name='displayName' className="input input-bordered w-full bg-white/20 text-black placeholder-black" defaultValue={displayName} readOnly />
                </fieldset>
            </div>

            {/* description */}
            <fieldset className='fieldset border-base-300 rounded-xl px-3 py-2 border'>
                <label className='label text-black dark:text-[#FAFAFA]'>Description</label>
                <textarea
                    name="description"
                    rows={6}
                    placeholder='Write a detailed description about your plant...'
                    className='textarea textarea-bordered w-full bg-white/20 text-black placeholder-black'
                    required
                ></textarea>
            </fieldset>

            {/* submit button */}
            <div className='text-center mt-6'>
                <button type="submit" className='btn bg-[#2E7D32] hover:bg-[#1B5E20] text-white px-6 py-2 rounded-xl transition-all duration-300'>
                    🌿 Add Plant
                </button>
            </div>

        </form>
    );
};

export default AddPlantForm;