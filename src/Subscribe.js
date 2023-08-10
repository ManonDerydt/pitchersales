import React, { useState } from 'react';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Subscribe() {
    const [role, setRole] = useState('');
    const [startupName, setStartupName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [fullName, setFullName] = useState('');



    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            fields: {
                "Role": role,
                "Startup_name": startupName,
                "Email": email,
                "Description": description,
                "Name": fullName,
            }
        }

        const config = {
            headers: {
                'Authorization': `Bearer keyBUlnaxRN7JkNZM`,
                'Content-Type': 'application/json'
            }
        }

        try {
            const response = await axios.post("https://api.airtable.com/v0/appuGqsNoi0cpTheH/Table%201?maxRecords=3&view=Grid%20view", data, config);
            console.log(response.data);
            toast.success("Votre formulaire a été soumis avec succès !");
        } catch (error) {
            console.error(error);
            toast.error("Une erreur s'est produite lors de la soumission du formulaire.");

        }
    };

    return (
        <div className="content-subscribe" id="subscribe">
            <ToastContainer />
            <div className="d-flex-desktop">
                <h2 className="title-subscribe">Prêt à tenter l'aventure ? </h2>
                <p className="emoji-item-form-subscribe">&#127942;</p>
            </div>

            <p className="text-form">
                Vous voulez convaincre lors de votre prochain pitch ?
                Décrivez-nous votre besoin, on vous répond sous 24h.
            </p>

            <form onSubmit={handleSubmit} className="form">
                <label>
                    <select value={role} onChange={e => setRole(e.target.value)} className="input-contact-select" required>
                        <option value="role">Choisissez une option</option>
                        <option value="startup">Startup</option>
                        <option value="investisseur">Investisseur</option>
                        <option value="autre">Autre</option>
                    </select>
                </label><br/>
                {role === 'startup' && (
                    <label>
                        <input required className="input-contact valueStartupName" placeholder="Nom de votre startup" type="text" value={startupName} onChange={e => setStartupName(e.target.value)} />
                    </label>
                    )}<br/>
                <label>
                    <input required className="input-contact" placeholder="Votre nom et prénom" type="text" value={fullName} onChange={e => setFullName(e.target.value)}/>
                </label><br/>
                <label>
                    <input required className="input-contact" placeholder="Votre adresse email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                </label><br/>
                <label>
                    <textarea className="input-description" value={description} placeholder="Décrivrez vos besoins" onChange={e => setDescription(e.target.value)} />
                </label><br/>
                <button className="learn-more-form learn-more btn-form" type="submit">Soumettre</button>
            </form>
        </div>
    );
}

export default Subscribe;
