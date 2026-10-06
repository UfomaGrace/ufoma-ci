import { ArrowUpRight } from "lucide-react"
import { imgLinks } from "../assets/assetLinks"

const data = [
    {
        id:1,
        name:"Raul Brito",
        image:imgLinks.raul
    },
    {
        id:2,
        name:"Lazy",
        image:imgLinks.lazy
    },
    {
        id:3,
        name:"Mobin",
        image:imgLinks.mobbin
    },
    {
        id:4,
        name:"Yoin",
        image:imgLinks.yoin
    },
    {
        id:5,
        name:"Loaf",
        image:imgLinks.loaf
    },
    {
        id:6,
        name:"GitHub",
        image:imgLinks.github
    },
]

export default function MainPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-3 md:gap-5 mt-10">
        {data.map((item) => (
            <div key={item.id} className="border-[0.5px] border-[#ffffff30] p-5 rounded-lg hover:border-amber-100/60 transition-all duration-300 cursor-pointer hover:-translate-y-1 ease-out">
                <img src={item.image} className="rounded-lg"/>
                <div className="flex justify-between mt-5 text-[#ffffffb3] text-[15px]">
                    <p>{item.name}</p>
                    <ArrowUpRight />
                </div>
            </div>
        ))}
    </div>
  )
}
