import Table from 'react-bootstrap/Table';

import PersonTableRow from './person-table-row';

const PersonTable = ({persons}) => {

  const personTableRows = persons.map(person => {
    const { number } = person;
    return (
      <PersonTableRow
        key={number}
        {...person}
      />
    )
  })

  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Address</th>
          <th scope="col">Phone</th>
        </tr>
      </thead>
      <tbody>
        {personTableRows}
      </tbody>
    </Table>
  )
}

export default PersonTable;