import { ReactNode } from "react";
import PromoBanner from "../PromoBanner";
import HeaderTop from "../HeaderTop";
import Header from "../Header";
import Navbar from "../Navbar";

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return <>
    <PromoBanner/>
    <HeaderTop/>
    <Header/>
    <Navbar/>
    {children}</>;
}