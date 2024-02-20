import Layout from "@/Components/Layout";
import { useForm } from "@inertiajs/inertia-react";

const EditTask = ({ task }) => {
    const { data, setData, put, processing, errors } = useForm({
        title: task.title,
        description: task.description,
        long_description: task.long_description,
    });

    function handleSubmit(e) {
        e.preventDefault();
        put(`/tasks/${task.id}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={data.title}
                    onChange={(e) => setData("title", e.target.value)}
                />
                {errors.title && <p class="error">{errors.title}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="description">Description</label>
                <textarea
                    name="description"
                    id="description"
                    rows="5"
                    value={data.description}
                    onChange={(e) => setData("description", e.target.value)}
                />
                {errors.description && (
                    <p class="error">{errors.description}</p>
                )}
            </div>
            <div className="mb-4">
                <label htmlFor="long_description">Long Description</label>
                <textarea
                    name="long_description"
                    id="long_description"
                    rows="10"
                    value={data.long_description}
                    onChange={(e) =>
                        setData("long_description", e.target.value)
                    }
                />
                {errors.long_description && (
                    <p class="error">{errors.long_description}</p>
                )}
            </div>
            <div className="flex gap-2 items-center">
                <button type="submit" className="btn" disabled={processing}>
                    Update Task
                </button>
                <a href="/tasks" className="link">
                    Cancel
                </a>
            </div>
        </form>
    );
};

EditTask.layout = (page) => <Layout children={page} title="Edit Task" />;

export default EditTask;
