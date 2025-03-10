import { pets } from "@/data";

import { Logo } from "@/components/Header/Logo";
import { SearchForm } from "@/components/Header/SearchForm";
import { UserOptionsPopover } from "@/components/Header/UserOptionsPopover";

import { HeaderActions } from "./HeaderActions";
import { HeaderHider } from "./HeaderHider";

export function Header() {
  const currentPet = pets[0];

  return (
    <HeaderHider className="sticky top-0 z-50 w-full transition-all">
      <header className="border-b bg-white shadow-md shadow-purple-100 backdrop-blur supports-[backdrop-filter]:bg-background dark:bg-[#10061d] dark:shadow-none">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Logo />
          <SearchForm />
          <div className="flex items-center gap-4">
            <HeaderActions />
            <UserOptionsPopover currentPet={currentPet} />
          </div>
        </div>
      </header>
    </HeaderHider>
  );
}
