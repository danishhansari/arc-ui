'use client'

import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { useState } from 'react'
import { Profile } from "@/components/onboarding/profile"
import { InviteTeam } from "./invite-team";
import { OnboardingData } from "@/types";

export default function OnboardingCarousel() {
    const [data, setData] = useState<OnboardingData>({
        name: "",
        title: "",
        emails: [],
    });

    const updateData = (patch: Partial<OnboardingData>) => {
        setData((prev) => ({ ...prev, ...patch }));
    };
    const [api, setApi] = useState<CarouselApi | null>(null);

    console.log(data)

    return (
        <>
            <div className="flex h-dvh w-full overflow-hidden">

                <Carousel setApi={setApi}
                    opts={{ watchDrag: false }}
                    className="flex-1  overflow-hidden"
                >
                    <CarouselContent className="h-dvh w-full">
                        <CarouselItem className="flex flex-col justify-center">
                            <Profile api={api} data={data} updateData={updateData} />
                        </CarouselItem>
                        <CarouselItem className="flex flex-col justify-center">
                            <InviteTeam api={api} data={data} updateData={updateData} />
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>


                <div
                    className="hidden w-1/2 flex-col items-center justify-center bg-neutral-900/75 p-12 lg:flex"
                >
                </div>

            </div>

        </>
    )
}
