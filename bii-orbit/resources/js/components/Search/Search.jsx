import React, { useState, useEffect } from "react";
import useNewsRequestForm from "../Request/News/useNewsRequestForm.jsx";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline/index.js";

export default function Search({ t, id, placeholder, name, route, clearRoute, params, updateParams }) {
    const {values, handleSubmit, setValues, handleFieldChangeGeneric } = useNewsRequestForm(route);
    const [searchParam, setSearchParam] = useState(new URLSearchParams(document.location.search).get('search'));

    useEffect(() => {
        const params = new URLSearchParams(document.location.search);
        setSearchParam(params.get('search'));
    }, [document.location.search]);

    return (
        <>
            <form className="relative" onSubmit={handleSubmit}>
                <MagnifyingGlassIcon
                    aria-hidden="true"
                    className="pointer-events-none ml-3 absolute inset-y-0 left-0 h-full w-5 text-primary-hover"
                />

                <div>
                    <input
                        id={id}
                        type="text"
                        name={name}
                        value={values.search || ''}
                        placeholder={placeholder}
                        onChange={(e) => handleFieldChangeGeneric(e, 'input')}
                        className="bg-white pl-10 rounded-md border border-stroke block h-full w-full py-2 pr-0 text-primary placeholder:text-primary-hover focus:ring-0 sm:text-sm text-xs clear-none outline-none"
                    />
                </div>
            </form>

            {/*<div>*/}
            {/*    {searchParam && (*/}
            {/*        <>*/}
            {/*            <span className="chip__small inline-flex items-center space-x-1">*/}
            {/*                {searchParam}*/}

            {/*                <a href={clearRoute}>*/}
            {/*                    <XMarkIcon*/}
            {/*                        className="pl-1 icon__small hover:cursor-pointer hover:text-primary-hover transition-all"*/}
            {/*                    />*/}
            {/*                </a>*/}
            {/*            </span>*/}
            {/*        </>*/}
            {/*    )}*/}

            {/*    <ChipFilter*/}
            {/*        t={t}*/}
            {/*        params={params}*/}
            {/*        updateParams={updateParams}*/}
            {/*    />*/}
            {/*</div>*/}
        </>
    );
}
