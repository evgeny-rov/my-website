interface project {
  id: string;
  name: string;
  description: string;
  demoURL: string;
  repoURL: string;
}

const projects: Array<project> = [
  {
    id: '01',
    name: 'the chompus game',
    description: '2D Web JS Game',
    demoURL: 'https://evgeny-rov.github.io/the-chompus-game/',
    repoURL: 'https://github.com/evgeny-rov/the-chompus-game',
  },
  {
    id: '02',
    name: 'in24',
    description: 'Todo app that resets your progress',
    demoURL: 'https://evgeny-rov.github.io/in24/',
    repoURL: 'https://github.com/evgeny-rov/in24',
  },
  {
    id: '03',
    name: 'ava assistant',
    description: 'Dynamic contact me form experiment',
    demoURL: 'https://evgeny-rov.github.io/ava-assistant/',
    repoURL: 'https://github.com/evgeny-rov/ava-assistant',
  },
  {
    id: '04',
    name: '3d dice roller',
    description: '3D Dice Rolling App',
    demoURL: 'https://evgeny-rov.github.io/dice-roller/',
    repoURL: 'https://github.com/evgeny-rov/dice-roller',
  },
];

export default projects;
