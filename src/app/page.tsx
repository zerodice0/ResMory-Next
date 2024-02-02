"use client"

import { KonstaProvider, Button } from "konsta/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <KonstaProvider theme="ios">
        <Button>Hello</Button>
      </KonstaProvider>
    </main>
  );
}
