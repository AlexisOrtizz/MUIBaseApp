import { Theme, Components, alpha } from '@mui/material/styles';
import { bgDefault, gray } from '../themePrimitives';
// import { gray } from '../themePrimitives';

export const othersCustomizations: Components<Theme> = {
  // icons
  // MuiSvgIcon: {
  //   styleOverrides: {
  //     root: ({ theme }) => {
  //       return {
  //         color: theme.palette.text.secondary,
  //         ...theme.applyStyles('dark', {
  //         color: gray[400],
  //         }),
  //         variants: [
  //           {
  //             props: {
  //               variant: 'main'
  //             },
  //             style: {
  //               color: (theme).palette.primary.main,
  //               // ...theme.applyStyles('dark', {
  //               //   color: '',
  //               // }),
  //             }
  //           }
  //         ]
  //       }
  //     },
  //   },
  // },

  // Select styles
  MuiSelect: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
        ...theme.applyStyles('dark', {
          backgroundColor: 'hsl(220, 30%, 7%)',
        }),
      }),
    },
  },
  MuiAvatar: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.text.secondary,
        backgroundColor: 'transparent',
        border: `1px solid ${(theme).palette.divider}`,
        ...(theme).applyStyles('dark', {
          color: gray[400],
        }),
      }),
    },
  },
};