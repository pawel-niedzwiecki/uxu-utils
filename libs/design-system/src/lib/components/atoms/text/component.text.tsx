import { Props } from './component.text.props';
import { B, H1, H2, H3, H4, H5, H6, I, P, Strong } from './component.text.style';

export const Text: Props = ({ type, children, ...args }, props) => {
  switch (type) {
    case 'h1':
      return (<H1 {...args} {...props}>{children}</H1>);
    case 'h2':
      return (<H2 {...args} {...props}>{children}</H2>);
    case 'h3':
      return (<H3 {...args} {...props}>{children}</H3>);
    case 'h4':
      return (<H4 {...args} {...props}>{children}</H4>);
    case 'h5':
      return (<H5 {...args} {...props}>{children}</H5>);
    case 'h6':
      return (<H6 {...args} {...props}>{children}</H6>);
    case 'i':
      return (<I {...args} {...props}>{children}</I>);
    case 'b':
      return (<B {...args} {...props}>{children}</B>);
    case 'strong':
      return (<Strong {...args} {...props}>{children}</Strong>);
    default:
      return (<P {...args} {...props}>{children}</P>);
  }
};
