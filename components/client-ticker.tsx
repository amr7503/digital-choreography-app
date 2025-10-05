"use client"

export function ClientTicker() {
  const clients = [
    "TechCorp",
    "FinanceHub",
    "DataStream",
    "CloudNine",
    "SecureBank",
    "PayFlow",
    "InvestPro",
    "CryptoVault",
  ]

  return (
    <section className="py-16 border-y border-border bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-sm uppercase tracking-wider text-muted-foreground">Trusted by Industry Leaders</h3>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex gap-16 scroll-ticker">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 text-2xl font-bold text-muted-foreground/50 hover:text-foreground transition-colors"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
