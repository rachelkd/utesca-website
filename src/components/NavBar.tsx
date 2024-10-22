'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from '@/components/ui/sheet';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About Us' },
        { href: '/projects', label: 'Projects' },
        { href: '/events', label: 'Events' },
    ];

    const closeMenu = () => setIsOpen(false);

    const NavItems = ({ onClick = () => {} }: { onClick?: () => void }) => (
        <>
            {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                    <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                            onClick={() => {
                                onClick();
                                closeMenu();
                            }}
                        >
                            {item.label}
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            ))}
        </>
    );

    return (
        <nav className='flex items-center justify-between px-4 py-2 bg-white shadow-md'>
            <div className='flex items-center'>
                <Link href='/'>
                    <div className='w-[100px] h-[40px] bg-gray-200 flex items-center justify-center'>
                        UTESCA
                    </div>
                </Link>
            </div>

            {/* Desktop menu */}
            <div className='hidden md:block'>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavItems />
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            {/* Mobile menu */}
            <div className='md:hidden'>
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button
                            className='bg-transparent'
                            variant='ghost'
                            size='icon'
                            aria-label='Menu'
                        >
                            <Menu className='h-6 w-6' />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side='top' className='bg-background'>
                        <SheetHeader />
                        <nav className='flex flex-col space-y-4 mt-4'>
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className='text-lg font-normal hover:text-accent'
                                    onClick={closeMenu}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
};

export default NavBar;