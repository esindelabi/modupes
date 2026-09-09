import React, { useRef, useState } from 'react';
import { FaCircleCheck, FaCircleExclamation, FaRegPaperPlane } from 'react-icons/fa6';
import Reveal from './Reveal';

const CONTACT_FORM_ENDPOINT = '/api/contact';

type Status = 'idle' | 'success' | 'error';

const ContactForm: React.FC = () => {
    const [status, setStatus] = useState<Status>('idle');
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus('idle');

        const formData = new FormData(event.currentTarget);

        const payload = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
        };

        try {
            const response = await fetch(CONTACT_FORM_ENDPOINT, {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                setStatus('success');
                if (formRef.current) {
                    formRef.current.reset();
                }
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error("Erreur lors de l'envoi du formulaire:", error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="section section-lighter contact-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-eyebrow">Contact</span>
                    <h2 className="section-title">
                        Contactez-<em>moi</em>
                    </h2>
                    <p className="section-subtitle">
                        Un projet en tête ? Discutons-en — je réponds rapidement.
                    </p>
                </div>

                <Reveal>
                    <div className="contact-form-wrapper">
                        <form
                            ref={formRef}
                            className="contact-form"
                            onSubmit={handleSubmit}
                        >
                            <div className="form-group">
                                <label htmlFor="name" className="form-label">
                                    Nom
                                </label>
                                <input type="text" id="name" name="name" className="form-input" placeholder="Votre nom" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-input"
                                    placeholder="vous@exemple.com"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message" className="form-label">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    className="form-input"
                                    placeholder="Parlez-moi de votre projet…"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary form-submit-btn"
                                disabled={status !== 'idle'}
                            >
                                Envoyer le message
                                <FaRegPaperPlane />
                            </button>
                        </form>

                        <p className="form-note">
                            Autre préférence ? Écrivez-moi à{' '}
                            <a href="mailto:esindelabi@gmail.com">esindelabi@gmail.com</a>
                        </p>

                        {status === 'success' && (
                            <p className="form-feedback form-feedback-success" role="status">
                                <FaCircleCheck aria-hidden="true" />
                                Merci ! Votre message a été envoyé. Je vous recontacterai rapidement.
                            </p>
                        )}
                        {status === 'error' && (
                            <p className="form-feedback form-feedback-error" role="alert">
                                <FaCircleExclamation aria-hidden="true" />
                                Une erreur s'est produite. Veuillez réessayer ou m'écrire directement.
                            </p>
                        )}
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default ContactForm;