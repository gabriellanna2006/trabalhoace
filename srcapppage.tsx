"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, AlertTriangle, Eye, Lock, Search } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Shield className="h-4 w-4" />
                Sistema Oficial de Denúncias
              </div>
              
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Fale pelos Animais
              </h1>
              
              <p className="mb-8 text-lg text-muted-foreground md:text-xl">
                Sistema profissional de denúncia anônima contra violência animal em Raul Soares - MG. 
                Sua voz pode salvar uma vida. Denuncie de forma segura e confidencial.
              </p>
              
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="text-lg">
                  <Link href="/denunciar">
                    <AlertTriangle className="mr-2 h-5 w-5" />
                    Fazer Denúncia Agora
                  </Link>
                </Button>
                
                <Button asChild variant="outline" size="lg" className="text-lg">
                  <Link href="/denuncia">
                    <Search className="mr-2 h-5 w-5" />
                    Rastrear Denúncia
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 text-center text-3xl font-bold">Nossa Missão</h2>
              <p className="mb-8 text-center text-lg text-muted-foreground">
                Combater a violência contra animais através de um sistema moderno e eficiente 
                que garante o anonimato do denunciante e utiliza inteligência artificial 
                para análise rápida e priorização de casos críticos.
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-muted/50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">Como Funciona</h2>
            
            <div className="grid gap-8 md:grid-cols-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">100% Anônimo</h3>
                  <p className="text-muted-foreground">
                    Não coletamos nenhum dado pessoal. Sua identidade está completamente 
                    protegida em todas as denúncias.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <AlertTriangle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Denúncia Rápida</h3>
                  <p className="text-muted-foreground">
                    Sistema simples e intuitivo com assistente de IA para ajudar você 
                    a preencher todos os detalhes importantes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Análise Inteligente</h3>
                  <p className="text-muted-foreground">
                    IA analisa automaticamente cada denúncia, classificando por gravidade 
                    e sugerindo ações para resposta rápida.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Search className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Rastreamento</h3>
                  <p className="text-muted-foreground">
                    Acompanhe o status da sua denúncia em tempo real usando o número 
                    de protocolo fornecido.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold">Não Seja Cúmplice do Silêncio</h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Se você presenciou ou tem conhecimento de maus-tratos contra animais, 
                faça sua denúncia agora. Cada relato pode salvar uma vida.
              </p>
              <Button asChild size="lg" className="text-lg">
                <Link href="/denunciar">
                  Fazer Denúncia Anônima
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Legal Info */}
        <section className="border-t bg-muted/30 py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center text-sm text-muted-foreground">
              <p className="mb-2 font-semibold">Base Legal</p>
              <p>
                Lei Federal 9.605/98 (Lei de Crimes Ambientais) - Maus-tratos contra animais 
                configuram crime com pena de detenção de 3 meses a 1 ano, e multa.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}