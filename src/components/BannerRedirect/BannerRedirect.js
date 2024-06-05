import React, { useState, useEffect } from 'react';
import './BannerRedirect.scss';
import { MdClose } from "react-icons/md";

function BannerRedirect({ location }) {
  const [isOpen, setIsOpen] = useState(true);

  const WEBSITES = Object.freeze({
    ES: 'https://es.bitlogic.io',
    EN: 'https://en.bitlogic.io',
  });

  const titleEs = `¿Te gustaría visitar nuestro sitio en español?`;
  const titleEn = `Would you like to visit our English site?`;

  const closeBanner = () => {
    setIsOpen(false);

    if (typeof window !== 'undefined') {
      localStorage.setItem('BannerRedirect', 'closed')
    }
  };

  const userLanguage = navigator?.language;
  const userLocation = location?.origin || window?.location?.origin;

  useEffect(() => {
    if (
      (userLanguage?.startsWith('es') && userLocation?.includes('es')) ||
      (userLanguage?.startsWith('en') && userLocation?.includes('en'))
    ) {
      closeBanner()
    }
  }, [userLanguage, userLocation]);

  const bannerStorage = typeof window !== 'undefined'
    ? localStorage.getItem('BannerRedirect')
    : undefined

  if (bannerStorage === 'closed' || !isOpen) return null;

  return (
    <section className='BannerRedirect container'>
      <div className='BannerRedirect__wrapper'>
        <div className='d-flex flex-direction-row'>
          <h6>{userLanguage?.startsWith('es')
            ? titleEs
            : titleEn}
          </h6>
          <button aria-label='Close Banner'
            onClick={() => closeBanner()}
          >
            <MdClose />
          </button>
        </div>
        <button className='BannerRedirect__wrapper__btn'
          onClick={() => closeBanner()}
        >
          <a href={userLanguage?.startsWith('es')
            ? WEBSITES.ES
            : WEBSITES.EN}
          >
            {userLanguage?.startsWith('es') ? 'Vamos!' : 'Let´s go!'}
          </a>
        </button>
      </div>
    </section>
  );
}

export default BannerRedirect;