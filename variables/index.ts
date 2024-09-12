const variables = {
    // fontes
    primaryFont: 'Poppins',
    secondaryFont: 'PlaywriteCU-Regular',
    terciaryFont: 'NerkoOne-Regular',

    // cores
    white: '#fcfcfc',
    blue: '#5d5de4',
    lightGray: '#d4d4d4',
    regularGray: '#4f5055',
    darkGray: '#2c2d31',
    shadowColor: '#00000025',
};

const flex = (
    direction: string = 'row',
    justify: string = 'auto',
    align: string = 'auto',
    gap: string = '0rem'
) => {
    return `
        display: flex;
        flex-direction: ${direction};
        justify-content: ${justify};
        align-items: ${align};
        gap: ${gap};
    `;
};

export { variables, flex };
