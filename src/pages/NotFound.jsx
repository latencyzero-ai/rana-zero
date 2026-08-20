import Button from '../components/ui/Button'
import { Container } from '../components/ui/Layout'

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <span className="font-mono text-[13px] uppercase tracking-[0.1em] text-muted">404</span>
      <h1 className="mt-3 text-[32px] font-extrabold text-ink">This route isn&rsquo;t deployed.</h1>
      <p className="mt-3 max-w-md text-[15px] text-body">
        The page you&rsquo;re looking for doesn&rsquo;t exist yet. Head back to see what Zero can do.
      </p>
      <Button to="/" className="mt-7">
        Back to Zero
      </Button>
    </Container>
  )
}
