// example 20 / 07 / 2002
export const formatDate = (data: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  };
  const formattedDate = new Date(data).toLocaleDateString('it-IT', options);
  return formattedDate.replace(/\//g, ' / ');
};
