import './Tentang.css'
import {FC} from 'react'
import IsiTentang from '../KomponenTentang/IsiTentang'
import LogoArkademi from '../KomponenTentang/LogoTentang/logo-arkademi-tentang.png'
import LogoTentang from '../KomponenTentang/LogoTentang/logo-tentang.png'

const Tentang: FC<ITentang> = () => {
  const ttgArkademi = ('Arkademi adalah massive open online course (MOOC) platform karya anak bangsa Indonesia. Pembelajaran di Arkademi dikhususkan untuk pembelajaran berbasis keahlian yang diantarkan melalui kelas belajar dan kursus online melalui aplikasi Arkademi berbasis mobile app dan web. Di Arkademi setiap individu dan lembaga kursus dapat membuka dan mengkomersialkan kelas onlinenya dan menjangkau siswa dari seluruh Indonesia.')
  const akselerator = 'Arkademi adalah bagian program inkubasi dan akselerator dari perusahaan top-level dunia: SOSV MOX (Mobile Only Accelerator), Amazon Web Service (Edstart Program) dan Y Combinator (Startup School) yang dipilih dari tech startup edukasi terbaik dunia.'
  return(
    <div className='tentang-nav-bawah'>
      <IsiTentang isiTeks={ttgArkademi} gbr={LogoArkademi} />
      <IsiTentang judul={'Akselerator'} isiTeks={akselerator} gbrStlhTtg={LogoTentang}/>
    </div>
  )
}

export default Tentang

interface ITentang{}