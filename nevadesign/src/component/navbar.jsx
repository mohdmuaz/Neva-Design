import { Link } from 'react-scroll';
import LogoImage from '../assets/logoImage.png';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        
        <a href="#" className="text-xl font-bold p-4">
          <img src={LogoImage} alt="Logo" className="h-10 w-auto" />
        </a>

        {/* Navigation Links */}
        <div className="space-x-5 md:flex gap-5 text-sm tracking-widest" style={{ fontFamily: 'Inter, sans-serif' }}>
          {['About', 'Work', 'Web Design We Offer', 'Reviews', 'Get A Quote'].map((section) => (
            <Link 
              key={section} 
              to={section.toLowerCase().replace(/\s+/g, '-')} // Ensure matching section ID
              smooth={true} 
              duration={500} 
              offset={-80} // Adjust to prevent overlap with fixed navbar
              className="cursor-pointer text-black font-light"
            >
              {section}
            </Link>
          ))}
          <a href="tel:412-657-3906" className="cursor-pointer text-blue-900 font-semibold text-base">
            412-657-3906
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
