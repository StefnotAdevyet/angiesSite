import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = PropsWithChildren<
    ButtonHTMLAttributes<HTMLButtonElement> & {
        variant?: ButtonVariant;
    }
>;

export function Button({
    children,
    className = "",
    type = "button",
    variant = "primary",
    ...rest
}: ButtonProps) {
    const classes = ["button", `button-${variant}`, className]
        .filter(Boolean)
        .join(" ");

    return (
        <button type={type} className={classes} {...rest}>
            {children}
        </button>
    );
}