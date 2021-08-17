import { FC } from 'react'
import './DaftarPengajar.css'
import Papan from '../gbr/papan.png'

const DaftarPengajar: FC<IDaftarPengajar> = (p) => {
  return(
    <div className='daftar-pengajar'>
      <div className='isi-daftar-pengajar'>
        <img className='gbr-papan-tulis' src={Papan} alt='gbr papan'/>
        <div className='judul-daftar-pengajar'>
          Daftar Menjadi Pengajar
        </div>
        <div className='teks-daftar-pengajar'>
          Mengajar ke siswa dari seluruh Indonesia tanpa batas dengan mengajar secara online di Arkademi. Biaya Rp0.
        </div>
        <div className='tbl-mulai-mengajar'>
          Mulai Mengajar
        </div>
      </div>
    </div>
  )
}

export default DaftarPengajar

interface IDaftarPengajar{}