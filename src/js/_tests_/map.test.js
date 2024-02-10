// прописать import все файлы JS;
import ErrorRepository from '../map';
// начать тесты;
test('проверка 1', () => {
  const err = new ErrorRepository();
  const res = 'Ошибка номер 1';
  expect(err.translate(1)).toEqual(res);
});

test('проверка на выдачу при отсутствии кода ошибка', () => {
  const err = new ErrorRepository();
  const res = 'Unknown error';
  expect(err.translate(12)).toEqual(res);
});
