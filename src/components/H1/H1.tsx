type h1Props = {
  children: React.ReactNode
}

export default function H1({ children }: h1Props) {
  return (
    <h1 className="text-primary font-black text-2xl leading-8">{children}</h1>
  )
}
