class Utility {
    static getInputValue(elementId: string): string | undefined {
        const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementId);
        return inputElement.value;
    }
}