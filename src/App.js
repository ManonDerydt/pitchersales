import logo from './logo.svg';
import './App.css';
import Menu from './Menu'
import Header from "./Header";
import Parters from "./Partners";
import Solution from "./Solution";
import Meetings from "./Meetings";
import Faq from "./Faq";
import Footer from "./Footer";
import Speaker from "./Speaker";
import Concept from "./Concept";
import Advantages from "./Advantages";

function App() {
  return (
    <div className="App">
        <Menu />
      <header className="App-header">
        <Header />
      </header>

        <section>
            <Parters />
        </section>

        <section>
            <Concept />
        </section>

       {/* <section className="buyer-section">*/}
       {/*     <Solution />*/}
       {/*</section>*/}

        {/*<section>*/}
        {/*    <Advantages />*/}
        {/*</section>*/}
        <section>
            <Meetings />
        </section>

        <section>
            <Faq />
        </section>

        <section>
            <Footer />
        </section>
    </div>
  );
}

export default App;
