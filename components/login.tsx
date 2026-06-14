import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Login() {
    return (
        <main className="flex items-center w-full h-dvh justify-center px-2">
            <div className="w-full max-w-sm md:max-w-xs md:px-4 mb-10">
                <h3 className="text-center mb-6 text-2xl md:text-lg font-semibold">What's your email address?</h3>
                <Input placeholder="Enter your email address..." className="py-7 md:py-5 w-full placeholder:text-sm placeholder:text-gray-450" />
                <div className="flex flex-col mt-4 gap-3">
                    <Button className="py-6.5 md:py-5 text-gray-300 text-md md:text-sm rounded-full" variant={"secondary"}>Continue with email</Button>
                    <Button variant={'link'} className="text-sm md:text-xs">Back to login</Button>
                </div>
            </div>
        </main>
    )
}