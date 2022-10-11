export const month = (num: number) => {
  switch (num) {
    case 1:
      return ' Jan';
    case 2:
      return ' feb';
    case 3:
      return ' mar';
    case 4:
      return ' apr';
    case 5:
      return ' may';
    case 6:
      return ' jun';
    case 7:
      return ' jul';
    case 8:
      return ' Aug';
    case 9:
      return ' Sep';
    case 10:
      return ' Oct';
    case 11:
      return ' Nov';
    case 12:
      return ' Dec';
    default:
      return '';
  }
};
