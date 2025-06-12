const fruits = [ "Banana", "Apple", "Grape", "Coconut", "Orange" ];

export default function SimplagePage() {
    return (
        <div className="flex flex-col w-full h-[60vh] gap-4 items-center justify-center">
            <h1>One-dimensional array</h1>
            {fruits.map((item) => (
                <h2 key={item}>{item}</h2>
            ))}
        </div>
    )
}