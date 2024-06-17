import ProtoTypes from "prop-types";

function Widget({href, name, icon, type}) {
    return (
        <div className="rounded-lg bg-white p-5 gap-y-[24px] shadow-md hover:shadow-lg transition-all hover:scale-105 hover:bg-gray-100">
            <a href={href}>
                <div className="mb-5 flex items-center justify-between">
                    <div className="flex items-center space-x-[7px]">
                        <div className="icon">
                        <span>
                          <img
                              src={icon} alt="icon"
                          />
                        </span>
                        </div>
                    </div>
                    <span className="text-xs text-nav justify-end">
                        {type}
                    </span>
                </div>

                <div className="flex items-end text-left justify-between">
                    <div className="flex-1">
                        <p className="text-xs text-nav font-extrabold">
                            {name}
                        </p>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default Widget;
