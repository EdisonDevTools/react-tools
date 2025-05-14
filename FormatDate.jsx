/**
 * FormatDate Component - Formats a given date string into a human-readable format.
 *
 * Features:
 * ✅ Detects if the date contains time ("T") and processes it accordingly.
 * ✅ Extracts Year, Month, Day, Hour, Minute, and Second.
 * ✅ Handles UTC conversion to avoid timezone discrepancies.
 * ✅ Supports multiple languages:
 *      - "es" → dd/mm/yyyy
 *      - "en" → mm/dd/yyyy (U.S. format)
 * ✅ Returns the output based on the "format" parameter:
 *      - "D" → Date only
 *      - "T" → Time only
 *      - "DT" → Date & Time
 */

export default function FormatDate({ date, format, language = "en" }) {
    if (!date) return <span>Error: Date not provided</span>;

    // Check if the date contains "T" (indicating time)
    const hasTime = date.includes("T");

    // Split date and time if necessary
    const [datePart, timePart] = date.split("T");

    // Extract Year, Month, and Day with UTC to avoid offsets
    const dateObj = new Date(`${datePart}T00:00:00Z`);
    const day = String(dateObj.getUTCDate()).padStart(2, "0");
    const month = String(dateObj.getUTCMonth() + 1).padStart(2, "0");
    const year = dateObj.getUTCFullYear();

    // If time exists, use it; otherwise, default to "00:00:00"
    let hour = "00",
        minute = "00",
        second = "00";
    if (hasTime) {
        [hour, minute, second] = timePart
            .split(":")
            .map((t) => t.padStart(2, "0"));
    }

    // Date format based on language
    const formattedDate =
        language === "es"
            ? `${day}/${month}/${year}`
            : `${month}/${day}/${year}`;
    const formattedTime = `${hour}:${minute}:${second.split(".")[0]}`;
    const formattedDateTime = `${formattedDate}, ${formattedTime}`;

    return (
        <span>
            {format === "D"
                ? formattedDate
                : format === "T"
                ? formattedTime
                : format === "DT"
                ? formattedDateTime
                : "Invalid format"}
        </span>
    );
}
