import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';
import { posts } from '../data/posts';

const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });

const PostDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        return (
            <section className="section not-found">
                <div className="container">
                    <span className="section-eyebrow">Carnet</span>
                    <h1 className="section-title">Article introuvable</h1>
                    <p className="section-subtitle">
                        Cet article n'existe pas ou a été déplacé.
                    </p>
                    <Link to="/carnet" className="btn btn-primary">
                        Retour au carnet
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <article className="section post-detail">
            <div className="container">
                <div className="post-detail-header">
                    <Link to="/carnet" className="post-detail-back">
                        <FaArrowLeft />
                        Retour au carnet
                    </Link>

                    <div className="post-detail-meta">
                        <span className="post-category">{post.category}</span>
                        <time dateTime={post.date}>{formatDate(post.date)}</time>
                        <span className="post-detail-dot" />
                        <span>{post.readingTime} min</span>
                    </div>

                    <h1 className="post-detail-title">{post.title}</h1>
                </div>

                <div className="post-detail-body">
                    {post.content.map((block, index) => {
                        switch (block.type) {
                            case 'heading':
                                return (
                                    <h2 key={index} className="post-block-heading">
                                        {block.text}
                                    </h2>
                                );
                            case 'quote':
                                return (
                                    <blockquote key={index} className="post-block-quote">
                                        {block.text}
                                    </blockquote>
                                );
                            default:
                                return (
                                    <p key={index} className="post-block-para">
                                        {block.text}
                                    </p>
                                );
                        }
                    })}
                </div>

                <div className="post-detail-foot">
                    <Link to="/carnet" className="btn btn-ghost">
                        <FaArrowLeft />
                        Continuer la lecture au carnet
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default PostDetail;