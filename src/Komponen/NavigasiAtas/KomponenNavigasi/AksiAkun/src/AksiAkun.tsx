import './AksiAkun.css';
import {FC} from 'react'
import {ReactComponent as KeranjangBelanja} from './KeranjangBelanja.svg'

const AksiAkun: FC<IAksiAkun> = (p) => {
  return(
    <div className='aksi-akun'>
      <div className='keranjang-belanja'>
        <KeranjangBelanja/>
      </div>
      <div className='tombol-aksi-akun' style={{backgroundColor: 'var(--bg)', color: 'var(--warna-teks)'}}>
        Masuk
      </div>
      <div className='tombol-aksi-akun' style={{backgroundColor: 'var(--warna-primer)', color: 'var(--bg)'}}>
        Daftar
      </div>
    </div>
  )
}


export default AksiAkun

interface IAksiAkun {}