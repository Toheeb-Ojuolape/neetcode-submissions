class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        result: List[int] = []
        for val in tokens:
            if val == '+':
                numSum = result[-2] + result[-1]
                result.pop()
                result.pop()
                result.append(numSum)
            elif val == '-':
                numDiff = result[-2] - result[-1]
                result.pop()
                result.pop()
                result.append(numDiff)
            elif val == '*':
                numMultiply = result[-2] * result[-1]
                result.pop()
                result.pop()
                result.append(numMultiply)
            elif val == '/':
                numDiv = int(result[-2] / result[-1])
                result.pop()
                result.pop()
                result.append(numDiv)
            else:
                result.append(int(val))

        return sum(result)
        