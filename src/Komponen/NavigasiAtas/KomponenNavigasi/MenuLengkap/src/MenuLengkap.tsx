import {FC} from 'react'
import './MenuLengkap.css'
import {ReactComponent as KeranjangBelanja} from './KeranjangBelanja.svg'

const MenuLengkap: FC<IMenuLengkap> = (_p) => {
  //diklik dapat diisi dengna fungsi
  return(
    <ul className='menu-lengkap'>
      <IsiMenuLengkap teks='Kategori' onClick={()=> {}}/>
      <IsiMenuLengkap teks='Mitra' onClick={()=> {}}/>
      <IsiMenuLengkap teks='Tentang' onClick={()=> {}}/>
      <IsiMenuLengkap teks='Blog' onClick={()=> {}}/>
    </ul>
  )
}

const IsiMenuLengkap: FC<IIsiMenuLengkap> = (p) => {
  return(
    <li className='isi-menu-lengkap' onClick={p.onClick}>
      {p.teks}
    </li>
  )
}

interface IMenuLengkap{}
interface IIsiMenuLengkap{
  teks: string;
  onClick: () => void;
}

export default MenuLengkap