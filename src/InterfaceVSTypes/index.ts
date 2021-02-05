export interface PartialPointX{
    x:number;
}

export interface Point extends PartialPointX{
    y:number;
}

////

export type PartialPointXType={
 x:number
}

export type PointType=PartialPointXType & {y:number}