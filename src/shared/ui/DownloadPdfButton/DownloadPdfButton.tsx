import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { type FC } from 'react';

const PDF_URL = '/files/Taras_Petrivskyi_Full_Stack_CV.pdf';
const PDF_FILE_NAME = 'Taras_Petrivskyi_Full_Stack_CV.pdf';

type Props = {
  className?: string;
};

// Plain link to the static PDF: served from the CDN, works without JS, no extra state.
const DownloadPdfButton: FC<Props> = ({ className }) => (
  <Button
    variant="contained"
    color="primary"
    href={PDF_URL}
    download={PDF_FILE_NAME}
    startIcon={<DownloadIcon />}
    className={className}
    disableElevation
  >
    Download CV (PDF)
  </Button>
);

export default DownloadPdfButton;
