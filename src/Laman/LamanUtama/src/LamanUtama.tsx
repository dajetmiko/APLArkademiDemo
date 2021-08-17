import './LamanUtama.css'
import HeaderLamanUtama from '../KomponenLamanUtama/HeaderLamanUtama' 
import PromoDKK from '../KomponenLamanUtama/PromoDKK'
import { FC } from 'react'
import IsiKelas from '../KomponenLamanUtama/IsiKelas'
import HotSale from '../KomponenLamanUtama/IsiKelas/KomponenIsiKelas/gbr/hot-sale.png'
import Baru from '../KomponenLamanUtama/IsiKelas/KomponenIsiKelas/gbr/baru.png'
import Penghargaan from '../KomponenLamanUtama/IsiKelas/KomponenIsiKelas/gbr/penghargaan.png'
import KelebihanArkademi from '../KomponenLamanUtama/KelebihanArkademi'
import SeluruhKategoriKelas from '../KomponenLamanUtama/SeluruhKategoriKelas'
import JarakWaktu from '../KomponenLamanUtama/JarakWaktu'
import MediaYangMeliput from '../KomponenLamanUtama/MediaYangMeliput'

const LamanUtama: FC<ILamanUtama> = (_p) => {
  return(
    <div className='laman-utama'>
      <HeaderLamanUtama/>
      <PromoDKK/>
      <IsiKelas judulIsiKelas='Sedang diskon' gbrJudulIsiKelas={HotSale}/>
      <IsiKelas judulIsiKelas='Kursus Terbaru' gbrJudulIsiKelas={Baru}/>
      <IsiKelas judulIsiKelas='Best Seller' gbrJudulIsiKelas={Penghargaan}/>
      <KelebihanArkademi/>
      <IsiKelas judulIsiKelas='Sedang diskon' apaAdaLihatSemua={true}/>
      <IsiKelas judulIsiKelas='Kursus Terbaru' apaAdaLihatSemua={true}/>
      <IsiKelas judulIsiKelas='Best Seller' apaAdaLihatSemua={true}/>
      <SeluruhKategoriKelas/>
      <JarakWaktu/>
      <MediaYangMeliput/>
    </div>
  )
}

export default LamanUtama

interface ILamanUtama{}