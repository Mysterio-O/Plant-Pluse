import React, { useEffect, useRef } from 'react';

const PlantsMarquee = () => {


    //dummy data

    const plantFacts = [
        {
            name: 'Monstera Deliciosa',
            fact: 'Its iconic split and perforated leaves aren’t just decorative — they evolved to let sunlight filter through to lower leaves and to withstand strong tropical winds. Native to rainforests in Central America, it can grow aerial roots that anchor to trees for vertical support, making it a natural climber.',
            image: 'https://i.ibb.co/dwd9pMVc/83-C3-EEDF-71-A9-4008-9-B95-CBFEF4740599.webp',
        },
        {
            name: 'Venus Flytrap',
            fact: 'The Venus Flytrap snaps shut in as little as 0.1 seconds using tiny hairs on its leaves that detect prey. It evolved this carnivorous ability to survive in nutrient-poor soils, supplementing its diet with insects. The trap digests its catch over several days using specialized enzymes.',
            image: 'https://i.ibb.co/8DfW2xKD/vft-bigmouth-largepotted.webp',
        },
        {
            name: 'Aloe Vera',
            fact: 'Aloe Vera’s gel contains over 75 active compounds including vitamins, enzymes, and antioxidants. For centuries, it’s been used in medicine for wound healing, skin hydration, and digestive health. It also helps purify indoor air by removing common pollutants like formaldehyde and benzene.',
            image: 'https://i.ibb.co/HD9mgtGt/alo-vera.webp',
        },
        {
            name: 'Bamboo',
            fact: 'Some bamboo species can grow over 35 inches in just one day — making them the fastest-growing plants in the world. They play a vital role in erosion control, carbon absorption, and sustainable construction. Bamboo forests are incredibly efficient at generating oxygen compared to hardwood trees.',
            image: 'https://i.ibb.co/F4jNJ8sB/Moso-Bamboo-Shoot-Spring-1445x.webp',
        },
        {
            name: 'Orchid',
            fact: 'Orchids are masters of adaptation, with over 25,000 species across the globe. Their blooms often mimic insects to lure pollinators. Some species can live for 100 years, and each orchid flower has a bilateral symmetry — just like a human face. Their seeds are among the smallest in the plant kingdom.',
            image: 'https://i.ibb.co/mFJv92q2/images.jpg',
        },
        {
            name: 'Cactus',
            fact: 'Cacti are desert survival experts. Their spines are modified leaves that conserve water and offer protection, while their thick stems store moisture for droughts. Many cacti bloom with beautiful flowers, and some even produce edible fruits like prickly pears, rich in antioxidants and vitamin C.',
            image: 'https://i.ibb.co/5WySwytQ/3a8b67b7-2416-4ef2-971a-67f94bc64496-b5fe2f6.jpg',
        },
        {
            name: 'Fiddle Leaf Fig',
            fact: "Native to West Africa, the Fiddle Leaf Fig has broad, violin-shaped leaves that help it capture more sunlight in dense forests. Though visually stunning, it's a bit fussy with environmental changes — it dislikes drafts, dry air, and inconsistent watering, but thrives in bright, indirect light.",
            image: 'https://i.ibb.co/QFrwWLgJ/Fiddle-Leaf-Fig-1.jpg',
        },
        {
            name: 'Lavender',
            fact: 'Lavender is cherished for its calming scent, which reduces stress, anxiety, and promotes deep sleep. Its essential oils have antibacterial and antifungal properties, making them a staple in herbal remedies. Lavender also attracts pollinators like bees while repelling pests like moths and mosquitoes.',
            image: 'https://i.ibb.co/qFj4RjZ6/download.jpg',
        },
        {
            name: 'Snake Plant',
            fact: 'Snake Plants are known for their air-purifying abilities. Unlike most plants, they release oxygen at night, making them excellent for bedrooms. They require minimal maintenance and are incredibly drought-tolerant. NASA studies found them effective at filtering out toxins like formaldehyde and xylene.',
            image: 'https://i.ibb.co/GQFXSF7h/Snake-Plant.webp',
        },
        {
            name: 'Bonsai Tree',
            fact: 'A Bonsai is not a species, but an art form of growing miniature trees through pruning, wiring, and potting. It reflects Zen philosophy — emphasizing patience, harmony, and simplicity. Some Bonsai trees are over 800 years old, lovingly shaped and passed down through generations.',
            image: 'https://i.ibb.co/RpDqW7hx/download.jpg',
        },
        {
            name: 'Peace Lily',
            fact: 'The Peace Lily not only brightens a room but also cleanses the air by removing toxins like benzene, ammonia, and formaldehyde. It blooms beautiful white spathes and signals its water needs by drooping — a natural alert system. Despite its grace, it’s mildly toxic to pets if ingested.',
            image: 'https://i.ibb.co/5Wbmjfrr/5-08-25-Peace-lilies-A-low-res.jpg',
        },
        {
            name: 'Sunflower',
            fact: 'Sunflowers exhibit heliotropism — tracking the sun from east to west during growth, which helps maximize photosynthesis. Their seeds are high in vitamin E and healthy fats. Historically, they’ve been used for oil, food, dye, and even as a symbol of loyalty and adoration in art and culture.',
            image: 'https://i.ibb.co/vC8Yqn8K/thanuj-mathew-8-CSTVo-DMEXg-unsplash.jpg',
        },
    ];



    const marqueeRef = useRef(null);

    useEffect(() => {
        const marquee = marqueeRef.current;
        const totalWidth = marquee.scrollWidth / 2;
        const keyframes = `
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-${totalWidth}px); }
      }
    `;
        const styleSheet = document.createElement('style');
        styleSheet.textContent = keyframes;
        document.head.appendChild(styleSheet);

        return () => document.head.removeChild(styleSheet);
    }, []);

    return (
        <div id="plant-marquee" className="bg-gradient-to-br from-gray-50 to-green-50 dark:from-gray-900 dark:to-gray-800 py-12 overflow-hidden rounded-2xl mb-10 dark:shadow-xl dark:shadow-cyan-500">
            <div className="container mx-auto px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 text-center mb-8">
                    Fascinating Plant Facts
                </h2>
                <div className="relative">
                    <div
                        ref={marqueeRef}
                        className="flex animate-[marquee_130s_linear_infinite] md:animate-[marquee_90s_linear_infinite] whitespace-nowrap"
                        style={{ willChange: 'transform' }}
                    >
                        {/* First set of cards */}
                        {plantFacts.map((plant, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-96 mx-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-green-500/30 dark:hover:shadow-green-400/20 transition-shadow min-h-[100px]"
                            >
                                <div className="w-full h-40 mb-4">
                                    <img
                                        src={plant.image}
                                        alt={plant.name}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 text-center">
                                    {plant.name}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 text-center break-words whitespace-normal">
                                    {plant.fact}
                                </p>
                            </div>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {plantFacts.map((plant, index) => (
                            <div
                                key={`duplicate-${index}`}
                                className="flex-shrink-0 w-96 mx-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-green-500/30 dark:hover:shadow-green-400/20 transition-shadow min-h-[360px]"
                            >
                                <div className="w-full h-40 mb-4">
                                    <img
                                        src={plant.image}
                                        alt={plant.name}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 text-center">
                                    {plant.name}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 text-center line-clamp-3">
                                    {plant.fact}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlantsMarquee;