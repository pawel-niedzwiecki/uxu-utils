import styles from './avatarGroup.module.scss';
import { AvatarGroupProps } from "./types";
import { Avatar } from '../../atoms';
import classnames from "classnames";

export function AvatarGroup({ members = [], size, className }: AvatarGroupProps) {
  return (
    <ul className={classnames(styles.wrapper, className)}>
      {members.map(({ avatar, title }, index) => (
        <li key={index}>
          <Avatar size={size} avatar={avatar} title={title} />
        </li>
      ))}
    </ul>
  );
}
