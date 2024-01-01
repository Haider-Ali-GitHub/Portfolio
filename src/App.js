import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Haider Ali",
    location: "Jersey City, NJ",
    email: "haider.ali07304@gmail.com",
    availability: "Open for work",
    brand:
      "I am a senior at Rutgers University with a passion for programming and building relationships. My expertise spans Java, C, Python, and OCaml, honed through various projects and internships, equipping me with skills in both front-end and back-end development. As a licensed real estate agent and ITS consultant, I bring a unique perspective, adept at navigating complex systems and communicating effectively with diverse stakeholders. My ability to collaborate across disciplines, coupled with a strong technical foundation and exceptional communication skills, positions me perfectly for a software engineering role where I can create amazing digital experiences. Let's connect and make great things happen!",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
