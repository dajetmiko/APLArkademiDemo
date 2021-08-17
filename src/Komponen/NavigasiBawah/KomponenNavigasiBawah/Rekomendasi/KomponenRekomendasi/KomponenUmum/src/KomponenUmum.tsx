import {FC, ReactNode} from 'react';
import './KomponenUmum.css';

const KomponenUmum: FC<IKomponenUmum> = (p) => {
  return(
    <div className='komponen-umum'>
      <div className='judul-komponen-umum'>
        {p.judul}
      </div>
      {p.komponen}
    </div>
  )
}

export default KomponenUmum

interface IKomponenUmum{
  judul: string;
  komponen: ReactNode;
}