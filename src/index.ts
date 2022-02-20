export class PalindromeChecker {
  private getReversedString(str: string) {
    return str
      .split('')
      .reverse()
      .join('');
  }

  private stripSpaces(str: string): string {
    return str.split(' ').join('');
  }

  isPalindrome(str: string): boolean {
    const reversed = this.getReversedString(str);
    return (
      this.stripSpaces(str).toLowerCase() ===
      this.stripSpaces(reversed).toLowerCase()
    );
  }
}
