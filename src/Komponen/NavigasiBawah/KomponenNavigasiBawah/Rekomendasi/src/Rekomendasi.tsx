import {FC} from 'react';
import './Rekomendasi.css';
import KomponenUmum from '../KomponenRekomendasi/KomponenUmum';
import KelasPopuler from '../KomponenRekomendasi/KelasPopuler';
import KategoriPopuler from '../KomponenRekomendasi/KategoriPopuler';
import Alat from '../KomponenRekomendasi/Alat';

const Rekomendasi: FC<IRekomendasi> = (p) => {
  return(
    <div className='rekomendasi'>
      <div className='isi-rekomendasi'>
        <KomponenUmum judul='Kelas Populer' komponen={<KelasPopuler/>}/>
        <KomponenUmum judul='Kategori Populer' komponen={<KategoriPopuler/>}/>
        <KomponenUmum judul='Alat' komponen={<Alat/>}/>
        <KomponenUmum judul='Kategori Populer' komponen={KelasPopuler}/>
      </div>
      <div className='metode-pembayaran'>
        <div className='judul-metode-pembayaran'>
          Metode Pembayaran
        </div>
        <div className='isi-metode-pembayaran'>
        </div>
      </div>
    </div>
  )
}

export default Rekomendasi

interface IRekomendasi {}