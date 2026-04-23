export const GET = () => {
  const skills = [
    {
      id: '1',
      category: 'Core stack',
      skill: 'JavaScript (ES5, 6+), TypeScript, React, Next.js,  HTML/CSS (LESS, SCSS)',
    },
    {
      id: '2',
      category: 'State Management & Data Fetching',
      skill: 'Redux/Redux Toolkit, Redux Saga, MobX, Zustand, GraphQL/Apollo, TanStack Query',
    },
    {
      id: '3',
      category: 'UI & Libraries',
      skill: 'Material UI (MUI), Tailwind CSS, Highcharts, Chart.js, TanStack React Table, React Hook Form, Redux Form, Monaco Editor, React Markdown, Storybook, React-Awesome-Query-Builder',
    },
    {
      id: '4',
      category: 'Testing',
      skill: 'Jest, React Testing Library (unit & component testing)',
    },
    {
      id: '5',
      category: 'Backend & Databases',
      skill: 'Node.js, MSSQL, MySQL, Redash',
    },
    {
      id: '6',
      category: 'Tooling & DevOps',
      skill: 'Webpack, Vite, GIT, Docker, NX, JIRA, JetBrains WebStorm/IntelliJ IDEA, Cursor, Bpm’online, GitHub/GitLab/Bitbucket, Azure DevOps, Microsoft Visual Studio',
    },
    {
      id: '7',
      category: 'Additional Experience',
      skill: 'React Native, AI-assisted development (Cursor, Claude, Gemini, ChatGPT/Codex)',
    },
  ];

  return new Response(JSON.stringify(skills), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
