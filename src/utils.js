import { random } from 'lodash';
import { nanoid } from 'nanoid';

export const generateNewDie = () => {
    return {
        value: random(1, 6),
        isHeld: false,
        id: nanoid(),
    };
};

export const getNewDice = () => {
    const randomNumbers = [];
    for (let i = 1; i <= 10; i++) {
        randomNumbers.push(generateNewDie());
    }
    return randomNumbers;
};
