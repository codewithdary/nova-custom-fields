import React from "react";

export function CompanyRow({ companies }) {
    return (
        companies.map((company) => (
            <div className="border-b border-border-color">
                <div className="flex min-w-0 gap-x-4 px-4 py-4 sm:gap-4 sm:px-0 w-11/12 mx-auto">
                    <span className="hover:cursor-pointer flex mx-auto w-12 h-12 shrink-0 text-normal items-center text-center justify-center rounded-full border border-nav transition-all bg-nav text-[0.925rem] text-white font-extrabold">
                        {company.name.charAt(0).toUpperCase()}
                 </span>

                    <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-primary-header">
                            {company.name}
                        </p>

                        <p className="mt-1 truncate text-xs leading-5 text-nav">
                            {company.pivot ? company.pivot.work_title : company.description}
                        </p>
                    </div>
                </div>
            </div>
        ))
    )
}

