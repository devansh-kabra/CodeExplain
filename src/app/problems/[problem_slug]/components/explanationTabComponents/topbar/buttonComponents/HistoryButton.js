import { ClockIcon } from "@heroicons/react/24/solid"

export default function HistoryButton({ classNameForButton, setHistoryPage }) {
    return (
        <button className={classNameForButton} onClick={() => setHistoryPage(true)} title="History">
            <ClockIcon className="h-6 w-6 "/>
        </button>
    )
}