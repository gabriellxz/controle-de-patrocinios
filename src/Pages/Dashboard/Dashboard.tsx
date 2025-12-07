import CardStats from "@/Components/CardStats/CardStats";
import Header from "@/Components/Header/Header";
import ModalAddSponsor from "@/Components/ModalAddSponsor/ModalAddSponsor";
import { mockSponsorships } from "@/data/mockSponsors";
import type { Sponsorship } from "@/types/typeSponsor";
import { useState } from "react";

export default function Dahsboard() {

    const [openModal, setOpenModal] = useState(false);

    const [sponsorsList, setSponsorsList] = useState<Sponsorship[]>(mockSponsorships)

    return (
        <div className="min-h-screen">
            <Header openModal={openModal} setOpenModal={setOpenModal} />
            <main className="pt-[130px] w-full flex justify-center px-5">
                <section className="w-full max-w-[1200px]">
                    <h1 className="font-bold text-xl">Visão geral</h1>
                    <div className="mt-5 grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                        <CardStats sponsors={sponsorsList} />
                    </div>
                </section>
            </main>

            <ModalAddSponsor openModal={openModal} setOpenModal={setOpenModal} />
        </div>
    )
}