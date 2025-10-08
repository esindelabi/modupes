import React, { useState } from 'react';
// Importation du hook Formspree si vous souhaitez une gestion d'état plus avancée
// Si vous utilisez le Formspree natif, ce n'est pas strictement nécessaire

const CONTACT_FORM_ENDPOINT = "VOTRE_URL_FORMSPREE_UNIQUE_ICI"; 

const ContactForm: React.FC = () => {
    // État pour afficher un message de succès après l'envoi
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    // Fonction de gestion de la soumission native
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Empêche le rechargement standard
        setStatus('idle');

        const form = event.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch(CONTACT_FORM_ENDPOINT, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
                form.reset(); // Vide le formulaire en cas de succès
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error("Erreur lors de l'envoi du formulaire:", error);
            setStatus('error');
        }
    };


    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <h2 className="section-title">Contactez-moi</h2>
                <div className="contact-form-wrapper">
                    
                    {/* MESSAGE DE SUCCÈS OU D'ERREUR */}
                    {status === 'success' && (
                        <p className="form-success-message">
                            ✅ Merci ! Votre message a été envoyé avec succès. Je vous recontacterai rapidement.
                        </p>
                    )}
                    {status === 'error' && (
                        <p className="form-error-message">
                            ❌ Une erreur s'est produite. Veuillez réessayer ou m'envoyer un e-mail directement.
                        </p>
                    )}

                    {/* Le formulaire utilise maintenant votre endpoint Formspree */}
                    <form 
                        className="contact-form" 
                        action={CONTACT_FORM_ENDPOINT} 
                        method="POST"
                        onSubmit={handleSubmit}
                    >
                        
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Nom</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                className="form-input" 
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="_replyto" // L'attribut Formspree pour l'email de réponse
                                className="form-input" 
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                rows={5} 
                                className="form-input" 
                                required
                            ></textarea>
                        </div>
                        
                        <button 
                            type="submit" 
                            className="form-submit-btn" 
                            disabled={status === 'idle' ? false : true}
                        >
                            Envoyer le message
                        </button>

                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;