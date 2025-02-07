import { Monitor, ShoppingCart, MousePointer } from "lucide-react";

const WebDesignServices = () => {
  return (
    <div className="min-h-screen p-10 flex flex-col items-center">
      <h1 className="text-3xl font-semibold text-blue-700  text-center mt-10 mb-10
      ">
        WEB DESIGN SERVICES WE PROVIDE
      </h1>
      
      <div className="w-full max-w-4xl space-y-10">
        {/* Custom Websites */}
        <div className="flex items-center space-x-5 p">
          <div>
            <div className="flex text-center items-center">
            <Monitor className="w-12 h-12" />
            <h2 className="text-xl font-semibold text-gray-700 ">CUSTOM WEBSITES</h2>
            </div>
            <p className="text-gray-600 mt-2 text-lg">
              Like the individuals who run them all businesses are different. Neva Design offers customized web design solutions, tailor-made to suit your specific needs, no matter the nature or size of your business. At Neva Design we utilize only outstanding Content Management Systems (CMS). We work with WordPress, Shopify, NationBuilder and more, in order to streamline your digital journey and ensure that your online experience is a stress-free one.
            </p>
          </div>
        </div>


        <div className="flex items-center space-x-5  ">
          <div>
            <div className="flex text-center items-center">
            <ShoppingCart className="w-12 h-12" />
            <h2 className="text-xl font-semibold text-gray-700 p-5">ECOMMERCE</h2>
            </div>
            <p className="text-gray-600 mt-2 text-lg">
              Online Marketing is like second nature to us and we are here to share that knowledge with you by assisting you with every aspect of the online promotion of your project through platforms like Shopify and WooCommerce.
            </p>
          </div>
        </div>

        {/* Maintenance */}
        <div className="flex items-center space-x-4">
          <div>
            <div className="flex text-center items-center">
            <MousePointer className="w-12 h-12" />
            <h2 className="text-xl font-semibold text-gray-700 p-5">MAINTENANCE</h2>
            </div>
            
            <p className="text-gray-600 mt-2 text-lg">
              Not everyone is as web-savvy as they’d perhaps like to be but don’t fret. Neva Design is here to guide and support you every step of the way with solid site maintenance, upkeep, and support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDesignServices;
