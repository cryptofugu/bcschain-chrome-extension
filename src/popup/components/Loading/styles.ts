import { StyleRulesCallback, Theme } from '@material-ui/core';

const styles: StyleRulesCallback = (theme: Theme) => ({
  root: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 999999,
    background: '#faede3',
    transition: 'opacity 1s;',
    '&.loading': {
      opacity: 1,
      display: 'block',
    },
    '&.notLoading': {
      opacity: 0,
      display: 'none',
    },
  },
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    display: 'flex !important',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: theme.font.md,
    color: theme.palette.text.primary,
    marginBottom: '6px',
  },
  anim9: {
    width: '160px',
    height: '6px',
    background: 'linear-gradient(to right, #BB9F89, #BB9F89 30%, #27262E 10%)',
    animation: 'anim9 1s linear infinite',
  },
  '@keyframes anim9': {
    to: { backgroundPosition: '160px' },
  },
});

export default styles;
