import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Fade from "react-reveal/Fade";
import pic1 from "../src/assets/Investors/fusée.png";
import pic2 from "../src/assets/subscribe/bag.png";
import pic3 from "../src/assets/subscribe/buble.png";

function Subscribe() {
    const [selectedRole, setSelectedRole] = useState('');
    const [startupName, setStartupName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [fullName, setFullName] = useState('');

    const handleCardClick = (role) => {
        setSelectedRole(role);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            fields: {
                "Role": selectedRole,
                "Startup_name": startupName,
                "Email": email,
                "Description": description,
                "Name": fullName,
            }
        };

        const config = {
            headers: {
                'Authorization': `Bearer keyBUlnaxRN7JkNZM`,
                'Content-Type': 'application/json'
            }
        };

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
        <div>
            <div className="content-subscribe" id="subscribe">
                <ToastContainer />
                <Fade bottom delay={200}>
                    <div className>
                        <h2 className="title-subscribe">On s'inscrit ?<br /><span className="color-orange">Tout d'abord, faisons connaissance !</span></h2>
                    </div>
                    <form onSubmit={handleSubmit} className="form">
                        <div className="d-flex-desktop content-card-s">
                            <div
                                className={`card-s ${selectedRole === 'porteur_projet' ? 'selected-img' : ''}`}
                                onClick={() => handleCardClick('porteur_projet')}
                            >
                                <img src={pic1} className={`pic-s ${selectedRole === 'porteur_projet' ? 'selected' : ''}`} alt="Pic 1" />
                                <p className="p-s">Porteur de projet</p>
                            </div>
                            <div
                                className={`card-s ${selectedRole === 'investisseur' ? 'selected-img' : ''}`}
                                onClick={() => handleCardClick('investisseur')}
                            >
                                <img src={pic2} className={`pic-s ${selectedRole === 'investisseur' ? 'selected' : ''}`} alt="Pic 2" />
                                <p className="p-s">Investisseurs</p>
                            </div>
                            <div
                                className={`card-s ${selectedRole === 'conseiller' ? 'selected-img' : ''}`}
                                onClick={() => handleCardClick('conseiller')}
                            >
                                <img src={pic3} className={`pic-s ${selectedRole === 'conseiller' ? 'selected' : ''}`} alt="Pic 3" />
                                <p className="p-s">Conseillers</p>
                            </div>
                        </div>
                        <div className="text-center">
                            <label>
                                <input
                                    required
                                    className="input-contact"
                                    placeholder="Votre nom et prénom"
                                    type="text"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                />
                            </label>
                            <br />
                            <label>
                                <input
                                    required
                                    className="input-contact"
                                    placeholder="Votre adresse email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </label>
                            <br />
                        </div>
                        <button className="learn-more-form btn-form" type="submit">
                            Soumettre
                        </button>
                    </form>
                </Fade>
            </div>
        </div>
    );
}

export default Subscribe;