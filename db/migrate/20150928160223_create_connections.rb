class CreateConnections < ActiveRecord::Migration
  def change
    create_table :connections do |t|
      t.string :message
      t.string :train
      t.string :user_id

      t.timestamps null: false
    end
  end
end
