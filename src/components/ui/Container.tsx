import type { ElementType, PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren<{
    as?: ElementType;
    className?: string;
    [key: string]: unknown;
}>;

export function Container({
    as: Component = "div",
    className = "",
    children,
    ...rest
}: ContainerProps) {
    const classes = ["container", className].filter(Boolean).join(" ");

    return (
        <Component className={classes} {...rest}>
            {children}
        </Component>
    );
}