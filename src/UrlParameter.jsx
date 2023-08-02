import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  // hooksのuseLocation内にあるsearchに?以降のURLが入っている
  const { search } = useLocation();
  // URLSearchParamsはJSが用意してる関数。引数にuseLocation()で取得した文字列を指定すると、URLを自動的に生成してくれる
  const query = new URLSearchParams(search);

  return (
    <div>
      <h1>URL Parameterページです</h1>
      <p>パラメータは{id}です</p>
      {/* 以下のように、 JSで用意してくれるメソッドのgetを使うことができる*/}
      {/* 「name=hogehoge」というURLのnameなどを指定してみることもできる*/}
      <p>クエリパラメータは{query.get("name")}です</p>
    </div>
  );
};
