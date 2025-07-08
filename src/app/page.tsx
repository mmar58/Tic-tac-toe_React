

import { Board } from "./component/game/board";
import { Header } from "./component/elements/header";




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
