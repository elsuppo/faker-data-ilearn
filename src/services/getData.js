import { faker } from '@faker-js/faker';

import createRandomPerson from './createRandomPerson';
import getMistake from './getMistake';

const getData = (seed, lang, persons, personCount, valueError) => {
  faker.locale = lang;
  faker.seed(seed);

  for (let i = 1; i <= personCount; i++) {
    const person = createRandomPerson(i);
    persons = [...persons, person];
  }

    const maybeMistake = faker.helpers.maybe(() => true, { probability: valueError });

  if (maybeMistake) {
    return persons.map(person => getMistake(valueError, person))
    }
  return persons;
}

export default getData;