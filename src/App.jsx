import Header from "./components/Header";
import Animation from "./animation/Animation";
import About from "./components/About";
import Projects from "./components/Projects";
// import Stack from "./components/Stack";
import Footer from "./components/Footer";

function App() {
  // const components = [
  //   <Header />,
  //   <About />,
  //   <Projects />,
  //   // <Stack />,
  //   <Footer />,
  // ];

  return (
    <>
      {/* {components.map((component, i) => (
        <Animation key={i} delay={i}>
          {component}
        </Animation>
      ))} */}

      <Header />
      <About />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
