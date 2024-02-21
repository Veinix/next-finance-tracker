import DropdownItem from "../Atoms/DropdownItem"

type DropdownProps = {
    label: string,
    options: string[],
}

export default function Dropdown({ label, options }: DropdownProps) {
    return (
        <div className={"flex flex-col items-center bottom-10 left-0 bg-red w-100 h-4/6"}>
            <p className="bold text-xl font-bold"> {label} </p>
            <ul className="flex flex-col items-center">
                {options.map(option => {
                    return (<DropdownItem key={option} linkTo={option} />)
                })}
            </ul>
        </div>
    )
}