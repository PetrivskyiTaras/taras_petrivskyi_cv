import { Paper, Typography } from '@mui/material';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

import SectionHeader from '@/shared/ui/SectionHeader';

import styles from './ProfessionalSummary.module.css';

const SUMMARY = [
  'Full-Stack Software Engineer and Technical Lead with 11+ years of experience building production web applications,',
  'including 9+ years with React. Combines strong frontend engineering and architecture skills with hands-on backend development',
  'using Node.js, Express.js, REST APIs, PostgreSQL and Prisma. Experienced in taking products from early architecture through',
  'implementation, testing, deployment and ongoing improvement. Built and launched FamilyBudget.pro, an independent SaaS product,',
  'owning its application architecture, database, authentication, subscription payments and production infrastructure.',
  'Also experienced in technical leadership, mentoring, code reviews and cross-functional delivery.',
].join(' ');

const ProfessionalSummary = () => (
  <Paper className={styles.root}>
    <SectionHeader icon={<AssignmentIndIcon />} title="Professional Summary" />
    <Typography variant="body1" className={styles.text}>{ SUMMARY }</Typography>
  </Paper>
);

export default ProfessionalSummary;
