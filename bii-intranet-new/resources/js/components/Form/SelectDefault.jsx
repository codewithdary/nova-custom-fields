import {Select, Option } from "@material-tailwind/react";
import {useEffect, useState} from "react";
import renderAttribute from "../../Helper/MakeRequired.jsx";

export const SelectDefault = ({label, rows, required = false, handleSelectChange, error, current = null}) => {
    const attribute = renderAttribute(required);
    const [value, setValue] = useState(null);

    useEffect(() => {
        if (current) {
            setValue(current);
        }
    }, [current]);

    return (
        <div className="pb-6 sm:pb-0 w-full font-poppins">
            <Select
                label={<label htmlFor="inputId">{label}{attribute}</label>}
                className="font-poppins bg-white"
                value={value}
                onChange={handleSelectChange}>
                {Object.keys(rows).map((key) => (
                    <Option key={key} required value={rows[key]}>
                        {rows[key]}
                    </Option>
                ))}
            </Select>

            {error && <div className="text-warning text-xs pt-2">
                {error}
            </div>}
        </div>
    );
}