import {FC} from 'react'
import Rekomendasi from '../KomponenNavigasiBawah/Rekomendasi'

const NavigasiBawah: FC<INavigasiBawah> = (_p) => {
  return(
    <div className='navigasi-bawah'>
      <Rekomendasi/>
    </div>
  )
}

export default NavigasiBawah

interface INavigasiBawah {}