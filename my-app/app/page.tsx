import Image from "next/image";
import Link from "next/link";

const CTAButton = ({
  href,
  children,
  variant = "primary",
  icon,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`rounded-full border border-solid transition-colors flex items-center justify-center gap-2 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto ${
      variant === "primary"
        ? "bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] border-transparent"
        : "border-black/[.08] dark:border-white/[.145] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent"
    }`}
  >
    {icon}
    {children}
  </Link>
);

const FooterLink = ({
  href,
  children,
  iconSrc,
  iconAlt,
}: {
  href: string;
  children: React.ReactNode;
  iconSrc: string;
  iconAlt: string;
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
  >
    <Image aria-hidden src={iconSrc} alt={iconAlt} width={16} height={16} />
    {children}
  </Link>
);

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-geist-sans">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-geist-mono space-y-2">
          <li>
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-geist-mono font-semibold">
              app/page.tsx
            </code>
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row w-full sm:w-auto">
          <CTAButton
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            variant="primary"
            icon={
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logo"
                width={20}
                height={20}
              />
            }
          >
            Deploy now
          </CTAButton>
          
          <CTAButton
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            variant="secondary"
          >
            Read our docs
          </CTAButton>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <FooterLink
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          iconSrc="/file.svg"
          iconAlt="Learn icon"
        >
          Learn
        </FooterLink>
        
        <FooterLink
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          iconSrc="/window.svg"
          iconAlt="Examples icon"
        >
          Examples
        </FooterLink>
        
        <FooterLink
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          iconSrc="/globe.svg"
          iconAlt="Next.js icon"
        >
          Go to nextjs.org →
        </FooterLink>
      </footer>
    </div>
  );
}