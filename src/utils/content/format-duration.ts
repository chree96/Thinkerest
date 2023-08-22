import moment from 'moment';

const formatDuration = (minutesDuration?: number) => {
  let formattedDuration: string = '';

  if (minutesDuration && minutesDuration > 0) {
    const hours = moment.duration(minutesDuration, 'minutes').hours();
    const minutes = moment.duration(minutesDuration, 'minutes').minutes();

    formattedDuration = hours + 'h ' + minutes + 'm';
  }

  return formattedDuration;
};

export default formatDuration;
