import React, { useState, useRef, useEffect } from "react";
import { LinkData } from "../assets/data/dummydata";
import { NavLink } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";
import { HiOutlineMenuAlt1, HiViewGrid } from "react-icons/hi";
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import Logo from '../assets/images/logo.png'

export const Header = () => {
  const [open, setOpen] = useState(false);

  // Create a ref for the login menu
  const loginMenuRef = useRef(null);

  // Handle clicks outside the login menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (loginMenuRef.current && !loginMenuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);
    
    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  

  // Create the login menu
  const loginMenu = (
    <Menu>
      <Menu.Item key="1">
        <NavLink to={`${process.env.REACT_APP_BASE_URL}/Adminlogin`}>Login as Admin</NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink to={`${process.env.REACT_APP_BASE_URL}/Studentlogin`}>Login as Student</NavLink>
      </Menu.Item>
      <Menu.Item key="3">
        <NavLink to={`${process.env.REACT_APP_BASE_URL}/Teacherlogin`}>Login as Teacher</NavLink>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <header className='bg-white py-2 text-black sticky z-50 shadow-md top-0 left-0 w-full'>
        <div className='container flex justify-between items-center'>
          <div className='logo flex items-center gap-6'>
            <img src={Logo} alt='logo' className='h-16' />
            {/* <h4 className='h-5 md:text-sm'>Sk Digi Tech</h4> */}
            <div className='category flex items-center text-sm gap-3 md:hidden'>
              <HiViewGrid size={20} />
              <span>category</span>
            </div>
          </div>
          <nav className={open ? "mobile-view" : "desktop-view"}>
            <ul className='flex items-center gap-6'>
              {LinkData.map((link) => (
                <li key={link.id} onClick={() => setOpen(null)}>
                  <NavLink className={({ isActive }) => (isActive ? "text-primary text-sm" : "text-[15px]")} to={link.url}>
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className='account flex items-center gap-5'>
            <button className="md:hidden">
              <BiShoppingBag size={25} />
            </button>
            <Dropdown overlay={loginMenu} trigger={['click']} ref={loginMenuRef}>
              <Button className='md:hidden'>
                Login <DownOutlined />
              </Button>
            </Dropdown>
            <button className='open-menu md:hidden' onClick={() => setOpen(!open)}>
              <HiOutlineMenuAlt1 size={25} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
