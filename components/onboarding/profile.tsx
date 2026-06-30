import { OnboardingData } from "@/types";
import { Button } from "../ui/button"
import { CarouselApi } from "../ui/carousel"
import { Input } from "../ui/input"
import { Label } from "../ui/label"


interface ProfileProps {
    api: CarouselApi | null;
    data: OnboardingData;
    updateData: (patch: Partial<OnboardingData>) => void;
}


export const Profile = ({ api, data, updateData }: ProfileProps) => {
    return (
        <>
            <div className="max-w-sm w-full mx-auto px-2">
                <h1 className="text-xl font-medium tracking-tight text-foreground">
                    Set up your profile
                </h1>
                <p className="text-md mt-1 mb-8 text-zinc-500">
                    Choose how you'll appear in Arc
                </p>
            </div>
            <div
                className="space-y-6 w-full max-w-sm mx-auto px-2"
            >
                <div className="space-y-2">
                    <Label className="text-sm text-zinc-500 font-normal">
                        Name
                    </Label>
                    <Input
                        type="text"
                        placeholder={'Enter your name...'}
                        value={data.name}
                        onChange={(e) => updateData({ name: e.target.value })}
                        className="border border-zinc-800 py-5 placeholder:font-normal placeholder:text-zinc-500 placeholder:text-sm"
                    />
                </div>

                <div className="space-y-2">
                    <Label className="text-sm text-zinc-500 font-normal">
                        Title
                    </Label>

                    <Input
                        type="text"
                        placeholder={'Software engineer'}
                        value={data.title}
                        onChange={(e) => updateData({ title: e.target.value })}
                        className="border border-zinc-800 py-5 placeholder:font-normal placeholder:text-zinc-500 placeholder:text-sm"
                    />
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
                    Continue
                </Button>
            </div>
        </>
    )
}