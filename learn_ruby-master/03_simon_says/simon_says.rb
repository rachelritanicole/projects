#write your code here

LOWERCASE = ['and', 'over', 'the']

def echo(x)
	x
end

def shout(x)
	x.upcase
end

def repeat(x,l=2)
	l.times.collect { x }.join(' ')
end

def start_of_word(w,n)
	w[0,n]
end

def first_word(w)
	w.split.first
end

def titleize(w)
	t = w.split.map { |x| 
	LOWERCASE.include?(x) ? x : x.capitalize }
	t.first.capitalize!
	t.join(' ')
end