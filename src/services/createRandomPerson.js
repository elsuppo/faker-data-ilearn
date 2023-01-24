import { faker } from '@faker-js/faker';

const createRandomPerson = (i) => {

  let personId = `${faker.random.alpha({ count: 2, casing: 'upper' })} ${faker.datatype.number({ min: 1000000, max: 9999999 })}`;

  let name = faker.name.fullName();

  let address = `${faker.address.state()}, ${faker.address.city()}, ${faker.address.street()}, ${faker.address.buildingNumber()}, ${faker.address.secondaryAddress()}`

  const basePhone = faker.phone.number();
  let phone = basePhone.indexOf('x') === -1 ? basePhone : basePhone.slice(0, basePhone.indexOf('x'));

    return {
      number: i,
      personId: personId,
      name: name,
      address: address,
      phone: phone
    };
}

export default createRandomPerson;