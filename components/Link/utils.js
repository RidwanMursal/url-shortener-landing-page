import styles from "./Link.module.css"

// Helper function which copies shortlink to users clipboard
const copyToClipboard = (e, shortLink) => {
    // Edit button text and class 
    e.target.textContent = "Copied"
    e.target.classList.remove(styles.btn) 
    e.target.classList.add(styles["btn-copied"])

    //Copy value to clipboard 
    navigator.clipboard.writeText(shortLink)
}

export {copyToClipboard}