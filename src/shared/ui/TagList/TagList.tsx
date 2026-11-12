import { type FC } from 'react';

import styles from './TagList.module.css';

type Props = {
  // Comma-separated string ("React, Next.js, …") or a ready list.
  items: string | string[];
  className?: string;
};

const TagList: FC<Props> = ({ items, className }) => {
  const tags = (Array.isArray(items) ? items : items.split(',')).map((item) => item.trim()).filter(Boolean);

  return (
    <ul className={className ? `${ styles.root } ${ className }` : styles.root}>
      { tags.map((tag) => (
        <li key={tag} className={styles.tag}>{ tag }</li>
      )) }
    </ul>
  );
};

export default TagList;
