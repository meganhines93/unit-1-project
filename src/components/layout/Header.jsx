import NavMenu from './NavMenu';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <img
                    className="the-daily-purr-logo"
                    src="https://ik.imagekit.io/bbk3azqkom/ChatGPT%20Image%20Aug%2017,%202026,%2009_57_15%20AM.png"
                    alt="The Daily Purr Cat Cafe"
                />

                <NavMenu />
            </div>
        </header>
    );
}

export default Header;