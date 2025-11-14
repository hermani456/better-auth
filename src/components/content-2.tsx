import { CircleCheckBig, Cpu, Zap } from "lucide-react";
import Image from "next/image";

export default function ContentSection() {
  return (
    <section className="pt-16 md:pt-32" id="lawyers">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative flex flex-col lg:flex-row justify-between items-center">
          <div className="relative z-10 space-y-4 md:w-1/2">
            <div>
              <h2 className="text-2xl font-semibold bg-gradient-to-br from-blue-400 to-violet-500 bg-clip-text text-transparent mb-10">
                Para Abogados
              </h2>
              <h2 className="relative z-10 lg:w-[600px] text-4xl font-medium lg:text-5xl">
                Deja que los clientes correctos te encuentren
              </h2>
            </div>
            <p>
              Únete a nuestra red y recibe casos pre-filtrados y resumidos por
              IA, que coinciden exactamente con tu especialidad.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CircleCheckBig className="size-4" />
                  {/* <h3 className="text-sm font-medium">Faaast</h3> */}
                </div>
                <p className="text-muted-foreground text-sm">
                  Recibe casos calificados y resumidos.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CircleCheckBig className="size-4" />
                  {/* <h3 className="text-sm font-medium">Powerful</h3> */}
                </div>
                <p className="text-muted-foreground text-sm">
                  Tú tienes el control: acepta o rechaza casos.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CircleCheckBig className="size-4" />
                  {/* <h3 className="text-sm font-medium">Powerful</h3> */}
                </div>
                <p className="text-muted-foreground text-sm">
                  Tú tienes el control: acepta o rechaza casos.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CircleCheckBig className="size-4" />
                  {/* <h3 className="text-sm font-medium">Powerful</h3> */}
                </div>
                <p className="text-muted-foreground text-sm">
                  Tú tienes el control: acepta o rechaza casos.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="border-border/50 relative rounded-2xl border border-dotted p-2">
              <Image
                src="/catolino.png"
                className="rounded-[12px] dark:block"
                alt="cute lawyer"
                width={480}
                height={560}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
