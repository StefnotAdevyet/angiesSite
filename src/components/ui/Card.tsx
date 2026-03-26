import type { ElementType, PropsWithChildren } from "react";

type CardProps = PropsWithChildren<{
    as?: ElementType;
    className?: string;
    title?: string;
    titleId?: string;
    [key: string]: unknown;
}>;

export function Card({
    as: Component = "article",
    className = "",
    title,
    titleId,
    children,
    ...rest
}: CardProps) {
    const classes = ["card", className].filter(Boolean).join(" ");

    return (
        <Component className={classes} aria-labelledby={title ? titleId : undefined} {...rest}>
            {title ? <h3 id={titleId} className="card-title">{title}</h3> : null}
            {children}
        </Component>
    );
}