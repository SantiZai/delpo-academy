interface ButtonProps {
    children: React.ReactNode
    click?: () => void
    large?: boolean
}

const Button = ({children, click, large = false}: ButtonProps) => {
    return <button onClick={click} className={`${large ? "px-8 py-3" : "px-4 py-2"} flex gap-2 items-center bg-[#A6A6A6] text-white rounded-xl font-bold`}>
        {children}
    </button>
}

export default Button