import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Login() {
    return (
        <main className="flex items-center w-full h-screen justify-center px-4">
            <div className="w-full max-w-xl">
                <h3 className="text-center mb-5 text-xl font-semibold">What's your email address?</h3>
                <Input placeholder="Enter your email address..." className="py-5.5 w-full" />
                <div className="flex flex-col mt-4 gap-2">
                    <Button className="py-6 rounded-full" variant={"secondary"}>Continue with email</Button>
                    <Button variant={'link'}>Back to login</Button>
                </div>
            </div>
        </main>
    )
}