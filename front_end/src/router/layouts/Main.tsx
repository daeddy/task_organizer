import { Outlet } from "react-router";

const PublicLayout = () => (
  <div className="bg-background text-foreground flex h-screen pt-16">
    <header className="bg-background text-secondary-foreground fixed inset-x-0 top-0 isolate z-10 flex shrink-0 items-center gap-2 border-b">
      <div className="flex h-16 w-full items-center gap-2 px-6">
        <h1>{"Task Organizer"}</h1>
      </div>
    </header>
    <main className="bg-secondary relative flex-1 p-4">
      <div className="bg-background rounded-lg border">
        <Outlet />
      </div>
    </main>
  </div>
);

export default PublicLayout;
