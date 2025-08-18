import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/56936197477?text=Hola%20vengo%20de%20la%20página%20de%20Printiverse%20y%20quiero%20cotizar."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
