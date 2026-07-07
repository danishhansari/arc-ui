import Link from "next/link";
import { Logout } from "./logout";

export default function NotFound() {

    return (
        <section className="bg-black">
           <Logout />
            <main className="flex h-[80vh] items-center justify-center  px-6">
                <div className="max-w-md text-center">
                    <p className="mb-3 text-sm text-zinc-500">Arc</p>

                    <h1 className="text-4xl font-semibold tracking-tight text-white">
                        Authentication Error
                    </h1>

                    <p className="mt-4 text-zinc-400">
                        The workspace does not exist
                    </p>

                    <div className="mt-8 flex justify-center gap-3">
                        <Link
                            href="/"
                            className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-zinc-200"
                        >
                            Go home
                        </Link>

                        <Link
                            href="/login"
                            className="rounded-lg border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition hover:border-zinc-600 hover:text-zinc-400"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </main>
        </section>

    );
}