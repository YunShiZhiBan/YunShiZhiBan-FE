import Link from "next/link";

type RepositoryLinkProps = {
  title: string;
  Icon: React.ElementType;
  href: string;
};

const RepositoryLink: React.FC<RepositoryLinkProps> = ({
  title,
  Icon,
  href,
}) => (
  <div className="flex items-center gap-1 text-[1.5vh] font-normal">
    <Icon className="h-[2vh] w-[2vh] text-gray-700" />
    <Link
      href={href}
      passHref
      className="text-[1.5vh] hover:underline"
      aria-label={`Link to ${title}`}
    >
      {title}
    </Link>
  </div>
);

export default RepositoryLink;
