import React from 'react';

interface Skill {
    name: string;
    level: string;
}

interface SkillCategory {
    title: string;
    skills: Skill[];
}

const skillData: SkillCategory[] = [
    {
        title: "Frontend & UI/UX",
        skills: [
            { name: "HTML5 & CSS3", level: "Avancé" },
            { name: "JavaScript (ES6+)", level: "Avancé" },
            { name: "TypeScript", level: "Intermédiaire" },
            { name: "React & Hooks", level: "Avancé" },
            { name: "Redux / Context API", level: "Intermédiaire" },
        ],
    },
    {
        title: "Backend & Base de données",
        skills: [
            { name: "Node.js (Express)", level: "Intermédiaire" },
            { name: "Python", level: "Basique" },
            { name: "SQL (PostgreSQL/MySQL)", level: "Intermédiaire" },
        ],
    },
    {
        title: "Outils & Méthodologie",
        skills: [
            { name: "Git & GitHub", level: "Avancé" },
            { name: "Vite / Webpack", level: "Intermédiaire" },
            { name: "Figma & Design", level: "Avancé" },
            { name: "Méthodes Agiles (Scrum)", level: "Avancé" },
        ],
    },
];

const SkillsPage: React.FC = () => {
    return (
        <section className="section skills-section">
            <div className="container">
                <h2 className="section-title">Mes Compétences Techniques</h2>
                <div className="skills-grid">
                    {skillData.map((category) => (
                        <div key={category.title} className="skill-card">
                            <h3 className="skill-category-title">{category.title}</h3>
                            <ul className="skill-list">
                                {category.skills.map((skill) => (
                                    <li key={skill.name} className="skill-item">
                                        <span className="skill-name">{skill.name}</span>
                                        <span className="skill-level">{skill.level}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsPage;