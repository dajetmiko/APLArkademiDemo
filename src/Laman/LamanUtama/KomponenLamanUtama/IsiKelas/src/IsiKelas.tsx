import './IsiKelas.css'
import { FC } from 'react'
import ListKelas from '../KomponenIsiKelas/ListKelas'
import GbrIsiKelas from './gbr-isi-kelas.png'


const IsiKelas: FC<IKomponenKelas> = (p) => {
  return(
    <div className='isi-kelas'>
      <div className='judul-isi-kelas'>
        {p.gbrJudulIsiKelas && <img src={p.gbrJudulIsiKelas} className='gbr-isi-kelas'/>}
        <div className='teks-judul-isi-kelas'>
          {p.judulIsiKelas}
        </div>
        {p.apaAdaLihatSemua &&
        <div className='teks-lihat-semua'>
          Lihat Semua
        </div>
        }
      </div>
      <div className='kelas'>
        <ListKelas namaKelas='Strategi Menjadi Entrepreneur Pemula yang Kreatif 1' gbrKelas={GbrIsiKelas} ratingKelas={4.5} jumlahPeserta={5000} hargaAsli={250000} hemat={99000} hargaTerdiskon={149000}/>
        <ListKelas namaKelas='Strategi Menjadi Entrepreneur Pemula yang Kreatif 2' gbrKelas={GbrIsiKelas} ratingKelas={4.6} jumlahPeserta={6000} hargaAsli={260000} hemat={99000} hargaTerdiskon={159000}/>
        <ListKelas namaKelas='Strategi Menjadi Entrepreneur Pemula yang Kreatif 3' gbrKelas={GbrIsiKelas} ratingKelas={4.7} jumlahPeserta={7000} hargaAsli={270000} hemat={99000} hargaTerdiskon={169000}/>
        <ListKelas namaKelas='Strategi Menjadi Entrepreneur Pemula yang Kreatif 4' gbrKelas={GbrIsiKelas} ratingKelas={4.8} jumlahPeserta={8000} hargaAsli={280000} hemat={99000} hargaTerdiskon={179000}/>
      </div>
    </div>
  )
}

export default IsiKelas

interface IKomponenKelas{
  judulIsiKelas: string;
  gbrJudulIsiKelas?: string;
  apaAdaLihatSemua?: boolean;
}