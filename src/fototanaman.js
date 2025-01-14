const fotoTanaman = [];

function tambahFoto(nama, url) {
  fotoTanaman.push({ nama, url });
}

function lihatFoto() {
  return fotoTanaman;
}

module.exports = { tambahFoto, lihatFoto };