
import React,{forwardRef} from 'react';

function List(props,ref)
{
    return(
        <div>
            <input type="text" ref={ref}   />
        </div>
    )
}
export default forwardRef(List);