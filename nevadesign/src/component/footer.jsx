const Footer = () => {
  const randomPhone = "+1 (425) 678-1234";
  const randomEmail = "contact123@example.com";

  return (
    <footer className="bg-zinc-800 text-white text-center p-6">
      <div className="mx-auto space-y-5 mt-5">
        <p>
          Web Design Services: Shopify, WordPress, NationBuilder, ADA compliance
          and more.
        </p>
        <p className="mt-8">
          Ellicott City | Columbia | Baltimore | Maryland | Washington DC | USA
          | Worldwide
        </p>
      </div>

      <div className="flex justify-center space-x-6 mt-8">
        <a href={`tel:${randomPhone}`} className="text-white hover:underline">
          {randomPhone}
        </a>
        <span>|</span>
        <a
          href={`mailto:${randomEmail}`}
          className="text-white-400 hover:underline"
        >
          {randomEmail}
        </a>
      </div>

      <div className="flex justify-center space-x-6  mb-15 mt-8">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white-500 hover:underline"
        >
          Facebook
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white-500 hover:underline"
        >
          Linkedin
        </a>
        <a
          href="https://www.upwork.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white-500 hover:underline"
        >
          Upwork
        </a>
      </div>

      <div className="border-t border-gray-00 bg-zinc-850 p-4 ">
        <p className="text-sm mt-5">© 2025 Neva Design. All rights reserved. Sitemap</p>
      </div>
    </footer>
  );
};

export default Footer;
