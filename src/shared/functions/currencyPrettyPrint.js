function currencyPrettyPrint(cents) {
  const dollars = cents / 100;
  return dollars.toLocaleString("en-US", {
    style: "currency",
    currency: "INR"
  });
}

export default currencyPrettyPrint;
