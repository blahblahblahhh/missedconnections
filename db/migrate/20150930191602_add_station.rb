class AddStation < ActiveRecord::Migration
  def change
    add_column :connections, :station, :string
  end
end
