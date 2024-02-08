import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next';
import Switcher7 from '../Switcher/Switcher';
import {useState, useEffect} from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

  const { t } = useTranslation()

  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    // Desuscribirse del evento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navClasses = `fixed z-20 w-full bg-transparent backdrop-filter transition-all duration-300 ${scrolled ? 'backdrop-blur-lg bg-black' : ''}`;

  const navigation = [
    {id:1, name: <span>{t("home")}</span>, href: '#home', current: false },
    {id:3, name: <span>{t("about")}</span>, href: '#about', current: false },
    {id:4, name: <span>{t("projects")}</span>, href: '#projects', current: false },
    {id:5, name: <span>{t("contact")}</span>, href: '#contact', current: false },
  ]
  return (
    <Disclosure as="nav" className={navClasses}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:4">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                <div className='sm:mr-5'>
                  <Switcher7/>
                </div>
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white focus:outline-none ">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className='w-full'>
                <div className="flex flex-1 justify-start items-center ">
                  <a target='_blank' href="https://drive.google.com/drive/folders/1nJU2zUh7txvSXc1FxxZp_w0DWRPa5WL2?usp=drive_link" className="hidden sm:flex flex-shrink-0 border-2 border-palette-600 hover:bg-palette-600 duration-500 cursor-pointer px-4 py-2 rounded-lg" rel="noreferrer" id='home'>
                    <p className='xl:text-lg font-semibold flex gap-2'>Facundo Recabarren <FaExternalLinkAlt/></p>
                  </a>
                  <a target='_blank' href="https://drive.google.com/drive/folders/1nJU2zUh7txvSXc1FxxZp_w0DWRPa5WL2?usp=drive_link" className="sm:hidden flex flex-shrink-0 border-2 border-palette-600 hover:bg-palette-600 duration-500 cursor-pointer px-4 py-2 rounded-lg" rel="noreferrer" id='home'>
                    <p className='xl:text-lg font-semibold flex gap-2'>{t("cv")} <FaExternalLinkAlt/></p>
                  </a>
                  <div className="hidden lg:flex lg:justify-between lg:items-center lg:w-full lg:ml-6">
                    <div className="flex space-x-4 ml-7">
                      {navigation.map((item) => (
                        <a
                          key={item.id}
                          href={item.href}
                          className={classNames(
                            item.current ? 'transform hover:scale-110 duration-500 text-primary' : 'text-white hover:text-palette-500 transform hover:scale-105 duration-500',
                            'rounded-md px-3 py-2 text-base font-medium xl:text-lg'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div className='hidden lg:block'>
                      <Switcher7/>      
                    </div>
                      
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="lg:hidden bg-black">
            <div className="space-y-1 px-6 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                key={item.id}
                as="a"
                href={item.href}
                className={classNames(
                  item.current ? 'text-palette-500' : 'text-gray-300 hover:text-palette-500 transform hover:scale-105 duration-500',
                  'block rounded-md px-3 py-2 text-base text-center font-medium bg-accent'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                  >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}