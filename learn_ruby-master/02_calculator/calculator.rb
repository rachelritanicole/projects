#write your code here
def add(x,y)
	x + y
end

def subtract(x,y)
	x - y
end

def sum(a)
	s = 0
	a.each do |x|
		s += x
	end
	s
end

def  multiply(x,y)
	x*y
end

def multiple(a)
	m = 1
	a.each do |x|
		m *= x
	end
	m
end

def power(x,y)
	x**y
end