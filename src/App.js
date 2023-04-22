import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Haider Ali",
    location: "Jersey City, NJ",
    email: "haider.ali07304@gmail.com",
    availability: "Open for work",
    brand:
      "I am a senior at Rutgers University with a passion for programming and building relationships. I have honed my skills in Java programming and C through various projects and internships, gaining experience in both front-end and back-end development. As a licensed real estate agent and ITS consultant, I bring a unique perspective to the table, navigating complex systems and communicating effectively with diverse stakeholders. I thrive on collaborating with people from a wide range of disciplines and am excited to bring my technical expertise, strong communication skills, and people-centric approach to any software engineering role. Let's connect and make great things happen!",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
