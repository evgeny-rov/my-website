interface project {
  id: string;
  name: string;
  demoURL: string;
  repoURL: string;
}

const projects: Array<project> = [
  {
    id: '01',
    name: 'the chompus game',
    demoURL: 'https://evgeny-rov.github.io/the-chompus-game/',
    repoURL: 'https://github.com/evgeny-rov/the-chompus-game',
  },
  {
    id: '02',
    name: 'in24',
    demoURL: 'https://evgeny-rov.github.io/in24/',
    repoURL: 'https://github.com/evgeny-rov/in24',
  },
  {
    id: '03',
    name: 'ava assistant',
    demoURL: 'https://github.com/evgeny-rov/ava-assistant/template',
    repoURL: 'https://github.com/evgeny-rov/ava-assistant',
  },
  {
    id: '04',
    name: '3d dice roller',
    demoURL: 'https://evgeny-rov.github.io/dice-roller/',
    repoURL: 'https://github.com/evgeny-rov/dice-roller',
  },
];

export default projects;
