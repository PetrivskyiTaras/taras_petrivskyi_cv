import { Paper, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import { EDUCATION } from '@/shared/data';
import SectionHeader from '@/shared/ui/SectionHeader';

import styles from './Education.module.css';

const Education = () => (
  <Paper className={styles.root}>
    <SectionHeader icon={<SchoolIcon />} title="Education" />
    <ul className={styles.list}>
      { EDUCATION.map((item) => (
        <li key={item.id} className={styles.item}>
          <Typography variant="h6" component="h3" className={styles.degree}>{ item.degree }</Typography>
          <Typography variant="body2" className={styles.place}>{ item.placeName }</Typography>
          <Typography variant="body2" className={styles.date}>
            <CalendarMonthIcon className={styles.dateIcon} />
            { item.date }
          </Typography>
        </li>
      )) }
    </ul>
  </Paper>
);

export default Education;
