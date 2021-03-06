import React, { useEffect, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import './DrawerMobile.css';
import { observer } from 'mobx-react-lite';
import buttonState from '../../../store/buttonState';
import ImgGallery from '../../../components/ImgGallery';
import drawerInfo from '../../../store/drawerInfo';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkIcon from '@mui/icons-material/Link';


type ArtObjectType = {
  id: number,
  title: string,
  description: string,
  imgs: string[],
  wikiLink: string,
  mapsLink: string[],
  authorInfo: string[]
}

const DrawerCustom: React.FC = observer(() => {

  const [drawerArtItem, setDrawerArtItem] = useState<ArtObjectType>();

  useEffect(() => {
    setDrawerArtItem(drawerInfo.artObject);
  }, [drawerInfo.artObject]);

  return (
    <>

      <Drawer
        anchor='left'
        open={buttonState.drawerState}
        onClose={() => buttonState.toggleDrawer()}
        PaperProps={{ sx: { width: 300 } }}
        sx={{display: { xs: 'block', sm: 'none' }}}
      >
        <ul className='drawer__list'>
          <ImgGallery imgs={drawerArtItem?.imgs} />
          <li className='title drawer__list_item'><a target='_blank' href={drawerArtItem?.wikiLink}>{drawerArtItem?.title}</a></li>
          <li className='drawer__list_item'>{drawerArtItem?.description}</li>
          <hr />
          <li className='maps drawer__list_item'>
            <h1>Проложить маршрут:</h1>
            <div className="wrapper__links">
              <a href={drawerArtItem?.mapsLink[0]} target='_blank'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#48b564" d="M35.76,26.36h0.01c0,0-3.77,5.53-6.94,9.64c-2.74,3.55-3.54,6.59-3.77,8.06	C24.97,44.6,24.53,45,24,45s-0.97-0.4-1.06-0.94c-0.23-1.47-1.03-4.51-3.77-8.06c-0.42-0.55-0.85-1.12-1.28-1.7L28.24,22l8.33-9.88	C37.49,14.05,38,16.21,38,18.5C38,21.4,37.17,24.09,35.76,26.36z" /><path fill="#fcc60e" d="M28.24,22L17.89,34.3c-2.82-3.78-5.66-7.94-5.66-7.94h0.01c-0.3-0.48-0.57-0.97-0.8-1.48L19.76,15	c-0.79,0.95-1.26,2.17-1.26,3.5c0,3.04,2.46,5.5,5.5,5.5C25.71,24,27.24,23.22,28.24,22z" /><path fill="#2c85eb" d="M28.4,4.74l-8.57,10.18L13.27,9.2C15.83,6.02,19.69,4,24,4C25.54,4,27.02,4.26,28.4,4.74z" /><path fill="#ed5748" d="M19.83,14.92L19.76,15l-8.32,9.88C10.52,22.95,10,20.79,10,18.5c0-3.54,1.23-6.79,3.27-9.3	L19.83,14.92z" /><path fill="#5695f6" d="M28.24,22c0.79-0.95,1.26-2.17,1.26-3.5c0-3.04-2.46-5.5-5.5-5.5c-1.71,0-3.24,0.78-4.24,2L28.4,4.74	c3.59,1.22,6.53,3.91,8.17,7.38L28.24,22z" /></svg>
              </a>

              <a href={drawerArtItem?.mapsLink[1]} target='_blank'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#ed2224" d="M21.413,47.315c1.685,0.076,3.206-0.076,4.891,0c-0.383-4.097,0.719-8.451,0.297-12.544 c-0.118-1.142,0.076-2.779,0.171-3.924c0.102-1.229,1.069-3.553,1.533-4.696c3.541-8.731,5.77-15.742,8.924-24.62 c-1.548-0.029-3.702,0.029-5.25,0c-2.934,7.419-5.846,15.183-8.022,22.859c-3.659-6.121-5.157-12.182-7.055-18.386 c-0.13-0.424-0.284-0.885-0.66-1.12c-0.247-0.154-0.549-0.183-0.839-0.205c-1.56-0.118-3.126-0.149-4.689-0.09 c3.636,7.742,6.793,16.44,9.267,24.628c0.411,1.36,0.806,2.729,1.013,4.134c0.218,1.48,0.447,2.718,0.453,4.213 C21.456,40.451,21.403,44.429,21.413,47.315z" /><path fill="#010101" d="M37.228,1.033c-1.75-0.028-3.5,0.028-5.25,0C31.74,1.029,31.577,1.194,31.496,1.4 c-2.823,7.142-5.525,14.344-7.685,21.717c-2.11-3.802-3.592-7.875-4.862-12.033c-0.335-1.095-0.659-2.193-0.986-3.291 c-0.27-0.904-0.439-2.011-0.95-2.815c-0.522-0.821-1.483-0.798-2.35-0.848c-1.315-0.076-2.633-0.086-3.95-0.041 c-0.401,0.014-0.593,0.409-0.432,0.752c2.538,5.416,4.725,10.992,6.675,16.645c1.884,5.463,3.992,11.069,3.99,16.917 c0,2.97-0.043,5.941-0.034,8.911c0.001,0.199,0.102,0.33,0.234,0.406c0.072,0.051,0.156,0.09,0.266,0.094 c1.631,0.063,3.261-0.063,4.891,0c0.253,0.01,0.523-0.238,0.5-0.5c-0.29-3.347,0.333-6.672,0.39-10.014 c0.026-1.503-0.185-2.988-0.088-4.49c0.082-1.276,0.2-2.483,0.603-3.701c0.908-2.743,2.12-5.396,3.142-8.098 c1.122-2.965,2.185-5.951,3.229-8.944c1.21-3.467,2.4-6.941,3.629-10.402C37.822,1.351,37.533,1.038,37.228,1.033z M30.286,19.685 c-1.051,2.814-2.242,5.576-3.274,8.396c-0.426,1.163-0.695,2.274-0.806,3.505c-0.061,0.682-0.122,1.366-0.138,2.051 c-0.018,0.764,0.083,1.516,0.114,2.278c0.148,3.64-0.621,7.255-0.403,10.893c-1.288-0.021-2.575,0.037-3.862,0.015 c0.012-5.353,0.438-10.808-0.961-16.031c-1.566-5.848-3.647-11.615-5.86-17.245c-1.123-2.857-2.331-5.681-3.617-8.468 c0.98-0.018,1.96-0.013,2.939,0.038c0.445,0.023,1.19-0.067,1.573,0.2c0.355,0.247,0.446,0.872,0.561,1.249 c0.612,2.017,1.195,4.043,1.828,6.053c1.316,4.174,2.906,8.253,5.146,12.025c0.22,0.371,0.796,0.295,0.914-0.119 c2.174-7.647,4.961-15.101,7.878-22.492c1.403,0.014,2.805-0.007,4.208,0C34.444,7.916,32.47,13.838,30.286,19.685z" /></svg>
              </a>
            </div>
          </li>
          <hr />
          <li className="drawer__list_item">
            <h1 className='author__title'>Author</h1>
            <div className='links__wrapper'>
              {drawerArtItem?.authorInfo.map(link =>
                link === '' ? '' : <a href={link}><LinkIcon /></a>
              )}
            </div>
          </li>
        </ul>
      </Drawer>
    </>
  )
}
)

export default React.memo(DrawerCustom);