// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === '0:00') {
    return 'midnight';
  }

  if (time === '12:00') {
    return 'midday';
  }

  const [hour, minutes] = time.split(':');

  const numberMap = new Map([
    ['0', 'midnight'],
    ['1', 'one'],
    ['2', 'two'],
    ['3', 'three'],
    ['4', 'four'],
    ['5', 'five'],
    ['6', 'six'],
    ['7', 'five'],
    ['5', 'five'],
    ['6', 'six'],
    ['7', 'seven'],
    ['8', 'eight'],
    ['9', 'nine'],
    ['10', 'ten'],
    ['11', 'eleven'],
    ['12', 'twelve'],
    ['20', 'twenty'],
    ['30', 'thirty'],
  ]);

  const [first, second] = minutes.split('');

  const minutesAsInt = parseInt(minutes, 10);

  let hourAsString;
  let minuteAsString;
  let joiner;

  if (minutesAsInt < 30) {
    joiner = 'past';

    hourAsString = numberMap.get(hour);

    if (minutesAsInt < 10) {
      if (first === '0' && second === '0') {
        minuteAsString = "o'clock";
        return `${hourAsString} ${minuteAsString}`;
      }

      minuteAsString = numberMap.get(second);
    } else if (minutesAsInt < 14) {
      minuteAsString = numberMap.get(minutes);
    } else if (minutesAsInt < 20) {
      minuteAsString = `${numberMap.get(second)}teen`;
    } else {
      minuteAsString = `${numberMap.get(`${first}0`)} ${numberMap.get(second)}`;
    }
  } else {
    joiner = 'to';

    const minutesTo = 60 - minutesAsInt;

    hourAsString = numberMap.get((parseInt(hour, 10) + 1).toString());
  }

  if (minuteAsString === 'fiveteen') minuteAsString = 'quarter';
  if (minuteAsString === 'thirty') {
    minuteAsString = 'half past';
    joiner = null;
  }

  return [minuteAsString, joiner, hourAsString].filter((string) => Boolean(string)).join(' ');
}

module.exports = { convertTimeToWords };
