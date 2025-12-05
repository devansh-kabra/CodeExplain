import Image from "next/image";
export default function LeetcodeButton({classNameForButton, leetcode_link}) {

    return (
        <a target="_blank" rel="noopener noreferrer" href={leetcode_link} title="Solve" className={leetcode_link ? "":"invisible"}>
            <button className={classNameForButton}>
                <Image
                    src="/LeetCode_logo.png"
                    alt="LeetCode Redirect"
                    fill
                    className="object-cover object-center p-1 "
                />
            </button> 
        </a>
    )
}