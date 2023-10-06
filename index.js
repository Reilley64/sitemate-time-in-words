// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  const numberMap = new Map([
    [0, 'zero'],
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
    [4, 'four'],
    [5, 'five'],
    [6, 'six'],
    [7, 'seven'],
    [8, 'eight'],
    [9, 'nine'],
    [10, 'ten'],
    [11, 'eleven'],
    [12, 'twelve'],
    [20, 'twenty'],
    [30, 'thirty'],
  ]);

  function getMinutesAsString(minutes) {
    const minutesAsInt = parseInt(minutes, 10);

    const [firstDigit, secondDigit] = minutes.toString().split('');
    const firstDigitAsInt = parseInt(firstDigit, 10);
    const secondDigitAsInt = parseInt(secondDigit, 10);

    if (minutesAsInt < 14) {
      return numberMap.get(minutesAsInt);
    }

    if (minutesAsInt < 20) {
      return `${numberMap.get(secondDigitAsInt)}teen`;
    }

    if (secondDigitAsInt === 0) {
      return numberMap.get(firstDigitAsInt * 10);
    }

    return `${numberMap.get(firstDigitAsInt * 10)} ${numberMap.get(secondDigitAsInt)}`;
  }

  // TODO: real code goes here!
  if (time === '0:00') {
    return 'midnight';
  }

  if (time === '12:00') {
    return 'midday';
  }

  const [hour, minutes] = time.split(':');

  const hoursAsInt = parseInt(hour, 10);
  const minutesAsInt = parseInt(minutes, 10);

  let hourResult;
  let minuteResult;
  let joiner;

  if (minutesAsInt <= 30) {
    hourResult = numberMap.get(hoursAsInt);
    joiner = 'past';

    if (minutesAsInt === 0) {
      return `${hourResult} o'clock`;
    }

    minuteResult = getMinutesAsString(minutes);
  } else {
    hourResult = numberMap.get(hoursAsInt + 1);
    joiner = 'to';

    const minutesToAsInt = 60 - minutesAsInt;

    minuteResult = getMinutesAsString(minutesToAsInt.toString());
  }

  if (minuteResult === 'fiveteen') minuteResult = 'quarter';
  if (minuteResult === 'thirty') {
    minuteResult = 'half past';
    joiner = null;
  }

  return [minuteResult, joiner, hourResult].filter((string) => Boolean(string)).join(' ');
}

module.exports = { convertTimeToWords };
