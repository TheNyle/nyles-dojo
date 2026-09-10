export const stringCalculator = (input: string) => {
    if(input === ''){
        return 0
    }

    const numberStrings = input.replace('\n',',').split(',')

    const total = numberStrings.reduce((a, b) => a += Number(b), 0);

    return total;
}
