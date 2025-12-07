import { FaRegHandshake } from "react-icons/fa";
import { Button } from "../ui/button";
import { IoMdAdd } from "react-icons/io";
import { useLocation } from "react-router-dom";

interface HeaderProps {
    openModal?: boolean;
    setOpenModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ openModal, setOpenModal }: HeaderProps) {

    const handleOpenModal = (open: boolean) => {
        if (setOpenModal) {
            setOpenModal(open);
        }
    }

    const location = useLocation()

    return (
        <header className="flex justify-between items-center bg-white p-5 fixed w-full">
            <div className=" flex items-center gap-3">
                <FaRegHandshake className="text-4xl bg-blue-600 text-white p-1 rounded" />
                <div>
                    <h1 className="text-md font-semibold uppercase">Controle de patrocínios</h1>
                    <span className="text-sm">Gestão de apoios e parcerias</span>
                </div>
            </div>
            {
                location.pathname === '/dashboard' &&
                <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => handleOpenModal(!openModal)}>
                    <IoMdAdd className="text-2xl" />
                    <span>Novo patrocinador</span>
                </Button>
            }
        </header>
    )
}