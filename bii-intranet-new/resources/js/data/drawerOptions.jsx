
const drawerOptions =  {
    drawer: {
        defaultProps: {
            size: 600,
            zIndex: "z-[9999]",
            overlay: true,
            placement: "left",
            overlayProps: undefined,
            className: "",
            dismiss: undefined,
            onClose: undefined,
            transition: {
                type: "tween",
                duration: 0.3,
            },
        },
        styles: {
            base: {
                drawer: {
                    position: "fixed",
                    zIndex: "z-[9999]",
                    pointerEvents: "pointer-events-auto",
                    backgroundColor: "bg-lightest",
                    boxSizing: "box-border",
                    width: "w-full",
                    boxShadow: "shadow-none",
                },
                overlay: {
                    position: "absolute",
                    inset: "inset-0",
                    width: "w-full",
                    height: "h-full",
                    pointerEvents: "pointer-events-auto",
                    zIndex: "z-[9999]",
                    backgroundColor: "bg-transparent",
                    backgroundOpacity: "bg-opacity-100",
                    backdropBlur: "backdrop-blur-none",
                },
            },
        },
    },
};

export default drawerOptions;