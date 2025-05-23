import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const EditPlantForm = ({ plant, isOpen }) => {


    const { user } = useContext(AuthContext);
    const { displayName, email } = user;

    const navigate = useNavigate();


    console.log(plant);
    const { name, image, category, careLevel, description, healthStatus, lastWateredDate, nextWateringDate, wateringFrequency, _id } = plant;


    const handleEditPlant = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const plantData = Object.fromEntries(formData.entries());
        // console.log(plantData)

        fetch(`https://assignment-010-server.vercel.app/plants/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(plantData)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.acknowledged || data?.modifiedCount > 0 || data?.matchedCount > 0) {
                    // console.log('after putting', data)
                    Swal.fire({
                        title: 'Success!',
                        text: 'Plant updated successfully!',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        customClass: {
                            popup: 'bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-2xl',
                            title: 'text-gray-100 font-semibold',
                            content: 'text-gray-200',
                            confirmButton: 'bg-gradient-to-r from-green-600 to-green-400 hover:from-green-700 hover:to-green-500 text-white px-6 py-2 rounded-lg'
                        },
                        buttonsStyling: false,
                        timer: 3000,
                        timerProgressBar: true
                    });

                    navigate(`/my_plants/${email}`);

                }
            })
            .catch(err => {
                console.error(err.code, err.message);
                Swal.fire({
                    title: 'Error!',
                    text: `Failed to update plant: ${err.message}`,
                    icon: 'error',
                    confirmButtonText: 'OK',
                    customClass: {
                        popup: 'bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-2xl',
                        title: 'text-gray-100 font-semibold',
                        content: 'text-gray-200',
                        confirmButton: 'bg-gradient-to-r from-red-600 to-red-400 hover:from-red-700 hover:to-red-500 text-white px-6 py-2 rounded-lg'
                    },
                    buttonsStyling: false,
                    timer: 5000,
                    timerProgressBar: true
                });
            })
    }

    return (
        <form onSubmit={handleEditPlant} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-2xl max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* image input */}
                <fieldset className="fieldset border border-gray-600 rounded-xl px-4 py-3 bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-green-500">
                    <label className="label text-gray-100 font-semibold">Image</label>
                    <input
                        type="text"
                        name="image"
                        className="input input-bordered w-full bg-gray-700/30 text-gray-100 placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                        defaultValue={image}
                        required
                        disabled={!isOpen}
                    />
                </fieldset>

                {/* name input */}
                <fieldset className="fieldset border border-gray-600 rounded-xl px-4 py-3 bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-green-500">
                    <label className="label text-gray-100 font-semibold">Plant Name</label>
                    <input
                        type="text"
                        name="name"
                        className="input input-bordered w-full bg-gray-700/30 text-gray-100 placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                        defaultValue={name}
                        required
                        disabled={!isOpen}
                    />
                </fieldset>

                {/* category input */}
                <fieldset className="fieldset border border-gray-600 rounded-xl px-4 py-3 bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-green-500">
                    <label className="label text-gray-100 font-semibold">Category</label>
                    <select
                        name="category"
                        className="input input-bordered w-full bg-gray-700/30 text-gray-100 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                        defaultValue={category}
                        disabled={!isOpen}
                        required
                    >
                        <option>Flowering Plants</option>
                        <option>Ferns</option>
                        <option>Succulents</option>
                        <option>Conifers / Gymnosperms</option>
                        <option>Herbs</option>
                        <option>Aquatic Plants</option>
                        <option>Houseplants / Indoor Plants</option>
                        <option>Ornamental Plants</option>
                    </select>
                </fieldset>

                {/* care level input */}
                <fieldset className="fieldset border border-gray-600 rounded-xl px-4 py-3 bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-green-500">
                    <label className="label text-gray-100 font-semibold">Care Level</label>
                    <select
                        name="careLevel"
                        className="input input-bordered w-full bg-gray-700/30 text-gray-100 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                        defaultValue={careLevel}
                        disabled={!isOpen}
                        required
                    >
                        <option>Easy</option>
                        <option>Moderate</option>
                        <option>Difficult</option>
                    </select>
                </fieldset>

                {/* watering frequency input */}
                <fieldset className="fieldset border border-gray-600 rounded-xl px-4 py-3 bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-green-500">
                    <label className="label text-gray-100 font-semibold">Watering Frequency</label>
                    <input
                        type="text"
                        name="wateringFrequency"
                        className="input input-bordered w-full bg-gray-700/30 text-gray-100 placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                        defaultValue={wateringFrequency}
                        disabled={!isOpen}
                        required
                    />
                </fieldset>

                {/* last watering date input */}
                <fieldset className="fieldset border border-gray-600 rounded-xl px-4 py-3 bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-green-500">
                    <label className="label text-gray-100 font-semibold">Last Watered</label>
                    <input
                        type="date"
                        name="lastWateredDate"
                        className="input input-bordered w-full bg-gray-700/30 text-gray-100 placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                        defaultValue={lastWateredDate}
                        disabled={!isOpen}
                        required
                    />
                </fieldset>

                {/* next watering date input */}
                <fieldset className="fieldset border border-gray-600 rounded-xl px-4 py-3 bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-green-500">
                    <label className="label text-gray-100 font-semibold">Next Watering</label>
                    <input
                        type="date"
                        name="nextWateringDate"
                        className="input input-bordered w-full bg-gray-700/30 text-gray-100 placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                        defaultValue={nextWateringDate}
                        disabled={!isOpen}
                        required
                    />
                </fieldset>

                {/* health status input */}
                <fieldset className="fieldset border border-gray-600 rounded-xl px-4 py-3 bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-green-500">
                    <label className="label text-gray-100 font-semibold">Health Status</label>
                    <select
                        name="healthStatus"
                        className="input input-bordered w-full bg-gray-700/30 text-gray-100 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                        defaultValue={healthStatus}
                        disabled={!isOpen}
                        required
                    >
                        <option>Healthy</option>
                        <option>Slightly Unhealthy / Stressed</option>
                        <option>Diseased</option>
                        <option>Pest-Infested</option>
                        <option>Nutrient Deficient</option>
                        <option>Overwatered</option>
                        <option>Underwatered / Dried Out</option>
                        <option>Dead or Dying</option>
                    </select>
                </fieldset>

                {/* user email */}
                <fieldset className="fieldset border border-gray-600 rounded-xl px-4 py-3 bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-green-500">
                    <label className="label text-gray-100 font-semibold">User Email</label>
                    <input
                        type="text"
                        name="email"
                        className="input input-bordered w-full bg-gray-700/30 text-gray-100 placeholder-gray-400 rounded-lg"
                        defaultValue={email}
                        readOnly
                    />
                </fieldset>

                {/* user name */}
                <fieldset className="fieldset border border-gray-600 rounded-xl px-4 py-3 bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-green-500">
                    <label className="label text-gray-100 font-semibold">User Name</label>
                    <input
                        type="text"
                        name="displayName"
                        className="input input-bordered w-full bg-gray-700/30 text-gray-100 placeholder-gray-400 rounded-lg"
                        defaultValue={displayName}
                        readOnly
                    />
                </fieldset>
            </div>

            {/* description */}
            <fieldset className="fieldset border border-gray-600 rounded-xl px-4 py-3 bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-green-500">
                <label className="label text-gray-100 font-semibold">Description</label>
                <textarea
                    name="description"
                    rows={6}
                    defaultValue={description}
                    disabled={!isOpen}
                    className="textarea textarea-bordered w-full bg-gray-700/30 text-gray-100 placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                ></textarea>
            </fieldset>

            {/* submit button */}
            <div className="text-center mt-8">
                <button
                    type="submit"
                    className="btn bg-gradient-to-r from-green-600 to-green-400 hover:from-green-700 hover:to-green-500 text-white px-8 py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                    <span className="text-lg">🌿</span> Update Plant
                </button>
            </div>
        </form>
    );
};

export default EditPlantForm;