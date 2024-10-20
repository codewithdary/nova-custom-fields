import React from "react";
import RefreshButton from "../../Button/RefreshButton.jsx";

export default function FilterFormLayout({ handleSubmit, children, buttonRoute, buttonText }) {
    return (
        <div className="md:block hidden sm:w-[250px] md:-w[250px] lg:w-[350px] xl:w-[280px] bg-white border rounded-md border-stroke">
            <div className="p-5">
                <form onSubmit={handleSubmit}>
                    {children}
                </form>

                {(buttonText && buttonRoute) && (
                    <RefreshButton
                        type="button"
                        text={buttonText}
                        route={buttonRoute}
                        buttonClassName="mt-4"
                    />
                )}
            </div>
        </div>
    )
}
