export function Header() {
    return (
        <header className="col-span-1 h-full  w-full justify-self-end text-center border  border-white rounded-xl">
    <nav className=" ml-auto h-full ">
      <ul className="flex flex-col  items-center justify-between  self-end h-full p-4">
        <li className="w-fit border-b-2 border-b-[var(--Orange)] hover:border-b-[var(--Blue)]  transition-all duration-100 ease-out cursor-pointer ">
          Images
        </li>
        <li className="w-fit border-b-2 border-b-[var(--Orange)] hover:border-b-[var(--Gray)]  transition-all duration-100 ease-out cursor-pointer ">
          About
        </li>
        <li className="w-fit border-b-2 border-b-[var(--Orange)] hover:border-b-[var(--Green)]  transition-all duration-100 ease-out cursor-pointer ">
          Redes
        </li>
      </ul>
    </nav>
  </header>
    )
}