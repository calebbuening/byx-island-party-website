import HomeButton from '@/components/HomeButton'

export default function TicketsPage() {
  return (
    <div className="island-content-page flex min-h-screen items-center justify-center px-4 text-center">
      <div className="island-content-container max-w-3xl">
        <div className="text-left">
          <HomeButton />
        </div>
        <p className="text-2xl font-extrabold tracking-wide text-cyan-950">
          THIS PAGE WILL BE THE TICKET PROVIDER WEBSITE
        </p>
      </div>
    </div>
  )
}
