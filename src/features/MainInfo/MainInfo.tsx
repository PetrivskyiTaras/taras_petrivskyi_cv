import Image from 'next/image';
import { Link, Paper, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CodeIcon from '@mui/icons-material/Code';
import TranslateIcon from '@mui/icons-material/Translate';
import { type FC, useCallback, useRef, useState } from 'react';
import { flushSync } from 'react-dom';

import { LANGUAGES, SKILLS } from '@/shared/data';
import { type PersonalInfo } from '@/shared/api/types';
import PrintButton from '@/shared/ui/PrintButton';
import DownloadPdfButton from '@/shared/ui/DownloadPdfButton';
import SectionHeader from '@/shared/ui/SectionHeader';
import FieldLabel from '@/shared/ui/FieldLabel';
import TagList from '@/shared/ui/TagList';

import ContactItem from './ContactItem';
import CopyButton from './ValueToDisplay/CopyButton';
import ValueToDisplay from './ValueToDisplay';
import ToggleThemeButton from './ToggleThemeButton';
import usePrintMode from './usePrintMode';
import styles from './MainInfo.module.css';

const LINKEDIN_URL = 'https://www.linkedin.com/in/taras-petrivskyi-31547393';
const FAMILY_BUDGET_URL = 'https://familybudget.pro';

const MainInfo: FC = () => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);
  const personalInfoRequest = useRef<Promise<void> | null>(null);

  // Contact details live only on the server and are requested on demand (Show / Print).
  const loadPersonalInfo = useCallback(async () => {
    // eslint-disable-next-line compat/compat
    personalInfoRequest.current ??= fetch('/api/personal-info')
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`Failed to load personal info: ${ response.status }`);
        }

        const data = await response.json() as PersonalInfo;

        flushSync(() => setPersonalInfo(data));
      })
      .catch((error: unknown) => {
        personalInfoRequest.current = null;
        throw error;
      });

    return personalInfoRequest.current;
  }, []);

  const { printing, print } = usePrintMode(loadPersonalInfo);

  return (
    <Paper elevation={4} className={styles.root}>
      <div className={styles.avatarContainer}>
        <ToggleThemeButton className={styles.toggleThemeButton} />
        <Image
          src="/avatar.jpg"
          alt="Petrivskyi Taras"
          width="445"
          height="500"
          sizes="(min-width: 900px) 445px, 100vw"
          className={styles.avatar}
          preload
        />
        <div className={styles.titleContainer}>
          <Typography variant="h1" className={styles.name} textAlign="center">
            Taras Petrivskyi
          </Typography>
          <Typography variant="h2" className={styles.position} textAlign="center">
            Senior Full-Stack Software Engineer
            <br />
            Technical Lead
          </Typography>
          <Typography variant="body1" className={styles.specialization} textAlign="center">
            (TypeScript + React/Next.js + Node.js)
          </Typography>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.actionButtons}>
          <DownloadPdfButton className={styles.downloadButton} />
          <PrintButton onPrint={() => void print()} className={styles.printButton} />
        </div>
        <section className={styles.section}>
          <SectionHeader icon={<ContactMailIcon />} title="Contact" />
          <ul className={styles.contacts}>
            <ContactItem icon={<PhoneIcon />} label="Phone">
              <ValueToDisplay
                value={personalInfo?.phone}
                displayName="Phone"
                href={personalInfo ? `tel:${ personalInfo.phone }` : undefined}
                onShow={loadPersonalInfo}
                fakeValue="+38 (096) 9....."
                forcedToShow={printing}
              />
            </ContactItem>
            <ContactItem icon={<EmailIcon />} label="Email">
              <ValueToDisplay
                value={personalInfo?.email}
                displayName="Email"
                href={personalInfo ? `mailto:${ personalInfo.email }` : undefined}
                onShow={loadPersonalInfo}
                fakeValue="taras........@gmail.com"
                forcedToShow={printing}
              />
            </ContactItem>
            <ContactItem icon={<HomeIcon />} label="Location">
              Kyiv, Ukraine
            </ContactItem>
            <ContactItem icon={<LinkedInIcon />} label="LinkedIn">
              <span className={styles.linkRow}>
                <Link href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  linkedin.com/in/taras-petrivskyi-31547393
                </Link>
                <CopyButton value={LINKEDIN_URL} copyText="Copy LinkedIn link" copiedText="LinkedIn link was copied" className={styles.copyButton} />
              </span>
            </ContactItem>
            <ContactItem icon={<LanguageIcon />} label="My SaaS project">
              <span className={styles.linkRow}>
                <Link href={FAMILY_BUDGET_URL} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  FamilyBudget.pro
                </Link>
                <CopyButton value={FAMILY_BUDGET_URL} copyText="Copy FamilyBudget.pro link" copiedText="FamilyBudget.pro link was copied" className={styles.copyButton} />
              </span>
            </ContactItem>
          </ul>
        </section>
        <section className={styles.section}>
          <SectionHeader icon={<CodeIcon />} title="Skills" />
          <div className={styles.skillGroups}>
            { SKILLS.map((item) => (
              <div key={item.id}>
                <FieldLabel>{ item.category }</FieldLabel>
                <TagList items={item.skill} />
              </div>
            )) }
          </div>
        </section>
        <section className={styles.section}>
          <SectionHeader icon={<TranslateIcon />} title="Languages" />
          <ul className={styles.languages}>
            { LANGUAGES.map((item) => (
              <li key={item.id} className={styles.language}>
                <span className={styles.languageName}>{ item.name }</span>
                <span className={styles.languageLevel}>{ item.level }</span>
              </li>
            )) }
          </ul>
        </section>
      </div>
    </Paper>
  );
};

export default MainInfo;
