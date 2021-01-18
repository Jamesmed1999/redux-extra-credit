export const increment = () => {
    return {
        type: 'INCREMENT'
    };
}; 

export const decrment = () => {
    return {
        type: 'DECRMENT'
    };
}; 

export const clear = () => {
    return {
        type: 'CLEAR'
    };
}; 

export const five = (num) => {
    return {
        type: 'FIVE',
        payload: num
    };
}; 