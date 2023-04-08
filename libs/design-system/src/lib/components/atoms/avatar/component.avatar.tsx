import { Wrapper } from './component.avatar.style';
import { User } from 'react-feather';
import Image from 'next/legacy/image';
import { LoadingLine } from './..';
import { Props } from './component.avatar.types';


function componentAvatar(size: string) {
  switch (size) {
    case 'small' :
      return 30;
    case 'large' :
      return 60;
    default:
      return 42;
  }
}

export const Avatar: Props = ({ src, size = 'default', name = 'avatar', isLoading = false }, props) => {
  const setSize = componentAvatar(size);

  if (isLoading) return (
    <Wrapper {...props} size={setSize}>
      <LoadingLine height={`${setSize}px`} />
    </Wrapper>
  );

  return (
    <Wrapper  {...props} size={setSize}>
      {src ? (
        <Image
          src={src}
          alt={name}
          width={setSize}
          height={setSize}
          layout='fill'
          objectFit='cover'
        />
      ) : (
        <User />
      )}
    </Wrapper>
  );
};
