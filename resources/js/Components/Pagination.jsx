import { Link } from "@inertiajs/inertia-react";
export default function Pagination({ pagination }) {
    return (
        <nav className="relative flex justify-center py-4">
            {pagination.links.map((link) => (
                <Link
                    href={link.url ?? ""}
                    key={link.label}
                    className="px-2 py-1 text-center font-medium shadow-sm ring-1 ring-slate-700/10 text-slate-700 hover:bg-slate-50"
                    style={{
                        backgroundColor: link.active ? "rgb(229,231,235)" : "",
                        color: !link.url ? "rgb(156,163,175)" : "",
                    }}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                />
            ))}
        </nav>
    );
}
