import { Link } from "@inertiajs/inertia-react";
import Layout from "@/Components/Layout";
import Pagination from "@/Components/Pagination";

const IndexTask = ({ tasks }) => {
    return (
        <>
            <nav className="mb-4">
                <Link href="/tasks/create" className="link">
                    Add Task
                </Link>
            </nav>
            {tasks?.data.map((task) => (
                <Link href={`tasks/${task.id}`} key={task.id}>
                    <div key={task.id}>{task.title}</div>
                </Link>
            ))}
            <Pagination pagination={tasks.meta} />
        </>
    );
};

IndexTask.layout = (page) => (
    <Layout children={page} title="The lists of tasks" />
);

export default IndexTask;
