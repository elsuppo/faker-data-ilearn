const PersonTableRow = ({number, id, name, address, phone }) => {

  return (
    <tr>
      <td>{number}</td>
      <td>{id}</td>
      <td>{name}</td>
      <td>{address}</td>
      <td>{phone}</td>
    </tr>
  )
}

export default PersonTableRow;