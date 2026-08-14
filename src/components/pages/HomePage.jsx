import { Link } from "react-router";

const HomePage = ({home}) => {
    return(
            <main>
                <section className='about-section'>
                     <h2>🐾 About The Daily Purr</h2>
                            <p>
                                Welcome to The Daily Purr, where great coffee and furry friends come together! ☕🐾
                            </p>
                            <p>
                                Our cat café is a cozy place to relax, grab your favorite drink, and spend time with cats looking for their forever homes. We partner with local rescues to give adoptable cats a comfortable space where their personalities can shine.
                            </p>
                            <p>
                                Whether you're looking to adopt, need a little cat therapy, or just want to enjoy a latte with some new furry friends, there's always a reason to stop by.
                            </p>
                            <p>
                                Come for the coffee. Stay for the cats. Leave with a new best friend. ❤️
                            </p>
                </section>

                <section className='book-a-visit'>
                    <h3>Book a Visit 🐾</h3>
                            <p>
                                Ready for some quality cat time?
                            </p>
                            <p>
                                Reserve your spot at The Daily Purr and spend an hour sipping, snuggling, and hanging out with our adoptable cats. Whether you're looking for your new best friend or just need a little extra purr in your day, we'd love to have you!
                            </p>
                            <p>
                                Grab a drink. Meet the cats. Stay awhile. ☕🐱
                            </p>
                            <p>
                                Book Your Visit
                            </p>
                </section>

                <section className='sponsor-ad'>
                    <h3>🐾 Meet Our Rescue Partner </h3>
                            <p>
                                Every cat deserves a place to call home. ❤️
                            </p>
                            <p>
                                We're proud to partner with Helping Paws Rescue to give local cats a safe, cozy place to stay while they wait for their forever families.
                            </p>
                            <p>
                                When you visit The Daily Purr, you're not just getting your daily dose of caffeine and cuddles. You're helping rescue cats get one step closer to home.
                            </p>
                            <p>
                                Meet Our Adoptable Cats
                            </p>
                </section>

                <section className='volunteer-form'>
                    <h3>Volunteer Form 🐾</h3>
                </section>
        </main>
    );
}

export default HomePage;