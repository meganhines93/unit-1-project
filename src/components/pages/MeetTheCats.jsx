import { Link } from "react-router";
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const MeetTheCats = ({meetthecats}) => {
    return(
        <main>
            <Header />
                <h1>MEET THE CATS</h1>
                <h2>ADOPTION REQUEST FORM</h2>
            <Footer />
        </main>
    )
};

export default MeetTheCats;