import {FC} from 'react';
import ThumbnailKelas from './Luqman_-__Thumbnail___Startegi_Menjadi_Entrepreneur_Pemula_yang_Kreatif_dan_Produktif-.png'
import './KelasPopuler.css'

const KelasPopuler: FC<IKelasPopuler> = (_p) => {
  const dataKelasPopuler = [
    'Strategi Menjadi Entrepreneur Pemula yang Kreatif dan Produktif',
    'Membuat Website Profesional Untuk Perusahaan',
    'Membuat Website Profesional Untuk Perusahaan'
  ]
  const dataGambar = [ThumbnailKelas, ThumbnailKelas, ThumbnailKelas]
  return(
    <ul className='kelas-populer'>
      {dataKelasPopuler.map((nilai, kunci) => {
        return <IsiKelasPopuler teks={nilai} gambar={dataGambar[kunci]}/>
      })}
    </ul>
  )
}

const IsiKelasPopuler: FC<IIsiKelasPopuler> = (p) => {
  return(
    <li className='isi-kelas-populer'>
      <img className='gambar-isi-kelas-populer'src={p.gambar}/>
      <div className='teks-isi-kelas-populer'>
        {p.teks}
      </div>
    </li>
  )
}

export default KelasPopuler

interface IKelasPopuler{}
interface IIsiKelasPopuler{
  teks: string;
  gambar: string;
}