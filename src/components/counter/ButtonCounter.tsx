interface ButtonCounterProps {
    onClick?: VoidFunction,
    label?: string,
    primary?: boolean,
}

const ButtonCounter = (props: ButtonCounterProps) => {
    const { label = 'Button', onClick, primary = false } = props;
    const classes = `${primary ? 'bg-indigo-500 text-white hover:bg-indigo-600' : 'bg-white text-gray-800 hover:bg-gray-200'} focus:outline-none rounded-lg font-bold text-sm px-5 py-2.5`;

    return (
        <button onClick={onClick} type="button" className={classes}>
            {label}
        </button>
    );
}

export default ButtonCounter;