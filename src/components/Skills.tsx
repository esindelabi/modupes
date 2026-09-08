import React from 'react';
import type { IconType } from 'react-icons';
import {
    FaBolt,
    FaCss3Alt,
    FaDatabase,
    FaFileCode,
    FaFigma,
    FaGitAlt,
    FaHtml5,
    FaJs,
    FaNodeJs,
    FaPython,
    FaReact,
    FaUsers,
} from 'react-icons/fa6';
import { SiTypescript } from 'react-icons/si';
import Reveal from './Reveal';

interface Skill {
    name: string;
    level: string;
    pct: number;
    icon: IconType;
}

interface SkillCategory {
    title: string;
    icon: IconType;
    skills: Skill[];
}

const skillData: SkillCategory[] = [
    {
        title: 'Frontend & UI/UX',
        icon: FaReact,
        skills: [
            { name: 'HTML5 & CSS3', level: 'Avancé', pct: 90, icon: FaHtml5 },
            { name: 'JavaScript (ES6+)', level: 'Avancé', pct: 88, icon: FaJs },
            { name: 'React & Hooks', level: 'Avancé', pct: 85, icon: FaReact },
            { name: 'TypeScript', level: 'Intermédiaire', pct: 70, icon: SiTypescript },
            { name: 'Redux / Context API', level: 'Intermédiaire', pct: 65, icon: FaFileCode },
            { name: 'CSS moderne & animation', level: 'Avancé', pct: 82, icon: FaCss3Alt },
        ],
    },
    {
        title: 'Backend & Base de données',
        icon: FaDatabase,
        skills: [
            { name: 'Node.js (Express)', level: 'Intermédiaire', pct: 68, icon: FaNodeJs },
            { name: 'SQL (PostgreSQL / MySQL)', level: 'Intermédiaire', pct: 66, icon: FaDatabase },
            { name: 'Python', level: 'Basique', pct: 45, icon: FaPython },
        ],
    },
    {
        title: 'Outils & Méthodologie',
        icon: FaBolt,
        skills: [
            { name: 'Git & GitHub', level: 'Avancé', pct: 92, icon: FaGitAlt },
            { name: 'Vite / Webpack', level: 'Intermédiaire', pct: 72, icon: FaBolt },
            { name: 'Figma & Design', level: 'Avancé', pct: 88, icon: FaFigma },
            { name: 'Méthodes Agiles (Scrum)', level: 'Avancé', pct: 80, icon: FaUsers },
        ],
    },
];

const Skills: React.FC = () => {
    return (
        <section id="skills" className="section section-lighter skills-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-eyebrow">Expertise</span>
                    <h2 className="section-title">
                        Mes compétences <em>techniques</em>
                    </h2>
                    <p className="section-subtitle">
                        Un socle technique solide au service de créations élégantes.
                    </p>
                </div>

                <Reveal className="skills-grid">
                    {skillData.map((category, categoryIndex) => (
                        <Reveal key={category.title} delay={categoryIndex * 120} className="skill-card">
                            <div className="skill-card-head">
                                <span className="skill-card-icon">
                                    <category.icon />
                                </span>
                                <h3 className="skill-category-title">{category.title}</h3>
                            </div>
                            <ul className="skill-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <li key={skill.name} className="skill-item">
                                        <div className="skill-item-top">
                                            <span className="skill-name">
                                                <skill.icon style={{ marginRight: '0.5rem', verticalAlign: '-0.15em' }} />
                                                {skill.name}
                                            </span>
                                            <span className="skill-level">{skill.level}</span>
                                        </div>
                                        <div className="skill-bar">
                                            <div
                                                className="skill-bar-fill"
                                                style={{
                                                    ['--pct' as string]: `${skill.pct}%`,
                                                    transitionDelay: `${skillIndex * 90}ms`,
                                                }}
                                            />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                    ))}
                </Reveal>
            </div>
        </section>
    );
};

export default Skills;