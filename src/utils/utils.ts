
// function date -> 2 Aug 2023
export const getDateInReqFormat = (date: Date, month: "numeric" | "2-digit" | "short" | "long" | "narrow" | undefined) => {
    
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month, day: '2-digit' };
    return date.toLocaleDateString('en-US', options);
}

