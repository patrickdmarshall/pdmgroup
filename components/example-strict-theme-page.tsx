export default function ExampleStrictThemePage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">PDM GROUP Strict Theme Example</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="border border-border bg-card p-6">
            <h2 className="text-xl font-bold mb-4">Card Element (3.9% white)</h2>
            <p className="text-muted-foreground mb-4">This is muted text at 63.9% white opacity.</p>
            <p className="text-white">This is primary text at 100% white.</p>
          </div>

          <div className="border border-border bg-secondary p-6">
            <h2 className="text-xl font-bold mb-4">Secondary Element (14.9% white)</h2>
            <p className="text-muted-foreground mb-4">This is muted text at 63.9% white opacity.</p>
            <p className="text-white">This is primary text at 100% white.</p>
          </div>
        </div>

        <div className="border border-border p-6 mb-12">
          <h2 className="text-2xl font-bold mb-4">Border Example (14.9% white)</h2>
          <p className="mb-4">This container demonstrates the border color at 14.9% white opacity.</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card p-4 border border-border">Nested card</div>
            <div className="bg-secondary p-4 border border-border">Nested secondary</div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Text Examples</h2>
          <p className="text-white mb-2">Primary text (100% white)</p>
          <p className="text-muted-foreground mb-2">Muted text (63.9% white)</p>
          <p className="text-secondary-foreground mb-2">Secondary text (100% white on secondary)</p>
        </div>
      </div>
    </div>
  )
}
