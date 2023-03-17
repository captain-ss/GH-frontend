import React from 'react';
import TopSlider from '../components/TopSlider/TopSlider';
import WhatWeOffers from '../components/WhatWeOffers/WhatWeOffers';
import ChooseYourGoal from '../components/ChooseYourGoal/ChooseYourGoal';
import MealPlan from '../components/MealPlan/MealPlan';
import DealoftheDay from '../components/DealoftheDay/DealoftheDay';
import KnowMore from '../components/KnowMore/KnowMore';
import ChooseUs from '../components/ChooseUs/ChooseUs';

function Home() {
    document.dispatchEvent(new Event('viewChanged'));

    return <>
        <TopSlider />
        <WhatWeOffers />
        <ChooseYourGoal />
        <MealPlan />
        <DealoftheDay />
        <KnowMore />
        <ChooseUs />
    </>
}

export default Home;
