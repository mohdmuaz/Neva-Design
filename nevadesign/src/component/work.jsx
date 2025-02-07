import { motion } from "framer-motion";

const images = [
  {
    src: "https://www.neva-design.com/wp-content/uploads/2021/05/ta3swim_shopify.jpg",
    link: "https://ta3swim.com/",
    hoverText: "TA3 \n SEE WEBSITE \n Shopify",
  },

  {
    src: "https://www.neva-design.com/wp-content/uploads/2020/12/nylon_artists-by-neva-design.jpg",
    link: "https://properrepresents.com/",
    hoverText: "Proper Presents \n SEE WEBSITE >> \n Wordpress",
  },

  {
    src: "https://www.neva-design.com/wp-content/uploads/2020/12/DAEM-by-Neva-Design-300x273.jpg",
    link: "https://daemwatches.com/",
    hoverText: "DAEM Watches \n SEE WEBSITE>> \n Shopify",
  },

  {
    src: "https://www.neva-design.com/wp-content/uploads/2020/12/vyvid-1-300x273.jpg",
    link: "https://vyvidhomes.com/",
    hoverText: "Vyvid Homes \n SEE WEBSITE>> \n WordPress",
  },

  {
    src: "https://www.neva-design.com/wp-content/uploads/2020/12/Shopify-website-by-Neva-Design-300x273.jpg",
    link: "https://picojewelers.com/",
    hoverText: "Pico Jewelry \n SEE WEBSITE>> \n Shopify",
  },

  {
    src: "https://www.neva-design.com/wp-content/uploads/2020/12/wordpress-by-neva-design-2-300x273.jpg",
    link: "https://www.osibeyond.com/",
    hoverText: "Pico Jewelry \n SEE WEBSITE>> \n Shopify",
  },

  {
    src: "https://www.neva-design.com/wp-content/uploads/2020/12/custom-shopify-project-by-neva-design.jpg",
    link: "https://knocki.com/",
    hoverText: "OSI Beyond \n SEE WEBSITE >> \n WordPress",
  },

  {
    src: "https://www.neva-design.com/wp-content/uploads/2020/12/custom-shopify-sport-website.jpg",
    link: "https://www.thehotyogadome.com/",
    hoverText: "Knocki \n SEE WEBSITE >> \n Shopify",
  },

  {
    src: "https://www.neva-design.com/wp-content/uploads/2021/12/squaregles_by_neva_design_shopify.jpg",
    link: "https://squaregles.com/",
    hoverText: "The Hot Yoga Dome \n SEE WEBSITE \n Shopify",
  },

  {
    src: "https://www.neva-design.com/wp-content/uploads/2020/12/shopify-project-by-neva-design.jpg",
    link: "https://tiestatea.com/",
    hoverText: "Squaregles \n SEE WEBSITE >> \n Shopify",
  },

  {
    src: "https://www.neva-design.com/wp-content/uploads/2021/12/Bofta_Yimam_website_by_neva_design.jpg",
    link: "https://boftayimam.com/",
    hoverText: "Tiesta Tea \n SEE WEBSITE >> \n Shopify",
  },

  {
    src: "https://www.neva-design.com/wp-content/uploads/2021/03/FLOW_PEACOCK-GREEN_e42c618b-6cee-4eff-986b-be0649e00606-1.jpg",
    link: "https://tilezz.com/",
    hoverText: "Bofta Yimam \n SEE WEBSITE \n WordPress",
  },

  {
    src: "https://www.neva-design.com/wp-content/uploads/2020/12/shopify-technology-site.jpg",
    link: "https://haptic.co/",
    hoverText: "Tilezz.com \n SEE WEBSITE >> \n Shopify",
  },

  {
    src: "https://www.neva-design.com/wp-content/uploads/2020/12/onlinestore-1.jpg",
    link: "https://excelcosafety.com/",
    hoverText: "Haptic \n SEE WEBSITE >> \n WordPress",
  },

  {
    src: "https://www.neva-design.com/wp-content/uploads/2020/12/online-store-shopify.jpg",
    link: "https://cleanremedies.com/",
    hoverText: "Excelco Safety \n SEE WEBSITE \n Shopify",
  },

  {
    src: "https://www.neva-design.com/wp-content/uploads/2023/03/apothe_by_neva-design.jpg",
    link: "https://www.apothea.com/",
    hoverText: "Clean Remedies \n SEE WEBSITE >> \n Shopify",
  },

  {
    src: "https://www.neva-design.com/wp-content/uploads/2022/01/fashion_website_in_shopify.jpg",
    link: "https://sourcerylabel.com/",
    hoverText: "Apothea \n SEE WEBSITE \n Shopify",
  },

  {
    src: "https://www.neva-design.com/wp-content/uploads/2020/12/wordress-custom-site.jpg",
    link: "https://www.cole-mgtandeng.com/",
    hoverText: "Cole Management \n SEE WEBSITE \n WordPress ",
  },

  {
    src: "https://www.neva-design.com/wp-content/uploads/2021/05/code18_shopify_high_conversion.jpg",
    link: "https://code-wallets.com/",
    hoverText: "CODE 118 \n SEE WEBSITE >> \n Shopify",
  },

  {
    src: "https://www.neva-design.com/wp-content/uploads/2020/12/website-for-the-airline-1.jpg",
    link: "https://www.globalfirsttravel.com/",
    hoverText: "Global First Travel \n SEE WEBSITE >> \n WordPress",
  },

  {
    src: "https://www.neva-design.com/wp-content/uploads/2023/03/DAN-DEUTSCH.jpg",
    link: "https://dandeutschopticaloutlook.com/",
    hoverText: "DAN DEUTSCH \n SEE WEBSITE >> \n WordPress",
  },

  {
    src: "https://www.neva-design.com/wp-content/uploads/2020/12/Nationbuilder-website-by-Neva-Design.jpg",
    link: "https://www.apathyisboring.com/",
    hoverText: "Apathy is Boring \n SEE WEBSITE >> \n NationaBuilder",
  },

  {
    src: "https://www.neva-design.com/wp-content/uploads/2021/05/best-ecommerce-platform.jpg",
    link: "https://veefresh.com/",
    hoverText: "VeeFresh \n SEE WEBSITE >> \n Shopify",
  },

  {
    src: "https://www.neva-design.com/wp-content/uploads/2021/07/travel_website_html_css.jpg",
    link: "https://rockymountainholidays.com/",
    hoverText: "Rocky Mountain Holidays \n SEE WEBSITE \n HTML/CSS",
  },

  {
    src: "https://www.neva-design.com/wp-content/uploads/2022/03/los_angeles_webside_by_neva_design.jpg",
    link: "https://beyondthewest.com/",
    hoverText: "Beyond The West \n SEE WEBSITE>> \n WordPress",
  },

  {
    src: "https://www.neva-design.com/wp-content/uploads/2022/03/Bofta-Yimam_by_neva_design_ellicott_city.jpg",
    link: "https://boftayimam.com/",
    hoverText: "My BTFF \n SEE WEBSITE \n Shopify",
  },

  {
    src: "https://www.neva-design.com/wp-content/uploads/2023/01/my_btff_shopify_neva-design.jpg",
    link: "https://www.mybtff.com/",
    hoverText: "Bona Fide Juicery \n SEE WEBSITE>> \n WordPress",
  },

  {
    src: "https://www.neva-design.com/wp-content/uploads/2020/12/custom_wp_site-1.jpg",
    link: "https://www.bonafidejuicery.com/",
    hoverText: "AGC Education \n SEE WEBSITE>> \n WordPress",
  },

  {
    src: "https://www.neva-design.com/wp-content/uploads/2022/03/AGC_education_pittsburgh_by_neva_design.jpg",
    link: "https://www.agceducation.com/",
    hoverText: "Kyora \n SEE WEBSITE \n Shopify",
  },

  {
    src: "https://www.neva-design.com/wp-content/uploads/2020/12/international-shopify-website.jpg",
    link: "https://kyora.co.nz/",
    hoverText: "LightingAssessor \n SEE WEBSITE \n Custome HTML",
  },

  {
    src: "https://www.neva-design.com/wp-content/uploads/2021/12/custom_html_by_neva_design.jpg",
    link: "https://www.lightingassessor.com/",
    hoverText: "ExtraSpecialTeas \n SEE WEBSITE>> \n Shopify",
  },

  {
    src: "https://www.neva-design.com/wp-content/uploads/2021/12/shopify_by_neva_design_gluten_free.jpg",
    link: "https://www.extraspecialteas.org/",
    hoverText: "Elder Tree \n SEE WEBSITE>> \n WordPress",
  },

  {
    src: "https://www.neva-design.com/wp-content/uploads/2020/12/etwebsite-1.jpg",
    link: "https://eldertree.biz/",
    hoverText: "genconnectU \n SEE WEBSITE>> \n WordPress",
  },

  {
    src: "https://www.neva-design.com/wp-content/uploads/2021/12/wordpress_custom_site_by_neva_design.jpg",
    link: "https://genconnectu.com/",
    hoverText: "BearBlack \n SEE WEBSITE \n Shopify",
  },

  {
    src: "https://www.neva-design.com/wp-content/uploads/2021/03/HERO_2x_1_4472x-1.jpg",
    link: "https://getbearback.com/",
    hoverText: "Evoque \n SEE WEBSITE \n Shopify",
  },

  {
    src: "https://www.neva-design.com/wp-content/uploads/2023/03/evoque.jpg",
    link: "https://ebikes.evoqueca.com/",
    hoverText: "The Cloud Haven \n SEE WEBSITE \n Shopify",
  },

  {
    src: "https://www.neva-design.com/wp-content/uploads/2023/03/The-Cloud-Haven-by-Neva-Design.jpg",
    link: "https://thecloudhaven.com/",
    hoverText: "GAEIA \n SEE WEBSITE \n WordPress",
  },

  {
    src: "https://www.neva-design.com/wp-content/uploads/2023/03/GAEIA-by-Neva-Design.jpg",
    link: "https://gaeia.world/",
    hoverText: "The Nutrition \n SEE WEBSITE \n WordPress",
  },

  {
    src: "https://www.neva-design.com/wp-content/uploads/2023/03/The-Nutrition-Insider.jpg",
    link: "https://thenutritioninsider.com/",
    hoverText: "Lifter-Life \n SEE WEBSITE \n Custome",
  },

  {
    src: "https://www.neva-design.com/wp-content/uploads/2023/03/Lifter-Life-by-Neva-Design.jpg",
    link: "https://lifter-life.ae/",
    hoverText: "StoryLede \n SEE WEBSITE \n WordPress",
  },

  {
    src: "https://www.neva-design.com/wp-content/uploads/2023/03/StoryLede-by-Neva-Design.jpg",
    link: "https://storylede.com/",
    hoverText: "Stewart White Group \n SEE WEBSITE \n Wordpress",
  },

  {
    src: "https://www.neva-design.com/wp-content/uploads/2023/07/Stewart_White_Group_by_Neva_Design.jpg",
    link: "https://stewartwhitegroup.com/",
    hoverText: "The JPI Group \n SEE WEBSITE>> \n WordPress",
  },

  {
    src: "https://www.neva-design.com/wp-content/uploads/2023/01/jpi_group-by-neva-design.jpg",
    link: "https://www.thejpigroup.com/",
    hoverText: "Lookout Health \n SEE WEBSITE>> \n WordPress",
  },

  {
    src: "https://www.neva-design.com/wp-content/uploads/2022/03/lookouthealth_by_neva_design_.jpg",
    link: "https://www.lookouthealth.com/",
    hoverText: "Kristine \n SEE WEBSITE \n Shopify",
  },

  {
    src: "https://www.neva-design.com/wp-content/uploads/2020/12/shopify-online-store.jpg",
    link: "https://kristinadtravels.com/",
    hoverText: "Kristine \n SEE WEBSITE \n Shopify",
  },

  {
    src: "https://www.neva-design.com/wp-content/uploads/2023/05/shopify_website_by_neva_design_minibeast.jpg",
    link: "https://www.minibeastofficial.com/",
    hoverText: "Minibeast \n SEE WEBSITE \n Shopify",
  },

  {
    src: "https://www.neva-design.com/wp-content/uploads/2020/12/slider_540x-2.png",
    link: "https://willowswind.net/",
    hoverText: "Willow's Wind \n SEE WEBSITE \n Shopify",
  },

];

const App = () => {
  return (
    <div className="min-h-screen p-4">
      {/* Header Section */}
      <div className="text-center w-full bg-blue-600 p-6 mb-6 mt-20 font-light">
        <p className="text-white font-light">
          Maria Stankevich, the owner of Neva Design, has been featured on Upwork
        </p>
        <p className= "text-white mt-3 underline font-light ">
          “Work with in-demand global talent who are at the top of their field“
        </p>
        <p className="text-white mt-3 underline font-light">10 Best Web Developer Portfolio Examples</p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-5 gap-7">
        {images.map((item, index) => (
          <a href={item.link} target="_blank" rel="noopener noreferrer" key={index}>
            <motion.div
              className="relative w-full aspect-square border-2 border-gray-400 overflow-hidden cursor-pointer"
            >
              <img
                src={item.src}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover p-2"
              />
              <div className="absolute inset-0 bg-white bg-opacity-70 opacity-0 hover:opacity-70 flex items-center justify-center text-black text-center p-4">
                <p className="text-sm font-semibold whitespace-pre-line leading-tight">
                  {item.hoverText}
                </p>
              </div>
            </motion.div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default App;
