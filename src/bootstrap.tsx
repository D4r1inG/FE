import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import locale from 'antd/lib/locale/vi_VN';

import 'antd/dist/antd.less';
import './assets/styles/app.scss';

// eslint-disable-next-line no-undef
export const bootstrap = (component: JSX.Element, element: string) => {
  const root = createRoot(document.getElementById(element)!);

  root.render(
    <BrowserRouter>
      <ConfigProvider locale={locale}>{component}</ConfigProvider>
    </BrowserRouter>
  );
};
