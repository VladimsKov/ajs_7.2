// Homework ajs_7.2
export default class FormatNumbers {
  static formatPhoneNumbers(value) {
    let formated = value.replace(/\D/g, '');
    if (formated.length === 11 && formated[0] === '8') {
      formated = formated.replace(/\d/, '7');
    }
    return `+${formated}`;
  }
}
