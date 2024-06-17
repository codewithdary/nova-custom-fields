import {Select, Option } from "@material-tailwind/react";

export const SelectDefault = ({label, rows, required = false}) => {
    const renderAttribute = (isRequired) => {
        if (isRequired) {
            return <span className="text-red-500"> * </span>;
        }
        return null;
    };

    const attribute = renderAttribute(required);

    return (
        <div className="pb-6 sm:pb-0 w-full font-poppins">
            <Select label={<label htmlFor="inputId">{label}{attribute}</label>} className="font-poppins bg-white">
                {rows.map(
                    ({ id, name }) => {
                        return (
                            <Option key={id} required value="eff">
                                {name}
                            </Option>
                        );
                    },
                )}
            </Select>
        </div>
    );
}