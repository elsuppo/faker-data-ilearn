import CsvDownloadButton from 'react-json-to-csv'

import { Paper } from '@mui/material';

const Footer = ({ persons }) => {

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, display: 'flex', justifyContent: 'center' }} elevation={3}>
      <CsvDownloadButton className="btn btn-primary" data={persons}>Export to CSV
      </CsvDownloadButton>
    </Paper>
  )
}

export default Footer;