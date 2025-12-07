interface Props {
    children: React.ReactNode
    className?: string
}

export default function Title({ children, className }: Props) {
    return (
        <h2 className={className}>{children}</h2>
    )
}