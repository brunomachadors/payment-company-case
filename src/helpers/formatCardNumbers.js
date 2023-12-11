export const formatCardNumber = (cardNumber) => {
  const cleanedNumber = cardNumber.replace(/\s/g, '');
  const formattedNumber = cleanedNumber.replace(/(.{4})/g, '$1 ');

  return formattedNumber.trim();
};
