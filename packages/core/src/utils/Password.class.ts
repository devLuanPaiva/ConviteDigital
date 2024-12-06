export default class Password {
  static new(size: number = 15): string {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-{}[]|\\:;"\'<>,.?/~`';
    let password = '';

    for (let i = 0; i < size; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    return password;
  }
}
