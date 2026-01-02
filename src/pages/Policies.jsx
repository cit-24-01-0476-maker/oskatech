import Container from "../components/Container.jsx"
import SectionTitle from "../components/SectionTitle.jsx"
import { SITE } from "../config.js"

export default function Policies() {
  return (
    <Container className="py-10">
      <SectionTitle
        eyebrow="Trust"
        title="Policies"
        desc="Use this page to build trust and reduce disputes. Customize as needed."
      />

      <div className="space-y-4">
        <Block title="Legal sales only">
          {SITE.legalNote}
        </Block>

        <Block title="Delivery">
          Delivery time depends on product and customer response. We confirm availability before payment.
        </Block>

        <Block title="Refunds">
          Digital services/subscriptions usually can’t be refunded after activation. If we can’t deliver, we refund in full.
        </Block>

        <Block title="Privacy">
          We only collect information required to complete your order (e.g., email for subscription, device type for setup).
          We do not store passwords. If login is needed, we guide you through secure steps.
        </Block>
      </div>

      <div className="mt-8 text-xs text-slate-500">
        Important: If you become an authorized reseller, update your policy text accordingly.
      </div>
    </Container>
  )
}

function Block({ title, children }) {
  return (
    <div className="glass rounded-3xl p-5">
      <div className="text-base font-medium">{title}</div>
      <div className="mt-2 text-sm text-slate-300">{children}</div>
    </div>
  )
}
