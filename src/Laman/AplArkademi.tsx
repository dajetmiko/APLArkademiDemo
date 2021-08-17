import React from 'react';
import logo from './logo.svg';
import NavigasiAtas from '../Komponen/NavigasiAtas';
import './AplArkademi.css';
import NavigasiBawah from '../Komponen/NavigasiBawah';

function AplArkademi() {
  return (
    <div className="apl-arkademi">
      <NavigasiAtas/>
      <div className='konten-apl'>

      
      {/* <BodyApl/> */}
      {/* <FooterApl/>*/}
      <NavigasiBawah/>
      </div>
    </div>
  );
}

export default AplArkademi;
