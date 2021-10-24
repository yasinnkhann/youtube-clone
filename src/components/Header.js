import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import '../styles/Header.css';

function Header() {
  const [inputSearch, setInputSearch] = useState('');
  const history = useHistory();

  const handleSearch = () => {
    history.push(`/search/${inputSearch}`);
    setInputSearch('');
  };

  const handleReturnToHome = () => {
    history.push('/');
    setInputSearch('');
  };

  return (
    <div className='header'>
      <div className='header__left'>
        <MenuIcon />
        <img
          className='header__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1024px-Logo_of_YouTube_%282015-2017%29.svg.png'
          alt=''
          onClick={() => handleReturnToHome()}
        />
        {/* <Link to='/'>
          <img
            className='header__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1024px-Logo_of_YouTube_%282015-2017%29.svg.png'
            alt=''
          />
        </Link> */}
      </div>

      <div className='header__input'>
        <input
          onChange={e => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder='Search'
          type='text'
        />
        <SearchIcon
          className='header__inputButton'
          onClick={() => handleSearch()}
        />
        {/* <Link to={`/search/${inputSearch}`}>
          <SearchIcon className='header__inputButton' />
        </Link> */}
      </div>

      <div className='header__icons'>
        <VideoCallIcon className='header__icon' />
        <AppsIcon className='header__icon' />
        <NotificationsIcon className='header__icon' />
        <Avatar
          alt='Yasin Khan'
          src='https://avatars.githubusercontent.com/u/26021509?s=40&v=4'
        />
      </div>
    </div>
  );
}

export default Header;
