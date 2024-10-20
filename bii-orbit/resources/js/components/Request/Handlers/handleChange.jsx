import {handleInputChange} from "./inputHandler.jsx";
import {handleSwitchChange} from "./switchHandler.jsx";
import {handleSelectValueChange} from "./selectHandler.jsx";
import {handleImageValueChange} from "./imageHandler.jsx";
import {handleRadioButtonChange} from "./radioButtonHandler.jsx";
import {handleCheckboxValueChange} from "./checkboxHandler.jsx";

export function handleFieldChange(setValues, fieldName, handleChangeFunction) {
    return (e, fieldType) => {
        switch (fieldType) {
            case 'input':
                handleInputChange(setValues)(e);
                break;
            case 'select':
                handleSelectValueChange(setValues, fieldName, handleChangeFunction)(e);
                break;
            case 'switch':
                handleSwitchChange(setValues, fieldName, handleChangeFunction)(e);
                break;
            case 'checkbox':
                handleCheckboxValueChange(setValues, fieldName, handleChangeFunction)(e);
                break;
            case 'radio':
                handleRadioButtonChange(setValues, fieldName, handleChangeFunction)(e);
                break;
            case "image":
                handleImageValueChange(setValues)(e);
                break;
            default:
                throw new Error(`Unsupported field type: ${fieldType}`);
        }
    };
}
