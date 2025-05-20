import React from 'react';

const AddPlantForm = () => {
    return (
        <form>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>

                {/* image input */}
                <fieldset className="fieldset border-base-300 rounded-xl px-3 py-2 border">
                    <label className="label text-[#FAFAFA]">Image</label>
                    <input type="text" name='image' className="input input-bordered w-full bg-white/20 text-white placeholder-black" placeholder="Enter Image URL" />
                </fieldset>

                {/* name input */}
                <fieldset className="fieldset border-base-300 rounded-xl px-3 py-2 border">
                    <label className="label text-[#FAFAFA]">Plant Name</label>
                    <input type="text" name='name' className="input input-bordered w-full bg-white/20 text-white placeholder-black" placeholder="Enter Plant Name" />
                </fieldset>

                {/* category input */}
                <fieldset className="fieldset border-base-300 rounded-xl px-3 py-2 border">
                    <label className="label text-[#FAFAFA]">Category</label>
                    <select name='category' className="input input-bordered w-full bg-white/20 text-black" required>
                        <option disabled selected>Select a Category</option>
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
                <fieldset className="fieldset border-base-300 rounded-xl px-3 py-2 border">
                    <label className="label text-[#FAFAFA]">Care Level</label>
                    <select name='care' className="input input-bordered w-full bg-white/20 text-black" required>
                        <option disabled selected>Select Care Level</option>
                        <option>Easy</option>
                        <option>Moderate</option>
                        <option>Difficult</option>
                    </select>
                </fieldset>

                {/* watering frequency input */}
                <fieldset className="fieldset border-base-300 rounded-xl px-3 py-2 border">
                    <label className="label text-[#FAFAFA]">Watering Frequency</label>
                    <input type="text" name='frequency' className="input input-bordered w-full bg-white/20 text-white placeholder-black" placeholder="e.g. Twice a week" />
                </fieldset>

                {/* last watering date input */}
                <fieldset className="fieldset border-base-300 rounded-xl px-3 py-2 border">
                    <label className="label text-[#FAFAFA]">Last Watered</label>
                    <input type="date" name='last_water' className="input input-bordered w-full bg-white/20 text-black placeholder-black" />
                </fieldset>

                {/* next watering date input */}
                <fieldset className="fieldset border-base-300 rounded-xl px-3 py-2 border">
                    <label className="label text-[#FAFAFA]">Next Watering</label>
                    <input type="date" name='next_water' className="input input-bordered w-full bg-white/20 text-black placeholder-black" />
                </fieldset>

                {/* health status input */}
                <fieldset className="fieldset border-base-300 rounded-xl px-3 py-2 border">
                    <label className="label text-[#FAFAFA]">Health Status</label>
                    <select name='health' className="input input-bordered w-full bg-white/20 text-black" required>
                        <option disabled selected>Select Health Status</option>
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
                <fieldset className="fieldset border-base-300 rounded-xl px-3 py-2 border">
                    <label className="label text-[#FAFAFA]">User Email</label>
                    <input type="text" name='user_email' className="input input-bordered w-full bg-white/20 text-white placeholder-black" readOnly />
                </fieldset>

                {/* user name */}
                <fieldset className="fieldset border-base-300 rounded-xl px-3 py-2 border">
                    <label className="label text-[#FAFAFA]">User Name</label>
                    <input type="text" name='user_name' className="input input-bordered w-full bg-white/20 text-white placeholder-black" readOnly />
                </fieldset>
            </div>

            {/* description */}
            <fieldset className='fieldset border-base-300 rounded-xl px-3 py-2 border'>
                <label className='label text-[#FAFAFA]'>Description</label>
                <textarea
                    name="description"
                    rows={6}
                    placeholder='Write a detailed description about your plant...'
                    className='textarea textarea-bordered w-full bg-white/20 text-white placeholder-white'
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