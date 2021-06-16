import { DefaultTheme } from 'styled-components';

export const LIGHT_THEME: Theme = {
  name: 'light',
  background: '#FFF',
  text: '#000',
  headerTitle: '#F2E744',
  headerSubTitle: '#F29F05',
  headerBackground: '#8E58A6',
  headerBackgroundGradient:
    'linear-gradient(90deg, rgba(27,242,221,1) 0%, rgba(82,136,242,1) 35%, rgba(45,44,89,1) 100%)',
  primaryButton: '#F29F05',
  secondaryButton: '#F2D541',
  tertiaryButton: '#F2E744',
};

export const DARK_THEME: Theme = {
  name: 'dark',
  background: '#222',
  text: '#FFF',
  headerTitle: '#2D2C59',
  headerSubTitle: '#4957A6',
  headerBackground: '#1BF2DD',
  headerBackgroundGradient:
    'linear-gradient(90deg, rgba(142,88,166,1) 0%, rgba(242,159,5,1) 35%, rgba(242,231,68,1) 100%)',
  primaryButton: '#5288F2',
  secondaryButton: '#4957A6',
  tertiaryButton: '#2D2C59',
};

export type Theme = {
  name: 'light' | 'dark';
  background: string;
  text: string;
  headerTitle: string;
  headerSubTitle: string;
  headerBackground: string;
  headerBackgroundGradient: string;
  primaryButton: string;
  secondaryButton: string;
  tertiaryButton: string;
};
