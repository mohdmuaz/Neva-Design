import Navbar from "./component/navbar";
import Work from "./component/work";
import AboutUs from "./component/about";
import Owner from "./component/owner";
import WebDesignServices from "./component/web-design";
import Reviews from "./component/reviews";
import Quote from "./component/get-a-quote";
import Footer from "./component/footer";

function App() {
  return (
    <>
      <Navbar />
      <Work />
      <AboutUs />
      <Owner />
      <WebDesignServices />
      <Reviews />
      <Quote />
      <Footer />
    </>
  );
}

export default App;
