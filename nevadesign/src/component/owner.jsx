import BgImage from '../assets/bgimage.jpg';
import Owner from '../assets/owner.jpg';

export default function OwnerPage() {
  return (
    <div
      id="owner"
      className="w-full h-screen bg-cover bg-center relative flex items-center"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div
        className="absolute top-1/2 left-1/5 transform -translate-y-1/2 border-4 border-white rounded-full overflow-hidden w-60 h-60"
      >
        <img
          src={Owner}
          alt="Owner"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-1/2 left-2/5 transform -translate-y-1/2 w-1/3 text-white mt-20">
        <h2 className="text-3xl font-bold mb-4">MEET THE OWNER</h2>
        <p className="text-lg">
          Maria Stankevich is a passionate creative talent, with a bachelors degree in media arts and technology, specializing in multimedia management and web design. Having founded Neva Design in 2009, she is a seasoned graphic and web designer with close to a decade’s worth of experience as a front end developer.
          <br /><br />
          Maria has achieved various accolades during her career, including the highest of ratings on Upwork, a top online platform for creative freelancers and their clients. Not only is Maria driven by her passion to build longstanding client relationships and broaden business horizons, she also happens to be fluent in multiple languages and even played professional D1 Basketball for Duquesne University in Pittsburgh, PA!
          <br /><br />
          Maria is currently featured on the Upwork Staffing page as one of the in-demand global talents.
        </p>
      </div>
    </div>
  );
}
