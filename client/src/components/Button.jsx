function Button({
    children,
    type = "button",
    onClick,
    variant = "primary",
    className = "",
    disabled = false
}) {

    const styles = {
        primary: "bg-blue-600 hover:bg-blue-700 text-white",
        secondary: "bg-gray-200 hover:bg-gray-300 text-black",
        danger: "bg-red-500 hover:bg-red-600 text-white"
    };

    return (

        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
                ${styles[variant]}
                px-5 sm:px-6
                py-2.5 sm:py-3
                rounded-lg
                font-semibold
                text-sm sm:text-base
                transition-all
                duration-300
                disabled:opacity-50
                disabled:cursor-not-allowed
                active:scale-95
                ${className}
            `}
        >

            {children}

        </button>

    );

}

export default Button;