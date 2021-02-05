import { ButtonHTMLAttributes } from "react";

export enum ButtonType{
    SUBMIT='submit',
    BUTTON='button',
    RESET='reset'
}

export enum VARIANT{
  PRIMARY='primary',
  SECONDARY='secondary'
}
export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{
  variant?:VARIANT.PRIMARY|VARIANT.SECONDARY
}


// or 
export interface IButtonInterface{
    text:string;
    type:ButtonType.SUBMIT|ButtonType.BUTTON|ButtonType.RESET;
    action :(e:any)=>void;
    variant?:VARIANT.PRIMARY|VARIANT.SECONDARY
}