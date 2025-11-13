import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'

export default function Pricing() {
    return (
        <section className="py-16 md:py-32" id='pricing'>
            <div className="mx-auto max-w-6xl px-6">
                <div className="mx-auto max-w-2xl space-y-6 text-center">
                    <h1 className="text-balance text-4xl font-semibold lg:text-5xl">Un precio justo y transparente</h1>
                    <p>Accede a asesoría de calidad sin costos ocultos.</p>
                </div>

                <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-3">
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-medium">Gratis</CardTitle>

                            <span className="my-3 block text-2xl font-semibold">$0 / mes</span>

                            <CardDescription className="text-sm">Por Usuario</CardDescription>
                            <Button
                                asChild
                                variant="outline"
                                className="mt-4 w-full">
                                <Link href="">Comenzar</Link>
                            </Button>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {['Acceso limitado al Asistente IA', 'Análisis y resumen de tu caso'].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="relative">
                        <span className="bg-linear-to-br/increasing absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full from-blue-400 to-violet-500 px-3 py-1 text-xs font-medium ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-gray-950/5">Popular</span>

                        <CardHeader>
                            <CardTitle className="font-medium">Pro</CardTitle>

                            <span className="my-3 block text-2xl font-semibold">$10.000 / mes</span>

                            <CardDescription className="text-sm">Por Usuario</CardDescription>

                            <Button
                                asChild
                                className="mt-4 w-full">
                                <Link href="">Comenzar</Link>
                            </Button>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {['Acceso ilimitado al Asistente IA', 'Conexión con hasta 3 abogados', 'Recepción de propuestas'].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="font-medium">Abogado</CardTitle>

                            <span className="my-3 block text-2xl font-semibold">$19.990 / mes</span>

                            <CardDescription className="text-sm">Por Usuario</CardDescription>

                            <Button
                                asChild
                                variant="outline"
                                className="mt-4 w-full">
                                <Link href="">Comenzar</Link>
                            </Button>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {['Acceso ilimitado al Asistente IA', 'Prioridad en Casos', 'Pago por Adelantado'].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
