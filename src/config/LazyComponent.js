import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function LazyComponent(props){
    const { component, ...rest } = props;
    const ComponentDef=resolveComponent(component);

    return (
        <Suspense fallback={<div>Loading...</div>}>
                {<ComponentDef {...rest} /> || <Outlet />}
        </Suspense>
    )
}

function resolveComponent(component){
    return React.lazy(()=> import (`../view/${component}`));
}