import './NavigasiAtas.css'
import {FC} from 'react'
import BoksCari from '../KomponenNavigasi/BoksCari'
import AksiAkun from '../KomponenNavigasi/AksiAkun'
import MenuLengkap from '../KomponenNavigasi/MenuLengkap'
import {ReactComponent as LogoArkademi} from '../KomponenNavigasi/LogoArkademi/LogoArkademi.svg'

const NavigasiAtas: FC<INavigasiAtas> = (p) => {
  return(
    <div className='navigasi-atas'>
      <div className='navigasi-atas-kiri'>
        <LogoArkademi className='logo-arkademi'/>
        <BoksCari/>
      </div>
      <div className='navigasi-atas-kanan'>
        <AksiAkun/>
        <MenuLengkap/> 
      </div>
    </div>
  )
}

export default NavigasiAtas

interface INavigasiAtas {}