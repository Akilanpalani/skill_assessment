'use client';

import { useState } from "react";
import CreateModal  from "@/pages/modal/create-modal";

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  const isModalOpen = () => {
    setIsOpen(true);
  }

  const isModalClose = () => {
    setIsOpen(false);
  }

  return (
    <main className="flex min-h-full flex-col items-center justify-between p-24">
      <button className="rounded-lg bg-green-600 px-5 py-3 text-white"
        onClick={isModalOpen}
      >
        Save Segmanet
      </button>
      {isOpen && <CreateModal isOpen={isOpen} isModalClose={isModalClose} />}
    </main>
  );
}
