import CardStats from "@/Components/CardStats/CardStats";
import { mockSponsorships } from "@/data/mockSponsors";
import type { Sponsorship } from "@/types/typeSponsor";
import { useState } from "react";

export default function Dahsboard() {

    const [sponsorsList, setSponsorsList] = useState<Sponsorship[]>(mockSponsorships)

    return (
        <div className="min-h-screen">
            <main className="pt-[130px] w-full flex justify-center px-5">
                <section className="w-full max-w-[1200px]">
                    <h1 className="font-bold text-xl">Visão geral</h1>
                    <div className="mt-3">
                        <CardStats sponsors={sponsorsList}/>
                    </div>
                </section>
            </main>
        </div>
    )
}