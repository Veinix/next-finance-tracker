import Link from "next/link";

type DropdownItemProps = {
    linkTo: string,
}

export default function DropdownItem({ linkTo }: DropdownItemProps) {
    return (
        <Link
            href={linkTo.toLowerCase()}
            className=""
        >{linkTo}</Link>
    )
}