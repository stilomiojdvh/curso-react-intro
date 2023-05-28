import React from "react";
import { TodoIcon } from './TodoIcon';

function CompleteIcon({completed, OnComplete}){
    return (
        <TodoIcon type="check" color={completed?'green':'gray'} onClick={OnComplete} />
    );
}

export { CompleteIcon };