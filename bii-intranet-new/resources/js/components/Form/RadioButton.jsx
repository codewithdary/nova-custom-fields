import {Radio, Typography} from "@material-tailwind/react";

export const RadioButton = ({id, label, hasDescription, description, name, value, handleRadioChange, type, error, checked = null }) => {
    return (
        <div>
            <Radio
                checked={checked}
                id={id}
                name={name}
                type={type}
                value={value}
                color="blue-gray"
                onClick={handleRadioChange}
                className="border-nav-hover before:bg-nav-hover text-nav checked:border-nav checked:before:border-nav -ml-0.5"
                label={
                    <div className="pb-3">
                        <Typography className="font-bold font-poppins text-nav ">
                            {label}
                        </Typography>

                        {hasDescription && (
                            <Typography variant="small" className="font-poppins text-nav font-normal">
                                {description}
                            </Typography>
                        )}
                    </div>
                }
                containerProps={{
                    className: "-mt-5",
                }}
            />

            {error && <div className="text-warning text-xs pt-2">
                {error}
            </div>}
        </div>
    );
}
