/**
 * Check if value is a valid CEP.
 * @example ```js
 * isCEP('50.833-000')
 * //=> true
 *
 * isCEP('02998-050')
 * //=> true
 *
 * isCEP('00000000')
 * //=> true
 *
 * isCEP('0')
 * //=> false
 *
 * isCEP('1982891928981982198')
 * //=> false
 * ```
 * @param value - A text containing a CEP.
 */
export function isCEP(value: string): boolean {
  const cepPattern = /^\d{5}-?\d{3}$/;
  return cepPattern.test(value);
}

/**
 * Check if value is a valid DDD.
 * @example ```js
 * isDDD('81')
 * //=> true
 *
 * isDDD('10')
 * //=> false
 *
 * isDDD('A#')
 * //=> false
 * ```
 * @param code
 */
export function isDDD(code: string): boolean {
  const validDDDs = [
    11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, 31, 32, 33, 34, 35,
    37, 38, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 53, 54, 55, 61, 62, 63, 64,
    65, 66, 67, 68, 69, 71, 73, 74, 75, 77, 79, 81, 82, 83, 84, 85, 86, 87, 88,
    89, 91, 92, 93, 94, 95, 96, 97, 98, 99,
  ];
  return validDDDs.includes(Number(code));
}

/**
 * Check if value is a valid brazilian phone number. It can check a wide
 * variety of formats optionally with DDI, DDD and the ninth digit.
 *
 * @example ```js
 * isPhone('+55 (11) 9 8273-1182')
 * //=> true
 *
 * isPhone('11 9 8273 1182')
 * //=> true
 *
 * isPhone('1139723768')
 * //=> true
 *
 * isPhone('(23) 3972-3768')
 * //=> false
 *
 * isPhone('(13) 6 5093-2093')
 * //=> false
 *
 * isPhone('(81) 555 178')
 * //=> false
 * ```
 * @param value
 */
export function isPhone(value: string): boolean {
  const phonePattern =
    /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/;
  return phonePattern.test(value);
}

/**
 * Pattern to match formatted CPF (999.999.999-99) or 11 numbers.
 */
export const CPF_PATTERN: RegExp = /^\d{3}\.\d{3}\.\d{3}-\d{2}$|^\d{11}$/;

/**
 * Check if value is a valid CPF.
 * @example ```js
 * isCPF('366.418.768-70')
 * //=> true
 *
 * isCPF('36641876870')
 * //=> true
 *
 * isCPF('213.198.013-20')
 * //=> false
 *
 * isCPF('2131201872781')
 * //=> false
 *
 * isCPF('11111111111')
 * //=> false
 * ```
 * @param value - A text containing a CPF.
 * @returns {boolean} - Returns true if the provided value is a valid CPF; otherwise, false.
 */
export function isCPF(value: string): boolean {
  if (!CPF_PATTERN.test(value)) return false;

  const cleanValue = value.replace(/\D/g, "");
  if (cleanValue.length !== 11 || /^(\d)\1{10}$/.test(cleanValue)) return false;

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cleanValue.charAt(i)) * (10 - i);
  }
  let remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cleanValue.charAt(9))) return false;

  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cleanValue.charAt(i)) * (11 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cleanValue.charAt(10))) return false;

  return true;
}

/**
 * Pattern to match formatted CNPJ (99.999.999/9999-99) or 14 numbers.
 */
export const CNPJ_PATTERN: RegExp =
  /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$|^\d{14}$/;

/**
 * Check if value is a valid CNPJ.
 * @example ```js
 * isCNPJ('41142260000189')
 * //=> true
 *
 * isCNPJ('45.723.174/0001-10')
 * //=> true
 *
 * isCNPJ('411407182')
 * //=> false
 *
 * isCNPJ('11.111.111/1111-11')
 * //=> false
 * ```
 * @param value - A text containing a CNPJ.
 * @returns {boolean} - Returns true if the provided value is a valid CNPJ; otherwise, false.
 */
export function isCNPJ(value: string): boolean {
  if (!CNPJ_PATTERN.test(value)) return false;

  const cleanValue = value.replace(/\D/g, "");
  if (cleanValue.length !== 14 || /^(\d)\1{13}$/.test(cleanValue)) return false;

  const weights = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;
  for (let i = 0; i < 12; i++) {
    sum += parseInt(cleanValue.charAt(i)) * weights[i];
  }
  let remainder = sum % 11;
  const firstDigit = remainder < 2 ? 0 : 11 - remainder;
  if (firstDigit !== parseInt(cleanValue.charAt(12))) return false;

  weights.unshift(6);
  sum = 0;
  for (let i = 0; i < 13; i++) {
    sum += parseInt(cleanValue.charAt(i)) * weights[i];
  }
  remainder = sum % 11;
  const secondDigit = remainder < 2 ? 0 : 11 - remainder;
  if (secondDigit !== parseInt(cleanValue.charAt(13))) return false;

  return true;
}

/**
 * Check if a brazilian formatted date is valid.
 * @example ```js
 * isDate('03/08/2017')
 * //=> true
 *
 * isDate('28/13/2017')
 * //=> false
 *
 * isDate('03-08-2017')
 * //=> false
 *
 * isDate('31/03/18')
 * //=> false
 * ```
 * @param value - A date in DD/MM/YYYY.
 * @returns {boolean} - Returns true if the provided value is a valid date; otherwise, false.
 */
export function isDate(value: string): boolean {
  const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!datePattern.test(value)) return false;

  const [day, month, year] = value.split("/").map(Number);
  const date = new Date(year, month - 1, day);
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}
