export default function PageHeader({header, subheader}) {
    return (
        <div>
            <span className="text-[9px] tracking-widest font-poppins font-bold text-pretitle font-semiBold uppercase">
                {subheader}
            </span>

            <h1 className="text-3xl tracking-wide font-bold text-primary-header pb-4">
                {header}
            </h1>
        </div>
    );
}