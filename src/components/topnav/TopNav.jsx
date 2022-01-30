import React, { useRef, useState } from 'react';
import { Collapse } from 'bootstrap';
import imageLogo from '../../assets/img/logo.png'
import { Nav, NavLink } from 'react-bootstrap';
import TopNavNotification from './TopNavNotification';
import TopNavMessage from './TopNavMessage';
import TopNavAvatar from './TopNavAvatar';

const clickOutsideRef = (content_ref, toggle_ref) => {
  document.addEventListener('mousedown', (e) => {
    // user click toggle
    if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
      content_ref.current.classList.toggle('active')
    } else {
      // user click outside toggle and content
      if (content_ref.current && !content_ref.current.contains(e.target)) {
        content_ref.current.classList.remove('active')
      }
    }
  })
}

export const TopNav = () => {
  const menu_ref = useRef(null)
  const menu_toggle_ref = useRef(null)

  clickOutsideRef(menu_ref, menu_toggle_ref)

  const setActiveMenu = () => menu_ref.current.classList.add('active')

  const closeMenu = () => menu_ref.current.classList.remove('active')

  return (
    <div>
      <div className="header fixed-top d-flex align-items-center">
        <div className="d-flex align-items-center justify-content-between">
          <a href="/" className="logo d-flex align-items-center">
            <img src={imageLogo} alt="" />
            <span className="d-none d-lg-block">BSAdmin</span>
          </a>
          <i ref={menu_toggle_ref} onDoubleClick={() => setActiveMenu()} onClick={() => closeMenu()} className="bi bi-list toggle-sidebar-btn"></i>
        </div>
        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item d-block d-lg-none">
              <a className="nav-link nav-icon search-bar-toggle " href="#">
                <i className="bi bi-search"></i>
              </a>
            </li>
            <TopNavNotification />
            <TopNavMessage />
            <TopNavAvatar />
          </ul>
        </nav>
      </div>
      <div ref={menu_ref} className='sidebar'>
        <ul className="sidebar-nav" id="sidebar-nav">
          <Nav.Item>
            <NavLink href='/'>
              <i className="bi bi-grid"></i>
              <span>Dashboard</span></NavLink>
          </Nav.Item>
          <Nav.Item>
            <li>
              <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
                <i className="bi bi-box-seam"></i><span>Önümler</span><i className="bi bi-chevron-down ms-auto"></i>
              </a>
              <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                <li>
                  <a href="components-alerts.html">
                    <i className="bi bi-circle"></i><span>Önüm goşmak</span>
                  </a>
                </li>
                <li>
                  <a href="/products">
                    <i className="bi bi-circle"></i><span>Önümleri görmek</span>
                  </a>
                </li>


              </ul>
            </li>
          </Nav.Item>
          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
              <i className="bi bi-list-nested"></i><span>Kategoriýalar</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li>
                <a href="forms-elements.html">
                  <i className="bi bi-circle"></i><span>Kategoriýa goşmak</span>
                </a>
              </li>
              <li>
                <a href="forms-layouts.html">
                  <i className="bi bi-circle"></i><span>Kategoriýalary görmek</span>
                </a>
              </li>

            </ul>
          </li>
          <Nav.Item>
            <li>
              <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
                <i className="bi bi-collection-play"></i><span>Bannerler</span><i className="bi bi-chevron-down ms-auto"></i>
              </a>
              <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                <li>
                  <a href="tables-general.html">
                    <i className="bi bi-circle"></i><span>Banner goşmak</span>
                  </a>
                </li>
                <li>
                  <a href="tables-data.html">
                    <i className="bi bi-circle"></i><span>Bannerleri görmek</span>
                  </a>
                </li>
              </ul>
            </li>
          </Nav.Item>
          <Nav.Item>
            <li>
              <a className="nav-link collapsed" data-bs-target="#notifications-nav" data-bs-toggle="collapse" href="#">
                <i className="bi bi-bell"></i><span>Bildirişler</span><i className="bi bi-chevron-down ms-auto"></i>
              </a>
              <ul id="notifications-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                <li>
                  <a href="/">
                    <i className="bi bi-circle"></i><span>Bildiriş goşmak</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="bi bi-circle"></i><span>Bildirişleri görmek</span>
                  </a>
                </li>
              </ul>
            </li>
          </Nav.Item>
          <Nav.Item>
            <li>
              <a className="nav-link collapsed" href="/login">
                <i className="bi bi-cart4"></i>
                <span>Sargytlar</span>
              </a>
            </li>
          </Nav.Item>

          <li className="nav-heading">Notification</li>
          <Nav.Item>
            <li>
              <a className="nav-link collapsed" href="users-profile.html">
                <i className="bi bi-bell"></i>
                <span>Bildirişler</span>
              </a>
            </li>
          </Nav.Item>
          <Nav.Item>
            <li>
              <a className="nav-link collapsed" href="pages-login.html">
                <i className="bi bi-chat-left-text"></i>
                <span>Habarlar</span>
              </a>
            </li>
          </Nav.Item>
          <li className="nav-heading">Pages</li>
          <Nav.Item>
            <li>
              <a className="nav-link collapsed" href="/profile">
                <i className="bi bi-person"></i>
                <span>Profile</span>
              </a>
            </li>
          </Nav.Item>
          <Nav.Item>
            <li>
              <a className="nav-link collapsed" href="/login">
                <i className="bi bi-box-arrow-in-right"></i>
                <span>Login</span>
              </a>
            </li>
          </Nav.Item>
        </ul>
      </div>
    </div>
  );
};