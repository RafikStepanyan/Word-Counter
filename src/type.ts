export type stateType = {
    text: string,
    letters: string | number,
    words: string | number,
    sentences: string | number,
    color: string;
};

export type colorType = {
    name: string,
    code: string;
};

export type actionType = {
    type: string;
    payload?: string,
};