import { usePage } from "@inertiajs/inertia-react";
import { useState } from "react";

export default function Layout({ children, title }) {
    const { flash } = usePage().props;

    return (
        <main className="container mx-auto mt-10 mb-10 max-w-lg">
            {title && <h1 className="mb-4 text-2xl">{title}</h1>}
            {flash.success && <FlashMessage {...flash} />}
            {children}
        </main>
    );
}

function FlashMessage({ success }) {
    const [hide, setHide] = useState(false);

    return (
        <>
            {!hide && (
                <div
                    className="relative mb-10 rounded border border-green-400 bg-green-100 px-4 py-3 text-lg text-green-700"
                    role="alert"
                >
                    <strong className="font-bold">Success!</strong>
                    <div>{success}</div>
                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6 cursor-pointer"
                            onClick={() => setHide(true)}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </span>
                </div>
            )}
        </>
    );
}
