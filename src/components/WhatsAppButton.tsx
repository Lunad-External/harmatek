import whatsappIcon from "@/assets/images/whatsapp.png";

const WhatsAppButton = () => {
  const phoneNumber = "966559471701";
  const defaultMessage = encodeURIComponent(
    "Hi, I’d like to know more about your products and services."
  );

  const href = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full shadow-lg transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
    >
      <img
        src={whatsappIcon}
        alt="Chat with us on WhatsApp"
        className="h-full w-full rounded-full object-contain"
        loading="lazy"
      />
    </a>
  );
};

export default WhatsAppButton;

