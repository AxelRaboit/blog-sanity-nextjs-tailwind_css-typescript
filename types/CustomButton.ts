import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    isLoading: boolean;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}