function getCardProtectedNumber(card) {
  const cardNumber = String(card.card_number);

  if (cardNumber.length < 4) {
    console.error('Número do cartão inválido');
    return null;
  }

  const lastDigits = cardNumber.slice(-4);

  return `xxxx ${lastDigits}`;
}

export default getCardProtectedNumber;
