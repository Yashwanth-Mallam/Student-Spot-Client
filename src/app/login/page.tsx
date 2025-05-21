"use client";

import { useState } from "react";
import LoginModal from "../components/layout/LoginModal";

export default function LoginPage() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return <>{isModalOpen && <LoginModal onClose={handleClose} />}</>;
}
