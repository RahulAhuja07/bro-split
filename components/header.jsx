'use client';//because we have used hooks in this component
import {useStoreUser} from "@/hooks/use-store-user";
import React from 'react';
import { SignedOut, SignInButton, SignUpButton, SignedIn, UserButton } from '@clerk/nextjs';
import { BarLoader } from 'react-spinners';

const Header = () => {
    const {isLoading} = useStoreUser();

  return (
    <header className="fixed top-0 w-full border-b bg-white/95 backdrop-blur z-50
     supports-[backdrop-filter]:bg-white/60">
        <nav>
         
        <SignedOut>
            <SignInButton/>
            <SignUpButton/>
        </SignedOut>
        <SignedIn>
            <UserButton/>
        </SignedIn>
           
        </nav>

        {isLoading && <BarLoader width={"100%"} color= "#3b82f6" />}
    </header>
  );
};

export default Header;