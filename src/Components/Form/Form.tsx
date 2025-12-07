import Title from "../Title/Title"
import { Button } from "../ui/button"

interface Props {
    children: React.ReactNode
    title: string
    className?: string
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
    textButton?: string
}

export default function Form({ children, title, className, onSubmit, textButton }: Props) {
    return (
        <form className={className} onSubmit={onSubmit}>
            <Title className="text-2xl font-bold mb-5">{title}</Title>
            {children}
            <div>
                <Button type="submit" className="w-full mt-5 bg-blue-600 hover:bg-blue-700">{textButton}</Button>
            </div>
        </form>
    )
}