import { type FC, type ReactNode } from 'react';

import styles from './ContactItem.module.css';

type Props = {
  icon: ReactNode;
  label: string;
  children: ReactNode;
};

// One contact row: tinted icon tile, small label, value as the main text.
const ContactItem: FC<Props> = ({ icon, label, children }) => (
  <li className={styles.root}>
    <span className={styles.icon} aria-hidden>{ icon }</span>
    <div className={styles.body}>
      <span className={styles.label}>{ label }</span>
      <div className={styles.value}>{ children }</div>
    </div>
  </li>
);

export default ContactItem;
