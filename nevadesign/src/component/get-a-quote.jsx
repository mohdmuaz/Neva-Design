import { useState } from "react";
import PropTypes from "prop-types";
import { ChevronDown } from "lucide-react";

const Button = ({ children, ...props }) => (
  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg w-full" {...props}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

const Card = ({ children }) => (
  <div className="bg-white shadow-lg p-6 rounded-2xl w-[90%] md:w-[70%] lg:w-[60%] mx-auto">
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

const CardContent = ({ children }) => (
  <div className="p-4 grid md:grid-cols-2 gap-6">{children}</div>
);

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function GetAQuote() {
  const [budget, setBudget] = useState("Select Budget");
  const [showBudgetOptions, setShowBudgetOptions] = useState(false);
  const budgetOptions = ["Under $5000", "$5000-$10000", "$10000+"];

  return (
    <div id="get-a-quote" className="flex flex-col items-center p-6 min-h-screen">
      <h1 className="text-3xl font-bold mt-10 text-blue-600">GET A QUOTE</h1>
      <Card>
        <CardContent>
          
          <div className="space-y-5">
            <input type="text" placeholder="Your Name*" className="input-style" />
            <input type="text" placeholder="Phone" className="input-style" />
            <input type="email" placeholder="Email*" className="input-style" />
            <input type="text" placeholder="Company Name" className="input-style" />
            <input type="text" placeholder="Website URL" className="input-style" />
            
           
            <div className="relative">
              <button 
                onClick={() => setShowBudgetOptions(!showBudgetOptions)} 
                className="input-style flex justify-between items-center">
                {budget} <ChevronDown />
              </button>
              {showBudgetOptions && (
                <div className="absolute bg-white shadow-md rounded-md mt-1 w-full z-10">
                  {budgetOptions.map((option) => (
                    <div 
                      key={option} 
                      onClick={() => { setBudget(option); setShowBudgetOptions(false); }}
                      className="p-2 cursor-pointer hover:bg-gray-200">
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <input type="text" placeholder="How did you hear about us?" className="input-style" />
          </div>
          
         
          <div className="space-y-4">
            <textarea placeholder="In short, what is the project about?" className="input-style h-40"></textarea>
            <textarea placeholder="Are there any particular websites you like? Please select." className="input-style h-40"></textarea>
            <Button>REQUEST QUOTE</Button>
          </div>
        </CardContent>
      </Card>

      <style jsx>{`
        .input-style {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 8px;
          outline: none;
        }
        .input-style:focus {
          border-color: #2563eb;
          box-shadow: 0 0 5px rgba(37, 99, 235, 0.5);
        }
      `}</style>
    </div>
  );
}
