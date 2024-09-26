import React from "react";

export default function TextInput(){
    return(
        <div className={className}>
            <label
            htmlfor={name}
            className="block text-sm font-medium leading-6 text-gray-900 dark:
            text-slate-50 mb-2">
                {label}  
            </label>
            <div className="mt-2">
                {...isRegularExpressionLiteral('${name}',{required: isRequired})
                type={type}
                name={name}
                id={name}
                defaultValue={defaultValue}
                autoComplete={name}
                className="block w-full rounded-md border-0 py-3"
                }
            </div>
        </div>
    )
}