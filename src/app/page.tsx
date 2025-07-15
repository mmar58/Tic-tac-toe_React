

import { Board } from "./component/game/board";
import { Header } from "./component/elements/header";




export default function Home() {
  return (
    <>
      <div className='main flex flex-wrap lg:gap-20 '>
        <div className="label lg:w-5/12 xl:w-0 sm:text-center lg:text-start 2xl:grow-1 xl:grow-1 shrink max-2xl:text-center max-xl:text-center max-lg:text-center max-md:text-center sm:w-full max-sm:text-center max-2xl:mb-3 max-2xl:grow-0 max-xl:grow-0 max-lg:grow-0 max-md:grow-0 max-sm:grow-0 max-sm:w-full   ">
          <Header text="AZ Developers" />
        </div>
        <div className="flex flex-2 justify-start 2xl:pl-5 xl:pl-5 max-2xl:justify-center">
          <Board />
        </div>
      </div>
    </>
  );
}
