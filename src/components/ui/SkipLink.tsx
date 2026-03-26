type SkipLinkProps = {
    targetId: string;
};

export function SkipLink({ targetId }: SkipLinkProps) {
    return (
        <a href={`#${targetId}`} className="skip-link">
            Skip to main content
        </a>
    );
}