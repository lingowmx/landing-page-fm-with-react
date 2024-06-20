import { Footer } from "./components/Footer.jsx";
import { GalleryContainer } from "./components/GalleryContainer.jsx";
import { Header } from "./components/Header.jsx";
import { Main } from "./components/Main.jsx";
import { Services } from "./components/Services.jsx";
import { Testimonials } from "./components/Testimonials.jsx";

function App() {
  return(
  <main className="max-w-[1440px] mx-auto relative">
    <Header />
    <Main />
    <Services />
    <Testimonials />
    <GalleryContainer />
    <Footer />
  </main>

  )
}

export default App;
