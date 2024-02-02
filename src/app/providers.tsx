"use client"

import { KonstaProvider, Navbar } from "konsta/react";
import type { PropsWithChildren } from "react";

const Providers = ({children}: PropsWithChildren) => {
  return <KonstaProvider>
    <Navbar>Hello</Navbar>
    {children}
  </KonstaProvider>
}

export default Providers;