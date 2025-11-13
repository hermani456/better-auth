import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Chat from "@/components/chat";
import globe from "../../../public/globe.svg";
import { ThemeSwitcher } from "@/components/kibo-ui/theme-switcher";

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }
  return (
    <SidebarProvider>
      <AppSidebar user={session.user} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Chat Legal
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Abogado Virtual</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="ml-auto p-4">
            <ThemeSwitcher />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <Chat img={session.user.image ? session.user.image : globe} />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

// import Logout from "@/components/logout";
// import { auth } from "@/lib/auth";
// import { headers } from "next/headers";
// import { redirect } from "next/navigation";
// import { Avatar } from "@/components/ui/avatar";
// import Chat from "@/components/chat";
// import Image from "next/image";
// import globe from "../../../public/globe.svg";

// export default async function DashboardPage() {
//   const session = await auth.api.getSession({
//     headers: await headers(),
//   });

//   if (!session) {
//     redirect("/login");
//   }

//   return (
//     <div>
//       <h1>Welcome {session.user.name}</h1>
//       <Avatar>
//         <Image
//           src={session.user.image ? session.user.image : globe}
//           alt="Profile Picture"
//           width={100}
//           height={100}
//         />
//       </Avatar>
//       <Logout />
//       <Chat img={session.user.image ? session.user.image : globe} />
//       <AppSidebar />
//     </div>
//   );
// }
