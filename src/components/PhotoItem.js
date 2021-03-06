import React from 'react';
import {Link} from 'react-router-dom';


function PhotoItem(props) {
  return (
    <>
      <li className='photos__item'>
        <Link className='photos__item__link' to={props.path}>
          <figure className='photos__item__pic-wrap' data-category={props.label}>
            <img
              className='photos__item__img'
              alt=''
              src={props.src}
            />
          </figure>
          <div className='photos__item__info'>
            <h5 className='photos__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default PhotoItem;