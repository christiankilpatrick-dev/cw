# Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
# [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


def grow(x) 
    x.reduce(:*)
end


def grow2(x) 
    i = 0
    mult = 1
    while i < x.size
      mult = mult * x[i]
      i += 1
    end
    mult
end

puts grow([1, 2, 3]), 6
puts grow([4, 1, 1, 1, 4]), 16
puts grow([2, 2, 2, 2, 2, 2]), 64