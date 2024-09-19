import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <h1 className="font-bold text-3xl">in.orbit</h1>
    </div>
  )
}
