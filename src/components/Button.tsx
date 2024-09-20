interface ButtonProps {
    children: React.ReactNode
    click?: () => void
    large?: boolean
}

const Button = ({children, click, large = false}: ButtonProps) => {
    return <button onClick={click} className={`${large ? "px-8" : "px-4"} py-2 flex gap-2 items-center bg-gray-300 rounded-lg font-bold`}>
        {children}
    </button>
}

export default Button