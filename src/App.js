import { faker } from '@faker-js/faker';

import PersonTable from './components/person-table';
import Toolbar from './components/toolbar';
import { Container, Stack } from '@mui/material';

faker.locale = 'de';

function App() {

  // test object
  const persons = [
    {
      number: 1,
      id: 1,
      name: 'Andrew',
      address: 'Batumi',
      phone: '123'
    },
    {
      number: 2,
      id: 2,
      name: 'Andrew',
      address: 'Erevan',
      phone: '456'
    },
  ]

  return (
    <Container maxWidth="lg">
      <Stack alignItems="center" spacing={2} mt={2}>
        <Toolbar />
        <PersonTable persons={persons} />
      </Stack>
    </Container>

  );
}

export default App;
