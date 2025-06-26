import React, { useEffect, useState } from 'react';
import PlantCard from '../../pages/PlantCard';
import Loader from '../../pages/Loader';
const NewPlants = () => {

  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch('http://localhost:5000/plants')
      .then(res => res.json())
      .then(data => {
        setPlants(data);
        setLoading(false);
      })
  }, []);




  const customStyles = `
    .plant-card {
       transition: transform 0.4s ease, box-shadow 0.4s ease;
      
     }
    .plant-card:hover {
       transform: scale(1.05);
       box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
     }
     .plant-image {
       transition: transform 0.5s ease;
       clip-path: circle(50% at 50% 50%);
     }
     .plant-card:hover .plant-image {
       transform: rotate(5deg) scale(1.1);
     }
     .health-status {
       transition: opacity 0.3s ease;
     }
     .plant-card:hover .health-status {
       opacity: 1;
     }
     .care-level-easy {
       color: #10B981;
       border: 2px solid #10B981;
     }
     .care-level-moderate {
       color: #F59E0B;
       border: 2px solid #F59E0B;
     }
     .care-level-difficult {
       color: #EF4444;
       border: 2px solid #EF4444;
     }
     .view-details-btn {
       background: linear-gradient(45deg, #10B981, #34D399);
       transition: transform 0.3s ease, box-shadow 0.3s ease;
     }
     .view-details-btn:hover {
       transform: translateY(-3px);
       box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
     }
     .dark .care-level-easy {
        color: #34D399;
        border: 2px solid #34D399;
     }
     .dark .care-level-moderate {
        color: #FCD34D;
        border: 2px solid #FCD34D;
     }
     .dark .care-level-difficult {
        color: #F87171;
        border: 2px solid #F87171;
     }
     .dark .view-details-btn {
        background: linear-gradient(45deg, #059669, #10B981);
     }
    `;

  return (
    <div className='px-2 md:px-0'>
      <section id='new_plants' className="py-8 max-w-[1600px] mx-auto bg-[#E6F4EA] dark:bg-gray-900 ">
        <style>{customStyles}</style>
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#263238] dark:text-[#FFCA28] mb-12 rancho-regular">
            🌿 Explore Our Plant Collection
          </h2>
          {
            loading ?
              <Loader />
              : <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
                {
                  plants.map(plant => <PlantCard key={plant._id} plant={plant} />)
                }
              </div>

          }
        </div>
      </section>
    </div>
  );
};

export default NewPlants;