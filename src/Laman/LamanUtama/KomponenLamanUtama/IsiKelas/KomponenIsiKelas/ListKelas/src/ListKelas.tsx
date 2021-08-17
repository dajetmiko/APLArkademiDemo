import './ListKelas.css'
import { FC } from 'react'
import Bintang from './gbr/bintang.png'
import FotoPengguna from './gbr/foto-pengguna.png'
import SumberKelas from './gbr/sumber-kelas.png'

const ListKelas: FC<IListKelas> = (p) => {
  return(
    <div className='list-kelas'>
      <img className='gbr-header-kelas' src={p.gbrKelas} alt='gbr-header-kelas'/>
      <div className='nama-list-kelas'>
        {p.namaKelas}
      </div>
      <div className='rating-dan-jumlah-peserta'>
        <img className='gambar-rating-kelas' src={Bintang} alt='jml peserta'/>
        <div className='teks-rating-kelas'>
          {p.ratingKelas}
        </div>
        <img className='gambar-jumlah-orang' src={FotoPengguna} alt='jml peserta'/>
        <div className='teks-rating-kelas'>
          {p.jumlahPeserta}
        </div>
      </div>
      <div className='lokasi-kelas'>
        <img className='gbr-lokasi-kelas' src={SumberKelas} alt='jml peserta'/>
        <div className='teks-lokasi-kelas'>
          Arkademi
        </div>
      </div>
      <div className='harga-dan-tombol-list'>
        <div className='harga-didiskon'>
          <div className='harga-asli'>
            {'Rp ' + p.hargaAsli}
          </div>
          <div className='harga-hemat'>
            Hemat {'Rp ' + p.hemat}
          </div>
        </div>
        <div className='harga-terdiskon'>
        {'Rp ' + p.hargaTerdiskon}
        </div>
        <div className='tbl-ambil-kelas'>
          AMBIL KELAS
        </div>
      </div>
    </div>
  )
}

interface IListKelas{
  namaKelas: string;
  gbrKelas: string;
  ratingKelas: number;
  jumlahPeserta: number;
  hargaAsli: number;
  hemat: number;
  hargaTerdiskon: number;
}

export default ListKelas