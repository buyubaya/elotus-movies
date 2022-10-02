import moment from 'moment';

export const utcToLocalTime = (utcValue: string, utcFormat: string, localFormat: string) => {
  if (!utcValue) {
    return '';
  }

  const stillUtc = moment.utc(utcValue, utcFormat).toDate();
  const local = moment(stillUtc).local().format(localFormat);
  return local;
};

export const localTimeToUtc = (localValue: string, localFormat: string, utcFormat: string) => {
  if (!localValue) {
    return '';
  }

  const utc = moment(localValue, localFormat).utc().format(utcFormat);
  return utc;
};

export const formatUtcTime = (utcValue: string, currentFormat: string, newFormat: string) => {
  if (!utcValue) {
    return '';
  }

  const newValue = moment.utc(utcValue, currentFormat).format(newFormat);
  return newValue;
};

export const formatLocalTime = (localValue: string, currentFormat: string, newFormat: string) => {
  if (!localValue) {
    return '';
  }

  const newValue = moment(localValue, currentFormat).format(newFormat);
  return newValue;
};
