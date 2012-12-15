class Team < ActiveRecord::Base
	validates :name,  :presence => true
  	validates :wins, :numericality => {:greater_than => -1}
  	validates :losses, :numericality => {:greater_than => -1}

	def win_percentage
    	(((self.wins.to_f)/(self.wins.to_f + self.losses.to_f)*100).to_i).to_f/100
  	end 

end
