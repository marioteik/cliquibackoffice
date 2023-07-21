import { DateAndTime } from "@/components/atoms/DateAndTime";
import { Search } from "@/components/molecules/Search";
import { Sidebar } from "@/components/molecules/Sidebar";
import { UserNav } from "@/components/molecules/UserNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="block min-h-screen bg-background">
        <div className="grid grid-cols-5 xl:grid-cols-10 2xl:grid-cols-12 justify-stretch">
          <Sidebar className="block xl:col-span-2 2xl:col-span-2" />

          <div className="col-span-3 lg:col-span-4 xl:col-span-8 2xl:col-span-10 lg:border-l min-h-screen">
            {/* Navigation */}
            <div className="flex h-16 items-center px-6 border-b">
              <Search />

              <div className="ml-auto flex items-center space-x-4">
                <DateAndTime />
              </div>
            </div>

            {/* Content */}
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
