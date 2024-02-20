import { Link, useForm } from "@inertiajs/inertia-react";
import Layout from "../../Components/Layout";

const ShowTask = ({ task }) => {
    const createdAt = new Date(task.created_at);
    const updatedAt = new Date(task.updated_at);

    return (
        <>
            <h1 className="mb-4 text-2xl">{task.title}</h1>
            <nav className="mb-4">
                <Link href="/tasks" className="link">
                    ⟵ Go back to the task list
                </Link>
            </nav>

            <p className="mb-4 text-slate-700">{task.description}</p>
            {task.long_description && (
                <p className="mb-4 text-slate-700">{task.long_description}</p>
            )}

            <p className="mb-4 text-sm text-slate-500">
                Created {createdAt.getDate()}{" "}
                {createdAt.toLocaleString("en-US", { month: "long" })} · Updated{" "}
                {updatedAt.getDate()}{" "}
                {updatedAt.toLocaleString("en-US", { month: "long" })}
            </p>

            <p className="mb-4">
                {task.completed === 1 ? (
                    <span className="font-medium text-green-500">
                        Completed
                    </span>
                ) : (
                    <span className="font-medium text-red-500">
                        Not completed
                    </span>
                )}
            </p>

            <div className="flex gap-2">
                <Link href={`/tasks/${task.id}/edit`} class="btn">
                    Edit
                </Link>
                <CompleteTask task={task} />
                <DeleteTask task={task} />
            </div>
        </>
    );
};

function CompleteTask({ task }) {
    const { put, processing } = useForm({});

    function handleToggleComplete(e) {
        e.preventDefault();
        put(`/tasks/${task.id}/toggle-complete`);
    }

    return (
        <form onSubmit={handleToggleComplete}>
            <button type="submit" class="btn" disabled={processing}>
                Mask as {task.completed ? "not completed" : "completed"}
            </button>
        </form>
    );
}

function DeleteTask({ task }) {
    const { delete: destroy, processing } = useForm({});

    function handleDelete(e) {
        e.preventDefault();
        destroy(`/tasks/${task.id}`);
    }

    return (
        <form onSubmit={handleDelete}>
            <button type="submit" class="btn" disabled={processing}>
                Delete
            </button>
        </form>
    );
}

ShowTask.layout = (page) => <Layout children={page} />;

export default ShowTask;
