import { componentsTheme as base } from './baseTheme';
import { createMuiTheme } from '@material-ui/core/styles';

// Tema principal
export const themePrimary = {
    mui: createMuiTheme({
        overrides: {
            MuiSwitch: {
                root: {
                    height: '48px'
                },
                switchBase: {
                    top: '5px',
                    left: '5px',
                    color: base.colors.primary.light,
                    '&$checked': {
                        transform: 'translateX(26%)'
                    }
                },
                track: {
                    backgroundColor: base.colors.background.light,
                    height: '24px',
                    borderRadius: '12px'
                },
                colorPrimary: {
                    color: base.colors.primary.main,
                    '&$checked': {
                        color: base.colors.primary.light
                    }
                }
            },
            MuiChip: {
                root: {
                    fontWeight: base.typo.fontWeightSemiBold
                },
                colorSecondary: {
                    color: base.colors.secondary.main,
                    backgroundColor: base.colors.background.light
                },
                clickableColorSecondary: {
                    '&:hover': {
                        color: base.colors.primary.contrastText,
                        backgroundColor: base.colors.primary.main
                    },
                    '&:focus': {
                        color: base.colors.primary.contrastText,
                        backgroundColor: base.colors.primary.main
                    }
                }
            },
            MuiInputAdornment: {
                root: {
                    'white-space': `nowrap`
                }
            },
            MuiPrivateTabIndicator: {
                root: {
                    boxShadow: `0 0 8px ${base.colors.primary.main}`
                }
            },
            MuiDialog: {
                paper: {
                    margin: 24
                }
            },
            MuiDrawer: {
                paper: {
                    '-webkit-overflow-scrolling': 'auto',
                    background: `linear-gradient(to bottom, ${
                        base.colors.background.dark
                    } 0%, ${base.colors.background.dark} 100%)`
                }
            },
            MuiDialogTitle: {
                root: {
                    padding: 16
                }
            },
            MuiDialogContent: {
                root: {
                    padding: '0 16px 16px'
                }
            },
            MuiButton: {
                root: {
                    color: '#fff'
                },
                outlined: {
                    borderTopLeftRadius: base.spacing.unit,
                    borderBottomRightRadius: base.spacing.unit
                },
                containedPrimary: {
                    color: base.colors.primary.contrastText
                }
            },
            MuiSnackbarContent: {
                root: {
                    backgroundColor: base.colors.secondary.dark,
                    color: base.colors.common.white
                }
            },
            MuiAppBar: {
                root: {
                    backgroundColor: base.colors.common.transparent,
                    boxShadow: 'none'
                }
            },
            MuiToolbar: {
                regular: {
                    minHeight: 44
                },
                gutters: {
                    paddingLeft: 4,
                    paddingRight: 4
                }
            },
            MuiFormLabel: {
                root: {
                    '&$disabled': {
                        color: base.colors.text.disabled
                    }
                }
            },
            MuiInputBase: {
                root: {
                    '&$disabled': {
                        color: base.colors.text.disabled
                    }
                }
            },
            MuiInput: {
                underline: {
                    '&:before': {
                        borderBottom: '1px solid rgba(255, 255, 255, 0.87)'
                    },
                    '&$disabled': {
                        color: base.colors.text.disabled,
                        '&:before': {
                            borderBottom: `1px solid ${
                                base.colors.text.disabled
                            }`
                        }
                    }
                },
                input: {
                    '&:-webkit-autofill': {
                        '-webkit-text-fill-color': 'rgb(255,255,255)'
                    }
                }
            },
            MuiBottomNavigation: {
                root: {
                    backgroundColor: 'transparent'
                }
            },
            MuiBottomNavigationAction: {
                root: {
                    color: base.colors.common.white,
                    '&$selected': {
                        paddingTop: base.spacing.unit
                    }
                },
                label: {
                    '&$selected': {
                        fontSize: '0.75rem'
                    }
                }
            },
            MuiPaper: {
                rounded: {
                    borderRadius: '10px'
                }
            },
            MuiTypography: {
                h6: {
                    fontWeight: 600
                }
            },
            MuiRadio: {
                root: {
                    color: base.colors.primary.main
                },
                colorSecondary: {
                    '&$checked': {
                        color: base.colors.primary.main
                    }
                }
            },
            MuiFormControl: {
                marginNormal: {
                    marginTop: base.spacing.unit
                }
            },
            MuiSwitchBase: {
                root: {
                    padding: base.spacing.unit / 2,
                    margin: base.spacing.unit
                }
            },
            MuiSlider: {
                root: {
                    position: 'relative',
                    pointerEvents: 'none'
                },
                thumb: {
                    pointerEvents: 'all',
                    width: base.spacing.unit * 5,
                    height: base.spacing.unit * 5,
                    backgroundColor: 'transparent',
                    boxShadow: 'none',

                    '&:after': {
                        content: '""',
                        position: 'absolute',
                        top: 'calc(50% - 8px)',
                        left: 'calc(50% - 8px)',
                        borderRadius: '50%',
                        width: base.spacing.unit * 2,
                        height: base.spacing.unit * 2,
                        backgroundColor: '#00dfa8',

                        '&:hover': {
                            boxShadow: '0 0 0 8px rgba(0, 223, 168, 0.16)'
                        }
                    },

                    '&:hover': {
                        boxShadow: 'none'
                    },

                    '&$disabled': {
                        backgroundColor: base.colors.text.disabled,

                        '&:after': {
                            content: '""',
                            position: 'absolute',
                            top: 'calc(50% - 4px)',
                            left: 'calc(50% - 4px)',
                            borderRadius: '50%',
                            width: base.spacing.unit,
                            height: base.spacing.unit,
                            backgroundColor: base.colors.text.disabled
                        }
                    },

                    '&$jumped': {
                        boxShadow: 'none'
                    },
                    '&$activated': {
                        boxShadow: 'none',

                        '&:after': {
                            boxShadow: '0 0 0 16px rgba(0, 223, 168, 0.16)'
                        }
                    }
                },
                track: {
                    pointerEvents: 'all',
                    '&$disabled': {
                        backgroundColor: base.colors.text.disabled
                    }
                }
            }
        },
        props: {},
        palette: {
            type: 'dark',
            ...base.colors.common,
            background: {
                paper: base.colors.background.main,
                default: base.colors.background.dark
            },
            primary: {
                ...base.colors.primary
            },
            secondary: {
                ...base.colors.secondary
            },
            error: {
                ...base.colors.error
            },
            warn: {
                ...base.colors.warn
            },
            text: {
                ...base.colors.text
            }
        },
        typography: {
            useNextVariants: true,
            fontFamily: ['Montserrat', 'sans-serif'].join(','),
            fontSize: base.typo.fontSize
        },
        shape: {
            borderRadius: 0,
            borderRadiusTopLeft: 5,
            borderRadiusBottomRight: 5
        }
    })
};

