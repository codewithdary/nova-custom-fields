import React from "react";
import {Avatar} from "@material-tailwind/react";

export function AvatarRow({ title, url, firstname }) {
    return (
        <dl className="border-b border-border-color">
            <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 w-11/12 mx-auto">
                <dt className="text-sm font-medium leading-6 text-primary-header">
                    {title}
                </dt>

                <dd className="mt-1 text-right text-sm leading-6 text-nav sm:col-span-2 sm:mt-0">
                    <div>
                        <Avatar
                            variant="circular"
                            alt={"Avatar of " + firstname}
                            src={url}
                        />
                    </div>
                </dd>
            </div>
        </dl>
    )
}
