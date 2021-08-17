import './ArkademiMobileApp.css'
import { FC } from 'react'
import DownloadPlayStore from './download_play_store.png';
import DownloadAppStore from './download_app_store.png';
import TerdaftarKominfo from './kominfo.png'


const ArkademiMobileApp: FC<IAkademiMobileApp> = (p) => {
  return(
    <div className='akademi-mobile-app'>
      <div className='teks-akademi-mobile-app'>
        Belajar lebih nyaman lewat aplikasi Android dan iOS Arkademi
      </div>
      <img className='prompt-download-store' src={DownloadPlayStore} alt='download google play'/>
      <img className='prompt-download-store' src={DownloadAppStore} alt='download app store'/>
      <div className='terdaftar-di'>
        {'Terdaftar resmi di'}
        <img className='gambar-kominfo' src={TerdaftarKominfo} alt='download app store'/>
      </div>
    </div>
  )
}

export default ArkademiMobileApp

interface IAkademiMobileApp{}