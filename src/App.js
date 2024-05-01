
import Faq from "./components/Faq";
import FutureKund from "./components/FutureKund";
import Head from "./components/Head";
import Horoscopes from "./components/Horoscopes";
import Kundlis from "./components/Kundlis";
import Services from "./components/Services";
import Visit from "./components/Visit";
function App() {
  return (
    <div className="flex flex-col ">
     <Head/>
     <Kundlis/>
     <Visit/>
     <FutureKund/>
     <Faq/>
     <Services/>
     <Horoscopes/>
    </div>
  );
}

export default App;
