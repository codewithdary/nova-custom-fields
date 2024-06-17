export const Logo = ({hasColor}) => {
    return (
        <img
            className="w-60 object-cover text-center mx-auto object-center"
            src={hasColor ? '/images/logo/bii_logo_dark.png' : '/images/logo/bii_logo_white.png'}
            alt="Logo of BII"
        />
    );
}