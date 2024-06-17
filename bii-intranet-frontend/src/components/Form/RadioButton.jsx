import {Radio, Typography} from "@material-tailwind/react";

export const RadioButton = ({label, hasDescription, description, name}) => {
    return (
        <Radio
            className=" border-nav-hover before:bg-nav-hover text-nav checked:border-nav checked:before:border-nav"
            name={name}
            label={
                <div className="pb-3">
                    <Typography className="font-bold font-poppins text-nav">
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
    );
}