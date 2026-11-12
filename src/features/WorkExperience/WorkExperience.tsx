import { Paper, Typography, Collapse, IconButton, Tooltip, Link } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

import { EXPERIENCE } from '@/shared/data';
import SectionHeader from '@/shared/ui/SectionHeader';
import FieldLabel from '@/shared/ui/FieldLabel';
import TagList from '@/shared/ui/TagList';
import { getDatePeriodString } from '@/features/WorkExperience/utils';

import styles from './WorkExperience.module.css';

const WorkExperience = () => {
  const [expandedItems, setExpandedItems] = useState<Partial<Record<string, boolean>>>(
    () => EXPERIENCE.reduce((acc, item) => ({ ...acc, [item.id]: true }), {}),
  );

  const anyExpanded = Object.values(expandedItems).some((item) => item);

  const handleToggleAll = () => {
    setExpandedItems(EXPERIENCE.reduce((acc, item) => ({ ...acc, [item.id]: !anyExpanded }), {}));
  };

  const toggleItem = (id: string) => {
    setExpandedItems((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };

  return (
    <Paper className={styles.root}>
      <SectionHeader
        icon={<WorkIcon />}
        title="Work Experience"
        action={(
          <Tooltip title={anyExpanded ? 'Collapse all' : 'Expand all'} placement="left" arrow>
            <IconButton color="primary" size="small" onClick={handleToggleAll} className={styles.toggleAll}>
              { anyExpanded ? <UnfoldLessIcon /> : <UnfoldMoreIcon /> }
            </IconButton>
          </Tooltip>
        )}
      />
      <ol className={styles.timeline}>
        { EXPERIENCE.map((job) => {
          const expanded = !!expandedItems[job.id];
          const detailsId = `job-details-${ job.id }`;

          return (
            <li key={job.id} className={styles.job} data-expanded={expanded}>
              { /* The whole header toggles on click; the chevron button is the accessible control. */ }
              <div className={styles.header} onClick={() => toggleItem(job.id)}>
                <div className={styles.headerMain}>
                  <Typography variant="h6" component="h3" className={styles.position}>{ job.position }</Typography>
                  <Typography variant="body2" className={styles.company}>
                    <span className={styles.companyName}>{ job.companyName }</span>
                    <span className={styles.project}>{ job.projectName }</span>
                  </Typography>
                  <Typography variant="body2" className={styles.date} suppressHydrationWarning>
                    <CalendarMonthIcon className={styles.dateIcon} />
                    { getDatePeriodString(job.startDate, job.endDate) }
                    { job.dateNote ? ` · ${ job.dateNote }` : '' }
                  </Typography>
                </div>
                <Tooltip title={expanded ? 'Show less' : 'Show more'} placement="left" arrow>
                  <IconButton
                    size="small"
                    className={styles.toggle}
                    aria-expanded={expanded}
                    aria-controls={detailsId}
                    onClick={(event) => {
                      event.stopPropagation();
                      toggleItem(job.id);
                    }}
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </Tooltip>
              </div>
              <Collapse in={expanded} id={detailsId} className={styles.collapse}>
                <div className={styles.details}>
                  { job.linkToProject ? (
                    <Link href={job.linkToProject} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                      { job.linkToProject.replace(/^https?:\/\//u, '') }
                    </Link>
                  ) : null }
                  <div>
                    <FieldLabel>Key contributions</FieldLabel>
                    <ul className={styles.bullets}>
                      { job.responsibilities.map((item) => (
                        <li key={item}>{ item }</li>
                      )) }
                    </ul>
                  </div>
                  <div>
                    <FieldLabel>Stack</FieldLabel>
                    <TagList items={job.techStack} />
                  </div>
                  { job.tools ? (
                    <div>
                      <FieldLabel>Tools</FieldLabel>
                      <Typography variant="body2" className={styles.text}>{ job.tools }</Typography>
                    </div>
                  ) : null }
                </div>
              </Collapse>
            </li>
          );
        }) }
      </ol>
    </Paper>
  );
};

export default WorkExperience;
