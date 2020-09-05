interface project {
  visualId: string;
  name: string;
  demoURL: string;
  repoURL: string;
}

const projects: Array<project> = [
  {
    visualId: '01',
    name: 'the chompus game',
    demoURL: 'https://evgeny-rov.github.io/the-chompus-game/',
    repoURL: 'https://github.com/evgeny-rov/the-chompus-game',
  },
  {
    visualId: '02',
    name: 'in24',
    demoURL: 'https://evgeny-rov.github.io/in24/',
    repoURL: 'https://github.com/evgeny-rov/in24',
  },
  {
    visualId: '03',
    name: 'ava assistant',
    demoURL: 'https://github.com/evgeny-rov/ava-assistant/template',
    repoURL: 'https://github.com/evgeny-rov/ava-assistant',
  },
  {
    visualId: '04',
    name: '3d dice roller',
    demoURL: 'https://evgeny-rov.github.io/dice-roller/',
    repoURL: 'https://github.com/evgeny-rov/dice-roller',
  },
];

export default projects;