import React from 'react';

class Faq extends React.Component {
    render() {
        return (
            <div>
                <h2 className="title-header"><span className="special-color">Prêt</span> à passer à l'étape <span className="special-color">supérieure</span> de votre business ?</h2>
                <div className="text-center">
                    <div className="input-group">
                        <input type="email" className="input" id="Email" name="Email" placeholder="uiverse@verse.io"
                               autoComplete="off"/>
                        <input className="button--submit" value="Subscribe" type="submit"/>
                    </div>
                </div>

            </div>
        )
    }
}

export default Faq;