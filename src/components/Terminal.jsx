import { useEffect, useRef, useState } from 'react'

const INITIAL_LINES = [
  { type: 'system', text: 'yohanes.dev shell [interactive mode]' },
  { type: 'system', text: 'Type "help" to see available commands.' },
]

const COMMANDS = {
  help: [
    'Available commands:',
    '  help - Show this command list',
    '  ls - List available files',
    '  whoami - Display user information',
    '  cat about.txt - Read a short introduction',
    '  date - Show the current date',
    '  clear - Clear the terminal',
  ],
  ls: ['about.txt', 'contact.txt', 'credentials/', 'projects/'],
  whoami: ['yohanes - cybersecurity enthusiast and web developer'],
  'cat about.txt': [
    'Hello, I am Yohanes.',
    'I build web applications, explore offensive security, and learn by breaking things carefully.',
  ],
}

export default function Terminal() {
  const [history, setHistory] = useState(INITIAL_LINES)
  const [command, setCommand] = useState('')
  const inputRef = useRef(null)
  const outputRef = useRef(null)

  useEffect(() => {
    outputRef.current?.scrollTo({ top: outputRef.current.scrollHeight, behavior: 'smooth' })
  }, [history])

  const runCommand = (value) => {
    const normalizedCommand = value.trim().toLowerCase()
    if (!normalizedCommand) return

    if (normalizedCommand === 'clear') {
      setHistory([])
      setCommand('')
      return
    }

    const output = COMMANDS[normalizedCommand]
    const responseLines = output
      ? output.map((text) => ({ type: 'result', text }))
      : [
          { type: 'error', text: `command not found: ${normalizedCommand}` },
          { type: 'error', text: 'Type "help" for a list of available commands.' },
        ]

    setHistory((currentHistory) => [
      ...currentHistory,
      { type: 'command', text: normalizedCommand },
      ...responseLines,
    ])
    setCommand('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    runCommand(command)
  }

  return (
    <main className="ctf-page px-6 pb-20 pt-28 sm:px-12">
      <section className="terminal-window mx-auto w-full max-w-4xl" aria-label="Interactive terminal">
        <div className="terminal-bar">
          <div className="terminal-lights" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <span className="terminal-title">guest@yohanes.dev: ~</span>
        </div>

        <div
          ref={outputRef}
          className="terminal-output"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((line, index) => (
            <div key={`${line.text}-${index}`} className={`terminal-line terminal-${line.type}`}>
              {line.type === 'command' && <span className="terminal-prompt">$ </span>}
              {line.text}
            </div>
          ))}
          <form className="terminal-form" onSubmit={handleSubmit}>
            <label htmlFor="terminal-command" className="terminal-prompt">$</label>
            <input
              ref={inputRef}
              id="terminal-command"
              type="text"
              value={command}
              onChange={(event) => setCommand(event.target.value)}
              autoComplete="off"
              spellCheck="false"
              aria-label="Terminal command"
            />
          </form>
        </div>
      </section>
    </main>
  )
}
