const users = [
    {
        name: "John Doe",
        age: "32",
        email: "johndoe@email.com",
    },
    {
        name: "Elly Young",
        age: "24",
        email: "ellyyoung@email.com",
    },
    {
        name: "Michael Fisher",
        age: "34",
        email: "michaelfisher@email.com",
    }
]

export default function ArrayOfObjectsPage() {
    return (
        <div className="flex flex-col w-full max-w-[1280px] h-[60vh] gap-4 items-center justify-center mx-auto">
            <div>
                <h1 className="font-semibold text-lg mb-2">Array of Objects</h1>
                {users.map((user, index) => (
                    <div key={index} className="flex gap-4">
                        {index + 1}. {user.name} age: {user.age} email: {user.email}
                    </div>
                ))}
            </div>
        </div>
    )
}