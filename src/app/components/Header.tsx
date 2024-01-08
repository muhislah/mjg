'use client';

import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Select, SelectItem, DropdownMenu, DropdownItem, Dropdown, DropdownTrigger } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { links } from "@/configs/links";
import { usePathname } from "next/navigation";
import { useLang } from "@/lang/helper";

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const pathname = usePathname()
    const { langCode, setLangCode, lang } = useLang()

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className="shadow-md">
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <Link href="/">
                    <NavbarBrand className="flex flex-col items-start">
                        <div className="flex flex-row items-center">
                            <p className="font-bold text-2xl text-stone-700">{lang['oud']}</p>
                            <FontAwesomeIcon icon={faLeaf} className="text-stone-700 text-xl ml-2" />
                        </div>
                        <span className="text-xs text-gray-600">By Muji Jaya Gaharu</span>
                    </NavbarBrand>
                </Link>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {
                    links.map((link) => (
                        <NavbarItem key={link.url} isActive={link.url === pathname}>
                            <Link className="text-stone-700" href={link.url}>
                                {link.name}
                            </Link>
                        </NavbarItem>
                    ))
                }
            </NavbarContent>
            <Dropdown>

                <DropdownTrigger>
                    <Button
                        variant="bordered"
                        className="capitalize"
                    >
                        {langCode}
                    </Button>
                </DropdownTrigger>
                <DropdownMenu
                    aria-label="Change Language"
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={langCode}
                    onSelectionChange={(e) => setLangCode(Array.from(e)[0] as string)}
                >
                    <DropdownItem key="en" value="en">English</DropdownItem>
                    <DropdownItem key="id" value="id">Indonesia</DropdownItem>
                    <DropdownItem key="ar" value="ar">Arabic</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <NavbarMenu>
                {links.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full text-stone-700"
                            href={item.url}
                            size="lg"
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
