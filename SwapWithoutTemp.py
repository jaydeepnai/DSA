def swap_without_temp(a, b):
    a, b = b, a
    return a, b

# Example usage
x = 5
y = 10

x, y = swap_without_temp(x, y)

print("After swapping: x =", x, ", y =", y)


def swap_without_temp(a, b):
    a = a + b
    b = a - b
    a = a - b
    return a, b

# Example usage
x = 15
y = 10

x, y = swap_without_temp(x, y)

print("After swapping: x =", x, ", y =", y)