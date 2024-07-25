import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Haider Ali",
    location: "Jersey City, NJ",
    email: "haider.ali07304@gmail.com",
    availability: "Open for work",
    brand:
      "I am a recent computer science graduate from Rutgers University, where I dedicated myself to mastering the design and deployment of innovative AI solutions. Currently, I lead a team at Headstarter AI, developing high-accuracy AI applications using cutting-edge technologies like NextJS and OpenAI. My professional journey includes impactful internships at L3Harris Technologies and Instruments 49, where I significantly enhanced algorithm efficiency and system performance. Beyond the tech world, I am an avid coffee enthusiast and hiking aficionado, which keep me inspired and energized. My passion for AI is matched by my love for exploring nature and the endless quest for the perfect cup of coffee. My portfolio showcases projects in advanced facial and digit recognition and fraud detection, reflecting my deep commitment to impactful and efficient AI applications. Let's connect and make great things happen!",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
