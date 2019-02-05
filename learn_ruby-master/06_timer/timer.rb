class :: Timer
  attr_accessor :seconds

  def initialize(seconds = 0)
    @seconds = seconds
  end

  def padded(num)
    num = num.to_s
    num.length == 1 ? "0#{num}" : "#{num}"
  end

  def time_string
    seconds = @seconds
    mins = 0
    hours = 0

    if seconds == 0
      return "00:00:00"
    elsif seconds < 60
      return "00:00:#{padded(seconds)}"
    end

    while seconds > 59
      mins += 1
      seconds -= 60
      if mins > 59
         hours += 1
         mins -= 60
      end
    end#while
  return "#{padded(hours)}:#{padded(mins)}:#{padded(seconds)}"
  end
end