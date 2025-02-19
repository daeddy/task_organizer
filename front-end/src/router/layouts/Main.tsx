import { Outlet } from "react-router";

const PublicLayout = () => (
  <div className="flex pt-12">
    <header className="bg-background fixed inset-x-0 top-0 isolate z-10 flex shrink-0 items-center gap-2 border-b">
      <div className="flex h-12 w-full items-center gap-2 px-4">
        <h1 className="text-primary text-2xl font-bold">{"Public Layout"}</h1>
      </div>
    </header>
    <div className="flex flex-1">
      <main className="bg-background relative flex flex-1 p-4">
        <Outlet />
      </main>
    </div>
  </div>
);

export default PublicLayout;
