import type { Sponsorship } from "@/types/typeSponsor"
import { MdOutlineAttachMoney } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import { CiCircleCheck } from "react-icons/ci";
import { CiClock1 } from "react-icons/ci";
import { Card, CardDescription, CardTitle } from "../ui/card";

interface StatsCardProps {
    sponsors: Sponsorship[]
}

export default function CardStats({ sponsors }: StatsCardProps) {

    const totalValue = sponsors.reduce((acc, s) => acc + s.value, 0);
    const approvedValue = sponsors.filter(s => s.status === 'approved').reduce((acc, s) => acc + s.value, 0);
    const pendingCount = sponsors.filter(s => s.status === 'pending').length;
    const approvedCount = sponsors.filter(s => s.status === 'approved').length;

    const stats = [
        {
            label: 'Valor Total',
            value: totalValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
            icon: <MdOutlineAttachMoney />,
            color: 'text-blue-600',
            bgColor: 'bg-blue-300',
        },
        {
            label: 'Valor Aprovado',
            value: approvedValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
            icon: <BsGraphUp />,
            color: 'text-green-600',
            bgColor: 'bg-green-300',
        },
        {
            label: 'Aprovados',
            value: approvedCount.toString(),
            icon: <CiCircleCheck />,
            color: 'text-green-600',
            bgColor: 'bg-green-300',
        },
        {
            label: 'Pendentes',
            value: pendingCount.toString(),
            icon: <CiClock1 />,
            color: 'text-orange-600',
            bgColor: 'bg-orange-100',
        },
    ];

    return (
        <>
            {
                stats.map((s, index) => (
                    <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-4" key={index}>
                        <div>
                            <p className="text-zinc-500">{s.label}</p>
                            <p className="text-2xl font-bold">{s.value}</p>
                        </div>
                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${s.bgColor}`}>
                            <span className={`${s.color} text-2xl`}>{s.icon}</span>
                        </div>
                    </div>
                ))
            }
        </>
    )
}