// TODO: Alinhar com themePrimary assim que finalizado
// Tema utilizado ao mudar para a visualização como um amigo/cliente
export const themeSecondary = {
    mui: createMuiTheme({
        palette: {
            type: 'dark',
            common: {
                black: '#000',
                white: '#fff'
            },
            background: {
                paper: 'rgba(38, 38, 59, 1)',
                default: 'rgba(38, 38, 59, 1)'
            },
            primary: {
                light: '#64eeff',
                main: '#0bbbd0',
                dark: '#008b9f',
                contrastText: 'rgba(0, 0, 0, 1)'
            },
            secondary: {
                light: 'rgba(88, 87, 113, 1)',
                main: 'rgba(46, 46, 70, 1)',
                dark: 'rgba(7, 3, 31, 1)',
                contrastText: '#fff'
            },
            error: {
                light: 'rgba(255, 121, 87, 1)',
                main: 'rgba(237, 68, 44, 1)',
                dark: 'rgba(179, 0, 0, 1)',
                contrastText: 'rgba(0, 0, 0, 1)'
            },
            text: {
                primary: 'rgba(148, 158, 216, 1)',
                secondary: 'rgba(255, 255, 255, 1)',
                disabled: 'rgba(0, 0, 0, 0.38)',
                hint: 'rgba(155, 155, 155, 1)'
            }
        },
        typography: {
            useNextVariants: true,
            fontFamily: ['Montserrat', 'sans-serif'].join(',')
        }
    })
};