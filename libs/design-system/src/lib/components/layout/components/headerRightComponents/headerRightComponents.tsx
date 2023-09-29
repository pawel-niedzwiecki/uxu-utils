import React from 'react';
import { Feedback } from '../../../index';
import type { HeaderRightComponentsProps } from './types';

export function HeaderRightComponents( { modalAlignment, switchModalButtonText }: HeaderRightComponentsProps) {
  return (
    <Feedback
      modalAlignment={modalAlignment}
      switchModalButtonText={switchModalButtonText}
      onFeedbackSubmit={async (data: { email?: string; message?: string; feedbackRating: string; }) => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve({ success: true });
          }, 5000);
        });
      }}
    />
  );
}
