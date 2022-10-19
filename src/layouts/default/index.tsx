import { Layout } from 'antd';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './styles.module.scss';

const { Content } = Layout;

const DefaultLayout = () => {
  useEffect(() => {
    console.log('render layout');
  }, []);

  return (
    <div id={styles.__main}>
      <div id={styles.__header}></div>

      <Layout id={styles.__content}>
        <Layout className="site-layout">
          <Content className="m-4">
            <div className="site-layout-background p-6 bg-white">
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default DefaultLayout;
