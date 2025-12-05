"use client";

export default function SubmitButton({classNameForButton, setSubmitted}) {

    return (
        <button className={classNameForButton} onClick={async ()=> await setSubmitted(true)} title="Submit">
            <p>Submit</p>
        </button>
    )
}