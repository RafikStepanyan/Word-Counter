import { actionType, colorType, stateType } from '../type';

export const initialState: stateType = {
    text: '',
    letters: '',
    words: '',
    sentences: '',
    color: '#00BFFF'
};

export const colors: colorType[] = [
    {
        name: 'deepskyblue',
        code: '#00BFFF'
    },
    {
        name: 'deeppink',
        code: '#FF1493'
    },
    {
        name: 'chartreuse',
        code: '#7FFF00'
    },
    {
        name: 'darkviolet',
        code: '#9400D3'
    },
];

export const reducer = (state: stateType, action: actionType): stateType => {
    switch (action.type) {
        case 'count':
            const letterCount = action.payload?.replace(/[^a-zA-Z]/g, "").length;
            const wordCount = action.payload?.split(/\s+/).filter(word => word !== "").length;
            const sentenceCount = action.payload?.split(/[.!?]+/).filter(sentence => sentence !== "").length;
            if (action.payload && letterCount && wordCount && sentenceCount) {
                return {
                    ...state,
                    text: action.payload,
                    letters: letterCount,
                    words: wordCount,
                    sentences: sentenceCount,
                };
            }
            return ...state;
        case 'reset':
            return {
                ...state,
                text: '',
                letters: '',
                words: '',
                sentences: '',
            };
        case 'color':
            if (action.payload) {
                return {
                    ...state,
                    color: action.payload
                };
            }
            return {
                ...state
            };
        default:
            return ...state;
    }
};
