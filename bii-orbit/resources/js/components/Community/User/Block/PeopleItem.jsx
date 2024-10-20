import React from "react";
import {Link} from "@inertiajs/react";
import { ConnectButtons } from "../../../Button/ConnectButtons.jsx";
import { getInitials } from "../../../../helper/Content/Initials.jsx";

export function PeopleItem({ t, user, userIndex }) {
    const renderAvatar = () => {
        if (user.full_avatar_path) {
            return (
                <img
                    src={user.full_avatar_path}
                    alt={t('avatar_of', { name: user.full_name })}
                    className="absolute inset-0 avatar__content rounded-b-xl"
                    sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
            );
        }

        return (
            <span
                className="hover:cursor-pointer absolute flex m-auto shrink-0 text-normal items-center text-center justify-center border border-nav rounded-b-xl bg-primary text-xl text-white font-extrabold avatar__content"
            >
                {getInitials(user.full_name)}
            </span>
        );
    };

    return (
        <section id="people" aria-labelledby="people">
            <Link href={route("communities.people.show", user.id)}>
                <div
                    key={userIndex}
                    className="item__scale hover:rounded-xl"
                >
                    <div className="group relative h-[28rem] transform overflow-hidden rounded-4xl">
                        {renderAvatar()}
                    </div>

                    <div className="bg-white text-center absolute bottom-0 w-full rounded-t-[50px] border border-stroke rounded-b-xl py-3">
                        <h3 className="text-primary font-semibold pt-2">
                            {user.full_name}
                        </h3>

                        {user.company_position && (
                            <p className="text-sm text-primary pt-2">
                                {user.company_position}
                            </p>
                        )}

                        <div className="pt-2">
                            <ConnectButtons
                                className="!pb-0"
                                mailUrl={user.email}
                                linkedInUrl={user.linkedin_url}
                                phoneNumber={user.phone_number}
                            />
                        </div>
                    </div>
                </div>
            </Link>
        </section>
    );
}
