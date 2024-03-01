import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
// import StoryWriters from "../Pages/StoryWriters/StoryWriters";
import StoryTellers from "../Pages/StoryTellers/StoryTellers";
import JoinStoryClub from "../Pages/JoinStoryClub/JoinStoryClub";
import JoinStoryClubForm from "../Pages/JoinStoryClubForm/JoinStoryClubForm";
import Submitted from "../Pages/JoinStoryClubFormSubmitted/Submitted";
import StoryWritersP1 from "../Pages/StoryWriters/Page1/StoryWritersP1";
import StoryWritersP2 from "../Pages/StoryWriters/Page2/StoryWritersP2";
import StoryWritersP3 from "../Pages/StoryWriters/Page3/StoryWritersP3";
import StoryWriterSubmission from "../Pages/StoryWriters/Submitted/StoryWriterSubmission";
import StoryTellersP1 from "../Pages/StoryTellers/Page1/StoryTellerP1"
import StoryTellersP2 from "../Pages/StoryTellers/Page2/StoryTellersP2"
import StoryTellersP3 from "../Pages/StoryTellers/Page3/StoryTellersP3"
import LandingPage2 from "../Pages/LandingPage2/LandingPage2"
import Landingpage3 from "../Pages/LandingPage3/Landingpage3";
import FeaturedStories from '../Pages/FeaturedStrories/FeaturedStories'
const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/LandingPage2" element={<LandingPage2 />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/storyWriters/page1" element={<StoryWritersP1 />} />
            <Route path="/storyWriters/page2" element={<StoryWritersP2 />} />
            <Route path="/storyWriters/page3" element={<StoryWritersP3 />} />
            <Route path="/submitted" element={<StoryWriterSubmission />} />

            <Route path="/storyTellers/Page1" element={<StoryTellersP1 />} />
            <Route path="/storyTellers/Page2" element={<StoryTellersP2 />} />
            <Route path="/storyTellers/Page3" element={<StoryTellersP3 />} />
            <Route path="/joinStoryClub" element={<JoinStoryClub />} />
            <Route path="/apply" element={<JoinStoryClubForm />} />
            <Route path="/formSubmitted" element={<Submitted />} />
            <Route path="/featuredStories" element={<Landingpage3/>}/>
        </Routes>
    );
}

export default AllRoutes