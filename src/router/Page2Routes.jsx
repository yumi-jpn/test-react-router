import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />,
  },
  {
    // URLパラメータの場合、pathの書き方が変わる「: ←コロンを書く」ことでURLパラメータを使うことの宣言になる
    path: "/:id",
    exact: false,
    children: <UrlParameter />,
  },
];
