import { faker } from '@faker-js/faker';

const createRandomPerson = (i, lang) => {
  
  const passportId = `${faker.random.alpha({ count: 2, casing: 'upper' })}${faker.datatype.number({ min: 1000000, max: 9999999 })}`;

  const name = lang === 'ge' ? `${faker.name.firstName()} ${faker.name.lastName()}` : `${faker.name.fullName()}`;

  const baseAddress = `${faker.address.city()}, ${faker.address.streetName()}, ${faker.address.buildingNumber()}, ${faker.address.secondaryAddress()}`
  const address = lang === 'ge' ? baseAddress : `${faker.address.state()}, ${baseAddress}`

  const basePhone = faker.phone.number();
  const phone = basePhone.indexOf('x') === -1 ? basePhone : basePhone.slice(0, basePhone.indexOf('x'))

  return {
    number: i,
    id: passportId,
    name: name,
    address: address,
    phone: phone
  };
}

const getData = (seed, lang, prevData) => {
  faker.locale = lang;
  faker.seed(seed);
  for (let i = 1; i < 21; i++) {
    const person = createRandomPerson(i, lang);
    prevData = [...prevData, person];
  }
  
  return prevData;
}

export default getData;