import { faker } from '@faker-js/faker';

const getMistake = (valueError, person) => {

  const getRandomIndex = (personInfoItem) => {
    return faker.datatype.number({ min: 0, max: (personInfoItem.length - 1) });
  }

  const deleteRandomChar = (personInfoItem) => {
    const randomIndex = getRandomIndex(personInfoItem);
    return personInfoItem[randomIndex + 1] ? personInfoItem.slice(0, randomIndex) + personInfoItem.slice(randomIndex + 1) : personInfoItem.slice(0, randomIndex);
  };

  const addRandomChar = (personInfoItem) => {
    const randomIndex = getRandomIndex(personInfoItem);
    const randomChar = faker.name.fullName()[1];
    return personInfoItem.slice(0, randomIndex) + randomChar + personInfoItem.slice(randomIndex);
  };

  const replaceChars = (personInfoItem) => {
    const randomIndex1 = getRandomIndex(personInfoItem);
    const randomIndex2 = personInfoItem[randomIndex1 + 1] ? randomIndex1 + 1 : personInfoItem[randomIndex1 - 1] ? randomIndex1 - 1 : randomIndex1;

    let personInfoItemC = personInfoItem.split('');
    [personInfoItemC[randomIndex1], personInfoItemC[randomIndex2]] = [personInfoItemC[randomIndex2], personInfoItemC[randomIndex1]];
    return personInfoItemC.join('');
  };

  const possibleMistakes = [deleteRandomChar, addRandomChar, replaceChars];

  let { number, personId, name, address, phone } = person;
  let personInfoItems = [number, personId, name, address, phone];

  for (let i = 0; i <= Math.ceil(valueError); i++) {
    let randomIndex = getRandomIndex(personInfoItems);
    if (randomIndex === 0) { randomIndex = 1 }
    const randomMistake = possibleMistakes[getRandomIndex(possibleMistakes)];
    personInfoItems[randomIndex] = randomMistake(personInfoItems[randomIndex]);
    if (personInfoItems[randomIndex] === '') { personInfoItems[randomIndex] = '5' };
  }
  return {
    number: personInfoItems[0],
    personId: personInfoItems[1],
    name: personInfoItems[2],
    address: personInfoItems[3],
    phone: personInfoItems[4]
  };
}

export default getMistake;