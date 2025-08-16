import { memo } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logotype from '../../../shared/assets/logotype.svg'
import googlePlay from '../../../shared/assets/google-play.svg'
import apple from '../../../shared/assets/apple.svg'
import listLine from '../../../shared/assets/file-list-2-line.svg'
import shiningLine from '../../../shared/assets/shining-line.svg'
import questionLine from '../../../shared/assets/question-line.svg'
import phoneLine from '../../../shared/assets/phone-line.svg'
import movieLine from '../../../shared/assets/movie-line.svg'
import clapperboardLine from '../../../shared/assets/clapperboard-line.svg'
import moviesLine from '../../../shared/assets/movie-2-line.svg'
import ballLine from '../../../shared/assets/basketball-line.svg'
import facebook from '../../../shared/assets/facebook-circle-line.svg'
import instagram from '../../../shared/assets/instagram-line.svg'
import youtube from '../../../shared/assets/youtube-line.svg'

const Footer = () => {
  return (
    <footer className='w-full py-[30px] bg-[#111111]'>
        <nav className="container flex justify-between flex-wrap max-[600px]:flex-col">
            <ul className="flex flex-col gap-5 p-2">
                <li>
                    <NavLink to={''}>
                        <img src={logotype} alt="" />
                    </NavLink>
                </li>
                <li>
                   <button className='flex gap-1.5 border border-[#040707] bg-[#040707] rounded-lg px-[10px] py-[6px] duration-200 hover:cursor-pointer  hover:bg-white group'>
                    <img src={googlePlay} alt="" />
                    <div className='flex flex-col text-white items-center justify-center font-bold text-[19px] group-hover:text-[#040707]'>
                        <span>Download from</span>
                        <span>Google Play</span>
                    </div>
                   </button>
                </li>
                <li>
                     <button className='flex gap-1.5 border border-[#040707] bg-[#040707] rounded-lg px-[10px] py-[6px] duration-200 hover:cursor-pointer  hover:bg-white group'>
                    <img className='text-white' src={apple} alt="" />
                    <div className='flex flex-col text-white items-center justify-center font-bold text-[19px] group-hover:text-[#040707]'>
                        <span>Download from</span>
                        <span>Apple</span>
                    </div>
                   </button>
                </li>
            </ul>
            <ul className='flex flex-col gap-5 text-[#A1A1A1] text-xl p-2'>
                <li className='text-white'>
                    About
                </li>
                <li className='flex gap-1.5 items-center group duration-200 hover:cursor-pointer'>
                    <img src={listLine} alt="" />
                    <span className='group-hover:underline group-hover:text-[#C61F1F]'>Public offer</span>
                </li>
                <li className='flex gap-1.5 items-center group duration-200 hover:cursor-pointer'>
                    <img src={shiningLine} alt="" />
                    <span className='group-hover:underline group-hover:text-[#C61F1F]'>Adds</span>
                </li>
                <li className='flex gap-1.5 items-center group duration-200 hover:cursor-pointer'>
                    <img src={questionLine} alt="" />
                    <span className='group-hover:underline group-hover:text-[#C61F1F]'>F.A.Q</span>
                </li>
                <li className='flex gap-1.5 items-center group duration-200 hover:cursor-pointer'>
                    <img src={phoneLine} alt="" />
                    <span className='group-hover:underline group-hover:text-[#C61F1F]'>Contacts</span>
                </li>
            </ul>
            <ul className='flex flex-col gap-5 text-[#A1A1A1] text-xl p-2'>
                <li className='text-white'>
                    Categories
                </li>
                <li className='flex gap-1.5 items-center group duration-200 hover:cursor-pointer'>
                    <img src={movieLine} alt="" />
                    <span className='group-hover:underline group-hover:text-[#C61F1F]'>Movie</span>
                </li>
                <li className='flex gap-1.5 items-center group duration-200 hover:cursor-pointer'>
                    <img src={clapperboardLine} alt="" />
                    <span className='group-hover:underline group-hover:text-[#C61F1F]'>Theatre</span>
                </li>
                <li className='flex gap-1.5 items-center group duration-200 hover:cursor-pointer'>
                    <img src={moviesLine} alt="" />
                    <span className='group-hover:underline group-hover:text-[#C61F1F]'>Concerts</span>
                </li>
                <li className='flex gap-1.5 items-center group duration-200 hover:cursor-pointer'>
                    <img src={ballLine} alt="" />
                    <span className='group-hover:underline group-hover:text-[#C61F1F]'>Sport</span>
                </li>
            </ul>
            <ul className='flex flex-col gap-5 text-xl p-2'>
                <li className='text-white'>Связаться с нами</li>
                  <li className='text-[#C61F1F] hover:underline duration-200 hover:cursor-pointer'>
                    <Link to={'tel:+998958973338'}>+998 (95) 897-33-38</Link>
                </li>
                <li className='text-white'>
                    Social networks
                </li>
                <div className='flex gap-2 text-[#C61F1F]'>
                    <Link to={''}>
                        <img className='size-7'src={instagram} alt="" />
                    </Link>
                    <Link to={''}>
                        <img className='size-7' src={facebook} alt="" />
                    </Link>
                    <Link to={''}>
                        <img className='size-7' src={youtube} alt="" />
                    </Link>
                </div>
            </ul>
        </nav>
    </footer>
  );
};

export default memo(Footer);