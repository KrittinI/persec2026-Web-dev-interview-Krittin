export function isValidParentheses(str: string): boolean {
  let stack: Array<string> = [];
  const pairs: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const ch of str) {
    switch (ch) {
      case "{":
      case "(":
      case "[":
        stack.push(ch);
        break;
      case ")":
      case "]":
      case "}":
        if (stack.pop() !== pairs[ch]) {
          return false;
        }
        break;
      default:
        break;
    }
  }

  if (stack.length === 0) {
    return true;
  }

  return false;
}
