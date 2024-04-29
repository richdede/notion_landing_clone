
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
         <>
            <Link href={"/"}>
                <Image
                    src="/logos/logo.svg"
                    alt="logo"
                    width={40}
                    height={40}
                    className="w-[34px]"
                    />
            </Link>
    </> 
    );
}
 
export default Logo;