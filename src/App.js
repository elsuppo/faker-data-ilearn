import { faker } from '@faker-js/faker';

import PersonTable from './components/person-table';
import Toolbar from './components/toolbar';
import {Container, Stack } from 'react-bootstrap';

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
    <Container>
<Stack gap={3} className="mt-3">
<Toolbar />
      <PersonTable persons={persons} />
</Stack>


    </Container>

  );
}

export default App;
