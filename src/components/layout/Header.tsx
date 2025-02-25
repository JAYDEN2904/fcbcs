import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';
import { NavItem } from '../../types';
import logo from '../../../assets/Baptist Logo.jpg';

const navigation: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Academics', href: '/academics' },
  { title: 'Blog', href: '/blog' },
  { title: 'Admissions', href: '/admissions' },
  { title: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Faith Community Baptist School Logo" className="h-8" />
          <span className="text-xl font-bold text-gray-900">FCBCS</span>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <NavLink
              key={item.title}
              to={item.href}
              className={({ isActive }) =>
                `text-sm font-semibold leading-6 ${isActive ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
                }`
              }
            >
              {item.title}
            </NavLink>
          ))}
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navigation.map((item) => (
              <NavLink
                key={item.title}
                to={item.href}
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-base font-medium ${isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-900 hover:bg-gray-50 hover:text-blue-600'
                  }`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.title}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}