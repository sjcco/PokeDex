const padLeadingZeros = (num, size) => {
  let s = `${num}`;
  while (s.length < size) s = `0${s}`;
  return s;
};

const decimToMeters = deciMeters => `${deciMeters / 10} m`;

const hectoToKilos = hectograms => `${hectograms / 10} kg`;

const pkmnColor = color => {
  switch (color) {
    case 'yellow':
      return '#f2e65c';
    case 'blue':
      return '#2396ad';
    case 'white':
      return '#ffff';
    case 'gray':
      return '#a8a8a8';
    case 'brown':
      return '#b89c51';
    case 'purlple':
      return '#b960db';
    case 'black':
      return '#6b6b6b';
    case 'red':
      return '#eb7a42';
    case 'green':
      return '#6ac585';
    case 'pink':
      return '#f59fce';
    default:
      return '#ffff';
  }
};

export {
  padLeadingZeros, decimToMeters, hectoToKilos, pkmnColor,
};
