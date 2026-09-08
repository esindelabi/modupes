import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import { posts } from '../data/posts';
import Reveal from './Reveal';

const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });

const Carnet: React.FC = () => {
    const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

    return (
        <section className="section carnet-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-eyebrow">Carnet</span>
                    <h1 className="section-title">
                        Pensées & <em>nouveautés</em>
                    </h1>
                    <p className="section-subtitle">
                        Un espace personnel pour partager mes réflexions, mes apprentissages et
                        les dernières nouvelles de mes projets.
                    </p>
                </div>

                <Reveal className="carnet-grid">
                    {sorted.map((post, index) => (
                        <Reveal key={post.slug} delay={index * 90} className="post-card-wrap">
                            <Link to={`/carnet/${post.slug}`} className="post-card">
                                <div className="post-card-top">
                                    <span className="post-category">{post.category}</span>
                                    <time className="post-date" dateTime={post.date}>
                                        {formatDate(post.date)}
                                    </time>
                                </div>

                                <h2 className="post-card-title">{post.title}</h2>
                                <p className="post-card-excerpt">{post.excerpt}</p>

                                <div className="post-card-foot">
                                    <span className="post-card-link">
                                        Lire l'article
                                        <FaArrowRight />
                                    </span>
                                    <span className="post-reading">{post.readingTime} min de lecture</span>
                                </div>
                            </Link>
                        </Reveal>
                    ))}
                </Reveal>
            </div>
        </section>
    );
};

export default Carnet;