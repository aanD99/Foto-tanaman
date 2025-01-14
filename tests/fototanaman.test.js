const { tambahFoto, lihatFoto } = require('../src/fotoTanaman');

describe('Foto Tanaman', () => {
  test('Harus bisa menambahkan foto tanaman', () => {
    tambahFoto('Cactus', 'https://link-cactus.com');
    const foto = lihatFoto();
    expect(foto).toEqual([{ nama: 'Cactus', url: 'https://link-cactus.com' }]);
  });
});