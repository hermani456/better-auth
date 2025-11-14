"use client";
import { Button } from "./ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const Logout = () => {
  const router = useRouter();
  const handleLogout = async () => {
    await authClient.signOut();
    toast.success("Sesión cerrada con éxito");
    router.push("/");
  };

  return (
    <Button className="cursor-pointer" variant="outline" onClick={handleLogout}>
      Cerrar sesión
    </Button>
  );
};

export default Logout;
