import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Collapse,
  Skeleton,
  IconButton,
  Tooltip,
  Link,
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import BusinessIcon from '@mui/icons-material/Business';
import { Fragment, useEffect, useMemo, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useQuery } from '@tanstack/react-query';
import { type AxiosResponse } from 'axios';

import { REACT_QUERY_KEYS } from '@/shared/constants';
import { http } from '@/core/api';
import { type ExperienceData } from '@/shared/api/types';
import { getDatePeriodString } from '@/features/WorkExperience/utils';

import styles from './WorkExperience.module.css';

const WorkExperience = () => {
  const [collapseItems, setCollapseItems] = useState<Partial<Record<string, boolean>>>({});

  const { data, isLoading } = useQuery<AxiosResponse<ExperienceData[]>>({
    queryKey: [REACT_QUERY_KEYS.WORK_EXPERIENCE],
    queryFn: async () => http.get('/api/experience'),
    retry: false,
    staleTime: 1000 * 60 * 60 * 48,
  });

  const experienceData = useMemo(() => data?.data || [], [data]);

  useEffect(() => {
    setCollapseItems(experienceData.reduce((acc, item) => ({ ...acc, [item.id]: true }), {}));
  }, [experienceData]);

  const anyExpandItem = Object.values(collapseItems).some((item) => item);

  const handleToggleAll = () => {
    setCollapseItems(
      experienceData.reduce((acc, item) => ({ ...acc, [item.id]: !anyExpandItem }), {}),
    );
  };

  return isLoading ? (
    <Skeleton variant="rectangular" width="100%" height={600} />
  ) : (
    <Paper className={styles.root}>
      <div className={styles.experienceTitle}>
        <WorkIcon className={styles.workExperienceIcon} />
        <Typography variant="h4">Work Experience</Typography>
        <div className={styles.collapseAllButton}>
          <Tooltip title={anyExpandItem ? 'Collapse All' : 'Expand All'} placement="left" arrow>
            <IconButton color="success" onClick={handleToggleAll}>
              { anyExpandItem ? <UnfoldLessIcon /> : <UnfoldMoreIcon /> }
            </IconButton>
          </Tooltip>
        </div>
      </div>
      <div className={styles.jobInfoWrap}>
        { experienceData.map((job, index) => {
          return (
            <Fragment key={job.id}>
              { index > 0 ? <Divider flexItem /> : null }
              <div className={styles.jobInfo}>
                <div className={styles.positionWrap}>
                  <div>
                    <Typography variant="body1" className={styles.positionTitle}>{ job.position }</Typography>
                    <Typography variant="body2" className={styles.companyNameTitle} color="info.light">
                      <BusinessIcon />
                      { job.companyName }
                    </Typography>
                  </div>
                  <Tooltip title={collapseItems[job.id] ? 'Show less' : 'Show more'} placement="left" arrow>
                    <IconButton
                      onClick={() => setCollapseItems((prevState) => ({ ...prevState, [job.id]: !prevState[job.id] }))}
                    >
                      { collapseItems[job.id] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon /> }
                    </IconButton>
                  </Tooltip>
                </div>
                <div className={styles.date}>
                  <CalendarMonthIcon color="success" className={styles.dateItem} />
                  <Typography variant="body1" color="success" className={styles.dateItem}>
                    { getDatePeriodString(job.startDate, job.endDate) }
                  </Typography>
                </div>
                <Collapse in={collapseItems[job.id]}>
                  <div>
                    <Typography variant="body1" className={styles.positionSubTitle}>
                      { job.projectName }
                      { job.linkToProject ? ' - ' : '' }
                      { job.linkToProject ? <Link href={job.linkToProject} target="_blank">{ job.linkToProject }</Link> : null }
                    </Typography>
                    <List className={styles.list}>
                      <ListItem>
                        <ListItemText
                          classes={{
                            primary: styles.textPrimary,
                            secondary: styles.textSecondary,
                          }}
                          primary="Responsibilities:"
                          secondary={job.responsibilities}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          classes={{
                            primary: styles.textPrimary,
                            secondary: styles.textSecondary,
                          }}
                          primary="Technologies:"
                          secondary={job.technologies}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          classes={{
                            primary: styles.textPrimary,
                            secondary: styles.textSecondary,
                          }}
                          primary="Tools:"
                          secondary={job.tools}
                        />
                      </ListItem>
                    </List>
                  </div>
                </Collapse>
              </div>
            </Fragment>
          );
        }) }
      </div>
    </Paper>
  );
};

export default WorkExperience;
