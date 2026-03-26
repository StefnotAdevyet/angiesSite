import type { ElementType, PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
    as?: ElementType;
    className?: string;
    title?: string;
    titleId?: string;
    [key: string]: unknown;
}>;

export function Section({
    as: Component = "section",
    className = "",
    title,
    titleId,
    children,
    ...rest
}: SectionProps) {
    const classes = ["section", className].filter(Boolean).join(" ");

    return (
        <Component className={classes} aria-labelledby={title ? titleId : undefined} {...rest}>
            {title ? <h2 id={titleId}>{title}</h2> : null}
            {children}
        </Component>
    );
}