"use client"
import {FC, useState} from 'react'

type Props = {
    id: number;
    tag: string;
    isSelected: boolean;
}

const PostTags: FC<Props> = ({id, tag, isSelected}) => {
        const [isActive, setIsActive] = useState<boolean>(false)

  return (
    <div key={id} className="rounded-[8px] low_opacity_bg min-w-[150px] hover:bg-extra3 p-[10px] border-[2px] border-line cursor-pointer duration-500 transition-all">
        <p className="text-center text-[#ffffff] uppercase"> #{tag} </p>
    </div>
  )
}

export default PostTags