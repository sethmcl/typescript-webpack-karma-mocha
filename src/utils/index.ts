export function print(message: string) : void {
    console.log(`>> ${message} <<`);
}

export function repeat(text: string, count: number) : string {
    return text.repeat(count);
}