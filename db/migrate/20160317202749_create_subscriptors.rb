class CreateSubscriptors < ActiveRecord::Migration
  def change
    create_table :subscriptors do |t|
      t.string :name
      t.string :mail

      t.timestamps null: false
    end
  end
end
