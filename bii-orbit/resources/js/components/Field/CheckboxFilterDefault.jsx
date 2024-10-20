import React, { useState, useEffect } from "react";
import {BooleanFilter} from "../Filter/Option/BooleanFilter.jsx";
import {CheckboxFilter} from "../Filter/Option/CheckboxFilter.jsx";
import PlusMinusIcon from "../../helper/Content/PlusMinusIcon.jsx";

const CheckboxFilterDefault = ({id, header, children = [], selectedIds = [], handleCheckboxChange, checked = false, isSingleCheckbox = false, handleSingleCheckboxChange, shouldBeShown = true }) => {
    const [showOptions, setShowOptions] = useState(false);

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    const isParentChecked = () => {
        return (
            selectedIds.includes(id) ||
            children.some((child) => selectedIds.includes(child.id))
        );
    };

    useEffect(() => {
        if (isParentChecked()) {
            setShowOptions(true);
        }
    }, [selectedIds, checked, id]);

    const handleParentCheckboxChange = (isChecked) => {
        if (isChecked) {
            setShowOptions(false)

            handleCheckboxChange(id, true);
        } else {
            setShowOptions(false)

            handleCheckboxChange(id, false);
            children.forEach((child) => {
                handleCheckboxChange(child.id, false);
            });
        }
    };

    const handleChildCheckboxChange = (childId, isChecked) => {
        handleCheckboxChange(childId, isChecked);
    };

    return (
        <>
            {isSingleCheckbox ? (
                <>
                    {shouldBeShown && (
                        <BooleanFilter
                            id={1}
                            isBool={true}
                            header={header}
                            checked={checked}
                            handleSingleCheckboxChange={handleSingleCheckboxChange}
                        />
                    )}
                </>
            ) : (
                <>
                    <div className="relative flex items-start justify-between">
                        <CheckboxFilter
                            id={id}
                            header={header}
                            isBool={checked}
                            checked={isParentChecked()}
                            parentChecked={isParentChecked()}
                            handleParentCheckboxChange={handleParentCheckboxChange}
                        />

                        {children.length > 0 && (
                            <div className="-mt-0.5">
                                <PlusMinusIcon
                                    showOptions={showOptions}
                                    toggleOptions={toggleOptions}
                                />
                            </div>
                        )}
                    </div>

                    {showOptions && children.length > 0 && (
                        <div className="pl-5 w-full">
                            {children.map((child) => (
                                <CheckboxFilter
                                    isChild={true}
                                    id={child.name}
                                    key={child.name}
                                    checked={selectedIds.includes(child.name)}
                                    parentChecked={selectedIds.includes(child.name)}
                                    handleParentCheckboxChange={(isChecked) =>
                                        handleChildCheckboxChange(child.name, isChecked)
                                    }
                                    header={child.name}
                                    headerClassName="text-xs"
                                    labelClassName="pb-1"
                                />
                            ))}
                        </div>
                    )}
                </>
            )}
        </>
    );
};

export default CheckboxFilterDefault;
