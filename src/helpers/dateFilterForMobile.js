export default function dateFilterMobile(value) {
    const options = {}
    options.month = '2-digit'
    options.day = '2-digit'

    return new Intl.DateTimeFormat('ru-RU', options).format(new Date(value))
}
