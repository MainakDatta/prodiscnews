class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :poster
      t.text :content
      t.datetime :date

      t.timestamps
    end
  end
end
