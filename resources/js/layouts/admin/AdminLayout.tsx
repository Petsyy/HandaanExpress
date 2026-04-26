

type AdminLayoutProps = {
    children: React.ReactNode;
};

export default function AdminLayout({ children }: AdminLayoutProps) {
    return (
        <>
            <h1>Admin Layout</h1>
            {children}
        </>
    );
}