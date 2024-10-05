import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import PropTypes from 'prop-types';

export default function Dropdown({ onSelect }) {
    const [options, setOptions] = useState('')

    const handleSelect = (value) => {
        setOptions(value);
        if (onSelect) onSelect(value); // Kirim nilai ke parent
    }
    Dropdown.propTypes = {
        onSelect: PropTypes.func,
      };
      
    return (
        <Menu as="div" className="relative text-left w-80 mt-8">
            <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-white hover:text-gray-950 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    {options ? options : "Options"}
                    <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
                </MenuButton>
            </div>
            <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-80 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
                <div className="py-1">
                    <MenuItem>
                        <a
                            onClick={() => handleSelect('Januari')}
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                        >
                            Januari
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a
                            onClick={() => handleSelect('Februari')}
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                        >
                            Februari
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a
                            onClick={() => handleSelect('Maret')}
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                        >
                            Maret
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a
                            onClick={() => handleSelect('April')}
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                        >
                            April
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a
                            onClick={() => handleSelect('Mei')}
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                        >
                            Mei
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a
                            onClick={() => handleSelect('Juni')}
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                        >
                            Juni
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a
                            onClick={() => handleSelect('Juli')} 
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                        >
                            Juli
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a
                            onClick={() => handleSelect('Agustus')}
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                        >
                            Agustus
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a
                            onClick={() => handleSelect('September')}
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                        >
                            September
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a
                            onClick={() => handleSelect('Oktober')}
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                        >
                            Oktober
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a
                            onClick={() => handleSelect('November')}
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                        >
                            November
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a
                            onClick={() => handleSelect('Desember')}
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                        >
                            Desember
                        </a>
                    </MenuItem>
                    
                </div>
            </MenuItems>
        </Menu>
    )
}
