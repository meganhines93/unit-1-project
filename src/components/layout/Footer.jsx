import { useState } from "react";

const Footer = () => {
    const [email, setEmail] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        setEmail('');
        setShowSuccess(true);

        setTimeout(() => {
            setShowSuccess(false);
        }, 3000)
    };

    return(
        <footer className='footer'>
            <section className='newsletter-signup'>
                <h3>Stay in the Loop</h3>
                <p>Join our mailing list for updates on events, new cats, and specials!</p>

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
                    <p className="success-message">
                        Thank you for signing up!
                    </p>
                )}
            </section>

            <section className='hours-of-operation'>
                <h3>Hours of Operation</h3>
                <p>Tuesday-Sunday:    10 AM - 3 PM</p>
                <p>Monday:     CLOSED</p>
            </section>

            <section className='store-address'>
                <h3>Store Address</h3>
                <p>123 Cat Avenue</p>
                <p>St.Louis, MO 63123</p>
            </section>
        </footer>
    );
}

export default Footer;