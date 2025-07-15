

import { Board } from "./component/game/board";
import { Header } from "./component/elements/header";




export default function Home() {
  return (
    <>
      <div className='main flex flex-wrap gap-0 '>
        <div className="label shrink mx-auto max-xl:grow-0">
          <Header text="AZ Developers" />
        </div>
        <div className="flex flex-2 justify-start 2xl:pl-5 xl:pl-5 max-2xl:justify-center">
          <Board />
        </div>
      </div>
    </>
  );
}
