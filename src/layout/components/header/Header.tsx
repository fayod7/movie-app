
import { memo, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../shared/assets/sitelogo.svg'
import { BookMarked, Clapperboard, House, Search } from 'lucide-react';
const Header = () => {
  const [isScroll, setIsScroll] = useState<boolean>(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    })
  },[])
  return (
    <header className={`w-full sticky top-0 left-0 z-10 ${isScroll ? 'bg-black' : 'bg-slate-950'}`}>
      <nav className={`container flex justify-between items-center duration-200  ${isScroll ? 'h-18 ' : 'h-22'}`}>
        <NavLink to={'/'}>
        <img src={logo} alt="" />
        </NavLink>
        <ul className="flex text-[#A1A1A1] font-medium gap-7 text-[18px]">
        <li>
           <NavLink className={'flex flex-col-reverse justify-between items-center header__link'} to={'/'}>
          <span>Home</span><House />
        </NavLink>
        </li>
        <li>

        <NavLink className={'flex flex-col-reverse justify-between items-center header__link'} to={'/movies'}>
          <span>Movies</span> <Clapperboard />
        </NavLink>
        </li>
        <li>
        <NavLink className={'flex flex-col-reverse justify-between items-center header__link'} to={'/bookmark'}>
          <span>Bookmark</span> <BookMarked />
        </NavLink>
        </li>
        <li>
        <NavLink className={'flex flex-col-reverse justify-between items-center header__link'} to={'/search'}>
          <span>Search</span> <Search />
        </NavLink>
        </li>
        </ul>
        <div className='flex items-center max-[650px]:hidden'>
          <button className='text-white bg-[#C61F1F] py-[18px] px-[50px] font-bold rounded-[12px] duration-200 hover:cursor-pointer hover:opacity-85'>Sign in</button>
        </div>
      </nav>
    </header>
  );
};

export default memo(Header);