import { ViewElement } from "../view/ViewElement";

export type MessageType = string;

export interface Message {
    get type(): MessageType;
}

export interface ShowViewMessage extends Message {
    viewElements: ViewElement[];
}