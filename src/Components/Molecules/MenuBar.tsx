"use client"
import { ReactNode, useState } from "react"
import BasicButton from "../Atoms/BasicButton"
import Dropdown from "./Dropdown"

type MenuItems = ReactNode[]

type MenuBarProps = {
    opened: boolean,
    items: MenuItems
}
export default function MenuBar() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="fixed bottom-0 w-full p-3 bg-pl-primary">
            {isOpen &&
                <Dropdown
                    label={"Where to?"}
                    options={[
                        "Home",
                        "Dashboard",
                        "User",
                        "About"
                    ]} />}
            <header className="flex justify-between items-center">
                <span> LOGO </span>
                <BasicButton
                    theme={"Custom"}
                    customTheme=""
                    text={"Menu"}
                    size={"Medium"}
                    action={toggleOpen} />
            </header>
        </div>
    )
}
