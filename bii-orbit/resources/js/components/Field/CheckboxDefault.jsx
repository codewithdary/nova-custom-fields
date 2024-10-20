import React from "react";
import {clsx} from "clsx";
import {Checkbox, Field, Label} from "@headlessui/react";
import {CheckIcon} from "@heroicons/react/16/solid/index.js";
import renderAttribute from "../../helper/Content/MakeRequired.jsx";

export const CheckboxDefault = ({ id, label, required, type, name = false, value, onChange, error = null }) => {
    const attribute = renderAttribute(required);

    return (
        <Field className="flex__gap__3">
            <Checkbox
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                className={clsx(
                    'group block size-4 rounded border border-transparent shadow ring-1 ring-primary/10 focus:outline-none',
                    'data-[checked]:bg-primary data-[checked]:ring-primary',
                    'data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-primary',
                )}
            >
                <CheckIcon
                    className="fill-white opacity-0 group-data-[checked]:opacity-100"
                />
            </Checkbox>

            <Label className="text-paragraph">
                {label} {attribute}
            </Label>

            {error && <div className="warning">
                {error}
            </div>}
        </Field>
    );
}
