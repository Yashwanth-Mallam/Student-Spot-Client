"use client";

import { useState } from "react";
import SignupModal from "../components/layout/SingupModal";

export default function SignupPage() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return <>{isModalOpen && <SignupModal onClose={handleClose} />}</>;
}
