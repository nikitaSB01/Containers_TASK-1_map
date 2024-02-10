class ErrorRepository {
  constructor() {
    this.mapCollection = new Map([
      [1, 'Ошибка номер 1'],
      [22, 'Ошибка номер 2'],
      [333, 'Ошибка номер 3'],
      [4444, 'Ошибка номер 4'],
    ]);
  }

  translate(code) {
    if (this.mapCollection.has(code)) {
      return this.mapCollection.get(code);
    }
    return 'Unknown error';
  }
}

export default ErrorRepository;
