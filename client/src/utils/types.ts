import userState from '../store/userState';

export type User = {
    email: string,
    id: number,
    role: string,
    username: string
};

export type ContextType = {
    user?: typeof userState
}