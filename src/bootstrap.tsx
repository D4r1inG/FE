import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import locale from "antd/lib/locale/vi_VN";

import "antd/dist/antd.less";
import "./assets/styles/app.scss";

export const bootstrap = (component: JSX.Element, element: string) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const root = createRoot(document.getElementById(element)!);

  root.render(
    <BrowserRouter>
      <ConfigProvider locale={locale}>{component}</ConfigProvider>
    </BrowserRouter>
  );
};
