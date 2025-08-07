export const GET = () => {
  const skills = [
    {
      id: '1',
      category: 'Languages',
      skill: 'JavaScript (ES5, 6+), TypeScript, HTML/CSS (LESS, SCSS)',
    },
    {
      id: '2',
      category: 'Technologies',
      skill: 'React, Next.JS, Redux/Redux Toolkit + Redux Saga, GraphQL/Apollo, MobX, Webpack/Vite, GIT, Docker, NX, React Native (don\'t want to work with it), Node.js (I developed small services only, can take small BE tasks)',
    },
    {
      id: '3',
      category: 'DBMS',
      skill: 'MSSQL, MySQL, Redash',
    },
    {
      id: '4',
      category: 'JS Libraries',
      skill: 'Material-UI, TanStack Query (FKA React Query), React Hook Form, Redux Form, Storybook, Jest + React Testing Library, React-Awesome-Query-Builder, Highcharts, Chart.js',
    },
    {
      id: '5',
      category: 'Tools',
      skill: 'JetBrains WebStorm/IntelliJ IDEA, GitHub/GitLab/Bitbucket, JIRA, Azure DevOps, Bpm’online, Microsoft Visual Studio',
    },
  ];

  return new Response(JSON.stringify(skills), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
