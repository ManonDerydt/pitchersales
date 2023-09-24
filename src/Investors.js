import React from "react";
import HeaderInvestors from "./Investors/Header-investors";
import AdvantagesInvestors from "./Investors/Advantages-investors";
import How_it_works_investors from "./Investors/How_it_works_investors";
import Subscribe from "./Subscribe";
import Footer from "./Footer";

class Investors extends React.Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <HeaderInvestors />
                </header>
                <AdvantagesInvestors/>
                <How_it_works_investors/>
                <section className="section-subscribe">
                    <Subscribe/>
                </section>


                <section>
                    <Footer />
                </section>
            </div>
        )
    }
}

export default Investors