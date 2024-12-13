export default class Password {
  static new(size: number = 15): string {
    if (size < 0) {
      throw new Error("Tamanho da senha não pode ser negativo.");
    }
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-{}[]|\\:;\"'<>,.?/~`";
    let password = "";

    for (let i = 0; i < size; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    return password;
  }
}
