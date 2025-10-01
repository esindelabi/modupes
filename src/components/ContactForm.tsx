import React from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';

interface FormData {
    name: string;
    email: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        console.log("Données du formulaire soumises :", data);
        await new Promise(resolve => setTimeout(resolve, 1000)); 
        alert("Merci pour votre message ! Il a été envoyé avec succès (simulation).");
        reset(); 
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <h2 className="section-title">Me contacter</h2>
                <div className="contact-form-wrapper">
                    <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                        
                        <div>
                            <label htmlFor="name" className="form-label">Nom</label>
                            <input 
                                type="text" 
                                id="name" 
                                className={`form-input ${errors.name ? 'form-input-error' : ''}`}
                                {...register("name", { required: "Le nom est requis" })}
                            />
                            {errors.name && <p className="form-error-message">{errors.name.message}</p>}
                        </div>
                        
                        <div>
                            <label htmlFor="email" className="form-label">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                className={`form-input ${errors.email ? 'form-input-error' : ''}`}
                                {...register("email", { 
                                    required: "L'email est requis", 
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: "Le format de l'email est invalide"
                                    }
                                })}
                            />
                            {errors.email && <p className="form-error-message">{errors.email.message}</p>}
                        </div>
                        
                        <div>
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea 
                                id="message" 
                                rows={5} 
                                className={`form-input ${errors.message ? 'form-input-error' : ''}`}
                                {...register("message", { required: "Le message est requis" })}
                            ></textarea>
                            {errors.message && <p className="form-error-message">{errors.message.message}</p>}
                        </div>
                        
                        <button 
                            type="submit" 
                            className={`form-submit-btn ${isSubmitting ? 'is-submitting' : ''}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;