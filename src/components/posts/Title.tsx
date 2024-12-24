import {FC} from 'react'
import { ChevronRight } from "lucide-react"
import Link from "next/link"

type Props = {
    title: string;
}

const Title: FC<Props> = ({ title }) => {
  return (
      <div className="flex items-center justify-between mt-[35px]">
            <h2 className="font-bold text-textMain lg:text-[45px] md:text-[25px] uppercase text-[18px]"> {title} </h2>
            <Link href="/posts" className="flex items-center gap-[10px]">
                <h4 className="text-[16px] md:text-[20px] lg:text-[25px] text-extra3 font-bold"> See All </h4>
                <ChevronRight className="text-extra3" />
            </Link>
      </div>
  )
}

export default Title