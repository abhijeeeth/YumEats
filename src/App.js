import Catagories from "./Components/Catagories";
import Delivery from "./Components/Delivery";
import Feature from "./Components/Feature";
import Footer from "./Components/Footer";
import Meals2 from "./Components/Meals2";
import NewsLetter from "./Components/NewsLetter";
import TopNav from "./Components/TopNav";
import Toppicks from "./Components/Toppicks";


function App() {
  return (
    <div className="App">
     <TopNav/>
     <Feature/>
     <Delivery/>
     <Toppicks/>
     <Meals2/>
     <Catagories/>
     <NewsLetter/>
     <Footer/>
    </div>
  );
}

export default App;
