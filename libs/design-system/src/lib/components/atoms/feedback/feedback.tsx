import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Modal, Note, LoadingWheel } from '../../atoms';
import { Input, Textarea } from '../../molecules/inputs';
import styles from './feedback.module.scss';
import { useForm, SubmitHandler } from "react-hook-form";
import { FeedbackRatings } from './components/feedbackRatings';
import { FormInputs } from './types';
import { MESSAGE_SUCCESS, MESSAGE_FAILURE, FORM_FIELD } from './consts';
import classNames from "classnames";

interface FeedbackProps {
  switchModalButtonText?: string;
  onFeedbackSubmit: (data: FormInputs) => Promise<{ success: boolean }>;
  activeUserEmail?: string;
  lastUserRating?: "smile" | "meh" | "frown";
}

export function Feedback({ onFeedbackSubmit, activeUserEmail, switchModalButtonText, lastUserRating }: FeedbackProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeFeedbackRating, setActiveFeedbackRating] = useState<string | null>(lastUserRating || null);
  const [submitStatus, setSubmitStatus] = useState<{ success?: boolean, message?: string }>({});
  const modalWrapperRef = useRef<HTMLDivElement>(null);
  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<FormInputs>();
  const feedbackRating = watch("feedbackRating");

  const toggleModal = useCallback(() => {
    setModalOpen(prev => !prev);
  }, []);

  const handleFormSubmit: SubmitHandler<FormInputs> = useCallback(async (data) => {
    setIsSubmitting(true);
    try {
      const response = await onFeedbackSubmit(data);
      setSubmitStatus({
        success: response.success,
        message: response.success ? MESSAGE_SUCCESS : MESSAGE_FAILURE,
      });
      setTimeout(() => {
        setModalOpen(false);
      }, 5000);
    } catch {
      setSubmitStatus({
        success: false,
        message: MESSAGE_FAILURE,
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [onFeedbackSubmit]);

  const handleFeedbackRatingChange = useCallback(async (value: string) => {
    setActiveFeedbackRating(value);

    if (!switchModalButtonText) {
      handleFormSubmit({email: activeUserEmail, feedbackRating: value, message: undefined})
    }
  }, [handleSubmit, handleFormSubmit, switchModalButtonText, setValue, activeUserEmail]);



  const handleFeedbackOutsideClick = useCallback((event: MouseEvent) => {
    if (modalWrapperRef.current && !modalWrapperRef.current.contains(event.target as Node) && isModalOpen) {
      setModalOpen(false);
      setSubmitStatus({});
    }
  }, [isModalOpen]);

  useEffect(() => {
    if (activeFeedbackRating !== null) {
      setValue("feedbackRating", activeFeedbackRating, { shouldValidate: true, shouldDirty: true });
    }
  }, [activeFeedbackRating, setValue]);

  useEffect(() => {
    document.addEventListener("click", handleFeedbackOutsideClick);
    return () => document.removeEventListener("click", handleFeedbackOutsideClick);
  }, [handleFeedbackOutsideClick]);

  const renderModalContent = useCallback(() => {
    if (isSubmitting) {
      return <Note type="warning" action={<LoadingWheel size={3}/>}>Zapisuję...</Note>;
    }

    if (submitStatus.success === undefined) {
      return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.formFeedback}>
          {!activeUserEmail && (
            <Input
              placeholder="Adres email"
              errorMessage={errors.email?.message}
              {...register('email', FORM_FIELD.email)}
              type="email"
            />
          )}
          {switchModalButtonText && (
            <Textarea
              placeholder="Opisz swoje przemyślenia"
              errorMessage={errors.message?.message}
              {...register('message', FORM_FIELD.message)}
            />
          )}
          <div className={styles.footerModalFeedback}>
            <FeedbackRatings
              feedbackRating={feedbackRating}
              handleFeedbackRatingChange={handleFeedbackRatingChange}
              register={register}
            />
            {switchModalButtonText && <button className={classNames("btn", styles.btnSubmitFeedback)} type="submit">Wyślij</button>}
            {!!errors.feedbackRating?.message && <Note type="warning" className={styles.wrapperRatingNoteFeedback} fill>{errors.feedbackRating?.message}</Note>}
          </div>
        </form>
      );
    }

    const noteType = submitStatus.success ? "success" : "error";
    return <Note type={noteType}>{submitStatus.message}</Note>;
  }, [isSubmitting, submitStatus.success, handleSubmit, handleFormSubmit, register, errors, feedbackRating, handleFeedbackRatingChange, FORM_FIELD, activeUserEmail, switchModalButtonText]);

  return (
    <div className={styles.wrapperFeedback} ref={modalWrapperRef}>
      <div className={styles.wrapperModalFeedback}>
        <Modal open={isModalOpen} className={styles.modalFeedback}>
          {renderModalContent()}
        </Modal>
      </div>
      {switchModalButtonText ? (
        <button className="btn" onClick={toggleModal}>
          {switchModalButtonText}
        </button>
      ) : (
        <FeedbackRatings
          feedbackRating={feedbackRating}
          handleFeedbackRatingChange={handleFeedbackRatingChange}
          register={register}
        />
      )}
    </div>
  );
}
