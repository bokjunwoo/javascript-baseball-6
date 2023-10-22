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

  async playAgainInputAsync() {
    try {
      const userInput = await MissionUtils.Console.readLineAsync(
        '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'
      );
      return userInput;
    } catch (error) {
      throw error;
    }
  },

  isValidInput(userInput) {
    const numberArray = userInput.split('').map(Number);

    const isValidNumber = numberArray.every((num) => NUMBER_REGEX.test(num));
    if (!isValidNumber) {
      throw new Error('[ERROR]');
    }

    if (numberArray.length !== 3) {
      throw new Error('[ERROR]');
    }

    if (new Set(numberArray).size !== 3) {
      throw new Error('[ERROR]');
    }

    return true;
  },
};

export default UserInput;
