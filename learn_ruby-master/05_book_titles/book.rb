LOWERCASE = ['and', 'over', 'the', 'in', 'of', 'a', 'an']
	def titleize(w)
		t = w.split.map { |x| 
		LOWERCASE.include?(x) ? x : x.capitalize }
		t.first.capitalize!
		t.join(' ')
	end

class Book
	def title=(t)
		@title = titleize(t)
	end

	def title
		@title
	end
end
