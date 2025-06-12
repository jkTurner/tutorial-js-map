const products = [
    {
        name: "T-Shirt",
        price: "$24",
        colors: [ "red", "yellow", "white" ],
    },
    {
        name: "Pants",
        price: "$52",
        colors: [ "blue", "black", "brown", "green", "orange" ],
    }
]

export default function ArrayOfObjectsAndNestedArrayPage() {
    return (
        <div className="flex flex-col w-full max-w-[1280px] h-[60vh] justify-center iteams-center gap-4 mx-auto">
            <div className="flex flex-col mx-auto">
                <h1 className="font-semibold text-log mb-4">Array of Objects with Nested Array</h1>
                <div className="flex flex-col gap-4">
                    {products.map((product) => (
                        <div key={product.name}>
                            {product.name} {product.price}
                            <div className="flex gap-2">
                                {product.colors.map((color) => (
                                    <span key={color}>{color}</span>
                                ))}
                            </div>
                            <div className="w-full h-[1px] bg-slate-500 mt-2" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}