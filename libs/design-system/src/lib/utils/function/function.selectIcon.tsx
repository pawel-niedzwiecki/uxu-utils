import { Eye, Facebook, Instagram, Link, MessageSquare, ShoppingCart, Smile, Twitter, Youtube } from 'react-feather';


export const functionSelectIcon = (type: string, size: number) => {
  switch (type.toLowerCase()) {
    case 'shop':
      return <ShoppingCart size={size} />;
    case 'page':
      return <Link size={size} />;
    case 'facebook':
      return <Facebook size={size} />;
    case 'youtube':
      return <Youtube size={size} />;
    case 'twitter':
      return <Twitter size={size} />;
    case 'instagram':
      return <Instagram size={size} />;
    case 'smile':
      return <Smile size={size} />;
    case 'messagesquare':
      return <MessageSquare size={size} />;
    case 'eye':
      return <Eye size={size} />;
    default:
      return false;
  }
};
