import styled, {css} from 'styled-components';
import {SpecialProps} from './commponent.loading.wheel.props'

export const Wrapper = styled.div<SpecialProps>`
  ${({theme: {space, radii}, size}) => css`
    display: flex;
    width: ${size}rem;
    height: ${size}rem;
    position: relative;

    span {
      width: 24%;
      height: 8%;
      display: block;
      margin: ${space.small};
      border-radius: ${radii.default};
      background-color: var(--uxu-color-primary-accent6);
      animation-name: loading-dots_blink;
      animation-duration: 1.4s;
      animation-fill-mode: both;
      animation-iteration-count: infinite;

      height: 8%;
      left: -10%;
      position: absolute;
      top: -3.9%;
      width: 24%;

      &:nth-child(1){
        transform: rotate(0deg) translate(146%);
        animation-delay: -1.2s;
      }

      &:nth-child(2){
        transform: rotate(30deg) translate(146%);
        animation-delay: -1.1s;
      }

      &:nth-child(3){
        transform: rotate(60deg) translate(146%);
        animation-delay: -1s;
      }

      &:nth-child(4){
        transform: rotate(90deg) translate(146%);
        animation-delay: -0.9s;
      }

      &:nth-child(5){
        transform: rotate(120deg) translate(146%);
        animation-delay: -0.8s;
      }

      &:nth-child(6){
        transform: rotate(150deg) translate(146%);
        animation-delay: -0.7s;
      }


      &:nth-child(7){
        transform: rotate(180deg) translate(146%);
        animation-delay: -0.6s;
      }

      &:nth-child(8){
        transform: rotate(220deg) translate(146%);
        animation-delay: -0.5s;
      }

      &:nth-child(9){
        transform: rotate(250deg) translate(146%);
        animation-delay: -0.4s;
      }

      &:nth-child(10){
        transform: rotate(280deg) translate(146%);
        animation-delay: -0.3s;
      }

      &:nth-child(11){
        transform: rotate(330deg) translate(146%);
        animation-delay: -0.2s;
      }

      &:nth-child(12){
        transform: rotate(360deg) translate(146%);
        animation-delay: -0.1s;
      }

    }

    @keyframes loading-dots_blink {
      0% {
        opacity: 1
      }
      to {
        opacity: 0.15
      }
    }
  `}
`
