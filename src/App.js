import logo from './logo.svg';
import './App.css';
import Menu from './Menu'
import Header from "./Header";
import Parters from "./Partners";
import Footer from "./Footer";
import Concept from "./Concept";
import Subscribe from "./Subscribe";
import Visio from "./Visio";

function App() {
  return (
    <div className="App">
        <Menu />
      <header className="App-header">
        <Header />
      </header>

        <section>
            <Concept />
        </section>

        {/*<section>*/}
        {/*    <Visio />*/}
        {/*</section>*/}

        <section>
            <Parters />
        </section>

       {/* <section className="buyer-section">*/}
       {/*     <Solution />*/}
       {/*</section>*/}

        {/*<section>*/}
        {/*    <Advantages />*/}
        {/*</section>*/}
        {/*<section>*/}
        {/*    <Meetings />*/}
        {/*</section>*/}

        <section>
            <Subscribe />
        </section>

        {/*<section>*/}
        {/*    <Faq />*/}
        {/*</section>*/}

        <section>
            <Footer />
        </section>
    </div>
  );
}

export default App;
