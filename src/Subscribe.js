import React, { useState } from 'react';

function Subscribe() {
    const [startupName, setStartupName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [fullName, setFullName] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        console.log({ startupName, email, description, fullName });
    };

    return (
        <div className="content-subscribe">
            <div className="d-flex">
                <h2 className="title-subscribe">Prêt à tenter l'aventure ? </h2>
                <p className="emoji-item-form">&#127942;</p>
            </div>

            <p className="text-form">
                Vous voulez convaincre lors de votre prochain pitch ?
                Décrivez-nous votre besoin, on vous répond sous 24h.
            </p>

            <form onSubmit={handleSubmit}>
                <label>
                    <input className="input-contact" placeholder="Nom de votre startup" type="text" value={startupName} onChange={e => setStartupName(e.target.value)} />
                </label><br/>
                <label>
                    <input className="input-contact" placeholder="Votre adresse email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                </label><br/>
                <label>
                    <textarea className="input-contact" value={description} placeholder="Décrivrez vos besoins" onChange={e => setDescription(e.target.value)} />
                </label><br/>
                <label>
                    <input className="input-contact" placeholder="Votre nom et prénom" type="text" value={fullName} onChange={e => setFullName(e.target.value)} />
                </label><br/>
                <button className="learn-more-form learn-more" type="submit">Soumettre</button>
            </form>
        </div>
    );
}

export default Subscribe;