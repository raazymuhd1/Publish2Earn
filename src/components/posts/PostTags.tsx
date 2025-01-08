import {FC} from 'react'

type Props = {
    id: number;
    tag: string;
    isSelected: boolean;
}

const PostTags: FC<Props> = ({id, tag, isSelected}) => {
  return (
    <div key={id} className="rounded-[8px] bg-extra min-w-[150px] hover:bg-extra3 p-[10px] border-[2px] border-line cursor-pointer">
        <p className="text-center text-[#ffffff] uppercase"> {tag} </p>
    </div>
  )
}

export default PostTags