// icons
import {
  FaXTwitter,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from 'react-icons/fa6';

const SocialMediaIcon = ({ id }: { id: string }) => {
  switch (id.toLowerCase()) {
    case 'x':
      return <FaXTwitter />;
    case 'instagram':
      return <FaInstagram />;
    case 'facebook':
      return <FaFacebook />;
    case 'youtube':
      return <FaYoutube />;
    default:
      return <></>;
  }
};

export default SocialMediaIcon;
