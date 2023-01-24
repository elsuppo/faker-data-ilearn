const PersonTableRow = ({number, personId, name, address, phone }) => {

  return (
    <tr>
      <td>{number}</td>
      <td>{personId}</td>
      <td>{name}</td>
      <td>{address}</td>
      <td>{phone}</td>
    </tr>
  )
}

export default PersonTableRow;