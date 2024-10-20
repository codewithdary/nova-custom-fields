import React from "react";
import { Button } from "@material-tailwind/react";
import classNames from "../../helper/Content/ClassNames.jsx";

export const ButtonList = ({ buttons }) => {
    return (
        <div className="pb-4 flex gap-2">
            {buttons.map((button, index) => {
                const IconComponent = button.icon;

                return (
                    <a href={button.route} key={index} className="!text-white">
                        <Button
                            variant="outlined"
                            className={classNames(
                                button.current ? "bg-primary text-white" : "text-primary-hover",
                                "flex items-center gap-3 !rounded-full border-primary-hover normal-case font-semibold"
                            )}
                        >
                            <IconComponent
                                className={classNames(
                                    button.current ? "text-white" : "text-primary-hover",
                                    "stroke-2 w-4 h-4"
                                )}
                            />
                            {button.label}
                        </Button>
                    </a>
                );
            })}
        </div>
    );
};
