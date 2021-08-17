import {FC} from 'react'
import {ReactComponent as LogoCari} from './LogoCari.svg'
import './BoksCari.css'

const BoksCari: FC<IBoksCari> = (_p) => {
  return(
    <div className='boks-cari'>
      <input className='input-cari' placeholder='Cari kursus'/>
      <div className='kontainer-logo-cari'>
        <LogoCari className='logo-cari'/>
      </div>
    </div>
  )
}

interface IBoksCari{}

export default BoksCari