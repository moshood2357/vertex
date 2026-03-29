import React from "react";

import Image from "next/image";

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/2349038979339?text=Hello!%20We%20are%20Vertex%20Prime%20Digital.%20We%20deliver%20high-performance%20digital%20solutions%20to%20elevate%20brands,%20accelerate%20growth,%20and%20create%20measurable%20impact.%20Our%20services%20include%20Website%20Design%20%26%20Development,%20E-Commerce%20Solutions,%20UI/UX%20Design,%20SEO%20%26%20Optimization,%20Website%20Maintenance,%20and%20Custom%20Digital%20Solutions.%20Let's%20discuss%20how%20we%20can%20help%20your%20business%20grow!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-[9999] w-[50] h-[50] rounded-full flex items-center justify-center bg-[#25D366] shadow-lg hover:scale-110 transition-transform"
    >
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        width={300}
        height={300}
        className="w-[35px] h-[35px]"
      />
    </a>
  );
};

export default WhatsAppButton;
