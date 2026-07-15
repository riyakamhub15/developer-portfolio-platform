function Input({

    label,

    name,

    type = "text",

    placeholder,

    value,

    onChange,

    required = false

}) {

    return (

        <div className="mb-5">

            <label className="block mb-2 text-sm font-semibold text-gray-700">

                {label}

            </label>

            <input

                name={name}

                type={type}

                placeholder={placeholder}

                value={value}

                onChange={onChange}

                required={required}

                className="
                    w-full
                    rounded-xl
                    border
                    border-gray-300
                    px-4
                    py-3
                    text-gray-700
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-500
                    focus:border-blue-500
                    transition
                "

            />

        </div>

    );

}

export default Input;