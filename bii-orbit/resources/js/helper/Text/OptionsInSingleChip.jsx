export const OptionsInSingleChip = ({ options, icon, className = '' }) => {
    const chips = Array.isArray(options) ? options : [{ name: options }];

    return (
        <>
            {chips.length > 0 && (
                <div className={`inline-flex sm:-mt-[16px] acceleration__filter ${className}`}>
                    {chips.map((option, index) => (
                        <span key={index} className="inline-flex font-semibold items-center">
                            {icon && <span className="mr-2">{icon}</span>}
                            {option.name}
                            {index < chips.length - 1 ? ', ' : ' '}
                        </span>
                    ))}
                </div>
            )}
        </>
    );
};
