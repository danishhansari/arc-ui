import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Login() {
    return (
        <main className="flex items-center w-full h-dvh justify-center px-2">
            <div className="w-full max-w-sm md:max-w-xs">
                <h3 className="text-center mb-6 text-2xl md:text-xl font-semibold">What's your email address?</h3>
                <Input placeholder="Enter your email address..." className="py-7 md:py-5 w-full" />
                <div className="flex flex-col mt-4 gap-3">
                    <Button className="py-6.5 md:py-5 text-md md:text-xs rounded-full" variant={"secondary"}>Continue with email</Button>
                    <Button variant={'link'} className="text-sm md:text-xs">Back to login</Button>
                </div>
            </div>
        </main>
    )
}