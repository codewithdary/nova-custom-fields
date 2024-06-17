import stripContent from "./StripContent.jsx";

const renderAttribute = (isRequired) => {
    if (isRequired) {
        return <span className="text-red-500"> * </span>;
    }
    return null;
};

export default renderAttribute;
