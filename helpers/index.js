/**
 *
 * @param value
 * @returns
 */
export function validateAsString(value) {
  return /^([a-zA-ZàâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ])([\w\- àâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ()'_\d,/]{1,})$/i.test(
    value
  );
}

export function validateAsStringNumber(value) {
  return /^([a-zA-Z\dàâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ])([\w\- àâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ()'_\d,/]{1,})$/i.test(
    value
  );
}

/**
 *
 * @param number as string representation to be format
 * @returns as  representation of telephone format eg 243 900000000
 */
export function formatToNumber(number) {
  if (number.length === 12)
    return number.substring(0, 3).concat(" ").concat(number.substring(3));
  if (number.length === 11)
    return number.substring(0, 2).concat(" ").concat(number.substring(2));
  return number.charAt(0).concat(" ").concat(number.substring(1));
}

/**
 *
 * @param tel
 * @returns
 */
export function validateAsNumber(tel) {
  return /^([0-9]{1,3})([ ]{1}[0-9]{8,9})$/i.test(formatToNumber(tel));
}

/**
 *
 * @param email
 * @returns
 */
export function validateAsEmail(email) {
  return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i.test(email);
}

/**
 *
 * @param password
 * @returns
 */
export function validateAsPassword(password) {
  // return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,32}$/i.test(
  //   password
  // )

  return /^(?=.*[A-Za-z\d@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,32}/i.test(password);
}

export function getToCurrency(number, style) {
  return Number.parseFloat(number).toLocaleString(style || "US");
}

export function displayInitial(name) {
  if (name.split(" ").length > 1) {
    return (
      "" +
      name.split(" ")[0].substring(0, 1) +
      name.split(" ")[name.split(" ").length - 1].substring(0, 1)
    );
  } else if (name.length > 1) return name.substring(0, 2);
  else return name.substring(0, 1);
}
