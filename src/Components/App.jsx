import './App-style.css';
import Nav from './Header/Navigations/Nav';
import Headline from './Header/Headline/Headline';
import Home from './Body/Home/Home';
import About from './Body/About/About';
import ClinicalServices from './Body/ClinicalServices/ClinicServices';
import ContactSupport from './Body/ContactSupport/ContactSupport';
const App = () => {
    return (
        <>
            <header>
                <Headline />
                <Nav />
            </header>  
            <main>
                <Home />
                <About />
                <ClinicalServices />
                <ContactSupport />
            </main>
            <footer>
                <h1>THIS IS THE FOOTER</h1>
            </footer>
        </>
    );
}

export default App;
