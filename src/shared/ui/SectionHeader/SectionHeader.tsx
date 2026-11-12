import { Typography } from '@mui/material';
import { type FC, type ReactNode } from 'react';

import styles from './SectionHeader.module.css';

type Props = {
  icon: ReactNode;
  title: string;
  action?: ReactNode;
};

const SectionHeader: FC<Props> = ({ icon, title, action }) => (
  <div className={styles.root}>
    <span className={styles.icon} aria-hidden>{ icon }</span>
    <Typography variant="h5" component="h2" className={styles.title}>{ title }</Typography>
    { action ? <div className={styles.action}>{ action }</div> : null }
  </div>
);

export default SectionHeader;
