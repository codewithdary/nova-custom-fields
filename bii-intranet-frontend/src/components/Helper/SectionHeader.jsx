export default function SectionHeader({text, subheader, showSubParagraph = false, hasChip, count}) {
    return (
        <div className="font-poppins">
            <h2 className="text-nav font-extrabold pb-2">
                {text} {hasChip && (
                    <span className="ml-1 bg-nav-hover text-white rounded-full px-2 py-1 text-xs">
                        {count}
                    </span>
            )}
            </h2>

            {showSubParagraph && (
                <p className="pb-4 text-paragraph">
                    {subheader}
                </p>
            )}
        </div>
    );
}