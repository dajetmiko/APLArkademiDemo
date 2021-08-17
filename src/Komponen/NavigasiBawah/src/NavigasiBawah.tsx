import {FC} from 'react'
import Rekomendasi from '../KomponenNavigasiBawah/Rekomendasi'
import Tentang from '../KomponenNavigasiBawah/Tentang'
import HakCipta from '../KomponenNavigasiBawah/HakCipta'

const NavigasiBawah: FC<INavigasiBawah> = (_p) => {
  return(
    <div className='navigasi-bawah'>
      <Rekomendasi/>
      <Tentang/>
      <HakCipta/>
    </div>
  )
}

export default NavigasiBawah

interface INavigasiBawah {}