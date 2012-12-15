class Post < ActiveRecord::Base
  validates :author,  :presence => true
  validates :title, :presence => true,
                    :length => { :minimum => 5 }
  validates :content,  :presence => true
  has_many :comments, :dependent => :destroy, :order => "created_at DESC"

end
