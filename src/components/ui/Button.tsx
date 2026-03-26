import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<
    ButtonHTMLAttributes<HTMLButtonElement>
>;

export function Button({
    children,
    className = "",
    type = "button",
    ...rest
}: ButtonProps) {
    const classes = ["button", className].filter(Boolean).join(" ");

    return (
        <button type={type} className={classes} {...rest}>
            {children}
        </button>
    );
}