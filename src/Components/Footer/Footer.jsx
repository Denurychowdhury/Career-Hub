import footerimg from '../../assets/social.png'
import careerhub from '../../assets/CareerHub.png'
const Footer = () => {
    return (
        <div className='bg-black text-white py-5'>
            <footer className="footer  flex md:flex-row flex-col justify-between p-10 text-white">
                <div>
                    <h1 className='text-2xl font-bold'>Career Hub</h1>
                    <p>A fulfilling career aligns your passions <br /> and skills with opportunities <br /> for growth and contribution.</p>
                    <img src={footerimg} alt="" />
                </div>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Work</a>
                    <a className="link link-hover">Latest News</a>
                    <a className="link link-hover">Careers</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Product</h6>
                    <a className="link link-hover">Prototype</a>
                    <a className="link link-hover">Plans & Pricing</a>
                    <a className="link link-hover">Customers</a>
                    <a className="link link-hover">Integrations</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Support</h6>
                    <a className="link link-hover">Help Desk</a>
                    <a className="link link-hover">Sales</a>
                    <a className="link link-hover">Become a Partner</a>
                    <a className="link link-hover">Developers</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Contact</h6>
                    <a className="link link-hover">524 Broadway , NYC</a>
                    <a className="link link-hover">+1 777 - 978 - 5570</a>
                </nav>
            </footer>
            <div className='flex justify-between mx-4'>
                <p> © {new Date().getFullYear()} careerhub - All right reserved</p>
                <p>powerd  by CareerHub</p>
            </div>
        </div>
    );
};

export default Footer;