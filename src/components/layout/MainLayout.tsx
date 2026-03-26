import type { PropsWithChildren } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SkipLink } from "../ui/SkipLink";

export function MainLayout({ children }: PropsWithChildren) {
    return (
        <>
            <SkipLink targetId="main-content" />
            <Header />
            <main id="main-content" tabIndex={-1}>
                {children}
            </main>
            <Footer />
        </>
    );
}