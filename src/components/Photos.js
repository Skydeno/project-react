import React from 'react';
import './Photos.css';
import PhotoItem from './PhotoItem';

function Photos() {
  return (
    <div  id='photos'>
    <div className='photos'>
      <h1>Wiadomości</h1>
      <div className='photos__container'>
        <div className='photos__wrapper'>
          <div className='photos__items'>
            <PhotoItem
              src='images/img-9.jpg'
              text='Najbliższe plany SpaceX – styczeń 2022'
              label='Start rakiety Falcon 9 z misją Starlink Group 4-4 (Źródło: SpaceX)'
              path='//spacex.com.pl/wiadomosci/najblizsze-plany-spacex-styczen-2022'
            />
            <PhotoItem
              src='images/img-2.jpg'
              text='Start rakiety Falcon 9 z misją Turksat 5B – 19 grudnia 2021'
              label='Rakieta Falcon 9 przed startem z misją Turksat 5B (Źródło: SpaceX)'
              path='//spacex.com.pl/wiadomosci/start-rakiety-falcon-9-z-misja-turksat-5b'
            />
          </div>
          <div className='photos__items'>
            <PhotoItem
              src='images/img-3.jpg'
              text='Start z misją DART zakończony sukcesem'
              label='Start Falcon 9 z misją DART (Źródło: SpaceX)'
              path='//spacex.com.pl/wiadomosci/start-z-misja-dart-zakonczony-sukcesem'
            />
            <PhotoItem
              src='images/img-4.jpg'
              text='Najbliższe plany SpaceX – październik 2021'
              label='Dragon 2 z ISS (Źródło: Thomas Pesquet)'
              path='//spacex.com.pl/wiadomosci/najblizsze-plany-spacex-pazdziernik-2021'
            />
            <PhotoItem
              src='images/img-8.jpg'
              text='Falcon Heavy wyniesie na orbitę satelitę GOES-U'
              label='Wizualizacja GOES-R na orbicie (Źródło: NASA)'
              path='//spacex.com.pl/wiadomosci/falcon-heavy-wyniesie-na-orbite-satelite-goes-u'
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Photos;