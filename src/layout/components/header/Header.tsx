import { useNetworkState } from '@uidotdev/usehooks';
import { memo, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../shared/assets/sitelogo.svg'
import { BookMarked, Clapperboard, House, Search } from 'lucide-react';
const Header = () => {
  const { online } = useNetworkState()
  console.log(online);
  
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
    <header className={`w-full sticky top-0 left-0 z-10 ${isScroll ? 'bg-black  border-b border-[#1d1d1d]' : 'bg-slate-950'}`}>
{!online && (
  <div className="fixed top-0 left-0 w-full bg-red-600 text-white text-center py-2 z-50 shadow-md">
    You are offline. Some features may not work
  </div>
)}
      <nav className={`container flex justify-between items-center duration-200  ${isScroll ? 'h-18' : 'h-22'}`}>
        <NavLink to={'/'}>
        <img src={logo} alt="" />
        </NavLink>
        <ul className="flex text-[#A1A1A1] font-medium gap-7 text-[18px] max-sm:fixed max-sm:bottom-0 max-sm:left-0 max-sm:w-full max-sm:justify-evenly max-sm:bg-black max-sm:py-3 max-sm:border-t max-sm:border-[#1d1d1d]">
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
        <div className='flex items-center'>
          <button className='text-white bg-[#C61F1F] py-[18px] px-[50px] font-bold rounded-[12px] duration-200 hover:cursor-pointer hover:opacity-85'>Sign in</button>
        </div>
      </nav>
    </header>
  );
};

export default memo(Header);