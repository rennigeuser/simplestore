import { Header } from "@shared/ui/header";

type Props = React.PropsWithChildren;

export default function Layout({ children }: Props) {
  return (
    <div className="w-screen min-h-screen flex flex-col bg-white dark:bg-[#27272a]">
      <Header />
      <main>
        <div className="container mx-auto pt-4">{children}</div>
      </main>
    </div>
  );
}
