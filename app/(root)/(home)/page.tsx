import Link from 'next/link';
import React from 'react';
import './style.css';

const Home = () => {
  return (
    <div>
      <header className='header' data-header>
        <div className='container'>
          <a href='#' className='logo'>
            <img src='./images/cloud.png' width='200' height='40' alt='dprod logo' />
          </a>

          <nav className='navbar' data-navbar>
            <p className='navbar-title'>Main Menu</p>

            <ul className='navbar-list'>
              <li className='navbar-item'>
                <a href='#home' className='navbar-link' data-nav-link>
                  Home
                </a>
              </li>

              <li className='navbar-item'>
                <a href='#services' className='navbar-link' data-nav-link>
                  Services
                </a>
              </li>

              <li className='navbar-item'>
                <a href='#about' className='navbar-link' data-nav-link>
                  About
                </a>
              </li>
            </ul>
          </nav>

          <button className='nav-open-btn' aria-label='open menu' data-nav-toggler>
            {/* <ion-icon name='menu-outline' aria-hidden='true'></ion-icon> */}
          </button>

          <Link href='/auth' className='btn btn-primary'>
            Get Started
          </Link>

          <div className='overlay' data-nav-toggler data-overlay></div>
        </div>
      </header>

      <main>
        <article>
          <section className='section hero' id='home' aria-label='home'>
            <div className='container'>
              <div className='hero-content'>
                <h1 className='h2 section-title'>
                  Connect everything. <span className='span'>Build anything. </span>
                </h1>

                <p className='section-text'>
                  Cloud is the essential platform for the delivery of exceptional and dynamic web
                  experiences, without limitations
                </p>
                <Link href='/auth'>
                  <button className='btn btn-primary'>Get Started</button>
                </Link>
              </div>

              <figure className='hero-banner has-shape'>
                <img
                  src='./images/hero-banner.png'
                  width='521'
                  height='675'
                  alt='hero banner'
                  className='w-100'
                />
              </figure>
            </div>
          </section>

          <section className='section service has-shape' id='services' aria-label='service'>
            <div className='container'>
              <div className='title-wrapper'>
                <h2 className='h2 section-title'>
                  Cloud Composable <span className='span'>Web Platform</span>.
                </h2>

                <p className='section-text'>
                  Streamlined orchestration, simplified and unified workflows, and real-time updates
                  across infrastructure, workflows, websites and teams — all supported by
                  Enterprise-grade security, services, and a world-class partner ecosystem.
                </p>
              </div>

              <ul className='grid-list'>
                <li>
                  <div className='service-card'>
                    <figure className='card-icon'>
                      <img
                        src='./images/service-1.svg'
                        width='60'
                        height='60'
                        loading='lazy'
                        alt='service icon'
                      />
                    </figure>

                    <h3 className='h3'>
                      <a href='#' className='card-title'>
                        Deploy faster
                      </a>
                    </h3>

                    <p className='card-text'>
                      Cloud Core is a frontend cloud solution for developers to build and deploy
                      future-proof digital solutions with modern, composable tooling that works with
                      all modern frameworks.
                    </p>
                  </div>
                </li>

                <li>
                  <div className='service-card'>
                    <figure className='card-icon'>
                      <img
                        src='./images/service-2.svg'
                        width='60'
                        height='60'
                        loading='lazy'
                        alt='service icon'
                      />
                    </figure>

                    <h3 className='h3'>
                      <a href='#' className='card-title'>
                        Unify all content
                      </a>
                    </h3>

                    <p className='card-text'>
                      Cloud Connect is a data unification layer that gives web teams the freedom to
                      create world-class websites, online stores, and applications with data from
                      any existing or new content source.
                    </p>
                  </div>
                </li>

                <li>
                  <div className='service-card'>
                    <figure className='card-icon'>
                      <img
                        src='./images/service-3.svg'
                        width='60'
                        height='60'
                        loading='lazy'
                        alt='service icon'
                      />
                    </figure>

                    <h3 className='h3'>
                      <a href='#' className='card-title'>
                        Click, edit, publish
                      </a>
                    </h3>

                    <p className='card-text'>
                      Cloud Create gives digital teams the freedom to autonomously perform content
                      and website updates faster than ever before with an intuitive visual editor
                      and creater for your web applications.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section className='section about' id='about' aria-label='about'>
            <div className='container'>
              <figure className='about-banner has-shape'>
                <img
                  src='./images/service.png'
                  width='500'
                  height='611'
                  loading='lazy'
                  alt='about banner'
                  className='w-100'
                />
              </figure>

              <div className='about-content'>
                <h2 className='h2 section-title'>
                  We've been helping <span className='span'>customers</span> globally.
                </h2>

                <p className='section-text'>
                  Aliquam tristique libero at dui sodales, et placerat orci lobortis. Donec metus
                  lorem, vulputate at sapien sit amet, auctor iaculis lorem.
                </p>

                <a href='#' className='btn btn-outline'>
                  Get Started
                </a>
              </div>
            </div>
          </section>
        </article>
      </main>

      <footer className='footer'>
        <div className='container'>
          <div className='footer-top section'>
            <div className='footer-brand'>
              <a href='#' className='logo'>
                <img src='./images/cloud.png' width='200' height='40' alt='dprod logo' />
              </a>

              <a href='mailto:companyinfo@mail.com' className='footer-link'>
                companyinfo@mail.com
              </a>

              <a href='tel:+0987654321' className='footer-link'>
                +098 765 4321
              </a>

              <ul className='social-list'>
                <li>
                  <a href='#' className='social-link'>
                    {/* <ion-icon name='logo-facebook'></ion-icon> */}
                  </a>
                </li>

                <li>
                  <a href='#' className='social-link'>
                    {/* <ion-icon name='logo-twitter'></ion-icon> */}
                  </a>
                </li>

                <li>
                  <a href='#' className='social-link'>
                    {/* <ion-icon name='logo-pinterest'></ion-icon> */}
                  </a>
                </li>

                <li>
                  <a href='#' className='social-link'>
                    {/* <ion-icon name='logo-dribbble'></ion-icon> */}
                  </a>
                </li>
              </ul>
            </div>

            <ul className='footer-list'>
              <li>
                <p className='h4 footer-list-title'>Links</p>
              </li>

              <li>
                <a href='#' className='footer-link'>
                  Company Details
                </a>
              </li>

              <li>
                <a href='#' className='footer-link'>
                  Our Newsfeed
                </a>
              </li>

              <li>
                <a href='#' className='footer-link'>
                  Service Standard
                </a>
              </li>

              <li>
                <a href='#' className='footer-link'>
                  Team Members
                </a>
              </li>

              <li>
                <a href='#' className='footer-link'>
                  Pricing Standard
                </a>
              </li>
            </ul>

            <ul className='footer-list'>
              <li>
                <p className='h4 footer-list-title'>Legal</p>
              </li>

              <li>
                <a href='#' className='footer-link'>
                  Agency Minimal
                </a>
              </li>

              <li>
                <a href='#' className='footer-link'>
                  Creative Agency
                </a>
              </li>

              <li>
                <a href='#' className='footer-link'>
                  Creative Layout
                </a>
              </li>

              <li>
                <a href='#' className='footer-link'>
                  Dark Layout
                </a>
              </li>

              <li>
                <a href='#' className='footer-link'>
                  FAQ with Filter
                </a>
              </li>
            </ul>

            <ul className='footer-list'>
              <li>
                <p className='h4 footer-list-title'>Projects</p>
              </li>

              <li>
                <a href='#' className='footer-link'>
                  Projects Common
                </a>
              </li>

              <li>
                <a href='#' className='footer-link'>
                  Projects Creative
                </a>
              </li>

              <li>
                <a href='#' className='footer-link'>
                  Projects Standard
                </a>
              </li>

              <li>
                <a href='#' className='footer-link'>
                  Dark Layout
                </a>
              </li>

              <li>
                <a href='#' className='footer-link'>
                  eCommerce
                </a>
              </li>
            </ul>
          </div>

          <div className='footer-bottom'>
            <p className='copyright'>Copyright 2024 All Rights Reserved by teamcloud.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
