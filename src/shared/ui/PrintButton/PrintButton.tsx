import { IconButton, Tooltip } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import { type FC } from 'react';

type Props = {
  onPrint: () => void;
  className?: string;
};

const PrintButton: FC<Props> = ({ onPrint, className }) => (
  <Tooltip title="Print CV" arrow>
    <IconButton onClick={onPrint} color="primary" className={className} aria-label="Print CV">
      <PrintIcon />
    </IconButton>
  </Tooltip>
);

export default PrintButton;
