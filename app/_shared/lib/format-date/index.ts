export default function formatDate(date: string | Date) {
    if (typeof date === 'string') {
        date = new Date(date)
    }

    return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(date)
}
