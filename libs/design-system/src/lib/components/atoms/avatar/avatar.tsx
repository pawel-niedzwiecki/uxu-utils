
import { User } from 'react-feather';
import Image from 'next/image';
import { AvatarProps } from './types';
import classnames from "classnames";
import styles from './avatar.module.scss';

export function Avatar({ avatar , size = 'default', title = 'avatar' }: AvatarProps) {

  const avatarSize = size !== 'small' && size !== 'large' ? 'default' : size;
  const avatarClassName = classnames(styles.wrapper, styles[avatarSize]);

  return (
    <div className={avatarClassName} title={title}>
      {avatar?.src ? (
        <Image
          fill
          src={avatar.src}
          alt={avatar?.alt || title}
        />
      ) : (
        <User size={avatarSize === 'default' ? 21 : (avatarSize === 'small' ? 15 : 30)} />
      )}
    </div>
  );
}
