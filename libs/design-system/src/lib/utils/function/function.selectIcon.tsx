import { Facebook, Instagram, Link, ShoppingCart, Twitter, Youtube } from 'react-feather';

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
    default:
      return false;
  }
};
