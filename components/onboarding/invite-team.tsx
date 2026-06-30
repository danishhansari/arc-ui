import { OnboardingData } from "@/types";
import { Button } from "../ui/button"
import { CarouselApi } from "../ui/carousel"
import { Label } from "../ui/label"
import { EmailChipsInput } from "../emailbadge"


interface ProfileProps {
    api: CarouselApi | null;
    data: OnboardingData;
    updateData: (patch: Partial<OnboardingData>) => void;
}

export const InviteTeam = ({ api, data, updateData }: ProfileProps) => {
    return (
        <>
            <div className="max-w-sm w-full mx-auto px-2">
                <h1 className="text-xl font-medium tracking-tight text-foreground">
                    Invite teammates
                </h1>
                <p className="text-md mt-1 mb-8 text-zinc-500">
                    Get your team on Arc to start working
                </p>
            </div>
            <div
                className="space-y-6 w-full max-w-sm mx-auto px-2"
            >
                <div className="space-y-2">
                    <Label className="text-sm text-zinc-500 font-normal">
                        Invitations
                    </Label>
                    <EmailChipsInput value={data.emails} onChange={(emails) => updateData({ emails })} />
                </div>

            </div>
            <div
                className="flex justify-end gap-3 pt-4 mt-8 max-w-sm w-full mx-auto"
            >
                <Button
                    variant="link"
                    onClick={() => api?.scrollNext()}
                    className="h-11 px-4 font-normal text-xs"
                >
                    Skip
                </Button>

                <Button
                    onClick={() => api?.scrollNext()}
                    variant="secondary"
                    className="h-11 rounded-full px-4 text-xs"
                >
                    Send Invitations
                </Button>
            </div>
        </>
    )
}