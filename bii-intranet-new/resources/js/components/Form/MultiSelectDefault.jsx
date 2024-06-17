import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import renderAttribute from "../../Helper/MakeRequired.jsx";
import {useEffect} from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export const MultiSelectDefault = ({id, name, rows, label, handleMultiSelectChange, required, error, selected = null}) => {
    const initialOptions = selected ? Object.keys(selected) : [];
    const [options, setOptions] = React.useState(initialOptions);
    const attribute = renderAttribute(required);

    const handleChange = (event) => {
        if (!event || !event.target) {
            return;
        }

        const {target: { value }} = event;
        let newOptions = typeof value === 'string' ? value.split(',') : value;

        // Convert each value to an integer
        // newOptions = newOptions.map(option => parseInt(option));

        setOptions(newOptions);
        handleMultiSelectChange(newOptions);
    };

    const rowsItems = Object.keys(rows).map((key) => (
        <MenuItem
            id="test"
            key={key}
            value={key}>
            {rows[key]}
        </MenuItem>
    ));

    return (
        <div className="w-full">
            <FormControl sx={{ m: 1, width: 300}}>
                <InputLabel
                    id="demo-multiple-name-label">
                    {label} {attribute}
                </InputLabel>

                <Select
                    multiple
                    defaultValue={2}
                    name={name}
                    value={options}
                    MenuProps={MenuProps}
                    onChange={handleChange}
                    labelId="demo-multiple-name-label"
                    input={<OutlinedInput id={id} label="Name" />}
                    className="peer w-full h-full bg-transparent text-primary-header font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder:opacity-0 hover:ring-10 focus:placeholder:opacity-100 text-sm px-3 py-2.5 rounded-[7px] bg-white">
                    {rowsItems}
                </Select>
            </FormControl>

            {error && <div className="text-warning text-xs pt-2">
                {error}
            </div>}
        </div>
    );
}