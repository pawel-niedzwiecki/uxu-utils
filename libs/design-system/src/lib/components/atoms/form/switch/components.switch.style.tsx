import styled, {css} from 'styled-components'

export const LabelComponent = styled.label`
  width: max-content;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  align-items: center;
`;

export const InputComponent = styled.input`
 opacity: 0;
  width: 0;
  height: 0;

  &:checked + .slider {
    background-color: var(--uxu-color-success-default);
  }

  &:checked + .slider:after {
    transform: translateX(2.25rem);
  }
`;


export const SliderComponent = styled.div`
  width: 5rem;
  height: 2.5rem;
  display: block;
  cursor: pointer;
  position: relative;
  margin-right: var(--uxu-space-small);
  border-radius: var(--uxu-radii-large);
  transition: background-color var(--uxu-motions-slowly);
  background-color: var(--uxu-color-primary-accent3);

  &:after{
    content: "";
    width: 2rem;
    height: 2rem;
    top: 0.25rem;
    left: 0.25rem;
    display: block;
    position: absolute;
    transform: translateX(0.25rem);
    border-radius: var(--uxu-radii-large);
    transition: transform var(--uxu-motions-slowly);
    background-color: var(--uxu-color-primary-background);
  }
`
