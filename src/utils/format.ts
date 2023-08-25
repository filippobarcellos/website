export function getOrdinal(value: number) {
  if (value > 3 && value < 21) return 'th';
  switch (value % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

export function formatNumberToCurrency(
  value: number,
  options?: Intl.NumberFormatOptions
) {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    ...options,
  }).format(value);
}

export function getReturnCountdownFromSeconds(countdown) {
  if (!countdown)
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = padify(
    Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60))
  );
  const seconds = padify(Math.floor((countdown % (1000 * 60)) / 1000));

  return { days, hours, minutes, seconds };
}

export function padify(value: number) {
  return value.toString().padStart(2, '0');
}
