const initialState = {
    snackbarMenu: {
        open: false,
        transition: null,
        title: '',
        recommendation: 0,
        leveltext: '',
        levelpercent: 0,
        traitid: '',
    }
    
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {      
        case 'SET_SNACKBAR_MENU':
            return { ...state, snackbarMenu: action.snackbarMenu };

        default:
            return state;
    }
}

export { homeReducer as default }
