import { Facebook, Instagram, Twitter } from 'react-feather';

export const functionSelectIcon = (type: string) => {
  switch (type.toLowerCase()) {
    case 'facebook':
      return <Facebook />;
    case 'twitter':
      return <Twitter />;
    case 'instagram':
      return <Instagram />;
    default:
      return <p>unknown type</p>;
  }
};
