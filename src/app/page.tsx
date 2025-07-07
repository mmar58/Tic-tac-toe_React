

import { Board } from "./component/board";
import { Header } from "./component/header";




export default function Home() {
  return (
    <>
      <div className="label">
        <Header text="AZ Developers" />
      </div>
      <div>
        <Board />
      </div>
    </>
  );
}
