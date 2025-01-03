import {FC} from 'react'
import Image from "next/image"
import { StaticImageData } from 'next/image';

interface Props {
    authorPic: StaticImageData;
    authorName: string;
    postDate: Date;
    title: string;
    description: string;
    customStyle: boolean;
    textStyle: string;
}

const PostInfo: FC<Props> = ({ authorName, authorPic, postDate, title, description, customStyle, textStyle }) => {
  return (
    <div className={`lex flex-col gap-[10px] ${ customStyle && "translate-x-[20px] translate-y-[-250px]"} rounded-[15px]`}>
        <div className="flex items-center gap-[10px]">
            <Image src={authorPic} alt="author-img" className="w-[40px] h-[40px] rounded-[50%]  hover:scale-[1.1] transition-all duration-[1s]" />
             <h4 className={`font-semibold text-extra3 text-[14px] md:text-[16px] lg:text-[18px] ${textStyle}`}> {authorName} </h4>
            <div className="w-[4px] bg-secondary h-[4px] rounded-[50%]" />
            <p className={`${textStyle} text-[10px] md:text-[14px] lg:text-[16px]`}> { postDate.toDateString() } </p>
        </div>
        <div className="flex flex-col gap-[10px] w-full">
            <h1 className="font-extrabold lg:text-[22px] md:text-[18px] text-[16px] whitespace-normal w-[80%] text-main"> { title } </h1>
            <p className={`w-full text-[10px] md:text-[14px] lg:text-[16px] font-light ${textStyle}`}> {description} </p>
        </div>
    </div>
  )
}

export default PostInfo