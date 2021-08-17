import './PromoDKK.css'
import { FC } from 'react'
import Prakerja from './gbr/prakerja.png'
import PelatihanPrakerja from './gbr/pelatihan-prakerja.png'
import Giveaway from './gbr/giveaway.png'
import Ulasan from './gbr/ulasan.png'

const PromoDKK: FC<IPromoDKK> = (_p) => {
  return(
    <div className='promo-dkk'>
      <GbrPromo gambar={Prakerja}/>
      <GbrPromo gambar={PelatihanPrakerja}/>
      <GbrPromo gambar={Giveaway}/>
      <GbrPromo gambar={Ulasan}/>
    </div>
  )
}

const GbrPromo: FC<IGbrPromo> = (p) => {
  return <img className='gbr-promo-dkk' src={p.gambar} alt='alt-gbr-promo-dkk'/>
}

export default PromoDKK

interface IPromoDKK{}
interface IGbrPromo{
  gambar?: string;
}