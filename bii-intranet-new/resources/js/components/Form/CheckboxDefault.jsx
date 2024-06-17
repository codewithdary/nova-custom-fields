import { Checkbox, Typography } from "@material-tailwind/react";

export const CheckboxDefault = ({ id, value, header, description, handleCheckboxChange, checked = null }) => {
    return (
        <Checkbox
            checked={checked}
            id={id}
            value={value}
            onChange={handleCheckboxChange}
            className="border-nav before:bg-nav checked:bg-nav checked:border-nav checked:before:bg-nav"
            label={
                <div>
                    <Typography className="font-poppins text-nav font-bold">
                        {header}
                    </Typography>

                    <Typography variant="small" className="font-normal font-poppins text-nav">
                        {description}
                    </Typography>
                </div>
            }
            containerProps={{
                className: "-mt-5",
            }}
        />
    );
}