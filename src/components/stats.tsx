export default function StatsSection() {
    return (
        <section className="py-12 md:py-20" id="stats">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Confianza en Números</h2>
                    <p>Nuestra plataforma ya está marcando la diferencia.</p>
                </div>

                <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">+5000</div>
                        <p>Consultas Resueltas</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold bg-gradient-to-br from-blue-400 to-violet-500 bg-clip-text text-transparent">+200</div>
                        <p>Abogados Especialistas</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">&lt;24h</div>
                        <p>1ra Propuesta de Abogado</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
