import {FC} from 'react';
import './Rekomendasi.css';
import KomponenUmum from '../KomponenRekomendasi/KomponenUmum';
import KelasPopuler from '../KomponenRekomendasi/KelasPopuler';
import KategoriPopuler from '../KomponenRekomendasi/KategoriPopuler';
import Alat from '../KomponenRekomendasi/Alat';
import ArkademiMobileApp from '../KomponenRekomendasi/ArkademiMobileApp';
import GambarMetode from '../KomponenRekomendasi/MetodePembayaran/metode-pembayaran.png'

const Rekomendasi: FC<IRekomendasi> = (_p) => {
  return(
    <div className='rekomendasi'>
      <div className='isi-rekomendasi'>
        <KomponenUmum judul='Kelas Populer' komponen={<KelasPopuler/>}/>
        <KomponenUmum judul='Kategori Populer' komponen={<KategoriPopuler/>}/>
        <KomponenUmum judul='Alat' komponen={<Alat/>}/>
        <KomponenUmum judul='Arkademi Mobile App' komponen={<ArkademiMobileApp/>}/>
      </div>
      <div className='metode-pembayaran'>
        <div className='judul-metode-pembayaran'>
          Metode Pembayaran
        </div>
        <img className='isi-metode-pembayaran' src={GambarMetode} />
      </div>
    </div>
  )
}

export default Rekomendasi

interface IRekomendasi {}