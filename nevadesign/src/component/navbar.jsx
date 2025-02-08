import LogoImage from '../assets/logoImage.png';

const Navbar = () => {
  
  const handleScroll = (event, sectionId) => {
    event.preventDefault(); 
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        
        <a href="#" className="text-xl font-bold p-4">
          <img src={LogoImage} alt="Logo" className="h-10 w-auto" />
        </a>

       
        <div className="space-x-5 md:flex gap-5 text-sm tracking-widest" style={{ fontFamily: 'Inter, sans-serif' }}>
          {[
            { label: 'Home', id: 'home' },
            { label: 'Work', id: 'work' },
            { label: 'About Us', id: 'about-us' },
            { label: 'Owner', id: 'owner' },
            { label: 'Web Design Services', id: 'web-design-services' },
            { label: 'Reviews', id: 'reviews' },
            { label: 'Get A Quote', id: 'get-a-quote' }
          ].map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`} 
              onClick={(e) => handleScroll(e, id)}
              className="cursor-pointer text-black font-light hover:text-blue-700 transition-all"
            >
              {label}
            </a>
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
