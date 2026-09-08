export type PostBlockType = 'paragraph' | 'heading' | 'quote';

export interface PostBlock {
    type: PostBlockType;
    text: string;
}

export interface Post {
    slug: string;
    title: string;
    date: string;
    category: string;
    excerpt: string;
    readingTime: number;
    content: PostBlock[];
}

export const posts: Post[] = [
    {
        slug: 'bienvenue-dans-mon-carnet',
        title: 'Bienvenue dans mon carnet',
        date: '2026-09-08',
        category: 'Introduction',
        excerpt:
            "Un espace pour partager mes pensées, mes apprentissages et les coulisses de mes projets.",
        readingTime: 3,
        content: [
            {
                type: 'paragraph',
                text: "Ce carnet est né d'une envie simple : donner une voix aux pensées qui traversent mon travail. Développer, designer, dessiner, découvrir — ce sont autant de manières de créer, et chacune mérite d'être racontée.",
            },
            {
                type: 'paragraph',
                text: "J'y partagerai mes apprentissages techniques, mes réflexions sur le métier de développeuse, et les nouveautés de mes projets. Sans jargon inutile, avec authenticité.",
            },
            {
                type: 'quote',
                text: "On n'invente pas la beauté, on la reconnaît quand elle prend vie à l'écran.",
            },
            {
                type: 'paragraph',
                text: 'Que tu sois curieux, recruteur ou simple passant, j’espère que tu y trouveras un peu d’inspiration. Bonne lecture !',
            },
        ],
    },
    {
        slug: 'l-elegance-dans-le-code',
        title: "L'élégance dans le code",
        date: '2026-08-20',
        category: 'Réflexion',
        excerpt:
            "Pourquoi la beauté n'est pas un luxe, mais une qualité essentielle du bon code.",
        readingTime: 4,
        content: [
            {
                type: 'paragraph',
                text: "Il y a quelque chose de mystérieux dans la beauté. On la reconnaît immédiatement, mais on peine à la définir. En code comme en design, je crois que l'élégance naît d'un même geste : soustraire tout ce qui est superflu.",
            },
            {
                type: 'paragraph',
                text: "Une interface épurée, c'est du code qui se lit comme un poème court. C'est une fonction qui porte son intention dans son nom, un composant qui ne fait qu'une seule chose et qui la fait parfaitement.",
            },
            {
                type: 'heading',
                text: 'La beauté sert l’utilisateur',
            },
            {
                type: 'paragraph',
                text: 'Loin d’être un caprice esthétique, l’élégance a une fonction : la clarté. Un système clair est plus facile à apprendre, à maintenir, à faire évoluer. Elle réduit la fatigue cognitive de celles et ceux qui l’utilisent comme de celles et ceux qui le font vivre.',
            },
            {
                type: 'quote',
                text: "Simple n'est pas moins. Simple est exactement assez.",
            },
        ],
    },
    {
        slug: 'ce-que-j-apprends-react-rust-flet',
        title: 'Ce que j’apprends en ce moment : React, Rust et Flet',
        date: '2026-07-12',
        category: 'Nouveauté',
        excerpt:
            "Un aperçu de mes explorations actuelles et de ce qu'elles m'ont appris jusqu'ici.",
        readingTime: 5,
        content: [
            {
                type: 'paragraph',
                text: 'Chaque mois, je choisis un territoire à explorer. Ce trimestre, trois noms reviennent sans cesse dans mon carnet : React, Rust et Flet.',
            },
            {
                type: 'paragraph',
                text: 'React continue d’affiner ma façon de penser l’interface : composants, état, hooks. Une discipline d’architecture plus qu’un simple outils.',
            },
            {
                type: 'heading',
                text: 'Rust, la rigueur qui paie',
            },
            {
                type: 'paragraph',
                text: 'Rust m’apprend la lenteur réfléchie. Le compilateur est exigeant, mais chaque erreur est une leçon. Son système de propriété m’a obligée à penser la mémoire autrement, et cette rigueur rejaillit sur la façon dont j’écris, partout ailleurs.',
            },
            {
                type: 'paragraph',
                text: 'Quant à Flet, il me permet d’assembler des applications en Python avec une agilité désarmante. Une belle preuve qu’on peut créer vite et joli.',
            },
            {
                type: 'quote',
                text: 'Apprendre, c’est empiler des briques. Mais c’est l’envie qui pose la suivante.',
            },
        ],
    },
];