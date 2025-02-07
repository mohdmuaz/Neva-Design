export default function Reviews() {
  const reviewSections = [
    [
      {
        text: "Neva Design’s good design sense and fast turnaround made setting up a website hassle-free and immediately worthwhile. Neva Design is a pleasure to work with and I’d happily recommend them.",
        author: "Naomi Schaefer Riley",
      },
      {
        text: "“In addition to being a very talented developer, Maria is especially valuable because of how FANTASTIC she is to work with!!! She is clear, patient (I ask a lot of questions!) and always quick to respond. Maria and I started working together when I was preparing to launch my women’s apparel brand, and needed help customizing my Shopify site (to improve both the aesthetics and the functionality). I had some very specific ideas, and some areas where I was out of my depth. She guided me through all of it seamlessly. Since then, she has always been just a message away – no matter how long it has been since our last project, she is always ready to pick up where we left off, or help me solve a problem. As a small business owner, I’m so happy to have Maria as part of my ‘team’ when I need her and am sure you will be too!”",
        author: "Sourcery Label",
      },
    ],
    [
      { text: "AMAZING creativity, problem solving and patience.", author: "Toufic Araman" },
      { text: "Excellent experience. Great disposition, great willingness, always available, excellent commitment to meet our deadlines. Thanks, María!", author: "Claudia Chez Abreu" },
      { text: "I highly recommend Maria at Neva Design. From initial design to final launch of my website, I was pleased with her extraordinary ability and the final product. Especially impressive was Maria’s speed, accuracy and responsiveness. I felt like she became a part of my business, taking pride in the work that she created for me. She is a gem to work with! Thank you, Maria!", author: "Tom Sullivan" },
      { text: "Neva Design did an excellent job building a multi-faceted web site that provides comprehensive resources to families of children with special needs.", author: "Tina Calabro" },
    ],
    [
      { text: "The dental office of Doctor’s Werrin, Gruendel & Boles have wanted to upgrade the companies website but could not find the right person. We tried several programmers who promissed everything and produced half. Our consultant found Neva Design and it has been a very memorable and rewarding upgrade experience. Neva Design has been prompt, professional and has delivered the upgrade on time. We look forward in working with Neva Design for future additions.", author: "Elizabeth Bannon" },
      { text: "There are 3 elements needed for the firm that will produce a great website: The ability to determine and understand what the customer wants – and needs. Second: possessing a great, original sense of design. Finally, having the technical skills needed to properly execute the product. Maria excels in all aspects! She took our outdated glitch ridden website and completely redesigned the appearance and content, then implemented it perfectly. We have had nothing but praise for our site since, and we could not have been happier with the process. Thank you so very much, Maria!!!", author: "Chuck Stein" },
    ],
    [
      { text: "Neva Design is a top quality web design firm with high standards that understands what the customer wants. Maria, the owner, is a good listener and easily grasped the ideas of what I had in mind for our company’s website. She was quick to offer suggestions that made sense when things did not fit.", author: "John Harte" },
      { text: "Neva Design created a sleek, informative, and engaging website for my book. Maria is not only talented, but also a pleasure to work with. She responded creatively and quickly to the project’s many demands. I highly recommend Neva Design.", author: "Logan Beirne" },
      { text: "Maria is fantastic, a pleasure to work with, skilled, responsive and worth every penny. I highly recommend hiring her for your coding and website needs.", author: "Josh Gray-Emmer" },
    ],
    [
      { text: "I’ve been working with Maria for three years now and have always been able to rely on her for development of multiple websites. Whether it was small updates or a new website, she has always gotten the work done quickly. She is always very responsive to my requests and I have full confidence that she can/will get the job done. I take pride in my work and I found that Maria was equally concerned about my projects as well. I highly recommend Maria for website development. She is extremely professional and takes her work very seriously.", author: "Stephanie Tay" },
      { text: "I wanted to thank Maria for her work on designing and constructing the Carve Skis website. Your insights, design skills, and availability represent the hallmarks of a true professional. Thank you for leading us in the right direction in both the design of the site as well as the logo design. We look forward to working with you in the future as we enhance the site. We definitely recommend your firm.", author: "K.E. Smith" },
    ],
  ];

  return (
    <div className=" mx-auto bg-gray-100 p-6">
      <h1 className="text-3xl font-semibold text-center mb-4 mt-10 text-blue-700">REVIEWS</h1>
      <p className="text-center mb-6 text-gray-700">For the most up to date reviews please visit Maria’s Upwork profile.</p>

      <div className="flex p-5">
        {reviewSections.map((section, index) => (
          <div key={index} className="w-full p-4 flex flex-col space-y-9">
            {section.map((review, i) => (
              <div key={i} className="p-4 border-l-2 border-blue-700 ">
                <p className="text-gray-700">{review.text}</p>
                <p className="text-left pt-3 font-semibold text-gray-800 mt-2"> {review.author}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
