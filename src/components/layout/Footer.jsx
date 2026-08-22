import { useState } from "react";

const Footer = () => {
    const [email, setEmail] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        setEmail('');
        setShowSuccess(true);
    };

    return(
        <footer className='footer'>
            <section className='newsletter-signup'>
                <h2>Stay in the Loop</h2>
                <h3>Join our mailing list for updates on events, new cats, and specials!</h3>

                <form id="newsletter" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="example@email.com"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />

                    <button type="submit">Submit</button>
                </form>

                {showSuccess && (
                    <div id="success-banner" className="banner">
                        Thanks for joining!
                    </div>
                )}
            </section>

            <section className='hours-of-operation'>
                <h2>Hours of Operation</h2>
                <h3>Tues-Sunday</h3>
                <h3>10 AM - 3 PM</h3>
            </section>

            <section className='store-address'>
                <h2>Store Address</h2>
                <h3>123 Cat Avenue</h3>
                <h3>St.Louis, MO 63123</h3>
            </section>
        </footer>
    );
}

export default Footer;