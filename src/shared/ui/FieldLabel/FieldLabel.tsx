import { Typography } from '@mui/material';
import { type FC, type ReactNode } from 'react';

import styles from './FieldLabel.module.css';

type Props = {
  children: ReactNode;
};

// Small uppercase label above a group of content ("KEY CONTRIBUTIONS", "FRONTEND DEVELOPMENT").
const FieldLabel: FC<Props> = ({ children }) => (
  <Typography variant="overline" component="h4" className={styles.root}>{ children }</Typography>
);

export default FieldLabel;
