'use client';

import MainInfo from '@/features/MainInfo';
import WorkExperience from '@/features/WorkExperience';
import Education from '@/features/Education';
import ProfessionalSummary from '@/features/ProfessionalSummary';

import styles from './page.module.css';

const HomePage = () => {
  return (
    <div className={styles.root}>
      <div className={styles.mainIfo}>
        <MainInfo />
      </div>
      <div className={styles.experience}>
        <ProfessionalSummary />
        <WorkExperience />
        <Education />
      </div>
    </div>
  );
};

export default HomePage;
