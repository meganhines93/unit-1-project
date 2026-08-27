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
                <h3>Stay in the Loop</h3>
                <h4>Join our mailing list for updates on events, new cats, and specials!</h4>

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
                <h3>Hours of Operation</h3>
                <h4>Tuesday-Sunday:    10 AM - 3 PM</h4>
                <h4>Sunday-Monday:     CLOSED</h4>
            </section>

            <section className='store-address'>
                <h3>Store Address</h3>
                <h4>123 Cat Avenue</h4>
                <h4>St.Louis, MO 63123</h4>
            </section>
        </footer>
    );
}

export default Footer;