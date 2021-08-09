import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import { cloneElement } from "react";
import { ReactElement } from "react";


interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
    pageActive?: boolean
}

export function ActiveLink({children, pageActive,...rest}: ActiveLinkProps) {
    const { asPath } = useRouter()

    const className = rest.href === asPath || pageActive ? 'styles_active__3zqNB' : ''

    return (
        <Link {...rest}>
            {cloneElement(children, {
                className,
            })}
        </Link>
    )
}