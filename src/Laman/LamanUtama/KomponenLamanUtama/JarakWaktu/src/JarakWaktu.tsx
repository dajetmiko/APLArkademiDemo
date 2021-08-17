import { FC } from "react"
import './JarakWaktu.css'
import Jempol from './jempol.png'

const JarakWaktu: FC<IJarakWaktu> = (_p) => {
  return(
    <div className='jarak-waktu'>
      <div className='isi-jarak-waktu'>
        <img className='gbr-jempol-jarak-waktu' src={Jempol} alt='Jempol'/>
        <div className='judul-jarak-waktu'>
          Jarak dan Waktu Bukan Masalah Lagi
        </div>
        <div className='teks-jarak-waktu'>
          Arkademi menyediakan layanan kursus bersertifikat dengan cara belajar full online dari mobile app atau web. Tersedia puluhan kelas kursus berkualitas tinggi dalam berbagai kategori yang disediakan lembaga kursus resmi atau institusi. Sertifikat hard copy akan dikirim langsung ke alamat anda. Kini anda bisa mengikuti kursus yang anda butuhkan tanpa terikat tempat dan waktu dengan harga yang sangat terjangkau.
        </div>
        <div className='tbl-daftar-sekarang'>
          Daftar Sekarang
        </div>
      </div>
    </div>
  )
}

export default JarakWaktu

interface IJarakWaktu{}