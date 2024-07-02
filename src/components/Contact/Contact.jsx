import Googlemaplocation from "./googlemap/Googlemaplocation";
import LocationInfo from "./locationinfo/Locationinfo";

function Contact() {
  return (
    <div className="container mx-auto p-16 ">
      <div className="flex justify-center items-center space-x-4 mb-8">
        <div className="w-full md:w-1/2 p-4 ">
          <LocationInfo />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <Googlemaplocation />
        </div>
      </div>
    </div>
  );
}

export default Contact;
