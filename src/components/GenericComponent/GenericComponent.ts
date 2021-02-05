export interface IProps<T>{
 items:T[];
 renderItems:(item:T)=>React.ReactNode;

}
 const List=<T>(props:IProps<T>)=>{
     const {items,renderItems}=props;

     return   items.map(renderItems)

 }
