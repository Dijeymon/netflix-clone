/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { Container, Title, Subtitle } from './styles/feature';

export default function Features({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Features.Title = function FeaturesTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Features.Subtitle = function FeaturesSubtitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};
