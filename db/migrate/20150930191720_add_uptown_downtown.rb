class AddUptownDowntown < ActiveRecord::Migration
  def change
    add_column :connections, :direction, :string
  end
end
