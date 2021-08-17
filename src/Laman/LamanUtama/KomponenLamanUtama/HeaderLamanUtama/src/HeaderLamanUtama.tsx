import { FC } from "react"
import './HeaderLamanUtama.css'
import {ReactComponent as PanahKanan} from './panah-kanan.svg'

const HeaderLamanUtama: FC<IHeaderLamanUtama> = (_p) => {
  return(
    <div className='header-laman-utama'>
      <div className='isi-header-laman-utama'>
        <div className='judul-isi-header-laman-utama'>
          Kursus dari Genggaman
        </div>
        <div className='teks-isi-header-laman-utama'>
          Tingkatkan karier dan raih pekerjaan yang anda impikan dengan memiliki sertifikat hard copy dari lembaga kursus yang kredibel dan belajar secara online.
        </div>
        <div className='tbl-isi-header-laman-utama'>
          <div className='teks-tbl-isi-header-laman-utama'>
            Daftar Sekarang
          </div>
          <PanahKanan/>
        </div>
      </div>
    </div>
  )
}

export default HeaderLamanUtama

interface IHeaderLamanUtama{}