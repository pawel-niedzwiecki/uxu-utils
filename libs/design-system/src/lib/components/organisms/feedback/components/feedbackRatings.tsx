import { Smile, Meh, Frown } from "react-feather";
import { UseFormRegister } from "react-hook-form";
import styles from '../feedback.module.scss';
import { InputRadioIcon } from '../../../molecules/inputs';
import { FormInputs } from '../types';

type Props = {
  feedbackRating: string;
  handleFeedbackRatingChange: (value: string) => void;
  register: UseFormRegister<FormInputs>;
}

export const FeedbackRatings = ({ feedbackRating, handleFeedbackRatingChange, register }: Props) => {
  const feedbackOptions = [
    { value: 'smile', Icon: Smile },
    { value: 'meh', Icon: Meh },
    { value: 'frown', Icon: Frown },
  ];

  return (
    <div className={styles.wrapperRatingFeedback}>
      {feedbackOptions.map(({ value, Icon }) => (
        <InputRadioIcon
          key={value}
          icon={<Icon />}
          value={value}
          checked={feedbackRating === value}
          {...register('feedbackRating', {
            required: "Proszę wybrać jedną z opcji",
          })}
          onChange={() => handleFeedbackRatingChange(value)}
        />
      ))}
    </div>
  );
};
