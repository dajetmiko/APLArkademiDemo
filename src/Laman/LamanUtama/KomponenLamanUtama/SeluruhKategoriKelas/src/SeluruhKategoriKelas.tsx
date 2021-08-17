import { FC } from 'react'
import './SeluruhKategoriKelas.css'
import DigitalMarketing from '../gbr/digital-marketing.png'
import Kesehatan from '../gbr/kesehatan.png'
import Kewirausahaan from '../gbr/kewirausahaan.png'
import Multimedia from '../gbr/multimedia.png'
import Pemasaran from '../gbr/pemasaran.png'
import SemuaKelas from '../gbr/semua-kelas.png'
import Teknologi from '../gbr/teknologi.png'

const SeluruhKategoriKelas: FC<ISeluruhKategoriKelas> = (p) => {
  return(
    <div className='seluruh-kategori-kelas'>
      <KategoriKelas teks='Semua Kelas' gbr={SemuaKelas}/>
      <KategoriKelas teks='Kewirus' gbr={Kewirausahaan}/>
      <KategoriKelas teks='Pemasaran' gbr={Pemasaran}/>
      <KategoriKelas teks='Digital Marketing' gbr={DigitalMarketing}/>
      <KategoriKelas teks='Teknologi' gbr={Teknologi}/>
      <KategoriKelas teks='Multimedia' gbr={Multimedia}/>
      <KategoriKelas teks='Kesehatan' gbr={Kesehatan}/>
    </div>
  )
}

const KategoriKelas: FC<IKategoriKelas> = (p) => {
  return(
    <div className='kategori-kelas'>
      <img className='gbr-kategori-kelas' src={p.gbr} alt='kategori kelas'/>
      <div className='teks-kategori-kelas'>
        {p.teks}
      </div>
    </div>
  )
}


export default SeluruhKategoriKelas

interface ISeluruhKategoriKelas{}

interface IKategoriKelas{
  gbr: string;
  teks: string;
}
