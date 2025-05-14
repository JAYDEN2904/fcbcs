import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, GraduationCap, ChevronDown } from 'lucide-react';
import { NavItem } from '../../types';
import logo from '../../../assets/Baptist Logo.jpg';

const navigation: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Academics', href: '/academics' },
  { title: 'Departments', href: '/departments' },
  { title: 'Admissions', href: '/admissions' },
  { title: 'Contact', href: '/contact' },
];

const departments = [
  { title: 'Nursery & Kindergarten', href: '/departments/nursery-kindergarten' },
  { title: 'Primary School', href: '/departments/primary' },
  { title: 'Junior High School', href: '/departments/junior-high' },
  { title: 'Senior High School', href: '/departments/senior-high' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [departmentsOpen, setDepartmentsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Faith Community Baptist School Logo" className="h-8" />
          <span className="text-xl font-bold text-[#E53935]">FCBCS</span>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            item.title === 'Departments' ? (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => setDepartmentsOpen(true)}
                onMouseLeave={() => setDepartmentsOpen(false)}
              >
                <button
                  className="flex items-center gap-1 text-sm font-semibold leading-6 text-gray-900 hover:text-[#E53935]"
                >
                  {item.title}
                  <ChevronDown className="h-4 w-4" />
                </button>
                
                {departmentsOpen && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="py-1">
                        {departments.map((dept) => (
                          <NavLink
                            key={dept.title}
                            to={dept.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#E53935]"
                          >
                            {dept.title}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.title}
                to={item.href}
                className={({ isActive }) =>
                  `text-sm font-semibold leading-6 ${isActive ? 'text-[#E53935]' : 'text-gray-900 hover:text-[#E53935]'}`
                }
              >
                {item.title}
              </NavLink>
            )
          ))}
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:text-[#E53935]"
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
              item.title === 'Departments' ? (
                <div key={item.title}>
                  <button
                    className="w-full text-left rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-[#E53935]"
                    onClick={() => setDepartmentsOpen(!departmentsOpen)}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.title}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${departmentsOpen ? 'rotate-180' : ''}`} />
                    </div>
                  </button>
                  {departmentsOpen && (
                    <div className="pl-4 space-y-1">
                      {departments.map((dept) => (
                        <NavLink
                          key={dept.title}
                          to={dept.href}
                          className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-[#E53935]"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {dept.title}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.title}
                  to={item.href}
                  className={({ isActive }) =>
                    `block rounded-md px-3 py-2 text-base font-medium ${isActive
                      ? 'bg-[#E53935]/10 text-[#E53935]'
                      : 'text-gray-900 hover:bg-gray-50 hover:text-[#E53935]'
                    }`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </NavLink>
              )
            ))}
          </div>
        </div>
      )}
    </header>
  );
}