export interface Station {
  id: string;
  number: number;
  name: string;
  title: string;
  stepsCount: number;
  subtitle: string;
  identity: string;
  question: string;
  description: string;
  pillar: 'SER' | 'FAZER' | 'SABER';
  pillarEmoji: string;
  icon: string;
  link: string;
  external: boolean;
  status: 'active' | 'coming_soon';
}

export const stations: Station[] = [
  {
    id: 'estacao-1',
    number: 1,
    name: 'FILHO',
    title: 'Trilha de Novos',
    stepsCount: 9,
    subtitle: 'Identidade e Pertencimento',
    identity: 'Filho de Deus',
    question: 'Quem sou eu?',
    description: 'Fundamentos da vida cristã: identidade em Cristo, pertencimento à Comunidade Vitral e primeiros passos na caminhada de discipulado.',
    pillar: 'SER',
    pillarEmoji: '❤️',
    icon: '🌱',
    link: 'https://ismaelmmachado.github.io/trilha_de_novos/index.html',
    external: true,
    status: 'active',
  },
  {
    id: 'estacao-2',
    number: 2,
    name: 'SERVO',
    title: 'Praticando o Caminho',
    stepsCount: 17,
    subtitle: 'Práticas e Caráter',
    identity: 'Servo do Reino',
    question: 'Como vivo?',
    description: 'Práticas espirituais, formação de caráter e serviço comunitário aplicando os ensinamentos de Jesus no dia a dia.',
    pillar: 'FAZER',
    pillarEmoji: '🖐️',
    icon: '🌿',
    link: 'https://ismaelmmachado.github.io/trilha_praticando_o_caminho/index.html',
    external: true,
    status: 'active',
  },
  {
    id: 'estacao-3',
    number: 3,
    name: 'MORDOMO',
    title: 'Fundamentos da Fé',
    stepsCount: 8,
    subtitle: 'Compreensão e Fundamentação',
    identity: 'Mordomo da Graça',
    question: 'O que creio?',
    description: 'Fundamentos teológicos sólidos: doutrina bíblica, soteriologia e vida cristã intencional como mordomos de Deus.',
    pillar: 'SABER',
    pillarEmoji: '🧠',
    icon: '🌳',
    link: '',
    external: false,
    status: 'coming_soon',
  },
];