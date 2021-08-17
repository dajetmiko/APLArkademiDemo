import './KategoriPopuler.css'
import { FC } from 'react'

const KategoriPopuler: FC<IKategoriPopuler> = () => {
  const dataKategori = ['Bahasa', 'Bahasa Arab', 'Bahasa Inggris', 'Bahasa Jepang', 'Bahasa Korea'
  , 'Bahasa Mandarin', 'Bahasa Turki', 'TOEFL & IELTS', 'Design', 'Digital Marketing', 
  ,'Health & Safety', 'Kartu Prakerja', 'Komputer', 'Korporat', 'Project Management'
]

  return(
    <ul className='kategori-populer'>
      {dataKategori.map((nilai) => {
        return (<li className='isi-kategori-populer'>{nilai}</li>
        )
      })}
    </ul>
  )
}

export default KategoriPopuler

interface IKategoriPopuler {}