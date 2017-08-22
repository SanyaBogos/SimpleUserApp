declare interface UserData {
    id?: UserId;
    name?: string;
    surname?: string;
    age?: number;
    gender?: GenderType;
    isNew?: boolean
}

declare interface TextValue {
    text: string;
}

declare type UserId = number;

declare type GenderType = 'Male' | 'Female' | null;

declare type UsersStoreState = UserData[];

declare type CurrentUserStoreState = UserData;
