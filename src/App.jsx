import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
      </div>
      {/* looking to see if code is usable */}
      <ButtonGradient />
    </>
  );
}

export default App;
