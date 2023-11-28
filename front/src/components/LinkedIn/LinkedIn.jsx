import IconLinkedIn from './IconLinkedIn'
import ExternalLinkIcon from './ExternalLinkIcon'

export default function LinkedIn() {
    return (
        <a href="https://www.linkedin.com/in/jhonathan-cutisaca/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
            className="flex flex-col justify-center items-center bg-[#0A66C2] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm cursor-pointer hover:scale-[103%] transition duration-300 ease-in-out">
            <ExternalLinkIcon></ExternalLinkIcon>
            <IconLinkedIn></IconLinkedIn>
        </a>
    )
}