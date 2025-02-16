import React, { useState, useEffect } from "react";

export default function Component  () {
    const [isDirty, setIsDirty] = useState(false);

    useEffect(() => {
        const handleBeforeUnload = (event) => {
            if (isDirty) {
                event.preventDefault();
                event.returnValue = "Are you sure you want to leave? Changes may not be saved.";
            }
        };
        window.addEventListener("beforeunload", handleBeforeUnload);
        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [isDirty]);

    return (
        <>
            <b>Try to close this tab now!</b>
            <p>Unsaved Changes: {`${isDirty}`}</p>
            <button onClick={() => setIsDirty((prev) => !prev)}>
                {isDirty ? "Set Clean" : "Set Dirty"} , Submit
            </button>
        </>
    );
};
