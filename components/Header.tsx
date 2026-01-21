import Link from "next/link";
import {Home, PlusCircle, BarChart3, User} from "lucide-react";

export default function Header() {
    return (
        <header className="bg-white border-b">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold text-blue-600">FollowUpOS</Link>

                <nav className="flex gap-6">
                    <Link href="/" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                    <Home size={20} />
                    Dashboard
                    </Link>
                    <Link href="/add" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                    <PlusCircle size={20} />
                    Add Interaction
                    </Link>
                    <Link href="/analytics" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                    <PlusCircle size={20} />
                    Add Interaction
                    </Link>
                    <Link href="/analytics" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                    <BarChart3 size={20} />
                    Analytics
                    </Link>
                    <Link href="/profile" className="flex items-center gap-2 text-gray-700 hover: text-blue-600">
                    <User size={20} />
                    Profile
                    </Link>
                </nav>
            </div>
        </header>
    )
}