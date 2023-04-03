export default function dateFilter(value) {
    const options = {}
    options.month = 'long'
    options.day = '2-digit'
    options.year = 'numeric'

    return new Intl.DateTimeFormat('ru-RU', options).format(new Date(value))
}
