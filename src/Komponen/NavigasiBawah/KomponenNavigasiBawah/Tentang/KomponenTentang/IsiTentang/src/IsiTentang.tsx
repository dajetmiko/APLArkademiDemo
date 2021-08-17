import './IsiTentang.css';
import { FC } from 'react';

const IsiTentang: FC<IIsiTentang> = (p) => {
  return(
    <div className='isi-tentang'>
      {p.judul ? 
        <div className='judul-tentang'>
          {p.judul}
        </div>
        :
        <img className='logo-judul-tentang' src={p.gbr} alt={'gbr judul'}/>
      }
      <div className='teks-tentang'>
        {p.isiTeks}
      </div>
      {p.gbrStlhTtg &&
        <img className='logo-setelah-tentang' src={p.gbrStlhTtg} alt={'gbr isi'}/>
      }
    </div>
  )
}

export default IsiTentang

/** Judul, gbr, gbrStlhTtg, isiTeks */
interface IIsiTentang{
  judul?: string;
  gbr?: string;
  gbrStlhTtg?: string;
  isiTeks: string;
}