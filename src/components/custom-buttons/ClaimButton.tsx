import {FC} from 'react'

interface IProps {
    styles: string;
}

const ClaimButton = () => {
  return (
    <button className={`border-none outline-none py-[4px] px-[10px] rounded-[10px] bg-extra3 font-medium text-[14px] md:text-[16px] text-[#fff] `}>
        Collect points
    </button>
  )
}

export default ClaimButton