import logo from './logo.svg';
import './App.css';
import Menu from './Menu'
import Header from "./Header";
import Parters from "./Partners";
import Buyer from "./Buyer";
import Meetings from "./Meetings";
import Faq from "./Faq";
import Footer from "./Footer";
import Speaker from "./Speaker";
function App() {
  return (
    <div className="App">
        <Menu />
      <header className="App-header">
        <Header />
      </header>
       {/*<section>*/}
       {/*     <Parters />*/}
       {/*</section>*/}
        <section className="buyer-section">
            <Buyer />
       </section>
       {/* <section>*/}
       {/*     <Speaker />*/}
       {/*</section>*/}
        <section>
            <Faq />
        </section>
        <section>
            <Meetings />
        </section>
        <section>
            <Footer />
        </section>
    </div>
  );
}

export default App;
