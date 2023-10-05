const { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handle midday', () => {
    const timeInWords = convertTimeToWords('12:00');
    expect(timeInWords).toBe('midday');
  });

  it('Handles 2:00', () => {
    const timeInWords = convertTimeToWords('2:00');
    expect(timeInWords).toBe('two o\'clock');
  });

  it('Handles 2:03', () => {
    const timeInWords = convertTimeToWords('2:03');
    expect(timeInWords).toBe('three past two');
  });

  it('Handles 3:11', () => {
    const timeInWords = convertTimeToWords('3:11');
    expect(timeInWords).toBe('eleven past three');
  });

  it('Handles 3:15', () => {
    const timeInWords = convertTimeToWords('3:15');
    expect(timeInWords).toBe('quarter past three');
  });

  it('Handles 3:27', () => {
    const timeInWords = convertTimeToWords('3:27');
    expect(timeInWords).toBe('twenty seven past three');
  });

  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it('Handles 4:33', () => {
    const timeInWords = convertTimeToWords('4:33');
    expect(timeInWords).toBe('twenty seven to five');
  });

  it('Handles times after 30 mins - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });
});
