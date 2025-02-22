import {FC} from 'react'
import { Input } from "@/components/ui/input"

interface IProps {
    label: string;
    placeholder: string;
}

const InputField: FC<IProps> = ({label, placeholder}) => {
  return (
     <aside className="w-[45%]">
           <label className={`label`}> {label} </label>
            <div className="input-container ">
                <Input type="text" className="input-field" placeholder={placeholder} />
                <p className="input-edit"> Edit </p>
            </div>
    </aside>
  )
}

export default InputField