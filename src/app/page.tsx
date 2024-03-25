'use client';

import { useState } from "react";
import { CreateModal } from "@/components/modals/create-modal";

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  const isModalOpen = () => {
    setIsOpen(true);
  }

  const isModalClose = () => {
    setIsOpen(false);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button className="rounded-lg bg-blue-900 px-5 py-3 text-white"
        onClick={isModalOpen}
      >
        Save Segmanet
      </button>
      {isOpen && <CreateModal isOpen={isOpen} isModalClose={isModalClose} />}
    </main>
  );
}
