
const Footer = () => {
    return(
        <footer className='footer'>
                <section className='newsletter-signup'>
                        <h2>Stay in the Loop</h2>
                        <h3>Join our mailing list for updates on events, new cats, and specials!</h3>
                        <form id="newsletter">
                                <label for="email">Email Address</label>
                                <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="example@email.com"
                                        required
                                />

                                <button type="submit">Submit</button>
                        </form>

                </section>
                        <div id="success-banner" class="banner">
                                Thanks for joining!
                        </div>

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