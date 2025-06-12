const members = [
    {
        id: "1234",
        name: "John Doe",
        email: "johndoe@email.com",
        address: {
            street: "123 Maple Street",
            city: "New York",
            country: "USA",
        }
    },
    {
        id: "1235",
        name: "Sakura Kurosawa",
        email: "sakura@email.com",
        address: {
            street: "123 Ohayo Street",
            city: "Kyoto",
            country: "Japan",
        }
    }
]

export default function ArrayOfNestedObjectsPage() {
    return (
        <div className="flex flex-col w-full max-w-[1280px] h-[60vh] gap-4 items-center justify-center mx-auto">
            <div className="flex flex-col w-[400px] gap-4">
                <h1 className="font-semibold text-lg">Array of Objects with Nested Objects</h1>
                {members.map((member) => (
                    <div key={member.id} className="flex flex-col">
                        <span>ID: {member.id}</span>
                        <span>Name: {member.name}</span>
                        <span>Address: {member.address.street}, {member.address.city}, {member.address.country}</span>
                        <div className="w-full h-[1px] bg-slate-500 mt-2" />
                    </div>
                ))}
            </div>
        </div>
    )
}