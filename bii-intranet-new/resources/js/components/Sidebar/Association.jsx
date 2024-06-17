import React from "react";
import classNames from "classnames";
import teams from "../../data/teams.json"

export const Association = () => {
    return (
        <li>
            <div className="text-xs font-semibold leading-6 text-gray-400">
                Associations
            </div>
            <ul role="list" className="-mx-2 mt-2 space-y-1">
                {teams.map((team) => (
                    <li key={team.name}>
                        <a
                            href={team.href}
                            className={classNames(
                                team.current
                                    ? 'text-xs text-nav bg-white rounded-l-3xl'
                                    : 'text-nav text-xs transition-all hover:text-nav-hover',
                                'group flex gap-x-3 rounded-md p-2 text-nav leading-6 font-semibold'
                            )}>

                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                            {team.initial}
                          </span>

                            <span className="truncate">
                                {team.name}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </li>
    );
}