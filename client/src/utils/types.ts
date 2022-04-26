import userState from '../store/userState';

export type User = {
    email: string,
    id: number,
    role: string
};

export type ContextType = {
    user?: typeof userState
}