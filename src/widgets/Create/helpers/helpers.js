export const getObject = () => JSON.parse(localStorage.getItem('objectItem'))

export const setObject = obj => {
    localStorage.setItem('objectItem', JSON.stringify(obj))
}
export const removeObject = () => {
    localStorage.removeItem('objectItem')
}
export const getSavedObject = () => JSON.parse(localStorage.getItem('SavedObject'))

export const setSavedObject = obj => {
    localStorage.setItem('SavedObject', JSON.stringify(obj))
}
export const removeSavedObject = () => {
    localStorage.removeItem('SavedObject')
}
