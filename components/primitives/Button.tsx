import { styled } from 'stitches.config'

const Button = styled('button', {
  outline: 'none',
  fontWeight: '$bold',
  fontSize: 16,
  fontFamily: '$button',
  transition: 'background-color 250ms linear',
  gap: '$space$2',
  display: 'inline-flex',
  alignItems: 'center',
  lineHeight: '$3',
  $$focusColor: '$colors$gray12',
  '&:focus-visible': {
    boxShadow: '0 0 0 2px $$focusColor',
  },
  '&:disabled': {
    backgroundColor: '$gray8',
    color: '$gray11',
  },
  '&:disabled:hover': {
    backgroundColor: '$gray8',
    color: '$gray11',
  },
  variants: {
    color: {
      primary: {
        backgroundColor: '$primary9',
        color: '#000',
        '&:hover': {
          backgroundColor: '$secondary8',
        },
      },
      secondary: {
        backgroundColor: '$secondary4',
        color: 'white',
        '&:hover': {
          backgroundColor: '$secondary5',
        },
      },
      tertiary: {
        backgroundColor: 'transparent',
        outline: '2px solid $secondary8',
        '&:hover': {
          backgroundColor: '$secondary8',
          color: '#000',
        },
      },
      gray3: {
        backgroundColor: '$gray3',
        color: '$gray12',
        '&:hover': {
          backgroundColor: '$gray4',
        },
      },
      gray4: {
        backgroundColor: '$gray4',
        color: '$gray12',
        '&:hover': {
          backgroundColor: '$gray5',
        },
      },
      white: {
        backgroundColor: '$whiteA12',
        color: '$blackA12',
        '&:hover': {
          backgroundColor: '$primary9',
        },
      },
      red: {
        backgroundColor: '$red3',
        color: '$red12',
        '&:hover': {
          backgroundColor: '$red4',
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        p: 0,
      },
    },
    corners: {
      square: {
        borderRadius: '$base',
      },
      rounded: {
        borderRadius: '$lg',
      },
      pill: {
        borderRadius: 99999,
      },
      circle: {
        borderRadius: '99999px',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
    size: {
      none: {},
      xs: {
        p: '$space$3',
        lineHeight: '$2',
        minHeight: 40,
      },
      small: {
        px: '$space$3',
        py: '$space$4',
        lineHeight: '$2',
        minHeight: 44,
      },
      medium: {
        px: '$space$5',
        py: '$space$3',
        minHeight: 44,
      },
      large: {
        px: '$space$5',
        py: '$space$4',
        minHeight: 52,
      },
    },
  },
  compoundVariants: [
    {
      size: 'xs',
      corners: 'circle',
      css: {
        height: 40,
        width: 40,
        p: 0,
      },
    },
    {
      size: 'small',
      corners: 'circle',
      css: {
        height: 44,
        width: 44,
        p: 0,
      },
    },
    {
      size: 'medium',
      corners: 'circle',
      css: {
        height: 44,
        width: 44,
        p: 0,
      },
    },
    {
      size: 'large',
      corners: 'circle',
      css: {
        height: 52,
        width: 52,
        p: 0,
      },
    },
  ],
  defaultVariants: {
    color: 'primary',
    corners: 'rounded',
    size: 'medium',
  },
})

export default Button
