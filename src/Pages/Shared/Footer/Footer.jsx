import { Link } from "react-router-dom";
import Container from "../../../Components/Container";
import logo from "../../../assets/images/footer_logo.png"
const Footer = () => {
    return (
        <footer className="py-10 bg-base-200">
            <Container>
            <div className="footer text-base-content">
                <aside>
                    <Link to={'/'}><img className="w-44" src={logo} alt="logo" /></Link>
                    <p className="w-60">Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been since the printer took.</p>
                    <Link> <button className="btn bg-[#00A6FB] text-white hover:bg-[#31a1da]">Appoinment</button></Link>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
            </Container>
        </footer>
    );
};

export default Footer;