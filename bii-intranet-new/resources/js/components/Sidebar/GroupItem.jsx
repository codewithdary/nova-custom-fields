import React from "react";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export const GroupItem = ({ label, items }) => {
    return (
        <>
            <div className="text-[12px] font-semibold leading-6 text-nav-hover">
                {label}
            </div>

            <ul role="list" className="-mx-2">
                {items.map((item) => (
                    <li key={item.name}>
                        <a
                            href={item.href}
                            className={classNames(
                                item.current ? 'text-[14px] text-black bg-white rounded-l-3xl pl-4' : 'text-nav text-[14px] transition-all hover:text-nav-hover',
                                'group flex gap-x-3 rounded-md p-1 leading-6 items-center pl-4 tracking-normal'
                            )}>

                            <item.icon
                                className="h-4 w-4 shrink-0"
                                aria-hidden="true"
                            />

                            {item.name}

                            {item.hasBadge ? (
                                <span
                                    className="uppercase ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-nav-hover px-2.5 py-0.5 text-center text-[8px] font-medium leading-5 text-white"
                                    aria-hidden="true">
                                    New
                                </span>
                            ) : null}
                        </a>
                    </li>
                ))}
            </ul>
        </>
    )
}