import CommonContainer from '@/components/CommonContainer';
import HeaderWrapperWithScrollBehavior from '@/components/HeaderWrapperWithScrollBehavior';
import SearchBar from '@/components/SearchBar';
import { APP_ROUTES_CONFIG } from '@/constants/routes';
import { MenuOutlined } from '@ant-design/icons';
import { Button, Layout } from 'antd';
import classNames from 'classnames';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import s from './AppHeader.module.scss';

function AppHeader() {
  const navigate = useNavigate();

  const [showSmallMenu, setShowSmallMenu] = useState<boolean>(false);

  const handleClickMenu = () => {
    setShowSmallMenu((prevState) => !prevState);
  };

  const handleSearch = (searchText: string) => {
    navigate(APP_ROUTES_CONFIG.SEARCH.getRoute(searchText, 1));
  };

  const renderSearchComponent = (className: string) => (
    <SearchBar className={className} placeholder="Search for a movie..." onSearch={handleSearch} />
  );

  return (
    <HeaderWrapperWithScrollBehavior>
      <Layout.Header className={s.headerWrapper}>
        <CommonContainer className={s.container}>
          <div className={s.leftArea}>
            <div className={s.logoArea}>
              <Link to={APP_ROUTES_CONFIG.HOME.getRoute()}>
                <img src={'/images/movie-logo.svg'} alt="Movie Logo" className={s.logoImg} width={154} height={20} />
              </Link>
            </div>
          </div>

          <div className={s.rightArea}>
            {renderSearchComponent('hide-max-sm')}
            <Button
              type="text"
              className="hide-min-sm"
              icon={<MenuOutlined style={{ color: '#fff' }} />}
              style={{ marginRight: -16 }}
              onClick={handleClickMenu}
            />
          </div>

          {showSmallMenu && (
            <div className={classNames(s.smallSearchArea, 'hide-min-sm')}>{renderSearchComponent('hide-min-sm')}</div>
          )}
        </CommonContainer>
      </Layout.Header>
    </HeaderWrapperWithScrollBehavior>
  );
}

export default AppHeader;
