import Link from "next/link";

export default function Home() {
	return (
		<div className="flex flex-col w-full max-w-[1280px] h-[60vh] justify-center items-center mx-auto">
			<h1 className="font-semibold text-lg mb-4">React JS Map Method Tutorial</h1>
			<div className="flex gap-4">
				<Link href="/simple">
					<button className="bg-teal-200 py-2 px-4 text-slate-800 cursor-pointer hover:opacity-70">
						Simple Array
					</button>
				</Link>
				<Link href="/array-of-objects">
					<button className="bg-teal-200 py-2 px-4 text-slate-800 cursor-pointer hover:opacity-70">
						Array of Objects
					</button>
				</Link>
				<Link href="/array-of-nested-objects">
					<button className="bg-teal-200 py-2 px-4 text-slate-800 cursor-pointer hover:opacity-70">
						Array of Nested Objects
					</button>
				</Link>
				<Link href="/array-of-objects-and-nested-array">
					<button className="bg-teal-200 py-2 px-4 text-slate-800 cursor-pointer hover:opacity-70">
						Array of Objects with Nested Array
					</button>
				</Link>
				<Link href="/conditional-rendering">
					<button className="bg-teal-200 py-2 px-4 text-slate-800 cursor-pointer hover:opacity-70">
						Conditional Rendering
					</button>
				</Link>
			</div>
		</div>
	);
}
