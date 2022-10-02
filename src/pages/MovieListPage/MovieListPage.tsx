import CommonContainer from '@/components/CommonContainer';
import { MovieListType } from '@/types/common';
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';
import { Button, Space, Tabs } from 'antd';
import React, { useState } from 'react';
import MovieListWrapper from './components/MovieListWrapper';
import s from './MovieListPage.module.scss';
import { LayoutMode } from './types';

const DEFAULT_TOP_BG = '/images/main-bg.jpg';

const MOVIE_TABS_DATA = [
  {
    tabKey: 'now_playing' as MovieListType,
    tab: 'Now Playing',
  },
  {
    tabKey: 'top_rated' as MovieListType,
    tab: 'Top Rated',
  },
  {
    tabKey: 'popular' as MovieListType,
    tab: 'NowPopular',
  },
  {
    tabKey: 'upcoming' as MovieListType,
    tab: 'Upcoming',
  },
];

function MovieListPage() {
  const [layoutMode, setLayoutMode] = useState<LayoutMode>('grid');

  const renderTopSection = () => {
    return (
      <div
        className={s.topSectionArea}
        style={{
          backgroundImage: `linear-gradient(to right, rgba(var(--darkBlue), 0.8) 0%, rgba(var(--darkBlue), 0) 100%), url("${DEFAULT_TOP_BG}")`,
        }}
      >
        <CommonContainer>
          <h2 className={s.title}>Welcome</h2>
          <h3 className={s.subtitle}>Millions of movies, TV shows and people to discover. Explore now.</h3>
        </CommonContainer>
      </div>
    );
  };

  const renderButttons = () => {
    return (
      <div>
        <Space>
          <Button
            icon={<AppstoreOutlined />}
            type={layoutMode === 'grid' ? 'primary' : 'default'}
            onClick={() => setLayoutMode('grid')}
          ></Button>
          <Button
            icon={<BarsOutlined />}
            type={layoutMode === 'list' ? 'primary' : 'default'}
            onClick={() => setLayoutMode('list')}
          ></Button>
        </Space>
      </div>
    );
  };

  return (
    <div className={s.container}>
      {renderTopSection()}

      <CommonContainer>
        {renderButttons()}

        <Tabs>
          {MOVIE_TABS_DATA.map((item) => {
            return (
              <Tabs.TabPane key={item.tabKey} tab={item.tab}>
                <MovieListWrapper listType={item.tabKey} layoutMode={layoutMode} />
              </Tabs.TabPane>
            );
          })}
        </Tabs>
      </CommonContainer>
    </div>
  );
}

export default MovieListPage;
