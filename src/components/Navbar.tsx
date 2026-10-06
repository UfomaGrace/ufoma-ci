import { Moon } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex justify-between text-white">
        <div className="flex flex-row gap-2 cursor-pointer">
            <Moon className="text-white fill-white"/>
            <p className="hidden sm:block">Dark Mode Design</p>
        </div>

        <div className="flex flex-row gap-2 items-center">
          <p className="text-[15px] cursor-pointer rounded-lg px-3 py-1 hover:bg-amber-100/10 hover:text-amber-100 text-[#ffffff80]">About</p>
          <p className="text-[15px] cursor-pointer rounded-lg px-3 py-1 hover:bg-amber-100/10 hover:text-amber-100 text-[#ffffff80]">Submit a site</p>
        </div>
    </div>
  )
}
