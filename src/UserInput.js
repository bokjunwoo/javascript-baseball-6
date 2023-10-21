import { MissionUtils } from '@woowacourse/mission-utils';
import { NUMBER_REGEX } from './constants.js';

const UserInput = {
  async getUserInputAsync() {
    try {
      const userInput = await MissionUtils.Console.readLineAsync(
        '숫자를 입력해 주세요 : '
      );
      this.isValidInput(userInput);
      return userInput;
    } catch (error) {
      throw error;
    }
  },

  isValidInput(userInput) {
    const numberArray = userInput.split('').map(Number);

    const isValidNumber = numberArray.every((num) => NUMBER_REGEX.test(num));
    if (!isValidNumber) {
      throw new Error('유효한 숫자를 입력해야 합니다.');
    }

    if (numberArray.length !== 3) {
      throw new Error('3개의 숫자를 입력해야 합니다.');
    }

    if (new Set(numberArray).size !== 3) {
      throw new Error('숫자는 중복되지 않아야 합니다.');
    }

    return true;
  },
};

export default UserInput;