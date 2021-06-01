export const requiredField = (value) => {
    if (value) return undefined;
    return "Поле обязательно для заполнения";
}

export const maxLengthCreator = (maxLength) => (value) =>{
    if (value.length > maxLength) return `Максимальная длина поля ${maxLength} символов`;
    return undefined;
}