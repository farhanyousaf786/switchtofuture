import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = '9292318782';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a 
      href={whatsappUrl}
      className="chat-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us"
    >
      <IoChatbubbleEllipsesOutline />
      <span className="tooltip">Chat with us</span>
    </a>
  );
};

export default WhatsAppButton;
