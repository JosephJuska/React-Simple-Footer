import { FooterLink } from "./FooterLink";
import './Footer.css'
export function Footer(){
    return(
        <footer>
            <div className="footer-content">
                <div className="explore">
                    <h4>Explore</h4>
                    <ul>
                        <li>
                            <FooterLink to="/">
                                Home
                            </FooterLink>
                        </li>
                        <li>
                            <FooterLink to="/about">
                                About
                            </FooterLink>
                        </li>
                        <li>
                            <FooterLink to="/contact">
                                Contact
                            </FooterLink>
                        </li>
                    </ul>
                </div>

                <div className="services">
                    <h4>Services</h4>
                    <ul>
                        <li>
                            <FooterLink to="#">
                                Web design
                            </FooterLink>
                        </li>
                        <li>
                            <FooterLink to="#">
                                UI/UX Design
                            </FooterLink>
                        </li>
                        <li>
                            <FooterLink to="#">
                                Web Development
                            </FooterLink>
                        </li>
                        <li>
                            <FooterLink to="#">
                                Social Management
                            </FooterLink>
                        </li>
                    </ul>
                </div>

                <div className="projects">
                    <h4>Projects</h4>
                    <ul>
                        <li>
                            <FooterLink to="#">
                                Recent Products
                            </FooterLink>
                        </li>
                        <li>
                            <FooterLink to="#">
                                Explore Our Work
                            </FooterLink>
                        </li>
                        <li>
                            <FooterLink to="#">
                                Customer Testimonials
                            </FooterLink>
                        </li>
                        <li>
                            <FooterLink to="#">
                                Feautered
                            </FooterLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="socials">
                <ul>
                    <li>
                        <FooterLink to="#" className='social-link'>
                            <i className="fa fa-instagram"></i>
                        </FooterLink>
                    </li>
                    <li>
                        <FooterLink to="#" className='social-link'>
                            <i className="fa fa-twitter"></i>
                        </FooterLink>
                    </li>
                    <li>
                        <FooterLink to="#" className='social-link'>
                            <i className="fa fa-facebook"></i>
                        </FooterLink>
                    </li>
                    <li>
                        <FooterLink to="#" className='social-link'>
                            <i className="fa fa-linkedin"></i>
                        </FooterLink>
                    </li>
                    <li>
                        <FooterLink to="https://github.com/JosephJuska" target="_blank" className='social-link'>
                            <i className="fa fa-github"></i>
                        </FooterLink>
                    </li>
                </ul>
            </div>
            <div className="copyright">
                <p>Copyright 2023</p>
            </div>
        </footer>
    );
}