const tasks = [
    {
        name: "Homework",
        done: false,
    },
    {
        name: "Workout",
        done: true,
    },
    {
        name: "Shopping",
        done: false,
    }
]

export default function ConditionalRenderingPage() {
    return (
        <div className="flex flex-col w-full max-w-[400px] h-[60vh] justify-center items-center mx-auto">
            <h1 className="font-semibold text-lg mb-4">Conditional Rendering</h1>
            {tasks.map((task) => (
                <div key={task.name} className={`flex items-center justify-center w-full py-2 px-4 text-slate-900 ${task.done ? 'bg-teal-300' : 'bg-rose-300'}`}>
                    {task.name}
                </div>
            ))}
        </div>
    )
}