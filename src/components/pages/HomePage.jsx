import { useState } from "react";
import Button from '../../forms/input/Button.jsx';
import VolunteerForm from '../../forms/VolunteerForm.jsx'
import { useNavigate } from "react-router";
 
const HomePage = () => {
    const navigate = useNavigate();

    const [openForm, setOpenForm] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleGoToMeetTheCats = () => {
    navigate('/cats');

    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 0);
};

    const handleToggleForm = () => {
        setOpenForm(prevOpenForm => !prevOpenForm);
    }; 


    return(
            <main className='home-page'>
                <h1 className="home-page-h1">Welcome to The Daily Purr Cat Cafe</h1>

                <section className='about-section'>
                    <img
                    className="about-image"
                    src="https://ik.imagekit.io/bbk3azqkom/ChatGPT%20Image%20Aug%2017,%202026,%2001_08_00%20PM.png"
                    alt="The Daily Purr Cat Cafe Lounge"
                    />
                    <div className="about-content">
                     <h2>About The Daily Purr</h2>
                            <p>
                                Welcome to The Daily Purr, where great coffee and furry friends come together!
                            </p>
                            <p>
                                Our cat café is a cozy place to relax, grab your favorite drink, and spend time with cats looking for their forever homes. We partner with local rescues to give adoptable cats a comfortable space where their personalities can shine.
                            </p>
                            <p>
                                Whether you're looking to adopt, need a little cat therapy, or just want to enjoy a latte with some new furry friends, there's always a reason to stop by.
                            </p>
                            <p>
                                Come for the coffee. Stay for the cats. Leave with a new best friend.
                            </p>
                        </div>
                </section>


                <section className='how-it-works-visit'>
                    <div className="how-it-works-content">
                        <h2>How It Works</h2>
                            <p>Visiting The Daily Purr is easy! Stop in for a drink, meet our adoptable cats, and stay as long as you'd like.</p>
                            
                            <h3>1. Grab a Drink</h3>
                            <p>Choose from coffee, tea, breakfast, lunch or one of our cafe favorites</p>
                            
                            <h3>2. Meet the Cats</h3>
                            <p>Spend some time getting to know our resident cats and their unique personalities</p>

                            <h3>3. Fall in Love</h3>
                            <p>Found your new best friend? Learn more about our adoption process and take the next step.</p>
                    </div>
                    <img
                    className="book-a-visit-image"
                    src="https://ik.imagekit.io/bbk3azqkom/ChatGPT%20Image%20Aug%2017,%202026,%2001_24_25%20PM.png"
                    alt="The Daily Purr Cat Cafe Lounge"
                    />
                    
                </section>


                <section className='sponsor-ad'>
                    <img
                    className="sponsor-image"
                    src="https://ik.imagekit.io/bbk3azqkom/Helping%20Paws%20Rescue%20(2).png"
                    alt="The Daily Purr Cat Cafe Lounge"
                    />
                    <div className="sponsor-content">
                    <h2>Our Rescue Partner </h2>
                            <p>
                                Every cat deserves a place to call home.
                            </p>
                            <p>
                                We're proud to partner with Helping Paws Rescue to give local cats a safe, cozy place to stay while they wait for their forever families.
                            </p>
                            <p>
                                When you visit The Daily Purr, you're not just getting your daily dose of caffeine and cuddles. You're helping rescue cats get one step closer to home.
                            </p>

                            <div className="sponsor-button-container">
                                <Button
                                    type="button"
                                    label="Meet Our Adoptable Cats"
                                    handleClick={handleGoToMeetTheCats}
                                />
                            </div>
                            </div>
                </section>



                <section className='volunteer-form'>

                    <div className="volunteer-top-section">

                        <div className="volunteer-content">
                            <h2>Volunteer</h2>

                            <div className="volunteer-info-container">
                                <div className="why-volunteer-box">
                                    <h3>Why Volunteer?</h3>
                                    <ul>
                                        <li>
                                            Help care for cats and support adoptions
                                        </li>
                                        <li>
                                            Create a welcoming experience for visitors
                                        </li>
                                        <li>
                                            Be part of a kind, passionate community
                                        </li>
                                    </ul>
                                </div>
                
                            <div className="ways-to-help-box">
                                <h3>Ways You Can Help</h3>
                                <ul>
                                    <li>
                                        Cat Care & Enrichment
                                    </li>
                                    <li>
                                        Cafe Support
                                    </li>
                                    <li>
                                        Events & Outreach
                                    </li>
                                    <li>
                                        Admin & Social Media
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="volunteer-form-button-container">
                            <Button
                                id="volunteer-form"
                                type="button"
                                label={openForm ? "Close Application" : "Become a Volunteer"}
                                handleClick={handleToggleForm}
                            />
                        </div>
                    </div>
                        <img
                        className="volunteer-image"
                        src="https://ik.imagekit.io/bbk3azqkom/ChatGPT%20Image%20Aug%2017,%202026,%2001_30_07%20PM.png"
                        alt="The Daily Purr Cat Cafe Lounge"
                        />  
                    </div>

                    {showSuccess && (
                        <p className="success-message">
                            Thank you for volunteering!
                        </p>
                    )}       

                    {openForm && (
                        <div className="volunteer-form-wrapper">
                            <VolunteerForm
                                handleCloseForm={handleToggleForm}
                                setShowSuccess={setShowSuccess}
                            />
                        </div>
                    )}
                </section>
        </main>
    );
}

export default HomePage;