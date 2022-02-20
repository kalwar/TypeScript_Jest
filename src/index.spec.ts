import { PalindromeChecker } from './index';

describe('palindrome checker', () => {
  let palindromeChecker: PalindromeChecker;

  beforeEach(() => {
    palindromeChecker = new PalindromeChecker();
  });

  it('exits', () => {
    expect(palindromeChecker).toBeDefined();
  });

  it('should be able to tell when "madam" is a palindrome', () => {
    expect(palindromeChecker.isPalindrome('madam')).toBeTruthy();
  });

  it('should be able to tell that "Boss" isnt a palindrome', () => {
    expect(palindromeChecker.isPalindrome('Boss')).toBeFalsy();
  });

  it('should still detect palindrom even if the case if off', () => {
    expect(palindromeChecker.isPalindrome('Madam')).toBeTruthy();
  });

  it('should be able to tell that "Was it a rat I saw" is palindrome', () => {
    expect(palindromeChecker.isPalindrome('Was it a rat I saw')).toBeTruthy();
  });

  it('should be able to tell that "Never Odd or Even" is palindrome', () => {
    expect(palindromeChecker.isPalindrome('Never Odd or Even')).toBeTruthy();
  });
});
